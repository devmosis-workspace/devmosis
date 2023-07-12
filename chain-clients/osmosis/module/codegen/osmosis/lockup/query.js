import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, SyntheticLock } from "./lock";
import { Params } from "./params";
import { Long, isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseModuleBalanceRequest() {
  return {};
}
export const ModuleBalanceRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceRequest();
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseModuleBalanceRequest();
    return message;
  }
};
function createBaseModuleBalanceResponse() {
  return {
    coins: []
  };
}
export const ModuleBalanceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$coins;
    const message = createBaseModuleBalanceResponse();
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseModuleLockedAmountRequest() {
  return {};
}
export const ModuleLockedAmountRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountRequest();
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseModuleLockedAmountRequest();
    return message;
  }
};
function createBaseModuleLockedAmountResponse() {
  return {
    coins: []
  };
}
export const ModuleLockedAmountResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$coins2;
    const message = createBaseModuleLockedAmountResponse();
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountUnlockableCoinsRequest() {
  return {
    owner: ""
  };
}
export const AccountUnlockableCoinsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsRequest();
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
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object) {
    var _object$owner;
    const message = createBaseAccountUnlockableCoinsRequest();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  }
};
function createBaseAccountUnlockableCoinsResponse() {
  return {
    coins: []
  };
}
export const AccountUnlockableCoinsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$coins3;
    const message = createBaseAccountUnlockableCoinsResponse();
    message.coins = ((_object$coins3 = object.coins) === null || _object$coins3 === void 0 ? void 0 : _object$coins3.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountUnlockingCoinsRequest() {
  return {
    owner: ""
  };
}
export const AccountUnlockingCoinsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsRequest();
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
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object) {
    var _object$owner2;
    const message = createBaseAccountUnlockingCoinsRequest();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    return message;
  }
};
function createBaseAccountUnlockingCoinsResponse() {
  return {
    coins: []
  };
}
export const AccountUnlockingCoinsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$coins4;
    const message = createBaseAccountUnlockingCoinsResponse();
    message.coins = ((_object$coins4 = object.coins) === null || _object$coins4 === void 0 ? void 0 : _object$coins4.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountLockedCoinsRequest() {
  return {
    owner: ""
  };
}
export const AccountLockedCoinsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsRequest();
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
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object) {
    var _object$owner3;
    const message = createBaseAccountLockedCoinsRequest();
    message.owner = (_object$owner3 = object.owner) !== null && _object$owner3 !== void 0 ? _object$owner3 : "";
    return message;
  }
};
function createBaseAccountLockedCoinsResponse() {
  return {
    coins: []
  };
}
export const AccountLockedCoinsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$coins5;
    const message = createBaseAccountLockedCoinsResponse();
    message.coins = ((_object$coins5 = object.coins) === null || _object$coins5 === void 0 ? void 0 : _object$coins5.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountLockedPastTimeRequest() {
  return {
    owner: "",
    timestamp: undefined
  };
}
export const AccountLockedPastTimeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object) {
    var _object$owner4, _object$timestamp;
    const message = createBaseAccountLockedPastTimeRequest();
    message.owner = (_object$owner4 = object.owner) !== null && _object$owner4 !== void 0 ? _object$owner4 : "";
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : undefined;
    return message;
  }
};
function createBaseAccountLockedPastTimeResponse() {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks;
    const message = createBaseAccountLockedPastTimeResponse();
    message.locks = ((_object$locks = object.locks) === null || _object$locks === void 0 ? void 0 : _object$locks.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest() {
  return {
    owner: "",
    timestamp: undefined
  };
}
export const AccountLockedPastTimeNotUnlockingOnlyRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object) {
    var _object$owner5, _object$timestamp2;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    message.owner = (_object$owner5 = object.owner) !== null && _object$owner5 !== void 0 ? _object$owner5 : "";
    message.timestamp = (_object$timestamp2 = object.timestamp) !== null && _object$timestamp2 !== void 0 ? _object$timestamp2 : undefined;
    return message;
  }
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse() {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeNotUnlockingOnlyResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks2;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    message.locks = ((_object$locks2 = object.locks) === null || _object$locks2 === void 0 ? void 0 : _object$locks2.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountUnlockedBeforeTimeRequest() {
  return {
    owner: "",
    timestamp: undefined
  };
}
export const AccountUnlockedBeforeTimeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object) {
    var _object$owner6, _object$timestamp3;
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    message.owner = (_object$owner6 = object.owner) !== null && _object$owner6 !== void 0 ? _object$owner6 : "";
    message.timestamp = (_object$timestamp3 = object.timestamp) !== null && _object$timestamp3 !== void 0 ? _object$timestamp3 : undefined;
    return message;
  }
};
function createBaseAccountUnlockedBeforeTimeResponse() {
  return {
    locks: []
  };
}
export const AccountUnlockedBeforeTimeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks3;
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    message.locks = ((_object$locks3 = object.locks) === null || _object$locks3 === void 0 ? void 0 : _object$locks3.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountLockedPastTimeDenomRequest() {
  return {
    owner: "",
    timestamp: undefined,
    denom: ""
  };
}
export const AccountLockedPastTimeDenomRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object) {
    var _object$owner7, _object$timestamp4, _object$denom;
    const message = createBaseAccountLockedPastTimeDenomRequest();
    message.owner = (_object$owner7 = object.owner) !== null && _object$owner7 !== void 0 ? _object$owner7 : "";
    message.timestamp = (_object$timestamp4 = object.timestamp) !== null && _object$timestamp4 !== void 0 ? _object$timestamp4 : undefined;
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
function createBaseAccountLockedPastTimeDenomResponse() {
  return {
    locks: []
  };
}
export const AccountLockedPastTimeDenomResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks4;
    const message = createBaseAccountLockedPastTimeDenomResponse();
    message.locks = ((_object$locks4 = object.locks) === null || _object$locks4 === void 0 ? void 0 : _object$locks4.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseLockedDenomRequest() {
  return {
    denom: "",
    duration: undefined
  };
}
export const LockedDenomRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object) {
    var _object$denom2;
    const message = createBaseLockedDenomRequest();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseLockedDenomResponse() {
  return {
    amount: ""
  };
}
export const LockedDenomResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object) {
    var _object$amount;
    const message = createBaseLockedDenomResponse();
    message.amount = (_object$amount = object.amount) !== null && _object$amount !== void 0 ? _object$amount : "";
    return message;
  }
};
function createBaseLockedRequest() {
  return {
    lockId: Long.UZERO
  };
}
export const LockedRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseLockedRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseLockedResponse() {
  return {
    lock: undefined
  };
}
export const LockedResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.lock !== undefined) {
      PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lock = PeriodLock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      lock: isSet(object.lock) ? PeriodLock.fromJSON(object.lock) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseLockedResponse();
    message.lock = object.lock !== undefined && object.lock !== null ? PeriodLock.fromPartial(object.lock) : undefined;
    return message;
  }
};
function createBaseNextLockIDRequest() {
  return {};
}
export const NextLockIDRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextLockIDRequest();
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseNextLockIDRequest();
    return message;
  }
};
function createBaseNextLockIDResponse() {
  return {
    lockId: Long.UZERO
  };
}
export const NextLockIDResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextLockIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseNextLockIDResponse();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseSyntheticLockupsByLockupIDRequest() {
  return {
    lockId: Long.UZERO
  };
}
export const SyntheticLockupsByLockupIDRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseSyntheticLockupsByLockupIDResponse() {
  return {
    syntheticLocks: []
  };
}
export const SyntheticLockupsByLockupIDResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      syntheticLocks: Array.isArray(object === null || object === void 0 ? void 0 : object.syntheticLocks) ? object.syntheticLocks.map(e => SyntheticLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$syntheticLock;
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    message.syntheticLocks = ((_object$syntheticLock = object.syntheticLocks) === null || _object$syntheticLock === void 0 ? void 0 : _object$syntheticLock.map(e => SyntheticLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountLockedLongerDurationRequest() {
  return {
    owner: "",
    duration: undefined
  };
}
export const AccountLockedLongerDurationRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object) {
    var _object$owner8;
    const message = createBaseAccountLockedLongerDurationRequest();
    message.owner = (_object$owner8 = object.owner) !== null && _object$owner8 !== void 0 ? _object$owner8 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseAccountLockedLongerDurationResponse() {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks5;
    const message = createBaseAccountLockedLongerDurationResponse();
    message.locks = ((_object$locks5 = object.locks) === null || _object$locks5 === void 0 ? void 0 : _object$locks5.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountLockedDurationRequest() {
  return {
    owner: "",
    duration: undefined
  };
}
export const AccountLockedDurationRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object) {
    var _object$owner9;
    const message = createBaseAccountLockedDurationRequest();
    message.owner = (_object$owner9 = object.owner) !== null && _object$owner9 !== void 0 ? _object$owner9 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseAccountLockedDurationResponse() {
  return {
    locks: []
  };
}
export const AccountLockedDurationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks6;
    const message = createBaseAccountLockedDurationResponse();
    message.locks = ((_object$locks6 = object.locks) === null || _object$locks6 === void 0 ? void 0 : _object$locks6.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest() {
  return {
    owner: "",
    duration: undefined
  };
}
export const AccountLockedLongerDurationNotUnlockingOnlyRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object) {
    var _object$owner10;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    message.owner = (_object$owner10 = object.owner) !== null && _object$owner10 !== void 0 ? _object$owner10 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse() {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationNotUnlockingOnlyResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks7;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    message.locks = ((_object$locks7 = object.locks) === null || _object$locks7 === void 0 ? void 0 : _object$locks7.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccountLockedLongerDurationDenomRequest() {
  return {
    owner: "",
    duration: undefined,
    denom: ""
  };
}
export const AccountLockedLongerDurationDenomRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomRequest();
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
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object) {
    var _object$owner11, _object$denom3;
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    message.owner = (_object$owner11 = object.owner) !== null && _object$owner11 !== void 0 ? _object$owner11 : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.denom = (_object$denom3 = object.denom) !== null && _object$denom3 !== void 0 ? _object$denom3 : "";
    return message;
  }
};
function createBaseAccountLockedLongerDurationDenomResponse() {
  return {
    locks: []
  };
}
export const AccountLockedLongerDurationDenomResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks8;
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    message.locks = ((_object$locks8 = object.locks) === null || _object$locks8 === void 0 ? void 0 : _object$locks8.map(e => PeriodLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};