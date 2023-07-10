"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TotalSuperfluidDelegationsResponse = exports.TotalSuperfluidDelegationsRequest = exports.SuperfluidUndelegationsByDelegatorResponse = exports.SuperfluidUndelegationsByDelegatorRequest = exports.SuperfluidIntermediaryAccountInfo = exports.SuperfluidDelegationsByValidatorDenomResponse = exports.SuperfluidDelegationsByValidatorDenomRequest = exports.SuperfluidDelegationsByDelegatorResponse = exports.SuperfluidDelegationsByDelegatorRequest = exports.SuperfluidDelegationAmountResponse = exports.SuperfluidDelegationAmountRequest = exports.QueryUnpoolWhitelistResponse = exports.QueryUnpoolWhitelistRequest = exports.QueryTotalDelegationByValidatorForDenomResponse = exports.QueryTotalDelegationByValidatorForDenomRequest = exports.QueryTotalDelegationByDelegatorResponse = exports.QueryTotalDelegationByDelegatorRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = exports.Delegations = exports.ConnectedIntermediaryAccountResponse = exports.ConnectedIntermediaryAccountRequest = exports.AssetTypeResponse = exports.AssetTypeRequest = exports.AssetMultiplierResponse = exports.AssetMultiplierRequest = exports.AllIntermediaryAccountsResponse = exports.AllIntermediaryAccountsRequest = exports.AllAssetsResponse = exports.AllAssetsRequest = void 0;
var _pagination = require("../../cosmos/base/query/v1beta1/pagination");
var _params = require("./params");
var _superfluid = require("./superfluid");
var _coin = require("../../cosmos/base/v1beta1/coin");
var _lock = require("../lockup/lock");
var _staking = require("../../cosmos/staking/v1beta1/staking");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseAssetTypeRequest() {
  return {
    denom: ""
  };
}
var AssetTypeRequest = {
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
    var message = createBaseAssetTypeRequest();
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
  fromPartial: function fromPartial(object) {
    var _object$denom;
    var message = createBaseAssetTypeRequest();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
exports.AssetTypeRequest = AssetTypeRequest;
function createBaseAssetTypeResponse() {
  return {
    assetType: 0
  };
}
var AssetTypeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAssetTypeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$assetType;
    var message = createBaseAssetTypeResponse();
    message.assetType = (_object$assetType = object.assetType) !== null && _object$assetType !== void 0 ? _object$assetType : 0;
    return message;
  }
};
exports.AssetTypeResponse = AssetTypeResponse;
function createBaseAllAssetsRequest() {
  return {};
}
var AllAssetsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAllAssetsRequest();
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
    var message = createBaseAllAssetsRequest();
    return message;
  }
};
exports.AllAssetsRequest = AllAssetsRequest;
function createBaseAllAssetsResponse() {
  return {
    assets: []
  };
}
var AllAssetsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.assets),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _superfluid.SuperfluidAsset.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseAllAssetsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(_superfluid.SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$assets;
    var message = createBaseAllAssetsResponse();
    message.assets = ((_object$assets = object.assets) === null || _object$assets === void 0 ? void 0 : _object$assets.map(function (e) {
      return _superfluid.SuperfluidAsset.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AllAssetsResponse = AllAssetsResponse;
function createBaseAssetMultiplierRequest() {
  return {
    denom: ""
  };
}
var AssetMultiplierRequest = {
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
    var message = createBaseAssetMultiplierRequest();
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
  fromPartial: function fromPartial(object) {
    var _object$denom2;
    var message = createBaseAssetMultiplierRequest();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    return message;
  }
};
exports.AssetMultiplierRequest = AssetMultiplierRequest;
function createBaseAssetMultiplierResponse() {
  return {
    osmoEquivalentMultiplier: undefined
  };
}
var AssetMultiplierResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.osmoEquivalentMultiplier !== undefined) {
      _superfluid.OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAssetMultiplierResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.osmoEquivalentMultiplier = _superfluid.OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseAssetMultiplierResponse();
    message.osmoEquivalentMultiplier = object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null ? _superfluid.OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier) : undefined;
    return message;
  }
};
exports.AssetMultiplierResponse = AssetMultiplierResponse;
function createBaseSuperfluidIntermediaryAccountInfo() {
  return {
    denom: "",
    valAddr: "",
    gaugeId: _helpers.Long.UZERO,
    address: ""
  };
}
var SuperfluidIntermediaryAccountInfo = {
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
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidIntermediaryAccountInfo();
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
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom3, _object$valAddr, _object$address;
    var message = createBaseSuperfluidIntermediaryAccountInfo();
    message.denom = (_object$denom3 = object.denom) !== null && _object$denom3 !== void 0 ? _object$denom3 : "";
    message.valAddr = (_object$valAddr = object.valAddr) !== null && _object$valAddr !== void 0 ? _object$valAddr : "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? _helpers.Long.fromValue(object.gaugeId) : _helpers.Long.UZERO;
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
exports.SuperfluidIntermediaryAccountInfo = SuperfluidIntermediaryAccountInfo;
function createBaseAllIntermediaryAccountsRequest() {
  return {
    pagination: undefined
  };
}
var AllIntermediaryAccountsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAllIntermediaryAccountsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var message = createBaseAllIntermediaryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.AllIntermediaryAccountsRequest = AllIntermediaryAccountsRequest;
function createBaseAllIntermediaryAccountsResponse() {
  return {
    accounts: [],
    pagination: undefined
  };
}
var AllIntermediaryAccountsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.accounts),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        SuperfluidIntermediaryAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAllIntermediaryAccountsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
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
    var _object$accounts;
    var message = createBaseAllIntermediaryAccountsResponse();
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map(function (e) {
      return SuperfluidIntermediaryAccountInfo.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.AllIntermediaryAccountsResponse = AllIntermediaryAccountsResponse;
function createBaseConnectedIntermediaryAccountRequest() {
  return {
    lockId: _helpers.Long.UZERO
  };
}
var ConnectedIntermediaryAccountRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConnectedIntermediaryAccountRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConnectedIntermediaryAccountRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? _helpers.Long.fromValue(object.lockId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ConnectedIntermediaryAccountRequest = ConnectedIntermediaryAccountRequest;
function createBaseConnectedIntermediaryAccountResponse() {
  return {
    account: undefined
  };
}
var ConnectedIntermediaryAccountResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.account !== undefined) {
      SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConnectedIntermediaryAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConnectedIntermediaryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? SuperfluidIntermediaryAccountInfo.fromPartial(object.account) : undefined;
    return message;
  }
};
exports.ConnectedIntermediaryAccountResponse = ConnectedIntermediaryAccountResponse;
function createBaseQueryTotalDelegationByValidatorForDenomRequest() {
  return {
    denom: ""
  };
}
var QueryTotalDelegationByValidatorForDenomRequest = {
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
    var message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
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
  fromPartial: function fromPartial(object) {
    var _object$denom4;
    var message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    message.denom = (_object$denom4 = object.denom) !== null && _object$denom4 !== void 0 ? _object$denom4 : "";
    return message;
  }
};
exports.QueryTotalDelegationByValidatorForDenomRequest = QueryTotalDelegationByValidatorForDenomRequest;
function createBaseQueryTotalDelegationByValidatorForDenomResponse() {
  return {
    assets: []
  };
}
var QueryTotalDelegationByValidatorForDenomResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.assets),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        Delegations.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Delegations.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$assets2;
    var message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    message.assets = ((_object$assets2 = object.assets) === null || _object$assets2 === void 0 ? void 0 : _object$assets2.map(function (e) {
      return Delegations.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryTotalDelegationByValidatorForDenomResponse = QueryTotalDelegationByValidatorForDenomResponse;
function createBaseDelegations() {
  return {
    valAddr: "",
    amountSfsd: "",
    osmoEquivalent: ""
  };
}
var Delegations = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.valAddr !== "") {
      writer.uint32(10).string(message.valAddr);
    }
    if (message.amountSfsd !== "") {
      writer.uint32(18).string(message.amountSfsd);
    }
    if (message.osmoEquivalent !== "") {
      writer.uint32(26).string(message.osmoEquivalent);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegations();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valAddr = reader.string();
          break;
        case 2:
          message.amountSfsd = reader.string();
          break;
        case 3:
          message.osmoEquivalent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$valAddr2, _object$amountSfsd, _object$osmoEquivalen;
    var message = createBaseDelegations();
    message.valAddr = (_object$valAddr2 = object.valAddr) !== null && _object$valAddr2 !== void 0 ? _object$valAddr2 : "";
    message.amountSfsd = (_object$amountSfsd = object.amountSfsd) !== null && _object$amountSfsd !== void 0 ? _object$amountSfsd : "";
    message.osmoEquivalent = (_object$osmoEquivalen = object.osmoEquivalent) !== null && _object$osmoEquivalen !== void 0 ? _object$osmoEquivalen : "";
    return message;
  }
};
exports.Delegations = Delegations;
function createBaseTotalSuperfluidDelegationsRequest() {
  return {};
}
var TotalSuperfluidDelegationsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTotalSuperfluidDelegationsRequest();
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
    var message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  }
};
exports.TotalSuperfluidDelegationsRequest = TotalSuperfluidDelegationsRequest;
function createBaseTotalSuperfluidDelegationsResponse() {
  return {
    totalDelegations: ""
  };
}
var TotalSuperfluidDelegationsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.totalDelegations !== "") {
      writer.uint32(10).string(message.totalDelegations);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTotalSuperfluidDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegations = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$totalDelegati;
    var message = createBaseTotalSuperfluidDelegationsResponse();
    message.totalDelegations = (_object$totalDelegati = object.totalDelegations) !== null && _object$totalDelegati !== void 0 ? _object$totalDelegati : "";
    return message;
  }
};
exports.TotalSuperfluidDelegationsResponse = TotalSuperfluidDelegationsResponse;
function createBaseSuperfluidDelegationAmountRequest() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: ""
  };
}
var SuperfluidDelegationAmountRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidDelegationAmountRequest();
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
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr, _object$validatorAddr, _object$denom5;
    var message = createBaseSuperfluidDelegationAmountRequest();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.denom = (_object$denom5 = object.denom) !== null && _object$denom5 !== void 0 ? _object$denom5 : "";
    return message;
  }
};
exports.SuperfluidDelegationAmountRequest = SuperfluidDelegationAmountRequest;
function createBaseSuperfluidDelegationAmountResponse() {
  return {
    amount: []
  };
}
var SuperfluidDelegationAmountResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.amount),
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
    var message = createBaseSuperfluidDelegationAmountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount;
    var message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SuperfluidDelegationAmountResponse = SuperfluidDelegationAmountResponse;
