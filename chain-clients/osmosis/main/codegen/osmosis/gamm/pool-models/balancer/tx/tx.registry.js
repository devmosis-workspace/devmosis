"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool", _tx.MsgCreateBalancerPool]];
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
    createBalancerPool: function createBalancerPool(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: _tx.MsgCreateBalancerPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBalancerPool: function createBalancerPool(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: value
      };
    }
  },
  fromPartial: {
    createBalancerPool: function createBalancerPool(value) {
      return {
        typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
        value: _tx.MsgCreateBalancerPool.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;