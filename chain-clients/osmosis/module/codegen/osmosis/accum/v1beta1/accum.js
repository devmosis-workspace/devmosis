import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseAccumulatorContent() {
  return {
    accumValue: [],
    totalShares: ""
  };
}
export const AccumulatorContent = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accumValue) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(18).string(message.totalShares);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatorContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalShares = reader.string();
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
      accumValue: Array.isArray(object === null || object === void 0 ? void 0 : object.accumValue) ? object.accumValue.map(e => DecCoin.fromJSON(e)) : [],
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },
  fromPartial(object) {
    var _object$accumValue, _object$totalShares;
    const message = createBaseAccumulatorContent();
    message.accumValue = ((_object$accumValue = object.accumValue) === null || _object$accumValue === void 0 ? void 0 : _object$accumValue.map(e => DecCoin.fromPartial(e))) || [];
    message.totalShares = (_object$totalShares = object.totalShares) !== null && _object$totalShares !== void 0 ? _object$totalShares : "";
    return message;
  }
};
function createBaseOptions() {
  return {};
}
export const Options = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseOptions();
    return message;
  }
};
function createBaseRecord() {
  return {
    numShares: "",
    initAccumValue: [],
    unclaimedRewards: [],
    options: undefined
  };
}
export const Record = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.numShares !== "") {
      writer.uint32(10).string(message.numShares);
    }
    for (const v of message.initAccumValue) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unclaimedRewards) {
      DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numShares = reader.string();
          break;
        case 2:
          message.initAccumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unclaimedRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.options = Options.decode(reader, reader.uint32());
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
      numShares: isSet(object.numShares) ? String(object.numShares) : "",
      initAccumValue: Array.isArray(object === null || object === void 0 ? void 0 : object.initAccumValue) ? object.initAccumValue.map(e => DecCoin.fromJSON(e)) : [],
      unclaimedRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.unclaimedRewards) ? object.unclaimedRewards.map(e => DecCoin.fromJSON(e)) : [],
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined
    };
  },
  fromPartial(object) {
    var _object$numShares, _object$initAccumValu, _object$unclaimedRewa;
    const message = createBaseRecord();
    message.numShares = (_object$numShares = object.numShares) !== null && _object$numShares !== void 0 ? _object$numShares : "";
    message.initAccumValue = ((_object$initAccumValu = object.initAccumValue) === null || _object$initAccumValu === void 0 ? void 0 : _object$initAccumValu.map(e => DecCoin.fromPartial(e))) || [];
    message.unclaimedRewards = ((_object$unclaimedRewa = object.unclaimedRewards) === null || _object$unclaimedRewa === void 0 ? void 0 : _object$unclaimedRewa.map(e => DecCoin.fromPartial(e))) || [];
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    return message;
  }
};