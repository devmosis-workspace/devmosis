import { PoolParams } from "./stableswap_pool";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreatePool */

/** ===================== MsgCreatePool */

/** Returns a poolID with custom poolName. */

/** Returns a poolID with custom poolName. */

/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */

/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */

function createBaseMsgCreateStableswapPool() {
  return {
    sender: "",
    poolParams: undefined,
    initialPoolLiquidity: [],
    scalingFactors: [],
    futurePoolGovernor: "",
    scalingFactorController: ""
  };
}
export const MsgCreateStableswapPool = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.initialPoolLiquidity) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.futurePoolGovernor !== "") {
      writer.uint32(42).string(message.futurePoolGovernor);
    }
    if (message.scalingFactorController !== "") {
      writer.uint32(50).string(message.scalingFactorController);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialPoolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scalingFactors.push(reader.uint64());
            }
          } else {
            message.scalingFactors.push(reader.uint64());
          }
          break;
        case 5:
          message.futurePoolGovernor = reader.string();
          break;
        case 6:
          message.scalingFactorController = reader.string();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      initialPoolLiquidity: Array.isArray(object === null || object === void 0 ? void 0 : object.initialPoolLiquidity) ? object.initialPoolLiquidity.map(e => Coin.fromJSON(e)) : [],
      scalingFactors: Array.isArray(object === null || object === void 0 ? void 0 : object.scalingFactors) ? object.scalingFactors.map(e => Long.fromValue(e)) : [],
      futurePoolGovernor: isSet(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : "",
      scalingFactorController: isSet(object.scalingFactorController) ? String(object.scalingFactorController) : ""
    };
  },
  fromPartial(object) {
    var _object$sender, _object$initialPoolLi, _object$scalingFactor, _object$futurePoolGov, _object$scalingFactor2;
    const message = createBaseMsgCreateStableswapPool();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.initialPoolLiquidity = ((_object$initialPoolLi = object.initialPoolLiquidity) === null || _object$initialPoolLi === void 0 ? void 0 : _object$initialPoolLi.map(e => Coin.fromPartial(e))) || [];
    message.scalingFactors = ((_object$scalingFactor = object.scalingFactors) === null || _object$scalingFactor === void 0 ? void 0 : _object$scalingFactor.map(e => Long.fromValue(e))) || [];
    message.futurePoolGovernor = (_object$futurePoolGov = object.futurePoolGovernor) !== null && _object$futurePoolGov !== void 0 ? _object$futurePoolGov : "";
    message.scalingFactorController = (_object$scalingFactor2 = object.scalingFactorController) !== null && _object$scalingFactor2 !== void 0 ? _object$scalingFactor2 : "";
    return message;
  }
};
function createBaseMsgCreateStableswapPoolResponse() {
  return {
    poolId: Long.UZERO
  };
}
export const MsgCreateStableswapPoolResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableswapPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseMsgCreateStableswapPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgStableSwapAdjustScalingFactors() {
  return {
    sender: "",
    poolId: Long.UZERO,
    scalingFactors: []
  };
}
export const MsgStableSwapAdjustScalingFactors = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    writer.uint32(26).fork();
    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scalingFactors.push(reader.uint64());
            }
          } else {
            message.scalingFactors.push(reader.uint64());
          }
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      scalingFactors: Array.isArray(object === null || object === void 0 ? void 0 : object.scalingFactors) ? object.scalingFactors.map(e => Long.fromValue(e)) : []
    };
  },
  fromPartial(object) {
    var _object$sender2, _object$scalingFactor3;
    const message = createBaseMsgStableSwapAdjustScalingFactors();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.scalingFactors = ((_object$scalingFactor3 = object.scalingFactors) === null || _object$scalingFactor3 === void 0 ? void 0 : _object$scalingFactor3.map(e => Long.fromValue(e))) || [];
    return message;
  }
};
function createBaseMsgStableSwapAdjustScalingFactorsResponse() {
  return {};
}
export const MsgStableSwapAdjustScalingFactorsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
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
    const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
    return message;
  }
};