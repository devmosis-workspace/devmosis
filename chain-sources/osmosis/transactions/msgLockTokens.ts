import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import { MsgLockTokens } from "@chain-clients/osmosis/types/codegen/osmosis/lockup/tx";

export const msgLockTokens = async (data: MsgLockTokens, memo: string) => {
  const { coins, owner, duration } = data;
  const { AminoConverter, MessageComposer } = osmosis.lockup;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.lockup.MsgLockTokens"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      coins,
      owner,
      duration,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.lockTokens({
    coins,
    owner,
    duration,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
