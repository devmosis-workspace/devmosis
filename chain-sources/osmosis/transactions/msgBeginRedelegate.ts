import { cosmos } from "@chain-clients/osmosis";
import type { MsgBeginRedelegate } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/tx";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";

export const msgBeginRedelegate = async (
  data: MsgBeginRedelegate,
  memo: string
) => {
  const { delegatorAddress, validatorDstAddress, validatorSrcAddress, amount } =
    data;
  const { AminoConverter, MessageComposer } = cosmos.staking.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/cosmos.staking.v1beta1.MsgBeginRedelegate"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegatorAddress,
      validatorDstAddress,
      validatorSrcAddress,
      amount,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.beginRedelegate({
    delegatorAddress,
    validatorDstAddress,
    validatorSrcAddress,
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
