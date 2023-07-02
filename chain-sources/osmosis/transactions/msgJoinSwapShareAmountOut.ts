import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgJoinSwapShareAmountOut } from "@chain-clients/osmosis/types/codegen/osmosis/gamm/v1beta1/tx";

export const msgJoinSwapShareAmountOut = async (
  data: MsgJoinSwapShareAmountOut,
  memo: string
) => {
  const { poolId, sender, shareOutAmount, tokenInDenom, tokenInMaxAmount } =
    data;
  const { AminoConverter, MessageComposer } = osmosis.gamm.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      poolId,
      sender,
      shareOutAmount,
      tokenInDenom,
      tokenInMaxAmount,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.joinSwapShareAmountOut({
    poolId,
    sender,
    shareOutAmount,
    tokenInDenom,
    tokenInMaxAmount,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
