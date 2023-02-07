import * as _0 from "./auth/v1beta1/auth";
import * as _1 from "./auth/v1beta1/genesis";
import * as _2 from "./auth/v1beta1/query";
import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/reflection/v1beta1/reflection";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/snapshots/v1beta1/snapshot";
import * as _19 from "./base/store/v1beta1/commit_info";
import * as _20 from "./base/store/v1beta1/listening";
import * as _21 from "./base/tendermint/v1beta1/query";
import * as _22 from "./base/v1beta1/coin";
import * as _23 from "./capability/v1beta1/capability";
import * as _24 from "./capability/v1beta1/genesis";
import * as _25 from "./crisis/v1beta1/genesis";
import * as _26 from "./crisis/v1beta1/tx";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/multisig/keys";
import * as _29 from "./crypto/secp256k1/keys";
import * as _30 from "./crypto/secp256r1/keys";
import * as _31 from "./distribution/v1beta1/distribution";
import * as _32 from "./distribution/v1beta1/genesis";
import * as _33 from "./distribution/v1beta1/query";
import * as _34 from "./distribution/v1beta1/tx";
import * as _35 from "./evidence/v1beta1/evidence";
import * as _36 from "./evidence/v1beta1/genesis";
import * as _37 from "./evidence/v1beta1/query";
import * as _38 from "./evidence/v1beta1/tx";
import * as _39 from "./feegrant/v1beta1/feegrant";
import * as _40 from "./feegrant/v1beta1/genesis";
import * as _41 from "./feegrant/v1beta1/query";
import * as _42 from "./feegrant/v1beta1/tx";
import * as _43 from "./genutil/v1beta1/genesis";
import * as _44 from "./gov/v1beta1/genesis";
import * as _45 from "./gov/v1beta1/gov";
import * as _46 from "./gov/v1beta1/query";
import * as _47 from "./gov/v1beta1/tx";
import * as _48 from "./mint/v1beta1/genesis";
import * as _49 from "./mint/v1beta1/mint";
import * as _50 from "./mint/v1beta1/query";
import * as _51 from "./params/v1beta1/params";
import * as _52 from "./params/v1beta1/query";
import * as _53 from "./slashing/v1beta1/genesis";
import * as _54 from "./slashing/v1beta1/query";
import * as _55 from "./slashing/v1beta1/slashing";
import * as _56 from "./slashing/v1beta1/tx";
import * as _57 from "./staking/v1beta1/authz";
import * as _58 from "./staking/v1beta1/genesis";
import * as _59 from "./staking/v1beta1/query";
import * as _60 from "./staking/v1beta1/staking";
import * as _61 from "./staking/v1beta1/tx";
import * as _62 from "./tx/signing/v1beta1/signing";
import * as _63 from "./tx/v1beta1/service";
import * as _64 from "./tx/v1beta1/tx";
import * as _65 from "./upgrade/v1beta1/query";
import * as _66 from "./upgrade/v1beta1/upgrade";
import * as _67 from "./vesting/v1beta1/tx";
import * as _68 from "./vesting/v1beta1/vesting";
import * as _90 from "./auth/v1beta1/query.lcd";
import * as _91 from "./authz/v1beta1/query.lcd";
import * as _92 from "./bank/v1beta1/query.lcd";
import * as _93 from "./base/tendermint/v1beta1/query.lcd";
import * as _94 from "./distribution/v1beta1/query.lcd";
import * as _95 from "./evidence/v1beta1/query.lcd";
import * as _96 from "./feegrant/v1beta1/query.lcd";
import * as _97 from "./gov/v1beta1/query.lcd";
import * as _98 from "./mint/v1beta1/query.lcd";
import * as _99 from "./params/v1beta1/query.lcd";
import * as _100 from "./slashing/v1beta1/query.lcd";
import * as _101 from "./staking/v1beta1/query.lcd";
import * as _102 from "./tx/v1beta1/service.lcd";
import * as _103 from "./upgrade/v1beta1/query.lcd";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            LCDQueryClient: typeof _90.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _2.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAccountsRequest;
                fromPartial(object: Partial<_2.QueryAccountsRequest>): _2.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _2.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAccountsResponse;
                fromPartial(object: Partial<_2.QueryAccountsResponse>): _2.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _2.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAccountRequest;
                fromPartial(object: Partial<_2.QueryAccountRequest>): _2.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _2.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAccountResponse;
                fromPartial(object: Partial<_2.QueryAccountResponse>): _2.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            };
            BaseAccount: {
                encode(message: _0.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BaseAccount;
                fromPartial(object: Partial<_0.BaseAccount>): _0.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _0.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ModuleAccount;
                fromPartial(object: Partial<_0.ModuleAccount>): _0.ModuleAccount;
            };
            Params: {
                encode(message: _0.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Params;
                fromPartial(object: Partial<_0.Params>): _0.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            LCDQueryClient: typeof _91.LCDQueryClient;
            MsgGrant: {
                encode(message: _7.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgGrant;
                fromPartial(object: Partial<_7.MsgGrant>): _7.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _7.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgExecResponse;
                fromPartial(object: Partial<_7.MsgExecResponse>): _7.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _7.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgExec;
                fromPartial(object: Partial<_7.MsgExec>): _7.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _7.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgGrantResponse;
                fromPartial(_: Partial<_7.MsgGrantResponse>): _7.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _7.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgRevoke;
                fromPartial(object: Partial<_7.MsgRevoke>): _7.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _7.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgRevokeResponse;
                fromPartial(_: Partial<_7.MsgRevokeResponse>): _7.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _6.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGrantsRequest;
                fromPartial(object: Partial<_6.QueryGrantsRequest>): _6.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _6.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGrantsResponse;
                fromPartial(object: Partial<_6.QueryGrantsResponse>): _6.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _6.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_6.QueryGranterGrantsRequest>): _6.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _6.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_6.QueryGranterGrantsResponse>): _6.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _6.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_6.QueryGranteeGrantsRequest>): _6.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _6.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_6.QueryGranteeGrantsResponse>): _6.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            };
            EventGrant: {
                encode(message: _4.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventGrant;
                fromPartial(object: Partial<_4.EventGrant>): _4.EventGrant;
            };
            EventRevoke: {
                encode(message: _4.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventRevoke;
                fromPartial(object: Partial<_4.EventRevoke>): _4.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _3.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenericAuthorization;
                fromPartial(object: Partial<_3.GenericAuthorization>): _3.GenericAuthorization;
            };
            Grant: {
                encode(message: _3.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Grant;
                fromPartial(object: Partial<_3.Grant>): _3.Grant;
            };
            GrantAuthorization: {
                encode(message: _3.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GrantAuthorization;
                fromPartial(object: Partial<_3.GrantAuthorization>): _3.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            LCDQueryClient: typeof _92.LCDQueryClient;
            MsgSend: {
                encode(message: _12.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSend;
                fromPartial(object: Partial<_12.MsgSend>): _12.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _12.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSendResponse;
                fromPartial(_: Partial<_12.MsgSendResponse>): _12.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _12.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgMultiSend;
                fromPartial(object: Partial<_12.MsgMultiSend>): _12.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _12.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgMultiSendResponse;
                fromPartial(_: Partial<_12.MsgMultiSendResponse>): _12.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _11.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryBalanceRequest;
                fromPartial(object: Partial<_11.QueryBalanceRequest>): _11.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _11.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryBalanceResponse;
                fromPartial(object: Partial<_11.QueryBalanceResponse>): _11.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _11.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAllBalancesRequest;
                fromPartial(object: Partial<_11.QueryAllBalancesRequest>): _11.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _11.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAllBalancesResponse;
                fromPartial(object: Partial<_11.QueryAllBalancesResponse>): _11.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _11.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_11.QuerySpendableBalancesRequest>): _11.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _11.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_11.QuerySpendableBalancesResponse>): _11.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _11.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_11.QueryTotalSupplyRequest>): _11.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _11.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_11.QueryTotalSupplyResponse>): _11.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _11.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySupplyOfRequest;
                fromPartial(object: Partial<_11.QuerySupplyOfRequest>): _11.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _11.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySupplyOfResponse;
                fromPartial(object: Partial<_11.QuerySupplyOfResponse>): _11.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _11.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsRequest;
                fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _11.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsResponse;
                fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _11.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_11.QueryDenomsMetadataRequest>): _11.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _11.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_11.QueryDenomsMetadataResponse>): _11.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _11.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_11.QueryDenomMetadataRequest>): _11.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _11.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_11.QueryDenomMetadataResponse>): _11.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
            };
            Balance: {
                encode(message: _10.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Balance;
                fromPartial(object: Partial<_10.Balance>): _10.Balance;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
            };
            SendEnabled: {
                encode(message: _9.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SendEnabled;
                fromPartial(object: Partial<_9.SendEnabled>): _9.SendEnabled;
            };
            Input: {
                encode(message: _9.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Input;
                fromPartial(object: Partial<_9.Input>): _9.Input;
            };
            Output: {
                encode(message: _9.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Output;
                fromPartial(object: Partial<_9.Output>): _9.Output;
            };
            Supply: {
                encode(message: _9.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Supply;
                fromPartial(object: Partial<_9.Supply>): _9.Supply;
            };
            DenomUnit: {
                encode(message: _9.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DenomUnit;
                fromPartial(object: Partial<_9.DenomUnit>): _9.DenomUnit;
            };
            Metadata: {
                encode(message: _9.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Metadata;
                fromPartial(object: Partial<_9.Metadata>): _9.Metadata;
            };
            SendAuthorization: {
                encode(message: _8.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SendAuthorization;
                fromPartial(object: Partial<_8.SendAuthorization>): _8.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _13.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxResponse;
                    fromPartial(object: Partial<_13.TxResponse>): _13.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _13.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.ABCIMessageLog;
                    fromPartial(object: Partial<_13.ABCIMessageLog>): _13.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _13.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.StringEvent;
                    fromPartial(object: Partial<_13.StringEvent>): _13.StringEvent;
                };
                Attribute: {
                    encode(message: _13.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Attribute;
                    fromPartial(object: Partial<_13.Attribute>): _13.Attribute;
                };
                GasInfo: {
                    encode(message: _13.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GasInfo;
                    fromPartial(object: Partial<_13.GasInfo>): _13.GasInfo;
                };
                Result: {
                    encode(message: _13.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Result;
                    fromPartial(object: Partial<_13.Result>): _13.Result;
                };
                SimulationResponse: {
                    encode(message: _13.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SimulationResponse;
                    fromPartial(object: Partial<_13.SimulationResponse>): _13.SimulationResponse;
                };
                MsgData: {
                    encode(message: _13.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgData;
                    fromPartial(object: Partial<_13.MsgData>): _13.MsgData;
                };
                TxMsgData: {
                    encode(message: _13.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxMsgData;
                    fromPartial(object: Partial<_13.TxMsgData>): _13.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _13.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SearchTxsResult;
                    fromPartial(object: Partial<_13.SearchTxsResult>): _13.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _14.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Pairs;
                    fromPartial(object: Partial<_14.Pairs>): _14.Pairs;
                };
                Pair: {
                    encode(message: _14.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Pair;
                    fromPartial(object: Partial<_14.Pair>): _14.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _15.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PageRequest;
                    fromPartial(object: Partial<_15.PageRequest>): _15.PageRequest;
                };
                PageResponse: {
                    encode(message: _15.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PageResponse;
                    fromPartial(object: Partial<_15.PageResponse>): _15.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _16.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_16.ListAllInterfacesRequest>): _16.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _16.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_16.ListAllInterfacesResponse>): _16.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _16.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ListImplementationsRequest;
                    fromPartial(object: Partial<_16.ListImplementationsRequest>): _16.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _16.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ListImplementationsResponse;
                    fromPartial(object: Partial<_16.ListImplementationsResponse>): _16.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _17.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppDescriptor;
                    fromPartial(object: Partial<_17.AppDescriptor>): _17.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _17.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxDescriptor;
                    fromPartial(object: Partial<_17.TxDescriptor>): _17.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _17.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AuthnDescriptor;
                    fromPartial(object: Partial<_17.AuthnDescriptor>): _17.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _17.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SigningModeDescriptor;
                    fromPartial(object: Partial<_17.SigningModeDescriptor>): _17.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _17.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ChainDescriptor;
                    fromPartial(object: Partial<_17.ChainDescriptor>): _17.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _17.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.CodecDescriptor;
                    fromPartial(object: Partial<_17.CodecDescriptor>): _17.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _17.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceDescriptor;
                    fromPartial(object: Partial<_17.InterfaceDescriptor>): _17.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _17.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_17.InterfaceImplementerDescriptor>): _17.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _17.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_17.InterfaceAcceptingMessageDescriptor>): _17.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _17.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigurationDescriptor;
                    fromPartial(object: Partial<_17.ConfigurationDescriptor>): _17.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _17.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDescriptor;
                    fromPartial(object: Partial<_17.MsgDescriptor>): _17.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _17.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_17.GetAuthnDescriptorRequest>): _17.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _17.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_17.GetAuthnDescriptorResponse>): _17.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _17.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_17.GetChainDescriptorRequest>): _17.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _17.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_17.GetChainDescriptorResponse>): _17.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _17.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_17.GetCodecDescriptorRequest>): _17.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _17.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_17.GetCodecDescriptorResponse>): _17.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _17.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_17.GetConfigurationDescriptorRequest>): _17.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _17.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_17.GetConfigurationDescriptorResponse>): _17.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _17.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_17.GetQueryServicesDescriptorRequest>): _17.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _17.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_17.GetQueryServicesDescriptorResponse>): _17.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _17.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_17.GetTxDescriptorRequest>): _17.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _17.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_17.GetTxDescriptorResponse>): _17.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _17.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServicesDescriptor;
                    fromPartial(object: Partial<_17.QueryServicesDescriptor>): _17.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _17.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServiceDescriptor;
                    fromPartial(object: Partial<_17.QueryServiceDescriptor>): _17.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _17.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryMethodDescriptor;
                    fromPartial(object: Partial<_17.QueryMethodDescriptor>): _17.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _18.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Snapshot;
                    fromPartial(object: Partial<_18.Snapshot>): _18.Snapshot;
                };
                Metadata: {
                    encode(message: _18.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Metadata;
                    fromPartial(object: Partial<_18.Metadata>): _18.Metadata;
                };
                SnapshotItem: {
                    encode(message: _18.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotItem;
                    fromPartial(object: Partial<_18.SnapshotItem>): _18.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _18.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotStoreItem;
                    fromPartial(object: Partial<_18.SnapshotStoreItem>): _18.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _18.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotIAVLItem;
                    fromPartial(object: Partial<_18.SnapshotIAVLItem>): _18.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _18.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_18.SnapshotExtensionMeta>): _18.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _18.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_18.SnapshotExtensionPayload>): _18.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _20.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.StoreKVPair;
                    fromPartial(object: Partial<_20.StoreKVPair>): _20.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _19.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CommitInfo;
                    fromPartial(object: Partial<_19.CommitInfo>): _19.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _19.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.StoreInfo;
                    fromPartial(object: Partial<_19.StoreInfo>): _19.StoreInfo;
                };
                CommitID: {
                    encode(message: _19.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CommitID;
                    fromPartial(object: Partial<_19.CommitID>): _19.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                LCDQueryClient: typeof _93.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _21.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_21.GetValidatorSetByHeightRequest>): _21.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _21.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_21.GetValidatorSetByHeightResponse>): _21.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _21.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_21.GetLatestValidatorSetRequest>): _21.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _21.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_21.GetLatestValidatorSetResponse>): _21.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _21.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Validator;
                    fromPartial(object: Partial<_21.Validator>): _21.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _21.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_21.GetBlockByHeightRequest>): _21.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _21.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_21.GetBlockByHeightResponse>): _21.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _21.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetLatestBlockRequest;
                    fromPartial(_: Partial<_21.GetLatestBlockRequest>): _21.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _21.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetLatestBlockResponse;
                    fromPartial(object: Partial<_21.GetLatestBlockResponse>): _21.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _21.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetSyncingRequest;
                    fromPartial(_: Partial<_21.GetSyncingRequest>): _21.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _21.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetSyncingResponse;
                    fromPartial(object: Partial<_21.GetSyncingResponse>): _21.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _21.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetNodeInfoRequest;
                    fromPartial(_: Partial<_21.GetNodeInfoRequest>): _21.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _21.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GetNodeInfoResponse;
                    fromPartial(object: Partial<_21.GetNodeInfoResponse>): _21.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _21.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.VersionInfo;
                    fromPartial(object: Partial<_21.VersionInfo>): _21.VersionInfo;
                };
                Module: {
                    encode(message: _21.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Module;
                    fromPartial(object: Partial<_21.Module>): _21.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _22.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Coin;
                fromPartial(object: Partial<_22.Coin>): _22.Coin;
            };
            DecCoin: {
                encode(message: _22.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DecCoin;
                fromPartial(object: Partial<_22.DecCoin>): _22.DecCoin;
            };
            IntProto: {
                encode(message: _22.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.IntProto;
                fromPartial(object: Partial<_22.IntProto>): _22.IntProto;
            };
            DecProto: {
                encode(message: _22.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DecProto;
                fromPartial(object: Partial<_22.DecProto>): _22.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _24.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisOwners;
                fromPartial(object: Partial<_24.GenesisOwners>): _24.GenesisOwners;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
            };
            Capability: {
                encode(message: _23.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Capability;
                fromPartial(object: Partial<_23.Capability>): _23.Capability;
            };
            Owner: {
                encode(message: _23.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Owner;
                fromPartial(object: Partial<_23.Owner>): _23.Owner;
            };
            CapabilityOwners: {
                encode(message: _23.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CapabilityOwners;
                fromPartial(object: Partial<_23.CapabilityOwners>): _23.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgVerifyInvariant: {
                encode(message: _26.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgVerifyInvariant;
                fromPartial(object: Partial<_26.MsgVerifyInvariant>): _26.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _26.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_26.MsgVerifyInvariantResponse>): _26.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _27.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PubKey;
                fromPartial(object: Partial<_27.PubKey>): _27.PubKey;
            };
            PrivKey: {
                encode(message: _27.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PrivKey;
                fromPartial(object: Partial<_27.PrivKey>): _27.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _28.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.LegacyAminoPubKey;
                fromPartial(object: Partial<_28.LegacyAminoPubKey>): _28.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _29.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.PubKey;
                fromPartial(object: Partial<_29.PubKey>): _29.PubKey;
            };
            PrivKey: {
                encode(message: _29.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.PrivKey;
                fromPartial(object: Partial<_29.PrivKey>): _29.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _30.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PubKey;
                fromPartial(object: Partial<_30.PubKey>): _30.PubKey;
            };
            PrivKey: {
                encode(message: _30.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PrivKey;
                fromPartial(object: Partial<_30.PrivKey>): _30.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            LCDQueryClient: typeof _94.LCDQueryClient;
            MsgSetWithdrawAddress: {
                encode(message: _34.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_34.MsgSetWithdrawAddress>): _34.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _34.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_34.MsgSetWithdrawAddressResponse>): _34.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _34.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_34.MsgWithdrawDelegatorReward>): _34.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _34.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_34.MsgWithdrawDelegatorRewardResponse>): _34.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _34.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_34.MsgWithdrawValidatorCommission>): _34.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _34.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_34.MsgWithdrawValidatorCommissionResponse>): _34.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _34.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgFundCommunityPool;
                fromPartial(object: Partial<_34.MsgFundCommunityPool>): _34.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _34.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_34.MsgFundCommunityPoolResponse>): _34.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _33.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_33.QueryValidatorOutstandingRewardsRequest>): _33.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _33.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_33.QueryValidatorOutstandingRewardsResponse>): _33.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _33.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_33.QueryValidatorCommissionRequest>): _33.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _33.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_33.QueryValidatorCommissionResponse>): _33.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _33.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_33.QueryValidatorSlashesRequest>): _33.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _33.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_33.QueryValidatorSlashesResponse>): _33.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _33.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_33.QueryDelegationRewardsRequest>): _33.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _33.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_33.QueryDelegationRewardsResponse>): _33.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _33.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_33.QueryDelegationTotalRewardsRequest>): _33.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _33.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_33.QueryDelegationTotalRewardsResponse>): _33.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _33.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorsRequest>): _33.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _33.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorsResponse>): _33.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _33.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_33.QueryDelegatorWithdrawAddressRequest>): _33.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _33.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_33.QueryDelegatorWithdrawAddressResponse>): _33.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _33.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_33.QueryCommunityPoolRequest>): _33.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _33.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_33.QueryCommunityPoolResponse>): _33.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _32.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_32.DelegatorWithdrawInfo>): _32.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _32.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_32.ValidatorOutstandingRewardsRecord>): _32.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _32.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_32.ValidatorAccumulatedCommissionRecord>): _32.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _32.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_32.ValidatorHistoricalRewardsRecord>): _32.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _32.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_32.ValidatorCurrentRewardsRecord>): _32.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _32.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_32.DelegatorStartingInfoRecord>): _32.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _32.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_32.ValidatorSlashEventRecord>): _32.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
            Params: {
                encode(message: _31.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Params;
                fromPartial(object: Partial<_31.Params>): _31.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _31.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_31.ValidatorHistoricalRewards>): _31.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _31.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorCurrentRewards;
                fromPartial(object: Partial<_31.ValidatorCurrentRewards>): _31.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _31.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_31.ValidatorAccumulatedCommission>): _31.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _31.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_31.ValidatorOutstandingRewards>): _31.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _31.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorSlashEvent;
                fromPartial(object: Partial<_31.ValidatorSlashEvent>): _31.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _31.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorSlashEvents;
                fromPartial(object: Partial<_31.ValidatorSlashEvents>): _31.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _31.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.FeePool;
                fromPartial(object: Partial<_31.FeePool>): _31.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _31.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_31.CommunityPoolSpendProposal>): _31.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _31.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DelegatorStartingInfo;
                fromPartial(object: Partial<_31.DelegatorStartingInfo>): _31.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _31.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DelegationDelegatorReward;
                fromPartial(object: Partial<_31.DelegationDelegatorReward>): _31.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _31.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_31.CommunityPoolSpendProposalWithDeposit>): _31.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            LCDQueryClient: typeof _95.LCDQueryClient;
            MsgSubmitEvidence: {
                encode(message: _38.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgSubmitEvidence;
                fromPartial(object: Partial<_38.MsgSubmitEvidence>): _38.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _38.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_38.MsgSubmitEvidenceResponse>): _38.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _37.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryEvidenceRequest;
                fromPartial(object: Partial<_37.QueryEvidenceRequest>): _37.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _37.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryEvidenceResponse;
                fromPartial(object: Partial<_37.QueryEvidenceResponse>): _37.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _37.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_37.QueryAllEvidenceRequest>): _37.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _37.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_37.QueryAllEvidenceResponse>): _37.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisState;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
            };
            Equivocation: {
                encode(message: _35.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Equivocation;
                fromPartial(object: Partial<_35.Equivocation>): _35.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            LCDQueryClient: typeof _96.LCDQueryClient;
            MsgGrantAllowance: {
                encode(message: _42.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgGrantAllowance;
                fromPartial(object: Partial<_42.MsgGrantAllowance>): _42.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _42.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_42.MsgGrantAllowanceResponse>): _42.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _42.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgRevokeAllowance;
                fromPartial(object: Partial<_42.MsgRevokeAllowance>): _42.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _42.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_42.MsgRevokeAllowanceResponse>): _42.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _41.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAllowanceRequest;
                fromPartial(object: Partial<_41.QueryAllowanceRequest>): _41.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _41.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAllowanceResponse;
                fromPartial(object: Partial<_41.QueryAllowanceResponse>): _41.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _41.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAllowancesRequest;
                fromPartial(object: Partial<_41.QueryAllowancesRequest>): _41.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _41.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAllowancesResponse;
                fromPartial(object: Partial<_41.QueryAllowancesResponse>): _41.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _41.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_41.QueryAllowancesByGranterRequest>): _41.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _41.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_41.QueryAllowancesByGranterResponse>): _41.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
            BasicAllowance: {
                encode(message: _39.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BasicAllowance;
                fromPartial(object: Partial<_39.BasicAllowance>): _39.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _39.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PeriodicAllowance;
                fromPartial(object: Partial<_39.PeriodicAllowance>): _39.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _39.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.AllowedMsgAllowance;
                fromPartial(object: Partial<_39.AllowedMsgAllowance>): _39.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _39.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Grant;
                fromPartial(object: Partial<_39.Grant>): _39.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            LCDQueryClient: typeof _97.LCDQueryClient;
            MsgSubmitProposal: {
                encode(message: _47.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSubmitProposal;
                fromPartial(object: Partial<_47.MsgSubmitProposal>): _47.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _47.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_47.MsgSubmitProposalResponse>): _47.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _47.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgVote;
                fromPartial(object: Partial<_47.MsgVote>): _47.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _47.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgVoteResponse;
                fromPartial(_: Partial<_47.MsgVoteResponse>): _47.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _47.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgVoteWeighted;
                fromPartial(object: Partial<_47.MsgVoteWeighted>): _47.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _47.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_47.MsgVoteWeightedResponse>): _47.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _47.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgDeposit;
                fromPartial(object: Partial<_47.MsgDeposit>): _47.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _47.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgDepositResponse;
                fromPartial(_: Partial<_47.MsgDepositResponse>): _47.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _46.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryProposalRequest;
                fromPartial(object: Partial<_46.QueryProposalRequest>): _46.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _46.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryProposalResponse;
                fromPartial(object: Partial<_46.QueryProposalResponse>): _46.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _46.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryProposalsRequest;
                fromPartial(object: Partial<_46.QueryProposalsRequest>): _46.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _46.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryProposalsResponse;
                fromPartial(object: Partial<_46.QueryProposalsResponse>): _46.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _46.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryVoteRequest;
                fromPartial(object: Partial<_46.QueryVoteRequest>): _46.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _46.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryVoteResponse;
                fromPartial(object: Partial<_46.QueryVoteResponse>): _46.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _46.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryVotesRequest;
                fromPartial(object: Partial<_46.QueryVotesRequest>): _46.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _46.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryVotesResponse;
                fromPartial(object: Partial<_46.QueryVotesResponse>): _46.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _46.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryParamsRequest;
                fromPartial(object: Partial<_46.QueryParamsRequest>): _46.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _46.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryParamsResponse;
                fromPartial(object: Partial<_46.QueryParamsResponse>): _46.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _46.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDepositRequest;
                fromPartial(object: Partial<_46.QueryDepositRequest>): _46.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _46.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDepositResponse;
                fromPartial(object: Partial<_46.QueryDepositResponse>): _46.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _46.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDepositsRequest;
                fromPartial(object: Partial<_46.QueryDepositsRequest>): _46.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _46.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDepositsResponse;
                fromPartial(object: Partial<_46.QueryDepositsResponse>): _46.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _46.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryTallyResultRequest;
                fromPartial(object: Partial<_46.QueryTallyResultRequest>): _46.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _46.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryTallyResultResponse;
                fromPartial(object: Partial<_46.QueryTallyResultResponse>): _46.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _45.VoteOption;
            voteOptionToJSON(object: _45.VoteOption): string;
            proposalStatusFromJSON(object: any): _45.ProposalStatus;
            proposalStatusToJSON(object: _45.ProposalStatus): string;
            VoteOption: typeof _45.VoteOption;
            VoteOptionSDKType: typeof _45.VoteOptionSDKType;
            ProposalStatus: typeof _45.ProposalStatus;
            ProposalStatusSDKType: typeof _45.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _45.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.WeightedVoteOption;
                fromPartial(object: Partial<_45.WeightedVoteOption>): _45.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _45.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.TextProposal;
                fromPartial(object: Partial<_45.TextProposal>): _45.TextProposal;
            };
            Deposit: {
                encode(message: _45.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Deposit;
                fromPartial(object: Partial<_45.Deposit>): _45.Deposit;
            };
            Proposal: {
                encode(message: _45.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Proposal;
                fromPartial(object: Partial<_45.Proposal>): _45.Proposal;
            };
            TallyResult: {
                encode(message: _45.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.TallyResult;
                fromPartial(object: Partial<_45.TallyResult>): _45.TallyResult;
            };
            Vote: {
                encode(message: _45.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Vote;
                fromPartial(object: Partial<_45.Vote>): _45.Vote;
            };
            DepositParams: {
                encode(message: _45.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DepositParams;
                fromPartial(object: Partial<_45.DepositParams>): _45.DepositParams;
            };
            VotingParams: {
                encode(message: _45.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.VotingParams;
                fromPartial(object: Partial<_45.VotingParams>): _45.VotingParams;
            };
            TallyParams: {
                encode(message: _45.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.TallyParams;
                fromPartial(object: Partial<_45.TallyParams>): _45.TallyParams;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            LCDQueryClient: typeof _98.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _50.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryParamsRequest;
                fromPartial(_: Partial<_50.QueryParamsRequest>): _50.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _50.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryParamsResponse;
                fromPartial(object: Partial<_50.QueryParamsResponse>): _50.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _50.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryInflationRequest;
                fromPartial(_: Partial<_50.QueryInflationRequest>): _50.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _50.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryInflationResponse;
                fromPartial(object: Partial<_50.QueryInflationResponse>): _50.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _50.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_50.QueryAnnualProvisionsRequest>): _50.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _50.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_50.QueryAnnualProvisionsResponse>): _50.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _49.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Minter;
                fromPartial(object: Partial<_49.Minter>): _49.Minter;
            };
            Params: {
                encode(message: _49.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Params;
                fromPartial(object: Partial<_49.Params>): _49.Params;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            LCDQueryClient: typeof _99.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromPartial(object: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _51.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ParameterChangeProposal;
                fromPartial(object: Partial<_51.ParameterChangeProposal>): _51.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _51.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ParamChange;
                fromPartial(object: Partial<_51.ParamChange>): _51.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            LCDQueryClient: typeof _100.LCDQueryClient;
            MsgUnjail: {
                encode(message: _56.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgUnjail;
                fromPartial(object: Partial<_56.MsgUnjail>): _56.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _56.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgUnjailResponse;
                fromPartial(_: Partial<_56.MsgUnjailResponse>): _56.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _55.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorSigningInfo;
                fromPartial(object: Partial<_55.ValidatorSigningInfo>): _55.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _55.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Params;
                fromPartial(object: Partial<_55.Params>): _55.Params;
            };
            QueryParamsRequest: {
                encode(_: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                fromPartial(_: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _54.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QuerySigningInfoRequest;
                fromPartial(object: Partial<_54.QuerySigningInfoRequest>): _54.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _54.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QuerySigningInfoResponse;
                fromPartial(object: Partial<_54.QuerySigningInfoResponse>): _54.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _54.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QuerySigningInfosRequest;
                fromPartial(object: Partial<_54.QuerySigningInfosRequest>): _54.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _54.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QuerySigningInfosResponse;
                fromPartial(object: Partial<_54.QuerySigningInfosResponse>): _54.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
            };
            SigningInfo: {
                encode(message: _53.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SigningInfo;
                fromPartial(object: Partial<_53.SigningInfo>): _53.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _53.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ValidatorMissedBlocks;
                fromPartial(object: Partial<_53.ValidatorMissedBlocks>): _53.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _53.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MissedBlock;
                fromPartial(object: Partial<_53.MissedBlock>): _53.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            LCDQueryClient: typeof _101.LCDQueryClient;
            MsgCreateValidator: {
                encode(message: _61.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateValidator;
                fromPartial(object: Partial<_61.MsgCreateValidator>): _61.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _61.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_61.MsgCreateValidatorResponse>): _61.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _61.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgEditValidator;
                fromPartial(object: Partial<_61.MsgEditValidator>): _61.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _61.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgEditValidatorResponse;
                fromPartial(_: Partial<_61.MsgEditValidatorResponse>): _61.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _61.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgDelegate;
                fromPartial(object: Partial<_61.MsgDelegate>): _61.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _61.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgDelegateResponse;
                fromPartial(_: Partial<_61.MsgDelegateResponse>): _61.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _61.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgBeginRedelegate;
                fromPartial(object: Partial<_61.MsgBeginRedelegate>): _61.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _61.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_61.MsgBeginRedelegateResponse>): _61.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _61.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUndelegate;
                fromPartial(object: Partial<_61.MsgUndelegate>): _61.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _61.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgUndelegateResponse;
                fromPartial(object: Partial<_61.MsgUndelegateResponse>): _61.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _60.BondStatus;
            bondStatusToJSON(object: _60.BondStatus): string;
            BondStatus: typeof _60.BondStatus;
            BondStatusSDKType: typeof _60.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _60.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.HistoricalInfo;
                fromPartial(object: Partial<_60.HistoricalInfo>): _60.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _60.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.CommissionRates;
                fromPartial(object: Partial<_60.CommissionRates>): _60.CommissionRates;
            };
            Commission: {
                encode(message: _60.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Commission;
                fromPartial(object: Partial<_60.Commission>): _60.Commission;
            };
            Description: {
                encode(message: _60.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Description;
                fromPartial(object: Partial<_60.Description>): _60.Description;
            };
            Validator: {
                encode(message: _60.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Validator;
                fromPartial(object: Partial<_60.Validator>): _60.Validator;
            };
            ValAddresses: {
                encode(message: _60.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ValAddresses;
                fromPartial(object: Partial<_60.ValAddresses>): _60.ValAddresses;
            };
            DVPair: {
                encode(message: _60.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DVPair;
                fromPartial(object: Partial<_60.DVPair>): _60.DVPair;
            };
            DVPairs: {
                encode(message: _60.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DVPairs;
                fromPartial(object: Partial<_60.DVPairs>): _60.DVPairs;
            };
            DVVTriplet: {
                encode(message: _60.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DVVTriplet;
                fromPartial(object: Partial<_60.DVVTriplet>): _60.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _60.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DVVTriplets;
                fromPartial(object: Partial<_60.DVVTriplets>): _60.DVVTriplets;
            };
            Delegation: {
                encode(message: _60.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Delegation;
                fromPartial(object: Partial<_60.Delegation>): _60.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _60.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.UnbondingDelegation;
                fromPartial(object: Partial<_60.UnbondingDelegation>): _60.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _60.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.UnbondingDelegationEntry;
                fromPartial(object: Partial<_60.UnbondingDelegationEntry>): _60.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _60.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.RedelegationEntry;
                fromPartial(object: Partial<_60.RedelegationEntry>): _60.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _60.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Redelegation;
                fromPartial(object: Partial<_60.Redelegation>): _60.Redelegation;
            };
            Params: {
                encode(message: _60.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Params;
                fromPartial(object: Partial<_60.Params>): _60.Params;
            };
            DelegationResponse: {
                encode(message: _60.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.DelegationResponse;
                fromPartial(object: Partial<_60.DelegationResponse>): _60.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _60.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.RedelegationEntryResponse;
                fromPartial(object: Partial<_60.RedelegationEntryResponse>): _60.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _60.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.RedelegationResponse;
                fromPartial(object: Partial<_60.RedelegationResponse>): _60.RedelegationResponse;
            };
            Pool: {
                encode(message: _60.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Pool;
                fromPartial(object: Partial<_60.Pool>): _60.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _59.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorsRequest;
                fromPartial(object: Partial<_59.QueryValidatorsRequest>): _59.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _59.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorsResponse;
                fromPartial(object: Partial<_59.QueryValidatorsResponse>): _59.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _59.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorRequest;
                fromPartial(object: Partial<_59.QueryValidatorRequest>): _59.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _59.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorResponse;
                fromPartial(object: Partial<_59.QueryValidatorResponse>): _59.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _59.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_59.QueryValidatorDelegationsRequest>): _59.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _59.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_59.QueryValidatorDelegationsResponse>): _59.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _59.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_59.QueryValidatorUnbondingDelegationsRequest>): _59.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _59.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_59.QueryValidatorUnbondingDelegationsResponse>): _59.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _59.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegationRequest;
                fromPartial(object: Partial<_59.QueryDelegationRequest>): _59.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _59.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegationResponse;
                fromPartial(object: Partial<_59.QueryDelegationResponse>): _59.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _59.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_59.QueryUnbondingDelegationRequest>): _59.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _59.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_59.QueryUnbondingDelegationResponse>): _59.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _59.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_59.QueryDelegatorDelegationsRequest>): _59.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _59.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_59.QueryDelegatorDelegationsResponse>): _59.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _59.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_59.QueryDelegatorUnbondingDelegationsRequest>): _59.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _59.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_59.QueryDelegatorUnbondingDelegationsResponse>): _59.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _59.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryRedelegationsRequest;
                fromPartial(object: Partial<_59.QueryRedelegationsRequest>): _59.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _59.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryRedelegationsResponse;
                fromPartial(object: Partial<_59.QueryRedelegationsResponse>): _59.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _59.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_59.QueryDelegatorValidatorsRequest>): _59.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _59.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_59.QueryDelegatorValidatorsResponse>): _59.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _59.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_59.QueryDelegatorValidatorRequest>): _59.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _59.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_59.QueryDelegatorValidatorResponse>): _59.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _59.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_59.QueryHistoricalInfoRequest>): _59.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _59.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_59.QueryHistoricalInfoResponse>): _59.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _59.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryPoolRequest;
                fromPartial(_: Partial<_59.QueryPoolRequest>): _59.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _59.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryPoolResponse;
                fromPartial(object: Partial<_59.QueryPoolResponse>): _59.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _59.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsRequest;
                fromPartial(_: Partial<_59.QueryParamsRequest>): _59.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _59.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsResponse;
                fromPartial(object: Partial<_59.QueryParamsResponse>): _59.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _58.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.LastValidatorPower;
                fromPartial(object: Partial<_58.LastValidatorPower>): _58.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _57.AuthorizationType;
            authorizationTypeToJSON(object: _57.AuthorizationType): string;
            AuthorizationType: typeof _57.AuthorizationType;
            AuthorizationTypeSDKType: typeof _57.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _57.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.StakeAuthorization;
                fromPartial(object: Partial<_57.StakeAuthorization>): _57.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _57.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.StakeAuthorization_Validators;
                fromPartial(object: Partial<_57.StakeAuthorization_Validators>): _57.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _62.SignMode;
                signModeToJSON(object: _62.SignMode): string;
                SignMode: typeof _62.SignMode;
                SignModeSDKType: typeof _62.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _62.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.SignatureDescriptors;
                    fromPartial(object: Partial<_62.SignatureDescriptors>): _62.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _62.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.SignatureDescriptor;
                    fromPartial(object: Partial<_62.SignatureDescriptor>): _62.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _62.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_62.SignatureDescriptor_Data>): _62.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _62.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_62.SignatureDescriptor_Data_Single>): _62.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _62.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_62.SignatureDescriptor_Data_Multi>): _62.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _102.LCDQueryClient;
            Tx: {
                encode(message: _64.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Tx;
                fromPartial(object: Partial<_64.Tx>): _64.Tx;
            };
            TxRaw: {
                encode(message: _64.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TxRaw;
                fromPartial(object: Partial<_64.TxRaw>): _64.TxRaw;
            };
            SignDoc: {
                encode(message: _64.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignDoc;
                fromPartial(object: Partial<_64.SignDoc>): _64.SignDoc;
            };
            TxBody: {
                encode(message: _64.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TxBody;
                fromPartial(object: Partial<_64.TxBody>): _64.TxBody;
            };
            AuthInfo: {
                encode(message: _64.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.AuthInfo;
                fromPartial(object: Partial<_64.AuthInfo>): _64.AuthInfo;
            };
            SignerInfo: {
                encode(message: _64.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignerInfo;
                fromPartial(object: Partial<_64.SignerInfo>): _64.SignerInfo;
            };
            ModeInfo: {
                encode(message: _64.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ModeInfo;
                fromPartial(object: Partial<_64.ModeInfo>): _64.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _64.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ModeInfo_Single;
                fromPartial(object: Partial<_64.ModeInfo_Single>): _64.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _64.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ModeInfo_Multi;
                fromPartial(object: Partial<_64.ModeInfo_Multi>): _64.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _64.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Fee;
                fromPartial(object: Partial<_64.Fee>): _64.Fee;
            };
            orderByFromJSON(object: any): _63.OrderBy;
            orderByToJSON(object: _63.OrderBy): string;
            broadcastModeFromJSON(object: any): _63.BroadcastMode;
            broadcastModeToJSON(object: _63.BroadcastMode): string;
            OrderBy: typeof _63.OrderBy;
            OrderBySDKType: typeof _63.OrderBySDKType;
            BroadcastMode: typeof _63.BroadcastMode;
            BroadcastModeSDKType: typeof _63.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _63.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GetTxsEventRequest;
                fromPartial(object: Partial<_63.GetTxsEventRequest>): _63.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _63.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GetTxsEventResponse;
                fromPartial(object: Partial<_63.GetTxsEventResponse>): _63.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _63.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BroadcastTxRequest;
                fromPartial(object: Partial<_63.BroadcastTxRequest>): _63.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _63.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BroadcastTxResponse;
                fromPartial(object: Partial<_63.BroadcastTxResponse>): _63.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _63.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SimulateRequest;
                fromPartial(object: Partial<_63.SimulateRequest>): _63.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _63.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SimulateResponse;
                fromPartial(object: Partial<_63.SimulateResponse>): _63.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _63.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GetTxRequest;
                fromPartial(object: Partial<_63.GetTxRequest>): _63.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _63.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GetTxResponse;
                fromPartial(object: Partial<_63.GetTxResponse>): _63.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _63.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_63.GetBlockWithTxsRequest>): _63.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _63.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_63.GetBlockWithTxsResponse>): _63.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            LCDQueryClient: typeof _103.LCDQueryClient;
            Plan: {
                encode(message: _66.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Plan;
                fromPartial(object: Partial<_66.Plan>): _66.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _66.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_66.SoftwareUpgradeProposal>): _66.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _66.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_66.CancelSoftwareUpgradeProposal>): _66.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _66.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ModuleVersion;
                fromPartial(object: Partial<_66.ModuleVersion>): _66.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _65.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_65.QueryCurrentPlanRequest>): _65.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _65.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_65.QueryCurrentPlanResponse>): _65.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _65.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_65.QueryAppliedPlanRequest>): _65.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _65.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_65.QueryAppliedPlanResponse>): _65.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _65.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_65.QueryUpgradedConsensusStateRequest>): _65.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _65.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_65.QueryUpgradedConsensusStateResponse>): _65.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _65.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_65.QueryModuleVersionsRequest>): _65.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _65.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_65.QueryModuleVersionsResponse>): _65.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            BaseVestingAccount: {
                encode(message: _68.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.BaseVestingAccount;
                fromPartial(object: Partial<_68.BaseVestingAccount>): _68.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _68.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ContinuousVestingAccount;
                fromPartial(object: Partial<_68.ContinuousVestingAccount>): _68.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _68.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.DelayedVestingAccount;
                fromPartial(object: Partial<_68.DelayedVestingAccount>): _68.DelayedVestingAccount;
            };
            Period: {
                encode(message: _68.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Period;
                fromPartial(object: Partial<_68.Period>): _68.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _68.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PeriodicVestingAccount;
                fromPartial(object: Partial<_68.PeriodicVestingAccount>): _68.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _68.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PermanentLockedAccount;
                fromPartial(object: Partial<_68.PermanentLockedAccount>): _68.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _67.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgCreateVestingAccount;
                fromPartial(object: Partial<_67.MsgCreateVestingAccount>): _67.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _67.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_67.MsgCreateVestingAccountResponse>): _67.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _90.LCDQueryClient;
                };
                authz: {
                    v1beta1: _91.LCDQueryClient;
                };
                bank: {
                    v1beta1: _92.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _93.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _94.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _95.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _96.LCDQueryClient;
                };
                gov: {
                    v1beta1: _97.LCDQueryClient;
                };
                mint: {
                    v1beta1: _98.LCDQueryClient;
                };
                params: {
                    v1beta1: _99.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _100.LCDQueryClient;
                };
                staking: {
                    v1beta1: _101.LCDQueryClient;
                };
                tx: {
                    v1beta1: _102.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _103.LCDQueryClient;
                };
            };
        }>;
    };
}
