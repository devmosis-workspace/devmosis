import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** Params defines the claim module's parameters. */

export interface Params {
  /** Params defines the claim module's parameters. */
  airdrops: Airdrop[];
}
/** Params defines the claim module's parameters. */

export interface ParamsSDKType {
  /** Params defines the claim module's parameters. */
  airdrops: AirdropSDKType[];
}
export interface Airdrop {
  airdropIdentifier: string;
  /** seconds */

  airdropStartTime?: Timestamp;
  /** seconds */

  airdropDuration?: Duration;
  /** denom of claimable asset */

  claimDenom: string;
  /** airdrop distribution account */

  distributorAddress: string;
  /** ustrd tokens claimed so far in the current period */

  claimedSoFar: string;
}
export interface AirdropSDKType {
  airdrop_identifier: string;
  /** seconds */

  airdrop_start_time?: TimestampSDKType;
  /** seconds */

  airdrop_duration?: DurationSDKType;
  /** denom of claimable asset */

  claim_denom: string;
  /** airdrop distribution account */

  distributor_address: string;
  /** ustrd tokens claimed so far in the current period */

  claimed_so_far: string;
}

function createBaseParams(): Params {
  return {
    airdrops: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAirdrop(): Airdrop {
  return {
    airdropIdentifier: "",
    airdropStartTime: undefined,
    airdropDuration: undefined,
    claimDenom: "",
    distributorAddress: "",
    claimedSoFar: ""
  };
}

export const Airdrop = {
  encode(message: Airdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(message.airdropStartTime, writer.uint32(18).fork()).ldelim();
    }

    if (message.airdropDuration !== undefined) {
      Duration.encode(message.airdropDuration, writer.uint32(26).fork()).ldelim();
    }

    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
    }

    if (message.distributorAddress !== "") {
      writer.uint32(42).string(message.distributorAddress);
    }

    if (message.claimedSoFar !== "") {
      writer.uint32(50).string(message.claimedSoFar);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;

        case 2:
          message.airdropStartTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.airdropDuration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.claimDenom = reader.string();
          break;

        case 5:
          message.distributorAddress = reader.string();
          break;

        case 6:
          message.claimedSoFar = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Airdrop>): Airdrop {
    const message = createBaseAirdrop();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.airdropStartTime = object.airdropStartTime !== undefined && object.airdropStartTime !== null ? Timestamp.fromPartial(object.airdropStartTime) : undefined;
    message.airdropDuration = object.airdropDuration !== undefined && object.airdropDuration !== null ? Duration.fromPartial(object.airdropDuration) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.distributorAddress = object.distributorAddress ?? "";
    message.claimedSoFar = object.claimedSoFar ?? "";
    return message;
  }

};