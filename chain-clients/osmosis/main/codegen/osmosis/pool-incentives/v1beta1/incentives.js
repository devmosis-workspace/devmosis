"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PoolToGauges = exports.PoolToGauge = exports.Params = exports.LockableDurationsInfo = exports.DistrRecord = exports.DistrInfo = void 0;
var _duration = require("../../../google/protobuf/duration");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseParams() {
  return {
    mintedDenom: ""
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.mintedDenom !== "") {
      writer.uint32(10).string(message.mintedDenom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintedDenom = reader.string();
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
      mintedDenom: (0, _helpers.isSet)(object.mintedDenom) ? String(object.mintedDenom) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$mintedDenom;
    var message = createBaseParams();
    message.mintedDenom = (_object$mintedDenom = object.mintedDenom) !== null && _object$mintedDenom !== void 0 ? _object$mintedDenom : "";
    return message;
  }
};
exports.Params = Params;
function createBaseLockableDurationsInfo() {
  return {
    lockableDurations: []
  };
}
var LockableDurationsInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.lockableDurations),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _duration.Duration.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseLockableDurationsInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(_duration.Duration.decode(reader, reader.uint32()));
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
      lockableDurations: Array.isArray(object === null || object === void 0 ? void 0 : object.lockableDurations) ? object.lockableDurations.map(function (e) {
        return _duration.Duration.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$lockableDurat;
    var message = createBaseLockableDurationsInfo();
    message.lockableDurations = ((_object$lockableDurat = object.lockableDurations) === null || _object$lockableDurat === void 0 ? void 0 : _object$lockableDurat.map(function (e) {
      return _duration.Duration.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.LockableDurationsInfo = LockableDurationsInfo;
function createBaseDistrInfo() {
  return {
    totalWeight: "",
    records: []
  };
}
var DistrInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    var _iterator2 = _createForOfIteratorHelper(message.records),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        DistrRecord.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseDistrInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;
        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
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
      totalWeight: (0, _helpers.isSet)(object.totalWeight) ? String(object.totalWeight) : "",
      records: Array.isArray(object === null || object === void 0 ? void 0 : object.records) ? object.records.map(function (e) {
        return DistrRecord.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$totalWeight, _object$records;
    var message = createBaseDistrInfo();
    message.totalWeight = (_object$totalWeight = object.totalWeight) !== null && _object$totalWeight !== void 0 ? _object$totalWeight : "";
    message.records = ((_object$records = object.records) === null || _object$records === void 0 ? void 0 : _object$records.map(function (e) {
      return DistrRecord.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.DistrInfo = DistrInfo;
function createBaseDistrRecord() {
  return {
    gaugeId: _helpers.Long.UZERO,
    weight: ""
  };
}
var DistrRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDistrRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
          break;
        case 2:
          message.weight = reader.string();
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
      gaugeId: (0, _helpers.isSet)(object.gaugeId) ? _helpers.Long.fromValue(object.gaugeId) : _helpers.Long.UZERO,
      weight: (0, _helpers.isSet)(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$weight;
    var message = createBaseDistrRecord();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? _helpers.Long.fromValue(object.gaugeId) : _helpers.Long.UZERO;
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    return message;
  }
};
exports.DistrRecord = DistrRecord;
function createBasePoolToGauge() {
  return {
    poolId: _helpers.Long.UZERO,
    gaugeId: _helpers.Long.UZERO,
    duration: undefined
  };
}
var PoolToGauge = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(16).uint64(message.gaugeId);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePoolToGauge();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.gaugeId = reader.uint64();
          break;
        case 3:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
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
      poolId: (0, _helpers.isSet)(object.poolId) ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO,
      gaugeId: (0, _helpers.isSet)(object.gaugeId) ? _helpers.Long.fromValue(object.gaugeId) : _helpers.Long.UZERO,
      duration: (0, _helpers.isSet)(object.duration) ? _duration.Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePoolToGauge();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? _helpers.Long.fromValue(object.poolId) : _helpers.Long.UZERO;
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? _helpers.Long.fromValue(object.gaugeId) : _helpers.Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
exports.PoolToGauge = PoolToGauge;
function createBasePoolToGauges() {
  return {
    poolToGauge: []
  };
}
var PoolToGauges = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.poolToGauge),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        PoolToGauge.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBasePoolToGauges();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
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
      poolToGauge: Array.isArray(object === null || object === void 0 ? void 0 : object.poolToGauge) ? object.poolToGauge.map(function (e) {
        return PoolToGauge.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$poolToGauge;
    var message = createBasePoolToGauges();
    message.poolToGauge = ((_object$poolToGauge = object.poolToGauge) === null || _object$poolToGauge === void 0 ? void 0 : _object$poolToGauge.map(function (e) {
      return PoolToGauge.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.PoolToGauges = PoolToGauges;