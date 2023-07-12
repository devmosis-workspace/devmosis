import { Params, DistrInfo, PoolToGauges } from "./incentives";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the pool incentives module's genesis state. */

/** GenesisState defines the pool incentives module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    lockableDurations: [],
    distrInfo: undefined,
    poolToGauges: undefined
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolToGauges !== undefined) {
      PoolToGauges.encode(message.poolToGauges, writer.uint32(34).fork()).ldelim();
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
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        case 3:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.poolToGauges = PoolToGauges.decode(reader, reader.uint32());
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
      lockableDurations: Array.isArray(object === null || object === void 0 ? void 0 : object.lockableDurations) ? object.lockableDurations.map(e => Duration.fromJSON(e)) : [],
      distrInfo: isSet(object.distrInfo) ? DistrInfo.fromJSON(object.distrInfo) : undefined,
      poolToGauges: isSet(object.poolToGauges) ? PoolToGauges.fromJSON(object.poolToGauges) : undefined
    };
  },
  fromPartial(object) {
    var _object$lockableDurat;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lockableDurations = ((_object$lockableDurat = object.lockableDurations) === null || _object$lockableDurat === void 0 ? void 0 : _object$lockableDurat.map(e => Duration.fromPartial(e))) || [];
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    message.poolToGauges = object.poolToGauges !== undefined && object.poolToGauges !== null ? PoolToGauges.fromPartial(object.poolToGauges) : undefined;
    return message;
  }
};