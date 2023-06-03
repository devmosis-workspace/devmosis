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
  msgBeginUnlocking,
  msgBeginUnlockingAll,
  msgCancelUnbondingDelegation,
  msgDelegate,
  msgDelegateBondedTokens,
  msgDelegateToValidatorSet,
  msgExitPool,
  msgExitSwapExternAmountOut,
  msgExitSwapShareAmountIn,
  msgJoinPool,
  msgJoinSwapExternAmountIn,
  msgJoinSwapShareAmountOut,
  msgLockAndSuperfluidDelegate,
  msgLockTokens,
  msgMultiSend,
  msgRedelegateValidatorSet,
  msgSend,
  msgSetValidatorSetPreference,
  msgSetWithdrawAddress,
  msgSuperfluidDelegate,
  msgSuperfluidUnbondLock,
  msgSuperfluidUndelegate,
  msgSuperfluidUndelegateAndUnbondLock,
  msgSwapExactAmountIn,
  msgSwapExactAmountOut,
  msgUndelegate,
  msgUndelegateFromValidatorSet,
  msgWithdrawDelegationRewards,
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
import type {
  MsgBeginUnlocking,
  MsgBeginUnlockingAll,
  MsgLockTokens,
} from "@chain-clients/osmosis/types/codegen/osmosis/lockup/tx";
import type {
  MsgDelegateBondedTokens,
  MsgDelegateToValidatorSet,
  MsgRedelegateValidatorSet,
  MsgSetValidatorSetPreference,
  MsgUndelegateFromValidatorSet,
  MsgWithdrawDelegationRewards,
} from "@chain-clients/osmosis/types/codegen/osmosis/valset-pref/v1beta1/tx";
import type {
  MsgSwapExactAmountIn,
  MsgSwapExactAmountOut,
} from "@chain-clients/osmosis/types/codegen/osmosis/poolmanager/v1beta1/tx";
import type {
  MsgLockAndSuperfluidDelegate,
  MsgSuperfluidDelegate,
  MsgSuperfluidUnbondLock,
  MsgSuperfluidUndelegate,
  MsgSuperfluidUndelegateAndUnbondLock,
} from "@chain-clients/osmosis/types/codegen/osmosis/superfluid/tx";
import type {
  MsgExitPool,
  MsgExitSwapExternAmountOut,
  MsgExitSwapShareAmountIn,
  MsgJoinPool,
  MsgJoinSwapExternAmountIn,
  MsgJoinSwapShareAmountOut,
} from "@chain-clients/osmosis/types/codegen/osmosis/gamm/v1beta1/tx";

export const osmosisTxs = async ({
  bech32Prefix,
  typeUrl,
  memo,
  ...formValues
}: TransactionBaseFormValue) => {
  const {
    // cosmos
    beginRedelegate,
    cancelUnbondingDelegation,
    delegate,
    multiSend,
    send,
    undelegate,
    setWithdrawAddress,
    withdrawDelegatorReward,
    // osmosis
    beginUnlocking,
    beginUnlockingAll,
    delegateBondedTokens,
    delegateToValidatorSet,
    exitPool,
    exitSwapExternAmountOut,
    exitSwapShareAmountIn,
    joinPool,
    joinSwapExternAmountIn,
    joinSwapShareAmountOut,
    lockAndSuperfluidDelegate,
    lockTokens,
    redelegateValidatorSet,
    setValidatorSetPreference,
    superfluidDelegate,
    superfluidUnbondLock,
    superfluidUndelegate,
    superfluidUndelegateAndUnbondLock,
    swapExactAmountIn,
    swapExactAmountOut,
    undelegateFromValidatorSet,
    withdrawDelegationRewards,
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

    case beginUnlocking(null as any).typeUrl:
      return await msgBeginUnlocking(formValues as MsgBeginUnlocking, memo);
    case beginUnlockingAll(null as any).typeUrl:
      return await msgBeginUnlockingAll(
        formValues as MsgBeginUnlockingAll,
        memo
      );
    case delegateBondedTokens(null as any).typeUrl:
      return await msgDelegateBondedTokens(
        formValues as MsgDelegateBondedTokens,
        memo
      );
    case delegateToValidatorSet(null as any).typeUrl:
      return await msgDelegateToValidatorSet(
        formValues as MsgDelegateToValidatorSet,
        memo
      );
    case exitPool(null as any).typeUrl:
      return await msgExitPool(formValues as MsgExitPool, memo);
    case exitSwapExternAmountOut(null as any).typeUrl:
      return await msgExitSwapExternAmountOut(
        formValues as MsgExitSwapExternAmountOut,
        memo
      );
    case exitSwapShareAmountIn(null as any).typeUrl:
      return await msgExitSwapShareAmountIn(
        formValues as MsgExitSwapShareAmountIn,
        memo
      );
    case joinPool(null as any).typeUrl:
      return await msgJoinPool(formValues as MsgJoinPool, memo);
    case joinSwapExternAmountIn(null as any).typeUrl:
      return await msgJoinSwapExternAmountIn(
        formValues as MsgJoinSwapExternAmountIn,
        memo
      );
    case joinSwapShareAmountOut(null as any).typeUrl:
      return await msgJoinSwapShareAmountOut(
        formValues as MsgJoinSwapShareAmountOut,
        memo
      );
    case lockAndSuperfluidDelegate(null as any).typeUrl:
      return await msgLockAndSuperfluidDelegate(
        formValues as MsgLockAndSuperfluidDelegate,
        memo
      );
    case lockTokens(null as any).typeUrl:
      return await msgLockTokens(formValues as MsgLockTokens, memo);
    case redelegateValidatorSet(null as any).typeUrl:
      return await msgRedelegateValidatorSet(
        formValues as MsgRedelegateValidatorSet,
        memo
      );
    case setValidatorSetPreference(null as any).typeUrl:
      return await msgSetValidatorSetPreference(
        formValues as MsgSetValidatorSetPreference,
        memo
      );
    case superfluidDelegate(null as any).typeUrl:
      return await msgSuperfluidDelegate(
        formValues as MsgSuperfluidDelegate,
        memo
      );
    case superfluidUnbondLock(null as any).typeUrl:
      return await msgSuperfluidUnbondLock(
        formValues as MsgSuperfluidUnbondLock,
        memo
      );
    case superfluidUndelegate(null as any).typeUrl:
      return await msgSuperfluidUndelegate(
        formValues as MsgSuperfluidUndelegate,
        memo
      );
    case superfluidUndelegateAndUnbondLock(null as any).typeUrl:
      return await msgSuperfluidUndelegateAndUnbondLock(
        formValues as MsgSuperfluidUndelegateAndUnbondLock,
        memo
      );
    case swapExactAmountIn(null as any).typeUrl:
      return await msgSwapExactAmountIn(
        formValues as MsgSwapExactAmountIn,
        memo
      );
    case swapExactAmountOut(null as any).typeUrl:
      return await msgSwapExactAmountOut(
        formValues as MsgSwapExactAmountOut,
        memo
      );
    case undelegateFromValidatorSet(null as any).typeUrl:
      return await msgUndelegateFromValidatorSet(
        formValues as MsgUndelegateFromValidatorSet,
        memo
      );
    case withdrawDelegationRewards(null as any).typeUrl:
      return await msgWithdrawDelegationRewards(
        formValues as MsgWithdrawDelegationRewards,
        memo
      );
    default:
      return null;
  }
};
