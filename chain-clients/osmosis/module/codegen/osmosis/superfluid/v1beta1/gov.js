import { SuperfluidAsset } from "../superfluid";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */

/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */

/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */

/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */

/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */

/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */

function createBaseSetSuperfluidAssetsProposal() {
  return {
    title: "",
    description: "",
    assets: []
  };
}
export const SetSuperfluidAssetsProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.assets) {
      SuperfluidAsset.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSuperfluidAssetsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$assets;
    const message = createBaseSetSuperfluidAssetsProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.assets = ((_object$assets = object.assets) === null || _object$assets === void 0 ? void 0 : _object$assets.map(e => SuperfluidAsset.fromPartial(e))) || [];
    return message;
  }
};
function createBaseRemoveSuperfluidAssetsProposal() {
  return {
    title: "",
    description: "",
    superfluidAssetDenoms: []
  };
}
export const RemoveSuperfluidAssetsProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.superfluidAssetDenoms) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSuperfluidAssetsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.superfluidAssetDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$title2, _object$description2, _object$superfluidAss;
    const message = createBaseRemoveSuperfluidAssetsProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.superfluidAssetDenoms = ((_object$superfluidAss = object.superfluidAssetDenoms) === null || _object$superfluidAss === void 0 ? void 0 : _object$superfluidAss.map(e => e)) || [];
    return message;
  }
};
function createBaseUpdateUnpoolWhiteListProposal() {
  return {
    title: "",
    description: "",
    ids: [],
    isOverwrite: false
  };
}
export const UpdateUnpoolWhiteListProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.isOverwrite === true) {
      writer.uint32(32).bool(message.isOverwrite);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUnpoolWhiteListProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        case 4:
          message.isOverwrite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$title3, _object$description3, _object$ids, _object$isOverwrite;
    const message = createBaseUpdateUnpoolWhiteListProposal();
    message.title = (_object$title3 = object.title) !== null && _object$title3 !== void 0 ? _object$title3 : "";
    message.description = (_object$description3 = object.description) !== null && _object$description3 !== void 0 ? _object$description3 : "";
    message.ids = ((_object$ids = object.ids) === null || _object$ids === void 0 ? void 0 : _object$ids.map(e => Long.fromValue(e))) || [];
    message.isOverwrite = (_object$isOverwrite = object.isOverwrite) !== null && _object$isOverwrite !== void 0 ? _object$isOverwrite : false;
    return message;
  }
};