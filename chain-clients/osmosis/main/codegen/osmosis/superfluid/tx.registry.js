"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.superfluid.MsgSuperfluidDelegate", _tx.MsgSuperfluidDelegate], ["/osmosis.superfluid.MsgSuperfluidUndelegate", _tx.MsgSuperfluidUndelegate], ["/osmosis.superfluid.MsgSuperfluidUnbondLock", _tx.MsgSuperfluidUnbondLock], ["/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock", _tx.MsgSuperfluidUndelegateAndUnbondLock], ["/osmosis.superfluid.MsgLockAndSuperfluidDelegate", _tx.MsgLockAndSuperfluidDelegate], ["/osmosis.superfluid.MsgUnPoolWhitelistedPool", _tx.MsgUnPoolWhitelistedPool]];
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
    superfluidDelegate: function superfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: _tx.MsgSuperfluidDelegate.encode(value).finish()
      };
    },
    superfluidUndelegate: function superfluidUndelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: _tx.MsgSuperfluidUndelegate.encode(value).finish()
      };
    },
    superfluidUnbondLock: function superfluidUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: _tx.MsgSuperfluidUnbondLock.encode(value).finish()
      };
    },
    superfluidUndelegateAndUnbondLock: function superfluidUndelegateAndUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: _tx.MsgSuperfluidUndelegateAndUnbondLock.encode(value).finish()
      };
    },
    lockAndSuperfluidDelegate: function lockAndSuperfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: _tx.MsgLockAndSuperfluidDelegate.encode(value).finish()
      };
    },
    unPoolWhitelistedPool: function unPoolWhitelistedPool(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: _tx.MsgUnPoolWhitelistedPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    superfluidDelegate: function superfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: value
      };
    },
    superfluidUndelegate: function superfluidUndelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: value
      };
    },
    superfluidUnbondLock: function superfluidUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: value
      };
    },
    superfluidUndelegateAndUnbondLock: function superfluidUndelegateAndUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: value
      };
    },
    lockAndSuperfluidDelegate: function lockAndSuperfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: value
      };
    },
    unPoolWhitelistedPool: function unPoolWhitelistedPool(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: value
      };
    }
  },
  fromPartial: {
    superfluidDelegate: function superfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: _tx.MsgSuperfluidDelegate.fromPartial(value)
      };
    },
    superfluidUndelegate: function superfluidUndelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: _tx.MsgSuperfluidUndelegate.fromPartial(value)
      };
    },
    superfluidUnbondLock: function superfluidUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: _tx.MsgSuperfluidUnbondLock.fromPartial(value)
      };
    },
    superfluidUndelegateAndUnbondLock: function superfluidUndelegateAndUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: _tx.MsgSuperfluidUndelegateAndUnbondLock.fromPartial(value)
      };
    },
    lockAndSuperfluidDelegate: function lockAndSuperfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: _tx.MsgLockAndSuperfluidDelegate.fromPartial(value)
      };
    },
    unPoolWhitelistedPool: function unPoolWhitelistedPool(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: _tx.MsgUnPoolWhitelistedPool.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;