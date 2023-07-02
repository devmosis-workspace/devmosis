import { cosmos } from "@chain-clients/osmosis";
import type { MsgDelegate } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/tx";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";

export const msgDelegate = async (data: MsgDelegate, memo: string) => {
  const { delegatorAddress, validatorAddress, amount } = data;
  const { AminoConverter, MessageComposer } = cosmos.staking.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/cosmos.staking.v1beta1.MsgDelegate"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegatorAddress,
      validatorAddress,
      amount,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.delegate({
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
