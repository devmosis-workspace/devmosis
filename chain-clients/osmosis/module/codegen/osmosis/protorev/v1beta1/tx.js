import { TokenPairArbRoutes, PoolWeights, BaseDenom } from "./protorev";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export const MsgSetHotRoutes = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.hotRoutes) {
      TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.hotRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      hotRoutes: Array.isArray(object === null || object === void 0 ? void 0 : object.hotRoutes) ? object.hotRoutes.map(e => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$admin, _object$hotRoutes;
    const message = createBaseMsgSetHotRoutes();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.hotRoutes = ((_object$hotRoutes = object.hotRoutes) === null || _object$hotRoutes === void 0 ? void 0 : _object$hotRoutes.map(e => TokenPairArbRoutes.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgSetHotRoutesResponse() {
  return {};
}
export const MsgSetHotRoutesResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  }
};
function createBaseMsgSetDeveloperAccount() {
  return {
    admin: "",
    developerAccount: ""
  };
}
export const MsgSetDeveloperAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.developerAccount !== "") {
      writer.uint32(18).string(message.developerAccount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      developerAccount: isSet(object.developerAccount) ? String(object.developerAccount) : ""
    };
  },
  fromPartial(object) {
    var _object$admin2, _object$developerAcco;
    const message = createBaseMsgSetDeveloperAccount();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.developerAccount = (_object$developerAcco = object.developerAccount) !== null && _object$developerAcco !== void 0 ? _object$developerAcco : "";
    return message;
  }
};
function createBaseMsgSetDeveloperAccountResponse() {
  return {};
}
export const MsgSetDeveloperAccountResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  }
};
function createBaseMsgSetPoolWeights() {
  return {
    admin: "",
    poolWeights: undefined
  };
}
export const MsgSetPoolWeights = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.poolWeights = PoolWeights.decode(reader, reader.uint32());
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      poolWeights: isSet(object.poolWeights) ? PoolWeights.fromJSON(object.poolWeights) : undefined
    };
  },
  fromPartial(object) {
    var _object$admin3;
    const message = createBaseMsgSetPoolWeights();
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    return message;
  }
};
function createBaseMsgSetPoolWeightsResponse() {
  return {};
}
export const MsgSetPoolWeightsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolWeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgSetPoolWeightsResponse();
    return message;
  }
};
function createBaseMsgSetMaxPoolPointsPerTx() {
  return {
    admin: "",
    maxPoolPointsPerTx: Long.UZERO
  };
}
export const MsgSetMaxPoolPointsPerTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.maxPoolPointsPerTx.isZero()) {
      writer.uint32(16).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? Long.fromValue(object.maxPoolPointsPerTx) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$admin4;
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? Long.fromValue(object.maxPoolPointsPerTx) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSetMaxPoolPointsPerTxResponse() {
  return {};
}
export const MsgSetMaxPoolPointsPerTxResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  }
};
function createBaseMsgSetMaxPoolPointsPerBlock() {
  return {
    admin: "",
    maxPoolPointsPerBlock: Long.UZERO
  };
}
export const MsgSetMaxPoolPointsPerBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.maxPoolPointsPerBlock.isZero()) {
      writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? Long.fromValue(object.maxPoolPointsPerBlock) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$admin5;
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    message.admin = (_object$admin5 = object.admin) !== null && _object$admin5 !== void 0 ? _object$admin5 : "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? Long.fromValue(object.maxPoolPointsPerBlock) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSetMaxPoolPointsPerBlockResponse() {
  return {};
}
export const MsgSetMaxPoolPointsPerBlockResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  }
};
function createBaseMsgSetBaseDenoms() {
  return {
    admin: "",
    baseDenoms: []
  };
}
export const MsgSetBaseDenoms = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenoms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      baseDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.baseDenoms) ? object.baseDenoms.map(e => BaseDenom.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$admin6, _object$baseDenoms;
    const message = createBaseMsgSetBaseDenoms();
    message.admin = (_object$admin6 = object.admin) !== null && _object$admin6 !== void 0 ? _object$admin6 : "";
    message.baseDenoms = ((_object$baseDenoms = object.baseDenoms) === null || _object$baseDenoms === void 0 ? void 0 : _object$baseDenoms.map(e => BaseDenom.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgSetBaseDenomsResponse() {
  return {};
}
export const MsgSetBaseDenomsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgSetBaseDenomsResponse();
    return message;
  }
};