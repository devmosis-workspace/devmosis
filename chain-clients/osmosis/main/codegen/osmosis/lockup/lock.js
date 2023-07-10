"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyntheticLock = exports.QueryCondition = exports.PeriodLock = exports.LockQueryTypeSDKType = exports.LockQueryType = void 0;
exports.lockQueryTypeFromJSON = lockQueryTypeFromJSON;
exports.lockQueryTypeToJSON = lockQueryTypeToJSON;
var _duration = require("../../google/protobuf/duration");
var _timestamp = require("../../google/protobuf/timestamp");
var _coin = require("../../cosmos/base/v1beta1/coin");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
var LockQueryType = /*#__PURE__*/function (LockQueryType) {
  LockQueryType[LockQueryType["ByDuration"] = 0] = "ByDuration";
  LockQueryType[LockQueryType["ByTime"] = 1] = "ByTime";
  LockQueryType[LockQueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return LockQueryType;
}({});
exports.LockQueryType = LockQueryType;
var LockQueryTypeSDKType = LockQueryType;
exports.LockQueryTypeSDKType = LockQueryTypeSDKType;
function lockQueryTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "ByDuration":
      return LockQueryType.ByDuration;
    case 1:
    case "ByTime":
      return LockQueryType.ByTime;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LockQueryType.UNRECOGNIZED;
  }
}
function lockQueryTypeToJSON(object) {
  switch (object) {
    case LockQueryType.ByDuration:
      return "ByDuration";
    case LockQueryType.ByTime:
      return "ByTime";
    case LockQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */

/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */

/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */

/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */

/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */

/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */

function createBasePeriodLock() {
  return {
    ID: _helpers.Long.UZERO,
    owner: "",
    duration: undefined,
    endTime: undefined,
    coins: []
  };
}
var PeriodLock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.endTime), writer.uint32(34).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.coins),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(42).fork()).ldelim();
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
    var message = createBasePeriodLock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.endTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
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
    var _object$owner, _object$endTime, _object$coins;
    var message = createBasePeriodLock();
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    message.endTime = (_object$endTime = object.endTime) !== null && _object$endTime !== void 0 ? _object$endTime : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.PeriodLock = PeriodLock;
function createBaseQueryCondition() {
  return {
    lockQueryType: 0,
    denom: "",
    duration: undefined,
    timestamp: undefined
  };
}
var QueryCondition = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.lockQueryType !== 0) {
      writer.uint32(8).int32(message.lockQueryType);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCondition();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockQueryType = reader.int32();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
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
    var _object$lockQueryType, _object$denom, _object$timestamp;
    var message = createBaseQueryCondition();
    message.lockQueryType = (_object$lockQueryType = object.lockQueryType) !== null && _object$lockQueryType !== void 0 ? _object$lockQueryType : 0;
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : undefined;
    return message;
  }
};
exports.QueryCondition = QueryCondition;
function createBaseSyntheticLock() {
  return {
    underlyingLockId: _helpers.Long.UZERO,
    synthDenom: "",
    endTime: undefined,
    duration: undefined
  };
}
var SyntheticLock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.underlyingLockId.isZero()) {
      writer.uint32(8).uint64(message.underlyingLockId);
    }
    if (message.synthDenom !== "") {
      writer.uint32(18).string(message.synthDenom);
    }
    if (message.endTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.endTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSyntheticLock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underlyingLockId = reader.uint64();
          break;
        case 2:
          message.synthDenom = reader.string();
          break;
        case 3:
          message.endTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
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
    var _object$synthDenom, _object$endTime2;
    var message = createBaseSyntheticLock();
    message.underlyingLockId = object.underlyingLockId !== undefined && object.underlyingLockId !== null ? _helpers.Long.fromValue(object.underlyingLockId) : _helpers.Long.UZERO;
    message.synthDenom = (_object$synthDenom = object.synthDenom) !== null && _object$synthDenom !== void 0 ? _object$synthDenom : "";
    message.endTime = (_object$endTime2 = object.endTime) !== null && _object$endTime2 !== void 0 ? _object$endTime2 : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
exports.SyntheticLock = SyntheticLock;