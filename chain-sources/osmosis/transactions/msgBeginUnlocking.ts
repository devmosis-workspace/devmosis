import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgBeginUnlocking } from "@chain-clients/osmosis/types/codegen/osmosis/lockup/tx";

export const msgBeginUnlocking = async (
  data: MsgBeginUnlocking,
  memo: string
) => {
  const { ID, coins, owner } = data;
  const { AminoConverter, MessageComposer } = osmosis.lockup;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.lockup.MsgBeginUnlocking"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      ID,
      coins,
      owner,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.beginUnlocking({
    ID,
    coins,
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
