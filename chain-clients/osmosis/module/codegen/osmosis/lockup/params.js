import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
  return {
    forceUnlockAllowedAddresses: []
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.forceUnlockAllowedAddresses) {
      writer.uint32(10).string(v);
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
          message.forceUnlockAllowedAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$forceUnlockAl;
    const message = createBaseParams();
    message.forceUnlockAllowedAddresses = ((_object$forceUnlockAl = object.forceUnlockAllowedAddresses) === null || _object$forceUnlockAl === void 0 ? void 0 : _object$forceUnlockAl.map(e => e)) || [];
    return message;
  }
};