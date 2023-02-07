import * as _90 from "./claim/claim";
import * as _91 from "./claim/genesis";
import * as _92 from "./claim/params";
import * as _93 from "./claim/query";
import * as _94 from "./claim/tx";
import * as _95 from "./epochs/genesis";
import * as _96 from "./epochs/query";
import * as _97 from "./icacallbacks/callback_data";
import * as _98 from "./icacallbacks/genesis";
import * as _99 from "./icacallbacks/packet";
import * as _100 from "./icacallbacks/params";
import * as _101 from "./icacallbacks/query";
import * as _103 from "./interchainquery/v1/genesis";
import * as _104 from "./interchainquery/v1/messages";
import * as _105 from "./interchainquery/v1/query";
import * as _106 from "./mint/v1beta1/genesis";
import * as _107 from "./mint/v1beta1/mint";
import * as _108 from "./mint/v1beta1/query";
import * as _109 from "./records/callbacks";
import * as _110 from "./records/genesis";
import * as _111 from "./records/query";
import * as _112 from "./stakeibc/callbacks";
import * as _113 from "./stakeibc/epoch_tracker";
import * as _114 from "./stakeibc/genesis";
import * as _115 from "./stakeibc/gov";
import * as _116 from "./stakeibc/host_zone";
import * as _117 from "./stakeibc/ica_account";
import * as _118 from "./stakeibc/packet";
import * as _119 from "./stakeibc/params";
import * as _120 from "./stakeibc/query";
import * as _121 from "./stakeibc/tx";
import * as _122 from "./stakeibc/validator";
import * as _124 from "./vesting/vesting";
import * as _139 from "./claim/query.lcd";
import * as _140 from "./epochs/query.lcd";
import * as _141 from "./icacallbacks/query.lcd";
import * as _142 from "./mint/v1beta1/query.lcd";
import * as _143 from "./records/query.lcd";
import * as _144 from "./stakeibc/query.lcd";
export declare namespace stride {
    const claim: {
        LCDQueryClient: typeof _139.LCDQueryClient;
        MsgSetAirdropAllocations: {
            encode(message: _94.MsgSetAirdropAllocations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_94.MsgSetAirdropAllocations>): _94.MsgSetAirdropAllocations;
        };
        MsgSetAirdropAllocationsResponse: {
            encode(_: _94.MsgSetAirdropAllocationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_94.MsgSetAirdropAllocationsResponse>): _94.MsgSetAirdropAllocationsResponse;
        };
        MsgClaimFreeAmount: {
            encode(message: _94.MsgClaimFreeAmount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgClaimFreeAmount;
            fromPartial(object: Partial<_94.MsgClaimFreeAmount>): _94.MsgClaimFreeAmount;
        };
        MsgClaimFreeAmountResponse: {
            encode(message: _94.MsgClaimFreeAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_94.MsgClaimFreeAmountResponse>): _94.MsgClaimFreeAmountResponse;
        };
        MsgCreateAirdrop: {
            encode(message: _94.MsgCreateAirdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateAirdrop;
            fromPartial(object: Partial<_94.MsgCreateAirdrop>): _94.MsgCreateAirdrop;
        };
        MsgCreateAirdropResponse: {
            encode(_: _94.MsgCreateAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_94.MsgCreateAirdropResponse>): _94.MsgCreateAirdropResponse;
        };
        MsgDeleteAirdrop: {
            encode(message: _94.MsgDeleteAirdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgDeleteAirdrop;
            fromPartial(object: Partial<_94.MsgDeleteAirdrop>): _94.MsgDeleteAirdrop;
        };
        MsgDeleteAirdropResponse: {
            encode(_: _94.MsgDeleteAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_94.MsgDeleteAirdropResponse>): _94.MsgDeleteAirdropResponse;
        };
        QueryDistributorAccountBalanceRequest: {
            encode(message: _93.QueryDistributorAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_93.QueryDistributorAccountBalanceRequest>): _93.QueryDistributorAccountBalanceRequest;
        };
        QueryDistributorAccountBalanceResponse: {
            encode(message: _93.QueryDistributorAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_93.QueryDistributorAccountBalanceResponse>): _93.QueryDistributorAccountBalanceResponse;
        };
        QueryParamsRequest: {
            encode(_: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsRequest;
            fromPartial(_: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsResponse;
            fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
        };
        QueryClaimRecordRequest: {
            encode(message: _93.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryClaimRecordRequest;
            fromPartial(object: Partial<_93.QueryClaimRecordRequest>): _93.QueryClaimRecordRequest;
        };
        QueryClaimRecordResponse: {
            encode(message: _93.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryClaimRecordResponse;
            fromPartial(object: Partial<_93.QueryClaimRecordResponse>): _93.QueryClaimRecordResponse;
        };
        QueryClaimableForActionRequest: {
            encode(message: _93.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_93.QueryClaimableForActionRequest>): _93.QueryClaimableForActionRequest;
        };
        QueryClaimableForActionResponse: {
            encode(message: _93.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_93.QueryClaimableForActionResponse>): _93.QueryClaimableForActionResponse;
        };
        QueryTotalClaimableRequest: {
            encode(message: _93.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_93.QueryTotalClaimableRequest>): _93.QueryTotalClaimableRequest;
        };
        QueryTotalClaimableResponse: {
            encode(message: _93.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_93.QueryTotalClaimableResponse>): _93.QueryTotalClaimableResponse;
        };
        QueryUserVestingsRequest: {
            encode(message: _93.QueryUserVestingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryUserVestingsRequest;
            fromPartial(object: Partial<_93.QueryUserVestingsRequest>): _93.QueryUserVestingsRequest;
        };
        QueryUserVestingsResponse: {
            encode(message: _93.QueryUserVestingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryUserVestingsResponse;
            fromPartial(object: Partial<_93.QueryUserVestingsResponse>): _93.QueryUserVestingsResponse;
        };
        Params: {
            encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
            fromPartial(object: Partial<_92.Params>): _92.Params;
        };
        Airdrop: {
            encode(message: _92.Airdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Airdrop;
            fromPartial(object: Partial<_92.Airdrop>): _92.Airdrop;
        };
        GenesisState: {
            encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GenesisState;
            fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
        };
        actionFromJSON(object: any): _90.Action;
        actionToJSON(object: _90.Action): string;
        Action: typeof _90.Action;
        ActionSDKType: typeof _90.ActionSDKType;
        ClaimRecord: {
            encode(message: _90.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ClaimRecord;
            fromPartial(object: Partial<_90.ClaimRecord>): _90.ClaimRecord;
        };
    };
    const epochs: {
        LCDQueryClient: typeof _140.LCDQueryClient;
        QueryEpochsInfoRequest: {
            encode(message: _96.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_96.QueryEpochsInfoRequest>): _96.QueryEpochsInfoRequest;
        };
        QueryEpochsInfoResponse: {
            encode(message: _96.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_96.QueryEpochsInfoResponse>): _96.QueryEpochsInfoResponse;
        };
        QueryCurrentEpochRequest: {
            encode(message: _96.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_96.QueryCurrentEpochRequest>): _96.QueryCurrentEpochRequest;
        };
        QueryCurrentEpochResponse: {
            encode(message: _96.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_96.QueryCurrentEpochResponse>): _96.QueryCurrentEpochResponse;
        };
        QueryEpochInfoRequest: {
            encode(message: _96.QueryEpochInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochInfoRequest;
            fromPartial(object: Partial<_96.QueryEpochInfoRequest>): _96.QueryEpochInfoRequest;
        };
        QueryEpochInfoResponse: {
            encode(message: _96.QueryEpochInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochInfoResponse;
            fromPartial(object: Partial<_96.QueryEpochInfoResponse>): _96.QueryEpochInfoResponse;
        };
        EpochInfo: {
            encode(message: _95.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EpochInfo;
            fromPartial(object: Partial<_95.EpochInfo>): _95.EpochInfo;
        };
        GenesisState: {
            encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
            fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
        };
    };
    const icacallbacks: {
        LCDQueryClient: typeof _141.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _101.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsRequest;
            fromPartial(_: Partial<_101.QueryParamsRequest>): _101.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _101.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsResponse;
            fromPartial(object: Partial<_101.QueryParamsResponse>): _101.QueryParamsResponse;
        };
        QueryGetCallbackDataRequest: {
            encode(message: _101.QueryGetCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_101.QueryGetCallbackDataRequest>): _101.QueryGetCallbackDataRequest;
        };
        QueryGetCallbackDataResponse: {
            encode(message: _101.QueryGetCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_101.QueryGetCallbackDataResponse>): _101.QueryGetCallbackDataResponse;
        };
        QueryAllCallbackDataRequest: {
            encode(message: _101.QueryAllCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_101.QueryAllCallbackDataRequest>): _101.QueryAllCallbackDataRequest;
        };
        QueryAllCallbackDataResponse: {
            encode(message: _101.QueryAllCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_101.QueryAllCallbackDataResponse>): _101.QueryAllCallbackDataResponse;
        };
        Params: {
            encode(_: _100.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Params;
            fromPartial(_: Partial<_100.Params>): _100.Params;
        };
        IcacallbacksPacketData: {
            encode(message: _99.IcacallbacksPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.IcacallbacksPacketData;
            fromPartial(object: Partial<_99.IcacallbacksPacketData>): _99.IcacallbacksPacketData;
        };
        NoData: {
            encode(_: _99.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.NoData;
            fromPartial(_: Partial<_99.NoData>): _99.NoData;
        };
        GenesisState: {
            encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
            fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
        };
        CallbackData: {
            encode(message: _97.CallbackData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CallbackData;
            fromPartial(object: Partial<_97.CallbackData>): _97.CallbackData;
        };
    };
    namespace interchainquery {
        const v1: {
            QueryPendingQueriesRequest: {
                encode(_: _105.QueryPendingQueriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_105.QueryPendingQueriesRequest>): _105.QueryPendingQueriesRequest;
            };
            QueryPendingQueriesResponse: {
                encode(message: _105.QueryPendingQueriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_105.QueryPendingQueriesResponse>): _105.QueryPendingQueriesResponse;
            };
            MsgSubmitQueryResponse: {
                encode(message: _104.MsgSubmitQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_104.MsgSubmitQueryResponse>): _104.MsgSubmitQueryResponse;
            };
            MsgSubmitQueryResponseResponse: {
                encode(_: _104.MsgSubmitQueryResponseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_104.MsgSubmitQueryResponseResponse>): _104.MsgSubmitQueryResponseResponse;
            };
            Query: {
                encode(message: _103.Query, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Query;
                fromPartial(object: Partial<_103.Query>): _103.Query;
            };
            DataPoint: {
                encode(message: _103.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DataPoint;
                fromPartial(object: Partial<_103.DataPoint>): _103.DataPoint;
            };
            GenesisState: {
                encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState;
                fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            LCDQueryClient: typeof _142.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _108.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsRequest;
                fromPartial(_: Partial<_108.QueryParamsRequest>): _108.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _108.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsResponse;
                fromPartial(object: Partial<_108.QueryParamsResponse>): _108.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _108.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_108.QueryEpochProvisionsRequest>): _108.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _108.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_108.QueryEpochProvisionsResponse>): _108.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _107.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Minter;
                fromPartial(object: Partial<_107.Minter>): _107.Minter;
            };
            DistributionProportions: {
                encode(message: _107.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.DistributionProportions;
                fromPartial(object: Partial<_107.DistributionProportions>): _107.DistributionProportions;
            };
            Params: {
                encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Params;
                fromPartial(object: Partial<_107.Params>): _107.Params;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            };
        };
    }
    const records: {
        LCDQueryClient: typeof _143.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsRequest;
            fromPartial(_: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsResponse;
            fromPartial(object: Partial<_111.QueryParamsResponse>): _111.QueryParamsResponse;
        };
        QueryGetDepositRecordRequest: {
            encode(message: _111.QueryGetDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_111.QueryGetDepositRecordRequest>): _111.QueryGetDepositRecordRequest;
        };
        QueryGetDepositRecordResponse: {
            encode(message: _111.QueryGetDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_111.QueryGetDepositRecordResponse>): _111.QueryGetDepositRecordResponse;
        };
        QueryAllDepositRecordRequest: {
            encode(message: _111.QueryAllDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_111.QueryAllDepositRecordRequest>): _111.QueryAllDepositRecordRequest;
        };
        QueryAllDepositRecordResponse: {
            encode(message: _111.QueryAllDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_111.QueryAllDepositRecordResponse>): _111.QueryAllDepositRecordResponse;
        };
        QueryGetUserRedemptionRecordRequest: {
            encode(message: _111.QueryGetUserRedemptionRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_111.QueryGetUserRedemptionRecordRequest>): _111.QueryGetUserRedemptionRecordRequest;
        };
        QueryGetUserRedemptionRecordResponse: {
            encode(message: _111.QueryGetUserRedemptionRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_111.QueryGetUserRedemptionRecordResponse>): _111.QueryGetUserRedemptionRecordResponse;
        };
        QueryAllUserRedemptionRecordRequest: {
            encode(message: _111.QueryAllUserRedemptionRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_111.QueryAllUserRedemptionRecordRequest>): _111.QueryAllUserRedemptionRecordRequest;
        };
        QueryAllUserRedemptionRecordResponse: {
            encode(message: _111.QueryAllUserRedemptionRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_111.QueryAllUserRedemptionRecordResponse>): _111.QueryAllUserRedemptionRecordResponse;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            encode(message: _111.QueryAllUserRedemptionRecordForUserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_111.QueryAllUserRedemptionRecordForUserRequest>): _111.QueryAllUserRedemptionRecordForUserRequest;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            encode(message: _111.QueryAllUserRedemptionRecordForUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_111.QueryAllUserRedemptionRecordForUserResponse>): _111.QueryAllUserRedemptionRecordForUserResponse;
        };
        QueryGetEpochUnbondingRecordRequest: {
            encode(message: _111.QueryGetEpochUnbondingRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_111.QueryGetEpochUnbondingRecordRequest>): _111.QueryGetEpochUnbondingRecordRequest;
        };
        QueryGetEpochUnbondingRecordResponse: {
            encode(message: _111.QueryGetEpochUnbondingRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_111.QueryGetEpochUnbondingRecordResponse>): _111.QueryGetEpochUnbondingRecordResponse;
        };
        QueryAllEpochUnbondingRecordRequest: {
            encode(message: _111.QueryAllEpochUnbondingRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_111.QueryAllEpochUnbondingRecordRequest>): _111.QueryAllEpochUnbondingRecordRequest;
        };
        QueryAllEpochUnbondingRecordResponse: {
            encode(message: _111.QueryAllEpochUnbondingRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_111.QueryAllEpochUnbondingRecordResponse>): _111.QueryAllEpochUnbondingRecordResponse;
        };
        depositRecord_StatusFromJSON(object: any): _110.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _110.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _110.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _110.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _110.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _110.HostZoneUnbonding_Status): string;
        DepositRecord_Status: typeof _110.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _110.DepositRecord_StatusSDKType;
        DepositRecord_Source: typeof _110.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _110.DepositRecord_SourceSDKType;
        HostZoneUnbonding_Status: typeof _110.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _110.HostZoneUnbonding_StatusSDKType;
        UserRedemptionRecord: {
            encode(message: _110.UserRedemptionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.UserRedemptionRecord;
            fromPartial(object: Partial<_110.UserRedemptionRecord>): _110.UserRedemptionRecord;
        };
        Params: {
            encode(_: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
            fromPartial(_: Partial<_110.Params>): _110.Params;
        };
        RecordsPacketData: {
            encode(message: _110.RecordsPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.RecordsPacketData;
            fromPartial(object: Partial<_110.RecordsPacketData>): _110.RecordsPacketData;
        };
        NoData: {
            encode(_: _110.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.NoData;
            fromPartial(_: Partial<_110.NoData>): _110.NoData;
        };
        DepositRecord: {
            encode(message: _110.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DepositRecord;
            fromPartial(object: Partial<_110.DepositRecord>): _110.DepositRecord;
        };
        HostZoneUnbonding: {
            encode(message: _110.HostZoneUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.HostZoneUnbonding;
            fromPartial(object: Partial<_110.HostZoneUnbonding>): _110.HostZoneUnbonding;
        };
        EpochUnbondingRecord: {
            encode(message: _110.EpochUnbondingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.EpochUnbondingRecord;
            fromPartial(object: Partial<_110.EpochUnbondingRecord>): _110.EpochUnbondingRecord;
        };
        GenesisState: {
            encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
            fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
        };
        TransferCallback: {
            encode(message: _109.TransferCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.TransferCallback;
            fromPartial(object: Partial<_109.TransferCallback>): _109.TransferCallback;
        };
    };
    const stakeibc: {
        LCDQueryClient: typeof _144.LCDQueryClient;
        validator_ValidatorStatusFromJSON(object: any): _122.Validator_ValidatorStatus;
        validator_ValidatorStatusToJSON(object: _122.Validator_ValidatorStatus): string;
        Validator_ValidatorStatus: typeof _122.Validator_ValidatorStatus;
        Validator_ValidatorStatusSDKType: typeof _122.Validator_ValidatorStatusSDKType;
        ValidatorExchangeRate: {
            encode(message: _122.ValidatorExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ValidatorExchangeRate;
            fromPartial(object: Partial<_122.ValidatorExchangeRate>): _122.ValidatorExchangeRate;
        };
        Validator: {
            encode(message: _122.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Validator;
            fromPartial(object: Partial<_122.Validator>): _122.Validator;
        };
        MsgLiquidStake: {
            encode(message: _121.MsgLiquidStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgLiquidStake;
            fromPartial(object: Partial<_121.MsgLiquidStake>): _121.MsgLiquidStake;
        };
        MsgLiquidStakeResponse: {
            encode(_: _121.MsgLiquidStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgLiquidStakeResponse;
            fromPartial(_: Partial<_121.MsgLiquidStakeResponse>): _121.MsgLiquidStakeResponse;
        };
        MsgClearBalance: {
            encode(message: _121.MsgClearBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgClearBalance;
            fromPartial(object: Partial<_121.MsgClearBalance>): _121.MsgClearBalance;
        };
        MsgClearBalanceResponse: {
            encode(_: _121.MsgClearBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgClearBalanceResponse;
            fromPartial(_: Partial<_121.MsgClearBalanceResponse>): _121.MsgClearBalanceResponse;
        };
        MsgRedeemStake: {
            encode(message: _121.MsgRedeemStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgRedeemStake;
            fromPartial(object: Partial<_121.MsgRedeemStake>): _121.MsgRedeemStake;
        };
        MsgRedeemStakeResponse: {
            encode(_: _121.MsgRedeemStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_121.MsgRedeemStakeResponse>): _121.MsgRedeemStakeResponse;
        };
        MsgRegisterHostZone: {
            encode(message: _121.MsgRegisterHostZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgRegisterHostZone;
            fromPartial(object: Partial<_121.MsgRegisterHostZone>): _121.MsgRegisterHostZone;
        };
        MsgRegisterHostZoneResponse: {
            encode(_: _121.MsgRegisterHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_121.MsgRegisterHostZoneResponse>): _121.MsgRegisterHostZoneResponse;
        };
        MsgClaimUndelegatedTokens: {
            encode(message: _121.MsgClaimUndelegatedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_121.MsgClaimUndelegatedTokens>): _121.MsgClaimUndelegatedTokens;
        };
        MsgClaimUndelegatedTokensResponse: {
            encode(_: _121.MsgClaimUndelegatedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_121.MsgClaimUndelegatedTokensResponse>): _121.MsgClaimUndelegatedTokensResponse;
        };
        MsgRebalanceValidators: {
            encode(message: _121.MsgRebalanceValidators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgRebalanceValidators;
            fromPartial(object: Partial<_121.MsgRebalanceValidators>): _121.MsgRebalanceValidators;
        };
        MsgRebalanceValidatorsResponse: {
            encode(_: _121.MsgRebalanceValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_121.MsgRebalanceValidatorsResponse>): _121.MsgRebalanceValidatorsResponse;
        };
        MsgAddValidator: {
            encode(message: _121.MsgAddValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgAddValidator;
            fromPartial(object: Partial<_121.MsgAddValidator>): _121.MsgAddValidator;
        };
        MsgAddValidatorResponse: {
            encode(_: _121.MsgAddValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgAddValidatorResponse;
            fromPartial(_: Partial<_121.MsgAddValidatorResponse>): _121.MsgAddValidatorResponse;
        };
        MsgChangeValidatorWeight: {
            encode(message: _121.MsgChangeValidatorWeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgChangeValidatorWeight;
            fromPartial(object: Partial<_121.MsgChangeValidatorWeight>): _121.MsgChangeValidatorWeight;
        };
        MsgChangeValidatorWeightResponse: {
            encode(_: _121.MsgChangeValidatorWeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgChangeValidatorWeightResponse;
            fromPartial(_: Partial<_121.MsgChangeValidatorWeightResponse>): _121.MsgChangeValidatorWeightResponse;
        };
        MsgDeleteValidator: {
            encode(message: _121.MsgDeleteValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgDeleteValidator;
            fromPartial(object: Partial<_121.MsgDeleteValidator>): _121.MsgDeleteValidator;
        };
        MsgDeleteValidatorResponse: {
            encode(_: _121.MsgDeleteValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_121.MsgDeleteValidatorResponse>): _121.MsgDeleteValidatorResponse;
        };
        MsgRestoreInterchainAccount: {
            encode(message: _121.MsgRestoreInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_121.MsgRestoreInterchainAccount>): _121.MsgRestoreInterchainAccount;
        };
        MsgRestoreInterchainAccountResponse: {
            encode(_: _121.MsgRestoreInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_121.MsgRestoreInterchainAccountResponse>): _121.MsgRestoreInterchainAccountResponse;
        };
        MsgUpdateValidatorSharesExchRate: {
            encode(message: _121.MsgUpdateValidatorSharesExchRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_121.MsgUpdateValidatorSharesExchRate>): _121.MsgUpdateValidatorSharesExchRate;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            encode(_: _121.MsgUpdateValidatorSharesExchRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_121.MsgUpdateValidatorSharesExchRateResponse>): _121.MsgUpdateValidatorSharesExchRateResponse;
        };
        MsgResetUnbondingRecordEpochNumbers: {
            encode(message: _121.MsgResetUnbondingRecordEpochNumbers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgResetUnbondingRecordEpochNumbers;
            fromPartial(object: Partial<_121.MsgResetUnbondingRecordEpochNumbers>): _121.MsgResetUnbondingRecordEpochNumbers;
        };
        MsgResetUnbondingRecordEpochNumbersResponse: {
            encode(_: _121.MsgResetUnbondingRecordEpochNumbersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgResetUnbondingRecordEpochNumbersResponse;
            fromPartial(_: Partial<_121.MsgResetUnbondingRecordEpochNumbersResponse>): _121.MsgResetUnbondingRecordEpochNumbersResponse;
        };
        QueryInterchainAccountFromAddressRequest: {
            encode(message: _120.QueryInterchainAccountFromAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_120.QueryInterchainAccountFromAddressRequest>): _120.QueryInterchainAccountFromAddressRequest;
        };
        QueryInterchainAccountFromAddressResponse: {
            encode(message: _120.QueryInterchainAccountFromAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_120.QueryInterchainAccountFromAddressResponse>): _120.QueryInterchainAccountFromAddressResponse;
        };
        QueryParamsRequest: {
            encode(_: _120.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryParamsRequest;
            fromPartial(_: Partial<_120.QueryParamsRequest>): _120.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _120.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryParamsResponse;
            fromPartial(object: Partial<_120.QueryParamsResponse>): _120.QueryParamsResponse;
        };
        QueryGetValidatorsRequest: {
            encode(message: _120.QueryGetValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_120.QueryGetValidatorsRequest>): _120.QueryGetValidatorsRequest;
        };
        QueryGetValidatorsResponse: {
            encode(message: _120.QueryGetValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_120.QueryGetValidatorsResponse>): _120.QueryGetValidatorsResponse;
        };
        QueryGetHostZoneRequest: {
            encode(message: _120.QueryGetHostZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_120.QueryGetHostZoneRequest>): _120.QueryGetHostZoneRequest;
        };
        QueryGetHostZoneResponse: {
            encode(message: _120.QueryGetHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_120.QueryGetHostZoneResponse>): _120.QueryGetHostZoneResponse;
        };
        QueryAllHostZoneRequest: {
            encode(message: _120.QueryAllHostZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_120.QueryAllHostZoneRequest>): _120.QueryAllHostZoneRequest;
        };
        QueryAllHostZoneResponse: {
            encode(message: _120.QueryAllHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_120.QueryAllHostZoneResponse>): _120.QueryAllHostZoneResponse;
        };
        QueryModuleAddressRequest: {
            encode(message: _120.QueryModuleAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryModuleAddressRequest;
            fromPartial(object: Partial<_120.QueryModuleAddressRequest>): _120.QueryModuleAddressRequest;
        };
        QueryModuleAddressResponse: {
            encode(message: _120.QueryModuleAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryModuleAddressResponse;
            fromPartial(object: Partial<_120.QueryModuleAddressResponse>): _120.QueryModuleAddressResponse;
        };
        QueryGetEpochTrackerRequest: {
            encode(message: _120.QueryGetEpochTrackerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_120.QueryGetEpochTrackerRequest>): _120.QueryGetEpochTrackerRequest;
        };
        QueryGetEpochTrackerResponse: {
            encode(message: _120.QueryGetEpochTrackerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_120.QueryGetEpochTrackerResponse>): _120.QueryGetEpochTrackerResponse;
        };
        QueryAllEpochTrackerRequest: {
            encode(_: _120.QueryAllEpochTrackerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_120.QueryAllEpochTrackerRequest>): _120.QueryAllEpochTrackerRequest;
        };
        QueryAllEpochTrackerResponse: {
            encode(message: _120.QueryAllEpochTrackerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_120.QueryAllEpochTrackerResponse>): _120.QueryAllEpochTrackerResponse;
        };
        QueryGetNextPacketSequenceRequest: {
            encode(message: _120.QueryGetNextPacketSequenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_120.QueryGetNextPacketSequenceRequest>): _120.QueryGetNextPacketSequenceRequest;
        };
        QueryGetNextPacketSequenceResponse: {
            encode(message: _120.QueryGetNextPacketSequenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_120.QueryGetNextPacketSequenceResponse>): _120.QueryGetNextPacketSequenceResponse;
        };
        Params_ZoneComAddressEntry: {
            encode(message: _119.Params_ZoneComAddressEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Params_ZoneComAddressEntry;
            fromPartial(object: Partial<_119.Params_ZoneComAddressEntry>): _119.Params_ZoneComAddressEntry;
        };
        Params: {
            encode(message: _119.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Params;
            fromPartial(object: Partial<_119.Params>): _119.Params;
        };
        StakeibcPacketData: {
            encode(message: _118.StakeibcPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.StakeibcPacketData;
            fromPartial(object: Partial<_118.StakeibcPacketData>): _118.StakeibcPacketData;
        };
        NoData: {
            encode(_: _118.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.NoData;
            fromPartial(_: Partial<_118.NoData>): _118.NoData;
        };
        iCAAccountTypeFromJSON(object: any): _117.ICAAccountType;
        iCAAccountTypeToJSON(object: _117.ICAAccountType): string;
        ICAAccountType: typeof _117.ICAAccountType;
        ICAAccountTypeSDKType: typeof _117.ICAAccountTypeSDKType;
        ICAAccount: {
            encode(message: _117.ICAAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ICAAccount;
            fromPartial(object: Partial<_117.ICAAccount>): _117.ICAAccount;
        };
        HostZone: {
            encode(message: _116.HostZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.HostZone;
            fromPartial(object: Partial<_116.HostZone>): _116.HostZone;
        };
        AddValidatorProposal: {
            encode(message: _115.AddValidatorProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.AddValidatorProposal;
            fromPartial(object: Partial<_115.AddValidatorProposal>): _115.AddValidatorProposal;
        };
        GenesisState: {
            encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
            fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
        };
        EpochTracker: {
            encode(message: _113.EpochTracker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EpochTracker;
            fromPartial(object: Partial<_113.EpochTracker>): _113.EpochTracker;
        };
        SplitDelegation: {
            encode(message: _112.SplitDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.SplitDelegation;
            fromPartial(object: Partial<_112.SplitDelegation>): _112.SplitDelegation;
        };
        DelegateCallback: {
            encode(message: _112.DelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DelegateCallback;
            fromPartial(object: Partial<_112.DelegateCallback>): _112.DelegateCallback;
        };
        ClaimCallback: {
            encode(message: _112.ClaimCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ClaimCallback;
            fromPartial(object: Partial<_112.ClaimCallback>): _112.ClaimCallback;
        };
        ReinvestCallback: {
            encode(message: _112.ReinvestCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ReinvestCallback;
            fromPartial(object: Partial<_112.ReinvestCallback>): _112.ReinvestCallback;
        };
        UndelegateCallback: {
            encode(message: _112.UndelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.UndelegateCallback;
            fromPartial(object: Partial<_112.UndelegateCallback>): _112.UndelegateCallback;
        };
        RedemptionCallback: {
            encode(message: _112.RedemptionCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.RedemptionCallback;
            fromPartial(object: Partial<_112.RedemptionCallback>): _112.RedemptionCallback;
        };
        Rebalancing: {
            encode(message: _112.Rebalancing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Rebalancing;
            fromPartial(object: Partial<_112.Rebalancing>): _112.Rebalancing;
        };
        RebalanceCallback: {
            encode(message: _112.RebalanceCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.RebalanceCallback;
            fromPartial(object: Partial<_112.RebalanceCallback>): _112.RebalanceCallback;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            encode(message: _124.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.BaseVestingAccount;
            fromPartial(object: Partial<_124.BaseVestingAccount>): _124.BaseVestingAccount;
        };
        Period: {
            encode(message: _124.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Period;
            fromPartial(object: Partial<_124.Period>): _124.Period;
        };
        StridePeriodicVestingAccount: {
            encode(message: _124.StridePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_124.StridePeriodicVestingAccount>): _124.StridePeriodicVestingAccount;
        };
    };
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
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
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
            stride: {
                claim: _139.LCDQueryClient;
                epochs: _140.LCDQueryClient;
                icacallbacks: _141.LCDQueryClient;
                mint: {
                    v1beta1: _142.LCDQueryClient;
                };
                records: _143.LCDQueryClient;
                stakeibc: _144.LCDQueryClient;
            };
        }>;
    };
}
