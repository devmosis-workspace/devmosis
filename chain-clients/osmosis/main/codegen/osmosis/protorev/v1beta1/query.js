"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryGetProtoRevTokenPairArbRoutesResponse = exports.QueryGetProtoRevTokenPairArbRoutesRequest = exports.QueryGetProtoRevStatisticsByRouteResponse = exports.QueryGetProtoRevStatisticsByRouteRequest = exports.QueryGetProtoRevProfitsByDenomResponse = exports.QueryGetProtoRevProfitsByDenomRequest = exports.QueryGetProtoRevPoolWeightsResponse = exports.QueryGetProtoRevPoolWeightsRequest = exports.QueryGetProtoRevPoolResponse = exports.QueryGetProtoRevPoolRequest = exports.QueryGetProtoRevNumberOfTradesResponse = exports.QueryGetProtoRevNumberOfTradesRequest = exports.QueryGetProtoRevMaxPoolPointsPerTxResponse = exports.QueryGetProtoRevMaxPoolPointsPerTxRequest = exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse = exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest = exports.QueryGetProtoRevEnabledResponse = exports.QueryGetProtoRevEnabledRequest = exports.QueryGetProtoRevDeveloperAccountResponse = exports.QueryGetProtoRevDeveloperAccountRequest = exports.QueryGetProtoRevBaseDenomsResponse = exports.QueryGetProtoRevBaseDenomsRequest = exports.QueryGetProtoRevAllRouteStatisticsResponse = exports.QueryGetProtoRevAllRouteStatisticsRequest = exports.QueryGetProtoRevAllProfitsResponse = exports.QueryGetProtoRevAllProfitsRequest = exports.QueryGetProtoRevAdminAccountResponse = exports.QueryGetProtoRevAdminAccountRequest = void 0;
var _params = require("./params");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _protorev = require("./protorev");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */

/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */

/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */

/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */

/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */

/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */

/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */

/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */

/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */

/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */

/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */

/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */

/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */

/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */

/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */

/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */

/**
 * QueryGetProtoRevPoolWeightsRequest is request type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */

/**
 * QueryGetProtoRevPoolWeightsRequest is request type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */

/**
 * QueryGetProtoRevPoolWeightsResponse is response type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */

/**
 * QueryGetProtoRevPoolWeightsResponse is response type for the
 * Query/GetProtoRevPoolWeights RPC method.
 */

/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */

/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */

/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */

/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */

/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */

/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */

/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */

/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */

/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */

/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */

/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */

/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */

/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */

/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */

/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */

/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */

/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */

/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */

/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */

/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
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
      params: (0, _helpers.isSet)(object.params) ? _params.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryGetProtoRevNumberOfTradesRequest() {
  return {};
}
var QueryGetProtoRevNumberOfTradesRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevNumberOfTradesRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return message;
  }
};
exports.QueryGetProtoRevNumberOfTradesRequest = QueryGetProtoRevNumberOfTradesRequest;
function createBaseQueryGetProtoRevNumberOfTradesResponse() {
  return {
    numberOfTrades: ""
  };
}
var QueryGetProtoRevNumberOfTradesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.numberOfTrades !== "") {
      writer.uint32(10).string(message.numberOfTrades);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberOfTrades = reader.string();
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
      numberOfTrades: (0, _helpers.isSet)(object.numberOfTrades) ? String(object.numberOfTrades) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$numberOfTrade;
    var message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    message.numberOfTrades = (_object$numberOfTrade = object.numberOfTrades) !== null && _object$numberOfTrade !== void 0 ? _object$numberOfTrade : "";
    return message;
  }
};
exports.QueryGetProtoRevNumberOfTradesResponse = QueryGetProtoRevNumberOfTradesResponse;
function createBaseQueryGetProtoRevProfitsByDenomRequest() {
  return {
    denom: ""
  };
}
var QueryGetProtoRevProfitsByDenomRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$denom;
    var message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
