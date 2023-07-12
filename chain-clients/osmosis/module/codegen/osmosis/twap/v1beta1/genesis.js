import { Duration } from "../../../google/protobuf/duration";
import { TwapRecord } from "./twap_record";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params holds parameters for the twap module */

/** Params holds parameters for the twap module */

/** GenesisState defines the twap module's genesis state. */

/** GenesisState defines the twap module's genesis state. */

function createBaseParams() {
  return {
    pruneEpochIdentifier: "",
    recordHistoryKeepPeriod: undefined
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pruneEpochIdentifier !== "") {
      writer.uint32(10).string(message.pruneEpochIdentifier);
    }
    if (message.recordHistoryKeepPeriod !== undefined) {
      Duration.encode(message.recordHistoryKeepPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruneEpochIdentifier = reader.string();
          break;
        case 2:
          message.recordHistoryKeepPeriod = Duration.decode(reader, reader.uint32());
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
      pruneEpochIdentifier: isSet(object.pruneEpochIdentifier) ? String(object.pruneEpochIdentifier) : "",
      recordHistoryKeepPeriod: isSet(object.recordHistoryKeepPeriod) ? Duration.fromJSON(object.recordHistoryKeepPeriod) : undefined
    };
  },
  fromPartial(object) {
    var _object$pruneEpochIde;
    const message = createBaseParams();
    message.pruneEpochIdentifier = (_object$pruneEpochIde = object.pruneEpochIdentifier) !== null && _object$pruneEpochIde !== void 0 ? _object$pruneEpochIde : "";
    message.recordHistoryKeepPeriod = object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null ? Duration.fromPartial(object.recordHistoryKeepPeriod) : undefined;
    return message;
  }
};
function createBaseGenesisState() {
  return {
    twaps: [],
    params: undefined
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.twaps) {
      TwapRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.twaps.push(TwapRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
      twaps: Array.isArray(object === null || object === void 0 ? void 0 : object.twaps) ? object.twaps.map(e => TwapRecord.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object) {
    var _object$twaps;
    const message = createBaseGenesisState();
    message.twaps = ((_object$twaps = object.twaps) === null || _object$twaps === void 0 ? void 0 : _object$twaps.map(e => TwapRecord.fromPartial(e))) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};