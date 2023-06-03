import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgLockAndSuperfluidDelegate } from "@chain-clients/osmosis/types/codegen/osmosis/superfluid/tx";

export const msgLockAndSuperfluidDelegate = async (
  data: MsgLockAndSuperfluidDelegate,
  memo: string
) => {
  const { sender, coins, valAddr } = data;
  const { AminoConverter, MessageComposer } = osmosis.superfluid;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.superfluid.MsgLockAndSuperfluidDelegate"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      coins,
      sender,
      valAddr,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.lockAndSuperfluidDelegate({
    coins,
    sender,
    valAddr,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
