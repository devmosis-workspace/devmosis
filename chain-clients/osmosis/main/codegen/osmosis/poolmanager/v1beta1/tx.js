"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = void 0;
var _swap_route = require("./swap_route");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** ===================== MsgSwapExactAmountIn */

/** ===================== MsgSwapExactAmountIn */

/** ===================== MsgSwapExactAmountOut */

/** ===================== MsgSwapExactAmountOut */

function createBaseMsgSwapExactAmountIn() {
  return {
    sender: "",
    routes: [],
    tokenIn: undefined,
    tokenOutMinAmount: ""
  };
}
var MsgSwapExactAmountIn = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    var _iterator = _createForOfIteratorHelper(message.routes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _swap_route.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.tokenIn !== undefined) {
      _coin.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSwapExactAmountIn();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(_swap_route.SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenIn = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$routes, _object$tokenOutMinAm;
    var message = createBaseMsgSwapExactAmountIn();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.routes = ((_object$routes = object.routes) === null || _object$routes === void 0 ? void 0 : _object$routes.map(function (e) {
      return _swap_route.SwapAmountInRoute.fromPartial(e);
    })) || [];
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? _coin.Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutMinAmount = (_object$tokenOutMinAm = object.tokenOutMinAmount) !== null && _object$tokenOutMinAm !== void 0 ? _object$tokenOutMinAm : "";
    return message;
  }
};
exports.MsgSwapExactAmountIn = MsgSwapExactAmountIn;
function createBaseMsgSwapExactAmountInResponse() {
  return {
    tokenOutAmount: ""
  };
}
var MsgSwapExactAmountInResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSwapExactAmountInResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tokenOutAmoun;
    var message = createBaseMsgSwapExactAmountInResponse();
    message.tokenOutAmount = (_object$tokenOutAmoun = object.tokenOutAmount) !== null && _object$tokenOutAmoun !== void 0 ? _object$tokenOutAmoun : "";
    return message;
  }
};
exports.MsgSwapExactAmountInResponse = MsgSwapExactAmountInResponse;
function createBaseMsgSwapExactAmountOut() {
  return {
    sender: "",
    routes: [],
    tokenInMaxAmount: "",
    tokenOut: undefined
  };
}
var MsgSwapExactAmountOut = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    var _iterator2 = _createForOfIteratorHelper(message.routes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _swap_route.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(26).string(message.tokenInMaxAmount);
    }
    if (message.tokenOut !== undefined) {
      _coin.Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSwapExactAmountOut();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(_swap_route.SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenInMaxAmount = reader.string();
          break;
        case 4:
          message.tokenOut = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender2, _object$routes2, _object$tokenInMaxAmo;
    var message = createBaseMsgSwapExactAmountOut();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.routes = ((_object$routes2 = object.routes) === null || _object$routes2 === void 0 ? void 0 : _object$routes2.map(function (e) {
      return _swap_route.SwapAmountOutRoute.fromPartial(e);
    })) || [];
    message.tokenInMaxAmount = (_object$tokenInMaxAmo = object.tokenInMaxAmount) !== null && _object$tokenInMaxAmo !== void 0 ? _object$tokenInMaxAmo : "";
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? _coin.Coin.fromPartial(object.tokenOut) : undefined;
    return message;
  }
};
exports.MsgSwapExactAmountOut = MsgSwapExactAmountOut;
function createBaseMsgSwapExactAmountOutResponse() {
  return {
    tokenInAmount: ""
  };
}
var MsgSwapExactAmountOutResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSwapExactAmountOutResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tokenInAmount;
    var message = createBaseMsgSwapExactAmountOutResponse();
    message.tokenInAmount = (_object$tokenInAmount = object.tokenInAmount) !== null && _object$tokenInAmount !== void 0 ? _object$tokenInAmount : "";
    return message;
  }
};
exports.MsgSwapExactAmountOutResponse = MsgSwapExactAmountOutResponse;