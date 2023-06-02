import { TransactionFormValues } from "@common/types";
import { msgDelegate } from "../transactions/msgDelegate";
import { osmosisMsgs } from "./osmosisMsgs";
import type { MsgDelegate } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/tx";

export const osmosisTxs = async ({
  bech32Prefix,
  typeUrl,
  ...formValues
}: TransactionFormValues["transactions"][0]) => {
  const {
    beginRedelegate,
    cancelUnbondingDelegation,
    delegate,
    multiSend,
    send,
    undelegate,
    setWithdrawAddress,
    withdrawDelegatorReward,
  } = osmosisMsgs;

  switch (typeUrl) {
    case beginRedelegate(null as any).typeUrl:
      return null;
    case cancelUnbondingDelegation(null as any).typeUrl:
      return null;
    case delegate(null as any).typeUrl:
      return await msgDelegate(formValues as MsgDelegate);
    case multiSend(null as any).typeUrl:
      return null;
    case send(null as any).typeUrl:
      return null;
    case undelegate(null as any).typeUrl:
      return null;
    case setWithdrawAddress(null as any).typeUrl:
      return null;
    case withdrawDelegatorReward(null as any).typeUrl:
      return null;
    default:
      return null;
  }
};
