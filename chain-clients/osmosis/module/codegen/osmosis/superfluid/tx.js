import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";

/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */

/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */

/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */

/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */

function createBaseMsgSuperfluidDelegate() {
  return {
    sender: "",
    lockId: Long.UZERO,
    valAddr: ""
  };
}
export const MsgSuperfluidDelegate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$sender, _object$valAddr;
    const message = createBaseMsgSuperfluidDelegate();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.valAddr = (_object$valAddr = object.valAddr) !== null && _object$valAddr !== void 0 ? _object$valAddr : "";
    return message;
  }
};
function createBaseMsgSuperfluidDelegateResponse() {
  return {};
}
export const MsgSuperfluidDelegateResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegateResponse();
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
    const message = createBaseMsgSuperfluidDelegateResponse();
    return message;
  }
};
function createBaseMsgSuperfluidUndelegate() {
  return {
    sender: "",
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUndelegate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$sender2;
    const message = createBaseMsgSuperfluidUndelegate();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSuperfluidUndelegateResponse() {
  return {};
}
export const MsgSuperfluidUndelegateResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegateResponse();
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
    const message = createBaseMsgSuperfluidUndelegateResponse();
    return message;
  }
};
function createBaseMsgSuperfluidUnbondLock() {
  return {
    sender: "",
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUnbondLock = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$sender3;
    const message = createBaseMsgSuperfluidUnbondLock();
    message.sender = (_object$sender3 = object.sender) !== null && _object$sender3 !== void 0 ? _object$sender3 : "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSuperfluidUnbondLockResponse() {
  return {};
}
export const MsgSuperfluidUnbondLockResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLockResponse();
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
    const message = createBaseMsgSuperfluidUnbondLockResponse();
    return message;
  }
};
function createBaseMsgSuperfluidUndelegateAndUnbondLock() {
  return {
    sender: "",
    lockId: Long.UZERO,
    coin: undefined
  };
}
export const MsgSuperfluidUndelegateAndUnbondLock = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
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
    var _object$sender4;
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
    message.sender = (_object$sender4 = object.sender) !== null && _object$sender4 !== void 0 ? _object$sender4 : "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }
};
function createBaseMsgSuperfluidUndelegateAndUnbondLockResponse() {
  return {};
}
export const MsgSuperfluidUndelegateAndUnbondLockResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
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
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
    return message;
  }
};
function createBaseMsgLockAndSuperfluidDelegate() {
  return {
    sender: "",
    coins: [],
    valAddr: ""
  };
}
export const MsgLockAndSuperfluidDelegate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$sender5, _object$coins, _object$valAddr2;
    const message = createBaseMsgLockAndSuperfluidDelegate();
    message.sender = (_object$sender5 = object.sender) !== null && _object$sender5 !== void 0 ? _object$sender5 : "";
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    message.valAddr = (_object$valAddr2 = object.valAddr) !== null && _object$valAddr2 !== void 0 ? _object$valAddr2 : "";
    return message;
  }
};
function createBaseMsgLockAndSuperfluidDelegateResponse() {
  return {
    ID: Long.UZERO
  };
}
export const MsgLockAndSuperfluidDelegateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUnPoolWhitelistedPool() {
  return {
    sender: "",
    poolId: Long.UZERO
  };
}
export const MsgUnPoolWhitelistedPool = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$sender6;
    const message = createBaseMsgUnPoolWhitelistedPool();
    message.sender = (_object$sender6 = object.sender) !== null && _object$sender6 !== void 0 ? _object$sender6 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUnPoolWhitelistedPoolResponse() {
  return {
    exitedLockIds: []
  };
}
export const MsgUnPoolWhitelistedPoolResponse = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.exitedLockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.exitedLockIds.push(reader.uint64());
            }
          } else {
            message.exitedLockIds.push(reader.uint64());
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
    var _object$exitedLockIds;
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = ((_object$exitedLockIds = object.exitedLockIds) === null || _object$exitedLockIds === void 0 ? void 0 : _object$exitedLockIds.map(e => Long.fromValue(e))) || [];
    return message;
  }
};