"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
    aminoType: "osmosis/valsetpref/set-validator-set-preference",
    toAmino: function toAmino(_ref) {
      var delegator = _ref.delegator,
        preferences = _ref.preferences;
      return {
        delegator: delegator,
        preferences: preferences.map(function (el0) {
          return {
            val_oper_address: el0.valOperAddress,
            weight: el0.weight
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var delegator = _ref2.delegator,
        preferences = _ref2.preferences;
      return {
        delegator: delegator,
        preferences: preferences.map(function (el0) {
          return {
            valOperAddress: el0.val_oper_address,
            weight: el0.weight
          };
        })
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
    aminoType: "osmosis/valsetpref/delegate-to-validator-set",
    toAmino: function toAmino(_ref3) {
      var delegator = _ref3.delegator,
        coin = _ref3.coin;
      return {
        delegator: delegator,
        coin: {
          denom: coin.denom,
          amount: _helpers.Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var delegator = _ref4.delegator,
        coin = _ref4.coin;
      return {
        delegator: delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
    aminoType: "osmosis/valsetpref/undelegate-from-validator-set",
    toAmino: function toAmino(_ref5) {
      var delegator = _ref5.delegator,
        coin = _ref5.coin;
      return {
        delegator: delegator,
        coin: {
          denom: coin.denom,
          amount: _helpers.Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var delegator = _ref6.delegator,
        coin = _ref6.coin;
      return {
        delegator: delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
    aminoType: "osmosis/valsetpref/redelegate-validator-set",
    toAmino: function toAmino(_ref7) {
      var delegator = _ref7.delegator,
        preferences = _ref7.preferences;
      return {
        delegator: delegator,
        preferences: preferences.map(function (el0) {
          return {
            val_oper_address: el0.valOperAddress,
            weight: el0.weight
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var delegator = _ref8.delegator,
        preferences = _ref8.preferences;
      return {
        delegator: delegator,
        preferences: preferences.map(function (el0) {
          return {
            valOperAddress: el0.val_oper_address,
            weight: el0.weight
          };
        })
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
    aminoType: "osmosis/valsetpref/withdraw-delegation-rewards",
    toAmino: function toAmino(_ref9) {
      var delegator = _ref9.delegator;
      return {
        delegator: delegator
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var delegator = _ref10.delegator;
      return {
        delegator: delegator
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
    aminoType: "osmosis/valsetpref/delegate-bonded-tokens",
    toAmino: function toAmino(_ref11) {
      var delegator = _ref11.delegator,
        lockID = _ref11.lockID;
      return {
        delegator: delegator,
        lockID: lockID.toString()
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var delegator = _ref12.delegator,
        lockID = _ref12.lockID;
      return {
        delegator: delegator,
        lockID: _helpers.Long.fromString(lockID)
      };
    }
  }
};
exports.AminoConverter = AminoConverter;