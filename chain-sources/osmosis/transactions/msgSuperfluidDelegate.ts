import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgSuperfluidDelegate } from "@chain-clients/osmosis/types/codegen/osmosis/superfluid/tx";

export const msgSuperfluidDelegate = async (
  data: MsgSuperfluidDelegate,
  memo: string
) => {
  const { sender, lockId, valAddr } = data;
  const { AminoConverter, MessageComposer } = osmosis.superfluid;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.superfluid.MsgSuperfluidDelegate"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      lockId,
      sender,
      valAddr,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.superfluidDelegate({
    lockId,
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
