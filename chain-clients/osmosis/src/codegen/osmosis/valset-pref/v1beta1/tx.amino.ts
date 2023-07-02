//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards, MsgDelegateBondedTokens } from "./tx";
export interface MsgSetValidatorSetPreferenceAminoType extends AminoMsg {
  type: "osmosis/valsetpref/set-validator-set-preference";
  value: {
    delegator: string;
    preferences: {
      val_oper_address: string;
      weight: string;
    }[];
  };
}
export interface MsgDelegateToValidatorSetAminoType extends AminoMsg {
  type: "osmosis/valsetpref/delegate-to-validator-set";
  value: {
    delegator: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUndelegateFromValidatorSetAminoType extends AminoMsg {
  type: "osmosis/valsetpref/undelegate-from-validator-set";
  value: {
    delegator: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRedelegateValidatorSetAminoType extends AminoMsg {
  type: "osmosis/valsetpref/redelegate-validator-set";
  value: {
    delegator: string;
    preferences: {
      val_oper_address: string;
      weight: string;
    }[];
  };
}
export interface MsgWithdrawDelegationRewardsAminoType extends AminoMsg {
  type: "osmosis/valsetpref/withdraw-delegation-rewards";
  value: {
    delegator: string;
  };
}
export interface MsgDelegateBondedTokensAminoType extends AminoMsg {
  type: "osmosis/valsetpref/delegate-bonded-tokens";
  value: {
    delegator: string;
    lockID: string;
  };
}
export const AminoConverter = {
  "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
    aminoType: "osmosis/valsetpref/set-validator-set-preference",
    toAmino: ({
      delegator,
      preferences
    }: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAminoType["value"] => {
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
    }: MsgSetValidatorSetPreferenceAminoType["value"]): MsgSetValidatorSetPreference => {
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
    }: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAminoType["value"] => {
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
    }: MsgDelegateToValidatorSetAminoType["value"]): MsgDelegateToValidatorSet => {
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
    }: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAminoType["value"] => {
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
    }: MsgUndelegateFromValidatorSetAminoType["value"]): MsgUndelegateFromValidatorSet => {
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
    }: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAminoType["value"] => {
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
    }: MsgRedelegateValidatorSetAminoType["value"]): MsgRedelegateValidatorSet => {
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
    }: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAminoType["value"] => {
      return {
        delegator
      };
    },
    fromAmino: ({
      delegator
    }: MsgWithdrawDelegationRewardsAminoType["value"]): MsgWithdrawDelegationRewards => {
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
    }: MsgDelegateBondedTokens): MsgDelegateBondedTokensAminoType["value"] => {
      return {
        delegator,
        lockID: lockID.toString()
      };
    },
    fromAmino: ({
      delegator,
      lockID
    }: MsgDelegateBondedTokensAminoType["value"]): MsgDelegateBondedTokens => {
      return {
        delegator,
        lockID: Long.fromString(lockID)
      };
    }
  }
};