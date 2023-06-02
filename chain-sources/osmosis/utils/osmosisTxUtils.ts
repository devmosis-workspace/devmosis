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

export const broadcastOsmosisAminoTx = async ({
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

export const broadcastOsmosisProtoTx = async ({
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

export const simulateOsmosisTx = async ({
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
