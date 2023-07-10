"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgStableSwapAdjustScalingFactorsResponse = exports.MsgStableSwapAdjustScalingFactors = exports.MsgCreateStableswapPoolResponse = exports.MsgCreateStableswapPool = void 0;
var _stableswap_pool = require("./stableswap_pool");
var _coin = require("../../../../cosmos/base/v1beta1/coin");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** ===================== MsgCreatePool */

/** ===================== MsgCreatePool */

/** Returns a poolID with custom poolName. */

/** Returns a poolID with custom poolName. */

/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */

/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */

function createBaseMsgCreateStableswapPool() {
  return {
    sender: "",
    poolParams: undefined,
    initialPoolLiquidity: [],
    scalingFactors: [],
    futurePoolGovernor: "",
    scalingFactorController: ""
  };
}
var MsgCreateStableswapPool = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolParams !== undefined) {
      _stableswap_pool.PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.initialPoolLiquidity),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    writer.uint32(34).fork();
    var _iterator2 = _createForOfIteratorHelper(message.scalingFactors),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        writer.uint64(_v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.ldelim();
    if (message.futurePoolGovernor !== "") {
      writer.uint32(42).string(message.futurePoolGovernor);
    }
    if (message.scalingFactorController !== "") {
      writer.uint32(50).string(message.scalingFactorController);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateStableswapPool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolParams = _stableswap_pool.PoolParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialPoolLiquidity.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scalingFactors.push(reader.uint64());
            }
          } else {
            message.scalingFactors.push(reader.uint64());
          }
          break;
        case 5:
          message.futurePoolGovernor = reader.string();
          break;
        case 6:
          message.scalingFactorController = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$initialPoolLi, _object$scalingFactor, _object$futurePoolGov, _object$scalingFactor2;
    var message = createBaseMsgCreateStableswapPool();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? _stableswap_pool.PoolParams.fromPartial(object.poolParams) : undefined;
    message.initialPoolLiquidity = ((_object$initialPoolLi = object.initialPoolLiquidity) === null || _object$initialPoolLi === void 0 ? void 0 : _object$initialPoolLi.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.scalingFactors = ((_object$scalingFactor = object.scalingFactors) === null || _object$scalingFactor === void 0 ? void 0 : _object$scalingFactor.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.futurePoolGovernor = (_object$futurePoolGov = object.futurePoolGovernor) !== null && _object$futurePoolGov !== void 0 ? _object$futurePoolGov : "";
    message.scalingFactorController = (_object$scalingFactor2 = object.scalingFactorController) !== null && _object$scalingFactor2 !== void 0 ? _object$scalingFactor2 : "";
    return message;
  }
};
exports.MsgCreateStableswapPool = MsgCreateStableswapPool;
function createBaseMsgCreateStableswapPoolResponse() {
  return {
    poolId: _helpers.Long.UZERO
  };
}
var MsgCreateStableswapPoolResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateStableswapPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgCreateStableswapPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgCreateStableswapPoolResponse = MsgCreateStableswapPoolResponse;
function createBaseMsgStableSwapAdjustScalingFactors() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    scalingFactors: []
  };
}
var MsgStableSwapAdjustScalingFactors = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    writer.uint32(26).fork();
    var _iterator3 = _createForOfIteratorHelper(message.scalingFactors),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStableSwapAdjustScalingFactors();
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
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scalingFactors.push(reader.uint64());
            }
          } else {
            message.scalingFactors.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender2, _object$scalingFactor3;
    var message = createBaseMsgStableSwapAdjustScalingFactors();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.scalingFactors = ((_object$scalingFactor3 = object.scalingFactors) === null || _object$scalingFactor3 === void 0 ? void 0 : _object$scalingFactor3.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.MsgStableSwapAdjustScalingFactors = MsgStableSwapAdjustScalingFactors;
function createBaseMsgStableSwapAdjustScalingFactorsResponse() {
  return {};
}
var MsgStableSwapAdjustScalingFactorsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
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
    var message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
    return message;
  }
};
exports.MsgStableSwapAdjustScalingFactorsResponse = MsgStableSwapAdjustScalingFactorsResponse;