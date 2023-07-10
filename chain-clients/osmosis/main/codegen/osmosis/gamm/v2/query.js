"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuerySpotPriceResponse = exports.QuerySpotPriceRequest = void 0;
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    poolId: _helpers.Long.UZERO,
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
var QuerySpotPriceRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$baseAssetDeno, _object$quoteAssetDen;
    var message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.baseAssetDenom = (_object$baseAssetDeno = object.baseAssetDenom) !== null && _object$baseAssetDeno !== void 0 ? _object$baseAssetDeno : "";
    message.quoteAssetDenom = (_object$quoteAssetDen = object.quoteAssetDenom) !== null && _object$quoteAssetDen !== void 0 ? _object$quoteAssetDen : "";
    return message;
  }
};
exports.QuerySpotPriceRequest = QuerySpotPriceRequest;
function createBaseQuerySpotPriceResponse() {
  return {
    spotPrice: ""
  };
}
var QuerySpotPriceResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$spotPrice;
    var message = createBaseQuerySpotPriceResponse();
    message.spotPrice = (_object$spotPrice = object.spotPrice) !== null && _object$spotPrice !== void 0 ? _object$spotPrice : "";
    return message;
  }
};
exports.QuerySpotPriceResponse = QuerySpotPriceResponse;