"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecoveredSinceDowntimeOfLengthResponse = exports.RecoveredSinceDowntimeOfLengthRequest = void 0;
var _duration = require("../../../google/protobuf/duration");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */

/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */

function createBaseRecoveredSinceDowntimeOfLengthRequest() {
  return {
    downtime: 0,
    recovery: undefined
  };
}
var RecoveredSinceDowntimeOfLengthRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.downtime !== 0) {
      writer.uint32(8).int32(message.downtime);
    }
    if (message.recovery !== undefined) {
      _duration.Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtime = reader.int32();
          break;
        case 2:
          message.recovery = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$downtime;
    var message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    message.downtime = (_object$downtime = object.downtime) !== null && _object$downtime !== void 0 ? _object$downtime : 0;
    message.recovery = object.recovery !== undefined && object.recovery !== null ? _duration.Duration.fromPartial(object.recovery) : undefined;
    return message;
  }
};
exports.RecoveredSinceDowntimeOfLengthRequest = RecoveredSinceDowntimeOfLengthRequest;
function createBaseRecoveredSinceDowntimeOfLengthResponse() {
  return {
    succesfullyRecovered: false
  };
}
var RecoveredSinceDowntimeOfLengthResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.succesfullyRecovered === true) {
      writer.uint32(8).bool(message.succesfullyRecovered);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.succesfullyRecovered = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$succesfullyRe;
    var message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    message.succesfullyRecovered = (_object$succesfullyRe = object.succesfullyRecovered) !== null && _object$succesfullyRe !== void 0 ? _object$succesfullyRe : false;
    return message;
  }
};
exports.RecoveredSinceDowntimeOfLengthResponse = RecoveredSinceDowntimeOfLengthResponse;