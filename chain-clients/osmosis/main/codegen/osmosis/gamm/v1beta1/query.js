"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryTotalSharesResponse = exports.QueryTotalSharesRequest = exports.QueryTotalPoolLiquidityResponse = exports.QueryTotalPoolLiquidityRequest = exports.QueryTotalLiquidityResponse = exports.QueryTotalLiquidityRequest = exports.QuerySwapExactAmountOutResponse = exports.QuerySwapExactAmountOutRequest = exports.QuerySwapExactAmountInResponse = exports.QuerySwapExactAmountInRequest = exports.QuerySpotPriceResponse = exports.QuerySpotPriceRequest = exports.QueryPoolsWithFilterResponse = exports.QueryPoolsWithFilterRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryPoolTypeResponse = exports.QueryPoolTypeRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryPoolParamsResponse = exports.QueryPoolParamsRequest = exports.QueryNumPoolsResponse = exports.QueryNumPoolsRequest = exports.QueryCalcJoinPoolSharesResponse = exports.QueryCalcJoinPoolSharesRequest = exports.QueryCalcJoinPoolNoSwapSharesResponse = exports.QueryCalcJoinPoolNoSwapSharesRequest = exports.QueryCalcExitPoolCoinsFromSharesResponse = exports.QueryCalcExitPoolCoinsFromSharesRequest = void 0;
var _pagination = require("../../../cosmos/base/query/v1beta1/pagination");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _swap_route = require("../../poolmanager/v1beta1/swap_route");
var _any = require("../../../google/protobuf/any");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** =============================== Pool */

/** =============================== Pool */

/** =============================== Pools */

/** =============================== Pools */

