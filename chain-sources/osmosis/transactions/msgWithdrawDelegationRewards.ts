import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgWithdrawDelegationRewards } from "@chain-clients/osmosis/types/codegen/osmosis/valset-pref/v1beta1/tx";

export const msgWithdrawDelegationRewards = async (
  data: MsgWithdrawDelegationRewards,
  memo: string
) => {
  const { delegator } = data;
  const { AminoConverter, MessageComposer } = osmosis.valsetpref.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegator,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.withdrawDelegationRewards({
    delegator,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
