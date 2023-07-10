import { EpochInfo } from "./genesis";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryEpochsInfoRequest() {
  return {};
}
export const QueryEpochsInfoRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();
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
    const message = createBaseQueryEpochsInfoRequest();
    return message;
  }
};
function createBaseQueryEpochsInfoResponse() {
  return {
    epochs: []
  };
}
export const QueryEpochsInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.epochs) {
      EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$epochs;
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = ((_object$epochs = object.epochs) === null || _object$epochs === void 0 ? void 0 : _object$epochs.map(e => EpochInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryCurrentEpochRequest() {
  return {
    identifier: ""
  };
}
export const QueryCurrentEpochRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$identifier;
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = (_object$identifier = object.identifier) !== null && _object$identifier !== void 0 ? _object$identifier : "";
    return message;
  }
};
function createBaseQueryCurrentEpochResponse() {
  return {
    currentEpoch: Long.ZERO
  };
}
export const QueryCurrentEpochResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.currentEpoch.isZero()) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.ZERO;
    return message;
  }
};