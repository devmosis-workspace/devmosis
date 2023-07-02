import { cosmos } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgSetWithdrawAddress } from "@chain-clients/osmosis/types/codegen/cosmos/distribution/v1beta1/tx";

export const msgSetWithdrawAddress = async (
  data: MsgSetWithdrawAddress,
  memo: string
) => {
  const { delegatorAddress, withdrawAddress } = data;
  const { AminoConverter, MessageComposer } = cosmos.distribution.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      delegatorAddress,
      withdrawAddress,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.setWithdrawAddress({
    delegatorAddress,
    withdrawAddress,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
