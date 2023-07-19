import type {
  AminoMsg,
  Any,
  TransactionBaseFormValue,
  TxEvent,
} from "@common/types";
import { getTxResult, osmosisTxUtils } from "./osmosisTxUtils";
import { osmosisMsgs } from "../msgs";

export const broadcastOsmosisTx = async ({
  bech32Prefix,
  typeUrl,
  memo,
  txEvent,
  ...formValues
}: TransactionBaseFormValue & TxEvent) => {
  const osmosisMsg = osmosisMsgs[typeUrl];

  if (osmosisMsg === undefined) {
    throw new Error(`osmosisMsgs - ${typeUrl} is undefined`);
  }

  const aminoMsg: AminoMsg = {
    type: osmosisMsg.amino.aminoType,
    value: osmosisMsg.amino.toAmino(formValues),
  };

  const protoMsg: Any = osmosisMsg.proto.encode(formValues);

  const txHash = await osmosisTxUtils.broadcastTx({
    aminoMsgs: [aminoMsg],
    protoMsgs: [protoMsg],
    memo,
  });
  const txResult = await getTxResult(txHash);

  if (txResult.status === "error") {
    txEvent?.onError?.(txResult);
  } else {
    txEvent?.onFulfill?.(txResult);
  }
  return txHash;
};
