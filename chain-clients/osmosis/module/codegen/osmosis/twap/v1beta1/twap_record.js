import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */

/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */

function createBaseTwapRecord() {
  return {
    poolId: Long.UZERO,
    asset0Denom: "",
    asset1Denom: "",
    height: Long.ZERO,
    time: undefined,
    p0LastSpotPrice: "",
    p1LastSpotPrice: "",
    p0ArithmeticTwapAccumulator: "",
    p1ArithmeticTwapAccumulator: "",
    geometricTwapAccumulator: "",
    lastErrorTime: undefined
  };
}
export const TwapRecord = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.asset0Denom !== "") {
      writer.uint32(18).string(message.asset0Denom);
    }
    if (message.asset1Denom !== "") {
      writer.uint32(26).string(message.asset1Denom);
    }
    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
    }
    if (message.p0LastSpotPrice !== "") {
      writer.uint32(50).string(message.p0LastSpotPrice);
    }
    if (message.p1LastSpotPrice !== "") {
      writer.uint32(58).string(message.p1LastSpotPrice);
    }
    if (message.p0ArithmeticTwapAccumulator !== "") {
      writer.uint32(66).string(message.p0ArithmeticTwapAccumulator);
    }
    if (message.p1ArithmeticTwapAccumulator !== "") {
      writer.uint32(74).string(message.p1ArithmeticTwapAccumulator);
    }
    if (message.geometricTwapAccumulator !== "") {
      writer.uint32(82).string(message.geometricTwapAccumulator);
    }
    if (message.lastErrorTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastErrorTime), writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTwapRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.asset0Denom = reader.string();
          break;
        case 3:
          message.asset1Denom = reader.string();
          break;
        case 4:
          message.height = reader.int64();
          break;
        case 5:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.p0LastSpotPrice = reader.string();
          break;
        case 7:
          message.p1LastSpotPrice = reader.string();
          break;
        case 8:
          message.p0ArithmeticTwapAccumulator = reader.string();
          break;
        case 9:
          message.p1ArithmeticTwapAccumulator = reader.string();
          break;
        case 10:
          message.geometricTwapAccumulator = reader.string();
          break;
        case 11:
          message.lastErrorTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$asset0Denom, _object$asset1Denom, _object$time, _object$p0LastSpotPri, _object$p1LastSpotPri, _object$p0ArithmeticT, _object$p1ArithmeticT, _object$geometricTwap, _object$lastErrorTime;
    const message = createBaseTwapRecord();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.asset0Denom = (_object$asset0Denom = object.asset0Denom) !== null && _object$asset0Denom !== void 0 ? _object$asset0Denom : "";
    message.asset1Denom = (_object$asset1Denom = object.asset1Denom) !== null && _object$asset1Denom !== void 0 ? _object$asset1Denom : "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.p0LastSpotPrice = (_object$p0LastSpotPri = object.p0LastSpotPrice) !== null && _object$p0LastSpotPri !== void 0 ? _object$p0LastSpotPri : "";
    message.p1LastSpotPrice = (_object$p1LastSpotPri = object.p1LastSpotPrice) !== null && _object$p1LastSpotPri !== void 0 ? _object$p1LastSpotPri : "";
    message.p0ArithmeticTwapAccumulator = (_object$p0ArithmeticT = object.p0ArithmeticTwapAccumulator) !== null && _object$p0ArithmeticT !== void 0 ? _object$p0ArithmeticT : "";
    message.p1ArithmeticTwapAccumulator = (_object$p1ArithmeticT = object.p1ArithmeticTwapAccumulator) !== null && _object$p1ArithmeticT !== void 0 ? _object$p1ArithmeticT : "";
    message.geometricTwapAccumulator = (_object$geometricTwap = object.geometricTwapAccumulator) !== null && _object$geometricTwap !== void 0 ? _object$geometricTwap : "";
    message.lastErrorTime = (_object$lastErrorTime = object.lastErrorTime) !== null && _object$lastErrorTime !== void 0 ? _object$lastErrorTime : undefined;
    return message;
  }
};