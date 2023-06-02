import type { TransactionBaseFormValue } from "@common/types";
import { osmosisMsgs } from "./osmosisMsgs";
import type {
  MsgBeginRedelegate,
  MsgCancelUnbondingDelegation,
  MsgDelegate,
  MsgUndelegate,
} from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/tx";
import {
  msgBeginRedelegate,
  msgCancelUnbondingDelegation,
  msgDelegate,
  msgMultiSend,
  msgSend,
  msgSetWithdrawAddress,
  msgUndelegate,
  msgWithdrawDelegatorReward,
} from "../transactions";
import type {
  MsgMultiSend,
  MsgSend,
} from "@chain-clients/osmosis/types/codegen/cosmos/bank/v1beta1/tx";
import {
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
} from "@chain-clients/osmosis/types/codegen/cosmos/distribution/v1beta1/tx";

export const osmosisTxs = async ({
  bech32Prefix,
  typeUrl,
  memo,
  ...formValues
}: TransactionBaseFormValue) => {
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
      return await msgBeginRedelegate(formValues as MsgBeginRedelegate, memo);
    case cancelUnbondingDelegation(null as any).typeUrl:
      return await msgCancelUnbondingDelegation(
        formValues as MsgCancelUnbondingDelegation,
        memo
      );
    case delegate(null as any).typeUrl:
      return await msgDelegate(formValues as MsgDelegate, memo);
    case multiSend(null as any).typeUrl:
      return await msgMultiSend(formValues as MsgMultiSend, memo);
    case send(null as any).typeUrl:
      return await msgSend(formValues as MsgSend, memo);
    case undelegate(null as any).typeUrl:
      return await msgUndelegate(formValues as MsgUndelegate, memo);
    case setWithdrawAddress(null as any).typeUrl:
      return await msgSetWithdrawAddress(
        formValues as MsgSetWithdrawAddress,
        memo
      );
    case withdrawDelegatorReward(null as any).typeUrl:
      return await msgWithdrawDelegatorReward(
        formValues as MsgWithdrawDelegatorReward,
        memo
      );
    default:
      return null;
  }
};
