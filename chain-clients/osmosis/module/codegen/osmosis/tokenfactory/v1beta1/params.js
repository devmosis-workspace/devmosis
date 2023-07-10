import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the tokenfactory module. */

/** Params defines the parameters for the tokenfactory module. */

function createBaseParams() {
  return {
    denomCreationFee: []
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.denomCreationFee) {
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
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$denomCreation;
    const message = createBaseParams();
    message.denomCreationFee = ((_object$denomCreation = object.denomCreationFee) === null || _object$denomCreation === void 0 ? void 0 : _object$denomCreation.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};