/** =============================== NumPools */
/** @deprecated */
/** =============================== NumPools */
/** @deprecated */
/** @deprecated */
/** @deprecated */
/** =============================== PoolType */
/** =============================== PoolType */
/** =============================== CalcJoinPoolShares */
/** =============================== CalcJoinPoolShares */
/** =============================== CalcExitPoolCoinsFromShares */
/** =============================== CalcExitPoolCoinsFromShares */
/** =============================== PoolParams */
/** =============================== PoolParams */
/** =============================== PoolLiquidity */
/** =============================== PoolLiquidity */
/** =============================== TotalShares */
/** =============================== TotalShares */
/** =============================== CalcJoinPoolNoSwapShares */
/** =============================== CalcJoinPoolNoSwapShares */
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
/** =============================== EstimateSwapExactAmountIn */
/** @deprecated */
/** =============================== EstimateSwapExactAmountIn */
/** @deprecated */
/** @deprecated */
/** @deprecated */
/** =============================== EstimateSwapExactAmountOut */
/** @deprecated */
/** =============================== EstimateSwapExactAmountOut */
/** @deprecated */
/** @deprecated */
/** @deprecated */
function createBaseQueryPoolRequest() {
  return {
    poolId: _helpers.Long.UZERO
  };
}
var QueryPoolRequest = {
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
    var message = createBaseQueryPoolRequest();
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
    var message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPoolRequest = QueryPoolRequest;
function createBaseQueryPoolResponse() {
  return {
    pool: undefined
  };
}
var QueryPoolResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pool !== undefined) {
      _any.Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? _any.Any.fromPartial(object.pool) : undefined;
    return message;
  }
};
exports.QueryPoolResponse = QueryPoolResponse;
function createBaseQueryPoolsRequest() {
  return {
    pagination: undefined
  };
}
var QueryPoolsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryPoolsRequest = QueryPoolsRequest;
function createBaseQueryPoolsResponse() {
  return {
    pools: [],
    pagination: undefined
  };
}
var QueryPoolsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.pools),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _any.Any.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$pools;
    var message = createBaseQueryPoolsResponse();
    message.pools = ((_object$pools = object.pools) === null || _object$pools === void 0 ? void 0 : _object$pools.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryPoolsResponse = QueryPoolsResponse;
function createBaseQueryNumPoolsRequest() {
  return {};
}
var QueryNumPoolsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNumPoolsRequest();
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
    var message = createBaseQueryNumPoolsRequest();
    return message;
  }
};
exports.QueryNumPoolsRequest = QueryNumPoolsRequest;
function createBaseQueryNumPoolsResponse() {
  return {
    numPools: _helpers.Long.UZERO
  };
}
var QueryNumPoolsResponse = {
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
    var message = createBaseQueryNumPoolsResponse();
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
    var message = createBaseQueryNumPoolsResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? _helpers.Long.fromValue(object.numPools) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryNumPoolsResponse = QueryNumPoolsResponse;
function createBaseQueryPoolTypeRequest() {
  return {
    poolId: _helpers.Long.UZERO
  };
}
var QueryPoolTypeRequest = {
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
    var message = createBaseQueryPoolTypeRequest();
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
    var message = createBaseQueryPoolTypeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPoolTypeRequest = QueryPoolTypeRequest;
function createBaseQueryPoolTypeResponse() {
  return {
    poolType: ""
  };
}
var QueryPoolTypeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.poolType !== "") {
      writer.uint32(10).string(message.poolType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolTypeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$poolType;
    var message = createBaseQueryPoolTypeResponse();
    message.poolType = (_object$poolType = object.poolType) !== null && _object$poolType !== void 0 ? _object$poolType : "";
    return message;
  }
};
exports.QueryPoolTypeResponse = QueryPoolTypeResponse;
function createBaseQueryCalcJoinPoolSharesRequest() {
  return {
    poolId: _helpers.Long.UZERO,
    tokensIn: []
  };
}
var QueryCalcJoinPoolSharesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    var _iterator2 = _createForOfIteratorHelper(message.tokensIn),
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
    var message = createBaseQueryCalcJoinPoolSharesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tokensIn;
    var message = createBaseQueryCalcJoinPoolSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokensIn = ((_object$tokensIn = object.tokensIn) === null || _object$tokensIn === void 0 ? void 0 : _object$tokensIn.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryCalcJoinPoolSharesRequest = QueryCalcJoinPoolSharesRequest;
function createBaseQueryCalcJoinPoolSharesResponse() {
  return {
    shareOutAmount: "",
    tokensOut: []
  };
}
var QueryCalcJoinPoolSharesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    var _iterator3 = _createForOfIteratorHelper(message.tokensOut),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseQueryCalcJoinPoolSharesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        case 2:
          message.tokensOut.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$shareOutAmoun, _object$tokensOut;
    var message = createBaseQueryCalcJoinPoolSharesResponse();
    message.shareOutAmount = (_object$shareOutAmoun = object.shareOutAmount) !== null && _object$shareOutAmoun !== void 0 ? _object$shareOutAmoun : "";
    message.tokensOut = ((_object$tokensOut = object.tokensOut) === null || _object$tokensOut === void 0 ? void 0 : _object$tokensOut.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryCalcJoinPoolSharesResponse = QueryCalcJoinPoolSharesResponse;
function createBaseQueryCalcExitPoolCoinsFromSharesRequest() {
  return {
    poolId: _helpers.Long.UZERO,
    shareInAmount: ""
  };
}
var QueryCalcExitPoolCoinsFromSharesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(18).string(message.shareInAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
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
    var _object$shareInAmount;
    var message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.shareInAmount = (_object$shareInAmount = object.shareInAmount) !== null && _object$shareInAmount !== void 0 ? _object$shareInAmount : "";
    return message;
  }
};
exports.QueryCalcExitPoolCoinsFromSharesRequest = QueryCalcExitPoolCoinsFromSharesRequest;
function createBaseQueryCalcExitPoolCoinsFromSharesResponse() {
  return {
    tokensOut: []
  };
}
var QueryCalcExitPoolCoinsFromSharesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.tokensOut),
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
    var message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tokensOut2;
    var message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokensOut = ((_object$tokensOut2 = object.tokensOut) === null || _object$tokensOut2 === void 0 ? void 0 : _object$tokensOut2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryCalcExitPoolCoinsFromSharesResponse = QueryCalcExitPoolCoinsFromSharesResponse;
function createBaseQueryPoolParamsRequest() {
  return {
    poolId: _helpers.Long.UZERO
  };
}
var QueryPoolParamsRequest = {
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
    var message = createBaseQueryPoolParamsRequest();
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
    var message = createBaseQueryPoolParamsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPoolParamsRequest = QueryPoolParamsRequest;
function createBaseQueryPoolParamsResponse() {
  return {
    params: undefined
  };
}
var QueryPoolParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _any.Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryPoolParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _any.Any.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryPoolParamsResponse = QueryPoolParamsResponse;
function createBaseQueryTotalPoolLiquidityRequest() {
  return {
    poolId: _helpers.Long.UZERO
  };
}
var QueryTotalPoolLiquidityRequest = {
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
    var message = createBaseQueryTotalPoolLiquidityRequest();
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
    var message = createBaseQueryTotalPoolLiquidityRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryTotalPoolLiquidityRequest = QueryTotalPoolLiquidityRequest;
function createBaseQueryTotalPoolLiquidityResponse() {
  return {
    liquidity: []
  };
}
var QueryTotalPoolLiquidityResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.liquidity),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$liquidity;
    var message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = ((_object$liquidity = object.liquidity) === null || _object$liquidity === void 0 ? void 0 : _object$liquidity.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryTotalPoolLiquidityResponse = QueryTotalPoolLiquidityResponse;
function createBaseQueryTotalSharesRequest() {
  return {
    poolId: _helpers.Long.UZERO
  };
}
var QueryTotalSharesRequest = {
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
    var message = createBaseQueryTotalSharesRequest();
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
    var message = createBaseQueryTotalSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryTotalSharesRequest = QueryTotalSharesRequest;
function createBaseQueryTotalSharesResponse() {
  return {
    totalShares: undefined
  };
}
var QueryTotalSharesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.totalShares !== undefined) {
      _coin.Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryTotalSharesResponse();
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? _coin.Coin.fromPartial(object.totalShares) : undefined;
    return message;
  }
};
exports.QueryTotalSharesResponse = QueryTotalSharesResponse;
function createBaseQueryCalcJoinPoolNoSwapSharesRequest() {
  return {
    poolId: _helpers.Long.UZERO,
    tokensIn: []
  };
}
var QueryCalcJoinPoolNoSwapSharesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    var _iterator6 = _createForOfIteratorHelper(message.tokensIn),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tokensIn2;
    var message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokensIn = ((_object$tokensIn2 = object.tokensIn) === null || _object$tokensIn2 === void 0 ? void 0 : _object$tokensIn2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryCalcJoinPoolNoSwapSharesRequest = QueryCalcJoinPoolNoSwapSharesRequest;
function createBaseQueryCalcJoinPoolNoSwapSharesResponse() {
  return {
    tokensOut: [],
    sharesOut: ""
  };
}
var QueryCalcJoinPoolNoSwapSharesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.tokensOut),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (message.sharesOut !== "") {
      writer.uint32(18).string(message.sharesOut);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sharesOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tokensOut3, _object$sharesOut;
    var message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokensOut = ((_object$tokensOut3 = object.tokensOut) === null || _object$tokensOut3 === void 0 ? void 0 : _object$tokensOut3.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.sharesOut = (_object$sharesOut = object.sharesOut) !== null && _object$sharesOut !== void 0 ? _object$sharesOut : "";
    return message;
  }
};
exports.QueryCalcJoinPoolNoSwapSharesResponse = QueryCalcJoinPoolNoSwapSharesResponse;
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
function createBaseQueryPoolsWithFilterRequest() {
  return {
    minLiquidity: "",
    poolType: "",
    pagination: undefined
  };
}
var QueryPoolsWithFilterRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.minLiquidity !== "") {
      writer.uint32(10).string(message.minLiquidity);
    }
    if (message.poolType !== "") {
      writer.uint32(18).string(message.poolType);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolsWithFilterRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLiquidity = reader.string();
          break;
        case 2:
          message.poolType = reader.string();
          break;
        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$minLiquidity, _object$poolType2;
    var message = createBaseQueryPoolsWithFilterRequest();
    message.minLiquidity = (_object$minLiquidity = object.minLiquidity) !== null && _object$minLiquidity !== void 0 ? _object$minLiquidity : "";
    message.poolType = (_object$poolType2 = object.poolType) !== null && _object$poolType2 !== void 0 ? _object$poolType2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryPoolsWithFilterRequest = QueryPoolsWithFilterRequest;
function createBaseQueryPoolsWithFilterResponse() {
  return {
    pools: [],
    pagination: undefined
  };
}
var QueryPoolsWithFilterResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator8 = _createForOfIteratorHelper(message.pools),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        _any.Any.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolsWithFilterResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$pools2;
    var message = createBaseQueryPoolsWithFilterResponse();
    message.pools = ((_object$pools2 = object.pools) === null || _object$pools2 === void 0 ? void 0 : _object$pools2.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryPoolsWithFilterResponse = QueryPoolsWithFilterResponse;
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
function createBaseQuerySwapExactAmountInRequest() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    tokenIn: "",
    routes: []
  };
}
var QuerySwapExactAmountInRequest = {
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
    var _iterator9 = _createForOfIteratorHelper(message.routes),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        _swap_route.SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySwapExactAmountInRequest();
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
    var message = createBaseQuerySwapExactAmountInRequest();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.tokenIn = (_object$tokenIn = object.tokenIn) !== null && _object$tokenIn !== void 0 ? _object$tokenIn : "";
    message.routes = ((_object$routes = object.routes) === null || _object$routes === void 0 ? void 0 : _object$routes.map(function (e) {
      return _swap_route.SwapAmountInRoute.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QuerySwapExactAmountInRequest = QuerySwapExactAmountInRequest;
function createBaseQuerySwapExactAmountInResponse() {
  return {
    tokenOutAmount: ""
  };
}
var QuerySwapExactAmountInResponse = {
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
    var message = createBaseQuerySwapExactAmountInResponse();
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
    var message = createBaseQuerySwapExactAmountInResponse();
    message.tokenOutAmount = (_object$tokenOutAmoun = object.tokenOutAmount) !== null && _object$tokenOutAmoun !== void 0 ? _object$tokenOutAmoun : "";
    return message;
  }
};
exports.QuerySwapExactAmountInResponse = QuerySwapExactAmountInResponse;
function createBaseQuerySwapExactAmountOutRequest() {
  return {
    sender: "",
    poolId: _helpers.Long.UZERO,
    routes: [],
    tokenOut: ""
  };
}
var QuerySwapExactAmountOutRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    var _iterator10 = _createForOfIteratorHelper(message.routes),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        _swap_route.SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySwapExactAmountOutRequest();
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
    var message = createBaseQuerySwapExactAmountOutRequest();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.routes = ((_object$routes2 = object.routes) === null || _object$routes2 === void 0 ? void 0 : _object$routes2.map(function (e) {
      return _swap_route.SwapAmountOutRoute.fromPartial(e);
    })) || [];
    message.tokenOut = (_object$tokenOut = object.tokenOut) !== null && _object$tokenOut !== void 0 ? _object$tokenOut : "";
    return message;
  }
};
exports.QuerySwapExactAmountOutRequest = QuerySwapExactAmountOutRequest;
function createBaseQuerySwapExactAmountOutResponse() {
  return {
    tokenInAmount: ""
  };
}
var QuerySwapExactAmountOutResponse = {
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
    var message = createBaseQuerySwapExactAmountOutResponse();
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
    var message = createBaseQuerySwapExactAmountOutResponse();
    message.tokenInAmount = (_object$tokenInAmount = object.tokenInAmount) !== null && _object$tokenInAmount !== void 0 ? _object$tokenInAmount : "";
    return message;
  }
};
exports.QuerySwapExactAmountOutResponse = QuerySwapExactAmountOutResponse;
function createBaseQueryTotalLiquidityRequest() {
  return {};
}
var QueryTotalLiquidityRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalLiquidityRequest();
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
    var message = createBaseQueryTotalLiquidityRequest();
    return message;
  }
};
exports.QueryTotalLiquidityRequest = QueryTotalLiquidityRequest;
function createBaseQueryTotalLiquidityResponse() {
  return {
    liquidity: []
  };
}
var QueryTotalLiquidityResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator11 = _createForOfIteratorHelper(message.liquidity),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var v = _step11.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$liquidity2;
    var message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = ((_object$liquidity2 = object.liquidity) === null || _object$liquidity2 === void 0 ? void 0 : _object$liquidity2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryTotalLiquidityResponse = QueryTotalLiquidityResponse;