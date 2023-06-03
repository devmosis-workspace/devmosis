import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgSuperfluidUndelegate } from "@chain-clients/osmosis/types/codegen/osmosis/superfluid/tx";

export const msgSuperfluidUndelegate = async (
  data: MsgSuperfluidUndelegate,
  memo: string
) => {
  const { sender, lockId } = data;
  const { AminoConverter, MessageComposer } = osmosis.superfluid;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.superfluid.MsgSuperfluidUndelegate"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      lockId,
      sender,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.superfluidUndelegate({
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
