import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */

/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */

/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */

/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */

/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */

/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */

function createBaseSmoothWeightChangeParams() {
  return {
    startTime: undefined,
    duration: undefined,
    initialPoolWeights: [],
    targetPoolWeights: []
  };
}
export const SmoothWeightChangeParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.initialPoolWeights) {
      PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.targetPoolWeights) {
      PoolAsset.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmoothWeightChangeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialPoolWeights.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.targetPoolWeights.push(PoolAsset.decode(reader, reader.uint32()));
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
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      initialPoolWeights: Array.isArray(object === null || object === void 0 ? void 0 : object.initialPoolWeights) ? object.initialPoolWeights.map(e => PoolAsset.fromJSON(e)) : [],
      targetPoolWeights: Array.isArray(object === null || object === void 0 ? void 0 : object.targetPoolWeights) ? object.targetPoolWeights.map(e => PoolAsset.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$startTime, _object$initialPoolWe, _object$targetPoolWei;
    const message = createBaseSmoothWeightChangeParams();
    message.startTime = (_object$startTime = object.startTime) !== null && _object$startTime !== void 0 ? _object$startTime : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.initialPoolWeights = ((_object$initialPoolWe = object.initialPoolWeights) === null || _object$initialPoolWe === void 0 ? void 0 : _object$initialPoolWe.map(e => PoolAsset.fromPartial(e))) || [];
    message.targetPoolWeights = ((_object$targetPoolWei = object.targetPoolWeights) === null || _object$targetPoolWei === void 0 ? void 0 : _object$targetPoolWei.map(e => PoolAsset.fromPartial(e))) || [];
    return message;
  }
};
function createBasePoolParams() {
  return {
    swapFee: "",
    exitFee: "",
    smoothWeightChangeParams: undefined
  };
}
export const PoolParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.swapFee !== "") {
      writer.uint32(10).string(message.swapFee);
    }
    if (message.exitFee !== "") {
      writer.uint32(18).string(message.exitFee);
    }
    if (message.smoothWeightChangeParams !== undefined) {
      SmoothWeightChangeParams.encode(message.smoothWeightChangeParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapFee = reader.string();
          break;
        case 2:
          message.exitFee = reader.string();
          break;
        case 3:
          message.smoothWeightChangeParams = SmoothWeightChangeParams.decode(reader, reader.uint32());
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
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      exitFee: isSet(object.exitFee) ? String(object.exitFee) : "",
      smoothWeightChangeParams: isSet(object.smoothWeightChangeParams) ? SmoothWeightChangeParams.fromJSON(object.smoothWeightChangeParams) : undefined
    };
  },
  fromPartial(object) {
    var _object$swapFee, _object$exitFee;
    const message = createBasePoolParams();
    message.swapFee = (_object$swapFee = object.swapFee) !== null && _object$swapFee !== void 0 ? _object$swapFee : "";
    message.exitFee = (_object$exitFee = object.exitFee) !== null && _object$exitFee !== void 0 ? _object$exitFee : "";
    message.smoothWeightChangeParams = object.smoothWeightChangeParams !== undefined && object.smoothWeightChangeParams !== null ? SmoothWeightChangeParams.fromPartial(object.smoothWeightChangeParams) : undefined;
    return message;
  }
};
function createBasePoolAsset() {
  return {
    token: undefined,
    weight: ""
  };
}
export const PoolAsset = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.weight = reader.string();
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
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object) {
    var _object$weight;
    const message = createBasePoolAsset();
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    return message;
  }
};
function createBasePool() {
  return {
    address: "",
    id: Long.UZERO,
    poolParams: undefined,
    futurePoolGovernor: "",
    totalShares: undefined,
    poolAssets: [],
    totalWeight: ""
  };
}
export const Pool = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v, writer.uint32(50).fork()).ldelim();
    }
    if (message.totalWeight !== "") {
      writer.uint32(58).string(message.totalWeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.futurePoolGovernor = reader.string();
          break;
        case 5:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalWeight = reader.string();
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
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      futurePoolGovernor: isSet(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : "",
      totalShares: isSet(object.totalShares) ? Coin.fromJSON(object.totalShares) : undefined,
      poolAssets: Array.isArray(object === null || object === void 0 ? void 0 : object.poolAssets) ? object.poolAssets.map(e => PoolAsset.fromJSON(e)) : [],
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : ""
    };
  },
  fromPartial(object) {
    var _object$address, _object$futurePoolGov, _object$poolAssets, _object$totalWeight;
    const message = createBasePool();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.futurePoolGovernor = (_object$futurePoolGov = object.futurePoolGovernor) !== null && _object$futurePoolGov !== void 0 ? _object$futurePoolGov : "";
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolAssets = ((_object$poolAssets = object.poolAssets) === null || _object$poolAssets === void 0 ? void 0 : _object$poolAssets.map(e => PoolAsset.fromPartial(e))) || [];
    message.totalWeight = (_object$totalWeight = object.totalWeight) !== null && _object$totalWeight !== void 0 ? _object$totalWeight : "";
    return message;
  }
};