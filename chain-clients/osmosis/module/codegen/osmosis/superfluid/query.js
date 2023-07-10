import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidDelegationRecord } from "./superfluid";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { DelegationResponse } from "../../cosmos/staking/v1beta1/staking";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseAssetTypeRequest() {
  return {
    denom: ""
  };
}
export const AssetTypeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$denom;
    const message = createBaseAssetTypeRequest();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
function createBaseAssetTypeResponse() {
  return {
    assetType: 0
  };
}
export const AssetTypeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$assetType;
    const message = createBaseAssetTypeResponse();
    message.assetType = (_object$assetType = object.assetType) !== null && _object$assetType !== void 0 ? _object$assetType : 0;
    return message;
  }
};
function createBaseAllAssetsRequest() {
  return {};
}
export const AllAssetsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsRequest();
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
  fromPartial(_) {
    const message = createBaseAllAssetsRequest();
    return message;
  }
};
function createBaseAllAssetsResponse() {
  return {
    assets: []
  };
}
export const AllAssetsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.assets) {
      SuperfluidAsset.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var _object$assets;
    const message = createBaseAllAssetsResponse();
    message.assets = ((_object$assets = object.assets) === null || _object$assets === void 0 ? void 0 : _object$assets.map(e => SuperfluidAsset.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAssetMultiplierRequest() {
  return {
    denom: ""
  };
}
export const AssetMultiplierRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$denom2;
    const message = createBaseAssetMultiplierRequest();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    return message;
  }
};
function createBaseAssetMultiplierResponse() {
  return {
    osmoEquivalentMultiplier: undefined
  };
}
export const AssetMultiplierResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.osmoEquivalentMultiplier !== undefined) {
      OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAssetMultiplierResponse();
    message.osmoEquivalentMultiplier = object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null ? OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier) : undefined;
    return message;
  }
};
function createBaseSuperfluidIntermediaryAccountInfo() {
  return {
    denom: "",
    valAddr: "",
    gaugeId: Long.UZERO,
    address: ""
  };
}
export const SuperfluidIntermediaryAccountInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.gaugeId = reader.uint64();
          break;
        case 4:
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
    var _object$denom3, _object$valAddr, _object$address;
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    message.denom = (_object$denom3 = object.denom) !== null && _object$denom3 !== void 0 ? _object$denom3 : "";
    message.valAddr = (_object$valAddr = object.valAddr) !== null && _object$valAddr !== void 0 ? _object$valAddr : "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseAllIntermediaryAccountsRequest() {
  return {
    pagination: undefined
  };
}
export const AllIntermediaryAccountsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAllIntermediaryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseAllIntermediaryAccountsResponse() {
  return {
    accounts: [],
    pagination: undefined
  };
}
export const AllIntermediaryAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      SuperfluidIntermediaryAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$accounts;
    const message = createBaseAllIntermediaryAccountsResponse();
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map(e => SuperfluidIntermediaryAccountInfo.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseConnectedIntermediaryAccountRequest() {
  return {
    lockId: Long.UZERO
  };
}
export const ConnectedIntermediaryAccountRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConnectedIntermediaryAccountRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseConnectedIntermediaryAccountResponse() {
  return {
    account: undefined
  };
}
export const ConnectedIntermediaryAccountResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== undefined) {
      SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConnectedIntermediaryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? SuperfluidIntermediaryAccountInfo.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseQueryTotalDelegationByValidatorForDenomRequest() {
  return {
    denom: ""
  };
}
export const QueryTotalDelegationByValidatorForDenomRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$denom4;
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    message.denom = (_object$denom4 = object.denom) !== null && _object$denom4 !== void 0 ? _object$denom4 : "";
    return message;
  }
};
function createBaseQueryTotalDelegationByValidatorForDenomResponse() {
  return {
    assets: []
  };
}
export const QueryTotalDelegationByValidatorForDenomResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.assets) {
      Delegations.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Delegations.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$assets2;
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    message.assets = ((_object$assets2 = object.assets) === null || _object$assets2 === void 0 ? void 0 : _object$assets2.map(e => Delegations.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDelegations() {
  return {
    valAddr: "",
    amountSfsd: "",
    osmoEquivalent: ""
  };
}
export const Delegations = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.valAddr !== "") {
      writer.uint32(10).string(message.valAddr);
    }
    if (message.amountSfsd !== "") {
      writer.uint32(18).string(message.amountSfsd);
    }
    if (message.osmoEquivalent !== "") {
      writer.uint32(26).string(message.osmoEquivalent);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valAddr = reader.string();
          break;
        case 2:
          message.amountSfsd = reader.string();
          break;
        case 3:
          message.osmoEquivalent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$valAddr2, _object$amountSfsd, _object$osmoEquivalen;
    const message = createBaseDelegations();
    message.valAddr = (_object$valAddr2 = object.valAddr) !== null && _object$valAddr2 !== void 0 ? _object$valAddr2 : "";
    message.amountSfsd = (_object$amountSfsd = object.amountSfsd) !== null && _object$amountSfsd !== void 0 ? _object$amountSfsd : "";
    message.osmoEquivalent = (_object$osmoEquivalen = object.osmoEquivalent) !== null && _object$osmoEquivalen !== void 0 ? _object$osmoEquivalen : "";
    return message;
  }
};
function createBaseTotalSuperfluidDelegationsRequest() {
  return {};
}
export const TotalSuperfluidDelegationsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsRequest();
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
  fromPartial(_) {
    const message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  }
};
function createBaseTotalSuperfluidDelegationsResponse() {
  return {
    totalDelegations: ""
  };
}
export const TotalSuperfluidDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.totalDelegations !== "") {
      writer.uint32(10).string(message.totalDelegations);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegations = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$totalDelegati;
    const message = createBaseTotalSuperfluidDelegationsResponse();
    message.totalDelegations = (_object$totalDelegati = object.totalDelegations) !== null && _object$totalDelegati !== void 0 ? _object$totalDelegati : "";
    return message;
  }
};
function createBaseSuperfluidDelegationAmountRequest() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: ""
  };
}
export const SuperfluidDelegationAmountRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$delegatorAddr, _object$validatorAddr, _object$denom5;
    const message = createBaseSuperfluidDelegationAmountRequest();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.denom = (_object$denom5 = object.denom) !== null && _object$denom5 !== void 0 ? _object$denom5 : "";
    return message;
  }
};
function createBaseSuperfluidDelegationAmountResponse() {
  return {
    amount: []
  };
}
export const SuperfluidDelegationAmountResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$amount;
    const message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSuperfluidDelegationsByDelegatorRequest() {
  return {
    delegatorAddress: ""
  };
}
export const SuperfluidDelegationsByDelegatorRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$delegatorAddr2;
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    return message;
  }
};
function createBaseSuperfluidDelegationsByDelegatorResponse() {
  return {
    superfluidDelegationRecords: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}
export const SuperfluidDelegationsByDelegatorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$superfluidDel, _object$totalDelegate;
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = ((_object$superfluidDel = object.superfluidDelegationRecords) === null || _object$superfluidDel === void 0 ? void 0 : _object$superfluidDel.map(e => SuperfluidDelegationRecord.fromPartial(e))) || [];
    message.totalDelegatedCoins = ((_object$totalDelegate = object.totalDelegatedCoins) === null || _object$totalDelegate === void 0 ? void 0 : _object$totalDelegate.map(e => Coin.fromPartial(e))) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  }
};
function createBaseSuperfluidUndelegationsByDelegatorRequest() {
  return {
    delegatorAddress: "",
    denom: ""
  };
}
export const SuperfluidUndelegationsByDelegatorRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$delegatorAddr3, _object$denom6;
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.denom = (_object$denom6 = object.denom) !== null && _object$denom6 !== void 0 ? _object$denom6 : "";
    return message;
  }
};
function createBaseSuperfluidUndelegationsByDelegatorResponse() {
  return {
    superfluidDelegationRecords: [],
    totalUndelegatedCoins: [],
    syntheticLocks: []
  };
}
export const SuperfluidUndelegationsByDelegatorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalUndelegatedCoins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalUndelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$superfluidDel2, _object$totalUndelega, _object$syntheticLock;
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = ((_object$superfluidDel2 = object.superfluidDelegationRecords) === null || _object$superfluidDel2 === void 0 ? void 0 : _object$superfluidDel2.map(e => SuperfluidDelegationRecord.fromPartial(e))) || [];
    message.totalUndelegatedCoins = ((_object$totalUndelega = object.totalUndelegatedCoins) === null || _object$totalUndelega === void 0 ? void 0 : _object$totalUndelega.map(e => Coin.fromPartial(e))) || [];
    message.syntheticLocks = ((_object$syntheticLock = object.syntheticLocks) === null || _object$syntheticLock === void 0 ? void 0 : _object$syntheticLock.map(e => SyntheticLock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSuperfluidDelegationsByValidatorDenomRequest() {
  return {
    validatorAddress: "",
    denom: ""
  };
}
export const SuperfluidDelegationsByValidatorDenomRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$validatorAddr2, _object$denom7;
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.denom = (_object$denom7 = object.denom) !== null && _object$denom7 !== void 0 ? _object$denom7 : "";
    return message;
  }
};
function createBaseSuperfluidDelegationsByValidatorDenomResponse() {
  return {
    superfluidDelegationRecords: []
  };
}
export const SuperfluidDelegationsByValidatorDenomResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$superfluidDel3;
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords = ((_object$superfluidDel3 = object.superfluidDelegationRecords) === null || _object$superfluidDel3 === void 0 ? void 0 : _object$superfluidDel3.map(e => SuperfluidDelegationRecord.fromPartial(e))) || [];
    return message;
  }
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest() {
  return {
    validatorAddress: "",
    denom: ""
  };
}
export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$validatorAddr3, _object$denom8;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.denom = (_object$denom8 = object.denom) !== null && _object$denom8 !== void 0 ? _object$denom8 : "";
    return message;
  }
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse() {
  return {
    totalDelegatedCoins: []
  };
}
export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$totalDelegate2;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins = ((_object$totalDelegate2 = object.totalDelegatedCoins) === null || _object$totalDelegate2 === void 0 ? void 0 : _object$totalDelegate2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryTotalDelegationByDelegatorRequest() {
  return {
    delegatorAddress: ""
  };
}
export const QueryTotalDelegationByDelegatorRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$delegatorAddr4;
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    return message;
  }
};
function createBaseQueryTotalDelegationByDelegatorResponse() {
  return {
    superfluidDelegationRecords: [],
    delegationResponse: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}
export const QueryTotalDelegationByDelegatorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.delegationResponse) {
      DelegationResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.delegationResponse.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$superfluidDel4, _object$delegationRes, _object$totalDelegate3;
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    message.superfluidDelegationRecords = ((_object$superfluidDel4 = object.superfluidDelegationRecords) === null || _object$superfluidDel4 === void 0 ? void 0 : _object$superfluidDel4.map(e => SuperfluidDelegationRecord.fromPartial(e))) || [];
    message.delegationResponse = ((_object$delegationRes = object.delegationResponse) === null || _object$delegationRes === void 0 ? void 0 : _object$delegationRes.map(e => DelegationResponse.fromPartial(e))) || [];
    message.totalDelegatedCoins = ((_object$totalDelegate3 = object.totalDelegatedCoins) === null || _object$totalDelegate3 === void 0 ? void 0 : _object$totalDelegate3.map(e => Coin.fromPartial(e))) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  }
};
function createBaseQueryUnpoolWhitelistRequest() {
  return {};
}
export const QueryUnpoolWhitelistRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistRequest();
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
  fromPartial(_) {
    const message = createBaseQueryUnpoolWhitelistRequest();
    return message;
  }
};
function createBaseQueryUnpoolWhitelistResponse() {
  return {
    poolIds: []
  };
}
export const QueryUnpoolWhitelistResponse = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
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
    var _object$poolIds;
    const message = createBaseQueryUnpoolWhitelistResponse();
    message.poolIds = ((_object$poolIds = object.poolIds) === null || _object$poolIds === void 0 ? void 0 : _object$poolIds.map(e => Long.fromValue(e))) || [];
    return message;
  }
};