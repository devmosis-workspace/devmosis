import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */

/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */

/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */

/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */

function createBaseQuerySpotPriceRequest() {
  return {
    poolId: Long.UZERO,
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
export const QuerySpotPriceRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$baseAssetDeno, _object$quoteAssetDen;
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAssetDenom = (_object$baseAssetDeno = object.baseAssetDenom) !== null && _object$baseAssetDeno !== void 0 ? _object$baseAssetDeno : "";
    message.quoteAssetDenom = (_object$quoteAssetDen = object.quoteAssetDenom) !== null && _object$quoteAssetDen !== void 0 ? _object$quoteAssetDen : "";
    return message;
  }
};
function createBaseQuerySpotPriceResponse() {
  return {
    spotPrice: ""
  };
}
export const QuerySpotPriceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$spotPrice;
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = (_object$spotPrice = object.spotPrice) !== null && _object$spotPrice !== void 0 ? _object$spotPrice : "";
    return message;
  }
};