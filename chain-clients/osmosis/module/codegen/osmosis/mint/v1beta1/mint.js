import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */

/** Minter represents the minting state. */

/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */

/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */

/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */

/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */

/** Params holds parameters for the x/mint module. */

/** Params holds parameters for the x/mint module. */

function createBaseMinter() {
  return {
    epochProvisions: ""
  };
}
export const Minter = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(message.epochProvisions);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$epochProvisio;
    const message = createBaseMinter();
    message.epochProvisions = (_object$epochProvisio = object.epochProvisions) !== null && _object$epochProvisio !== void 0 ? _object$epochProvisio : "";
    return message;
  }
};
function createBaseWeightedAddress() {
  return {
    address: "",
    weight: ""
  };
}
export const WeightedAddress = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object) {
    var _object$address, _object$weight;
    const message = createBaseWeightedAddress();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    return message;
  }
};
function createBaseDistributionProportions() {
  return {
    staking: "",
    poolIncentives: "",
    developerRewards: "",
    communityPool: ""
  };
}
export const DistributionProportions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.poolIncentives !== "") {
      writer.uint32(18).string(message.poolIncentives);
    }
    if (message.developerRewards !== "") {
      writer.uint32(26).string(message.developerRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(34).string(message.communityPool);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;
        case 2:
          message.poolIncentives = reader.string();
          break;
        case 3:
          message.developerRewards = reader.string();
          break;
        case 4:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$staking, _object$poolIncentive, _object$developerRewa, _object$communityPool;
    const message = createBaseDistributionProportions();
    message.staking = (_object$staking = object.staking) !== null && _object$staking !== void 0 ? _object$staking : "";
    message.poolIncentives = (_object$poolIncentive = object.poolIncentives) !== null && _object$poolIncentive !== void 0 ? _object$poolIncentive : "";
    message.developerRewards = (_object$developerRewa = object.developerRewards) !== null && _object$developerRewa !== void 0 ? _object$developerRewa : "";
    message.communityPool = (_object$communityPool = object.communityPool) !== null && _object$communityPool !== void 0 ? _object$communityPool : "";
    return message;
  }
};
function createBaseParams() {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: Long.ZERO,
    reductionFactor: "",
    distributionProportions: undefined,
    weightedDeveloperRewardsReceivers: [],
    mintingRewardsDistributionStartEpoch: Long.ZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(message.genesisEpochProvisions);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (!message.reductionPeriodInEpochs.isZero()) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(42).string(message.reductionFactor);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (!message.mintingRewardsDistributionStartEpoch.isZero()) {
      writer.uint32(64).int64(message.mintingRewardsDistributionStartEpoch);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.genesisEpochProvisions = reader.string();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.reductionPeriodInEpochs = reader.int64();
          break;
        case 5:
          message.reductionFactor = reader.string();
          break;
        case 6:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 7:
          message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 8:
          message.mintingRewardsDistributionStartEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$mintDenom, _object$genesisEpochP, _object$epochIdentifi, _object$reductionFact, _object$weightedDevel;
    const message = createBaseParams();
    message.mintDenom = (_object$mintDenom = object.mintDenom) !== null && _object$mintDenom !== void 0 ? _object$mintDenom : "";
    message.genesisEpochProvisions = (_object$genesisEpochP = object.genesisEpochProvisions) !== null && _object$genesisEpochP !== void 0 ? _object$genesisEpochP : "";
    message.epochIdentifier = (_object$epochIdentifi = object.epochIdentifier) !== null && _object$epochIdentifi !== void 0 ? _object$epochIdentifi : "";
    message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? Long.fromValue(object.reductionPeriodInEpochs) : Long.ZERO;
    message.reductionFactor = (_object$reductionFact = object.reductionFactor) !== null && _object$reductionFact !== void 0 ? _object$reductionFact : "";
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.weightedDeveloperRewardsReceivers = ((_object$weightedDevel = object.weightedDeveloperRewardsReceivers) === null || _object$weightedDevel === void 0 ? void 0 : _object$weightedDevel.map(e => WeightedAddress.fromPartial(e))) || [];
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? Long.fromValue(object.mintingRewardsDistributionStartEpoch) : Long.ZERO;
    return message;
  }
};