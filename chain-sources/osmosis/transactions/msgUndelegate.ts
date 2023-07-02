import { cosmos } from "@chain-clients/osmosis";
import type { MsgUndelegate } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/tx";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";

export const msgUndelegate = async (data: MsgUndelegate, memo: string) => {
  const { delegatorAddress, validatorAddress, amount } = data;
  const { AminoConverter, MessageComposer } = cosmos.staking.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/cosmos.staking.v1beta1.MsgUndelegate"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegatorAddress,
      validatorAddress,
      amount,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.undelegate({
    delegatorAddress,
    validatorAddress,
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
