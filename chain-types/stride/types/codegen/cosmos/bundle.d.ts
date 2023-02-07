import * as _1 from "./auth/v1beta1/auth";
import * as _2 from "./auth/v1beta1/genesis";
import * as _3 from "./auth/v1beta1/query";
import * as _4 from "./authz/v1beta1/authz";
import * as _5 from "./authz/v1beta1/event";
import * as _6 from "./authz/v1beta1/genesis";
import * as _7 from "./authz/v1beta1/query";
import * as _8 from "./authz/v1beta1/tx";
import * as _9 from "./bank/v1beta1/authz";
import * as _10 from "./bank/v1beta1/bank";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/kv/v1beta1/kv";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v1beta1/reflection";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/snapshots/v1beta1/snapshot";
import * as _20 from "./base/store/v1beta1/commit_info";
import * as _21 from "./base/store/v1beta1/listening";
import * as _22 from "./base/store/v1beta1/snapshot";
import * as _23 from "./base/tendermint/v1beta1/query";
import * as _24 from "./base/v1beta1/coin";
import * as _25 from "./capability/v1beta1/capability";
import * as _26 from "./capability/v1beta1/genesis";
import * as _27 from "./crisis/v1beta1/genesis";
import * as _28 from "./crisis/v1beta1/tx";
import * as _29 from "./crypto/ed25519/keys";
import * as _30 from "./crypto/multisig/keys";
import * as _31 from "./crypto/secp256k1/keys";
import * as _32 from "./crypto/secp256r1/keys";
import * as _33 from "./distribution/v1beta1/distribution";
import * as _34 from "./distribution/v1beta1/genesis";
import * as _35 from "./distribution/v1beta1/query";
import * as _36 from "./distribution/v1beta1/tx";
import * as _37 from "./evidence/v1beta1/evidence";
import * as _38 from "./evidence/v1beta1/genesis";
import * as _39 from "./evidence/v1beta1/query";
import * as _40 from "./evidence/v1beta1/tx";
import * as _41 from "./feegrant/v1beta1/feegrant";
import * as _42 from "./feegrant/v1beta1/genesis";
import * as _43 from "./feegrant/v1beta1/query";
import * as _44 from "./feegrant/v1beta1/tx";
import * as _45 from "./genutil/v1beta1/genesis";
import * as _46 from "./gov/v1beta1/genesis";
import * as _47 from "./gov/v1beta1/gov";
import * as _48 from "./gov/v1beta1/query";
import * as _49 from "./gov/v1beta1/tx";
import * as _50 from "./mint/v1beta1/genesis";
import * as _51 from "./mint/v1beta1/mint";
import * as _52 from "./mint/v1beta1/query";
import * as _53 from "./params/v1beta1/params";
import * as _54 from "./params/v1beta1/query";
import * as _55 from "./slashing/v1beta1/genesis";
import * as _56 from "./slashing/v1beta1/query";
import * as _57 from "./slashing/v1beta1/slashing";
import * as _58 from "./slashing/v1beta1/tx";
import * as _59 from "./staking/v1beta1/authz";
import * as _60 from "./staking/v1beta1/genesis";
import * as _61 from "./staking/v1beta1/query";
import * as _62 from "./staking/v1beta1/staking";
import * as _63 from "./staking/v1beta1/tx";
import * as _64 from "./tx/signing/v1beta1/signing";
import * as _65 from "./tx/v1beta1/service";
import * as _66 from "./tx/v1beta1/tx";
import * as _67 from "./upgrade/v1beta1/query";
import * as _68 from "./upgrade/v1beta1/upgrade";
import * as _69 from "./vesting/v1beta1/tx";
import * as _70 from "./vesting/v1beta1/vesting";
import * as _125 from "./auth/v1beta1/query.lcd";
import * as _126 from "./authz/v1beta1/query.lcd";
import * as _127 from "./bank/v1beta1/query.lcd";
import * as _128 from "./base/tendermint/v1beta1/query.lcd";
import * as _129 from "./distribution/v1beta1/query.lcd";
import * as _130 from "./evidence/v1beta1/query.lcd";
import * as _131 from "./feegrant/v1beta1/query.lcd";
import * as _132 from "./gov/v1beta1/query.lcd";
import * as _133 from "./mint/v1beta1/query.lcd";
import * as _134 from "./params/v1beta1/query.lcd";
import * as _135 from "./slashing/v1beta1/query.lcd";
import * as _136 from "./staking/v1beta1/query.lcd";
import * as _137 from "./tx/v1beta1/service.lcd";
import * as _138 from "./upgrade/v1beta1/query.lcd";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            LCDQueryClient: typeof _125.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _3.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountsRequest;
                fromPartial(object: Partial<_3.QueryAccountsRequest>): _3.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _3.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountsResponse;
                fromPartial(object: Partial<_3.QueryAccountsResponse>): _3.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _3.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountRequest;
                fromPartial(object: Partial<_3.QueryAccountRequest>): _3.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _3.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountResponse;
                fromPartial(object: Partial<_3.QueryAccountResponse>): _3.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
            };
            BaseAccount: {
                encode(message: _1.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BaseAccount;
                fromPartial(object: Partial<_1.BaseAccount>): _1.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _1.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ModuleAccount;
                fromPartial(object: Partial<_1.ModuleAccount>): _1.ModuleAccount;
            };
            Params: {
                encode(message: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Params;
                fromPartial(object: Partial<_1.Params>): _1.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            LCDQueryClient: typeof _126.LCDQueryClient;
            MsgGrant: {
                encode(message: _8.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgGrant;
                fromPartial(object: Partial<_8.MsgGrant>): _8.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _8.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgExecResponse;
                fromPartial(object: Partial<_8.MsgExecResponse>): _8.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _8.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgExec;
                fromPartial(object: Partial<_8.MsgExec>): _8.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _8.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgGrantResponse;
                fromPartial(_: Partial<_8.MsgGrantResponse>): _8.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _8.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgRevoke;
                fromPartial(object: Partial<_8.MsgRevoke>): _8.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _8.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgRevokeResponse;
                fromPartial(_: Partial<_8.MsgRevokeResponse>): _8.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _7.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGrantsRequest;
                fromPartial(object: Partial<_7.QueryGrantsRequest>): _7.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _7.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGrantsResponse;
                fromPartial(object: Partial<_7.QueryGrantsResponse>): _7.QueryGrantsResponse;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
            };
            GrantAuthorization: {
                encode(message: _6.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GrantAuthorization;
                fromPartial(object: Partial<_6.GrantAuthorization>): _6.GrantAuthorization;
            };
            EventGrant: {
                encode(message: _5.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventGrant;
                fromPartial(object: Partial<_5.EventGrant>): _5.EventGrant;
            };
            EventRevoke: {
                encode(message: _5.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventRevoke;
                fromPartial(object: Partial<_5.EventRevoke>): _5.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _4.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenericAuthorization;
                fromPartial(object: Partial<_4.GenericAuthorization>): _4.GenericAuthorization;
            };
            Grant: {
                encode(message: _4.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Grant;
                fromPartial(object: Partial<_4.Grant>): _4.Grant;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            LCDQueryClient: typeof _127.LCDQueryClient;
            MsgSend: {
                encode(message: _13.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgSend;
                fromPartial(object: Partial<_13.MsgSend>): _13.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _13.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgSendResponse;
                fromPartial(_: Partial<_13.MsgSendResponse>): _13.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _13.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgMultiSend;
                fromPartial(object: Partial<_13.MsgMultiSend>): _13.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _13.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgMultiSendResponse;
                fromPartial(_: Partial<_13.MsgMultiSendResponse>): _13.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _12.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryBalanceRequest;
                fromPartial(object: Partial<_12.QueryBalanceRequest>): _12.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _12.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryBalanceResponse;
                fromPartial(object: Partial<_12.QueryBalanceResponse>): _12.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _12.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAllBalancesRequest;
                fromPartial(object: Partial<_12.QueryAllBalancesRequest>): _12.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _12.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAllBalancesResponse;
                fromPartial(object: Partial<_12.QueryAllBalancesResponse>): _12.QueryAllBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _12.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_12.QueryTotalSupplyRequest>): _12.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _12.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_12.QueryTotalSupplyResponse>): _12.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _12.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySupplyOfRequest;
                fromPartial(object: Partial<_12.QuerySupplyOfRequest>): _12.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _12.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySupplyOfResponse;
                fromPartial(object: Partial<_12.QuerySupplyOfResponse>): _12.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _12.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsRequest;
                fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _12.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _12.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_12.QueryDenomsMetadataRequest>): _12.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _12.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_12.QueryDenomsMetadataResponse>): _12.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _12.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_12.QueryDenomMetadataRequest>): _12.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _12.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_12.QueryDenomMetadataResponse>): _12.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            };
            Balance: {
                encode(message: _11.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Balance;
                fromPartial(object: Partial<_11.Balance>): _11.Balance;
            };
            Params: {
                encode(message: _10.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Params;
                fromPartial(object: Partial<_10.Params>): _10.Params;
            };
            SendEnabled: {
                encode(message: _10.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SendEnabled;
                fromPartial(object: Partial<_10.SendEnabled>): _10.SendEnabled;
            };
            Input: {
                encode(message: _10.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Input;
                fromPartial(object: Partial<_10.Input>): _10.Input;
            };
            Output: {
                encode(message: _10.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Output;
                fromPartial(object: Partial<_10.Output>): _10.Output;
            };
            Supply: {
                encode(message: _10.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Supply;
                fromPartial(object: Partial<_10.Supply>): _10.Supply;
            };
            DenomUnit: {
                encode(message: _10.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.DenomUnit;
                fromPartial(object: Partial<_10.DenomUnit>): _10.DenomUnit;
            };
            Metadata: {
                encode(message: _10.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Metadata;
                fromPartial(object: Partial<_10.Metadata>): _10.Metadata;
            };
            SendAuthorization: {
                encode(message: _9.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SendAuthorization;
                fromPartial(object: Partial<_9.SendAuthorization>): _9.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _14.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxResponse;
                    fromPartial(object: Partial<_14.TxResponse>): _14.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _14.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ABCIMessageLog;
                    fromPartial(object: Partial<_14.ABCIMessageLog>): _14.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _14.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.StringEvent;
                    fromPartial(object: Partial<_14.StringEvent>): _14.StringEvent;
                };
                Attribute: {
                    encode(message: _14.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Attribute;
                    fromPartial(object: Partial<_14.Attribute>): _14.Attribute;
                };
                GasInfo: {
                    encode(message: _14.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GasInfo;
                    fromPartial(object: Partial<_14.GasInfo>): _14.GasInfo;
                };
                Result: {
                    encode(message: _14.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Result;
                    fromPartial(object: Partial<_14.Result>): _14.Result;
                };
                SimulationResponse: {
                    encode(message: _14.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SimulationResponse;
                    fromPartial(object: Partial<_14.SimulationResponse>): _14.SimulationResponse;
                };
                MsgData: {
                    encode(message: _14.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgData;
                    fromPartial(object: Partial<_14.MsgData>): _14.MsgData;
                };
                TxMsgData: {
                    encode(message: _14.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxMsgData;
                    fromPartial(object: Partial<_14.TxMsgData>): _14.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _14.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SearchTxsResult;
                    fromPartial(object: Partial<_14.SearchTxsResult>): _14.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _15.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Pairs;
                    fromPartial(object: Partial<_15.Pairs>): _15.Pairs;
                };
                Pair: {
                    encode(message: _15.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Pair;
                    fromPartial(object: Partial<_15.Pair>): _15.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _16.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageRequest;
                    fromPartial(object: Partial<_16.PageRequest>): _16.PageRequest;
                };
                PageResponse: {
                    encode(message: _16.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageResponse;
                    fromPartial(object: Partial<_16.PageResponse>): _16.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _17.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_17.ListAllInterfacesRequest>): _17.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _17.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_17.ListAllInterfacesResponse>): _17.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _17.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ListImplementationsRequest;
                    fromPartial(object: Partial<_17.ListImplementationsRequest>): _17.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _17.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ListImplementationsResponse;
                    fromPartial(object: Partial<_17.ListImplementationsResponse>): _17.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _18.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AppDescriptor;
                    fromPartial(object: Partial<_18.AppDescriptor>): _18.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _18.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxDescriptor;
                    fromPartial(object: Partial<_18.TxDescriptor>): _18.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _18.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AuthnDescriptor;
                    fromPartial(object: Partial<_18.AuthnDescriptor>): _18.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _18.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SigningModeDescriptor;
                    fromPartial(object: Partial<_18.SigningModeDescriptor>): _18.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _18.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ChainDescriptor;
                    fromPartial(object: Partial<_18.ChainDescriptor>): _18.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _18.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.CodecDescriptor;
                    fromPartial(object: Partial<_18.CodecDescriptor>): _18.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _18.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceDescriptor;
                    fromPartial(object: Partial<_18.InterfaceDescriptor>): _18.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _18.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_18.InterfaceImplementerDescriptor>): _18.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _18.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_18.InterfaceAcceptingMessageDescriptor>): _18.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _18.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ConfigurationDescriptor;
                    fromPartial(object: Partial<_18.ConfigurationDescriptor>): _18.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _18.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgDescriptor;
                    fromPartial(object: Partial<_18.MsgDescriptor>): _18.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _18.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_18.GetAuthnDescriptorRequest>): _18.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _18.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_18.GetAuthnDescriptorResponse>): _18.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _18.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_18.GetChainDescriptorRequest>): _18.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _18.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_18.GetChainDescriptorResponse>): _18.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _18.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_18.GetCodecDescriptorRequest>): _18.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _18.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_18.GetCodecDescriptorResponse>): _18.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _18.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_18.GetConfigurationDescriptorRequest>): _18.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _18.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_18.GetConfigurationDescriptorResponse>): _18.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _18.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_18.GetQueryServicesDescriptorRequest>): _18.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _18.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_18.GetQueryServicesDescriptorResponse>): _18.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _18.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_18.GetTxDescriptorRequest>): _18.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _18.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_18.GetTxDescriptorResponse>): _18.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _18.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryServicesDescriptor;
                    fromPartial(object: Partial<_18.QueryServicesDescriptor>): _18.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _18.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryServiceDescriptor;
                    fromPartial(object: Partial<_18.QueryServiceDescriptor>): _18.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _18.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryMethodDescriptor;
                    fromPartial(object: Partial<_18.QueryMethodDescriptor>): _18.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _19.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Snapshot;
                    fromPartial(object: Partial<_19.Snapshot>): _19.Snapshot;
                };
                Metadata: {
                    encode(message: _19.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Metadata;
                    fromPartial(object: Partial<_19.Metadata>): _19.Metadata;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    encode(message: _22.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotItem;
                    fromPartial(object: Partial<_22.SnapshotItem>): _22.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _22.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotStoreItem;
                    fromPartial(object: Partial<_22.SnapshotStoreItem>): _22.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _22.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SnapshotIAVLItem;
                    fromPartial(object: Partial<_22.SnapshotIAVLItem>): _22.SnapshotIAVLItem;
                };
                StoreKVPair: {
                    encode(message: _21.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.StoreKVPair;
                    fromPartial(object: Partial<_21.StoreKVPair>): _21.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _20.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.CommitInfo;
                    fromPartial(object: Partial<_20.CommitInfo>): _20.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _20.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.StoreInfo;
                    fromPartial(object: Partial<_20.StoreInfo>): _20.StoreInfo;
                };
                CommitID: {
                    encode(message: _20.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.CommitID;
                    fromPartial(object: Partial<_20.CommitID>): _20.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                LCDQueryClient: typeof _128.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _23.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_23.GetValidatorSetByHeightRequest>): _23.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _23.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_23.GetValidatorSetByHeightResponse>): _23.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _23.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_23.GetLatestValidatorSetRequest>): _23.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _23.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_23.GetLatestValidatorSetResponse>): _23.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _23.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Validator;
                    fromPartial(object: Partial<_23.Validator>): _23.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _23.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_23.GetBlockByHeightRequest>): _23.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _23.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_23.GetBlockByHeightResponse>): _23.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _23.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetLatestBlockRequest;
                    fromPartial(_: Partial<_23.GetLatestBlockRequest>): _23.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _23.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetLatestBlockResponse;
                    fromPartial(object: Partial<_23.GetLatestBlockResponse>): _23.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _23.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetSyncingRequest;
                    fromPartial(_: Partial<_23.GetSyncingRequest>): _23.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _23.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetSyncingResponse;
                    fromPartial(object: Partial<_23.GetSyncingResponse>): _23.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _23.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetNodeInfoRequest;
                    fromPartial(_: Partial<_23.GetNodeInfoRequest>): _23.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _23.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetNodeInfoResponse;
                    fromPartial(object: Partial<_23.GetNodeInfoResponse>): _23.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _23.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.VersionInfo;
                    fromPartial(object: Partial<_23.VersionInfo>): _23.VersionInfo;
                };
                Module: {
                    encode(message: _23.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Module;
                    fromPartial(object: Partial<_23.Module>): _23.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _24.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Coin;
                fromPartial(object: Partial<_24.Coin>): _24.Coin;
            };
            DecCoin: {
                encode(message: _24.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DecCoin;
                fromPartial(object: Partial<_24.DecCoin>): _24.DecCoin;
            };
            IntProto: {
                encode(message: _24.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.IntProto;
                fromPartial(object: Partial<_24.IntProto>): _24.IntProto;
            };
            DecProto: {
                encode(message: _24.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DecProto;
                fromPartial(object: Partial<_24.DecProto>): _24.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _26.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisOwners;
                fromPartial(object: Partial<_26.GenesisOwners>): _26.GenesisOwners;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
            };
            Capability: {
                encode(message: _25.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Capability;
                fromPartial(object: Partial<_25.Capability>): _25.Capability;
            };
            Owner: {
                encode(message: _25.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Owner;
                fromPartial(object: Partial<_25.Owner>): _25.Owner;
            };
            CapabilityOwners: {
                encode(message: _25.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CapabilityOwners;
                fromPartial(object: Partial<_25.CapabilityOwners>): _25.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgVerifyInvariant: {
                encode(message: _28.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgVerifyInvariant;
                fromPartial(object: Partial<_28.MsgVerifyInvariant>): _28.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _28.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_28.MsgVerifyInvariantResponse>): _28.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _30.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.LegacyAminoPubKey;
                fromPartial(object: Partial<_30.LegacyAminoPubKey>): _30.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _31.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PubKey;
                fromPartial(object: Partial<_31.PubKey>): _31.PubKey;
            };
            PrivKey: {
                encode(message: _31.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PrivKey;
                fromPartial(object: Partial<_31.PrivKey>): _31.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromPartial(object: Partial<_32.PubKey>): _32.PubKey;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromPartial(object: Partial<_32.PrivKey>): _32.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            LCDQueryClient: typeof _129.LCDQueryClient;
            MsgSetWithdrawAddress: {
                encode(message: _36.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_36.MsgSetWithdrawAddress>): _36.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _36.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_36.MsgSetWithdrawAddressResponse>): _36.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _36.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_36.MsgWithdrawDelegatorReward>): _36.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _36.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_36.MsgWithdrawDelegatorRewardResponse>): _36.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _36.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_36.MsgWithdrawValidatorCommission>): _36.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _36.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_36.MsgWithdrawValidatorCommissionResponse>): _36.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _36.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgFundCommunityPool;
                fromPartial(object: Partial<_36.MsgFundCommunityPool>): _36.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _36.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_36.MsgFundCommunityPoolResponse>): _36.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _35.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_35.QueryValidatorOutstandingRewardsRequest>): _35.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _35.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_35.QueryValidatorOutstandingRewardsResponse>): _35.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _35.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_35.QueryValidatorCommissionRequest>): _35.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _35.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_35.QueryValidatorCommissionResponse>): _35.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _35.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_35.QueryValidatorSlashesRequest>): _35.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _35.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_35.QueryValidatorSlashesResponse>): _35.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _35.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_35.QueryDelegationRewardsRequest>): _35.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _35.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_35.QueryDelegationRewardsResponse>): _35.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _35.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_35.QueryDelegationTotalRewardsRequest>): _35.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _35.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_35.QueryDelegationTotalRewardsResponse>): _35.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _35.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsRequest>): _35.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _35.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsResponse>): _35.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _35.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_35.QueryDelegatorWithdrawAddressRequest>): _35.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _35.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_35.QueryDelegatorWithdrawAddressResponse>): _35.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _35.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_35.QueryCommunityPoolRequest>): _35.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _35.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_35.QueryCommunityPoolResponse>): _35.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _34.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_34.DelegatorWithdrawInfo>): _34.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _34.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_34.ValidatorOutstandingRewardsRecord>): _34.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _34.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_34.ValidatorAccumulatedCommissionRecord>): _34.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _34.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_34.ValidatorHistoricalRewardsRecord>): _34.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _34.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_34.ValidatorCurrentRewardsRecord>): _34.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _34.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_34.DelegatorStartingInfoRecord>): _34.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _34.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_34.ValidatorSlashEventRecord>): _34.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
            Params: {
                encode(message: _33.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Params;
                fromPartial(object: Partial<_33.Params>): _33.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _33.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_33.ValidatorHistoricalRewards>): _33.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _33.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorCurrentRewards;
                fromPartial(object: Partial<_33.ValidatorCurrentRewards>): _33.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _33.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_33.ValidatorAccumulatedCommission>): _33.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _33.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_33.ValidatorOutstandingRewards>): _33.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _33.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorSlashEvent;
                fromPartial(object: Partial<_33.ValidatorSlashEvent>): _33.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _33.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorSlashEvents;
                fromPartial(object: Partial<_33.ValidatorSlashEvents>): _33.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _33.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.FeePool;
                fromPartial(object: Partial<_33.FeePool>): _33.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _33.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_33.CommunityPoolSpendProposal>): _33.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _33.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DelegatorStartingInfo;
                fromPartial(object: Partial<_33.DelegatorStartingInfo>): _33.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _33.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DelegationDelegatorReward;
                fromPartial(object: Partial<_33.DelegationDelegatorReward>): _33.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _33.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_33.CommunityPoolSpendProposalWithDeposit>): _33.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            LCDQueryClient: typeof _130.LCDQueryClient;
            MsgSubmitEvidence: {
                encode(message: _40.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSubmitEvidence;
                fromPartial(object: Partial<_40.MsgSubmitEvidence>): _40.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _40.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_40.MsgSubmitEvidenceResponse>): _40.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _39.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryEvidenceRequest;
                fromPartial(object: Partial<_39.QueryEvidenceRequest>): _39.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _39.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryEvidenceResponse;
                fromPartial(object: Partial<_39.QueryEvidenceResponse>): _39.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _39.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_39.QueryAllEvidenceRequest>): _39.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _39.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_39.QueryAllEvidenceResponse>): _39.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
            };
            Equivocation: {
                encode(message: _37.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Equivocation;
                fromPartial(object: Partial<_37.Equivocation>): _37.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            LCDQueryClient: typeof _131.LCDQueryClient;
            MsgGrantAllowance: {
                encode(message: _44.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgGrantAllowance;
                fromPartial(object: Partial<_44.MsgGrantAllowance>): _44.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _44.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_44.MsgGrantAllowanceResponse>): _44.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _44.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgRevokeAllowance;
                fromPartial(object: Partial<_44.MsgRevokeAllowance>): _44.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _44.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_44.MsgRevokeAllowanceResponse>): _44.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _43.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowanceRequest;
                fromPartial(object: Partial<_43.QueryAllowanceRequest>): _43.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _43.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowanceResponse;
                fromPartial(object: Partial<_43.QueryAllowanceResponse>): _43.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _43.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowancesRequest;
                fromPartial(object: Partial<_43.QueryAllowancesRequest>): _43.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _43.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryAllowancesResponse;
                fromPartial(object: Partial<_43.QueryAllowancesResponse>): _43.QueryAllowancesResponse;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GenesisState;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            };
            BasicAllowance: {
                encode(message: _41.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.BasicAllowance;
                fromPartial(object: Partial<_41.BasicAllowance>): _41.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _41.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.PeriodicAllowance;
                fromPartial(object: Partial<_41.PeriodicAllowance>): _41.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _41.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AllowedMsgAllowance;
                fromPartial(object: Partial<_41.AllowedMsgAllowance>): _41.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _41.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Grant;
                fromPartial(object: Partial<_41.Grant>): _41.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            LCDQueryClient: typeof _132.LCDQueryClient;
            MsgSubmitProposal: {
                encode(message: _49.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSubmitProposal;
                fromPartial(object: Partial<_49.MsgSubmitProposal>): _49.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _49.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_49.MsgSubmitProposalResponse>): _49.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _49.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVote;
                fromPartial(object: Partial<_49.MsgVote>): _49.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _49.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteResponse;
                fromPartial(_: Partial<_49.MsgVoteResponse>): _49.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _49.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteWeighted;
                fromPartial(object: Partial<_49.MsgVoteWeighted>): _49.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _49.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_49.MsgVoteWeightedResponse>): _49.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _49.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgDeposit;
                fromPartial(object: Partial<_49.MsgDeposit>): _49.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _49.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgDepositResponse;
                fromPartial(_: Partial<_49.MsgDepositResponse>): _49.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _48.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalRequest;
                fromPartial(object: Partial<_48.QueryProposalRequest>): _48.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _48.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalResponse;
                fromPartial(object: Partial<_48.QueryProposalResponse>): _48.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _48.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalsRequest;
                fromPartial(object: Partial<_48.QueryProposalsRequest>): _48.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _48.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalsResponse;
                fromPartial(object: Partial<_48.QueryProposalsResponse>): _48.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _48.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVoteRequest;
                fromPartial(object: Partial<_48.QueryVoteRequest>): _48.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _48.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVoteResponse;
                fromPartial(object: Partial<_48.QueryVoteResponse>): _48.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _48.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVotesRequest;
                fromPartial(object: Partial<_48.QueryVotesRequest>): _48.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _48.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVotesResponse;
                fromPartial(object: Partial<_48.QueryVotesResponse>): _48.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsRequest;
                fromPartial(object: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _48.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositRequest;
                fromPartial(object: Partial<_48.QueryDepositRequest>): _48.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _48.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositResponse;
                fromPartial(object: Partial<_48.QueryDepositResponse>): _48.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _48.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositsRequest;
                fromPartial(object: Partial<_48.QueryDepositsRequest>): _48.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _48.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositsResponse;
                fromPartial(object: Partial<_48.QueryDepositsResponse>): _48.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _48.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTallyResultRequest;
                fromPartial(object: Partial<_48.QueryTallyResultRequest>): _48.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _48.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTallyResultResponse;
                fromPartial(object: Partial<_48.QueryTallyResultResponse>): _48.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _47.VoteOption;
            voteOptionToJSON(object: _47.VoteOption): string;
            proposalStatusFromJSON(object: any): _47.ProposalStatus;
            proposalStatusToJSON(object: _47.ProposalStatus): string;
            VoteOption: typeof _47.VoteOption;
            VoteOptionSDKType: typeof _47.VoteOptionSDKType;
            ProposalStatus: typeof _47.ProposalStatus;
            ProposalStatusSDKType: typeof _47.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _47.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.WeightedVoteOption;
                fromPartial(object: Partial<_47.WeightedVoteOption>): _47.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _47.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TextProposal;
                fromPartial(object: Partial<_47.TextProposal>): _47.TextProposal;
            };
            Deposit: {
                encode(message: _47.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Deposit;
                fromPartial(object: Partial<_47.Deposit>): _47.Deposit;
            };
            Proposal: {
                encode(message: _47.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Proposal;
                fromPartial(object: Partial<_47.Proposal>): _47.Proposal;
            };
            TallyResult: {
                encode(message: _47.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TallyResult;
                fromPartial(object: Partial<_47.TallyResult>): _47.TallyResult;
            };
            Vote: {
                encode(message: _47.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Vote;
                fromPartial(object: Partial<_47.Vote>): _47.Vote;
            };
            DepositParams: {
                encode(message: _47.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DepositParams;
                fromPartial(object: Partial<_47.DepositParams>): _47.DepositParams;
            };
            VotingParams: {
                encode(message: _47.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.VotingParams;
                fromPartial(object: Partial<_47.VotingParams>): _47.VotingParams;
            };
            TallyParams: {
                encode(message: _47.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TallyParams;
                fromPartial(object: Partial<_47.TallyParams>): _47.TallyParams;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            LCDQueryClient: typeof _133.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _52.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryInflationRequest;
                fromPartial(_: Partial<_52.QueryInflationRequest>): _52.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _52.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryInflationResponse;
                fromPartial(object: Partial<_52.QueryInflationResponse>): _52.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _52.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_52.QueryAnnualProvisionsRequest>): _52.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _52.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_52.QueryAnnualProvisionsResponse>): _52.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _51.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Minter;
                fromPartial(object: Partial<_51.Minter>): _51.Minter;
            };
            Params: {
                encode(message: _51.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Params;
                fromPartial(object: Partial<_51.Params>): _51.Params;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            LCDQueryClient: typeof _134.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                fromPartial(object: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _53.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ParameterChangeProposal;
                fromPartial(object: Partial<_53.ParameterChangeProposal>): _53.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _53.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ParamChange;
                fromPartial(object: Partial<_53.ParamChange>): _53.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            LCDQueryClient: typeof _135.LCDQueryClient;
            MsgUnjail: {
                encode(message: _58.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUnjail;
                fromPartial(object: Partial<_58.MsgUnjail>): _58.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _58.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUnjailResponse;
                fromPartial(_: Partial<_58.MsgUnjailResponse>): _58.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _57.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorSigningInfo;
                fromPartial(object: Partial<_57.ValidatorSigningInfo>): _57.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _57.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Params;
                fromPartial(object: Partial<_57.Params>): _57.Params;
            };
            QueryParamsRequest: {
                encode(_: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsRequest;
                fromPartial(_: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsResponse;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _56.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySigningInfoRequest;
                fromPartial(object: Partial<_56.QuerySigningInfoRequest>): _56.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _56.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySigningInfoResponse;
                fromPartial(object: Partial<_56.QuerySigningInfoResponse>): _56.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _56.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySigningInfosRequest;
                fromPartial(object: Partial<_56.QuerySigningInfosRequest>): _56.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _56.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySigningInfosResponse;
                fromPartial(object: Partial<_56.QuerySigningInfosResponse>): _56.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
            SigningInfo: {
                encode(message: _55.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.SigningInfo;
                fromPartial(object: Partial<_55.SigningInfo>): _55.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _55.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorMissedBlocks;
                fromPartial(object: Partial<_55.ValidatorMissedBlocks>): _55.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _55.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MissedBlock;
                fromPartial(object: Partial<_55.MissedBlock>): _55.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            LCDQueryClient: typeof _136.LCDQueryClient;
            MsgCreateValidator: {
                encode(message: _63.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateValidator;
                fromPartial(object: Partial<_63.MsgCreateValidator>): _63.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _63.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_63.MsgCreateValidatorResponse>): _63.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _63.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgEditValidator;
                fromPartial(object: Partial<_63.MsgEditValidator>): _63.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _63.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgEditValidatorResponse;
                fromPartial(_: Partial<_63.MsgEditValidatorResponse>): _63.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _63.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgDelegate;
                fromPartial(object: Partial<_63.MsgDelegate>): _63.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _63.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgDelegateResponse;
                fromPartial(_: Partial<_63.MsgDelegateResponse>): _63.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _63.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgBeginRedelegate;
                fromPartial(object: Partial<_63.MsgBeginRedelegate>): _63.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _63.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_63.MsgBeginRedelegateResponse>): _63.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _63.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUndelegate;
                fromPartial(object: Partial<_63.MsgUndelegate>): _63.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _63.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUndelegateResponse;
                fromPartial(object: Partial<_63.MsgUndelegateResponse>): _63.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _62.BondStatus;
            bondStatusToJSON(object: _62.BondStatus): string;
            BondStatus: typeof _62.BondStatus;
            BondStatusSDKType: typeof _62.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _62.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.HistoricalInfo;
                fromPartial(object: Partial<_62.HistoricalInfo>): _62.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _62.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.CommissionRates;
                fromPartial(object: Partial<_62.CommissionRates>): _62.CommissionRates;
            };
            Commission: {
                encode(message: _62.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Commission;
                fromPartial(object: Partial<_62.Commission>): _62.Commission;
            };
            Description: {
                encode(message: _62.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Description;
                fromPartial(object: Partial<_62.Description>): _62.Description;
            };
            Validator: {
                encode(message: _62.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Validator;
                fromPartial(object: Partial<_62.Validator>): _62.Validator;
            };
            ValAddresses: {
                encode(message: _62.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValAddresses;
                fromPartial(object: Partial<_62.ValAddresses>): _62.ValAddresses;
            };
            DVPair: {
                encode(message: _62.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DVPair;
                fromPartial(object: Partial<_62.DVPair>): _62.DVPair;
            };
            DVPairs: {
                encode(message: _62.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DVPairs;
                fromPartial(object: Partial<_62.DVPairs>): _62.DVPairs;
            };
            DVVTriplet: {
                encode(message: _62.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DVVTriplet;
                fromPartial(object: Partial<_62.DVVTriplet>): _62.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _62.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DVVTriplets;
                fromPartial(object: Partial<_62.DVVTriplets>): _62.DVVTriplets;
            };
            Delegation: {
                encode(message: _62.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Delegation;
                fromPartial(object: Partial<_62.Delegation>): _62.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _62.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.UnbondingDelegation;
                fromPartial(object: Partial<_62.UnbondingDelegation>): _62.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _62.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.UnbondingDelegationEntry;
                fromPartial(object: Partial<_62.UnbondingDelegationEntry>): _62.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _62.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RedelegationEntry;
                fromPartial(object: Partial<_62.RedelegationEntry>): _62.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _62.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Redelegation;
                fromPartial(object: Partial<_62.Redelegation>): _62.Redelegation;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Params;
                fromPartial(object: Partial<_62.Params>): _62.Params;
            };
            DelegationResponse: {
                encode(message: _62.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DelegationResponse;
                fromPartial(object: Partial<_62.DelegationResponse>): _62.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _62.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RedelegationEntryResponse;
                fromPartial(object: Partial<_62.RedelegationEntryResponse>): _62.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _62.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RedelegationResponse;
                fromPartial(object: Partial<_62.RedelegationResponse>): _62.RedelegationResponse;
            };
            Pool: {
                encode(message: _62.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Pool;
                fromPartial(object: Partial<_62.Pool>): _62.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _61.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorsRequest;
                fromPartial(object: Partial<_61.QueryValidatorsRequest>): _61.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _61.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorsResponse;
                fromPartial(object: Partial<_61.QueryValidatorsResponse>): _61.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _61.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorRequest;
                fromPartial(object: Partial<_61.QueryValidatorRequest>): _61.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _61.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorResponse;
                fromPartial(object: Partial<_61.QueryValidatorResponse>): _61.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _61.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_61.QueryValidatorDelegationsRequest>): _61.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _61.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_61.QueryValidatorDelegationsResponse>): _61.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _61.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_61.QueryValidatorUnbondingDelegationsRequest>): _61.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _61.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_61.QueryValidatorUnbondingDelegationsResponse>): _61.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _61.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegationRequest;
                fromPartial(object: Partial<_61.QueryDelegationRequest>): _61.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _61.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegationResponse;
                fromPartial(object: Partial<_61.QueryDelegationResponse>): _61.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _61.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_61.QueryUnbondingDelegationRequest>): _61.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _61.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_61.QueryUnbondingDelegationResponse>): _61.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _61.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_61.QueryDelegatorDelegationsRequest>): _61.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _61.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_61.QueryDelegatorDelegationsResponse>): _61.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _61.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_61.QueryDelegatorUnbondingDelegationsRequest>): _61.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _61.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_61.QueryDelegatorUnbondingDelegationsResponse>): _61.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _61.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryRedelegationsRequest;
                fromPartial(object: Partial<_61.QueryRedelegationsRequest>): _61.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _61.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryRedelegationsResponse;
                fromPartial(object: Partial<_61.QueryRedelegationsResponse>): _61.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _61.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_61.QueryDelegatorValidatorsRequest>): _61.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _61.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_61.QueryDelegatorValidatorsResponse>): _61.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _61.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_61.QueryDelegatorValidatorRequest>): _61.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _61.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_61.QueryDelegatorValidatorResponse>): _61.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _61.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_61.QueryHistoricalInfoRequest>): _61.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _61.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_61.QueryHistoricalInfoResponse>): _61.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _61.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryPoolRequest;
                fromPartial(_: Partial<_61.QueryPoolRequest>): _61.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _61.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryPoolResponse;
                fromPartial(object: Partial<_61.QueryPoolResponse>): _61.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _60.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.LastValidatorPower;
                fromPartial(object: Partial<_60.LastValidatorPower>): _60.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _59.AuthorizationType;
            authorizationTypeToJSON(object: _59.AuthorizationType): string;
            AuthorizationType: typeof _59.AuthorizationType;
            AuthorizationTypeSDKType: typeof _59.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _59.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.StakeAuthorization;
                fromPartial(object: Partial<_59.StakeAuthorization>): _59.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _59.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.StakeAuthorization_Validators;
                fromPartial(object: Partial<_59.StakeAuthorization_Validators>): _59.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _64.SignMode;
                signModeToJSON(object: _64.SignMode): string;
                SignMode: typeof _64.SignMode;
                SignModeSDKType: typeof _64.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _64.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptors;
                    fromPartial(object: Partial<_64.SignatureDescriptors>): _64.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _64.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptor;
                    fromPartial(object: Partial<_64.SignatureDescriptor>): _64.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _64.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_64.SignatureDescriptor_Data>): _64.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _64.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_64.SignatureDescriptor_Data_Single>): _64.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _64.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_64.SignatureDescriptor_Data_Multi>): _64.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _137.LCDQueryClient;
            Tx: {
                encode(message: _66.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Tx;
                fromPartial(object: Partial<_66.Tx>): _66.Tx;
            };
            TxRaw: {
                encode(message: _66.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TxRaw;
                fromPartial(object: Partial<_66.TxRaw>): _66.TxRaw;
            };
            SignDoc: {
                encode(message: _66.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SignDoc;
                fromPartial(object: Partial<_66.SignDoc>): _66.SignDoc;
            };
            TxBody: {
                encode(message: _66.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TxBody;
                fromPartial(object: Partial<_66.TxBody>): _66.TxBody;
            };
            AuthInfo: {
                encode(message: _66.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.AuthInfo;
                fromPartial(object: Partial<_66.AuthInfo>): _66.AuthInfo;
            };
            SignerInfo: {
                encode(message: _66.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SignerInfo;
                fromPartial(object: Partial<_66.SignerInfo>): _66.SignerInfo;
            };
            ModeInfo: {
                encode(message: _66.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ModeInfo;
                fromPartial(object: Partial<_66.ModeInfo>): _66.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _66.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ModeInfo_Single;
                fromPartial(object: Partial<_66.ModeInfo_Single>): _66.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _66.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ModeInfo_Multi;
                fromPartial(object: Partial<_66.ModeInfo_Multi>): _66.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _66.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Fee;
                fromPartial(object: Partial<_66.Fee>): _66.Fee;
            };
            orderByFromJSON(object: any): _65.OrderBy;
            orderByToJSON(object: _65.OrderBy): string;
            broadcastModeFromJSON(object: any): _65.BroadcastMode;
            broadcastModeToJSON(object: _65.BroadcastMode): string;
            OrderBy: typeof _65.OrderBy;
            OrderBySDKType: typeof _65.OrderBySDKType;
            BroadcastMode: typeof _65.BroadcastMode;
            BroadcastModeSDKType: typeof _65.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _65.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetTxsEventRequest;
                fromPartial(object: Partial<_65.GetTxsEventRequest>): _65.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _65.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetTxsEventResponse;
                fromPartial(object: Partial<_65.GetTxsEventResponse>): _65.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _65.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BroadcastTxRequest;
                fromPartial(object: Partial<_65.BroadcastTxRequest>): _65.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _65.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BroadcastTxResponse;
                fromPartial(object: Partial<_65.BroadcastTxResponse>): _65.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _65.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SimulateRequest;
                fromPartial(object: Partial<_65.SimulateRequest>): _65.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _65.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SimulateResponse;
                fromPartial(object: Partial<_65.SimulateResponse>): _65.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _65.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetTxRequest;
                fromPartial(object: Partial<_65.GetTxRequest>): _65.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _65.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetTxResponse;
                fromPartial(object: Partial<_65.GetTxResponse>): _65.GetTxResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            LCDQueryClient: typeof _138.LCDQueryClient;
            Plan: {
                encode(message: _68.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Plan;
                fromPartial(object: Partial<_68.Plan>): _68.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _68.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_68.SoftwareUpgradeProposal>): _68.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _68.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_68.CancelSoftwareUpgradeProposal>): _68.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _68.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ModuleVersion;
                fromPartial(object: Partial<_68.ModuleVersion>): _68.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _67.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_67.QueryCurrentPlanRequest>): _67.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _67.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_67.QueryCurrentPlanResponse>): _67.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _67.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_67.QueryAppliedPlanRequest>): _67.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _67.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_67.QueryAppliedPlanResponse>): _67.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _67.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_67.QueryUpgradedConsensusStateRequest>): _67.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _67.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_67.QueryUpgradedConsensusStateResponse>): _67.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _67.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_67.QueryModuleVersionsRequest>): _67.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _67.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_67.QueryModuleVersionsResponse>): _67.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            BaseVestingAccount: {
                encode(message: _70.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.BaseVestingAccount;
                fromPartial(object: Partial<_70.BaseVestingAccount>): _70.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _70.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ContinuousVestingAccount;
                fromPartial(object: Partial<_70.ContinuousVestingAccount>): _70.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _70.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.DelayedVestingAccount;
                fromPartial(object: Partial<_70.DelayedVestingAccount>): _70.DelayedVestingAccount;
            };
            Period: {
                encode(message: _70.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Period;
                fromPartial(object: Partial<_70.Period>): _70.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _70.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.PeriodicVestingAccount;
                fromPartial(object: Partial<_70.PeriodicVestingAccount>): _70.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _70.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.PermanentLockedAccount;
                fromPartial(object: Partial<_70.PermanentLockedAccount>): _70.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _69.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateVestingAccount;
                fromPartial(object: Partial<_69.MsgCreateVestingAccount>): _69.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _69.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_69.MsgCreateVestingAccountResponse>): _69.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _125.LCDQueryClient;
                };
                authz: {
                    v1beta1: _126.LCDQueryClient;
                };
                bank: {
                    v1beta1: _127.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _128.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _129.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _130.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _131.LCDQueryClient;
                };
                gov: {
                    v1beta1: _132.LCDQueryClient;
                };
                mint: {
                    v1beta1: _133.LCDQueryClient;
                };
                params: {
                    v1beta1: _134.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _135.LCDQueryClient;
                };
                staking: {
                    v1beta1: _136.LCDQueryClient;
                };
                tx: {
                    v1beta1: _137.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _138.LCDQueryClient;
                };
            };
        }>;
    };
}
