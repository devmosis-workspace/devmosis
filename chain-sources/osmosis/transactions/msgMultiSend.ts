import { cosmos } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgMultiSend } from "@chain-clients/osmosis/types/codegen/cosmos/bank/v1beta1/tx";

export const msgMultiSend = async (data: MsgMultiSend, memo: string) => {
  const { inputs, outputs } = data;
  const { AminoConverter, MessageComposer } = cosmos.bank.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/cosmos.bank.v1beta1.MsgMultiSend"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      inputs,
      outputs,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.multiSend({
    inputs,
    outputs,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
