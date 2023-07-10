//@ts-nocheck

import { Long } from "../../../helpers";
export const AminoConverter = {
  "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
    aminoType: "osmosis/valsetpref/set-validator-set-preference",
    toAmino: ({
      delegator,
      preferences
    }) => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          val_oper_address: el0.valOperAddress,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      delegator,
      preferences
    }) => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          valOperAddress: el0.val_oper_address,
          weight: el0.weight
        }))
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
    aminoType: "osmosis/valsetpref/delegate-to-validator-set",
    toAmino: ({
      delegator,
      coin
    }) => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator,
      coin
    }) => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
    aminoType: "osmosis/valsetpref/undelegate-from-validator-set",
    toAmino: ({
      delegator,
      coin
    }) => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator,
      coin
    }) => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
    aminoType: "osmosis/valsetpref/redelegate-validator-set",
    toAmino: ({
      delegator,
      preferences
    }) => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          val_oper_address: el0.valOperAddress,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      delegator,
      preferences
    }) => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          valOperAddress: el0.val_oper_address,
          weight: el0.weight
        }))
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
    aminoType: "osmosis/valsetpref/withdraw-delegation-rewards",
    toAmino: ({
      delegator
    }) => {
      return {
        delegator
      };
    },
    fromAmino: ({
      delegator
    }) => {
      return {
        delegator
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
    aminoType: "osmosis/valsetpref/delegate-bonded-tokens",
    toAmino: ({
      delegator,
      lockID
    }) => {
      return {
        delegator,
        lockID: lockID.toString()
      };
    },
    fromAmino: ({
      delegator,
      lockID
    }) => {
      return {
        delegator,
        lockID: Long.fromString(lockID)
      };
    }
  }
};