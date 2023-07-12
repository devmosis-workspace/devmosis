import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PoolType is an enumeration of all supported pool types. */
export let PoolType = /*#__PURE__*/function (PoolType) {
  PoolType[PoolType["Balancer"] = 0] = "Balancer";
  PoolType[PoolType["Stableswap"] = 1] = "Stableswap";
  PoolType[PoolType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return PoolType;
}({});
export const PoolTypeSDKType = PoolType;
export function poolTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "Balancer":
      return PoolType.Balancer;
    case 1:
    case "Stableswap":
      return PoolType.Stableswap;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object) {
  switch (object) {
    case PoolType.Balancer:
      return "Balancer";
    case PoolType.Stableswap:
      return "Stableswap";
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */

/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */

function createBaseModuleRoute() {
  return {
    poolType: 0,
    poolId: undefined
  };
}
export const ModuleRoute = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.poolType !== 0) {
      writer.uint32(8).int32(message.poolType);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.int32();
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
  fromJSON(object) {
    return {
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : 0,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : undefined
    };
  },
  fromPartial(object) {
    var _object$poolType;
    const message = createBaseModuleRoute();
    message.poolType = (_object$poolType = object.poolType) !== null && _object$poolType !== void 0 ? _object$poolType : 0;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : undefined;
    return message;
  }
};