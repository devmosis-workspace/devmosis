"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrantAuthorization = exports.Grant = exports.GenericAuthorization = void 0;
var _any = require("../../../google/protobuf/any");
var _timestamp = require("../../../google/protobuf/timestamp");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseGenericAuthorization() {
  return {
    msg: ""
  };
}
var GenericAuthorization = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      msg: (0, _helpers.isSet)(object.msg) ? String(object.msg) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$msg;
    var message = createBaseGenericAuthorization();
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : "";
    return message;
  }
};
exports.GenericAuthorization = GenericAuthorization;
function createBaseGrant() {
  return {
    authorization: undefined,
    expiration: undefined
  };
}
var Grant = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authorization !== undefined) {
      _any.Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      _timestamp.Timestamp.encode(message.expiration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGrant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.expiration = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      authorization: (0, _helpers.isSet)(object.authorization) ? _any.Any.fromJSON(object.authorization) : undefined,
      expiration: (0, _helpers.isSet)(object.expiration) ? (0, _helpers.fromJsonTimestamp)(object.expiration) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.authorization !== undefined && (obj.authorization = message.authorization ? _any.Any.toJSON(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = (0, _helpers.fromTimestamp)(message.expiration).toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGrant();
    message.authorization = object.authorization !== undefined && object.authorization !== null ? _any.Any.fromPartial(object.authorization) : undefined;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? _timestamp.Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }
};
exports.Grant = Grant;
function createBaseGrantAuthorization() {
  return {
    granter: "",
    grantee: "",
    authorization: undefined,
    expiration: undefined
  };
}
var GrantAuthorization = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      _any.Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      _timestamp.Timestamp.encode(message.expiration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGrantAuthorization();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.authorization = _any.Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.expiration = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      granter: (0, _helpers.isSet)(object.granter) ? String(object.granter) : "",
      grantee: (0, _helpers.isSet)(object.grantee) ? String(object.grantee) : "",
      authorization: (0, _helpers.isSet)(object.authorization) ? _any.Any.fromJSON(object.authorization) : undefined,
      expiration: (0, _helpers.isSet)(object.expiration) ? (0, _helpers.fromJsonTimestamp)(object.expiration) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.authorization !== undefined && (obj.authorization = message.authorization ? _any.Any.toJSON(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = (0, _helpers.fromTimestamp)(message.expiration).toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter, _object$grantee;
    var message = createBaseGrantAuthorization();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.authorization = object.authorization !== undefined && object.authorization !== null ? _any.Any.fromPartial(object.authorization) : undefined;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? _timestamp.Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }
};
exports.GrantAuthorization = GrantAuthorization;