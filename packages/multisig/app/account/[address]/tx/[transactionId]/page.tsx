"use client";

import { accountAtom } from "@/atoms/accountAtom";
import { Typography } from "@/components/Typography";
import { supportedChainInfos } from "@/constants/supportedChainInfos";
import {
  CREATE_SIGNATURE,
  type CreateSignatureInput,
  type CreateSignatureResponse,
  UPDATE_SIGNATURE,
  type UpdateSignatureInput,
  type UpdateSignatureResponse,
} from "@/graphql/mutations/signature";
import {
  GET_TRANSACTION_BY_TRANSACTION_ID,
  type TransactionResponse,
} from "@/graphql/queries/transaction";
import { useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { osmosisLCDClient, osmosisMsgs } from "@chain-sources/osmosis";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import Image from "next/image";
import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { type MultisigThresholdPubkey } from "@cosmjs/amino";
import { escapeHTML } from "@common/utils";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { StdFee } from "@keplr-wallet/types";
import {
  SigningStargateClient,
  StargateClient,
  makeMultisignedTxBytes,
} from "@cosmjs/stargate";
import {
  UPDATE_TRANSACTION_TX_HASH,
  type UpdateTransactionTxHashInput,
  type UpdateTransactionTxHashResponse,
} from "@/graphql/mutations/transaction";
import { JsonViewer } from "@textea/json-viewer";
import type { Account } from "@/types/Account";

export const dynamic = "force-dynamic";

export default function Transaction() {
  const params = useParams();
  const accounts = useAtomValue(accountAtom);

  const [createSignature, { loading }] = useMutation<
    CreateSignatureResponse,
    CreateSignatureInput
  >(CREATE_SIGNATURE);

  const [updateSignature, { loading: updateLoading }] = useMutation<
    UpdateSignatureResponse,
    UpdateSignatureInput
  >(UPDATE_SIGNATURE);

  const [updateTransactionTxHash, { loading: txLoading }] = useMutation<
    UpdateTransactionTxHashResponse,
    UpdateTransactionTxHashInput
  >(UPDATE_TRANSACTION_TX_HASH);

  const { data: transactionData, refetch: refetchTransactionData } =
    useSuspenseQuery<TransactionResponse>(GET_TRANSACTION_BY_TRANSACTION_ID, {
      variables: {
        transactionId: parseInt(params.transactionId, 10),
      },
      skip: params?.transactionId === undefined,
      fetchPolicy: "network-only",
    });

  const transaction = transactionData?.transactionByTransactionId;
  const isBroadcasted = transaction?.txHash !== null;
  const accountAddress = transaction?.MultisigAccount.address;

  const { data: accountData } = useQuery({
    queryKey: ["osmosisAccountQuery", { address: accountAddress! }],
    queryFn: async () => {
      const { cosmos } = await osmosisLCDClient();
      return (await cosmos.auth.v1beta1.account({
        address: accountAddress!,
      })) as unknown as Account;
    },
    enabled: accountAddress !== undefined,
  });
  const signatures = transaction?.signatures ?? [];
  const threshold = transaction?.MultisigAccount.threshold;

  const currentSigners = signatures.length;
  const isNotEnoughSigners = currentSigners < (threshold ?? 0);

  const bech32Prefix = transaction?.MultisigAccount.bech32Prefix;
  const currentAccount = accounts?.find(
    (account) => Object.keys(account)[0] === bech32Prefix
  );
  const currentChain = supportedChainInfos.find(
    (chain) => chain.bech32_prefix === bech32Prefix
  );
  const account =
    currentAccount !== undefined ? Object.values(currentAccount)[0] : undefined;
  const restEndpoint = currentChain?.apis?.rest[2];

  const isAchievingThreshold =
    threshold !== undefined ? threshold <= currentSigners : false;

  const isMySignatureExist =
    signatures.find(
      (signature) => signature.signerAddress === account?.bech32Address
    ) !== undefined;

  const handleTxSign = async () => {
    if (
      bech32Prefix === undefined ||
      window?.keplr === undefined ||
      window?.getOfflineSignerOnlyAmino === undefined ||
      account === undefined ||
      currentChain === undefined ||
      transaction === undefined ||
      restEndpoint === undefined ||
      accountData === undefined
    ) {
      return;
    }

    try {
      const offlineSigner = window.getOfflineSignerOnlyAmino(
        currentChain.chain_id
      );
      const signerAddress = account.bech32Address;

      const txDataJSON = JSON.parse(transaction.txDataJSON);
      const messages: any[] | undefined = txDataJSON?.body?.messages;
      const stdFee: StdFee = {
        ...txDataJSON?.auth_info?.fee,
        gas: txDataJSON?.auth_info?.fee?.gas_limit ?? "0",
      };

      const memo: string | undefined =
        txDataJSON?.body?.memo !== undefined
          ? escapeHTML(txDataJSON?.body?.memo)
          : undefined;

      if (messages === undefined || memo === undefined) {
        return;
      }

      let protoMsgs: { typeUrl: string; value: any }[] = [];
      if (bech32Prefix === "osmo") {
        const { proto } = messages.reduce(
          (acc, msg) => {
            const type = msg["@type"] as string;
            const osmosisMsg = osmosisMsgs[type as keyof typeof osmosisMsgs];

            if (osmosisMsg === undefined) {
              throw new Error("Invalid message type");
            }

            const msgType: string | undefined = msg["@type"];

            if (msgType === undefined) {
              throw new Error("Invalid message type");
            }
            const values = Object.entries(msg).reduce((acc, [key, value]) => {
              if (key !== "@type") {
                acc[key] = value;
              }
              return acc;
            }, {} as Record<string, any>);

            const proto = osmosisMsg.proto.fromJSON(
              osmosisMsg.amino.fromAmino(values)
            );

            return {
              proto: [...acc.proto, proto],
            };
          },
          {
            proto: [],
          } as {
            proto: { typeUrl: string; value: any }[];
          }
        );
        protoMsgs = proto;
      }

      const signingClient = await SigningStargateClient.offline(offlineSigner);

      const signerData = {
        accountNumber: parseInt(accountData.account.account_number, 10),
        sequence: parseInt(accountData.account.sequence, 10),
        chainId: currentChain.chain_id,
      };

      const { bodyBytes, signatures: txSignatures } = await signingClient.sign(
        signerAddress,
        protoMsgs,
        stdFee,
        memo,
        signerData
      );

      const bases64EncodedSignature = Buffer.from(txSignatures[0]).toString(
        "base64"
      );
      const bases64EncodedBodyBytes = Buffer.from(bodyBytes).toString("base64");

      if (isMySignatureExist) {
        const signatureId = signatures.find(
          (signature) => signature.signerAddress === account?.bech32Address
        )?.id;

        if (signatureId === undefined) {
          throw new Error("Invalid signature id");
        }
        await updateSignature({
          variables: {
            signature: bases64EncodedSignature,
            signatureId: parseInt(signatureId, 10),
            sequence: parseInt(accountData.account.sequence, 10),
          },
        });
        toast.success("Signature is successfully updated");
      } else {
        await createSignature({
          variables: {
            data: {
              bodyBytes: bases64EncodedBodyBytes,
              memo,
              signature: bases64EncodedSignature,
              signerAddress,
              transactionId: parseInt(params.transactionId, 10),
              sequence: parseInt(accountData.account.sequence, 10),
            },
          },
        });
        toast.success("Signature is successfully added");
      }
      await refetchTransactionData();
    } catch (e) {
      const error = e as Error;
      toast.error(error.message);
    }
  };

  const handleTxBroadcast = async () => {
    try {
      if (accountData === undefined) {
        throw new Error("Unable to load account");
      }

      if (transaction === undefined) {
        throw new Error("Unable to load transaction");
      }

      if (currentChain === undefined) {
        throw new Error("Unable to load chain data");
      }

      const offChainPubkey: MultisigThresholdPubkey | undefined =
        transaction?.MultisigAccount.pubKeyJSON !== undefined
          ? JSON.parse(transaction?.MultisigAccount.pubKeyJSON)
          : undefined;

      if (offChainPubkey === undefined) {
        throw new Error("Unable to load account");
      }

      const bodyBytes = Buffer.from(signatures[0].bodyBytes, "base64");

      const signatureMap = new Map(
        signatures.map((signature) => [
          signature.signerAddress,
          Buffer.from(signature.signature, "base64"),
        ])
      );

      const checkSignatureSequence = signatures.every(
        (signature) =>
          signature.sequence === signatures[0].sequence &&
          signature.sequence === parseInt(accountData.account.sequence, 10)
      );

      if (!checkSignatureSequence) {
        throw new Error(
          "There is an expired signature. Please update signature."
        );
      }

      const txDataJSON = JSON.parse(transaction.txDataJSON);
      const stdFee: StdFee = {
        ...txDataJSON?.auth_info?.fee,
        gas: txDataJSON?.auth_info?.fee?.gas_limit ?? "0",
      };

      const signedTxBytes = makeMultisignedTxBytes(
        offChainPubkey,
        parseInt(accountData.account.sequence, 10),
        stdFee,
        bodyBytes,
        signatureMap
      );

      const broadcaster = await StargateClient.connect(
        "https://rpc.osmosis.zone"
      );
      const result = await broadcaster.broadcastTx(signedTxBytes);

      // const keplr = await getKeplrFromWindow();

      // if (keplr === undefined) {
      //   throw new Error("Unable to load keplr");
      // }

      // const encodedTxHash = await keplr.sendTx(
      //   currentChain.chain_id,
      //   signedTxBytes,
      //   "sync" as BroadcastMode
      // );

      // const txHash = Buffer.from(encodedTxHash).toString("hex");

      await updateTransactionTxHash({
        variables: {
          txHash: result.transactionHash,
          transactionId: parseInt(transaction.id, 10),
        },
      });
      await refetchTransactionData();
      toast.success("Transaction is successfully broadcasted");
    } catch (e) {
      const error = e as Error;
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Typography.H4 className="text-[#778CA2] mb-6">
        Transaction Detail
      </Typography.H4>
      <div className="flex w-full gap-4">
        <div className="flex-1 flex flex-col">
          <div className="w-full flex flex-col p-6 rounded-lg bg-white mb-4">
            <Typography.H2>{transaction?.title}</Typography.H2>
            <Typography.H5 className="mt-2 text-[#778CA2]">
              {transaction?.description ?? "No description"}
            </Typography.H5>

            <JsonViewer
              className="mt-4 p-2"
              value={JSON.parse(transaction?.txDataJSON ?? "")}
              theme={"dark"}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography.H4 className="text-[#778CA2]">
              Signature Status
            </Typography.H4>
            {!isBroadcasted ? (
              <button
                type="button"
                onClick={handleTxSign}
                disabled={loading || updateLoading}
                className="flex justify-center items-center ml-auto w-[150px] h-[40px] bg-[#4D7CFE] rounded"
              >
                <Typography.SMText className="text-white">
                  {isMySignatureExist ? "Update signature" : "Sign Transaction"}
                </Typography.SMText>
              </button>
            ) : null}
          </div>
          <div className="w-full flex flex-col p-6 rounded-lg bg-white">
            {signatures.map((signature) => {
              const isLast =
                signatures.indexOf(signature) === signatures.length - 1;

              const isExpiredSignature =
                accountData !== undefined
                  ? parseInt(accountData.account.sequence, 10) !== signature.sequence
                  : false;
              return (
                <div
                  key={signature.signerAddress}
                  className="flex flex-col w-full"
                >
                  <div className="flex justify-between items-center w-full h-8">
                    <div className="flex flex-col">
                      <Typography.H5>{}</Typography.H5>
                      <Typography.SMText>
                        {signature.signerAddress}
                      </Typography.SMText>
                    </div>
                    <div className="flex items-center">
                      {!isBroadcasted && isExpiredSignature ? (
                        <div className="flex items-center py-1 px-2 rounded bg-[#FE4D97]/10">
                          <Typography.SMText className="text-[#FE4D97]">
                            Expired signature
                          </Typography.SMText>
                        </div>
                      ) : (
                        <div className="flex items-center py-1 px-2 rounded bg-[#6DD230]/10">
                          <Typography.SMText className="text-[#6DD230]">
                            Signed
                          </Typography.SMText>
                        </div>
                      )}
                    </div>
                  </div>
                  {!isLast ? (
                    <hr className="border-t border-t-[#E8ECEF] my-2" />
                  ) : null}
                </div>
              );
            })}
          </div>
          {!isBroadcasted ? (
            <button
              type="button"
              onClick={handleTxBroadcast}
              disabled={
                loading || updateLoading || !isAchievingThreshold || txLoading
              }
              className="flex justify-center items-center ml-auto w-[150px] h-[40px] bg-[#4D7CFE] rounded mt-5"
            >
              <Typography.SMText className="text-white">
                {isAchievingThreshold
                  ? "Execute Transaction"
                  : "Waiting for threshold"}
              </Typography.SMText>
            </button>
          ) : null}
        </div>
        <div className="flex flex-col w-[200px] rounded bg-white p-4 h-fit">
          <Typography.H4 className="text-[#252631] mb-1">
            TX Status
          </Typography.H4>
          <Typography.SMText className="text-[#778CA2]">
            {transaction?.txHash === null ? "Ongoing" : "Success"}
          </Typography.SMText>
          <hr className="border-t border-t-[#E8ECEF] my-3" />
          <Typography.H4 className="text-[#252631] mb-1">
            Submit Time
          </Typography.H4>
          <Typography.SMText className="text-[#778CA2]">
            {dayjs(transaction?.createdAt).format("YYYY-MM-DD")}
          </Typography.SMText>
          <hr className="border-t border-t-[#E8ECEF] my-3" />
          <Typography.H4 className="text-[#252631] mb-1">TX Hash</Typography.H4>
          <Typography.SMText className="text-[#778CA2] break-all">
            {transaction?.txHash ?? "N/A"}
          </Typography.SMText>
          <hr className="border-t border-t-[#E8ECEF] my-3" />
          <Typography.H4 className="text-[#252631] mb-1">
            Threshold
          </Typography.H4>
          <div className="flex">
            <Image src="/users.svg" alt="user" width={22} height={20} />
            <Typography.SMText
              className={twMerge(
                "ml-2 mr-1",
                isNotEnoughSigners ? "text-[#FE4D97]" : "text-[#6DD230]"
              )}
            >
              {currentSigners}
            </Typography.SMText>
            <Typography.SMText className="text-[#252631]">
              {`/ ${threshold}`}
            </Typography.SMText>
          </div>
        </div>
      </div>
    </div>
  );
}
