"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParamsResponse = exports.ParamsRequest = exports.GeometricTwapToNowResponse = exports.GeometricTwapToNowRequest = exports.GeometricTwapResponse = exports.GeometricTwapRequest = exports.ArithmeticTwapToNowResponse = exports.ArithmeticTwapToNowRequest = exports.ArithmeticTwapResponse = exports.ArithmeticTwapRequest = void 0;
var _timestamp = require("../../../google/protobuf/timestamp");
var _genesis = require("./genesis");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseArithmeticTwapRequest() {
  return {
    poolId: _helpers.Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined,
    endTime: undefined
  };
}
var ArithmeticTwapRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseArithmeticTwapRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$baseAsset, _object$quoteAsset, _object$startTime, _object$endTime;
    var message = createBaseArithmeticTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.baseAsset = (_object$baseAsset = object.baseAsset) !== null && _object$baseAsset !== void 0 ? _object$baseAsset : "";
    message.quoteAsset = (_object$quoteAsset = object.quoteAsset) !== null && _object$quoteAsset !== void 0 ? _object$quoteAsset : "";
    message.startTime = (_object$startTime = object.startTime) !== null && _object$startTime !== void 0 ? _object$startTime : undefined;
    message.endTime = (_object$endTime = object.endTime) !== null && _object$endTime !== void 0 ? _object$endTime : undefined;
    return message;
  }
};
exports.ArithmeticTwapRequest = ArithmeticTwapRequest;
function createBaseArithmeticTwapResponse() {
  return {
    arithmeticTwap: ""
  };
}
var ArithmeticTwapResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseArithmeticTwapResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$arithmeticTwa;
    var message = createBaseArithmeticTwapResponse();
    message.arithmeticTwap = (_object$arithmeticTwa = object.arithmeticTwap) !== null && _object$arithmeticTwa !== void 0 ? _object$arithmeticTwa : "";
    return message;
  }
};
exports.ArithmeticTwapResponse = ArithmeticTwapResponse;
function createBaseArithmeticTwapToNowRequest() {
  return {
    poolId: _helpers.Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined
  };
}
var ArithmeticTwapToNowRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$baseAsset2, _object$quoteAsset2, _object$startTime2;
    var message = createBaseArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.baseAsset = (_object$baseAsset2 = object.baseAsset) !== null && _object$baseAsset2 !== void 0 ? _object$baseAsset2 : "";
    message.quoteAsset = (_object$quoteAsset2 = object.quoteAsset) !== null && _object$quoteAsset2 !== void 0 ? _object$quoteAsset2 : "";
    message.startTime = (_object$startTime2 = object.startTime) !== null && _object$startTime2 !== void 0 ? _object$startTime2 : undefined;
    return message;
  }
};
exports.ArithmeticTwapToNowRequest = ArithmeticTwapToNowRequest;
function createBaseArithmeticTwapToNowResponse() {
  return {
    arithmeticTwap: ""
  };
}
var ArithmeticTwapToNowResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$arithmeticTwa2;
    var message = createBaseArithmeticTwapToNowResponse();
    message.arithmeticTwap = (_object$arithmeticTwa2 = object.arithmeticTwap) !== null && _object$arithmeticTwa2 !== void 0 ? _object$arithmeticTwa2 : "";
    return message;
  }
};
exports.ArithmeticTwapToNowResponse = ArithmeticTwapToNowResponse;
function createBaseGeometricTwapRequest() {
  return {
    poolId: _helpers.Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined,
    endTime: undefined
  };
}
var GeometricTwapRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeometricTwapRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$baseAsset3, _object$quoteAsset3, _object$startTime3, _object$endTime2;
    var message = createBaseGeometricTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.baseAsset = (_object$baseAsset3 = object.baseAsset) !== null && _object$baseAsset3 !== void 0 ? _object$baseAsset3 : "";
    message.quoteAsset = (_object$quoteAsset3 = object.quoteAsset) !== null && _object$quoteAsset3 !== void 0 ? _object$quoteAsset3 : "";
    message.startTime = (_object$startTime3 = object.startTime) !== null && _object$startTime3 !== void 0 ? _object$startTime3 : undefined;
    message.endTime = (_object$endTime2 = object.endTime) !== null && _object$endTime2 !== void 0 ? _object$endTime2 : undefined;
    return message;
  }
};
exports.GeometricTwapRequest = GeometricTwapRequest;
function createBaseGeometricTwapResponse() {
  return {
    geometricTwap: ""
  };
}
var GeometricTwapResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(message.geometricTwap);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeometricTwapResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geometricTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$geometricTwap;
    var message = createBaseGeometricTwapResponse();
    message.geometricTwap = (_object$geometricTwap = object.geometricTwap) !== null && _object$geometricTwap !== void 0 ? _object$geometricTwap : "";
    return message;
  }
};
exports.GeometricTwapResponse = GeometricTwapResponse;
function createBaseGeometricTwapToNowRequest() {
  return {
    poolId: _helpers.Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined
  };
}
var GeometricTwapToNowRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeometricTwapToNowRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$baseAsset4, _object$quoteAsset4, _object$startTime4;
    var message = createBaseGeometricTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.baseAsset = (_object$baseAsset4 = object.baseAsset) !== null && _object$baseAsset4 !== void 0 ? _object$baseAsset4 : "";
    message.quoteAsset = (_object$quoteAsset4 = object.quoteAsset) !== null && _object$quoteAsset4 !== void 0 ? _object$quoteAsset4 : "";
    message.startTime = (_object$startTime4 = object.startTime) !== null && _object$startTime4 !== void 0 ? _object$startTime4 : undefined;
    return message;
  }
};
exports.GeometricTwapToNowRequest = GeometricTwapToNowRequest;
function createBaseGeometricTwapToNowResponse() {
  return {
    geometricTwap: ""
  };
}
var GeometricTwapToNowResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(message.geometricTwap);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeometricTwapToNowResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geometricTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$geometricTwap2;
    var message = createBaseGeometricTwapToNowResponse();
    message.geometricTwap = (_object$geometricTwap2 = object.geometricTwap) !== null && _object$geometricTwap2 !== void 0 ? _object$geometricTwap2 : "";
    return message;
  }
};
exports.GeometricTwapToNowResponse = GeometricTwapToNowResponse;
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