function createBaseSuperfluidDelegationsByDelegatorRequest() {
  return {
    delegatorAddress: ""
  };
}
var SuperfluidDelegationsByDelegatorRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidDelegationsByDelegatorRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2;
    var message = createBaseSuperfluidDelegationsByDelegatorRequest();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    return message;
  }
};
exports.SuperfluidDelegationsByDelegatorRequest = SuperfluidDelegationsByDelegatorRequest;
function createBaseSuperfluidDelegationsByDelegatorResponse() {
  return {
    superfluidDelegationRecords: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}
var SuperfluidDelegationsByDelegatorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.superfluidDelegationRecords),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _superfluid.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.totalDelegatedCoins),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v = _step6.value;
        _coin.Coin.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.totalEquivalentStakedAmount !== undefined) {
      _coin.Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidDelegationsByDelegatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(_superfluid.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalDelegatedCoins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalEquivalentStakedAmount = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$superfluidDel, _object$totalDelegate;
    var message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = ((_object$superfluidDel = object.superfluidDelegationRecords) === null || _object$superfluidDel === void 0 ? void 0 : _object$superfluidDel.map(function (e) {
      return _superfluid.SuperfluidDelegationRecord.fromPartial(e);
    })) || [];
    message.totalDelegatedCoins = ((_object$totalDelegate = object.totalDelegatedCoins) === null || _object$totalDelegate === void 0 ? void 0 : _object$totalDelegate.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? _coin.Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  }
};
exports.SuperfluidDelegationsByDelegatorResponse = SuperfluidDelegationsByDelegatorResponse;
function createBaseSuperfluidUndelegationsByDelegatorRequest() {
  return {
    delegatorAddress: "",
    denom: ""
  };
}
var SuperfluidUndelegationsByDelegatorRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr3, _object$denom6;
    var message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.denom = (_object$denom6 = object.denom) !== null && _object$denom6 !== void 0 ? _object$denom6 : "";
    return message;
  }
};
exports.SuperfluidUndelegationsByDelegatorRequest = SuperfluidUndelegationsByDelegatorRequest;
function createBaseSuperfluidUndelegationsByDelegatorResponse() {
  return {
    superfluidDelegationRecords: [],
    totalUndelegatedCoins: [],
    syntheticLocks: []
  };
}
var SuperfluidUndelegationsByDelegatorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.superfluidDelegationRecords),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _superfluid.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.totalUndelegatedCoins),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v2 = _step8.value;
        _coin.Coin.encode(_v2, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    var _iterator9 = _createForOfIteratorHelper(message.syntheticLocks),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var _v3 = _step9.value;
        _lock.SyntheticLock.encode(_v3, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(_superfluid.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalUndelegatedCoins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.syntheticLocks.push(_lock.SyntheticLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$superfluidDel2, _object$totalUndelega, _object$syntheticLock;
    var message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = ((_object$superfluidDel2 = object.superfluidDelegationRecords) === null || _object$superfluidDel2 === void 0 ? void 0 : _object$superfluidDel2.map(function (e) {
      return _superfluid.SuperfluidDelegationRecord.fromPartial(e);
    })) || [];
    message.totalUndelegatedCoins = ((_object$totalUndelega = object.totalUndelegatedCoins) === null || _object$totalUndelega === void 0 ? void 0 : _object$totalUndelega.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.syntheticLocks = ((_object$syntheticLock = object.syntheticLocks) === null || _object$syntheticLock === void 0 ? void 0 : _object$syntheticLock.map(function (e) {
      return _lock.SyntheticLock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SuperfluidUndelegationsByDelegatorResponse = SuperfluidUndelegationsByDelegatorResponse;
function createBaseSuperfluidDelegationsByValidatorDenomRequest() {
  return {
    validatorAddress: "",
    denom: ""
  };
}
var SuperfluidDelegationsByValidatorDenomRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr2, _object$denom7;
    var message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.denom = (_object$denom7 = object.denom) !== null && _object$denom7 !== void 0 ? _object$denom7 : "";
    return message;
  }
};
exports.SuperfluidDelegationsByValidatorDenomRequest = SuperfluidDelegationsByValidatorDenomRequest;
function createBaseSuperfluidDelegationsByValidatorDenomResponse() {
  return {
    superfluidDelegationRecords: []
  };
}
var SuperfluidDelegationsByValidatorDenomResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator10 = _createForOfIteratorHelper(message.superfluidDelegationRecords),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        _superfluid.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(_superfluid.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$superfluidDel3;
    var message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords = ((_object$superfluidDel3 = object.superfluidDelegationRecords) === null || _object$superfluidDel3 === void 0 ? void 0 : _object$superfluidDel3.map(function (e) {
      return _superfluid.SuperfluidDelegationRecord.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SuperfluidDelegationsByValidatorDenomResponse = SuperfluidDelegationsByValidatorDenomResponse;
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest() {
  return {
    validatorAddress: "",
    denom: ""
  };
}
var EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr3, _object$denom8;
    var message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.denom = (_object$denom8 = object.denom) !== null && _object$denom8 !== void 0 ? _object$denom8 : "";
    return message;
  }
};
exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse() {
  return {
    totalDelegatedCoins: []
  };
}
var EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator11 = _createForOfIteratorHelper(message.totalDelegatedCoins),
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
    var message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegatedCoins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$totalDelegate2;
    var message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins = ((_object$totalDelegate2 = object.totalDelegatedCoins) === null || _object$totalDelegate2 === void 0 ? void 0 : _object$totalDelegate2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
function createBaseQueryTotalDelegationByDelegatorRequest() {
  return {
    delegatorAddress: ""
  };
}
var QueryTotalDelegationByDelegatorRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalDelegationByDelegatorRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr4;
    var message = createBaseQueryTotalDelegationByDelegatorRequest();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    return message;
  }
};
exports.QueryTotalDelegationByDelegatorRequest = QueryTotalDelegationByDelegatorRequest;
function createBaseQueryTotalDelegationByDelegatorResponse() {
  return {
    superfluidDelegationRecords: [],
    delegationResponse: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}
var QueryTotalDelegationByDelegatorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator12 = _createForOfIteratorHelper(message.superfluidDelegationRecords),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var v = _step12.value;
        _superfluid.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    var _iterator13 = _createForOfIteratorHelper(message.delegationResponse),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _v4 = _step13.value;
        _staking.DelegationResponse.encode(_v4, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    var _iterator14 = _createForOfIteratorHelper(message.totalDelegatedCoins),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _v5 = _step14.value;
        _coin.Coin.encode(_v5, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    if (message.totalEquivalentStakedAmount !== undefined) {
      _coin.Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalDelegationByDelegatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(_superfluid.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.delegationResponse.push(_staking.DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalDelegatedCoins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalEquivalentStakedAmount = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$superfluidDel4, _object$delegationRes, _object$totalDelegate3;
    var message = createBaseQueryTotalDelegationByDelegatorResponse();
    message.superfluidDelegationRecords = ((_object$superfluidDel4 = object.superfluidDelegationRecords) === null || _object$superfluidDel4 === void 0 ? void 0 : _object$superfluidDel4.map(function (e) {
      return _superfluid.SuperfluidDelegationRecord.fromPartial(e);
    })) || [];
    message.delegationResponse = ((_object$delegationRes = object.delegationResponse) === null || _object$delegationRes === void 0 ? void 0 : _object$delegationRes.map(function (e) {
      return _staking.DelegationResponse.fromPartial(e);
    })) || [];
    message.totalDelegatedCoins = ((_object$totalDelegate3 = object.totalDelegatedCoins) === null || _object$totalDelegate3 === void 0 ? void 0 : _object$totalDelegate3.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? _coin.Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  }
};
exports.QueryTotalDelegationByDelegatorResponse = QueryTotalDelegationByDelegatorResponse;
function createBaseQueryUnpoolWhitelistRequest() {
  return {};
}
var QueryUnpoolWhitelistRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnpoolWhitelistRequest();
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
    var message = createBaseQueryUnpoolWhitelistRequest();
    return message;
  }
};
exports.QueryUnpoolWhitelistRequest = QueryUnpoolWhitelistRequest;
function createBaseQueryUnpoolWhitelistResponse() {
  return {
    poolIds: []
  };
}
var QueryUnpoolWhitelistResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator15 = _createForOfIteratorHelper(message.poolIds),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var v = _step15.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnpoolWhitelistResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
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
    var _object$poolIds;
    var message = createBaseQueryUnpoolWhitelistResponse();
    message.poolIds = ((_object$poolIds = object.poolIds) === null || _object$poolIds === void 0 ? void 0 : _object$poolIds.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.QueryUnpoolWhitelistResponse = QueryUnpoolWhitelistResponse;