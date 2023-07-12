"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnpoolWhitelistedPools = exports.SuperfluidIntermediaryAccount = exports.SuperfluidDelegationRecord = exports.SuperfluidAssetTypeSDKType = exports.SuperfluidAssetType = exports.SuperfluidAsset = exports.OsmoEquivalentMultiplierRecord = exports.LockIdIntermediaryAccountConnection = void 0;
exports.superfluidAssetTypeFromJSON = superfluidAssetTypeFromJSON;
exports.superfluidAssetTypeToJSON = superfluidAssetTypeToJSON;
var _coin = require("../../cosmos/base/v1beta1/coin");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token itself or the lp share of a pool.
 */
var SuperfluidAssetType = /*#__PURE__*/function (SuperfluidAssetType) {
  SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeNative"] = 0] = "SuperfluidAssetTypeNative";
  SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeLPShare"] = 1] = "SuperfluidAssetTypeLPShare";
  SuperfluidAssetType[SuperfluidAssetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SuperfluidAssetType;
}({});
exports.SuperfluidAssetType = SuperfluidAssetType;
var SuperfluidAssetTypeSDKType = SuperfluidAssetType;
exports.SuperfluidAssetTypeSDKType = SuperfluidAssetTypeSDKType;
function superfluidAssetTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "SuperfluidAssetTypeNative":
      return SuperfluidAssetType.SuperfluidAssetTypeNative;
    case 1:
    case "SuperfluidAssetTypeLPShare":
      return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperfluidAssetType.UNRECOGNIZED;
  }
}
function superfluidAssetTypeToJSON(object) {
  switch (object) {
    case SuperfluidAssetType.SuperfluidAssetTypeNative:
      return "SuperfluidAssetTypeNative";
    case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
      return "SuperfluidAssetTypeLPShare";
    case SuperfluidAssetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */

/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */

/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */

/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */

/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */

/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */

/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */

/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */

/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */

/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */

function createBaseSuperfluidAsset() {
  return {
    denom: "",
    assetType: 0
  };
}
var SuperfluidAsset = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.assetType !== 0) {
      writer.uint32(16).int32(message.assetType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidAsset();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.assetType = reader.int32();
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
      assetType: (0, _helpers.isSet)(object.assetType) ? superfluidAssetTypeFromJSON(object.assetType) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$denom, _object$assetType;
    var message = createBaseSuperfluidAsset();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.assetType = (_object$assetType = object.assetType) !== null && _object$assetType !== void 0 ? _object$assetType : 0;
    return message;
  }
};
exports.SuperfluidAsset = SuperfluidAsset;
function createBaseSuperfluidIntermediaryAccount() {
  return {
    denom: "",
    valAddr: "",
    gaugeId: _helpers.Long.UZERO
  };
}
var SuperfluidIntermediaryAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidIntermediaryAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.gaugeId = reader.uint64();
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
      valAddr: (0, _helpers.isSet)(object.valAddr) ? String(object.valAddr) : "",
      gaugeId: (0, _helpers.isSet)(object.gaugeId) ? _helpers.Long.fromValue(object.gaugeId) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$denom2, _object$valAddr;
    var message = createBaseSuperfluidIntermediaryAccount();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.valAddr = (_object$valAddr = object.valAddr) !== null && _object$valAddr !== void 0 ? _object$valAddr : "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? _helpers.Long.fromValue(object.gaugeId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.SuperfluidIntermediaryAccount = SuperfluidIntermediaryAccount;
function createBaseOsmoEquivalentMultiplierRecord() {
  return {
    epochNumber: _helpers.Long.ZERO,
    denom: "",
    multiplier: ""
  };
}
var OsmoEquivalentMultiplierRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.multiplier !== "") {
      writer.uint32(26).string(message.multiplier);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOsmoEquivalentMultiplierRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.multiplier = reader.string();
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
      epochNumber: (0, _helpers.isSet)(object.epochNumber) ? _helpers.Long.fromValue(object.epochNumber) : _helpers.Long.ZERO,
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : "",
      multiplier: (0, _helpers.isSet)(object.multiplier) ? String(object.multiplier) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$denom3, _object$multiplier;
    var message = createBaseOsmoEquivalentMultiplierRecord();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? _helpers.Long.fromValue(object.epochNumber) : _helpers.Long.ZERO;
    message.denom = (_object$denom3 = object.denom) !== null && _object$denom3 !== void 0 ? _object$denom3 : "";
    message.multiplier = (_object$multiplier = object.multiplier) !== null && _object$multiplier !== void 0 ? _object$multiplier : "";
    return message;
  }
};
exports.OsmoEquivalentMultiplierRecord = OsmoEquivalentMultiplierRecord;
function createBaseSuperfluidDelegationRecord() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    delegationAmount: undefined,
    equivalentStakedAmount: undefined
  };
}
var SuperfluidDelegationRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.delegationAmount !== undefined) {
      _coin.Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.equivalentStakedAmount !== undefined) {
      _coin.Coin.encode(message.equivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidDelegationRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.delegationAmount = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.equivalentStakedAmount = _coin.Coin.decode(reader, reader.uint32());
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
      delegatorAddress: (0, _helpers.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: (0, _helpers.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
      delegationAmount: (0, _helpers.isSet)(object.delegationAmount) ? _coin.Coin.fromJSON(object.delegationAmount) : undefined,
      equivalentStakedAmount: (0, _helpers.isSet)(object.equivalentStakedAmount) ? _coin.Coin.fromJSON(object.equivalentStakedAmount) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr, _object$validatorAddr;
    var message = createBaseSuperfluidDelegationRecord();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? _coin.Coin.fromPartial(object.delegationAmount) : undefined;
    message.equivalentStakedAmount = object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null ? _coin.Coin.fromPartial(object.equivalentStakedAmount) : undefined;
    return message;
  }
};
exports.SuperfluidDelegationRecord = SuperfluidDelegationRecord;
function createBaseLockIdIntermediaryAccountConnection() {
  return {
    lockId: _helpers.Long.UZERO,
    intermediaryAccount: ""
  };
}
var LockIdIntermediaryAccountConnection = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    if (message.intermediaryAccount !== "") {
      writer.uint32(18).string(message.intermediaryAccount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLockIdIntermediaryAccountConnection();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        case 2:
          message.intermediaryAccount = reader.string();
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
      lockId: (0, _helpers.isSet)(object.lockId) ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO,
      intermediaryAccount: (0, _helpers.isSet)(object.intermediaryAccount) ? String(object.intermediaryAccount) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$intermediaryA;
    var message = createBaseLockIdIntermediaryAccountConnection();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    message.intermediaryAccount = (_object$intermediaryA = object.intermediaryAccount) !== null && _object$intermediaryA !== void 0 ? _object$intermediaryA : "";
    return message;
  }
};
exports.LockIdIntermediaryAccountConnection = LockIdIntermediaryAccountConnection;
function createBaseUnpoolWhitelistedPools() {
  return {
    ids: []
  };
}
var UnpoolWhitelistedPools = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator = _createForOfIteratorHelper(message.ids),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUnpoolWhitelistedPools();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
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
      ids: Array.isArray(object === null || object === void 0 ? void 0 : object.ids) ? object.ids.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$ids;
    var message = createBaseUnpoolWhitelistedPools();
    message.ids = ((_object$ids = object.ids) === null || _object$ids === void 0 ? void 0 : _object$ids.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.UnpoolWhitelistedPools = UnpoolWhitelistedPools;