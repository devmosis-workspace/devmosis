import * as _108 from "./applications/transfer/v1/genesis";
import * as _109 from "./applications/transfer/v1/query";
import * as _110 from "./applications/transfer/v1/transfer";
import * as _111 from "./applications/transfer/v1/tx";
import * as _112 from "./applications/transfer/v2/packet";
import * as _113 from "./core/channel/v1/channel";
import * as _114 from "./core/channel/v1/genesis";
import * as _115 from "./core/channel/v1/query";
import * as _116 from "./core/channel/v1/tx";
import * as _117 from "./core/client/v1/client";
import * as _118 from "./core/client/v1/genesis";
import * as _119 from "./core/client/v1/query";
import * as _120 from "./core/client/v1/tx";
import * as _121 from "./core/commitment/v1/commitment";
import * as _122 from "./core/connection/v1/connection";
import * as _123 from "./core/connection/v1/genesis";
import * as _124 from "./core/connection/v1/query";
import * as _125 from "./core/connection/v1/tx";
import * as _126 from "./core/port/v1/query";
import * as _127 from "./core/types/v1/genesis";
import * as _128 from "./lightclients/localhost/v1/localhost";
import * as _129 from "./lightclients/solomachine/v1/solomachine";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/tendermint/v1/tendermint";
import * as _211 from "./applications/transfer/v1/query.lcd";
import * as _212 from "./core/channel/v1/query.lcd";
import * as _213 from "./core/client/v1/query.lcd";
import * as _214 from "./core/connection/v1/query.lcd";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                LCDQueryClient: typeof _211.LCDQueryClient;
                MsgTransfer: {
                    encode(message: _111.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTransfer;
                    fromPartial(object: Partial<_111.MsgTransfer>): _111.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _111.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTransferResponse;
                    fromPartial(_: Partial<_111.MsgTransferResponse>): _111.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _110.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DenomTrace;
                    fromPartial(object: Partial<_110.DenomTrace>): _110.DenomTrace;
                };
                Params: {
                    encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
                    fromPartial(object: Partial<_110.Params>): _110.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _109.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_109.QueryDenomTraceRequest>): _109.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _109.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_109.QueryDenomTraceResponse>): _109.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _109.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_109.QueryDenomTracesRequest>): _109.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _109.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_109.QueryDenomTracesResponse>): _109.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _109.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryParamsRequest;
                    fromPartial(_: Partial<_109.QueryParamsRequest>): _109.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _109.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryParamsResponse;
                    fromPartial(object: Partial<_109.QueryParamsResponse>): _109.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _112.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.FungibleTokenPacketData;
                    fromPartial(object: Partial<_112.FungibleTokenPacketData>): _112.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                LCDQueryClient: typeof _212.LCDQueryClient;
                MsgChannelOpenInit: {
                    encode(message: _116.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenInit;
                    fromPartial(object: Partial<_116.MsgChannelOpenInit>): _116.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _116.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_116.MsgChannelOpenInitResponse>): _116.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _116.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenTry;
                    fromPartial(object: Partial<_116.MsgChannelOpenTry>): _116.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _116.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_116.MsgChannelOpenTryResponse>): _116.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _116.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenAck;
                    fromPartial(object: Partial<_116.MsgChannelOpenAck>): _116.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _116.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_116.MsgChannelOpenAckResponse>): _116.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _116.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_116.MsgChannelOpenConfirm>): _116.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _116.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_116.MsgChannelOpenConfirmResponse>): _116.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _116.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseInit;
                    fromPartial(object: Partial<_116.MsgChannelCloseInit>): _116.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _116.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_116.MsgChannelCloseInitResponse>): _116.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _116.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_116.MsgChannelCloseConfirm>): _116.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _116.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_116.MsgChannelCloseConfirmResponse>): _116.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _116.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgRecvPacket;
                    fromPartial(object: Partial<_116.MsgRecvPacket>): _116.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _116.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_116.MsgRecvPacketResponse>): _116.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _116.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeout;
                    fromPartial(object: Partial<_116.MsgTimeout>): _116.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _116.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutResponse;
                    fromPartial(_: Partial<_116.MsgTimeoutResponse>): _116.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _116.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_116.MsgTimeoutOnClose>): _116.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _116.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_116.MsgTimeoutOnCloseResponse>): _116.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _116.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgAcknowledgement;
                    fromPartial(object: Partial<_116.MsgAcknowledgement>): _116.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _116.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_116.MsgAcknowledgementResponse>): _116.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _115.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelRequest;
                    fromPartial(object: Partial<_115.QueryChannelRequest>): _115.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _115.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelResponse;
                    fromPartial(object: Partial<_115.QueryChannelResponse>): _115.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _115.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelsRequest;
                    fromPartial(object: Partial<_115.QueryChannelsRequest>): _115.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _115.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelsResponse;
                    fromPartial(object: Partial<_115.QueryChannelsResponse>): _115.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _115.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_115.QueryConnectionChannelsRequest>): _115.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _115.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_115.QueryConnectionChannelsResponse>): _115.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _115.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_115.QueryChannelClientStateRequest>): _115.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _115.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_115.QueryChannelClientStateResponse>): _115.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _115.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_115.QueryChannelConsensusStateRequest>): _115.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _115.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_115.QueryChannelConsensusStateResponse>): _115.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _115.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_115.QueryPacketCommitmentRequest>): _115.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _115.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_115.QueryPacketCommitmentResponse>): _115.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _115.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_115.QueryPacketCommitmentsRequest>): _115.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _115.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_115.QueryPacketCommitmentsResponse>): _115.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _115.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_115.QueryPacketReceiptRequest>): _115.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _115.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_115.QueryPacketReceiptResponse>): _115.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _115.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_115.QueryPacketAcknowledgementRequest>): _115.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _115.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_115.QueryPacketAcknowledgementResponse>): _115.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _115.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_115.QueryPacketAcknowledgementsRequest>): _115.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _115.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_115.QueryPacketAcknowledgementsResponse>): _115.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _115.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_115.QueryUnreceivedPacketsRequest>): _115.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _115.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_115.QueryUnreceivedPacketsResponse>): _115.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _115.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_115.QueryUnreceivedAcksRequest>): _115.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _115.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_115.QueryUnreceivedAcksResponse>): _115.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _115.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_115.QueryNextSequenceReceiveRequest>): _115.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _115.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_115.QueryNextSequenceReceiveResponse>): _115.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
                    fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
                };
                PacketSequence: {
                    encode(message: _114.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PacketSequence;
                    fromPartial(object: Partial<_114.PacketSequence>): _114.PacketSequence;
                };
                stateFromJSON(object: any): _113.State;
                stateToJSON(object: _113.State): string;
                orderFromJSON(object: any): _113.Order;
                orderToJSON(object: _113.Order): string;
                State: typeof _113.State;
                StateSDKType: typeof _113.StateSDKType;
                Order: typeof _113.Order;
                OrderSDKType: typeof _113.OrderSDKType;
                Channel: {
                    encode(message: _113.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Channel;
                    fromPartial(object: Partial<_113.Channel>): _113.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _113.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.IdentifiedChannel;
                    fromPartial(object: Partial<_113.IdentifiedChannel>): _113.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _113.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Counterparty;
                    fromPartial(object: Partial<_113.Counterparty>): _113.Counterparty;
                };
                Packet: {
                    encode(message: _113.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Packet;
                    fromPartial(object: Partial<_113.Packet>): _113.Packet;
                };
                PacketState: {
                    encode(message: _113.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.PacketState;
                    fromPartial(object: Partial<_113.PacketState>): _113.PacketState;
                };
                Acknowledgement: {
                    encode(message: _113.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Acknowledgement;
                    fromPartial(object: Partial<_113.Acknowledgement>): _113.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                LCDQueryClient: typeof _213.LCDQueryClient;
                MsgCreateClient: {
                    encode(message: _120.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateClient;
                    fromPartial(object: Partial<_120.MsgCreateClient>): _120.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _120.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgCreateClientResponse;
                    fromPartial(_: Partial<_120.MsgCreateClientResponse>): _120.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _120.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpdateClient;
                    fromPartial(object: Partial<_120.MsgUpdateClient>): _120.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _120.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_120.MsgUpdateClientResponse>): _120.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _120.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpgradeClient;
                    fromPartial(object: Partial<_120.MsgUpgradeClient>): _120.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _120.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_120.MsgUpgradeClientResponse>): _120.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _120.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_120.MsgSubmitMisbehaviour>): _120.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _120.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_120.MsgSubmitMisbehaviourResponse>): _120.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _119.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStateRequest;
                    fromPartial(object: Partial<_119.QueryClientStateRequest>): _119.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _119.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStateResponse;
                    fromPartial(object: Partial<_119.QueryClientStateResponse>): _119.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _119.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatesRequest;
                    fromPartial(object: Partial<_119.QueryClientStatesRequest>): _119.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _119.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatesResponse;
                    fromPartial(object: Partial<_119.QueryClientStatesResponse>): _119.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _119.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_119.QueryConsensusStateRequest>): _119.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _119.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_119.QueryConsensusStateResponse>): _119.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _119.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_119.QueryConsensusStatesRequest>): _119.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _119.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_119.QueryConsensusStatesResponse>): _119.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _119.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatusRequest;
                    fromPartial(object: Partial<_119.QueryClientStatusRequest>): _119.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _119.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientStatusResponse;
                    fromPartial(object: Partial<_119.QueryClientStatusResponse>): _119.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _119.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientParamsRequest;
                    fromPartial(_: Partial<_119.QueryClientParamsRequest>): _119.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _119.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientParamsResponse;
                    fromPartial(object: Partial<_119.QueryClientParamsResponse>): _119.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _119.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_119.QueryUpgradedClientStateRequest>): _119.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _119.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_119.QueryUpgradedClientStateResponse>): _119.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _119.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_119.QueryUpgradedConsensusStateRequest>): _119.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _119.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_119.QueryUpgradedConsensusStateResponse>): _119.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
                    fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _118.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisMetadata;
                    fromPartial(object: Partial<_118.GenesisMetadata>): _118.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _118.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_118.IdentifiedGenesisMetadata>): _118.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _117.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.IdentifiedClientState;
                    fromPartial(object: Partial<_117.IdentifiedClientState>): _117.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _117.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_117.ConsensusStateWithHeight>): _117.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _117.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientConsensusStates;
                    fromPartial(object: Partial<_117.ClientConsensusStates>): _117.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _117.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientUpdateProposal;
                    fromPartial(object: Partial<_117.ClientUpdateProposal>): _117.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _117.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.UpgradeProposal;
                    fromPartial(object: Partial<_117.UpgradeProposal>): _117.UpgradeProposal;
                };
                Height: {
                    encode(message: _117.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Height;
                    fromPartial(object: Partial<_117.Height>): _117.Height;
                };
                Params: {
                    encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Params;
                    fromPartial(object: Partial<_117.Params>): _117.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _121.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerkleRoot;
                    fromPartial(object: Partial<_121.MerkleRoot>): _121.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _121.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerklePrefix;
                    fromPartial(object: Partial<_121.MerklePrefix>): _121.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _121.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerklePath;
                    fromPartial(object: Partial<_121.MerklePath>): _121.MerklePath;
                };
                MerkleProof: {
                    encode(message: _121.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MerkleProof;
                    fromPartial(object: Partial<_121.MerkleProof>): _121.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                LCDQueryClient: typeof _214.LCDQueryClient;
                MsgConnectionOpenInit: {
                    encode(message: _125.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_125.MsgConnectionOpenInit>): _125.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _125.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_125.MsgConnectionOpenInitResponse>): _125.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _125.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_125.MsgConnectionOpenTry>): _125.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _125.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_125.MsgConnectionOpenTryResponse>): _125.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _125.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_125.MsgConnectionOpenAck>): _125.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _125.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_125.MsgConnectionOpenAckResponse>): _125.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _125.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_125.MsgConnectionOpenConfirm>): _125.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _125.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_125.MsgConnectionOpenConfirmResponse>): _125.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _124.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionRequest;
                    fromPartial(object: Partial<_124.QueryConnectionRequest>): _124.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _124.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionResponse;
                    fromPartial(object: Partial<_124.QueryConnectionResponse>): _124.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _124.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionsRequest;
                    fromPartial(object: Partial<_124.QueryConnectionsRequest>): _124.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _124.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionsResponse;
                    fromPartial(object: Partial<_124.QueryConnectionsResponse>): _124.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _124.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_124.QueryClientConnectionsRequest>): _124.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _124.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_124.QueryClientConnectionsResponse>): _124.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _124.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_124.QueryConnectionClientStateRequest>): _124.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _124.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_124.QueryConnectionClientStateResponse>): _124.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _124.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_124.QueryConnectionConsensusStateRequest>): _124.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _124.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_124.QueryConnectionConsensusStateResponse>): _124.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _123.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.GenesisState;
                    fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
                };
                stateFromJSON(object: any): _122.State;
                stateToJSON(object: _122.State): string;
                State: typeof _122.State;
                StateSDKType: typeof _122.StateSDKType;
                ConnectionEnd: {
                    encode(message: _122.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectionEnd;
                    fromPartial(object: Partial<_122.ConnectionEnd>): _122.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _122.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.IdentifiedConnection;
                    fromPartial(object: Partial<_122.IdentifiedConnection>): _122.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _122.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Counterparty;
                    fromPartial(object: Partial<_122.Counterparty>): _122.Counterparty;
                };
                ClientPaths: {
                    encode(message: _122.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientPaths;
                    fromPartial(object: Partial<_122.ClientPaths>): _122.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _122.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectionPaths;
                    fromPartial(object: Partial<_122.ConnectionPaths>): _122.ConnectionPaths;
                };
                Version: {
                    encode(message: _122.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Version;
                    fromPartial(object: Partial<_122.Version>): _122.Version;
                };
                Params: {
                    encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Params;
                    fromPartial(object: Partial<_122.Params>): _122.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _126.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAppVersionRequest;
                    fromPartial(object: Partial<_126.QueryAppVersionRequest>): _126.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _126.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryAppVersionResponse;
                    fromPartial(object: Partial<_126.QueryAppVersionResponse>): _126.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                    fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _128.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ClientState;
                    fromPartial(object: Partial<_128.ClientState>): _128.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _129.DataType;
                dataTypeToJSON(object: _129.DataType): string;
                DataType: typeof _129.DataType;
                DataTypeSDKType: typeof _129.DataTypeSDKType;
                ClientState: {
                    encode(message: _129.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ClientState;
                    fromPartial(object: Partial<_129.ClientState>): _129.ClientState;
                };
                ConsensusState: {
                    encode(message: _129.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConsensusState;
                    fromPartial(object: Partial<_129.ConsensusState>): _129.ConsensusState;
                };
                Header: {
                    encode(message: _129.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Header;
                    fromPartial(object: Partial<_129.Header>): _129.Header;
                };
                Misbehaviour: {
                    encode(message: _129.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Misbehaviour;
                    fromPartial(object: Partial<_129.Misbehaviour>): _129.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _129.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.SignatureAndData;
                    fromPartial(object: Partial<_129.SignatureAndData>): _129.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _129.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.TimestampedSignatureData;
                    fromPartial(object: Partial<_129.TimestampedSignatureData>): _129.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _129.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.SignBytes;
                    fromPartial(object: Partial<_129.SignBytes>): _129.SignBytes;
                };
                HeaderData: {
                    encode(message: _129.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.HeaderData;
                    fromPartial(object: Partial<_129.HeaderData>): _129.HeaderData;
                };
                ClientStateData: {
                    encode(message: _129.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ClientStateData;
                    fromPartial(object: Partial<_129.ClientStateData>): _129.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _129.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConsensusStateData;
                    fromPartial(object: Partial<_129.ConsensusStateData>): _129.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _129.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ConnectionStateData;
                    fromPartial(object: Partial<_129.ConnectionStateData>): _129.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _129.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ChannelStateData;
                    fromPartial(object: Partial<_129.ChannelStateData>): _129.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _129.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketCommitmentData;
                    fromPartial(object: Partial<_129.PacketCommitmentData>): _129.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _129.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketAcknowledgementData;
                    fromPartial(object: Partial<_129.PacketAcknowledgementData>): _129.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _129.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_129.PacketReceiptAbsenceData>): _129.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _129.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.NextSequenceRecvData;
                    fromPartial(object: Partial<_129.NextSequenceRecvData>): _129.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _130.DataType;
                dataTypeToJSON(object: _130.DataType): string;
                DataType: typeof _130.DataType;
                DataTypeSDKType: typeof _130.DataTypeSDKType;
                ClientState: {
                    encode(message: _130.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientState;
                    fromPartial(object: Partial<_130.ClientState>): _130.ClientState;
                };
                ConsensusState: {
                    encode(message: _130.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConsensusState;
                    fromPartial(object: Partial<_130.ConsensusState>): _130.ConsensusState;
                };
                Header: {
                    encode(message: _130.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Header;
                    fromPartial(object: Partial<_130.Header>): _130.Header;
                };
                Misbehaviour: {
                    encode(message: _130.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Misbehaviour;
                    fromPartial(object: Partial<_130.Misbehaviour>): _130.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _130.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SignatureAndData;
                    fromPartial(object: Partial<_130.SignatureAndData>): _130.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _130.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.TimestampedSignatureData;
                    fromPartial(object: Partial<_130.TimestampedSignatureData>): _130.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _130.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SignBytes;
                    fromPartial(object: Partial<_130.SignBytes>): _130.SignBytes;
                };
                HeaderData: {
                    encode(message: _130.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.HeaderData;
                    fromPartial(object: Partial<_130.HeaderData>): _130.HeaderData;
                };
                ClientStateData: {
                    encode(message: _130.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientStateData;
                    fromPartial(object: Partial<_130.ClientStateData>): _130.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _130.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConsensusStateData;
                    fromPartial(object: Partial<_130.ConsensusStateData>): _130.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _130.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConnectionStateData;
                    fromPartial(object: Partial<_130.ConnectionStateData>): _130.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _130.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ChannelStateData;
                    fromPartial(object: Partial<_130.ChannelStateData>): _130.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _130.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketCommitmentData;
                    fromPartial(object: Partial<_130.PacketCommitmentData>): _130.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _130.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketAcknowledgementData;
                    fromPartial(object: Partial<_130.PacketAcknowledgementData>): _130.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _130.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_130.PacketReceiptAbsenceData>): _130.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _130.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.NextSequenceRecvData;
                    fromPartial(object: Partial<_130.NextSequenceRecvData>): _130.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _131.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientState;
                    fromPartial(object: Partial<_131.ClientState>): _131.ClientState;
                };
                ConsensusState: {
                    encode(message: _131.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConsensusState;
                    fromPartial(object: Partial<_131.ConsensusState>): _131.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _131.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Misbehaviour;
                    fromPartial(object: Partial<_131.Misbehaviour>): _131.Misbehaviour;
                };
                Header: {
                    encode(message: _131.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Header;
                    fromPartial(object: Partial<_131.Header>): _131.Header;
                };
                Fraction: {
                    encode(message: _131.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Fraction;
                    fromPartial(object: Partial<_131.Fraction>): _131.Fraction;
                };
            };
        }
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _211.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _212.LCDQueryClient;
                    };
                    client: {
                        v1: _213.LCDQueryClient;
                    };
                    connection: {
                        v1: _214.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
