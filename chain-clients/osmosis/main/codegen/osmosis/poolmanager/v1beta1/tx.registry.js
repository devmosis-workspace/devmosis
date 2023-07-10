"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn", _tx.MsgSwapExactAmountIn], ["/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut", _tx.MsgSwapExactAmountOut]];
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
    swapExactAmountIn: function swapExactAmountIn(value) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: _tx.MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut: function swapExactAmountOut(value) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: _tx.MsgSwapExactAmountOut.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    swapExactAmountIn: function swapExactAmountIn(value) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: value
      };
    },
    swapExactAmountOut: function swapExactAmountOut(value) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: value
      };
    }
  },
  fromPartial: {
    swapExactAmountIn: function swapExactAmountIn(value) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: _tx.MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut: function swapExactAmountOut(value) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: _tx.MsgSwapExactAmountOut.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;