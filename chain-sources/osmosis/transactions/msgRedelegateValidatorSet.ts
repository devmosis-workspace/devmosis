import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgRedelegateValidatorSet } from "@chain-clients/osmosis/types/codegen/osmosis/valset-pref/v1beta1/tx";

export const msgRedelegateValidatorSet = async (
  data: MsgRedelegateValidatorSet,
  memo: string
) => {
  const { delegator, preferences } = data;
  const { AminoConverter, MessageComposer } = osmosis.valsetpref.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegator,
      preferences,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.redelegateValidatorSet({
    delegator,
    preferences,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
