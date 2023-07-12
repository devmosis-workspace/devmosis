import { Duration } from "../../../google/protobuf/duration";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
  return {
    mintedDenom: ""
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.mintedDenom !== "") {
      writer.uint32(10).string(message.mintedDenom);
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
          message.mintedDenom = reader.string();
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
      mintedDenom: isSet(object.mintedDenom) ? String(object.mintedDenom) : ""
    };
  },
  fromPartial(object) {
    var _object$mintedDenom;
    const message = createBaseParams();
    message.mintedDenom = (_object$mintedDenom = object.mintedDenom) !== null && _object$mintedDenom !== void 0 ? _object$mintedDenom : "";
    return message;
  }
};
function createBaseLockableDurationsInfo() {
  return {
    lockableDurations: []
  };
}
export const LockableDurationsInfo = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.lockableDurations) {
      Duration.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockableDurationsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
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
      lockableDurations: Array.isArray(object === null || object === void 0 ? void 0 : object.lockableDurations) ? object.lockableDurations.map(e => Duration.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$lockableDurat;
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = ((_object$lockableDurat = object.lockableDurations) === null || _object$lockableDurat === void 0 ? void 0 : _object$lockableDurat.map(e => Duration.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDistrInfo() {
  return {
    totalWeight: "",
    records: []
  };
}
export const DistrInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    for (const v of message.records) {
      DistrRecord.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;
        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
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
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      records: Array.isArray(object === null || object === void 0 ? void 0 : object.records) ? object.records.map(e => DistrRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$totalWeight, _object$records;
    const message = createBaseDistrInfo();
    message.totalWeight = (_object$totalWeight = object.totalWeight) !== null && _object$totalWeight !== void 0 ? _object$totalWeight : "";
    message.records = ((_object$records = object.records) === null || _object$records === void 0 ? void 0 : _object$records.map(e => DistrRecord.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDistrRecord() {
  return {
    gaugeId: Long.UZERO,
    weight: ""
  };
}
export const DistrRecord = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
          break;
        case 2:
          message.weight = reader.string();
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
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object) {
    var _object$weight;
    const message = createBaseDistrRecord();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    return message;
  }
};
function createBasePoolToGauge() {
  return {
    poolId: Long.UZERO,
    gaugeId: Long.UZERO,
    duration: undefined
  };
}
export const PoolToGauge = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(16).uint64(message.gaugeId);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.gaugeId = reader.uint64();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
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
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object) {
    const message = createBasePoolToGauge();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBasePoolToGauges() {
  return {
    poolToGauge: []
  };
}
export const PoolToGauges = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
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
      poolToGauge: Array.isArray(object === null || object === void 0 ? void 0 : object.poolToGauge) ? object.poolToGauge.map(e => PoolToGauge.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$poolToGauge;
    const message = createBasePoolToGauges();
    message.poolToGauge = ((_object$poolToGauge = object.poolToGauge) === null || _object$poolToGauge === void 0 ? void 0 : _object$poolToGauge.map(e => PoolToGauge.fromPartial(e))) || [];
    return message;
  }
};