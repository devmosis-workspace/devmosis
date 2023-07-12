"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _params = require("./params");
var _protorev = require("./protorev");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the protorev module's genesis state. */

/** GenesisState defines the protorev module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    tokenPairArbRoutes: [],
    baseDenoms: [],
    poolWeights: undefined,
    daysSinceModuleGenesis: _helpers.Long.UZERO,
    developerFees: [],
    latestBlockHeight: _helpers.Long.UZERO,
    developerAddress: "",
    maxPoolPointsPerBlock: _helpers.Long.UZERO,
    maxPoolPointsPerTx: _helpers.Long.UZERO,
    pointCountForBlock: _helpers.Long.UZERO,
    profits: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.tokenPairArbRoutes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _protorev.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.baseDenoms),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _protorev.BaseDenom.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.poolWeights !== undefined) {
      _protorev.PoolWeights.encode(message.poolWeights, writer.uint32(34).fork()).ldelim();
    }
    if (!message.daysSinceModuleGenesis.isZero()) {
      writer.uint32(40).uint64(message.daysSinceModuleGenesis);
    }
    var _iterator3 = _createForOfIteratorHelper(message.developerFees),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _coin.Coin.encode(_v2, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (!message.latestBlockHeight.isZero()) {
      writer.uint32(56).uint64(message.latestBlockHeight);
    }
    if (message.developerAddress !== "") {
      writer.uint32(66).string(message.developerAddress);
    }
    if (!message.maxPoolPointsPerBlock.isZero()) {
      writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
    }
    if (!message.maxPoolPointsPerTx.isZero()) {
      writer.uint32(80).uint64(message.maxPoolPointsPerTx);
    }
    if (!message.pointCountForBlock.isZero()) {
      writer.uint32(88).uint64(message.pointCountForBlock);
    }
    var _iterator4 = _createForOfIteratorHelper(message.profits),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        _coin.Coin.encode(_v3, writer.uint32(98).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairArbRoutes.push(_protorev.TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        case 3:
          message.baseDenoms.push(_protorev.BaseDenom.decode(reader, reader.uint32()));
          break;
        case 4:
          message.poolWeights = _protorev.PoolWeights.decode(reader, reader.uint32());
          break;
        case 5:
          message.daysSinceModuleGenesis = reader.uint64();
          break;
        case 6:
          message.developerFees.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.latestBlockHeight = reader.uint64();
          break;
        case 8:
          message.developerAddress = reader.string();
          break;
        case 9:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        case 10:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        case 11:
          message.pointCountForBlock = reader.uint64();
          break;
        case 12:
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
      params: (0, _helpers.isSet)(object.params) ? _params.Params.fromJSON(object.params) : undefined,
      tokenPairArbRoutes: Array.isArray(object === null || object === void 0 ? void 0 : object.tokenPairArbRoutes) ? object.tokenPairArbRoutes.map(function (e) {
        return _protorev.TokenPairArbRoutes.fromJSON(e);
      }) : [],
      baseDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.baseDenoms) ? object.baseDenoms.map(function (e) {
        return _protorev.BaseDenom.fromJSON(e);
      }) : [],
      poolWeights: (0, _helpers.isSet)(object.poolWeights) ? _protorev.PoolWeights.fromJSON(object.poolWeights) : undefined,
      daysSinceModuleGenesis: (0, _helpers.isSet)(object.daysSinceModuleGenesis) ? _helpers.Long.fromValue(object.daysSinceModuleGenesis) : _helpers.Long.UZERO,
      developerFees: Array.isArray(object === null || object === void 0 ? void 0 : object.developerFees) ? object.developerFees.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      latestBlockHeight: (0, _helpers.isSet)(object.latestBlockHeight) ? _helpers.Long.fromValue(object.latestBlockHeight) : _helpers.Long.UZERO,
      developerAddress: (0, _helpers.isSet)(object.developerAddress) ? String(object.developerAddress) : "",
      maxPoolPointsPerBlock: (0, _helpers.isSet)(object.maxPoolPointsPerBlock) ? _helpers.Long.fromValue(object.maxPoolPointsPerBlock) : _helpers.Long.UZERO,
      maxPoolPointsPerTx: (0, _helpers.isSet)(object.maxPoolPointsPerTx) ? _helpers.Long.fromValue(object.maxPoolPointsPerTx) : _helpers.Long.UZERO,
      pointCountForBlock: (0, _helpers.isSet)(object.pointCountForBlock) ? _helpers.Long.fromValue(object.pointCountForBlock) : _helpers.Long.UZERO,
      profits: Array.isArray(object === null || object === void 0 ? void 0 : object.profits) ? object.profits.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tokenPairArbR, _object$baseDenoms, _object$developerFees, _object$developerAddr, _object$profits;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    message.tokenPairArbRoutes = ((_object$tokenPairArbR = object.tokenPairArbRoutes) === null || _object$tokenPairArbR === void 0 ? void 0 : _object$tokenPairArbR.map(function (e) {
      return _protorev.TokenPairArbRoutes.fromPartial(e);
    })) || [];
    message.baseDenoms = ((_object$baseDenoms = object.baseDenoms) === null || _object$baseDenoms === void 0 ? void 0 : _object$baseDenoms.map(function (e) {
      return _protorev.BaseDenom.fromPartial(e);
    })) || [];
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? _protorev.PoolWeights.fromPartial(object.poolWeights) : undefined;
    message.daysSinceModuleGenesis = object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null ? _helpers.Long.fromValue(object.daysSinceModuleGenesis) : _helpers.Long.UZERO;
    message.developerFees = ((_object$developerFees = object.developerFees) === null || _object$developerFees === void 0 ? void 0 : _object$developerFees.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.latestBlockHeight = object.latestBlockHeight !== undefined && object.latestBlockHeight !== null ? _helpers.Long.fromValue(object.latestBlockHeight) : _helpers.Long.UZERO;
    message.developerAddress = (_object$developerAddr = object.developerAddress) !== null && _object$developerAddr !== void 0 ? _object$developerAddr : "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? _helpers.Long.fromValue(object.maxPoolPointsPerBlock) : _helpers.Long.UZERO;
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? _helpers.Long.fromValue(object.maxPoolPointsPerTx) : _helpers.Long.UZERO;
    message.pointCountForBlock = object.pointCountForBlock !== undefined && object.pointCountForBlock !== null ? _helpers.Long.fromValue(object.pointCountForBlock) : _helpers.Long.UZERO;
    message.profits = ((_object$profits = object.profits) === null || _object$profits === void 0 ? void 0 : _object$profits.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;