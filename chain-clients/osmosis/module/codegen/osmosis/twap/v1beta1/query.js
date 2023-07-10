import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params } from "./genesis";
import { Long, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseArithmeticTwapRequest() {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined,
    endTime: undefined
  };
}
export const ArithmeticTwapRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$baseAsset, _object$quoteAsset, _object$startTime, _object$endTime;
    const message = createBaseArithmeticTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = (_object$baseAsset = object.baseAsset) !== null && _object$baseAsset !== void 0 ? _object$baseAsset : "";
    message.quoteAsset = (_object$quoteAsset = object.quoteAsset) !== null && _object$quoteAsset !== void 0 ? _object$quoteAsset : "";
    message.startTime = (_object$startTime = object.startTime) !== null && _object$startTime !== void 0 ? _object$startTime : undefined;
    message.endTime = (_object$endTime = object.endTime) !== null && _object$endTime !== void 0 ? _object$endTime : undefined;
    return message;
  }
};
function createBaseArithmeticTwapResponse() {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$arithmeticTwa;
    const message = createBaseArithmeticTwapResponse();
    message.arithmeticTwap = (_object$arithmeticTwa = object.arithmeticTwap) !== null && _object$arithmeticTwa !== void 0 ? _object$arithmeticTwa : "";
    return message;
  }
};
function createBaseArithmeticTwapToNowRequest() {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined
  };
}
export const ArithmeticTwapToNowRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$baseAsset2, _object$quoteAsset2, _object$startTime2;
    const message = createBaseArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = (_object$baseAsset2 = object.baseAsset) !== null && _object$baseAsset2 !== void 0 ? _object$baseAsset2 : "";
    message.quoteAsset = (_object$quoteAsset2 = object.quoteAsset) !== null && _object$quoteAsset2 !== void 0 ? _object$quoteAsset2 : "";
    message.startTime = (_object$startTime2 = object.startTime) !== null && _object$startTime2 !== void 0 ? _object$startTime2 : undefined;
    return message;
  }
};
function createBaseArithmeticTwapToNowResponse() {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapToNowResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$arithmeticTwa2;
    const message = createBaseArithmeticTwapToNowResponse();
    message.arithmeticTwap = (_object$arithmeticTwa2 = object.arithmeticTwap) !== null && _object$arithmeticTwa2 !== void 0 ? _object$arithmeticTwa2 : "";
    return message;
  }
};
function createBaseGeometricTwapRequest() {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined,
    endTime: undefined
  };
}
export const GeometricTwapRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeometricTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$baseAsset3, _object$quoteAsset3, _object$startTime3, _object$endTime2;
    const message = createBaseGeometricTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = (_object$baseAsset3 = object.baseAsset) !== null && _object$baseAsset3 !== void 0 ? _object$baseAsset3 : "";
    message.quoteAsset = (_object$quoteAsset3 = object.quoteAsset) !== null && _object$quoteAsset3 !== void 0 ? _object$quoteAsset3 : "";
    message.startTime = (_object$startTime3 = object.startTime) !== null && _object$startTime3 !== void 0 ? _object$startTime3 : undefined;
    message.endTime = (_object$endTime2 = object.endTime) !== null && _object$endTime2 !== void 0 ? _object$endTime2 : undefined;
    return message;
  }
};
function createBaseGeometricTwapResponse() {
  return {
    geometricTwap: ""
  };
}
export const GeometricTwapResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(message.geometricTwap);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeometricTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geometricTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$geometricTwap;
    const message = createBaseGeometricTwapResponse();
    message.geometricTwap = (_object$geometricTwap = object.geometricTwap) !== null && _object$geometricTwap !== void 0 ? _object$geometricTwap : "";
    return message;
  }
};
function createBaseGeometricTwapToNowRequest() {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined
  };
}
export const GeometricTwapToNowRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeometricTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$baseAsset4, _object$quoteAsset4, _object$startTime4;
    const message = createBaseGeometricTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = (_object$baseAsset4 = object.baseAsset) !== null && _object$baseAsset4 !== void 0 ? _object$baseAsset4 : "";
    message.quoteAsset = (_object$quoteAsset4 = object.quoteAsset) !== null && _object$quoteAsset4 !== void 0 ? _object$quoteAsset4 : "";
    message.startTime = (_object$startTime4 = object.startTime) !== null && _object$startTime4 !== void 0 ? _object$startTime4 : undefined;
    return message;
  }
};
function createBaseGeometricTwapToNowResponse() {
  return {
    geometricTwap: ""
  };
}
export const GeometricTwapToNowResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(message.geometricTwap);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeometricTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geometricTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$geometricTwap2;
    const message = createBaseGeometricTwapToNowResponse();
    message.geometricTwap = (_object$geometricTwap2 = object.geometricTwap) !== null && _object$geometricTwap2 !== void 0 ? _object$geometricTwap2 : "";
    return message;
  }
};
function createBaseParamsRequest() {
  return {};
}
export const ParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseParamsRequest();
    return message;
  }
};
function createBaseParamsResponse() {
  return {
    params: undefined
  };
}
export const ParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};