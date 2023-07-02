import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgJoinSwapExternAmountIn } from "@chain-clients/osmosis/types/codegen/osmosis/gamm/v1beta1/tx";

export const msgJoinSwapExternAmountIn = async (
  data: MsgJoinSwapExternAmountIn,
  memo: string
) => {
  const { poolId, sender, shareOutMinAmount, tokenIn } = data;
  const { AminoConverter, MessageComposer } = osmosis.gamm.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      poolId,
      sender,
      shareOutMinAmount,
      tokenIn,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.joinSwapExternAmountIn({
    poolId,
    sender,
    shareOutMinAmount,
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
