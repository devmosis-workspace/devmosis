import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
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
export const RecoveredSinceDowntimeOfLengthRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.downtime !== 0) {
      writer.uint32(8).int32(message.downtime);
    }
    if (message.recovery !== undefined) {
      Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtime = reader.int32();
          break;
        case 2:
          message.recovery = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$downtime;
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    message.downtime = (_object$downtime = object.downtime) !== null && _object$downtime !== void 0 ? _object$downtime : 0;
    message.recovery = object.recovery !== undefined && object.recovery !== null ? Duration.fromPartial(object.recovery) : undefined;
    return message;
  }
};
function createBaseRecoveredSinceDowntimeOfLengthResponse() {
  return {
    succesfullyRecovered: false
  };
}
export const RecoveredSinceDowntimeOfLengthResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.succesfullyRecovered === true) {
      writer.uint32(8).bool(message.succesfullyRecovered);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$succesfullyRe;
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    message.succesfullyRecovered = (_object$succesfullyRe = object.succesfullyRecovered) !== null && _object$succesfullyRe !== void 0 ? _object$succesfullyRe : false;
    return message;
  }
};