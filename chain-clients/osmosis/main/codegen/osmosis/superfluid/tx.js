"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUnPoolWhitelistedPoolResponse = exports.MsgUnPoolWhitelistedPool = exports.MsgSuperfluidUndelegateResponse = exports.MsgSuperfluidUndelegateAndUnbondLockResponse = exports.MsgSuperfluidUndelegateAndUnbondLock = exports.MsgSuperfluidUndelegate = exports.MsgSuperfluidUnbondLockResponse = exports.MsgSuperfluidUnbondLock = exports.MsgSuperfluidDelegateResponse = exports.MsgSuperfluidDelegate = exports.MsgLockAndSuperfluidDelegateResponse = exports.MsgLockAndSuperfluidDelegate = void 0;
var _coin = require("../../cosmos/base/v1beta1/coin");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */

/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */

/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */

/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */

function createBaseMsgSuperfluidDelegate() {
  return {
    sender: "",
    lockId: _helpers.Long.UZERO,
    valAddr: ""
  };
}
var MsgSuperfluidDelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuperfluidDelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      lockId: (0, _helpers.isSet)(object.lockId) ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO,
      valAddr: (0, _helpers.isSet)(object.valAddr) ? String(object.valAddr) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$valAddr;
    var message = createBaseMsgSuperfluidDelegate();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    message.valAddr = (_object$valAddr = object.valAddr) !== null && _object$valAddr !== void 0 ? _object$valAddr : "";
    return message;
  }
};
exports.MsgSuperfluidDelegate = MsgSuperfluidDelegate;
function createBaseMsgSuperfluidDelegateResponse() {
  return {};
}
var MsgSuperfluidDelegateResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuperfluidDelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSuperfluidDelegateResponse();
    return message;
  }
};
exports.MsgSuperfluidDelegateResponse = MsgSuperfluidDelegateResponse;
function createBaseMsgSuperfluidUndelegate() {
  return {
    sender: "",
    lockId: _helpers.Long.UZERO
  };
}
var MsgSuperfluidUndelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuperfluidUndelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      lockId: (0, _helpers.isSet)(object.lockId) ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender2;
    var message = createBaseMsgSuperfluidUndelegate();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgSuperfluidUndelegate = MsgSuperfluidUndelegate;
function createBaseMsgSuperfluidUndelegateResponse() {
  return {};
}
var MsgSuperfluidUndelegateResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuperfluidUndelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSuperfluidUndelegateResponse();
    return message;
  }
};
exports.MsgSuperfluidUndelegateResponse = MsgSuperfluidUndelegateResponse;
function createBaseMsgSuperfluidUnbondLock() {
  return {
    sender: "",
    lockId: _helpers.Long.UZERO
  };
}
var MsgSuperfluidUnbondLock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuperfluidUnbondLock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      lockId: (0, _helpers.isSet)(object.lockId) ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender3;
    var message = createBaseMsgSuperfluidUnbondLock();
    message.sender = (_object$sender3 = object.sender) !== null && _object$sender3 !== void 0 ? _object$sender3 : "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgSuperfluidUnbondLock = MsgSuperfluidUnbondLock;
function createBaseMsgSuperfluidUnbondLockResponse() {
  return {};
}
var MsgSuperfluidUnbondLockResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuperfluidUnbondLockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSuperfluidUnbondLockResponse();
    return message;
  }
};
exports.MsgSuperfluidUnbondLockResponse = MsgSuperfluidUnbondLockResponse;
function createBaseMsgSuperfluidUndelegateAndUnbondLock() {
  return {
    sender: "",
    lockId: _helpers.Long.UZERO,
    coin: undefined
  };
}
var MsgSuperfluidUndelegateAndUnbondLock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.coin !== undefined) {
      _coin.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        case 3:
          message.coin = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      lockId: (0, _helpers.isSet)(object.lockId) ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO,
      coin: (0, _helpers.isSet)(object.coin) ? _coin.Coin.fromJSON(object.coin) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender4;
    var message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
    message.sender = (_object$sender4 = object.sender) !== null && _object$sender4 !== void 0 ? _object$sender4 : "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    message.coin = object.coin !== undefined && object.coin !== null ? _coin.Coin.fromPartial(object.coin) : undefined;
    return message;
  }
};
exports.MsgSuperfluidUndelegateAndUnbondLock = MsgSuperfluidUndelegateAndUnbondLock;
function createBaseMsgSuperfluidUndelegateAndUnbondLockResponse() {
  return {};
}
var MsgSuperfluidUndelegateAndUnbondLockResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
    return message;
  }
};
exports.MsgSuperfluidUndelegateAndUnbondLockResponse = MsgSuperfluidUndelegateAndUnbondLockResponse;
function createBaseMsgLockAndSuperfluidDelegate() {
  return {
    sender: "",
    coins: [],
    valAddr: ""
  };
}
var MsgLockAndSuperfluidDelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    var _iterator = _createForOfIteratorHelper(message.coins),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLockAndSuperfluidDelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      valAddr: (0, _helpers.isSet)(object.valAddr) ? String(object.valAddr) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender5, _object$coins, _object$valAddr2;
    var message = createBaseMsgLockAndSuperfluidDelegate();
    message.sender = (_object$sender5 = object.sender) !== null && _object$sender5 !== void 0 ? _object$sender5 : "";
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.valAddr = (_object$valAddr2 = object.valAddr) !== null && _object$valAddr2 !== void 0 ? _object$valAddr2 : "";
    return message;
  }
};
exports.MsgLockAndSuperfluidDelegate = MsgLockAndSuperfluidDelegate;
function createBaseMsgLockAndSuperfluidDelegateResponse() {
  return {
    ID: _helpers.Long.UZERO
  };
}
var MsgLockAndSuperfluidDelegateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLockAndSuperfluidDelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      ID: (0, _helpers.isSet)(object.ID) ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgLockAndSuperfluidDelegateResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgLockAndSuperfluidDelegateResponse = MsgLockAndSuperfluidDelegateResponse;
function createBaseMsgUnPoolWhitelistedPool() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO
  };
}
var MsgUnPoolWhitelistedPool = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnPoolWhitelistedPool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
      poolId: (0, _helpers.isSet)(object.poolId) ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$sender6;
    var message = createBaseMsgUnPoolWhitelistedPool();
    message.sender = (_object$sender6 = object.sender) !== null && _object$sender6 !== void 0 ? _object$sender6 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgUnPoolWhitelistedPool = MsgUnPoolWhitelistedPool;
function createBaseMsgUnPoolWhitelistedPoolResponse() {
  return {
    exitedLockIds: []
  };
}
var MsgUnPoolWhitelistedPoolResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator2 = _createForOfIteratorHelper(message.exitedLockIds),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnPoolWhitelistedPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.exitedLockIds.push(reader.uint64());
            }
          } else {
            message.exitedLockIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      exitedLockIds: Array.isArray(object === null || object === void 0 ? void 0 : object.exitedLockIds) ? object.exitedLockIds.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$exitedLockIds;
    var message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = ((_object$exitedLockIds = object.exitedLockIds) === null || _object$exitedLockIds === void 0 ? void 0 : _object$exitedLockIds.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.MsgUnPoolWhitelistedPoolResponse = MsgUnPoolWhitelistedPoolResponse;