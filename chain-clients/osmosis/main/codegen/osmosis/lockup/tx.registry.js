"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.lockup.MsgLockTokens", _tx.MsgLockTokens], ["/osmosis.lockup.MsgBeginUnlockingAll", _tx.MsgBeginUnlockingAll], ["/osmosis.lockup.MsgBeginUnlocking", _tx.MsgBeginUnlocking], ["/osmosis.lockup.MsgExtendLockup", _tx.MsgExtendLockup], ["/osmosis.lockup.MsgForceUnlock", _tx.MsgForceUnlock]];
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
    lockTokens: function lockTokens(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: _tx.MsgLockTokens.encode(value).finish()
      };
    },
    beginUnlockingAll: function beginUnlockingAll(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: _tx.MsgBeginUnlockingAll.encode(value).finish()
      };
    },
    beginUnlocking: function beginUnlocking(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: _tx.MsgBeginUnlocking.encode(value).finish()
      };
    },
    extendLockup: function extendLockup(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value: _tx.MsgExtendLockup.encode(value).finish()
      };
    },
    forceUnlock: function forceUnlock(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value: _tx.MsgForceUnlock.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    lockTokens: function lockTokens(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: value
      };
    },
    beginUnlockingAll: function beginUnlockingAll(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: value
      };
    },
    beginUnlocking: function beginUnlocking(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: value
      };
    },
    extendLockup: function extendLockup(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value: value
      };
    },
    forceUnlock: function forceUnlock(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value: value
      };
    }
  },
  fromJSON: {
    lockTokens: function lockTokens(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: _tx.MsgLockTokens.fromJSON(value)
      };
    },
    beginUnlockingAll: function beginUnlockingAll(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: _tx.MsgBeginUnlockingAll.fromJSON(value)
      };
    },
    beginUnlocking: function beginUnlocking(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: _tx.MsgBeginUnlocking.fromJSON(value)
      };
    },
    extendLockup: function extendLockup(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value: _tx.MsgExtendLockup.fromJSON(value)
      };
    },
    forceUnlock: function forceUnlock(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value: _tx.MsgForceUnlock.fromJSON(value)
      };
    }
  },
  fromPartial: {
    lockTokens: function lockTokens(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: _tx.MsgLockTokens.fromPartial(value)
      };
    },
    beginUnlockingAll: function beginUnlockingAll(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: _tx.MsgBeginUnlockingAll.fromPartial(value)
      };
    },
    beginUnlocking: function beginUnlocking(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: _tx.MsgBeginUnlocking.fromPartial(value)
      };
    },
    extendLockup: function extendLockup(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value: _tx.MsgExtendLockup.fromPartial(value)
      };
    },
    forceUnlock: function forceUnlock(value) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value: _tx.MsgForceUnlock.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;