import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgDelegateBondedTokens } from "@chain-clients/osmosis/types/codegen/osmosis/valset-pref/v1beta1/tx";

export const msgDelegateBondedTokens = async (
  data: MsgDelegateBondedTokens,
  memo: string
) => {
  const { delegator, lockID } = data;
  const { AminoConverter, MessageComposer } = osmosis.valsetpref.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegator,
      lockID,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.delegateBondedTokens({
    delegator,
    lockID,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