exports.QueryGetProtoRevProfitsByDenomRequest = QueryGetProtoRevProfitsByDenomRequest;
function createBaseQueryGetProtoRevProfitsByDenomResponse() {
  return {
    profit: undefined
  };
}
var QueryGetProtoRevProfitsByDenomResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.profit !== undefined) {
      _coin.Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profit = _coin.Coin.decode(reader, reader.uint32());
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
      profit: (0, _helpers.isSet)(object.profit) ? _coin.Coin.fromJSON(object.profit) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    message.profit = object.profit !== undefined && object.profit !== null ? _coin.Coin.fromPartial(object.profit) : undefined;
    return message;
  }
};
exports.QueryGetProtoRevProfitsByDenomResponse = QueryGetProtoRevProfitsByDenomResponse;
function createBaseQueryGetProtoRevAllProfitsRequest() {
  return {};
}
var QueryGetProtoRevAllProfitsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevAllProfitsRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevAllProfitsRequest();
    return message;
  }
};
exports.QueryGetProtoRevAllProfitsRequest = QueryGetProtoRevAllProfitsRequest;
function createBaseQueryGetProtoRevAllProfitsResponse() {
  return {
    profits: []
  };
}
var QueryGetProtoRevAllProfitsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.profits),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryGetProtoRevAllProfitsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(_coin.Coin.decode(reader, reader.uint32()));
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
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$profits;
    var message = createBaseQueryGetProtoRevAllProfitsResponse();
    message.profits = ((_object$profits = object.profits) === null || _object$profits === void 0 ? void 0 : _object$profits.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryGetProtoRevAllProfitsResponse = QueryGetProtoRevAllProfitsResponse;
function createBaseQueryGetProtoRevStatisticsByRouteRequest() {
  return {
    route: []
  };
}
var QueryGetProtoRevStatisticsByRouteRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator2 = _createForOfIteratorHelper(message.route),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      route: Array.isArray(object === null || object === void 0 ? void 0 : object.route) ? object.route.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$route;
    var message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    message.route = ((_object$route = object.route) === null || _object$route === void 0 ? void 0 : _object$route.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.QueryGetProtoRevStatisticsByRouteRequest = QueryGetProtoRevStatisticsByRouteRequest;
function createBaseQueryGetProtoRevStatisticsByRouteResponse() {
  return {
    statistics: undefined
  };
}
var QueryGetProtoRevStatisticsByRouteResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.statistics !== undefined) {
      _protorev.RouteStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics = _protorev.RouteStatistics.decode(reader, reader.uint32());
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
      statistics: (0, _helpers.isSet)(object.statistics) ? _protorev.RouteStatistics.fromJSON(object.statistics) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    message.statistics = object.statistics !== undefined && object.statistics !== null ? _protorev.RouteStatistics.fromPartial(object.statistics) : undefined;
    return message;
  }
};
exports.QueryGetProtoRevStatisticsByRouteResponse = QueryGetProtoRevStatisticsByRouteResponse;
function createBaseQueryGetProtoRevAllRouteStatisticsRequest() {
  return {};
}
var QueryGetProtoRevAllRouteStatisticsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    return message;
  }
};
exports.QueryGetProtoRevAllRouteStatisticsRequest = QueryGetProtoRevAllRouteStatisticsRequest;
function createBaseQueryGetProtoRevAllRouteStatisticsResponse() {
  return {
    statistics: []
  };
}
var QueryGetProtoRevAllRouteStatisticsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.statistics),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _protorev.RouteStatistics.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics.push(_protorev.RouteStatistics.decode(reader, reader.uint32()));
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
      statistics: Array.isArray(object === null || object === void 0 ? void 0 : object.statistics) ? object.statistics.map(function (e) {
        return _protorev.RouteStatistics.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$statistics;
    var message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    message.statistics = ((_object$statistics = object.statistics) === null || _object$statistics === void 0 ? void 0 : _object$statistics.map(function (e) {
      return _protorev.RouteStatistics.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryGetProtoRevAllRouteStatisticsResponse = QueryGetProtoRevAllRouteStatisticsResponse;
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest() {
  return {};
}
var QueryGetProtoRevTokenPairArbRoutesRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return message;
  }
};
exports.QueryGetProtoRevTokenPairArbRoutesRequest = QueryGetProtoRevTokenPairArbRoutesRequest;
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse() {
  return {
    routes: []
  };
}
var QueryGetProtoRevTokenPairArbRoutesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.routes),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _protorev.TokenPairArbRoutes.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(_protorev.TokenPairArbRoutes.decode(reader, reader.uint32()));
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
      routes: Array.isArray(object === null || object === void 0 ? void 0 : object.routes) ? object.routes.map(function (e) {
        return _protorev.TokenPairArbRoutes.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$routes;
    var message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    message.routes = ((_object$routes = object.routes) === null || _object$routes === void 0 ? void 0 : _object$routes.map(function (e) {
      return _protorev.TokenPairArbRoutes.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryGetProtoRevTokenPairArbRoutesResponse = QueryGetProtoRevTokenPairArbRoutesResponse;
function createBaseQueryGetProtoRevAdminAccountRequest() {
  return {};
}
var QueryGetProtoRevAdminAccountRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevAdminAccountRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevAdminAccountRequest();
    return message;
  }
};
exports.QueryGetProtoRevAdminAccountRequest = QueryGetProtoRevAdminAccountRequest;
function createBaseQueryGetProtoRevAdminAccountResponse() {
  return {
    adminAccount: ""
  };
}
var QueryGetProtoRevAdminAccountResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.adminAccount !== "") {
      writer.uint32(10).string(message.adminAccount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevAdminAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAccount = reader.string();
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
      adminAccount: (0, _helpers.isSet)(object.adminAccount) ? String(object.adminAccount) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$adminAccount;
    var message = createBaseQueryGetProtoRevAdminAccountResponse();
    message.adminAccount = (_object$adminAccount = object.adminAccount) !== null && _object$adminAccount !== void 0 ? _object$adminAccount : "";
    return message;
  }
};
exports.QueryGetProtoRevAdminAccountResponse = QueryGetProtoRevAdminAccountResponse;
function createBaseQueryGetProtoRevDeveloperAccountRequest() {
  return {};
}
var QueryGetProtoRevDeveloperAccountRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevDeveloperAccountRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    return message;
  }
};
exports.QueryGetProtoRevDeveloperAccountRequest = QueryGetProtoRevDeveloperAccountRequest;
function createBaseQueryGetProtoRevDeveloperAccountResponse() {
  return {
    developerAccount: ""
  };
}
var QueryGetProtoRevDeveloperAccountResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.developerAccount !== "") {
      writer.uint32(10).string(message.developerAccount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developerAccount = reader.string();
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
      developerAccount: (0, _helpers.isSet)(object.developerAccount) ? String(object.developerAccount) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$developerAcco;
    var message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    message.developerAccount = (_object$developerAcco = object.developerAccount) !== null && _object$developerAcco !== void 0 ? _object$developerAcco : "";
    return message;
  }
};
exports.QueryGetProtoRevDeveloperAccountResponse = QueryGetProtoRevDeveloperAccountResponse;
function createBaseQueryGetProtoRevPoolWeightsRequest() {
  return {};
}
var QueryGetProtoRevPoolWeightsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevPoolWeightsRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevPoolWeightsRequest();
    return message;
  }
};
exports.QueryGetProtoRevPoolWeightsRequest = QueryGetProtoRevPoolWeightsRequest;
function createBaseQueryGetProtoRevPoolWeightsResponse() {
  return {
    poolWeights: undefined
  };
}
var QueryGetProtoRevPoolWeightsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.poolWeights !== undefined) {
      _protorev.PoolWeights.encode(message.poolWeights, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevPoolWeightsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolWeights = _protorev.PoolWeights.decode(reader, reader.uint32());
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
      poolWeights: (0, _helpers.isSet)(object.poolWeights) ? _protorev.PoolWeights.fromJSON(object.poolWeights) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetProtoRevPoolWeightsResponse();
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? _protorev.PoolWeights.fromPartial(object.poolWeights) : undefined;
    return message;
  }
};
exports.QueryGetProtoRevPoolWeightsResponse = QueryGetProtoRevPoolWeightsResponse;
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest() {
  return {};
}
var QueryGetProtoRevMaxPoolPointsPerBlockRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    return message;
  }
};
exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest = QueryGetProtoRevMaxPoolPointsPerBlockRequest;
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse() {
  return {
    maxPoolPointsPerBlock: _helpers.Long.UZERO
  };
}
var QueryGetProtoRevMaxPoolPointsPerBlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.maxPoolPointsPerBlock.isZero()) {
      writer.uint32(8).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerBlock = reader.uint64();
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
      maxPoolPointsPerBlock: (0, _helpers.isSet)(object.maxPoolPointsPerBlock) ? _helpers.Long.fromValue(object.maxPoolPointsPerBlock) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? _helpers.Long.fromValue(object.maxPoolPointsPerBlock) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse = QueryGetProtoRevMaxPoolPointsPerBlockResponse;
function createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest() {
  return {};
}
var QueryGetProtoRevMaxPoolPointsPerTxRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    return message;
  }
};
exports.QueryGetProtoRevMaxPoolPointsPerTxRequest = QueryGetProtoRevMaxPoolPointsPerTxRequest;
function createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse() {
  return {
    maxPoolPointsPerTx: _helpers.Long.UZERO
  };
}
var QueryGetProtoRevMaxPoolPointsPerTxResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.maxPoolPointsPerTx.isZero()) {
      writer.uint32(8).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerTx = reader.uint64();
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
      maxPoolPointsPerTx: (0, _helpers.isSet)(object.maxPoolPointsPerTx) ? _helpers.Long.fromValue(object.maxPoolPointsPerTx) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? _helpers.Long.fromValue(object.maxPoolPointsPerTx) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryGetProtoRevMaxPoolPointsPerTxResponse = QueryGetProtoRevMaxPoolPointsPerTxResponse;
function createBaseQueryGetProtoRevBaseDenomsRequest() {
  return {};
}
var QueryGetProtoRevBaseDenomsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevBaseDenomsRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevBaseDenomsRequest();
    return message;
  }
};
exports.QueryGetProtoRevBaseDenomsRequest = QueryGetProtoRevBaseDenomsRequest;
function createBaseQueryGetProtoRevBaseDenomsResponse() {
  return {
    baseDenoms: []
  };
}
var QueryGetProtoRevBaseDenomsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.baseDenoms),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _protorev.BaseDenom.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryGetProtoRevBaseDenomsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenoms.push(_protorev.BaseDenom.decode(reader, reader.uint32()));
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
      baseDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.baseDenoms) ? object.baseDenoms.map(function (e) {
        return _protorev.BaseDenom.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$baseDenoms;
    var message = createBaseQueryGetProtoRevBaseDenomsResponse();
    message.baseDenoms = ((_object$baseDenoms = object.baseDenoms) === null || _object$baseDenoms === void 0 ? void 0 : _object$baseDenoms.map(function (e) {
      return _protorev.BaseDenom.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryGetProtoRevBaseDenomsResponse = QueryGetProtoRevBaseDenomsResponse;
function createBaseQueryGetProtoRevEnabledRequest() {
  return {};
}
var QueryGetProtoRevEnabledRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevEnabledRequest();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryGetProtoRevEnabledRequest();
    return message;
  }
};
exports.QueryGetProtoRevEnabledRequest = QueryGetProtoRevEnabledRequest;
function createBaseQueryGetProtoRevEnabledResponse() {
  return {
    enabled: false
  };
}
var QueryGetProtoRevEnabledResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevEnabledResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
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
      enabled: (0, _helpers.isSet)(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$enabled;
    var message = createBaseQueryGetProtoRevEnabledResponse();
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    return message;
  }
};
exports.QueryGetProtoRevEnabledResponse = QueryGetProtoRevEnabledResponse;
function createBaseQueryGetProtoRevPoolRequest() {
  return {
    baseDenom: "",
    otherDenom: ""
  };
}
var QueryGetProtoRevPoolRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.otherDenom !== "") {
      writer.uint32(18).string(message.otherDenom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProtoRevPoolRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.otherDenom = reader.string();
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
      baseDenom: (0, _helpers.isSet)(object.baseDenom) ? String(object.baseDenom) : "",
      otherDenom: (0, _helpers.isSet)(object.otherDenom) ? String(object.otherDenom) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$baseDenom, _object$otherDenom;
    var message = createBaseQueryGetProtoRevPoolRequest();
    message.baseDenom = (_object$baseDenom = object.baseDenom) !== null && _object$baseDenom !== void 0 ? _object$baseDenom : "";
    message.otherDenom = (_object$otherDenom = object.otherDenom) !== null && _object$otherDenom !== void 0 ? _object$otherDenom : "";
    return message;
  }
};
exports.QueryGetProtoRevPoolRequest = QueryGetProtoRevPoolRequest;
function createBaseQueryGetProtoRevPoolResponse() {
  return {
    poolId: _helpers.Long.UZERO
  };
}
var QueryGetProtoRevPoolResponse = {
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
    var message = createBaseQueryGetProtoRevPoolResponse();
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
  fromJSON: function fromJSON(object) {
    return {
      poolId: (0, _helpers.isSet)(object.poolId) ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetProtoRevPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryGetProtoRevPoolResponse = QueryGetProtoRevPoolResponse;