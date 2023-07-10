"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.incentives.MsgCreateGauge", _tx.MsgCreateGauge], ["/osmosis.incentives.MsgAddToGauge", _tx.MsgAddToGauge]];
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
    createGauge: function createGauge(value) {
      return {
        typeUrl: "/osmosis.incentives.MsgCreateGauge",
        value: _tx.MsgCreateGauge.encode(value).finish()
      };
    },
    addToGauge: function addToGauge(value) {
      return {
        typeUrl: "/osmosis.incentives.MsgAddToGauge",
        value: _tx.MsgAddToGauge.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGauge: function createGauge(value) {
      return {
        typeUrl: "/osmosis.incentives.MsgCreateGauge",
        value: value
      };
    },
    addToGauge: function addToGauge(value) {
      return {
        typeUrl: "/osmosis.incentives.MsgAddToGauge",
        value: value
      };
    }
  },
  fromPartial: {
    createGauge: function createGauge(value) {
      return {
        typeUrl: "/osmosis.incentives.MsgCreateGauge",
        value: _tx.MsgCreateGauge.fromPartial(value)
      };
    },
    addToGauge: function addToGauge(value) {
      return {
        typeUrl: "/osmosis.incentives.MsgAddToGauge",
        value: _tx.MsgAddToGauge.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;