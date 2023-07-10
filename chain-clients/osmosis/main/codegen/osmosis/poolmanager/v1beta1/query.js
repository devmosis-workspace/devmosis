"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParamsResponse = exports.ParamsRequest = exports.NumPoolsResponse = exports.NumPoolsRequest = exports.EstimateSwapExactAmountOutResponse = exports.EstimateSwapExactAmountOutRequest = exports.EstimateSwapExactAmountInResponse = exports.EstimateSwapExactAmountInRequest = void 0;
var _swap_route = require("./swap_route");
var _genesis = require("./genesis");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** =============================== Params */

/** =============================== Params */

/** =============================== EstimateSwapExactAmountIn */

/** =============================== EstimateSwapExactAmountIn */

/** =============================== EstimateSwapExactAmountOut */

/** =============================== EstimateSwapExactAmountOut */

/** =============================== NumPools */

/** =============================== NumPools */

function createBaseParamsRequest() {
  return {};
}
var ParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseParamsRequest();
    return message;
  }
};
exports.ParamsRequest = ParamsRequest;
function createBaseParamsResponse() {
  return {
    params: undefined
  };
}
var ParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _genesis.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _genesis.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _genesis.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.ParamsResponse = ParamsResponse;
function createBaseEstimateSwapExactAmountInRequest() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    tokenIn: "",
    routes: []
  };
}
var EstimateSwapExactAmountInRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    var _iterator = _createForOfIteratorHelper(message.routes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _swap_route.SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEstimateSwapExactAmountInRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(_swap_route.SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$tokenIn, _object$routes;
    var message = createBaseEstimateSwapExactAmountInRequest();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokenIn = (_object$tokenIn = object.tokenIn) !== null && _object$tokenIn !== void 0 ? _object$tokenIn : "";
    message.routes = ((_object$routes = object.routes) === null || _object$routes === void 0 ? void 0 : _object$routes.map(function (e) {
      return _swap_route.SwapAmountInRoute.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.EstimateSwapExactAmountInRequest = EstimateSwapExactAmountInRequest;
function createBaseEstimateSwapExactAmountInResponse() {
  return {
    tokenOutAmount: ""
  };
}
var EstimateSwapExactAmountInResponse = {
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
    var message = createBaseEstimateSwapExactAmountInResponse();
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
    var message = createBaseEstimateSwapExactAmountInResponse();
    message.tokenOutAmount = (_object$tokenOutAmoun = object.tokenOutAmount) !== null && _object$tokenOutAmoun !== void 0 ? _object$tokenOutAmoun : "";
    return message;
  }
};
exports.EstimateSwapExactAmountInResponse = EstimateSwapExactAmountInResponse;
function createBaseEstimateSwapExactAmountOutRequest() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    routes: [],
    tokenOut: ""
  };
}
var EstimateSwapExactAmountOutRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    var _iterator2 = _createForOfIteratorHelper(message.routes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _swap_route.SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEstimateSwapExactAmountOutRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.routes.push(_swap_route.SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender2, _object$routes2, _object$tokenOut;
    var message = createBaseEstimateSwapExactAmountOutRequest();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.routes = ((_object$routes2 = object.routes) === null || _object$routes2 === void 0 ? void 0 : _object$routes2.map(function (e) {
      return _swap_route.SwapAmountOutRoute.fromPartial(e);
    })) || [];
    message.tokenOut = (_object$tokenOut = object.tokenOut) !== null && _object$tokenOut !== void 0 ? _object$tokenOut : "";
    return message;
  }
};
exports.EstimateSwapExactAmountOutRequest = EstimateSwapExactAmountOutRequest;
function createBaseEstimateSwapExactAmountOutResponse() {
  return {
    tokenInAmount: ""
  };
}
var EstimateSwapExactAmountOutResponse = {
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
    var message = createBaseEstimateSwapExactAmountOutResponse();
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
    var message = createBaseEstimateSwapExactAmountOutResponse();
    message.tokenInAmount = (_object$tokenInAmount = object.tokenInAmount) !== null && _object$tokenInAmount !== void 0 ? _object$tokenInAmount : "";
    return message;
  }
};
exports.EstimateSwapExactAmountOutResponse = EstimateSwapExactAmountOutResponse;
function createBaseNumPoolsRequest() {
  return {};
}
var NumPoolsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNumPoolsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseNumPoolsRequest();
    return message;
  }
};
exports.NumPoolsRequest = NumPoolsRequest;
function createBaseNumPoolsResponse() {
  return {
    numPools: _helpers.Long.UZERO
  };
}
var NumPoolsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.numPools.isZero()) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNumPoolsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseNumPoolsResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? _helpers.Long.fromValue(object.numPools) : _helpers.Long.UZERO;
    return message;
  }
};
exports.NumPoolsResponse = NumPoolsResponse;