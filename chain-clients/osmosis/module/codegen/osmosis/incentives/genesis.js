import { Params } from "./params";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */

/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */

function createBaseGenesisState() {
  return {
    params: undefined,
    gauges: [],
    lockableDurations: [],
    lastGaugeId: Long.UZERO
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.gauges) {
      Gauge.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (!message.lastGaugeId.isZero()) {
      writer.uint32(32).uint64(message.lastGaugeId);
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastGaugeId = reader.uint64();
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      gauges: Array.isArray(object === null || object === void 0 ? void 0 : object.gauges) ? object.gauges.map(e => Gauge.fromJSON(e)) : [],
      lockableDurations: Array.isArray(object === null || object === void 0 ? void 0 : object.lockableDurations) ? object.lockableDurations.map(e => Duration.fromJSON(e)) : [],
      lastGaugeId: isSet(object.lastGaugeId) ? Long.fromValue(object.lastGaugeId) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$gauges, _object$lockableDurat;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gauges = ((_object$gauges = object.gauges) === null || _object$gauges === void 0 ? void 0 : _object$gauges.map(e => Gauge.fromPartial(e))) || [];
    message.lockableDurations = ((_object$lockableDurat = object.lockableDurations) === null || _object$lockableDurat === void 0 ? void 0 : _object$lockableDurat.map(e => Duration.fromPartial(e))) || [];
    message.lastGaugeId = object.lastGaugeId !== undefined && object.lastGaugeId !== null ? Long.fromValue(object.lastGaugeId) : Long.UZERO;
    return message;
  }
};