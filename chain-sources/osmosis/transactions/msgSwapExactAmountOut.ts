import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgSwapExactAmountOut } from "@chain-clients/osmosis/src/codegen/osmosis/poolmanager/v1beta1/tx";

export const msgSwapExactAmountOut = async (
  data: MsgSwapExactAmountOut,
  memo: string
) => {
  const { sender, routes, tokenInMaxAmount, tokenOut } = data;
  const { AminoConverter, MessageComposer } = osmosis.poolmanager.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      sender,
      routes,
      tokenInMaxAmount,
      tokenOut,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.swapExactAmountOut({
    sender,
    routes,
    tokenInMaxAmount,
    tokenOut,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
