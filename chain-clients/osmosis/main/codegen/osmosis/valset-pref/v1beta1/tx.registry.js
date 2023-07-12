"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference", _tx.MsgSetValidatorSetPreference], ["/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet", _tx.MsgDelegateToValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet", _tx.MsgUndelegateFromValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet", _tx.MsgRedelegateValidatorSet], ["/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards", _tx.MsgWithdrawDelegationRewards], ["/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens", _tx.MsgDelegateBondedTokens]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    setValidatorSetPreference: function setValidatorSetPreference(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: _tx.MsgSetValidatorSetPreference.encode(value).finish()
      };
    },
    delegateToValidatorSet: function delegateToValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: _tx.MsgDelegateToValidatorSet.encode(value).finish()
      };
    },
    undelegateFromValidatorSet: function undelegateFromValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: _tx.MsgUndelegateFromValidatorSet.encode(value).finish()
      };
    },
    redelegateValidatorSet: function redelegateValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: _tx.MsgRedelegateValidatorSet.encode(value).finish()
      };
    },
    withdrawDelegationRewards: function withdrawDelegationRewards(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: _tx.MsgWithdrawDelegationRewards.encode(value).finish()
      };
    },
    delegateBondedTokens: function delegateBondedTokens(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
        value: _tx.MsgDelegateBondedTokens.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setValidatorSetPreference: function setValidatorSetPreference(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: value
      };
    },
    delegateToValidatorSet: function delegateToValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: value
      };
    },
    undelegateFromValidatorSet: function undelegateFromValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: value
      };
    },
    redelegateValidatorSet: function redelegateValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: value
      };
    },
    withdrawDelegationRewards: function withdrawDelegationRewards(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: value
      };
    },
    delegateBondedTokens: function delegateBondedTokens(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
        value: value
      };
    }
  },
  fromJSON: {
    setValidatorSetPreference: function setValidatorSetPreference(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: _tx.MsgSetValidatorSetPreference.fromJSON(value)
      };
    },
    delegateToValidatorSet: function delegateToValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: _tx.MsgDelegateToValidatorSet.fromJSON(value)
      };
    },
    undelegateFromValidatorSet: function undelegateFromValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: _tx.MsgUndelegateFromValidatorSet.fromJSON(value)
      };
    },
    redelegateValidatorSet: function redelegateValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: _tx.MsgRedelegateValidatorSet.fromJSON(value)
      };
    },
    withdrawDelegationRewards: function withdrawDelegationRewards(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: _tx.MsgWithdrawDelegationRewards.fromJSON(value)
      };
    },
    delegateBondedTokens: function delegateBondedTokens(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
        value: _tx.MsgDelegateBondedTokens.fromJSON(value)
      };
    }
  },
  fromPartial: {
    setValidatorSetPreference: function setValidatorSetPreference(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: _tx.MsgSetValidatorSetPreference.fromPartial(value)
      };
    },
    delegateToValidatorSet: function delegateToValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: _tx.MsgDelegateToValidatorSet.fromPartial(value)
      };
    },
    undelegateFromValidatorSet: function undelegateFromValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: _tx.MsgUndelegateFromValidatorSet.fromPartial(value)
      };
    },
    redelegateValidatorSet: function redelegateValidatorSet(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: _tx.MsgRedelegateValidatorSet.fromPartial(value)
      };
    },
    withdrawDelegationRewards: function withdrawDelegationRewards(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: _tx.MsgWithdrawDelegationRewards.fromPartial(value)
      };
    },
    delegateBondedTokens: function delegateBondedTokens(value) {
      return {
        typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
        value: _tx.MsgDelegateBondedTokens.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;