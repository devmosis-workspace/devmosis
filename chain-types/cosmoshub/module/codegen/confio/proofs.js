import * as _m0 from "protobufjs/minimal";
export let HashOp;
(function (HashOp) {
  HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
  HashOp[HashOp["SHA256"] = 1] = "SHA256";
  HashOp[HashOp["SHA512"] = 2] = "SHA512";
  HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
  HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
  HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
  HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp || (HashOp = {}));
export let HashOpSDKType;
(function (HashOpSDKType) {
  HashOpSDKType[HashOpSDKType["NO_HASH"] = 0] = "NO_HASH";
  HashOpSDKType[HashOpSDKType["SHA256"] = 1] = "SHA256";
  HashOpSDKType[HashOpSDKType["SHA512"] = 2] = "SHA512";
  HashOpSDKType[HashOpSDKType["KECCAK"] = 3] = "KECCAK";
  HashOpSDKType[HashOpSDKType["RIPEMD160"] = 4] = "RIPEMD160";
  HashOpSDKType[HashOpSDKType["BITCOIN"] = 5] = "BITCOIN";
  HashOpSDKType[HashOpSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOpSDKType || (HashOpSDKType = {}));
export function hashOpFromJSON(object) {
  switch (object) {
    case 0:
    case "NO_HASH":
      return HashOp.NO_HASH;
    case 1:
    case "SHA256":
      return HashOp.SHA256;
    case 2:
    case "SHA512":
      return HashOp.SHA512;
    case 3:
    case "KECCAK":
      return HashOp.KECCAK;
    case 4:
    case "RIPEMD160":
      return HashOp.RIPEMD160;
    case 5:
    case "BITCOIN":
      return HashOp.BITCOIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HashOp.UNRECOGNIZED;
  }
}
export function hashOpToJSON(object) {
  switch (object) {
    case HashOp.NO_HASH:
      return "NO_HASH";
    case HashOp.SHA256:
      return "SHA256";
    case HashOp.SHA512:
      return "SHA512";
    case HashOp.KECCAK:
      return "KECCAK";
    case HashOp.RIPEMD160:
      return "RIPEMD160";
    case HashOp.BITCOIN:
      return "BITCOIN";
    case HashOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */

export let LengthOp;
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
(function (LengthOp) {
  LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
  LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
  LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
  LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
  LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
  LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
  LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
  LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
  LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
  LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp || (LengthOp = {}));
export let LengthOpSDKType;
(function (LengthOpSDKType) {
  LengthOpSDKType[LengthOpSDKType["NO_PREFIX"] = 0] = "NO_PREFIX";
  LengthOpSDKType[LengthOpSDKType["VAR_PROTO"] = 1] = "VAR_PROTO";
  LengthOpSDKType[LengthOpSDKType["VAR_RLP"] = 2] = "VAR_RLP";
  LengthOpSDKType[LengthOpSDKType["FIXED32_BIG"] = 3] = "FIXED32_BIG";
  LengthOpSDKType[LengthOpSDKType["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
  LengthOpSDKType[LengthOpSDKType["FIXED64_BIG"] = 5] = "FIXED64_BIG";
  LengthOpSDKType[LengthOpSDKType["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
  LengthOpSDKType[LengthOpSDKType["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
  LengthOpSDKType[LengthOpSDKType["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
  LengthOpSDKType[LengthOpSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOpSDKType || (LengthOpSDKType = {}));
export function lengthOpFromJSON(object) {
  switch (object) {
    case 0:
    case "NO_PREFIX":
      return LengthOp.NO_PREFIX;
    case 1:
    case "VAR_PROTO":
      return LengthOp.VAR_PROTO;
    case 2:
    case "VAR_RLP":
      return LengthOp.VAR_RLP;
    case 3:
    case "FIXED32_BIG":
      return LengthOp.FIXED32_BIG;
    case 4:
    case "FIXED32_LITTLE":
      return LengthOp.FIXED32_LITTLE;
    case 5:
    case "FIXED64_BIG":
      return LengthOp.FIXED64_BIG;
    case 6:
    case "FIXED64_LITTLE":
      return LengthOp.FIXED64_LITTLE;
    case 7:
    case "REQUIRE_32_BYTES":
      return LengthOp.REQUIRE_32_BYTES;
    case 8:
    case "REQUIRE_64_BYTES":
      return LengthOp.REQUIRE_64_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LengthOp.UNRECOGNIZED;
  }
}
export function lengthOpToJSON(object) {
  switch (object) {
    case LengthOp.NO_PREFIX:
      return "NO_PREFIX";
    case LengthOp.VAR_PROTO:
      return "VAR_PROTO";
    case LengthOp.VAR_RLP:
      return "VAR_RLP";
    case LengthOp.FIXED32_BIG:
      return "FIXED32_BIG";
    case LengthOp.FIXED32_LITTLE:
      return "FIXED32_LITTLE";
    case LengthOp.FIXED64_BIG:
      return "FIXED64_BIG";
    case LengthOp.FIXED64_LITTLE:
      return "FIXED64_LITTLE";
    case LengthOp.REQUIRE_32_BYTES:
      return "REQUIRE_32_BYTES";
    case LengthOp.REQUIRE_64_BYTES:
      return "REQUIRE_64_BYTES";
    case LengthOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 * 
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 * 
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 * 
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 */

function createBaseExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: undefined,
    path: []
  };
}
export const ExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.path) {
      InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          message.path.push(InnerOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key, _object$value, _object$path;
    const message = createBaseExistenceProof();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map(e => InnerOp.fromPartial(e))) || [];
    return message;
  }
};
function createBaseNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: undefined,
    right: undefined
  };
}
export const NonExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== undefined) {
      ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = ExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key2;
    const message = createBaseNonExistenceProof();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? ExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? ExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }
};
function createBaseCommitmentProof() {
  return {
    exist: undefined,
    nonexist: undefined,
    batch: undefined,
    compressed: undefined
  };
}
export const CommitmentProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    if (message.batch !== undefined) {
      BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }
    if (message.compressed !== undefined) {
      CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.batch = BatchProof.decode(reader, reader.uint32());
          break;
        case 4:
          message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommitmentProof();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    message.batch = object.batch !== undefined && object.batch !== null ? BatchProof.fromPartial(object.batch) : undefined;
    message.compressed = object.compressed !== undefined && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : undefined;
    return message;
  }
};
function createBaseLeafOp() {
  return {
    hash: 0,
    prehashKey: 0,
    prehashValue: 0,
    length: 0,
    prefix: new Uint8Array()
  };
}
export const LeafOp = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prehashKey !== 0) {
      writer.uint32(16).int32(message.prehashKey);
    }
    if (message.prehashValue !== 0) {
      writer.uint32(24).int32(message.prehashValue);
    }
    if (message.length !== 0) {
      writer.uint32(32).int32(message.length);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeafOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;
        case 2:
          message.prehashKey = reader.int32();
          break;
        case 3:
          message.prehashValue = reader.int32();
          break;
        case 4:
          message.length = reader.int32();
          break;
        case 5:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$hash, _object$prehashKey, _object$prehashValue, _object$length, _object$prefix;
    const message = createBaseLeafOp();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : 0;
    message.prehashKey = (_object$prehashKey = object.prehashKey) !== null && _object$prehashKey !== void 0 ? _object$prehashKey : 0;
    message.prehashValue = (_object$prehashValue = object.prehashValue) !== null && _object$prehashValue !== void 0 ? _object$prehashValue : 0;
    message.length = (_object$length = object.length) !== null && _object$length !== void 0 ? _object$length : 0;
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
  }
};
function createBaseInnerOp() {
  return {
    hash: 0,
    prefix: new Uint8Array(),
    suffix: new Uint8Array()
  };
}
export const InnerOp = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(26).bytes(message.suffix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        case 3:
          message.suffix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$hash2, _object$prefix2, _object$suffix;
    const message = createBaseInnerOp();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : 0;
    message.prefix = (_object$prefix2 = object.prefix) !== null && _object$prefix2 !== void 0 ? _object$prefix2 : new Uint8Array();
    message.suffix = (_object$suffix = object.suffix) !== null && _object$suffix !== void 0 ? _object$suffix : new Uint8Array();
    return message;
  }
};
function createBaseProofSpec() {
  return {
    leafSpec: undefined,
    innerSpec: undefined,
    maxDepth: 0,
    minDepth: 0
  };
}
export const ProofSpec = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.leafSpec !== undefined) {
      LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
    }
    if (message.innerSpec !== undefined) {
      InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxDepth !== 0) {
      writer.uint32(24).int32(message.maxDepth);
    }
    if (message.minDepth !== 0) {
      writer.uint32(32).int32(message.minDepth);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leafSpec = LeafOp.decode(reader, reader.uint32());
          break;
        case 2:
          message.innerSpec = InnerSpec.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxDepth = reader.int32();
          break;
        case 4:
          message.minDepth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$maxDepth, _object$minDepth;
    const message = createBaseProofSpec();
    message.leafSpec = object.leafSpec !== undefined && object.leafSpec !== null ? LeafOp.fromPartial(object.leafSpec) : undefined;
    message.innerSpec = object.innerSpec !== undefined && object.innerSpec !== null ? InnerSpec.fromPartial(object.innerSpec) : undefined;
    message.maxDepth = (_object$maxDepth = object.maxDepth) !== null && _object$maxDepth !== void 0 ? _object$maxDepth : 0;
    message.minDepth = (_object$minDepth = object.minDepth) !== null && _object$minDepth !== void 0 ? _object$minDepth : 0;
    return message;
  }
};
function createBaseInnerSpec() {
  return {
    childOrder: [],
    childSize: 0,
    minPrefixLength: 0,
    maxPrefixLength: 0,
    emptyChild: new Uint8Array(),
    hash: 0
  };
}
export const InnerSpec = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.childOrder) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.childSize !== 0) {
      writer.uint32(16).int32(message.childSize);
    }
    if (message.minPrefixLength !== 0) {
      writer.uint32(24).int32(message.minPrefixLength);
    }
    if (message.maxPrefixLength !== 0) {
      writer.uint32(32).int32(message.maxPrefixLength);
    }
    if (message.emptyChild.length !== 0) {
      writer.uint32(42).bytes(message.emptyChild);
    }
    if (message.hash !== 0) {
      writer.uint32(48).int32(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.childOrder.push(reader.int32());
            }
          } else {
            message.childOrder.push(reader.int32());
          }
          break;
        case 2:
          message.childSize = reader.int32();
          break;
        case 3:
          message.minPrefixLength = reader.int32();
          break;
        case 4:
          message.maxPrefixLength = reader.int32();
          break;
        case 5:
          message.emptyChild = reader.bytes();
          break;
        case 6:
          message.hash = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$childOrder, _object$childSize, _object$minPrefixLeng, _object$maxPrefixLeng, _object$emptyChild, _object$hash3;
    const message = createBaseInnerSpec();
    message.childOrder = ((_object$childOrder = object.childOrder) === null || _object$childOrder === void 0 ? void 0 : _object$childOrder.map(e => e)) || [];
    message.childSize = (_object$childSize = object.childSize) !== null && _object$childSize !== void 0 ? _object$childSize : 0;
    message.minPrefixLength = (_object$minPrefixLeng = object.minPrefixLength) !== null && _object$minPrefixLeng !== void 0 ? _object$minPrefixLeng : 0;
    message.maxPrefixLength = (_object$maxPrefixLeng = object.maxPrefixLength) !== null && _object$maxPrefixLeng !== void 0 ? _object$maxPrefixLeng : 0;
    message.emptyChild = (_object$emptyChild = object.emptyChild) !== null && _object$emptyChild !== void 0 ? _object$emptyChild : new Uint8Array();
    message.hash = (_object$hash3 = object.hash) !== null && _object$hash3 !== void 0 ? _object$hash3 : 0;
    return message;
  }
};
function createBaseBatchProof() {
  return {
    entries: []
  };
}
export const BatchProof = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.entries) {
      BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$entries;
    const message = createBaseBatchProof();
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(e => BatchEntry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseBatchEntry() {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
export const BatchEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }
};
function createBaseCompressedBatchProof() {
  return {
    entries: [],
    lookupInners: []
  };
}
export const CompressedBatchProof = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.entries) {
      CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lookupInners) {
      InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lookupInners.push(InnerOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$entries2, _object$lookupInners;
    const message = createBaseCompressedBatchProof();
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map(e => CompressedBatchEntry.fromPartial(e))) || [];
    message.lookupInners = ((_object$lookupInners = object.lookupInners) === null || _object$lookupInners === void 0 ? void 0 : _object$lookupInners.map(e => InnerOp.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCompressedBatchEntry() {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
export const CompressedBatchEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exist !== undefined) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCompressedBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }
};
function createBaseCompressedExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: undefined,
    path: []
  };
}
export const CompressedExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key3, _object$value2, _object$path2;
    const message = createBaseCompressedExistenceProof();
    message.key = (_object$key3 = object.key) !== null && _object$key3 !== void 0 ? _object$key3 : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map(e => e)) || [];
    return message;
  }
};
function createBaseCompressedNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: undefined,
    right: undefined
  };
}
export const CompressedNonExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== undefined) {
      CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key4;
    const message = createBaseCompressedNonExistenceProof();
    message.key = (_object$key4 = object.key) !== null && _object$key4 !== void 0 ? _object$key4 : new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }
};