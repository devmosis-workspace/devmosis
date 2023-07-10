"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwapAmountOutRoute = exports.SwapAmountInRoute = void 0;
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseSwapAmountInRoute() {
  return {
    poolId: _helpers.Long.UZERO,
    tokenOutDenom: ""
  };
}
var SwapAmountInRoute = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSwapAmountInRoute();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$tokenOutDenom;
    var message = createBaseSwapAmountInRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokenOutDenom = (_object$tokenOutDenom = object.tokenOutDenom) !== null && _object$tokenOutDenom !== void 0 ? _object$tokenOutDenom : "";
    return message;
  }
};
exports.SwapAmountInRoute = SwapAmountInRoute;
function createBaseSwapAmountOutRoute() {
  return {
    poolId: _helpers.Long.UZERO,
    tokenInDenom: ""
  };
}
var SwapAmountOutRoute = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSwapAmountOutRoute();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$tokenInDenom;
    var message = createBaseSwapAmountOutRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokenInDenom = (_object$tokenInDenom = object.tokenInDenom) !== null && _object$tokenInDenom !== void 0 ? _object$tokenInDenom : "";
    return message;
  }
};
exports.SwapAmountOutRoute = SwapAmountOutRoute;