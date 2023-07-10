"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgLockTokensResponse = exports.MsgLockTokens = exports.MsgForceUnlockResponse = exports.MsgForceUnlock = exports.MsgExtendLockupResponse = exports.MsgExtendLockup = exports.MsgBeginUnlockingResponse = exports.MsgBeginUnlockingAllResponse = exports.MsgBeginUnlockingAll = exports.MsgBeginUnlocking = void 0;
var _duration = require("../../google/protobuf/duration");
var _coin = require("../../cosmos/base/v1beta1/coin");
var _lock = require("./lock");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */

/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */

/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */

/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */

function createBaseMsgLockTokens() {
  return {
    owner: "",
    duration: undefined,
    coins: []
  };
}
var MsgLockTokens = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.coins),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLockTokens();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner, _object$coins;
    var message = createBaseMsgLockTokens();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgLockTokens = MsgLockTokens;
function createBaseMsgLockTokensResponse() {
  return {
    ID: _helpers.Long.UZERO
  };
}
var MsgLockTokensResponse = {
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
    var message = createBaseMsgLockTokensResponse();
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
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgLockTokensResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgLockTokensResponse = MsgLockTokensResponse;
function createBaseMsgBeginUnlockingAll() {
  return {
    owner: ""
  };
}
var MsgBeginUnlockingAll = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginUnlockingAll();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner2;
    var message = createBaseMsgBeginUnlockingAll();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    return message;
  }
};
exports.MsgBeginUnlockingAll = MsgBeginUnlockingAll;
function createBaseMsgBeginUnlockingAllResponse() {
  return {
    unlocks: []
  };
}
var MsgBeginUnlockingAllResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.unlocks),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginUnlockingAllResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$unlocks;
    var message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = ((_object$unlocks = object.unlocks) === null || _object$unlocks === void 0 ? void 0 : _object$unlocks.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgBeginUnlockingAllResponse = MsgBeginUnlockingAllResponse;
function createBaseMsgBeginUnlocking() {
  return {
    owner: "",
    ID: _helpers.Long.UZERO,
    coins: []
  };
}
var MsgBeginUnlocking = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    var _iterator3 = _createForOfIteratorHelper(message.coins),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginUnlocking();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner3, _object$coins2;
    var message = createBaseMsgBeginUnlocking();
    message.owner = (_object$owner3 = object.owner) !== null && _object$owner3 !== void 0 ? _object$owner3 : "";
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgBeginUnlocking = MsgBeginUnlocking;
function createBaseMsgBeginUnlockingResponse() {
  return {
    success: false,
    unlockingLockID: _helpers.Long.UZERO
  };
}
var MsgBeginUnlockingResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (!message.unlockingLockID.isZero()) {
      writer.uint32(16).uint64(message.unlockingLockID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginUnlockingResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.unlockingLockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$success;
    var message = createBaseMsgBeginUnlockingResponse();
    message.success = (_object$success = object.success) !== null && _object$success !== void 0 ? _object$success : false;
    message.unlockingLockID = object.unlockingLockID !== undefined && object.unlockingLockID !== null ? _helpers.Long.fromValue(object.unlockingLockID) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgBeginUnlockingResponse = MsgBeginUnlockingResponse;
function createBaseMsgExtendLockup() {
  return {
    owner: "",
    ID: _helpers.Long.UZERO,
    duration: undefined
  };
}
var MsgExtendLockup = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExtendLockup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner4;
    var message = createBaseMsgExtendLockup();
    message.owner = (_object$owner4 = object.owner) !== null && _object$owner4 !== void 0 ? _object$owner4 : "";
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
exports.MsgExtendLockup = MsgExtendLockup;
function createBaseMsgExtendLockupResponse() {
  return {
    success: false
  };
}
var MsgExtendLockupResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExtendLockupResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$success2;
    var message = createBaseMsgExtendLockupResponse();
    message.success = (_object$success2 = object.success) !== null && _object$success2 !== void 0 ? _object$success2 : false;
    return message;
  }
};
exports.MsgExtendLockupResponse = MsgExtendLockupResponse;
function createBaseMsgForceUnlock() {
  return {
    owner: "",
    ID: _helpers.Long.UZERO,
    coins: []
  };
}
var MsgForceUnlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    var _iterator4 = _createForOfIteratorHelper(message.coins),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgForceUnlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner5, _object$coins3;
    var message = createBaseMsgForceUnlock();
    message.owner = (_object$owner5 = object.owner) !== null && _object$owner5 !== void 0 ? _object$owner5 : "";
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    message.coins = ((_object$coins3 = object.coins) === null || _object$coins3 === void 0 ? void 0 : _object$coins3.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgForceUnlock = MsgForceUnlock;
function createBaseMsgForceUnlockResponse() {
  return {
    success: false
  };
}
var MsgForceUnlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgForceUnlockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$success3;
    var message = createBaseMsgForceUnlockResponse();
    message.success = (_object$success3 = object.success) !== null && _object$success3 !== void 0 ? _object$success3 : false;
    return message;
  }
};
exports.MsgForceUnlockResponse = MsgForceUnlockResponse;