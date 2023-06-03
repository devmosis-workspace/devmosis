import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgBeginUnlockingAll } from "@chain-clients/osmosis/types/codegen/osmosis/lockup/tx";

export const msgBeginUnlockingAll = async (
  data: MsgBeginUnlockingAll,
  memo: string
) => {
  const { owner } = data;
  const { AminoConverter, MessageComposer } = osmosis.lockup;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.lockup.MsgBeginUnlockingAll"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      owner,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.beginUnlockingAll({
    owner,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
