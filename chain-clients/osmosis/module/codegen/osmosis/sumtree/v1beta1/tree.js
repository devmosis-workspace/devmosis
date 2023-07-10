import * as _m0 from "protobufjs/minimal";
function createBaseNode() {
  return {
    children: []
  };
}
export const Node = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.children) {
      Child.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.children.push(Child.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$children;
    const message = createBaseNode();
    message.children = ((_object$children = object.children) === null || _object$children === void 0 ? void 0 : _object$children.map(e => Child.fromPartial(e))) || [];
    return message;
  }
};
function createBaseChild() {
  return {
    index: new Uint8Array(),
    accumulation: ""
  };
}
export const Child = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index.length !== 0) {
      writer.uint32(10).bytes(message.index);
    }
    if (message.accumulation !== "") {
      writer.uint32(18).string(message.accumulation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.bytes();
          break;
        case 2:
          message.accumulation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$accumulation;
    const message = createBaseChild();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : new Uint8Array();
    message.accumulation = (_object$accumulation = object.accumulation) !== null && _object$accumulation !== void 0 ? _object$accumulation : "";
    return message;
  }
};
function createBaseLeaf() {
  return {
    leaf: undefined
  };
}
export const Leaf = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.leaf !== undefined) {
      Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaf = Child.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLeaf();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? Child.fromPartial(object.leaf) : undefined;
    return message;
  }
};