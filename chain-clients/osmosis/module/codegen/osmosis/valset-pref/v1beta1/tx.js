import { ValidatorPreference } from "./state";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export const MsgSetValidatorSetPreference = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$delegator, _object$preferences;
    const message = createBaseMsgSetValidatorSetPreference();
    message.delegator = (_object$delegator = object.delegator) !== null && _object$delegator !== void 0 ? _object$delegator : "";
    message.preferences = ((_object$preferences = object.preferences) === null || _object$preferences === void 0 ? void 0 : _object$preferences.map(e => ValidatorPreference.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgSetValidatorSetPreferenceResponse() {
  return {};
}
export const MsgSetValidatorSetPreferenceResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  }
};
function createBaseMsgDelegateToValidatorSet() {
  return {
    delegator: "",
    coin: undefined
  };
}
export const MsgDelegateToValidatorSet = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$delegator2;
    const message = createBaseMsgDelegateToValidatorSet();
    message.delegator = (_object$delegator2 = object.delegator) !== null && _object$delegator2 !== void 0 ? _object$delegator2 : "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }
};
function createBaseMsgDelegateToValidatorSetResponse() {
  return {};
}
export const MsgDelegateToValidatorSetResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  }
};
function createBaseMsgUndelegateFromValidatorSet() {
  return {
    delegator: "",
    coin: undefined
  };
}
export const MsgUndelegateFromValidatorSet = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$delegator3;
    const message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = (_object$delegator3 = object.delegator) !== null && _object$delegator3 !== void 0 ? _object$delegator3 : "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }
};
function createBaseMsgUndelegateFromValidatorSetResponse() {
  return {};
}
export const MsgUndelegateFromValidatorSetResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  }
};
function createBaseMsgRedelegateValidatorSet() {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgRedelegateValidatorSet = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$delegator4, _object$preferences2;
    const message = createBaseMsgRedelegateValidatorSet();
    message.delegator = (_object$delegator4 = object.delegator) !== null && _object$delegator4 !== void 0 ? _object$delegator4 : "";
    message.preferences = ((_object$preferences2 = object.preferences) === null || _object$preferences2 === void 0 ? void 0 : _object$preferences2.map(e => ValidatorPreference.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgRedelegateValidatorSetResponse() {
  return {};
}
export const MsgRedelegateValidatorSetResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  }
};
function createBaseMsgWithdrawDelegationRewards() {
  return {
    delegator: ""
  };
}
export const MsgWithdrawDelegationRewards = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$delegator5;
    const message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = (_object$delegator5 = object.delegator) !== null && _object$delegator5 !== void 0 ? _object$delegator5 : "";
    return message;
  }
};
function createBaseMsgWithdrawDelegationRewardsResponse() {
  return {};
}
export const MsgWithdrawDelegationRewardsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  }
};
function createBaseMsgDelegateBondedTokens() {
  return {
    delegator: "",
    lockID: Long.UZERO
  };
}
export const MsgDelegateBondedTokens = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (!message.lockID.isZero()) {
      writer.uint32(16).uint64(message.lockID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$delegator6;
    const message = createBaseMsgDelegateBondedTokens();
    message.delegator = (_object$delegator6 = object.delegator) !== null && _object$delegator6 !== void 0 ? _object$delegator6 : "";
    message.lockID = object.lockID !== undefined && object.lockID !== null ? Long.fromValue(object.lockID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgDelegateBondedTokensResponse() {
  return {};
}
export const MsgDelegateBondedTokensResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  }
};