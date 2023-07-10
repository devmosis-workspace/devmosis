"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSetPoolWeightsResponse = exports.MsgSetPoolWeights = exports.MsgSetMaxPoolPointsPerTxResponse = exports.MsgSetMaxPoolPointsPerTx = exports.MsgSetMaxPoolPointsPerBlockResponse = exports.MsgSetMaxPoolPointsPerBlock = exports.MsgSetHotRoutesResponse = exports.MsgSetHotRoutes = exports.MsgSetDeveloperAccountResponse = exports.MsgSetDeveloperAccount = exports.MsgSetBaseDenomsResponse = exports.MsgSetBaseDenoms = void 0;
var _protorev = require("./protorev");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */

/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */

/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */

/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */

/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */

/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */

/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */

/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */

/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */

/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */

/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */

/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */

/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */

/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */

/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */

/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */

/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */

/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */

/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */

/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */

/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */

/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */

/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */

/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */

function createBaseMsgSetHotRoutes() {
  return {
    admin: "",
    hotRoutes: []
  };
}
var MsgSetHotRoutes = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    var _iterator = _createForOfIteratorHelper(message.hotRoutes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _protorev.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetHotRoutes();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.hotRoutes.push(_protorev.TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin, _object$hotRoutes;
    var message = createBaseMsgSetHotRoutes();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.hotRoutes = ((_object$hotRoutes = object.hotRoutes) === null || _object$hotRoutes === void 0 ? void 0 : _object$hotRoutes.map(function (e) {
      return _protorev.TokenPairArbRoutes.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgSetHotRoutes = MsgSetHotRoutes;
function createBaseMsgSetHotRoutesResponse() {
  return {};
}
var MsgSetHotRoutesResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetHotRoutesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSetHotRoutesResponse();
    return message;
  }
};
exports.MsgSetHotRoutesResponse = MsgSetHotRoutesResponse;
function createBaseMsgSetDeveloperAccount() {
  return {
    admin: "",
    developerAccount: ""
  };
}
var MsgSetDeveloperAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.developerAccount !== "") {
      writer.uint32(18).string(message.developerAccount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetDeveloperAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin2, _object$developerAcco;
    var message = createBaseMsgSetDeveloperAccount();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.developerAccount = (_object$developerAcco = object.developerAccount) !== null && _object$developerAcco !== void 0 ? _object$developerAcco : "";
    return message;
  }
};
exports.MsgSetDeveloperAccount = MsgSetDeveloperAccount;
function createBaseMsgSetDeveloperAccountResponse() {
  return {};
}
var MsgSetDeveloperAccountResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetDeveloperAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  }
};
exports.MsgSetDeveloperAccountResponse = MsgSetDeveloperAccountResponse;
function createBaseMsgSetPoolWeights() {
  return {
    admin: "",
    poolWeights: undefined
  };
}
var MsgSetPoolWeights = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.poolWeights !== undefined) {
      _protorev.PoolWeights.encode(message.poolWeights, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetPoolWeights();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.poolWeights = _protorev.PoolWeights.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin3;
    var message = createBaseMsgSetPoolWeights();
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? _protorev.PoolWeights.fromPartial(object.poolWeights) : undefined;
    return message;
  }
};
exports.MsgSetPoolWeights = MsgSetPoolWeights;
function createBaseMsgSetPoolWeightsResponse() {
  return {};
}
var MsgSetPoolWeightsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetPoolWeightsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSetPoolWeightsResponse();
    return message;
  }
};
exports.MsgSetPoolWeightsResponse = MsgSetPoolWeightsResponse;
function createBaseMsgSetMaxPoolPointsPerTx() {
  return {
    admin: "",
    maxPoolPointsPerTx: _helpers.Long.UZERO
  };
}
var MsgSetMaxPoolPointsPerTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.maxPoolPointsPerTx.isZero()) {
      writer.uint32(16).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetMaxPoolPointsPerTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin4;
    var message = createBaseMsgSetMaxPoolPointsPerTx();
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? _helpers.Long.fromValue(object.maxPoolPointsPerTx) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgSetMaxPoolPointsPerTx = MsgSetMaxPoolPointsPerTx;
function createBaseMsgSetMaxPoolPointsPerTxResponse() {
  return {};
}
var MsgSetMaxPoolPointsPerTxResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  }
};
exports.MsgSetMaxPoolPointsPerTxResponse = MsgSetMaxPoolPointsPerTxResponse;
function createBaseMsgSetMaxPoolPointsPerBlock() {
  return {
    admin: "",
    maxPoolPointsPerBlock: _helpers.Long.UZERO
  };
}
var MsgSetMaxPoolPointsPerBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.maxPoolPointsPerBlock.isZero()) {
      writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetMaxPoolPointsPerBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin5;
    var message = createBaseMsgSetMaxPoolPointsPerBlock();
    message.admin = (_object$admin5 = object.admin) !== null && _object$admin5 !== void 0 ? _object$admin5 : "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? _helpers.Long.fromValue(object.maxPoolPointsPerBlock) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgSetMaxPoolPointsPerBlock = MsgSetMaxPoolPointsPerBlock;
function createBaseMsgSetMaxPoolPointsPerBlockResponse() {
  return {};
}
var MsgSetMaxPoolPointsPerBlockResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  }
};
exports.MsgSetMaxPoolPointsPerBlockResponse = MsgSetMaxPoolPointsPerBlockResponse;
function createBaseMsgSetBaseDenoms() {
  return {
    admin: "",
    baseDenoms: []
  };
}
var MsgSetBaseDenoms = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    var _iterator2 = _createForOfIteratorHelper(message.baseDenoms),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _protorev.BaseDenom.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetBaseDenoms();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenoms.push(_protorev.BaseDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin6, _object$baseDenoms;
    var message = createBaseMsgSetBaseDenoms();
    message.admin = (_object$admin6 = object.admin) !== null && _object$admin6 !== void 0 ? _object$admin6 : "";
    message.baseDenoms = ((_object$baseDenoms = object.baseDenoms) === null || _object$baseDenoms === void 0 ? void 0 : _object$baseDenoms.map(function (e) {
      return _protorev.BaseDenom.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgSetBaseDenoms = MsgSetBaseDenoms;
function createBaseMsgSetBaseDenomsResponse() {
  return {};
}
var MsgSetBaseDenomsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetBaseDenomsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSetBaseDenomsResponse();
    return message;
  }
};
exports.MsgSetBaseDenomsResponse = MsgSetBaseDenomsResponse;