import { osmosis } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgJoinPool } from "@chain-clients/osmosis/types/codegen/osmosis/gamm/v1beta1/tx";

export const msgJoinPool = async (data: MsgJoinPool, memo: string) => {
  const { poolId, sender, shareOutAmount, tokenInMaxs } = data;
  const { AminoConverter, MessageComposer } = osmosis.gamm.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/osmosis.gamm.v1beta1.MsgJoinPool"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      poolId,
      sender,
      shareOutAmount,
      tokenInMaxs,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.joinPool({
    poolId,
    sender,
    shareOutAmount,
    tokenInMaxs,
  });
  const aminoMsgs = [aminoMsg];
  const protoMsgs = [protoMsg];

  return await broadcastOsmosisTx({
    aminoMsgs,
    protoMsgs,
    memo,
  });
};
