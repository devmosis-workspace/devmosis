"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = exports.MsgJoinSwapShareAmountOutResponse = exports.MsgJoinSwapShareAmountOut = exports.MsgJoinSwapExternAmountInResponse = exports.MsgJoinSwapExternAmountIn = exports.MsgJoinPoolResponse = exports.MsgJoinPool = exports.MsgExitSwapShareAmountInResponse = exports.MsgExitSwapShareAmountIn = exports.MsgExitSwapExternAmountOutResponse = exports.MsgExitSwapExternAmountOut = exports.MsgExitPoolResponse = exports.MsgExitPool = void 0;
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _swap_route = require("../../poolmanager/v1beta1/swap_route");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */

/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */

/** ===================== MsgExitPool */

/** ===================== MsgExitPool */

/** ===================== MsgSwapExactAmountIn */

/** ===================== MsgSwapExactAmountIn */

/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */

/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */

/** ===================== MsgJoinSwapShareAmountOut */

/** ===================== MsgJoinSwapShareAmountOut */

/** ===================== MsgExitSwapShareAmountIn */

/** ===================== MsgExitSwapShareAmountIn */

/** ===================== MsgExitSwapExternAmountOut */

/** ===================== MsgExitSwapExternAmountOut */

function createBaseMsgJoinPool() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    shareOutAmount: "",
    tokenInMaxs: []
  };
}
var MsgJoinPool = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.shareOutAmount !== "") {
      writer.uint32(26).string(message.shareOutAmount);
    }
    var _iterator = _createForOfIteratorHelper(message.tokenInMaxs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseMsgJoinPool();
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
          message.shareOutAmount = reader.string();
          break;
        case 4:
          message.tokenInMaxs.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$shareOutAmoun, _object$tokenInMaxs;
    var message = createBaseMsgJoinPool();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.shareOutAmount = (_object$shareOutAmoun = object.shareOutAmount) !== null && _object$shareOutAmoun !== void 0 ? _object$shareOutAmoun : "";
    message.tokenInMaxs = ((_object$tokenInMaxs = object.tokenInMaxs) === null || _object$tokenInMaxs === void 0 ? void 0 : _object$tokenInMaxs.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgJoinPool = MsgJoinPool;
function createBaseMsgJoinPoolResponse() {
  return {
    shareOutAmount: "",
    tokenIn: []
  };
}
var MsgJoinPoolResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    var _iterator2 = _createForOfIteratorHelper(message.tokenIn),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgJoinPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        case 2:
          message.tokenIn.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$shareOutAmoun2, _object$tokenIn;
    var message = createBaseMsgJoinPoolResponse();
    message.shareOutAmount = (_object$shareOutAmoun2 = object.shareOutAmount) !== null && _object$shareOutAmoun2 !== void 0 ? _object$shareOutAmoun2 : "";
    message.tokenIn = ((_object$tokenIn = object.tokenIn) === null || _object$tokenIn === void 0 ? void 0 : _object$tokenIn.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgJoinPoolResponse = MsgJoinPoolResponse;
function createBaseMsgExitPool() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    shareInAmount: "",
    tokenOutMins: []
  };
}
var MsgExitPool = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(26).string(message.shareInAmount);
    }
    var _iterator3 = _createForOfIteratorHelper(message.tokenOutMins),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExitPool();
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
          message.shareInAmount = reader.string();
          break;
        case 4:
          message.tokenOutMins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender2, _object$shareInAmount, _object$tokenOutMins;
    var message = createBaseMsgExitPool();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.shareInAmount = (_object$shareInAmount = object.shareInAmount) !== null && _object$shareInAmount !== void 0 ? _object$shareInAmount : "";
    message.tokenOutMins = ((_object$tokenOutMins = object.tokenOutMins) === null || _object$tokenOutMins === void 0 ? void 0 : _object$tokenOutMins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgExitPool = MsgExitPool;
function createBaseMsgExitPoolResponse() {
  return {
    tokenOut: []
  };
}
var MsgExitPoolResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.tokenOut),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExitPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tokenOut;
    var message = createBaseMsgExitPoolResponse();
    message.tokenOut = ((_object$tokenOut = object.tokenOut) === null || _object$tokenOut === void 0 ? void 0 : _object$tokenOut.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgExitPoolResponse = MsgExitPoolResponse;
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
    var _iterator5 = _createForOfIteratorHelper(message.routes),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _swap_route.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
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
    var _object$sender3, _object$routes, _object$tokenOutMinAm;
    var message = createBaseMsgSwapExactAmountIn();
    message.sender = (_object$sender3 = object.sender) !== null && _object$sender3 !== void 0 ? _object$sender3 : "";
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
    var _iterator6 = _createForOfIteratorHelper(message.routes),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _swap_route.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
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
    var _object$sender4, _object$routes2, _object$tokenInMaxAmo;
    var message = createBaseMsgSwapExactAmountOut();
    message.sender = (_object$sender4 = object.sender) !== null && _object$sender4 !== void 0 ? _object$sender4 : "";
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
function createBaseMsgJoinSwapExternAmountIn() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    tokenIn: undefined,
    shareOutMinAmount: ""
  };
}
var MsgJoinSwapExternAmountIn = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== undefined) {
      _coin.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.shareOutMinAmount !== "") {
      writer.uint32(34).string(message.shareOutMinAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgJoinSwapExternAmountIn();
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
          message.tokenIn = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.shareOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender5, _object$shareOutMinAm;
    var message = createBaseMsgJoinSwapExternAmountIn();
    message.sender = (_object$sender5 = object.sender) !== null && _object$sender5 !== void 0 ? _object$sender5 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? _coin.Coin.fromPartial(object.tokenIn) : undefined;
    message.shareOutMinAmount = (_object$shareOutMinAm = object.shareOutMinAmount) !== null && _object$shareOutMinAm !== void 0 ? _object$shareOutMinAm : "";
    return message;
  }
};
exports.MsgJoinSwapExternAmountIn = MsgJoinSwapExternAmountIn;
function createBaseMsgJoinSwapExternAmountInResponse() {
  return {
    shareOutAmount: ""
  };
}
var MsgJoinSwapExternAmountInResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgJoinSwapExternAmountInResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$shareOutAmoun3;
    var message = createBaseMsgJoinSwapExternAmountInResponse();
    message.shareOutAmount = (_object$shareOutAmoun3 = object.shareOutAmount) !== null && _object$shareOutAmoun3 !== void 0 ? _object$shareOutAmoun3 : "";
    return message;
  }
};
exports.MsgJoinSwapExternAmountInResponse = MsgJoinSwapExternAmountInResponse;
function createBaseMsgJoinSwapShareAmountOut() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    tokenInDenom: "",
    shareOutAmount: "",
    tokenInMaxAmount: ""
  };
}
var MsgJoinSwapShareAmountOut = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }
    if (message.shareOutAmount !== "") {
      writer.uint32(34).string(message.shareOutAmount);
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(42).string(message.tokenInMaxAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgJoinSwapShareAmountOut();
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
          message.tokenInDenom = reader.string();
          break;
        case 4:
          message.shareOutAmount = reader.string();
          break;
        case 5:
          message.tokenInMaxAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender6, _object$tokenInDenom, _object$shareOutAmoun4, _object$tokenInMaxAmo2;
    var message = createBaseMsgJoinSwapShareAmountOut();
    message.sender = (_object$sender6 = object.sender) !== null && _object$sender6 !== void 0 ? _object$sender6 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokenInDenom = (_object$tokenInDenom = object.tokenInDenom) !== null && _object$tokenInDenom !== void 0 ? _object$tokenInDenom : "";
    message.shareOutAmount = (_object$shareOutAmoun4 = object.shareOutAmount) !== null && _object$shareOutAmoun4 !== void 0 ? _object$shareOutAmoun4 : "";
    message.tokenInMaxAmount = (_object$tokenInMaxAmo2 = object.tokenInMaxAmount) !== null && _object$tokenInMaxAmo2 !== void 0 ? _object$tokenInMaxAmo2 : "";
    return message;
  }
};
exports.MsgJoinSwapShareAmountOut = MsgJoinSwapShareAmountOut;
function createBaseMsgJoinSwapShareAmountOutResponse() {
  return {
    tokenInAmount: ""
  };
}
var MsgJoinSwapShareAmountOutResponse = {
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
    var message = createBaseMsgJoinSwapShareAmountOutResponse();
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
    var _object$tokenInAmount2;
    var message = createBaseMsgJoinSwapShareAmountOutResponse();
    message.tokenInAmount = (_object$tokenInAmount2 = object.tokenInAmount) !== null && _object$tokenInAmount2 !== void 0 ? _object$tokenInAmount2 : "";
    return message;
  }
};
exports.MsgJoinSwapShareAmountOutResponse = MsgJoinSwapShareAmountOutResponse;
function createBaseMsgExitSwapShareAmountIn() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    tokenOutDenom: "",
    shareInAmount: "",
    tokenOutMinAmount: ""
  };
}
var MsgExitSwapShareAmountIn = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(34).string(message.shareInAmount);
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(42).string(message.tokenOutMinAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExitSwapShareAmountIn();
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
          message.tokenOutDenom = reader.string();
          break;
        case 4:
          message.shareInAmount = reader.string();
          break;
        case 5:
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
    var _object$sender7, _object$tokenOutDenom, _object$shareInAmount2, _object$tokenOutMinAm2;
    var message = createBaseMsgExitSwapShareAmountIn();
    message.sender = (_object$sender7 = object.sender) !== null && _object$sender7 !== void 0 ? _object$sender7 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokenOutDenom = (_object$tokenOutDenom = object.tokenOutDenom) !== null && _object$tokenOutDenom !== void 0 ? _object$tokenOutDenom : "";
    message.shareInAmount = (_object$shareInAmount2 = object.shareInAmount) !== null && _object$shareInAmount2 !== void 0 ? _object$shareInAmount2 : "";
    message.tokenOutMinAmount = (_object$tokenOutMinAm2 = object.tokenOutMinAmount) !== null && _object$tokenOutMinAm2 !== void 0 ? _object$tokenOutMinAm2 : "";
    return message;
  }
};
exports.MsgExitSwapShareAmountIn = MsgExitSwapShareAmountIn;
function createBaseMsgExitSwapShareAmountInResponse() {
  return {
    tokenOutAmount: ""
  };
}
var MsgExitSwapShareAmountInResponse = {
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
    var message = createBaseMsgExitSwapShareAmountInResponse();
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
    var _object$tokenOutAmoun2;
    var message = createBaseMsgExitSwapShareAmountInResponse();
    message.tokenOutAmount = (_object$tokenOutAmoun2 = object.tokenOutAmount) !== null && _object$tokenOutAmoun2 !== void 0 ? _object$tokenOutAmoun2 : "";
    return message;
  }
};
exports.MsgExitSwapShareAmountInResponse = MsgExitSwapShareAmountInResponse;
function createBaseMsgExitSwapExternAmountOut() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    tokenOut: undefined,
    shareInMaxAmount: ""
  };
}
var MsgExitSwapExternAmountOut = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenOut !== undefined) {
      _coin.Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.shareInMaxAmount !== "") {
      writer.uint32(34).string(message.shareInMaxAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExitSwapExternAmountOut();
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
          message.tokenOut = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.shareInMaxAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender8, _object$shareInMaxAmo;
    var message = createBaseMsgExitSwapExternAmountOut();
    message.sender = (_object$sender8 = object.sender) !== null && _object$sender8 !== void 0 ? _object$sender8 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? _coin.Coin.fromPartial(object.tokenOut) : undefined;
    message.shareInMaxAmount = (_object$shareInMaxAmo = object.shareInMaxAmount) !== null && _object$shareInMaxAmo !== void 0 ? _object$shareInMaxAmo : "";
    return message;
  }
};
exports.MsgExitSwapExternAmountOut = MsgExitSwapExternAmountOut;
function createBaseMsgExitSwapExternAmountOutResponse() {
  return {
    shareInAmount: ""
  };
}
var MsgExitSwapExternAmountOutResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.shareInAmount !== "") {
      writer.uint32(10).string(message.shareInAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExitSwapExternAmountOutResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$shareInAmount3;
    var message = createBaseMsgExitSwapExternAmountOutResponse();
    message.shareInAmount = (_object$shareInAmount3 = object.shareInAmount) !== null && _object$shareInAmount3 !== void 0 ? _object$shareInAmount3 : "";
    return message;
  }
};
exports.MsgExitSwapExternAmountOutResponse = MsgExitSwapExternAmountOutResponse;