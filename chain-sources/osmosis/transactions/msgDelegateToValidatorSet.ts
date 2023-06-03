import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgDelegateToValidatorSet } from "@chain-clients/osmosis/types/codegen/osmosis/valset-pref/v1beta1/tx";

export const msgDelegateToValidatorSet = async (
  data: MsgDelegateToValidatorSet,
  memo: string
) => {
  const { delegator, coin } = data;
  const { AminoConverter, MessageComposer } = osmosis.valsetpref.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegator,
      coin,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.delegateToValidatorSet({
    delegator,
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
