import { ValidatorPreference } from "./state";
import * as _m0 from "protobufjs/minimal";
/** Request type for UserValidatorPreferences. */

/** Request type for UserValidatorPreferences. */

/** Response type the QueryUserValidatorPreferences query request */

/** Response type the QueryUserValidatorPreferences query request */

function createBaseUserValidatorPreferencesRequest() {
  return {
    address: ""
  };
}
export const UserValidatorPreferencesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserValidatorPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseUserValidatorPreferencesRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseUserValidatorPreferencesResponse() {
  return {
    preferences: []
  };
}
export const UserValidatorPreferencesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserValidatorPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$preferences;
    const message = createBaseUserValidatorPreferencesResponse();
    message.preferences = ((_object$preferences = object.preferences) === null || _object$preferences === void 0 ? void 0 : _object$preferences.map(e => ValidatorPreference.fromPartial(e))) || [];
    return message;
  }
};