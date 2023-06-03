import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgExitSwapExternAmountOut } from "@chain-clients/osmosis/types/codegen/osmosis/gamm/v1beta1/tx";

export const msgExitSwapExternAmountOut = async (
  data: MsgExitSwapExternAmountOut,
  memo: string
) => {
  const { poolId, sender, shareInMaxAmount, tokenOut } = data;
  const { AminoConverter, MessageComposer } = osmosis.gamm.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      poolId,
      sender,
      shareInMaxAmount,
      tokenOut,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.exitSwapExternAmountOut({
    poolId,
    sender,
    shareInMaxAmount,
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
