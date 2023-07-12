import { PeriodLock, SyntheticLock } from "./lock";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the lockup module's genesis state. */

/** GenesisState defines the lockup module's genesis state. */

function createBaseGenesisState() {
  return {
    lastLockId: Long.UZERO,
    locks: [],
    syntheticLocks: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.lastLockId.isZero()) {
      writer.uint32(8).uint64(message.lastLockId);
    }
    for (const v of message.locks) {
      PeriodLock.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastLockId = reader.uint64();
          break;
        case 2:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        case 3:
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
      lastLockId: isSet(object.lastLockId) ? Long.fromValue(object.lastLockId) : Long.UZERO,
      locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks) ? object.locks.map(e => PeriodLock.fromJSON(e)) : [],
      syntheticLocks: Array.isArray(object === null || object === void 0 ? void 0 : object.syntheticLocks) ? object.syntheticLocks.map(e => SyntheticLock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$locks, _object$syntheticLock;
    const message = createBaseGenesisState();
    message.lastLockId = object.lastLockId !== undefined && object.lastLockId !== null ? Long.fromValue(object.lastLockId) : Long.UZERO;
    message.locks = ((_object$locks = object.locks) === null || _object$locks === void 0 ? void 0 : _object$locks.map(e => PeriodLock.fromPartial(e))) || [];
    message.syntheticLocks = ((_object$syntheticLock = object.syntheticLocks) === null || _object$syntheticLock === void 0 ? void 0 : _object$syntheticLock.map(e => SyntheticLock.fromPartial(e))) || [];
    return message;
  }
};