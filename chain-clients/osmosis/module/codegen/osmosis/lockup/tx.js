import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "./lock";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";

/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */

/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */

/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */

/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */

function createBaseMsgLockTokens() {
  return {
    owner: "",
    duration: undefined,
    coins: []
  };
}
export const MsgLockTokens = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owner, _object$coins;
    const message = createBaseMsgLockTokens();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgLockTokensResponse() {
  return {
    ID: Long.UZERO
  };
}
export const MsgLockTokensResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLockTokensResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgBeginUnlockingAll() {
  return {
    owner: ""
  };
}
export const MsgBeginUnlockingAll = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owner2;
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    return message;
  }
};
function createBaseMsgBeginUnlockingAllResponse() {
  return {
    unlocks: []
  };
}
export const MsgBeginUnlockingAllResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.unlocks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$unlocks;
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = ((_object$unlocks = object.unlocks) === null || _object$unlocks === void 0 ? void 0 : _object$unlocks.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgBeginUnlocking() {
  return {
    owner: "",
    ID: Long.UZERO,
    coins: []
  };
}
export const MsgBeginUnlocking = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlocking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owner3, _object$coins2;
    const message = createBaseMsgBeginUnlocking();
    message.owner = (_object$owner3 = object.owner) !== null && _object$owner3 !== void 0 ? _object$owner3 : "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgBeginUnlockingResponse() {
  return {
    success: false,
    unlockingLockID: Long.UZERO
  };
}
export const MsgBeginUnlockingResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (!message.unlockingLockID.isZero()) {
      writer.uint32(16).uint64(message.unlockingLockID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.unlockingLockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$success;
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = (_object$success = object.success) !== null && _object$success !== void 0 ? _object$success : false;
    message.unlockingLockID = object.unlockingLockID !== undefined && object.unlockingLockID !== null ? Long.fromValue(object.unlockingLockID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgExtendLockup() {
  return {
    owner: "",
    ID: Long.UZERO,
    duration: undefined
  };
}
export const MsgExtendLockup = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owner4;
    const message = createBaseMsgExtendLockup();
    message.owner = (_object$owner4 = object.owner) !== null && _object$owner4 !== void 0 ? _object$owner4 : "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseMsgExtendLockupResponse() {
  return {
    success: false
  };
}
export const MsgExtendLockupResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$success2;
    const message = createBaseMsgExtendLockupResponse();
    message.success = (_object$success2 = object.success) !== null && _object$success2 !== void 0 ? _object$success2 : false;
    return message;
  }
};
function createBaseMsgForceUnlock() {
  return {
    owner: "",
    ID: Long.UZERO,
    coins: []
  };
}
export const MsgForceUnlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owner5, _object$coins3;
    const message = createBaseMsgForceUnlock();
    message.owner = (_object$owner5 = object.owner) !== null && _object$owner5 !== void 0 ? _object$owner5 : "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.coins = ((_object$coins3 = object.coins) === null || _object$coins3 === void 0 ? void 0 : _object$coins3.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgForceUnlockResponse() {
  return {
    success: false
  };
}
export const MsgForceUnlockResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$success3;
    const message = createBaseMsgForceUnlockResponse();
    message.success = (_object$success3 = object.success) !== null && _object$success3 !== void 0 ? _object$success3 : false;
    return message;
  }
};