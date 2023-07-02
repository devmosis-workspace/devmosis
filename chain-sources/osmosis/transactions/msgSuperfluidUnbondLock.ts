import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgSuperfluidUnbondLock } from "@chain-clients/osmosis/types/codegen/osmosis/superfluid/tx";

export const msgSuperfluidUnbondLock = async (
  data: MsgSuperfluidUnbondLock,
  memo: string
) => {
  const { sender, lockId } = data;
  const { AminoConverter, MessageComposer } = osmosis.superfluid;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.superfluid.MsgSuperfluidUnbondLock"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      lockId,
      sender,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.superfluidUnbondLock({
    lockId,
    sender,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
