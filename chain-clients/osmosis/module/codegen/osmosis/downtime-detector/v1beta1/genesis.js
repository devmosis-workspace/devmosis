import { downtimeFromJSON } from "./downtime_duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";

/** GenesisState defines the twap module's genesis state. */

/** GenesisState defines the twap module's genesis state. */

function createBaseGenesisDowntimeEntry() {
  return {
    duration: 0,
    lastDowntime: undefined
  };
}
export const GenesisDowntimeEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.lastDowntime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDowntime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDowntimeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32();
          break;
        case 2:
          message.lastDowntime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : 0,
      lastDowntime: isSet(object.lastDowntime) ? fromJsonTimestamp(object.lastDowntime) : undefined
    };
  },
  fromPartial(object) {
    var _object$duration, _object$lastDowntime;
    const message = createBaseGenesisDowntimeEntry();
    message.duration = (_object$duration = object.duration) !== null && _object$duration !== void 0 ? _object$duration : 0;
    message.lastDowntime = (_object$lastDowntime = object.lastDowntime) !== null && _object$lastDowntime !== void 0 ? _object$lastDowntime : undefined;
    return message;
  }
};
function createBaseGenesisState() {
  return {
    downtimes: [],
    lastBlockTime: undefined
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.downtimes) {
      GenesisDowntimeEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtimes.push(GenesisDowntimeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      downtimes: Array.isArray(object === null || object === void 0 ? void 0 : object.downtimes) ? object.downtimes.map(e => GenesisDowntimeEntry.fromJSON(e)) : [],
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined
    };
  },
  fromPartial(object) {
    var _object$downtimes, _object$lastBlockTime;
    const message = createBaseGenesisState();
    message.downtimes = ((_object$downtimes = object.downtimes) === null || _object$downtimes === void 0 ? void 0 : _object$downtimes.map(e => GenesisDowntimeEntry.fromPartial(e))) || [];
    message.lastBlockTime = (_object$lastBlockTime = object.lastBlockTime) !== null && _object$lastBlockTime !== void 0 ? _object$lastBlockTime : undefined;
    return message;
  }
};