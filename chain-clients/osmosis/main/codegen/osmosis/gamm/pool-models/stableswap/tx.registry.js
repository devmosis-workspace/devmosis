"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool", _tx.MsgCreateStableswapPool], ["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors", _tx.MsgStableSwapAdjustScalingFactors]];
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
    createStableswapPool: function createStableswapPool(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
        value: _tx.MsgCreateStableswapPool.encode(value).finish()
      };
    },
    stableSwapAdjustScalingFactors: function stableSwapAdjustScalingFactors(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
        value: _tx.MsgStableSwapAdjustScalingFactors.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createStableswapPool: function createStableswapPool(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
        value: value
      };
    },
    stableSwapAdjustScalingFactors: function stableSwapAdjustScalingFactors(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
        value: value
      };
    }
  },
  fromPartial: {
    createStableswapPool: function createStableswapPool(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
        value: _tx.MsgCreateStableswapPool.fromPartial(value)
      };
    },
    stableSwapAdjustScalingFactors: function stableSwapAdjustScalingFactors(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
        value: _tx.MsgStableSwapAdjustScalingFactors.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;