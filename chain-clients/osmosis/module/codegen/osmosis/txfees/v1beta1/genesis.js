import { FeeToken } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the txfees module's genesis state. */

/** GenesisState defines the txfees module's genesis state. */

function createBaseGenesisState() {
  return {
    basedenom: "",
    feetokens: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.basedenom !== "") {
      writer.uint32(10).string(message.basedenom);
    }
    for (const v of message.feetokens) {
      FeeToken.encode(v, writer.uint32(18).fork()).ldelim();
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
          message.basedenom = reader.string();
          break;
        case 2:
          message.feetokens.push(FeeToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$basedenom, _object$feetokens;
    const message = createBaseGenesisState();
    message.basedenom = (_object$basedenom = object.basedenom) !== null && _object$basedenom !== void 0 ? _object$basedenom : "";
    message.feetokens = ((_object$feetokens = object.feetokens) === null || _object$feetokens === void 0 ? void 0 : _object$feetokens.map(e => FeeToken.fromPartial(e))) || [];
    return message;
  }
};