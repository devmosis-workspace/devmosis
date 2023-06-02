import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { BroadcastMode, Keplr } from "@keplr-wallet/types";
import {
  type Coin,
  makeSignDoc as makeAminoSignDoc,
  type StdFee,
  type AminoMsg,
} from "@cosmjs/amino";
import { makeSignDoc as makeProtoSignDoc } from "@cosmjs/proto-signing";
import Long from "long";
import { cosmos } from "@chain-clients/osmosis";
import type { Fee } from "@chain-clients/osmosis/types/codegen/cosmos/tx/v1beta1/tx";
import { osmosisInfo } from "./osmosisInfo";
import type { QueryAccountResponse } from "@common/types";
import type { SimulateResponseSDKType } from "@chain-clients/osmosis/types/codegen/cosmos/tx/v1beta1/service";
import { calculateStdFee, escapeHTML, getKeplrFromWindow } from "@common/utils";

interface AminoTx {
  keplr: Keplr;
  aminoMsgs: AminoMsg[];
  protoMsgs: Any[];
  stdFee: StdFee;
  chainId: string;
  memo: string;
  accountNumber: string;
  sequence: string;
  bech32Address: string;
}

const broadcastOsmosisAminoTx = async ({
  keplr,
  aminoMsgs,
  protoMsgs,
  stdFee,
  chainId,
  memo,
  accountNumber,
  sequence,
  bech32Address,
}: AminoTx) => {
  const aminoSignDoc = makeAminoSignDoc(
    aminoMsgs,
    stdFee,
    chainId,
    memo,
    accountNumber,
    sequence
  );

  const aminoSignedDoc = await keplr.signAmino(
    chainId,
    bech32Address,
    aminoSignDoc
  );

  const aminoSignedTx = cosmos.tx.v1beta1.TxRaw.encode({
    bodyBytes: cosmos.tx.v1beta1.TxBody.encode(
      cosmos.tx.v1beta1.TxBody.fromPartial({
        messages: protoMsgs,
        memo: aminoSignedDoc.signed.memo,
        timeoutHeight:
          aminoSignedDoc.signed.timeout_height !== undefined
            ? Long.fromString(aminoSignedDoc.signed.timeout_height)
            : undefined,
      })
    ).finish(),
    authInfoBytes: cosmos.tx.v1beta1.AuthInfo.encode({
      signerInfos: [
        {
          sequence: Long.fromString(aminoSignedDoc.signed.sequence),
          publicKey: {
            typeUrl: aminoSignedDoc.signature.pub_key.type,
            value: cosmos.crypto.secp256k1.PubKey.encode({
              key: Buffer.from(
                aminoSignedDoc.signature.pub_key.value,
                "base64"
              ),
            }).finish(),
          },
          modeInfo: {
            single: {
              mode: cosmos.tx.signing.v1beta1.SignMode
                .SIGN_MODE_LEGACY_AMINO_JSON,
            },
          },
        },
      ],
      fee: cosmos.tx.v1beta1.Fee.fromPartial({
        amount: aminoSignedDoc.signed.fee.amount as Coin[],
        gasLimit: Long.fromString(aminoSignedDoc.signed.fee.gas),
      } as Fee),
    }).finish(),
    signatures: [Buffer.from(aminoSignedDoc.signature.signature, "base64")],
  }).finish();

  const encodedTxHash = await keplr.sendTx(
    chainId,
    aminoSignedTx,
    "sync" as BroadcastMode
  );

  const txHash = Buffer.from(encodedTxHash).toString("hex");

  return txHash;
};

interface ProtoTx extends Omit<AminoTx, "aminoMsgs"> {
  pubKey: Required<QueryAccountResponse>["account"]["pub_key"];
}

const broadcastOsmosisProtoTx = async ({
  keplr,
  protoMsgs,
  stdFee,
  chainId,
  memo,
  accountNumber,
  sequence,
  bech32Address,
  pubKey,
}: ProtoTx) => {
  const bodyBytes = cosmos.tx.v1beta1.TxBody.encode(
    cosmos.tx.v1beta1.TxBody.fromPartial({
      memo,
      messages: protoMsgs,
    })
  ).finish();

  const authInfoBytes = cosmos.tx.v1beta1.AuthInfo.encode({
    signerInfos: [
      {
        publicKey: {
          typeUrl: pubKey["@type"],
          value: cosmos.crypto.secp256k1.PubKey.encode({
            key: Buffer.from(pubKey.key, "base64"),
          }).finish(),
        },
        modeInfo: {
          single: {
            mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
          },
        },
        sequence: Long.fromString(sequence),
      },
    ],
    fee: cosmos.tx.v1beta1.Fee.fromPartial({
      amount: stdFee.amount,
      gasLimit: Long.fromString(stdFee.gas),
    } as Fee),
  }).finish();

  const protoSignDoc = makeProtoSignDoc(
    bodyBytes,
    authInfoBytes,
    chainId,
    Number(accountNumber)
  );

  const protoSignedDoc = await keplr.signDirect(
    chainId,
    bech32Address,
    protoSignDoc
  );

  const protoSignedTx = cosmos.tx.v1beta1.TxRaw.encode({
    bodyBytes: protoSignedDoc.signed.bodyBytes,
    authInfoBytes: protoSignedDoc.signed.authInfoBytes,
    signatures: [Buffer.from(protoSignedDoc.signature.signature, "base64")],
  }).finish();

  const encodedTxHash = await keplr.sendTx(
    chainId,
    protoSignedTx,
    "sync" as BroadcastMode
  );

  const txHash = Buffer.from(encodedTxHash).toString("hex");

  return txHash;
};

