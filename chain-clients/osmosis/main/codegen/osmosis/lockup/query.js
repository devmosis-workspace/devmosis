"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyntheticLockupsByLockupIDResponse = exports.SyntheticLockupsByLockupIDRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.NextLockIDResponse = exports.NextLockIDRequest = exports.ModuleLockedAmountResponse = exports.ModuleLockedAmountRequest = exports.ModuleBalanceResponse = exports.ModuleBalanceRequest = exports.LockedResponse = exports.LockedRequest = exports.LockedDenomResponse = exports.LockedDenomRequest = exports.AccountUnlockingCoinsResponse = exports.AccountUnlockingCoinsRequest = exports.AccountUnlockedBeforeTimeResponse = exports.AccountUnlockedBeforeTimeRequest = exports.AccountUnlockableCoinsResponse = exports.AccountUnlockableCoinsRequest = exports.AccountLockedPastTimeResponse = exports.AccountLockedPastTimeRequest = exports.AccountLockedPastTimeNotUnlockingOnlyResponse = exports.AccountLockedPastTimeNotUnlockingOnlyRequest = exports.AccountLockedPastTimeDenomResponse = exports.AccountLockedPastTimeDenomRequest = exports.AccountLockedLongerDurationResponse = exports.AccountLockedLongerDurationRequest = exports.AccountLockedLongerDurationNotUnlockingOnlyResponse = exports.AccountLockedLongerDurationNotUnlockingOnlyRequest = exports.AccountLockedLongerDurationDenomResponse = exports.AccountLockedLongerDurationDenomRequest = exports.AccountLockedDurationResponse = exports.AccountLockedDurationRequest = exports.AccountLockedCoinsResponse = exports.AccountLockedCoinsRequest = void 0;
var _timestamp = require("../../google/protobuf/timestamp");
var _duration = require("../../google/protobuf/duration");
var _coin = require("../../cosmos/base/v1beta1/coin");
var _lock = require("./lock");
var _params = require("./params");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseModuleBalanceRequest() {
  return {};
}
var ModuleBalanceRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleBalanceRequest();
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
  fromPartial: function fromPartial(_) {
    var message = createBaseModuleBalanceRequest();
    return message;
  }
};
exports.ModuleBalanceRequest = ModuleBalanceRequest;
function createBaseModuleBalanceResponse() {
  return {
    coins: []
  };
}
var ModuleBalanceResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.coins),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseModuleBalanceResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var _object$coins;
    var message = createBaseModuleBalanceResponse();
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ModuleBalanceResponse = ModuleBalanceResponse;
function createBaseModuleLockedAmountRequest() {
  return {};
}
var ModuleLockedAmountRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleLockedAmountRequest();
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
  fromPartial: function fromPartial(_) {
    var message = createBaseModuleLockedAmountRequest();
    return message;
  }
};
exports.ModuleLockedAmountRequest = ModuleLockedAmountRequest;
function createBaseModuleLockedAmountResponse() {
  return {
    coins: []
  };
}
var ModuleLockedAmountResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.coins),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseModuleLockedAmountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var _object$coins2;
    var message = createBaseModuleLockedAmountResponse();
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ModuleLockedAmountResponse = ModuleLockedAmountResponse;
function createBaseAccountUnlockableCoinsRequest() {
  return {
    owner: ""
  };
}
var AccountUnlockableCoinsRequest = {
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
    var message = createBaseAccountUnlockableCoinsRequest();
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
    var _object$owner;
    var message = createBaseAccountUnlockableCoinsRequest();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  }
};
exports.AccountUnlockableCoinsRequest = AccountUnlockableCoinsRequest;
function createBaseAccountUnlockableCoinsResponse() {
  return {
    coins: []
  };
}
var AccountUnlockableCoinsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.coins),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseAccountUnlockableCoinsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var _object$coins3;
    var message = createBaseAccountUnlockableCoinsResponse();
    message.coins = ((_object$coins3 = object.coins) === null || _object$coins3 === void 0 ? void 0 : _object$coins3.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountUnlockableCoinsResponse = AccountUnlockableCoinsResponse;
function createBaseAccountUnlockingCoinsRequest() {
  return {
    owner: ""
  };
}
var AccountUnlockingCoinsRequest = {
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
    var message = createBaseAccountUnlockingCoinsRequest();
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
    var message = createBaseAccountUnlockingCoinsRequest();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    return message;
  }
};
exports.AccountUnlockingCoinsRequest = AccountUnlockingCoinsRequest;
function createBaseAccountUnlockingCoinsResponse() {
  return {
    coins: []
  };
}
var AccountUnlockingCoinsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.coins),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseAccountUnlockingCoinsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var _object$coins4;
    var message = createBaseAccountUnlockingCoinsResponse();
    message.coins = ((_object$coins4 = object.coins) === null || _object$coins4 === void 0 ? void 0 : _object$coins4.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountUnlockingCoinsResponse = AccountUnlockingCoinsResponse;
function createBaseAccountLockedCoinsRequest() {
  return {
    owner: ""
  };
}
var AccountLockedCoinsRequest = {
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
    var message = createBaseAccountLockedCoinsRequest();
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
    var _object$owner3;
    var message = createBaseAccountLockedCoinsRequest();
    message.owner = (_object$owner3 = object.owner) !== null && _object$owner3 !== void 0 ? _object$owner3 : "";
    return message;
  }
};
exports.AccountLockedCoinsRequest = AccountLockedCoinsRequest;
function createBaseAccountLockedCoinsResponse() {
  return {
    coins: []
  };
}
var AccountLockedCoinsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.coins),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedCoinsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var _object$coins5;
    var message = createBaseAccountLockedCoinsResponse();
    message.coins = ((_object$coins5 = object.coins) === null || _object$coins5 === void 0 ? void 0 : _object$coins5.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountLockedCoinsResponse = AccountLockedCoinsResponse;
function createBaseAccountLockedPastTimeRequest() {
  return {
    owner: "",
    timestamp: undefined
  };
}
var AccountLockedPastTimeRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedPastTimeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner4, _object$timestamp;
    var message = createBaseAccountLockedPastTimeRequest();
    message.owner = (_object$owner4 = object.owner) !== null && _object$owner4 !== void 0 ? _object$owner4 : "";
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : undefined;
    return message;
  }
};
exports.AccountLockedPastTimeRequest = AccountLockedPastTimeRequest;
function createBaseAccountLockedPastTimeResponse() {
  return {
    locks: []
  };
}
var AccountLockedPastTimeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.locks),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedPastTimeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$locks;
    var message = createBaseAccountLockedPastTimeResponse();
    message.locks = ((_object$locks = object.locks) === null || _object$locks === void 0 ? void 0 : _object$locks.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountLockedPastTimeResponse = AccountLockedPastTimeResponse;
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest() {
  return {
    owner: "",
    timestamp: undefined
  };
}
var AccountLockedPastTimeNotUnlockingOnlyRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner5, _object$timestamp2;
    var message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    message.owner = (_object$owner5 = object.owner) !== null && _object$owner5 !== void 0 ? _object$owner5 : "";
    message.timestamp = (_object$timestamp2 = object.timestamp) !== null && _object$timestamp2 !== void 0 ? _object$timestamp2 : undefined;
    return message;
  }
};
exports.AccountLockedPastTimeNotUnlockingOnlyRequest = AccountLockedPastTimeNotUnlockingOnlyRequest;
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse() {
  return {
    locks: []
  };
}
var AccountLockedPastTimeNotUnlockingOnlyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.locks),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$locks2;
    var message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    message.locks = ((_object$locks2 = object.locks) === null || _object$locks2 === void 0 ? void 0 : _object$locks2.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountLockedPastTimeNotUnlockingOnlyResponse = AccountLockedPastTimeNotUnlockingOnlyResponse;
function createBaseAccountUnlockedBeforeTimeRequest() {
  return {
    owner: "",
    timestamp: undefined
  };
}
var AccountUnlockedBeforeTimeRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountUnlockedBeforeTimeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner6, _object$timestamp3;
    var message = createBaseAccountUnlockedBeforeTimeRequest();
    message.owner = (_object$owner6 = object.owner) !== null && _object$owner6 !== void 0 ? _object$owner6 : "";
    message.timestamp = (_object$timestamp3 = object.timestamp) !== null && _object$timestamp3 !== void 0 ? _object$timestamp3 : undefined;
    return message;
  }
};
exports.AccountUnlockedBeforeTimeRequest = AccountUnlockedBeforeTimeRequest;
function createBaseAccountUnlockedBeforeTimeResponse() {
  return {
    locks: []
  };
}
var AccountUnlockedBeforeTimeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator8 = _createForOfIteratorHelper(message.locks),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountUnlockedBeforeTimeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$locks3;
    var message = createBaseAccountUnlockedBeforeTimeResponse();
    message.locks = ((_object$locks3 = object.locks) === null || _object$locks3 === void 0 ? void 0 : _object$locks3.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountUnlockedBeforeTimeResponse = AccountUnlockedBeforeTimeResponse;
function createBaseAccountLockedPastTimeDenomRequest() {
  return {
    owner: "",
    timestamp: undefined,
    denom: ""
  };
}
var AccountLockedPastTimeDenomRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedPastTimeDenomRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner7, _object$timestamp4, _object$denom;
    var message = createBaseAccountLockedPastTimeDenomRequest();
    message.owner = (_object$owner7 = object.owner) !== null && _object$owner7 !== void 0 ? _object$owner7 : "";
    message.timestamp = (_object$timestamp4 = object.timestamp) !== null && _object$timestamp4 !== void 0 ? _object$timestamp4 : undefined;
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
exports.AccountLockedPastTimeDenomRequest = AccountLockedPastTimeDenomRequest;
function createBaseAccountLockedPastTimeDenomResponse() {
  return {
    locks: []
  };
}
var AccountLockedPastTimeDenomResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator9 = _createForOfIteratorHelper(message.locks),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedPastTimeDenomResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$locks4;
    var message = createBaseAccountLockedPastTimeDenomResponse();
    message.locks = ((_object$locks4 = object.locks) === null || _object$locks4 === void 0 ? void 0 : _object$locks4.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountLockedPastTimeDenomResponse = AccountLockedPastTimeDenomResponse;
function createBaseLockedDenomRequest() {
  return {
    denom: "",
    duration: undefined
  };
}
var LockedDenomRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLockedDenomRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
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
    var _object$denom2;
    var message = createBaseLockedDenomRequest();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
exports.LockedDenomRequest = LockedDenomRequest;
function createBaseLockedDenomResponse() {
  return {
    amount: ""
  };
}
var LockedDenomResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLockedDenomResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount;
    var message = createBaseLockedDenomResponse();
    message.amount = (_object$amount = object.amount) !== null && _object$amount !== void 0 ? _object$amount : "";
    return message;
  }
};
exports.LockedDenomResponse = LockedDenomResponse;
function createBaseLockedRequest() {
  return {
    lockId: _helpers.Long.UZERO
  };
}
var LockedRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLockedRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseLockedRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.LockedRequest = LockedRequest;
function createBaseLockedResponse() {
  return {
    lock: undefined
  };
}
var LockedResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.lock !== undefined) {
      _lock.PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLockedResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lock = _lock.PeriodLock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseLockedResponse();
    message.lock = object.lock !== undefined && object.lock !== null ? _lock.PeriodLock.fromPartial(object.lock) : undefined;
    return message;
  }
};
exports.LockedResponse = LockedResponse;
function createBaseNextLockIDRequest() {
  return {};
}
var NextLockIDRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNextLockIDRequest();
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
  fromPartial: function fromPartial(_) {
    var message = createBaseNextLockIDRequest();
    return message;
  }
};
exports.NextLockIDRequest = NextLockIDRequest;
function createBaseNextLockIDResponse() {
  return {
    lockId: _helpers.Long.UZERO
  };
}
var NextLockIDResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNextLockIDResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseNextLockIDResponse();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.NextLockIDResponse = NextLockIDResponse;
function createBaseSyntheticLockupsByLockupIDRequest() {
  return {
    lockId: _helpers.Long.UZERO
  };
}
var SyntheticLockupsByLockupIDRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSyntheticLockupsByLockupIDRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSyntheticLockupsByLockupIDRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.SyntheticLockupsByLockupIDRequest = SyntheticLockupsByLockupIDRequest;
function createBaseSyntheticLockupsByLockupIDResponse() {
  return {
    syntheticLocks: []
  };
}
var SyntheticLockupsByLockupIDResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator10 = _createForOfIteratorHelper(message.syntheticLocks),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        _lock.SyntheticLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSyntheticLockupsByLockupIDResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syntheticLocks.push(_lock.SyntheticLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$syntheticLock;
    var message = createBaseSyntheticLockupsByLockupIDResponse();
    message.syntheticLocks = ((_object$syntheticLock = object.syntheticLocks) === null || _object$syntheticLock === void 0 ? void 0 : _object$syntheticLock.map(function (e) {
      return _lock.SyntheticLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SyntheticLockupsByLockupIDResponse = SyntheticLockupsByLockupIDResponse;
function createBaseAccountLockedLongerDurationRequest() {
  return {
    owner: "",
    duration: undefined
  };
}
var AccountLockedLongerDurationRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedLongerDurationRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
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
    var _object$owner8;
    var message = createBaseAccountLockedLongerDurationRequest();
    message.owner = (_object$owner8 = object.owner) !== null && _object$owner8 !== void 0 ? _object$owner8 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
exports.AccountLockedLongerDurationRequest = AccountLockedLongerDurationRequest;
function createBaseAccountLockedLongerDurationResponse() {
  return {
    locks: []
  };
}
var AccountLockedLongerDurationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator11 = _createForOfIteratorHelper(message.locks),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var v = _step11.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedLongerDurationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$locks5;
    var message = createBaseAccountLockedLongerDurationResponse();
    message.locks = ((_object$locks5 = object.locks) === null || _object$locks5 === void 0 ? void 0 : _object$locks5.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountLockedLongerDurationResponse = AccountLockedLongerDurationResponse;
function createBaseAccountLockedDurationRequest() {
  return {
    owner: "",
    duration: undefined
  };
}
var AccountLockedDurationRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedDurationRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
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
    var _object$owner9;
    var message = createBaseAccountLockedDurationRequest();
    message.owner = (_object$owner9 = object.owner) !== null && _object$owner9 !== void 0 ? _object$owner9 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
exports.AccountLockedDurationRequest = AccountLockedDurationRequest;
function createBaseAccountLockedDurationResponse() {
  return {
    locks: []
  };
}
var AccountLockedDurationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator12 = _createForOfIteratorHelper(message.locks),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var v = _step12.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedDurationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$locks6;
    var message = createBaseAccountLockedDurationResponse();
    message.locks = ((_object$locks6 = object.locks) === null || _object$locks6 === void 0 ? void 0 : _object$locks6.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountLockedDurationResponse = AccountLockedDurationResponse;
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest() {
  return {
    owner: "",
    duration: undefined
  };
}
var AccountLockedLongerDurationNotUnlockingOnlyRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
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
    var _object$owner10;
    var message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    message.owner = (_object$owner10 = object.owner) !== null && _object$owner10 !== void 0 ? _object$owner10 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
exports.AccountLockedLongerDurationNotUnlockingOnlyRequest = AccountLockedLongerDurationNotUnlockingOnlyRequest;
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse() {
  return {
    locks: []
  };
}
var AccountLockedLongerDurationNotUnlockingOnlyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator13 = _createForOfIteratorHelper(message.locks),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var v = _step13.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$locks7;
    var message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    message.locks = ((_object$locks7 = object.locks) === null || _object$locks7 === void 0 ? void 0 : _object$locks7.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountLockedLongerDurationNotUnlockingOnlyResponse = AccountLockedLongerDurationNotUnlockingOnlyResponse;
function createBaseAccountLockedLongerDurationDenomRequest() {
  return {
    owner: "",
    duration: undefined,
    denom: ""
  };
}
var AccountLockedLongerDurationDenomRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedLongerDurationDenomRequest();
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
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner11, _object$denom3;
    var message = createBaseAccountLockedLongerDurationDenomRequest();
    message.owner = (_object$owner11 = object.owner) !== null && _object$owner11 !== void 0 ? _object$owner11 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    message.denom = (_object$denom3 = object.denom) !== null && _object$denom3 !== void 0 ? _object$denom3 : "";
    return message;
  }
};
exports.AccountLockedLongerDurationDenomRequest = AccountLockedLongerDurationDenomRequest;
function createBaseAccountLockedLongerDurationDenomResponse() {
  return {
    locks: []
  };
}
var AccountLockedLongerDurationDenomResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator14 = _createForOfIteratorHelper(message.locks),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var v = _step14.value;
        _lock.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccountLockedLongerDurationDenomResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(_lock.PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$locks8;
    var message = createBaseAccountLockedLongerDurationDenomResponse();
    message.locks = ((_object$locks8 = object.locks) === null || _object$locks8 === void 0 ? void 0 : _object$locks8.map(function (e) {
      return _lock.PeriodLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AccountLockedLongerDurationDenomResponse = AccountLockedLongerDurationDenomResponse;
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
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
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;