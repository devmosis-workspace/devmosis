"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.gamm.v1beta1.MsgJoinPool", _tx.MsgJoinPool], ["/osmosis.gamm.v1beta1.MsgExitPool", _tx.MsgExitPool], ["/osmosis.gamm.v1beta1.MsgSwapExactAmountIn", _tx.MsgSwapExactAmountIn], ["/osmosis.gamm.v1beta1.MsgSwapExactAmountOut", _tx.MsgSwapExactAmountOut], ["/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn", _tx.MsgJoinSwapExternAmountIn], ["/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut", _tx.MsgJoinSwapShareAmountOut], ["/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut", _tx.MsgExitSwapExternAmountOut], ["/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn", _tx.MsgExitSwapShareAmountIn]];
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
    joinPool: function joinPool(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: _tx.MsgJoinPool.encode(value).finish()
      };
    },
    exitPool: function exitPool(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
        value: _tx.MsgExitPool.encode(value).finish()
      };
    },
    swapExactAmountIn: function swapExactAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: _tx.MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut: function swapExactAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
        value: _tx.MsgSwapExactAmountOut.encode(value).finish()
      };
    },
    joinSwapExternAmountIn: function joinSwapExternAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
        value: _tx.MsgJoinSwapExternAmountIn.encode(value).finish()
      };
    },
    joinSwapShareAmountOut: function joinSwapShareAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
        value: _tx.MsgJoinSwapShareAmountOut.encode(value).finish()
      };
    },
    exitSwapExternAmountOut: function exitSwapExternAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
        value: _tx.MsgExitSwapExternAmountOut.encode(value).finish()
      };
    },
    exitSwapShareAmountIn: function exitSwapShareAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
        value: _tx.MsgExitSwapShareAmountIn.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    joinPool: function joinPool(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: value
      };
    },
    exitPool: function exitPool(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
        value: value
      };
    },
    swapExactAmountIn: function swapExactAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: value
      };
    },
    swapExactAmountOut: function swapExactAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
        value: value
      };
    },
    joinSwapExternAmountIn: function joinSwapExternAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
        value: value
      };
    },
    joinSwapShareAmountOut: function joinSwapShareAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
        value: value
      };
    },
    exitSwapExternAmountOut: function exitSwapExternAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
        value: value
      };
    },
    exitSwapShareAmountIn: function exitSwapShareAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
        value: value
      };
    }
  },
  fromPartial: {
    joinPool: function joinPool(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
        value: _tx.MsgJoinPool.fromPartial(value)
      };
    },
    exitPool: function exitPool(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
        value: _tx.MsgExitPool.fromPartial(value)
      };
    },
    swapExactAmountIn: function swapExactAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
        value: _tx.MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut: function swapExactAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
        value: _tx.MsgSwapExactAmountOut.fromPartial(value)
      };
    },
    joinSwapExternAmountIn: function joinSwapExternAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
        value: _tx.MsgJoinSwapExternAmountIn.fromPartial(value)
      };
    },
    joinSwapShareAmountOut: function joinSwapShareAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
        value: _tx.MsgJoinSwapShareAmountOut.fromPartial(value)
      };
    },
    exitSwapExternAmountOut: function exitSwapExternAmountOut(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
        value: _tx.MsgExitSwapExternAmountOut.fromPartial(value)
      };
    },
    exitSwapShareAmountIn: function exitSwapShareAmountIn(value) {
      return {
        typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
        value: _tx.MsgExitSwapShareAmountIn.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;