import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ModuleRoute } from "./module_route";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the poolmanager module */

/** Params holds parameters for the poolmanager module */

/** GenesisState defines the poolmanager module's genesis state. */

/** GenesisState defines the poolmanager module's genesis state. */

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
    nextPoolId: Long.UZERO,
    params: undefined,
    poolRoutes: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.nextPoolId.isZero()) {
      writer.uint32(8).uint64(message.nextPoolId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolRoutes) {
      ModuleRoute.encode(v, writer.uint32(26).fork()).ldelim();
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
          message.nextPoolId = reader.uint64();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolRoutes.push(ModuleRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$poolRoutes;
    const message = createBaseGenesisState();
    message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? Long.fromValue(object.nextPoolId) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolRoutes = ((_object$poolRoutes = object.poolRoutes) === null || _object$poolRoutes === void 0 ? void 0 : _object$poolRoutes.map(e => ModuleRoute.fromPartial(e))) || [];
    return message;
  }
};