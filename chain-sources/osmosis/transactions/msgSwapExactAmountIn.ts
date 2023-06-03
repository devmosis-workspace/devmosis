import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgSwapExactAmountIn } from "@chain-clients/osmosis/src/codegen/osmosis/poolmanager/v1beta1/tx";

export const msgSwapExactAmountIn = async (
  data: MsgSwapExactAmountIn,
  memo: string
) => {
  const { sender, routes, tokenOutMinAmount, tokenIn } = data;
  const { AminoConverter, MessageComposer } = osmosis.poolmanager.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      sender,
      routes,
      tokenOutMinAmount,
      tokenIn,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.swapExactAmountIn({
    sender,
    routes,
    tokenOutMinAmount,
    tokenIn,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
