import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export const TokenPairArbRoutes = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.arbRoutes) {
      Route.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairArbRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$arbRoutes, _object$tokenIn, _object$tokenOut;
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = ((_object$arbRoutes = object.arbRoutes) === null || _object$arbRoutes === void 0 ? void 0 : _object$arbRoutes.map(e => Route.fromPartial(e))) || [];
    message.tokenIn = (_object$tokenIn = object.tokenIn) !== null && _object$tokenIn !== void 0 ? _object$tokenIn : "";
    message.tokenOut = (_object$tokenOut = object.tokenOut) !== null && _object$tokenOut !== void 0 ? _object$tokenOut : "";
    return message;
  }
};
function createBaseRoute() {
  return {
    trades: [],
    stepSize: ""
  };
}
export const Route = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.trades) {
      Trade.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$trades, _object$stepSize;
    const message = createBaseRoute();
    message.trades = ((_object$trades = object.trades) === null || _object$trades === void 0 ? void 0 : _object$trades.map(e => Trade.fromPartial(e))) || [];
    message.stepSize = (_object$stepSize = object.stepSize) !== null && _object$stepSize !== void 0 ? _object$stepSize : "";
    return message;
  }
};
function createBaseTrade() {
  return {
    pool: Long.UZERO,
    tokenIn: "",
    tokenOut: ""
  };
}
export const Trade = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$tokenIn2, _object$tokenOut2;
    const message = createBaseTrade();
    message.pool = object.pool !== undefined && object.pool !== null ? Long.fromValue(object.pool) : Long.UZERO;
    message.tokenIn = (_object$tokenIn2 = object.tokenIn) !== null && _object$tokenIn2 !== void 0 ? _object$tokenIn2 : "";
    message.tokenOut = (_object$tokenOut2 = object.tokenOut) !== null && _object$tokenOut2 !== void 0 ? _object$tokenOut2 : "";
    return message;
  }
};
function createBaseRouteStatistics() {
  return {
    profits: [],
    numberOfTrades: "",
    route: []
  };
}
export const RouteStatistics = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.profits) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.numberOfTrades !== "") {
      writer.uint32(18).string(message.numberOfTrades);
    }
    writer.uint32(26).fork();
    for (const v of message.route) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.numberOfTrades = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
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
  fromPartial(object) {
    var _object$profits, _object$numberOfTrade, _object$route;
    const message = createBaseRouteStatistics();
    message.profits = ((_object$profits = object.profits) === null || _object$profits === void 0 ? void 0 : _object$profits.map(e => Coin.fromPartial(e))) || [];
    message.numberOfTrades = (_object$numberOfTrade = object.numberOfTrades) !== null && _object$numberOfTrade !== void 0 ? _object$numberOfTrade : "";
    message.route = ((_object$route = object.route) === null || _object$route === void 0 ? void 0 : _object$route.map(e => Long.fromValue(e))) || [];
    return message;
  }
};
function createBasePoolWeights() {
  return {
    stableWeight: Long.UZERO,
    balancerWeight: Long.UZERO,
    concentratedWeight: Long.UZERO
  };
}
export const PoolWeights = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBasePoolWeights();
    message.stableWeight = object.stableWeight !== undefined && object.stableWeight !== null ? Long.fromValue(object.stableWeight) : Long.UZERO;
    message.balancerWeight = object.balancerWeight !== undefined && object.balancerWeight !== null ? Long.fromValue(object.balancerWeight) : Long.UZERO;
    message.concentratedWeight = object.concentratedWeight !== undefined && object.concentratedWeight !== null ? Long.fromValue(object.concentratedWeight) : Long.UZERO;
    return message;
  }
};
function createBaseBaseDenom() {
  return {
    denom: "",
    stepSize: ""
  };
}
export const BaseDenom = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$denom, _object$stepSize2;
    const message = createBaseBaseDenom();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.stepSize = (_object$stepSize2 = object.stepSize) !== null && _object$stepSize2 !== void 0 ? _object$stepSize2 : "";
    return message;
  }
};