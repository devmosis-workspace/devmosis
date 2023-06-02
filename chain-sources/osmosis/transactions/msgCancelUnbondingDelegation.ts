import { cosmos } from "@chain-clients/osmosis";
import type { MsgCancelUnbondingDelegation } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/tx";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";

export const msgCancelUnbondingDelegation = async (
  data: MsgCancelUnbondingDelegation,
  memo: string
) => {
  const { delegatorAddress, validatorAddress, creationHeight, amount } = data;
  const { AminoConverter, MessageComposer } = cosmos.staking.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegatorAddress,
      validatorAddress,
      creationHeight,
      amount,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.cancelUnbondingDelegation({
    delegatorAddress,
    validatorAddress,
    creationHeight,
    amount,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
