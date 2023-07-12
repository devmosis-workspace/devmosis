"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _mint = require("./mint");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** GenesisState defines the mint module's genesis state. */

/** GenesisState defines the mint module's genesis state. */

function createBaseGenesisState() {
  return {
    minter: undefined,
    params: undefined,
    reductionStartedEpoch: _helpers.Long.ZERO
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.minter !== undefined) {
      _mint.Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      _mint.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (!message.reductionStartedEpoch.isZero()) {
      writer.uint32(24).int64(message.reductionStartedEpoch);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = _mint.Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = _mint.Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.reductionStartedEpoch = reader.int64();
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
      minter: (0, _helpers.isSet)(object.minter) ? _mint.Minter.fromJSON(object.minter) : undefined,
      params: (0, _helpers.isSet)(object.params) ? _mint.Params.fromJSON(object.params) : undefined,
      reductionStartedEpoch: (0, _helpers.isSet)(object.reductionStartedEpoch) ? _helpers.Long.fromValue(object.reductionStartedEpoch) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGenesisState();
    message.minter = object.minter !== undefined && object.minter !== null ? _mint.Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? _mint.Params.fromPartial(object.params) : undefined;
    message.reductionStartedEpoch = object.reductionStartedEpoch !== undefined && object.reductionStartedEpoch !== null ? _helpers.Long.fromValue(object.reductionStartedEpoch) : _helpers.Long.ZERO;
    return message;
  }
};
exports.GenesisState = GenesisState;