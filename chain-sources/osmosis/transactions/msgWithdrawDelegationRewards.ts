import { cosmos } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import { MsgWithdrawDelegatorReward } from "@chain-clients/osmosis/types/codegen/cosmos/distribution/v1beta1/tx";

export const msgWithdrawDelegatorReward = async (
  data: MsgWithdrawDelegatorReward,
  memo: string
) => {
  const { delegatorAddress, validatorAddress } = data;
  const { AminoConverter, MessageComposer } = cosmos.distribution.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegatorAddress,
      validatorAddress,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.withdrawDelegatorReward({
    delegatorAddress,
    validatorAddress,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
