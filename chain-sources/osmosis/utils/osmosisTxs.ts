import type { TransactionBaseFormValue, TxEvent } from "@common/types";
import { osmosisTypeUrls } from "./osmosisTypeUrls";
import type {
  MsgBeginRedelegate,
  MsgDelegate,
  MsgUndelegate,
} from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/tx";
import {
  msgBeginRedelegate,
  msgBeginUnlocking,
  msgBeginUnlockingAll,
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
import { getTxResult } from "./osmosisTxUtils";

export const osmosisTxs = async ({
  bech32Prefix,
  typeUrl,
  memo,
  event,
  ...formValues
}: TransactionBaseFormValue & TxEvent) => {
  const {
    // cosmos
    beginRedelegate,
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
  } = osmosisTypeUrls;

  const txs = () => {
    switch (typeUrl) {
      case beginRedelegate(null as any).typeUrl:
        return msgBeginRedelegate(formValues as MsgBeginRedelegate, memo);
      case delegate(null as any).typeUrl:
        return msgDelegate(formValues as MsgDelegate, memo);
      case multiSend(null as any).typeUrl:
        return msgMultiSend(formValues as MsgMultiSend, memo);
      case send(null as any).typeUrl:
        return msgSend(formValues as MsgSend, memo);
      case undelegate(null as any).typeUrl:
        return msgUndelegate(formValues as MsgUndelegate, memo);
      case setWithdrawAddress(null as any).typeUrl:
        return msgSetWithdrawAddress(formValues as MsgSetWithdrawAddress, memo);
      case withdrawDelegatorReward(null as any).typeUrl:
        return msgWithdrawDelegatorReward(
          formValues as MsgWithdrawDelegatorReward,
          memo
        );

      case beginUnlocking(null as any).typeUrl:
        return msgBeginUnlocking(formValues as MsgBeginUnlocking, memo);
      case beginUnlockingAll(null as any).typeUrl:
        return msgBeginUnlockingAll(formValues as MsgBeginUnlockingAll, memo);
      case delegateBondedTokens(null as any).typeUrl:
        return msgDelegateBondedTokens(
          formValues as MsgDelegateBondedTokens,
          memo
        );
      case delegateToValidatorSet(null as any).typeUrl:
        return msgDelegateToValidatorSet(
          formValues as MsgDelegateToValidatorSet,
          memo
        );
      case exitPool(null as any).typeUrl:
        return msgExitPool(formValues as MsgExitPool, memo);
      case exitSwapExternAmountOut(null as any).typeUrl:
        return msgExitSwapExternAmountOut(
          formValues as MsgExitSwapExternAmountOut,
          memo
        );
      case exitSwapShareAmountIn(null as any).typeUrl:
        return msgExitSwapShareAmountIn(
          formValues as MsgExitSwapShareAmountIn,
          memo
        );
      case joinPool(null as any).typeUrl:
        return msgJoinPool(formValues as MsgJoinPool, memo);
      case joinSwapExternAmountIn(null as any).typeUrl:
        return msgJoinSwapExternAmountIn(
          formValues as MsgJoinSwapExternAmountIn,
          memo
        );
      case joinSwapShareAmountOut(null as any).typeUrl:
        return msgJoinSwapShareAmountOut(
          formValues as MsgJoinSwapShareAmountOut,
          memo
        );
      case lockAndSuperfluidDelegate(null as any).typeUrl:
        return msgLockAndSuperfluidDelegate(
          formValues as MsgLockAndSuperfluidDelegate,
          memo
        );
      case lockTokens(null as any).typeUrl:
        return msgLockTokens(formValues as MsgLockTokens, memo);
      case redelegateValidatorSet(null as any).typeUrl:
        return msgRedelegateValidatorSet(
          formValues as MsgRedelegateValidatorSet,
          memo
        );
      case setValidatorSetPreference(null as any).typeUrl:
        return msgSetValidatorSetPreference(
          formValues as MsgSetValidatorSetPreference,
          memo
        );
      case superfluidDelegate(null as any).typeUrl:
        return msgSuperfluidDelegate(formValues as MsgSuperfluidDelegate, memo);
      case superfluidUnbondLock(null as any).typeUrl:
        return msgSuperfluidUnbondLock(
          formValues as MsgSuperfluidUnbondLock,
          memo
        );
      case superfluidUndelegate(null as any).typeUrl:
        return msgSuperfluidUndelegate(
          formValues as MsgSuperfluidUndelegate,
          memo
        );
      case superfluidUndelegateAndUnbondLock(null as any).typeUrl:
        return msgSuperfluidUndelegateAndUnbondLock(
          formValues as MsgSuperfluidUndelegateAndUnbondLock,
          memo
        );
      case swapExactAmountIn(null as any).typeUrl:
        return msgSwapExactAmountIn(formValues as MsgSwapExactAmountIn, memo);
      case swapExactAmountOut(null as any).typeUrl:
        return msgSwapExactAmountOut(formValues as MsgSwapExactAmountOut, memo);
      case undelegateFromValidatorSet(null as any).typeUrl:
        return msgUndelegateFromValidatorSet(
          formValues as MsgUndelegateFromValidatorSet,
          memo
        );
      case withdrawDelegationRewards(null as any).typeUrl:
        return msgWithdrawDelegationRewards(
          formValues as MsgWithdrawDelegationRewards,
          memo
        );
      default:
        throw new Error("Unknown typeUrl: " + typeUrl);
    }
  };

  const txHash = await txs();
  const txResult = await getTxResult(txHash);

  if (txResult.status === "error") {
    event?.onError?.(txResult);
  } else {
    event?.onFulfill?.(txResult);
  }

  return txHash;
};