interface SimulateTx {
  protoMsgs: Any[];
  memo: string;
  sequence: string;
  isNanoLedger: boolean;
  pubKey: Required<QueryAccountResponse>["account"]["pub_key"];
  baseDenom: string;
}

const simulateOsmosisTx = async ({
  protoMsgs,
  memo,
  sequence,
  isNanoLedger,
  pubKey,
  baseDenom,
}: SimulateTx) => {
  const { chain } = osmosisInfo;

  const txBytesForSimulation = cosmos.tx.v1beta1.TxRaw.encode({
    bodyBytes: cosmos.tx.v1beta1.TxBody.encode(
      cosmos.tx.v1beta1.TxBody.fromPartial({
        memo,
        messages: protoMsgs,
      })
    ).finish(),
    authInfoBytes: cosmos.tx.v1beta1.AuthInfo.encode({
      signerInfos: [
        {
          sequence: Long.fromString(sequence),
          publicKey: {
            typeUrl: pubKey["@type"],
            value: cosmos.crypto.secp256k1.PubKey.encode({
              key: Buffer.from(pubKey.key, "base64"),
            }).finish(),
          },
          modeInfo: {
            single: {
              mode: isNanoLedger
                ? cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON
                : cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
        },
      ],
      fee: cosmos.tx.v1beta1.Fee.fromPartial({
        amount: [
          {
            amount: "0",
            denom: baseDenom,
          },
        ],
      }),
    }).finish(),
    signatures: [new Uint8Array(0)],
  }).finish();

  const simulateTx = async () => {
    const restEndpoint = chain?.apis?.rest?.[2].address ?? "";
    const data = (
      await fetch(`${restEndpoint}/cosmos/tx/v1beta1/simulate`, {
        method: "POST",
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          tx_bytes: Buffer.from(txBytesForSimulation).toString("base64"),
        }),
      })
    ).json() as SimulateResponseSDKType | undefined;
    return data;
  };

  const simulatedTx = await simulateTx();

  return { simulatedTx };
};

const getOsmosisAccount = async (bech32Address: string) => {
  const { chain } = osmosisInfo;
  const restEndpoint = chain?.apis?.rest?.[0].address ?? "";

  const {
    cosmos: {
      auth: {
        v1beta1: { account: getAccount },
      },
    },
  } = await cosmos.ClientFactory.createLCDClient({
    restEndpoint,
  });

  const { account } = (await getAccount({
    address: bech32Address,
  })) as QueryAccountResponse;

  return { account };
};

interface BroadcastOsmosisTx {
  aminoMsgs: AminoMsg[];
  protoMsgs: Any[];
  memo: string;
}

export const broadcastOsmosisTx = async ({
  aminoMsgs,
  protoMsgs,
  memo,
}: BroadcastOsmosisTx) => {
  const { chain } = osmosisInfo;
  const chainId = chain.chain_id;
  const escapedMemo = escapeHTML(memo);

  try {
    const keplr = await getKeplrFromWindow();

    if (keplr === undefined) {
      throw new Error("Keplr is not installed");
    }

    const { bech32Address, isNanoLedger } = await keplr.getKey(chainId);

    const { account } = await getOsmosisAccount(bech32Address);

    const baseDenom = chain.fees?.fee_tokens[0].denom;
    if (account === undefined || baseDenom === undefined) {
      throw new Error("Unable to load account");
    }

    const { simulatedTx } = await simulateOsmosisTx({
      isNanoLedger,
      memo: escapedMemo,
      protoMsgs,
      pubKey: {
        "@type": account.pub_key["@type"],
        key: account.pub_key.key,
      },
      sequence: account.sequence,
      baseDenom,
    });

    const gasUsed = simulatedTx?.gas_info?.gas_used as string | undefined;
    const averageGasPrice = chain.fees?.fee_tokens[0].average_gas_price;

    if (gasUsed === undefined || averageGasPrice === undefined) {
      throw new Error("Unable to calculate fee");
    }

    const { stdFee } = calculateStdFee({
      averageGasPrice,
      gasUsed,
      baseDenom,
    });

    if (isNanoLedger) {
      return await broadcastOsmosisAminoTx({
        keplr,
        chainId,
        stdFee,
        memo: escapedMemo,
        bech32Address,
        aminoMsgs,
        protoMsgs,
        sequence: account.sequence,
        accountNumber: account.account_number,
      });
    } else {
      return await broadcastOsmosisProtoTx({
        keplr,
        chainId,
        stdFee,
        memo: escapedMemo,
        bech32Address,
        protoMsgs,
        sequence: account.sequence,
        accountNumber: account.account_number,
        pubKey: {
          "@type": account.pub_key["@type"],
          key: account.pub_key.key,
        },
      });
    }
  } catch (error) {
    if (error instanceof Error) return error.message;
    return "Unknown error";
  }
};
