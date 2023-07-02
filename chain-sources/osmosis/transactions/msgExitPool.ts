import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgExitPool } from "@chain-clients/osmosis/types/codegen/osmosis/gamm/v1beta1/tx";

export const msgExitPool = async (data: MsgExitPool, memo: string) => {
  const { poolId, sender, shareInAmount, tokenOutMins } = data;
  const { AminoConverter, MessageComposer } = osmosis.gamm.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.gamm.v1beta1.MsgExitPool"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      poolId,
      sender,
      shareInAmount,
      tokenOutMins,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.exitPool({
    poolId,
    sender,
    shareInAmount,
    tokenOutMins,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
