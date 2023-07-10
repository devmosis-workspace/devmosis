import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the incentives module */

/** Params holds parameters for the incentives module */

/** GenesisState defines the gamm module's genesis state. */

/** GenesisState defines the gamm module's genesis state. */

function createBaseParams() {
  return {
    poolCreationFee: []
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.poolCreationFee) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$poolCreationF;
    const message = createBaseParams();
    message.poolCreationFee = ((_object$poolCreationF = object.poolCreationFee) === null || _object$poolCreationF === void 0 ? void 0 : _object$poolCreationF.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGenesisState() {
  return {
    pools: [],
    nextPoolNumber: Long.UZERO,
    params: undefined
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.pools) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (!message.nextPoolNumber.isZero()) {
      writer.uint32(16).uint64(message.nextPoolNumber);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPoolNumber = reader.uint64();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$pools;
    const message = createBaseGenesisState();
    message.pools = ((_object$pools = object.pools) === null || _object$pools === void 0 ? void 0 : _object$pools.map(e => Any.fromPartial(e))) || [];
    message.nextPoolNumber = object.nextPoolNumber !== undefined && object.nextPoolNumber !== null ? Long.fromValue(object.nextPoolNumber) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};