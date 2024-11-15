import { cosmos, osmosis } from "@chain-clients/osmosis";

const cosmosTypeUrl = {
  ...cosmos.authz.v1beta1.MessageComposer.withTypeUrl,
  ...cosmos.bank.v1beta1.MessageComposer.withTypeUrl,
  // ...cosmos.crisis.v1beta1.MessageComposer.withTypeUrl,
  ...cosmos.distribution.v1beta1.MessageComposer.withTypeUrl,
  ...cosmos.evidence.v1beta1.MessageComposer.withTypeUrl,
  ...cosmos.feegrant.v1beta1.MessageComposer.withTypeUrl,
  ...cosmos.gov.v1beta1.MessageComposer.withTypeUrl,
  // ...cosmos.group.v1.MessageComposer.withTypeUrl,
  // ...cosmos.nft.v1beta1.MessageComposer.withTypeUrl,
  // ...cosmos.slashing.v1beta1.MessageComposer.withTypeUrl,
  ...cosmos.staking.v1beta1.MessageComposer.withTypeUrl,
  // ...cosmos.upgrade.v1beta1.MessageComposer.withTypeUrl,
  // ...cosmos.vesting.v1beta1.MessageComposer.withTypeUrl,
};

const osmosisTypeUrl = {
  ...osmosis.gamm.v1beta1.MessageComposer.withTypeUrl,
  // ...osmosis.incentives.MessageComposer.withTypeUrl,
  ...osmosis.lockup.MessageComposer.withTypeUrl,
  ...osmosis.poolmanager.v1beta1.MessageComposer.withTypeUrl,
  // ...osmosis.protorev.v1beta1.MessageComposer.withTypeUrl,
  ...osmosis.superfluid.MessageComposer.withTypeUrl,
  // ...osmosis.tokenfactory.v1beta1.MessageComposer.withTypeUrl,
  ...osmosis.valsetpref.v1beta1.MessageComposer.withTypeUrl,
};

const {
  beginRedelegate,
  // createValidator,
  delegate,
  // deposit,
  // editValidator,
  // exec,
  // fundCommunityPool,
  // grant,
  // grantAllowance,
  multiSend,
  // revoke,
  // revokeAllowance,
  send,
  setWithdrawAddress,
  // submitEvidence,
  // submitProposal,
  undelegate,
  // vote,
  // voteWeighted,
  withdrawDelegatorReward,
  // withdrawValidatorCommission,
} = cosmosTypeUrl;

const {
  beginUnlocking,
  beginUnlockingAll,
  delegateBondedTokens,
  delegateToValidatorSet,
  exitPool,
  exitSwapExternAmountOut,
  exitSwapShareAmountIn,
  // extendLockup,
  // forceUnlock,
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
  // unPoolWhitelistedPool,
  undelegateFromValidatorSet,
  withdrawDelegationRewards,
} = osmosisTypeUrl;

export const osmosisTypeUrls = {
  beginRedelegate,
  delegate,
  multiSend,
  send,
  setWithdrawAddress,
  undelegate,
  withdrawDelegatorReward,
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
};

export const supportedTypeUrls = Object.values(osmosisTypeUrls).map((value) => {
  const typeUrl = value(null as any).typeUrl;
  return typeUrl;
});
