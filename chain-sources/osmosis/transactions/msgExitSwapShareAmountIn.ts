import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgExitSwapShareAmountIn } from "@chain-clients/osmosis/types/codegen/osmosis/gamm/v1beta1/tx";

export const msgExitSwapShareAmountIn = async (
  data: MsgExitSwapShareAmountIn,
  memo: string
) => {
  const { poolId, sender, shareInAmount, tokenOutDenom, tokenOutMinAmount } =
    data;
  const { AminoConverter, MessageComposer } = osmosis.gamm.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      poolId,
      sender,
      shareInAmount,
      tokenOutDenom,
      tokenOutMinAmount,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.exitSwapShareAmountIn({
    poolId,
    sender,
    shareInAmount,
    tokenOutDenom,
    tokenOutMinAmount,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
