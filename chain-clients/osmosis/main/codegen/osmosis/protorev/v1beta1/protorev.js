"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trade = exports.TokenPairArbRoutes = exports.RouteStatistics = exports.Route = exports.PoolWeights = exports.BaseDenom = void 0;
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */

/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */

/** Route is a hot route for a given pair of tokens */

/** Route is a hot route for a given pair of tokens */

/** Trade is a single trade in a route */

/** Trade is a single trade in a route */

/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */

/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */

/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */

/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 */

/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */

/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */

function createBaseTokenPairArbRoutes() {
  return {
    arbRoutes: [],
    tokenIn: "",
    tokenOut: ""
  };
}
var TokenPairArbRoutes = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.arbRoutes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Route.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTokenPairArbRoutes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arbRoutes.push(Route.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      arbRoutes: Array.isArray(object === null || object === void 0 ? void 0 : object.arbRoutes) ? object.arbRoutes.map(function (e) {
        return Route.fromJSON(e);
      }) : [],
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: (0, _helpers.isSet)(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$arbRoutes, _object$tokenIn, _object$tokenOut;
    var message = createBaseTokenPairArbRoutes();
    message.arbRoutes = ((_object$arbRoutes = object.arbRoutes) === null || _object$arbRoutes === void 0 ? void 0 : _object$arbRoutes.map(function (e) {
      return Route.fromPartial(e);
    })) || [];
    message.tokenIn = (_object$tokenIn = object.tokenIn) !== null && _object$tokenIn !== void 0 ? _object$tokenIn : "";
    message.tokenOut = (_object$tokenOut = object.tokenOut) !== null && _object$tokenOut !== void 0 ? _object$tokenOut : "";
    return message;
  }
};
exports.TokenPairArbRoutes = TokenPairArbRoutes;
function createBaseRoute() {
  return {
    trades: [],
    stepSize: ""
  };
}
var Route = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.trades),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Trade.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRoute();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stepSize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades) ? object.trades.map(function (e) {
        return Trade.fromJSON(e);
      }) : [],
      stepSize: (0, _helpers.isSet)(object.stepSize) ? String(object.stepSize) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$trades, _object$stepSize;
    var message = createBaseRoute();
    message.trades = ((_object$trades = object.trades) === null || _object$trades === void 0 ? void 0 : _object$trades.map(function (e) {
      return Trade.fromPartial(e);
    })) || [];
    message.stepSize = (_object$stepSize = object.stepSize) !== null && _object$stepSize !== void 0 ? _object$stepSize : "";
    return message;
  }
};
exports.Route = Route;
function createBaseTrade() {
  return {
    pool: _helpers.Long.UZERO,
    tokenIn: "",
    tokenOut: ""
  };
}
var Trade = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.pool.isZero()) {
      writer.uint32(8).uint64(message.pool);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTrade();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      pool: (0, _helpers.isSet)(object.pool) ? _helpers.Long.fromValue(object.pool) : _helpers.Long.UZERO,
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: (0, _helpers.isSet)(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tokenIn2, _object$tokenOut2;
    var message = createBaseTrade();
    message.pool = object.pool !== undefined && object.pool !== null ? _helpers.Long.fromValue(object.pool) : _helpers.Long.UZERO;
    message.tokenIn = (_object$tokenIn2 = object.tokenIn) !== null && _object$tokenIn2 !== void 0 ? _object$tokenIn2 : "";
    message.tokenOut = (_object$tokenOut2 = object.tokenOut) !== null && _object$tokenOut2 !== void 0 ? _object$tokenOut2 : "";
    return message;
  }
};
exports.Trade = Trade;
function createBaseRouteStatistics() {
  return {
    profits: [],
    numberOfTrades: "",
    route: []
  };
}
var RouteStatistics = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.profits),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.numberOfTrades !== "") {
      writer.uint32(18).string(message.numberOfTrades);
    }
    writer.uint32(26).fork();
    var _iterator4 = _createForOfIteratorHelper(message.route),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v = _step4.value;
        writer.uint64(_v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRouteStatistics();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.numberOfTrades = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.route.push(reader.uint64());
            }
          } else {
            message.route.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      profits: Array.isArray(object === null || object === void 0 ? void 0 : object.profits) ? object.profits.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      numberOfTrades: (0, _helpers.isSet)(object.numberOfTrades) ? String(object.numberOfTrades) : "",
      route: Array.isArray(object === null || object === void 0 ? void 0 : object.route) ? object.route.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$profits, _object$numberOfTrade, _object$route;
    var message = createBaseRouteStatistics();
    message.profits = ((_object$profits = object.profits) === null || _object$profits === void 0 ? void 0 : _object$profits.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.numberOfTrades = (_object$numberOfTrade = object.numberOfTrades) !== null && _object$numberOfTrade !== void 0 ? _object$numberOfTrade : "";
    message.route = ((_object$route = object.route) === null || _object$route === void 0 ? void 0 : _object$route.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.RouteStatistics = RouteStatistics;
function createBasePoolWeights() {
  return {
    stableWeight: _helpers.Long.UZERO,
    balancerWeight: _helpers.Long.UZERO,
    concentratedWeight: _helpers.Long.UZERO
  };
}
var PoolWeights = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.stableWeight.isZero()) {
      writer.uint32(8).uint64(message.stableWeight);
    }
    if (!message.balancerWeight.isZero()) {
      writer.uint32(16).uint64(message.balancerWeight);
    }
    if (!message.concentratedWeight.isZero()) {
      writer.uint32(24).uint64(message.concentratedWeight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePoolWeights();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableWeight = reader.uint64();
          break;
        case 2:
          message.balancerWeight = reader.uint64();
          break;
        case 3:
          message.concentratedWeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      stableWeight: (0, _helpers.isSet)(object.stableWeight) ? _helpers.Long.fromValue(object.stableWeight) : _helpers.Long.UZERO,
      balancerWeight: (0, _helpers.isSet)(object.balancerWeight) ? _helpers.Long.fromValue(object.balancerWeight) : _helpers.Long.UZERO,
      concentratedWeight: (0, _helpers.isSet)(object.concentratedWeight) ? _helpers.Long.fromValue(object.concentratedWeight) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePoolWeights();
    message.stableWeight = object.stableWeight !== undefined && object.stableWeight !== null ? _helpers.Long.fromValue(object.stableWeight) : _helpers.Long.UZERO;
    message.balancerWeight = object.balancerWeight !== undefined && object.balancerWeight !== null ? _helpers.Long.fromValue(object.balancerWeight) : _helpers.Long.UZERO;
    message.concentratedWeight = object.concentratedWeight !== undefined && object.concentratedWeight !== null ? _helpers.Long.fromValue(object.concentratedWeight) : _helpers.Long.UZERO;
    return message;
  }
};
exports.PoolWeights = PoolWeights;
function createBaseBaseDenom() {
  return {
    denom: "",
    stepSize: ""
  };
}
var BaseDenom = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBaseDenom();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.stepSize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : "",
      stepSize: (0, _helpers.isSet)(object.stepSize) ? String(object.stepSize) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$denom, _object$stepSize2;
    var message = createBaseBaseDenom();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.stepSize = (_object$stepSize2 = object.stepSize) !== null && _object$stepSize2 !== void 0 ? _object$stepSize2 : "";
    return message;
  }
};
exports.BaseDenom = BaseDenom;