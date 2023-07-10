"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LockableDurationsInfo = exports.Gauge = void 0;
var _lock = require("../lockup/lock");
var _coin = require("../../cosmos/base/v1beta1/coin");
var _timestamp = require("../../google/protobuf/timestamp");
var _duration = require("../../google/protobuf/duration");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */

/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */

function createBaseGauge() {
  return {
    id: _helpers.Long.UZERO,
    isPerpetual: false,
    distributeTo: undefined,
    coins: [],
    startTime: undefined,
    numEpochsPaidOver: _helpers.Long.UZERO,
    filledEpochs: _helpers.Long.UZERO,
    distributedCoins: []
  };
}
var Gauge = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.isPerpetual === true) {
      writer.uint32(16).bool(message.isPerpetual);
    }
    if (message.distributeTo !== undefined) {
      _lock.QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.coins),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.startTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.startTime), writer.uint32(42).fork()).ldelim();
    }
    if (!message.numEpochsPaidOver.isZero()) {
      writer.uint32(48).uint64(message.numEpochsPaidOver);
    }
    if (!message.filledEpochs.isZero()) {
      writer.uint32(56).uint64(message.filledEpochs);
    }
    var _iterator2 = _createForOfIteratorHelper(message.distributedCoins),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _coin.Coin.encode(_v, writer.uint32(66).fork()).ldelim();
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
    var message = createBaseGauge();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.isPerpetual = reader.bool();
          break;
        case 3:
          message.distributeTo = _lock.QueryCondition.decode(reader, reader.uint32());
          break;
        case 4:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.startTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.numEpochsPaidOver = reader.uint64();
          break;
        case 7:
          message.filledEpochs = reader.uint64();
          break;
        case 8:
          message.distributedCoins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$isPerpetual, _object$coins, _object$startTime, _object$distributedCo;
    var message = createBaseGauge();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.isPerpetual = (_object$isPerpetual = object.isPerpetual) !== null && _object$isPerpetual !== void 0 ? _object$isPerpetual : false;
    message.distributeTo = object.distributeTo !== undefined && object.distributeTo !== null ? _lock.QueryCondition.fromPartial(object.distributeTo) : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.startTime = (_object$startTime = object.startTime) !== null && _object$startTime !== void 0 ? _object$startTime : undefined;
    message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? _helpers.Long.fromValue(object.numEpochsPaidOver) : _helpers.Long.UZERO;
    message.filledEpochs = object.filledEpochs !== undefined && object.filledEpochs !== null ? _helpers.Long.fromValue(object.filledEpochs) : _helpers.Long.UZERO;
    message.distributedCoins = ((_object$distributedCo = object.distributedCoins) === null || _object$distributedCo === void 0 ? void 0 : _object$distributedCo.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Gauge = Gauge;
function createBaseLockableDurationsInfo() {
  return {
    lockableDurations: []
  };
}
var LockableDurationsInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.lockableDurations),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _duration.Duration.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseLockableDurationsInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(_duration.Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$lockableDurat;
    var message = createBaseLockableDurationsInfo();
    message.lockableDurations = ((_object$lockableDurat = object.lockableDurations) === null || _object$lockableDurat === void 0 ? void 0 : _object$lockableDurat.map(function (e) {
      return _duration.Duration.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.LockableDurationsInfo = LockableDurationsInfo;