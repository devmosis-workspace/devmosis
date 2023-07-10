import { Params } from "./params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection } from "./superfluid";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the module's genesis state. */

/** GenesisState defines the module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    superfluidAssets: [],
    osmoEquivalentMultipliers: [],
    intermediaryAccounts: [],
    intemediaryAccountConnections: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.superfluidAssets) {
      SuperfluidAsset.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.osmoEquivalentMultipliers) {
      OsmoEquivalentMultiplierRecord.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.intermediaryAccounts) {
      SuperfluidIntermediaryAccount.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.intemediaryAccountConnections) {
      LockIdIntermediaryAccountConnection.encode(v, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.superfluidAssets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.osmoEquivalentMultipliers.push(OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.intermediaryAccounts.push(SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
          break;
        case 5:
          message.intemediaryAccountConnections.push(LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$superfluidAss, _object$osmoEquivalen, _object$intermediaryA, _object$intemediaryAc;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.superfluidAssets = ((_object$superfluidAss = object.superfluidAssets) === null || _object$superfluidAss === void 0 ? void 0 : _object$superfluidAss.map(e => SuperfluidAsset.fromPartial(e))) || [];
    message.osmoEquivalentMultipliers = ((_object$osmoEquivalen = object.osmoEquivalentMultipliers) === null || _object$osmoEquivalen === void 0 ? void 0 : _object$osmoEquivalen.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e))) || [];
    message.intermediaryAccounts = ((_object$intermediaryA = object.intermediaryAccounts) === null || _object$intermediaryA === void 0 ? void 0 : _object$intermediaryA.map(e => SuperfluidIntermediaryAccount.fromPartial(e))) || [];
    message.intemediaryAccountConnections = ((_object$intemediaryAc = object.intemediaryAccountConnections) === null || _object$intemediaryAc === void 0 ? void 0 : _object$intemediaryAc.map(e => LockIdIntermediaryAccountConnection.fromPartial(e))) || [];
    return message;
  }
};