import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params holds parameters for the incentives module */

/** Params holds parameters for the incentives module */

function createBaseParams() {
  return {
    distrEpochIdentifier: ""
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.distrEpochIdentifier !== "") {
      writer.uint32(10).string(message.distrEpochIdentifier);
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
          message.distrEpochIdentifier = reader.string();
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
      distrEpochIdentifier: isSet(object.distrEpochIdentifier) ? String(object.distrEpochIdentifier) : ""
    };
  },
  fromPartial(object) {
    var _object$distrEpochIde;
    const message = createBaseParams();
    message.distrEpochIdentifier = (_object$distrEpochIde = object.distrEpochIdentifier) !== null && _object$distrEpochIde !== void 0 ? _object$distrEpochIde : "";
    return message;
  }
};