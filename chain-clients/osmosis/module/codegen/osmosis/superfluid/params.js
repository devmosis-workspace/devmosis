import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params holds parameters for the superfluid module */

/** Params holds parameters for the superfluid module */

function createBaseParams() {
  return {
    minimumRiskFactor: ""
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.minimumRiskFactor !== "") {
      writer.uint32(10).string(message.minimumRiskFactor);
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
          message.minimumRiskFactor = reader.string();
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
      minimumRiskFactor: isSet(object.minimumRiskFactor) ? String(object.minimumRiskFactor) : ""
    };
  },
  fromPartial(object) {
    var _object$minimumRiskFa;
    const message = createBaseParams();
    message.minimumRiskFactor = (_object$minimumRiskFa = object.minimumRiskFactor) !== null && _object$minimumRiskFa !== void 0 ? _object$minimumRiskFa : "";
    return message;
  }
};