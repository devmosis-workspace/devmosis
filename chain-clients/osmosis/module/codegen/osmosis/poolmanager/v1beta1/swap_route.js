import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseSwapAmountInRoute() {
  return {
    poolId: Long.UZERO,
    tokenOutDenom: ""
  };
}
export const SwapAmountInRoute = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$tokenOutDenom;
    const message = createBaseSwapAmountInRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenOutDenom = (_object$tokenOutDenom = object.tokenOutDenom) !== null && _object$tokenOutDenom !== void 0 ? _object$tokenOutDenom : "";
    return message;
  }
};
function createBaseSwapAmountOutRoute() {
  return {
    poolId: Long.UZERO,
    tokenInDenom: ""
  };
}
export const SwapAmountOutRoute = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$tokenInDenom;
    const message = createBaseSwapAmountOutRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenInDenom = (_object$tokenInDenom = object.tokenInDenom) !== null && _object$tokenInDenom !== void 0 ? _object$tokenInDenom : "";
    return message;
  }
};