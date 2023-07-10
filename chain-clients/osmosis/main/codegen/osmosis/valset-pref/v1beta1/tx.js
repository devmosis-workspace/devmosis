"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawDelegationRewardsResponse = exports.MsgWithdrawDelegationRewards = exports.MsgUndelegateFromValidatorSetResponse = exports.MsgUndelegateFromValidatorSet = exports.MsgSetValidatorSetPreferenceResponse = exports.MsgSetValidatorSetPreference = exports.MsgRedelegateValidatorSetResponse = exports.MsgRedelegateValidatorSet = exports.MsgDelegateToValidatorSetResponse = exports.MsgDelegateToValidatorSet = exports.MsgDelegateBondedTokensResponse = exports.MsgDelegateBondedTokens = void 0;
var _state = require("./state");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */

/** MsgCreateValidatorSetPreference is a list that holds validator-set. */

/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */

/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */

/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */

/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */

/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */

/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */

function createBaseMsgSetValidatorSetPreference() {
  return {
    delegator: "",
    preferences: []
  };
}
var MsgSetValidatorSetPreference = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    var _iterator = _createForOfIteratorHelper(message.preferences),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _state.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseMsgSetValidatorSetPreference();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(_state.ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator, _object$preferences;
    var message = createBaseMsgSetValidatorSetPreference();
    message.delegator = (_object$delegator = object.delegator) !== null && _object$delegator !== void 0 ? _object$delegator : "";
    message.preferences = ((_object$preferences = object.preferences) === null || _object$preferences === void 0 ? void 0 : _object$preferences.map(function (e) {
      return _state.ValidatorPreference.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgSetValidatorSetPreference = MsgSetValidatorSetPreference;
function createBaseMsgSetValidatorSetPreferenceResponse() {
  return {};
}
var MsgSetValidatorSetPreferenceResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetValidatorSetPreferenceResponse();
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
    var message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  }
};
exports.MsgSetValidatorSetPreferenceResponse = MsgSetValidatorSetPreferenceResponse;
function createBaseMsgDelegateToValidatorSet() {
  return {
    delegator: "",
    coin: undefined
  };
}
var MsgDelegateToValidatorSet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      _coin.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegateToValidatorSet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator2;
    var message = createBaseMsgDelegateToValidatorSet();
    message.delegator = (_object$delegator2 = object.delegator) !== null && _object$delegator2 !== void 0 ? _object$delegator2 : "";
    message.coin = object.coin !== undefined && object.coin !== null ? _coin.Coin.fromPartial(object.coin) : undefined;
    return message;
  }
};
exports.MsgDelegateToValidatorSet = MsgDelegateToValidatorSet;
function createBaseMsgDelegateToValidatorSetResponse() {
  return {};
}
var MsgDelegateToValidatorSetResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegateToValidatorSetResponse();
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
    var message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  }
};
exports.MsgDelegateToValidatorSetResponse = MsgDelegateToValidatorSetResponse;
function createBaseMsgUndelegateFromValidatorSet() {
  return {
    delegator: "",
    coin: undefined
  };
}
var MsgUndelegateFromValidatorSet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      _coin.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegateFromValidatorSet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 3:
          message.coin = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator3;
    var message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = (_object$delegator3 = object.delegator) !== null && _object$delegator3 !== void 0 ? _object$delegator3 : "";
    message.coin = object.coin !== undefined && object.coin !== null ? _coin.Coin.fromPartial(object.coin) : undefined;
    return message;
  }
};
exports.MsgUndelegateFromValidatorSet = MsgUndelegateFromValidatorSet;
function createBaseMsgUndelegateFromValidatorSetResponse() {
  return {};
}
var MsgUndelegateFromValidatorSetResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegateFromValidatorSetResponse();
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
    var message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  }
};
exports.MsgUndelegateFromValidatorSetResponse = MsgUndelegateFromValidatorSetResponse;
function createBaseMsgRedelegateValidatorSet() {
  return {
    delegator: "",
    preferences: []
  };
}
var MsgRedelegateValidatorSet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    var _iterator2 = _createForOfIteratorHelper(message.preferences),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _state.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseMsgRedelegateValidatorSet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(_state.ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator4, _object$preferences2;
    var message = createBaseMsgRedelegateValidatorSet();
    message.delegator = (_object$delegator4 = object.delegator) !== null && _object$delegator4 !== void 0 ? _object$delegator4 : "";
    message.preferences = ((_object$preferences2 = object.preferences) === null || _object$preferences2 === void 0 ? void 0 : _object$preferences2.map(function (e) {
      return _state.ValidatorPreference.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgRedelegateValidatorSet = MsgRedelegateValidatorSet;
function createBaseMsgRedelegateValidatorSetResponse() {
  return {};
}
var MsgRedelegateValidatorSetResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRedelegateValidatorSetResponse();
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
    var message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  }
};
exports.MsgRedelegateValidatorSetResponse = MsgRedelegateValidatorSetResponse;
function createBaseMsgWithdrawDelegationRewards() {
  return {
    delegator: ""
  };
}
var MsgWithdrawDelegationRewards = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawDelegationRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator5;
    var message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = (_object$delegator5 = object.delegator) !== null && _object$delegator5 !== void 0 ? _object$delegator5 : "";
    return message;
  }
};
exports.MsgWithdrawDelegationRewards = MsgWithdrawDelegationRewards;
function createBaseMsgWithdrawDelegationRewardsResponse() {
  return {};
}
var MsgWithdrawDelegationRewardsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawDelegationRewardsResponse();
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
    var message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  }
};
exports.MsgWithdrawDelegationRewardsResponse = MsgWithdrawDelegationRewardsResponse;
function createBaseMsgDelegateBondedTokens() {
  return {
    delegator: "",
    lockID: _helpers.Long.UZERO
  };
}
var MsgDelegateBondedTokens = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (!message.lockID.isZero()) {
      writer.uint32(16).uint64(message.lockID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegateBondedTokens();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.lockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator6;
    var message = createBaseMsgDelegateBondedTokens();
    message.delegator = (_object$delegator6 = object.delegator) !== null && _object$delegator6 !== void 0 ? _object$delegator6 : "";
    message.lockID = object.lockID !== undefined && object.lockID !== null ? _helpers.Long.fromValue(object.lockID) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgDelegateBondedTokens = MsgDelegateBondedTokens;
function createBaseMsgDelegateBondedTokensResponse() {
  return {};
}
var MsgDelegateBondedTokensResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegateBondedTokensResponse();
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
    var message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  }
};
exports.MsgDelegateBondedTokensResponse = MsgDelegateBondedTokensResponse;