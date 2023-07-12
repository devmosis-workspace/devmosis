import { Params } from "./params";
import { TokenPairArbRoutes, BaseDenom, PoolWeights } from "./protorev";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the protorev module's genesis state. */

/** GenesisState defines the protorev module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    tokenPairArbRoutes: [],
    baseDenoms: [],
    poolWeights: undefined,
    daysSinceModuleGenesis: Long.UZERO,
    developerFees: [],
    latestBlockHeight: Long.UZERO,
    developerAddress: "",
    maxPoolPointsPerBlock: Long.UZERO,
    maxPoolPointsPerTx: Long.UZERO,
    pointCountForBlock: Long.UZERO,
    profits: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairArbRoutes) {
      TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(34).fork()).ldelim();
    }
    if (!message.daysSinceModuleGenesis.isZero()) {
      writer.uint32(40).uint64(message.daysSinceModuleGenesis);
    }
    for (const v of message.developerFees) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }
    if (!message.latestBlockHeight.isZero()) {
      writer.uint32(56).uint64(message.latestBlockHeight);
    }
    if (message.developerAddress !== "") {
      writer.uint32(66).string(message.developerAddress);
    }
    if (!message.maxPoolPointsPerBlock.isZero()) {
      writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
    }
    if (!message.maxPoolPointsPerTx.isZero()) {
      writer.uint32(80).uint64(message.maxPoolPointsPerTx);
    }
    if (!message.pointCountForBlock.isZero()) {
      writer.uint32(88).uint64(message.pointCountForBlock);
    }
    for (const v of message.profits) {
      Coin.encode(v, writer.uint32(98).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairArbRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        case 3:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        case 4:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
          break;
        case 5:
          message.daysSinceModuleGenesis = reader.uint64();
          break;
        case 6:
          message.developerFees.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.latestBlockHeight = reader.uint64();
          break;
        case 8:
          message.developerAddress = reader.string();
          break;
        case 9:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        case 10:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        case 11:
          message.pointCountForBlock = reader.uint64();
          break;
        case 12:
          message.profits.push(Coin.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tokenPairArbRoutes: Array.isArray(object === null || object === void 0 ? void 0 : object.tokenPairArbRoutes) ? object.tokenPairArbRoutes.map(e => TokenPairArbRoutes.fromJSON(e)) : [],
      baseDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.baseDenoms) ? object.baseDenoms.map(e => BaseDenom.fromJSON(e)) : [],
      poolWeights: isSet(object.poolWeights) ? PoolWeights.fromJSON(object.poolWeights) : undefined,
      daysSinceModuleGenesis: isSet(object.daysSinceModuleGenesis) ? Long.fromValue(object.daysSinceModuleGenesis) : Long.UZERO,
      developerFees: Array.isArray(object === null || object === void 0 ? void 0 : object.developerFees) ? object.developerFees.map(e => Coin.fromJSON(e)) : [],
      latestBlockHeight: isSet(object.latestBlockHeight) ? Long.fromValue(object.latestBlockHeight) : Long.UZERO,
      developerAddress: isSet(object.developerAddress) ? String(object.developerAddress) : "",
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? Long.fromValue(object.maxPoolPointsPerBlock) : Long.UZERO,
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? Long.fromValue(object.maxPoolPointsPerTx) : Long.UZERO,
      pointCountForBlock: isSet(object.pointCountForBlock) ? Long.fromValue(object.pointCountForBlock) : Long.UZERO,
      profits: Array.isArray(object === null || object === void 0 ? void 0 : object.profits) ? object.profits.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$tokenPairArbR, _object$baseDenoms, _object$developerFees, _object$developerAddr, _object$profits;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairArbRoutes = ((_object$tokenPairArbR = object.tokenPairArbRoutes) === null || _object$tokenPairArbR === void 0 ? void 0 : _object$tokenPairArbR.map(e => TokenPairArbRoutes.fromPartial(e))) || [];
    message.baseDenoms = ((_object$baseDenoms = object.baseDenoms) === null || _object$baseDenoms === void 0 ? void 0 : _object$baseDenoms.map(e => BaseDenom.fromPartial(e))) || [];
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    message.daysSinceModuleGenesis = object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null ? Long.fromValue(object.daysSinceModuleGenesis) : Long.UZERO;
    message.developerFees = ((_object$developerFees = object.developerFees) === null || _object$developerFees === void 0 ? void 0 : _object$developerFees.map(e => Coin.fromPartial(e))) || [];
    message.latestBlockHeight = object.latestBlockHeight !== undefined && object.latestBlockHeight !== null ? Long.fromValue(object.latestBlockHeight) : Long.UZERO;
    message.developerAddress = (_object$developerAddr = object.developerAddress) !== null && _object$developerAddr !== void 0 ? _object$developerAddr : "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? Long.fromValue(object.maxPoolPointsPerBlock) : Long.UZERO;
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? Long.fromValue(object.maxPoolPointsPerTx) : Long.UZERO;
    message.pointCountForBlock = object.pointCountForBlock !== undefined && object.pointCountForBlock !== null ? Long.fromValue(object.pointCountForBlock) : Long.UZERO;
    message.profits = ((_object$profits = object.profits) === null || _object$profits === void 0 ? void 0 : _object$profits.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};