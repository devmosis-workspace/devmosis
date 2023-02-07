"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", _tx.MsgCreateVestingAccount]];
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
    createVestingAccount: function createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: _tx.MsgCreateVestingAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createVestingAccount: function createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: value
      };
    }
  },
  toJSON: {
    createVestingAccount: function createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: _tx.MsgCreateVestingAccount.toJSON(value)
      };
    }
  },
  fromJSON: {
    createVestingAccount: function createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: _tx.MsgCreateVestingAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createVestingAccount: function createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: _tx.MsgCreateVestingAccount.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;