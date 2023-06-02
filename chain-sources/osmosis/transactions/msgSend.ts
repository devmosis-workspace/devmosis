import { cosmos } from "@chain-clients/osmosis";
import type { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg } from "@common/types";
import { broadcastOsmosisTx } from "../utils";
import type { MsgSend } from "@chain-clients/osmosis/types/codegen/cosmos/bank/v1beta1/tx";

export const msgSend = async (data: MsgSend, memo: string) => {
  const { fromAddress, toAddress, amount } = data;
  const { AminoConverter, MessageComposer } = cosmos.bank.v1beta1;

  const { aminoType, toAmino } = AminoConverter["/cosmos.bank.v1beta1.MsgSend"];

  const aminoMsg: AminoMsg = {
    type: aminoType,
    value: toAmino({
      fromAddress,
      toAddress,
      amount,
    }),
  };
  const protoMsg: Any = MessageComposer.encoded.send({
    fromAddress,
    toAddress,
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
