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
import { osmosisAccountQuery, osmosisClient } from "@chain-sources/osmosis";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import Image from "next/image";
import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { MultisigThresholdPubkey, makeSignDoc } from "@cosmjs/amino";
import { escapeHTML, getKeplrFromWindow } from "@common/utils";
import { cosmos } from "@chain-clients/osmosis";
import Long from "long";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { BroadcastMode, StdFee } from "@keplr-wallet/types";
import { makeMultisignedTxBytes } from "@cosmjs/stargate";
import {
  UPDATE_TRANSACTION_TX_HASH,
  UpdateTransactionTxHashInput,
  UpdateTransactionTxHashResponse,
} from "@/graphql/mutations/transaction";

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
        transactionId: Number(params.transactionId),
      },
      skip: params?.transactionId === undefined,
      fetchPolicy: "network-only",
    });

  const transaction = transactionData?.transactionByTransactionId;
  const accountAddress = transaction?.MultisigAccount.address;

  const { data: accountData } = useQuery({
    queryKey: ["osmosisAccountQuery", { address: accountAddress! }],
    queryFn: () => osmosisAccountQuery({ address: accountAddress! }),
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

    const timeoutHeight: number | undefined = txDataJSON?.body?.timeout_height;
    const extensionOptions: any[] | undefined =
      txDataJSON?.body?.extension_options;
    const nonCriticalExtensionOptions: any[] | undefined =
      txDataJSON?.body?.non_critical_extension_options;

    if (messages === undefined || memo === undefined) {
      return;
    }

    let aminoMsgs: { type: string; value: any }[] = [];
    let protoMsgs: { typeUrl: string; value: Uint8Array }[] = [];
    if (bech32Prefix === "osmo") {
      const { amino, proto } = messages.reduce(
        (acc, msg) => {
          const client = osmosisClient.find(
            (osmosis) => osmosis.proto.typeUrl === msg["@type"]
          );

          if (client === undefined) {
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

          const amino = {
            type: client.amino.aminoType,
            value: values,
          };

          const proto = client.proto.encode(client.amino.fromAmino(values));

          return {
            amino: [...acc.amino, amino],
            proto: [...acc.proto, proto],
          };
        },
        {
          amino: [],
          proto: [],
        } as {
          amino: { type: string; value: Record<string, any> }[];
          proto: { typeUrl: string; value: Uint8Array }[];
        }
      );
      aminoMsgs = amino;
      protoMsgs = proto;
    }

    // const baseDenom = currentChain.fees?.fee_tokens[0].denom;
    // if (baseDenom === undefined) {
    //   throw new Error("Unable to load account");
    // }

    // const offChainPubkey: MultisigThresholdPubkey | undefined =
    //   transaction?.MultisigAccount.pubKeyJSON !== undefined
    //     ? JSON.parse(transaction?.MultisigAccount.pubKeyJSON)
    //     : undefined;

    // const onChainPubkey = accountData.pub_key;

    // if (offChainPubkey === undefined) {
    //   throw new Error("Unable to load account");
    // }

    // const pubkey =
    //   onChainPubkey === null
    //     ? offChainPubkey
    //     : {
    //         type: onChainPubkey["@type"],
    //         value: onChainPubkey.key,
    //       };

    // const { simulatedTx } = await simulateOsmosisTx({
    //   isNanoLedger: account.isNanoLedger,
    //   memo,
    //   protoMsgs,
    //   pubKey: {
    //     type: pubkey.type,
    //     value: pubkey.value,
    //   },
    //   sequence: accountData.sequence,
    //   baseDenom,
    // });

    // const gasUsed = simulatedTx?.gas_info?.gas_used as string | undefined;
    // const averageGasPrice = currentChain.fees?.fee_tokens[0].average_gas_price;

    // if (gasUsed === undefined || averageGasPrice === undefined) {
    //   throw new Error("Unable to calculate fee");
    // }

    // const { stdFee } = calculateStdFee({
    //   averageGasPrice,
    //   gasUsed,
    //   baseDenom,
    // });

    const stdSignDoc = makeSignDoc(
      aminoMsgs,
      stdFee,
      currentChain.chain_id,
      memo,
      accountData.account_number,
      accountData.sequence
    );

    const { signature } = await offlineSigner.signAmino(
      signerAddress,
      stdSignDoc
    );

    const bodyBytes = cosmos.tx.v1beta1.TxBody.encode(
      cosmos.tx.v1beta1.TxBody.fromPartial({
        memo,
        messages: protoMsgs,
        timeoutHeight:
          timeoutHeight !== undefined
            ? Long.fromNumber(timeoutHeight)
            : undefined,
        extensionOptions,
        nonCriticalExtensionOptions,
      })
    ).finish();

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
          signature: signature.signature,
          signatureId: Number(signatureId),
          sequence: Number(accountData.sequence),
        },
      });
      toast.success("Signature is successfully updated");
    } else {
      await createSignature({
        variables: {
          data: {
            bodyBytes: bases64EncodedBodyBytes,
            memo,
            signature: signature.signature,
            signerAddress,
            transactionId: Number(params.transactionId),
            sequence: Number(accountData.sequence),
          },
        },
      });
      toast.success("Signature is successfully added");
    }
    await refetchTransactionData();
  };

  const handleTxBroadcast = async () => {
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
        signature.sequence === Number(accountData?.sequence)
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
      Number(accountData.sequence),
      stdFee,
      bodyBytes,
      signatureMap
    );

    const keplr = await getKeplrFromWindow();

    if (keplr === undefined) {
      throw new Error("Unable to load keplr");
    }

    const encodedTxHash = await keplr.sendTx(
      currentChain.chain_id,
      signedTxBytes,
      "sync" as BroadcastMode
    );

    const txHash = Buffer.from(encodedTxHash).toString("hex");

    await updateTransactionTxHash({
      variables: {
        txHash,
        transactionId: Number(transaction.id),
      },
    });
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
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography.H4 className="text-[#778CA2]">
              Signature Status
            </Typography.H4>
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
          </div>
          <div className="w-full flex flex-col p-6 rounded-lg bg-white">
            {signatures.map((signature) => {
              const isLast =
                signatures.indexOf(signature) === signatures.length - 1;

              const isExpiredSignature =
                accountData !== undefined
                  ? Number(accountData.sequence) !== signature.sequence
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
                      {isExpiredSignature ? (
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
          <button
            type="button"
            onClick={handleTxBroadcast}
            disabled={loading || updateLoading || !isAchievingThreshold || txLoading}
            className="flex justify-center items-center ml-auto w-[150px] h-[40px] bg-[#4D7CFE] rounded mt-5"
          >
            <Typography.SMText className="text-white">
              {isAchievingThreshold ? "Execute Transaction" : "Waiting for threshold"}
            </Typography.SMText>
          </button>
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
          <Typography.SMText className="text-[#778CA2]">
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
