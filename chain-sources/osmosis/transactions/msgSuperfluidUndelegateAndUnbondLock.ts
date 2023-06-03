import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgSuperfluidUndelegateAndUnbondLock } from "@chain-clients/osmosis/types/codegen/osmosis/superfluid/tx";

export const msgSuperfluidUndelegateAndUnbondLock = async (
  data: MsgSuperfluidUndelegateAndUnbondLock,
  memo: string
) => {
  const { sender, lockId, coin } = data;
  const { AminoConverter, MessageComposer } = osmosis.superfluid;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      lockId,
      sender,
      coin,
    }),
  };
  const protoMsg: Any =
    MessageComposer.encoded.superfluidUndelegateAndUnbondLock({
      lockId,
      sender,
      coin,
    });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
