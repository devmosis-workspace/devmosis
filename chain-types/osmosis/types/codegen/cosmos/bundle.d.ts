import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./capability/v1beta1/capability";
import * as _29 from "./capability/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/tx";
import * as _32 from "./crypto/ed25519/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/v1beta1/distribution";
import * as _39 from "./distribution/v1beta1/genesis";
import * as _40 from "./distribution/v1beta1/query";
import * as _41 from "./distribution/v1beta1/tx";
import * as _42 from "./evidence/v1beta1/evidence";
import * as _43 from "./evidence/v1beta1/genesis";
import * as _44 from "./evidence/v1beta1/query";
import * as _45 from "./evidence/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/v1beta1/genesis";
import * as _51 from "./gov/v1/genesis";
import * as _52 from "./gov/v1/gov";
import * as _53 from "./gov/v1/query";
import * as _54 from "./gov/v1/tx";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./group/v1/events";
import * as _60 from "./group/v1/genesis";
import * as _61 from "./group/v1/query";
import * as _62 from "./group/v1/tx";
import * as _63 from "./group/v1/types";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _68 from "./nft/v1beta1/event";
import * as _69 from "./nft/v1beta1/genesis";
import * as _70 from "./nft/v1beta1/nft";
import * as _71 from "./nft/v1beta1/query";
import * as _72 from "./nft/v1beta1/tx";
import * as _73 from "./orm/v1/orm";
import * as _74 from "./orm/v1alpha1/schema";
import * as _75 from "./params/v1beta1/params";
import * as _76 from "./params/v1beta1/query";
import * as _77 from "./slashing/v1beta1/genesis";
import * as _78 from "./slashing/v1beta1/query";
import * as _79 from "./slashing/v1beta1/slashing";
import * as _80 from "./slashing/v1beta1/tx";
import * as _81 from "./staking/v1beta1/authz";
import * as _82 from "./staking/v1beta1/genesis";
import * as _83 from "./staking/v1beta1/query";
import * as _84 from "./staking/v1beta1/staking";
import * as _85 from "./staking/v1beta1/tx";
import * as _86 from "./tx/signing/v1beta1/signing";
import * as _87 from "./tx/v1beta1/service";
import * as _88 from "./tx/v1beta1/tx";
import * as _89 from "./upgrade/v1beta1/query";
import * as _90 from "./upgrade/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/v1beta1/tx";
import * as _93 from "./vesting/v1beta1/vesting";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _4.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigRequest;
                fromPartial(_: Partial<_4.QueryConfigRequest>): _4.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _4.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigResponse;
                fromPartial(object: Partial<_4.QueryConfigResponse>): _4.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _3.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleDescriptor;
                fromPartial(object: Partial<_3.ModuleDescriptor>): _3.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _3.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PackageReference;
                fromPartial(object: Partial<_3.PackageReference>): _3.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _3.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MigrateFromInfo;
                fromPartial(object: Partial<_3.MigrateFromInfo>): _3.MigrateFromInfo;
            };
            Config: {
                encode(message: _2.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Config;
                fromPartial(object: Partial<_2.Config>): _2.Config;
            };
            ModuleConfig: {
                encode(message: _2.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleConfig;
                fromPartial(object: Partial<_2.ModuleConfig>): _2.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _7.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsRequest;
                fromPartial(object: Partial<_7.QueryAccountsRequest>): _7.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _7.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsResponse;
                fromPartial(object: Partial<_7.QueryAccountsResponse>): _7.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _7.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountRequest;
                fromPartial(object: Partial<_7.QueryAccountRequest>): _7.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _7.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_7.QueryModuleAccountsRequest>): _7.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponse;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _7.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountResponse;
                fromPartial(object: Partial<_7.QueryAccountResponse>): _7.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _7.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_7.QueryModuleAccountsResponse>): _7.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _7.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixRequest;
                fromPartial(_: Partial<_7.Bech32PrefixRequest>): _7.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _7.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixResponse;
                fromPartial(object: Partial<_7.Bech32PrefixResponse>): _7.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _7.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringRequest;
                fromPartial(object: Partial<_7.AddressBytesToStringRequest>): _7.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _7.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringResponse;
                fromPartial(object: Partial<_7.AddressBytesToStringResponse>): _7.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _7.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesRequest;
                fromPartial(object: Partial<_7.AddressStringToBytesRequest>): _7.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _7.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesResponse;
                fromPartial(object: Partial<_7.AddressStringToBytesResponse>): _7.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
            };
            BaseAccount: {
                encode(message: _5.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BaseAccount;
                fromPartial(object: Partial<_5.BaseAccount>): _5.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _5.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleAccount;
                fromPartial(object: Partial<_5.ModuleAccount>): _5.ModuleAccount;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromPartial(object: Partial<_5.Params>): _5.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _12.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _12.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _12.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _12.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _12.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _12.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _12.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrant;
                fromPartial(object: Partial<_12.MsgGrant>): _12.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _12.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExecResponse;
                fromPartial(object: Partial<_12.MsgExecResponse>): _12.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _12.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExec;
                fromPartial(object: Partial<_12.MsgExec>): _12.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _12.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrantResponse;
                fromPartial(_: Partial<_12.MsgGrantResponse>): _12.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _12.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevoke;
                fromPartial(object: Partial<_12.MsgRevoke>): _12.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _12.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevokeResponse;
                fromPartial(_: Partial<_12.MsgRevokeResponse>): _12.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _11.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsRequest;
                fromPartial(object: Partial<_11.QueryGrantsRequest>): _11.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _11.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsResponse;
                fromPartial(object: Partial<_11.QueryGrantsResponse>): _11.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _11.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_11.QueryGranterGrantsRequest>): _11.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _11.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_11.QueryGranterGrantsResponse>): _11.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _11.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_11.QueryGranteeGrantsRequest>): _11.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _11.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_11.QueryGranteeGrantsResponse>): _11.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
            };
            EventGrant: {
                encode(message: _9.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventGrant;
                fromPartial(object: Partial<_9.EventGrant>): _9.EventGrant;
            };
            EventRevoke: {
                encode(message: _9.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventRevoke;
                fromPartial(object: Partial<_9.EventRevoke>): _9.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _8.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenericAuthorization;
                fromPartial(object: Partial<_8.GenericAuthorization>): _8.GenericAuthorization;
            };
            Grant: {
                encode(message: _8.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Grant;
                fromPartial(object: Partial<_8.Grant>): _8.Grant;
            };
            GrantAuthorization: {
                encode(message: _8.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantAuthorization;
                fromPartial(object: Partial<_8.GrantAuthorization>): _8.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _8.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantQueueItem;
                fromPartial(object: Partial<_8.GrantQueueItem>): _8.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _17.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _17.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _17.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _17.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _17.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSend;
                fromPartial(object: Partial<_17.MsgSend>): _17.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _17.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSendResponse;
                fromPartial(_: Partial<_17.MsgSendResponse>): _17.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _17.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSend;
                fromPartial(object: Partial<_17.MsgMultiSend>): _17.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _17.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSendResponse;
                fromPartial(_: Partial<_17.MsgMultiSendResponse>): _17.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _16.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceRequest;
                fromPartial(object: Partial<_16.QueryBalanceRequest>): _16.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _16.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceResponse;
                fromPartial(object: Partial<_16.QueryBalanceResponse>): _16.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _16.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesRequest;
                fromPartial(object: Partial<_16.QueryAllBalancesRequest>): _16.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _16.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesResponse;
                fromPartial(object: Partial<_16.QueryAllBalancesResponse>): _16.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _16.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_16.QuerySpendableBalancesRequest>): _16.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _16.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_16.QuerySpendableBalancesResponse>): _16.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _16.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_16.QueryTotalSupplyRequest>): _16.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _16.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_16.QueryTotalSupplyResponse>): _16.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _16.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfRequest;
                fromPartial(object: Partial<_16.QuerySupplyOfRequest>): _16.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _16.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfResponse;
                fromPartial(object: Partial<_16.QuerySupplyOfResponse>): _16.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponse;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _16.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_16.QueryDenomsMetadataRequest>): _16.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _16.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_16.QueryDenomsMetadataResponse>): _16.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _16.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_16.QueryDenomMetadataRequest>): _16.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _16.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_16.QueryDenomMetadataResponse>): _16.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _16.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_16.QueryDenomOwnersRequest>): _16.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _16.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DenomOwner;
                fromPartial(object: Partial<_16.DenomOwner>): _16.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _16.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_16.QueryDenomOwnersResponse>): _16.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            Balance: {
                encode(message: _15.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Balance;
                fromPartial(object: Partial<_15.Balance>): _15.Balance;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Params;
                fromPartial(object: Partial<_14.Params>): _14.Params;
            };
            SendEnabled: {
                encode(message: _14.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendEnabled;
                fromPartial(object: Partial<_14.SendEnabled>): _14.SendEnabled;
            };
            Input: {
                encode(message: _14.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Input;
                fromPartial(object: Partial<_14.Input>): _14.Input;
            };
            Output: {
                encode(message: _14.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Output;
                fromPartial(object: Partial<_14.Output>): _14.Output;
            };
            Supply: {
                encode(message: _14.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Supply;
                fromPartial(object: Partial<_14.Supply>): _14.Supply;
            };
            DenomUnit: {
                encode(message: _14.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.DenomUnit;
                fromPartial(object: Partial<_14.DenomUnit>): _14.DenomUnit;
            };
            Metadata: {
                encode(message: _14.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Metadata;
                fromPartial(object: Partial<_14.Metadata>): _14.Metadata;
            };
            SendAuthorization: {
                encode(message: _13.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendAuthorization;
                fromPartial(object: Partial<_13.SendAuthorization>): _13.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _18.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxResponse;
                    fromPartial(object: Partial<_18.TxResponse>): _18.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _18.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ABCIMessageLog;
                    fromPartial(object: Partial<_18.ABCIMessageLog>): _18.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _18.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.StringEvent;
                    fromPartial(object: Partial<_18.StringEvent>): _18.StringEvent;
                };
                Attribute: {
                    encode(message: _18.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Attribute;
                    fromPartial(object: Partial<_18.Attribute>): _18.Attribute;
                };
                GasInfo: {
                    encode(message: _18.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GasInfo;
                    fromPartial(object: Partial<_18.GasInfo>): _18.GasInfo;
                };
                Result: {
                    encode(message: _18.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Result;
                    fromPartial(object: Partial<_18.Result>): _18.Result;
                };
                SimulationResponse: {
                    encode(message: _18.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SimulationResponse;
                    fromPartial(object: Partial<_18.SimulationResponse>): _18.SimulationResponse;
                };
                MsgData: {
                    encode(message: _18.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgData;
                    fromPartial(object: Partial<_18.MsgData>): _18.MsgData;
                };
                TxMsgData: {
                    encode(message: _18.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxMsgData;
                    fromPartial(object: Partial<_18.TxMsgData>): _18.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _18.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SearchTxsResult;
                    fromPartial(object: Partial<_18.SearchTxsResult>): _18.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _19.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pairs;
                    fromPartial(object: Partial<_19.Pairs>): _19.Pairs;
                };
                Pair: {
                    encode(message: _19.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pair;
                    fromPartial(object: Partial<_19.Pair>): _19.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _20.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageRequest;
                    fromPartial(object: Partial<_20.PageRequest>): _20.PageRequest;
                };
                PageResponse: {
                    encode(message: _20.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageResponse;
                    fromPartial(object: Partial<_20.PageResponse>): _20.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _21.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_21.ListAllInterfacesRequest>): _21.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _21.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_21.ListAllInterfacesResponse>): _21.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _21.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsRequest;
                    fromPartial(object: Partial<_21.ListImplementationsRequest>): _21.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _21.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsResponse;
                    fromPartial(object: Partial<_21.ListImplementationsResponse>): _21.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _22.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AppDescriptor;
                    fromPartial(object: Partial<_22.AppDescriptor>): _22.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _22.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.TxDescriptor;
                    fromPartial(object: Partial<_22.TxDescriptor>): _22.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _22.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AuthnDescriptor;
                    fromPartial(object: Partial<_22.AuthnDescriptor>): _22.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _22.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SigningModeDescriptor;
                    fromPartial(object: Partial<_22.SigningModeDescriptor>): _22.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _22.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ChainDescriptor;
                    fromPartial(object: Partial<_22.ChainDescriptor>): _22.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _22.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CodecDescriptor;
                    fromPartial(object: Partial<_22.CodecDescriptor>): _22.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _22.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceDescriptor;
                    fromPartial(object: Partial<_22.InterfaceDescriptor>): _22.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _22.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_22.InterfaceImplementerDescriptor>): _22.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _22.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_22.InterfaceAcceptingMessageDescriptor>): _22.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _22.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ConfigurationDescriptor;
                    fromPartial(object: Partial<_22.ConfigurationDescriptor>): _22.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _22.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgDescriptor;
                    fromPartial(object: Partial<_22.MsgDescriptor>): _22.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _22.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_22.GetAuthnDescriptorRequest>): _22.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _22.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_22.GetAuthnDescriptorResponse>): _22.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _22.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_22.GetChainDescriptorRequest>): _22.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _22.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_22.GetChainDescriptorResponse>): _22.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _22.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_22.GetCodecDescriptorRequest>): _22.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _22.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_22.GetCodecDescriptorResponse>): _22.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _22.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_22.GetConfigurationDescriptorRequest>): _22.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _22.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_22.GetConfigurationDescriptorResponse>): _22.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _22.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_22.GetQueryServicesDescriptorRequest>): _22.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _22.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_22.GetQueryServicesDescriptorResponse>): _22.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _22.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_22.GetTxDescriptorRequest>): _22.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _22.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_22.GetTxDescriptorResponse>): _22.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _22.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServicesDescriptor;
                    fromPartial(object: Partial<_22.QueryServicesDescriptor>): _22.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _22.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServiceDescriptor;
                    fromPartial(object: Partial<_22.QueryServiceDescriptor>): _22.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _22.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryMethodDescriptor;
                    fromPartial(object: Partial<_22.QueryMethodDescriptor>): _22.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _23.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Snapshot;
                    fromPartial(object: Partial<_23.Snapshot>): _23.Snapshot;
                };
                Metadata: {
                    encode(message: _23.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Metadata;
                    fromPartial(object: Partial<_23.Metadata>): _23.Metadata;
                };
                SnapshotItem: {
                    encode(message: _23.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotItem;
                    fromPartial(object: Partial<_23.SnapshotItem>): _23.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _23.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotStoreItem;
                    fromPartial(object: Partial<_23.SnapshotStoreItem>): _23.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _23.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotIAVLItem;
                    fromPartial(object: Partial<_23.SnapshotIAVLItem>): _23.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _23.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_23.SnapshotExtensionMeta>): _23.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _23.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_23.SnapshotExtensionPayload>): _23.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _23.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotKVItem;
                    fromPartial(object: Partial<_23.SnapshotKVItem>): _23.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _23.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotSchema;
                    fromPartial(object: Partial<_23.SnapshotSchema>): _23.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _25.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StoreKVPair;
                    fromPartial(object: Partial<_25.StoreKVPair>): _25.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _24.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitInfo;
                    fromPartial(object: Partial<_24.CommitInfo>): _24.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _24.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StoreInfo;
                    fromPartial(object: Partial<_24.StoreInfo>): _24.StoreInfo;
                };
                CommitID: {
                    encode(message: _24.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitID;
                    fromPartial(object: Partial<_24.CommitID>): _24.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _26.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightRequest>): _26.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _26.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightResponse>): _26.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _26.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetRequest>): _26.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _26.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetResponse>): _26.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _26.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Validator;
                    fromPartial(object: Partial<_26.Validator>): _26.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _26.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_26.GetBlockByHeightRequest>): _26.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _26.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_26.GetBlockByHeightResponse>): _26.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _26.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockRequest;
                    fromPartial(_: Partial<_26.GetLatestBlockRequest>): _26.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _26.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockResponse;
                    fromPartial(object: Partial<_26.GetLatestBlockResponse>): _26.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _26.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingRequest;
                    fromPartial(_: Partial<_26.GetSyncingRequest>): _26.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _26.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingResponse;
                    fromPartial(object: Partial<_26.GetSyncingResponse>): _26.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _26.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoRequest;
                    fromPartial(_: Partial<_26.GetNodeInfoRequest>): _26.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _26.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoResponse;
                    fromPartial(object: Partial<_26.GetNodeInfoResponse>): _26.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _26.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.VersionInfo;
                    fromPartial(object: Partial<_26.VersionInfo>): _26.VersionInfo;
                };
                Module: {
                    encode(message: _26.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Module;
                    fromPartial(object: Partial<_26.Module>): _26.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _27.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Coin;
                fromPartial(object: Partial<_27.Coin>): _27.Coin;
            };
            DecCoin: {
                encode(message: _27.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecCoin;
                fromPartial(object: Partial<_27.DecCoin>): _27.DecCoin;
            };
            IntProto: {
                encode(message: _27.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.IntProto;
                fromPartial(object: Partial<_27.IntProto>): _27.IntProto;
            };
            DecProto: {
                encode(message: _27.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecProto;
                fromPartial(object: Partial<_27.DecProto>): _27.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _29.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisOwners;
                fromPartial(object: Partial<_29.GenesisOwners>): _29.GenesisOwners;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
            };
            Capability: {
                encode(message: _28.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Capability;
                fromPartial(object: Partial<_28.Capability>): _28.Capability;
            };
            Owner: {
                encode(message: _28.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Owner;
                fromPartial(object: Partial<_28.Owner>): _28.Owner;
            };
            CapabilityOwners: {
                encode(message: _28.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.CapabilityOwners;
                fromPartial(object: Partial<_28.CapabilityOwners>): _28.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _31.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _31.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _31.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _31.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _31.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariant;
                fromPartial(object: Partial<_31.MsgVerifyInvariant>): _31.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _31.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_31.MsgVerifyInvariantResponse>): _31.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _33.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.BIP44Params;
                    fromPartial(object: Partial<_33.BIP44Params>): _33.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _34.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record;
                    fromPartial(object: Partial<_34.Record>): _34.Record;
                };
                Record_Local: {
                    encode(message: _34.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Local;
                    fromPartial(object: Partial<_34.Record_Local>): _34.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _34.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Ledger;
                    fromPartial(object: Partial<_34.Record_Ledger>): _34.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _34.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Multi;
                    fromPartial(_: Partial<_34.Record_Multi>): _34.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _34.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Offline;
                    fromPartial(_: Partial<_34.Record_Offline>): _34.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _35.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.LegacyAminoPubKey;
                fromPartial(object: Partial<_35.LegacyAminoPubKey>): _35.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromPartial(object: Partial<_36.PubKey>): _36.PubKey;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromPartial(object: Partial<_36.PrivKey>): _36.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PubKey;
                fromPartial(object: Partial<_37.PubKey>): _37.PubKey;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PrivKey;
                fromPartial(object: Partial<_37.PrivKey>): _37.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _41.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _41.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _41.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _41.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _41.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _41.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _41.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _41.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _41.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _41.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _41.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _41.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _41.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _41.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _41.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _41.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _41.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_41.MsgSetWithdrawAddress>): _41.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _41.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_41.MsgSetWithdrawAddressResponse>): _41.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _41.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_41.MsgWithdrawDelegatorReward>): _41.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _41.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_41.MsgWithdrawDelegatorRewardResponse>): _41.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _41.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_41.MsgWithdrawValidatorCommission>): _41.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _41.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_41.MsgWithdrawValidatorCommissionResponse>): _41.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _41.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPool;
                fromPartial(object: Partial<_41.MsgFundCommunityPool>): _41.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _41.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_41.MsgFundCommunityPoolResponse>): _41.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _40.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_40.QueryValidatorOutstandingRewardsRequest>): _40.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _40.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_40.QueryValidatorOutstandingRewardsResponse>): _40.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _40.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_40.QueryValidatorCommissionRequest>): _40.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _40.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_40.QueryValidatorCommissionResponse>): _40.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _40.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_40.QueryValidatorSlashesRequest>): _40.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _40.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_40.QueryValidatorSlashesResponse>): _40.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _40.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_40.QueryDelegationRewardsRequest>): _40.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _40.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_40.QueryDelegationRewardsResponse>): _40.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _40.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_40.QueryDelegationTotalRewardsRequest>): _40.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _40.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_40.QueryDelegationTotalRewardsResponse>): _40.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _40.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_40.QueryDelegatorValidatorsRequest>): _40.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _40.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_40.QueryDelegatorValidatorsResponse>): _40.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _40.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_40.QueryDelegatorWithdrawAddressRequest>): _40.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _40.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_40.QueryDelegatorWithdrawAddressResponse>): _40.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _40.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_40.QueryCommunityPoolRequest>): _40.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _40.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_40.QueryCommunityPoolResponse>): _40.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _39.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_39.DelegatorWithdrawInfo>): _39.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _39.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_39.ValidatorOutstandingRewardsRecord>): _39.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _39.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_39.ValidatorAccumulatedCommissionRecord>): _39.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _39.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_39.ValidatorHistoricalRewardsRecord>): _39.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _39.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_39.ValidatorCurrentRewardsRecord>): _39.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _39.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_39.DelegatorStartingInfoRecord>): _39.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _39.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_39.ValidatorSlashEventRecord>): _39.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
            };
            Params: {
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Params;
                fromPartial(object: Partial<_38.Params>): _38.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _38.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_38.ValidatorHistoricalRewards>): _38.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _38.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorCurrentRewards;
                fromPartial(object: Partial<_38.ValidatorCurrentRewards>): _38.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _38.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_38.ValidatorAccumulatedCommission>): _38.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _38.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_38.ValidatorOutstandingRewards>): _38.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _38.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvent;
                fromPartial(object: Partial<_38.ValidatorSlashEvent>): _38.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _38.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvents;
                fromPartial(object: Partial<_38.ValidatorSlashEvents>): _38.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _38.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.FeePool;
                fromPartial(object: Partial<_38.FeePool>): _38.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _38.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_38.CommunityPoolSpendProposal>): _38.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _38.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorStartingInfo;
                fromPartial(object: Partial<_38.DelegatorStartingInfo>): _38.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _38.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegationDelegatorReward;
                fromPartial(object: Partial<_38.DelegationDelegatorReward>): _38.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _38.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_38.CommunityPoolSpendProposalWithDeposit>): _38.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _45.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _45.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _45.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _45.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _45.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidence;
                fromPartial(object: Partial<_45.MsgSubmitEvidence>): _45.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _45.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_45.MsgSubmitEvidenceResponse>): _45.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _44.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceRequest;
                fromPartial(object: Partial<_44.QueryEvidenceRequest>): _44.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _44.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceResponse;
                fromPartial(object: Partial<_44.QueryEvidenceResponse>): _44.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _44.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_44.QueryAllEvidenceRequest>): _44.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _44.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_44.QueryAllEvidenceResponse>): _44.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            };
            Equivocation: {
                encode(message: _42.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Equivocation;
                fromPartial(object: Partial<_42.Equivocation>): _42.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _49.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _49.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _49.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _49.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _49.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _49.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _49.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _49.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _49.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowance;
                fromPartial(object: Partial<_49.MsgGrantAllowance>): _49.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _49.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_49.MsgGrantAllowanceResponse>): _49.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _49.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowance;
                fromPartial(object: Partial<_49.MsgRevokeAllowance>): _49.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _49.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_49.MsgRevokeAllowanceResponse>): _49.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _48.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceRequest;
                fromPartial(object: Partial<_48.QueryAllowanceRequest>): _48.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _48.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceResponse;
                fromPartial(object: Partial<_48.QueryAllowanceResponse>): _48.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _48.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesRequest;
                fromPartial(object: Partial<_48.QueryAllowancesRequest>): _48.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _48.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesResponse;
                fromPartial(object: Partial<_48.QueryAllowancesResponse>): _48.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _48.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_48.QueryAllowancesByGranterRequest>): _48.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _48.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_48.QueryAllowancesByGranterResponse>): _48.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
            BasicAllowance: {
                encode(message: _46.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.BasicAllowance;
                fromPartial(object: Partial<_46.BasicAllowance>): _46.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _46.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PeriodicAllowance;
                fromPartial(object: Partial<_46.PeriodicAllowance>): _46.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _46.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.AllowedMsgAllowance;
                fromPartial(object: Partial<_46.AllowedMsgAllowance>): _46.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _46.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Grant;
                fromPartial(object: Partial<_46.Grant>): _46.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _54.MsgExecLegacyContent;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: _54.MsgVote;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _54.MsgVoteWeighted;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: _54.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _54.MsgExecLegacyContent;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: _54.MsgVote;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _54.MsgVoteWeighted;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: _54.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _54.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _54.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _54.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _54.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _54.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _54.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _54.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _54.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _54.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _54.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _54.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposal;
                fromPartial(object: Partial<_54.MsgSubmitProposal>): _54.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _54.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_54.MsgSubmitProposalResponse>): _54.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _54.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgExecLegacyContent;
                fromPartial(object: Partial<_54.MsgExecLegacyContent>): _54.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _54.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_54.MsgExecLegacyContentResponse>): _54.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _54.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVote;
                fromPartial(object: Partial<_54.MsgVote>): _54.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _54.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteResponse;
                fromPartial(_: Partial<_54.MsgVoteResponse>): _54.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _54.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeighted;
                fromPartial(object: Partial<_54.MsgVoteWeighted>): _54.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _54.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_54.MsgVoteWeightedResponse>): _54.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _54.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDeposit;
                fromPartial(object: Partial<_54.MsgDeposit>): _54.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _54.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDepositResponse;
                fromPartial(_: Partial<_54.MsgDepositResponse>): _54.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _53.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalRequest;
                fromPartial(object: Partial<_53.QueryProposalRequest>): _53.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _53.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalResponse;
                fromPartial(object: Partial<_53.QueryProposalResponse>): _53.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _53.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsRequest;
                fromPartial(object: Partial<_53.QueryProposalsRequest>): _53.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _53.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsResponse;
                fromPartial(object: Partial<_53.QueryProposalsResponse>): _53.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _53.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteRequest;
                fromPartial(object: Partial<_53.QueryVoteRequest>): _53.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _53.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteResponse;
                fromPartial(object: Partial<_53.QueryVoteResponse>): _53.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _53.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesRequest;
                fromPartial(object: Partial<_53.QueryVotesRequest>): _53.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _53.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesResponse;
                fromPartial(object: Partial<_53.QueryVotesResponse>): _53.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _53.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsRequest;
                fromPartial(object: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _53.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsResponse;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _53.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositRequest;
                fromPartial(object: Partial<_53.QueryDepositRequest>): _53.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _53.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositResponse;
                fromPartial(object: Partial<_53.QueryDepositResponse>): _53.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _53.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsRequest;
                fromPartial(object: Partial<_53.QueryDepositsRequest>): _53.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _53.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsResponse;
                fromPartial(object: Partial<_53.QueryDepositsResponse>): _53.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _53.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultRequest;
                fromPartial(object: Partial<_53.QueryTallyResultRequest>): _53.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _53.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultResponse;
                fromPartial(object: Partial<_53.QueryTallyResultResponse>): _53.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _52.VoteOption;
            voteOptionToJSON(object: _52.VoteOption): string;
            proposalStatusFromJSON(object: any): _52.ProposalStatus;
            proposalStatusToJSON(object: _52.ProposalStatus): string;
            VoteOption: typeof _52.VoteOption;
            VoteOptionSDKType: typeof _52.VoteOptionSDKType;
            ProposalStatus: typeof _52.ProposalStatus;
            ProposalStatusSDKType: typeof _52.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _52.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.WeightedVoteOption;
                fromPartial(object: Partial<_52.WeightedVoteOption>): _52.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _52.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Deposit;
                fromPartial(object: Partial<_52.Deposit>): _52.Deposit;
            };
            Proposal: {
                encode(message: _52.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Proposal;
                fromPartial(object: Partial<_52.Proposal>): _52.Proposal;
            };
            TallyResult: {
                encode(message: _52.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyResult;
                fromPartial(object: Partial<_52.TallyResult>): _52.TallyResult;
            };
            Vote: {
                encode(message: _52.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Vote;
                fromPartial(object: Partial<_52.Vote>): _52.Vote;
            };
            DepositParams: {
                encode(message: _52.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DepositParams;
                fromPartial(object: Partial<_52.DepositParams>): _52.DepositParams;
            };
            VotingParams: {
                encode(message: _52.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.VotingParams;
                fromPartial(object: Partial<_52.VotingParams>): _52.VotingParams;
            };
            TallyParams: {
                encode(message: _52.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyParams;
                fromPartial(object: Partial<_52.TallyParams>): _52.TallyParams;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _58.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _58.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _58.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _58.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _58.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _58.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _58.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _58.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _58.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposal;
                fromPartial(object: Partial<_58.MsgSubmitProposal>): _58.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _58.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_58.MsgSubmitProposalResponse>): _58.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _58.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVote;
                fromPartial(object: Partial<_58.MsgVote>): _58.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _58.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteResponse;
                fromPartial(_: Partial<_58.MsgVoteResponse>): _58.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _58.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeighted;
                fromPartial(object: Partial<_58.MsgVoteWeighted>): _58.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _58.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_58.MsgVoteWeightedResponse>): _58.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _58.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeposit;
                fromPartial(object: Partial<_58.MsgDeposit>): _58.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _58.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDepositResponse;
                fromPartial(_: Partial<_58.MsgDepositResponse>): _58.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _57.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalRequest;
                fromPartial(object: Partial<_57.QueryProposalRequest>): _57.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _57.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalResponse;
                fromPartial(object: Partial<_57.QueryProposalResponse>): _57.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _57.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsRequest;
                fromPartial(object: Partial<_57.QueryProposalsRequest>): _57.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _57.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsResponse;
                fromPartial(object: Partial<_57.QueryProposalsResponse>): _57.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _57.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteRequest;
                fromPartial(object: Partial<_57.QueryVoteRequest>): _57.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _57.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteResponse;
                fromPartial(object: Partial<_57.QueryVoteResponse>): _57.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _57.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesRequest;
                fromPartial(object: Partial<_57.QueryVotesRequest>): _57.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _57.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesResponse;
                fromPartial(object: Partial<_57.QueryVotesResponse>): _57.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                fromPartial(object: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _57.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositRequest;
                fromPartial(object: Partial<_57.QueryDepositRequest>): _57.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _57.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositResponse;
                fromPartial(object: Partial<_57.QueryDepositResponse>): _57.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _57.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsRequest;
                fromPartial(object: Partial<_57.QueryDepositsRequest>): _57.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _57.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsResponse;
                fromPartial(object: Partial<_57.QueryDepositsResponse>): _57.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _57.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultRequest;
                fromPartial(object: Partial<_57.QueryTallyResultRequest>): _57.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _57.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultResponse;
                fromPartial(object: Partial<_57.QueryTallyResultResponse>): _57.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _56.VoteOption;
            voteOptionToJSON(object: _56.VoteOption): string;
            proposalStatusFromJSON(object: any): _56.ProposalStatus;
            proposalStatusToJSON(object: _56.ProposalStatus): string;
            VoteOption: typeof _56.VoteOption;
            VoteOptionSDKType: typeof _56.VoteOptionSDKType;
            ProposalStatus: typeof _56.ProposalStatus;
            ProposalStatusSDKType: typeof _56.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _56.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.WeightedVoteOption;
                fromPartial(object: Partial<_56.WeightedVoteOption>): _56.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _56.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TextProposal;
                fromPartial(object: Partial<_56.TextProposal>): _56.TextProposal;
            };
            Deposit: {
                encode(message: _56.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Deposit;
                fromPartial(object: Partial<_56.Deposit>): _56.Deposit;
            };
            Proposal: {
                encode(message: _56.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Proposal;
                fromPartial(object: Partial<_56.Proposal>): _56.Proposal;
            };
            TallyResult: {
                encode(message: _56.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyResult;
                fromPartial(object: Partial<_56.TallyResult>): _56.TallyResult;
            };
            Vote: {
                encode(message: _56.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Vote;
                fromPartial(object: Partial<_56.Vote>): _56.Vote;
            };
            DepositParams: {
                encode(message: _56.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DepositParams;
                fromPartial(object: Partial<_56.DepositParams>): _56.DepositParams;
            };
            VotingParams: {
                encode(message: _56.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.VotingParams;
                fromPartial(object: Partial<_56.VotingParams>): _56.VotingParams;
            };
            TallyParams: {
                encode(message: _56.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyParams;
                fromPartial(object: Partial<_56.TallyParams>): _56.TallyParams;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _62.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _62.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _62.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _62.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _62.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _62.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _62.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _62.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _62.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _62.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _62.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _62.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _62.MsgCreateGroup): {
                        typeUrl: string;
                        value: _62.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _62.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _62.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _62.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _62.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _62.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _62.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _62.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _62.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _62.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _62.MsgWithdrawProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    exec(value: _62.MsgExec): {
                        typeUrl: string;
                        value: _62.MsgExec;
                    };
                    leaveGroup(value: _62.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _62.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _62.MsgCreateGroup): {
                        typeUrl: string;
                        value: _62.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _62.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _62.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _62.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _62.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _62.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _62.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _62.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _62.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _62.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _62.MsgWithdrawProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    exec(value: _62.MsgExec): {
                        typeUrl: string;
                        value: _62.MsgExec;
                    };
                    leaveGroup(value: _62.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _62.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _62.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _62.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _62.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _62.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _62.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _62.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _62.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _62.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _62.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _62.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _62.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _62.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _62.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _62.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _62.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _62.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _62.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _62.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _62.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _62.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _62.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _62.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _62.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _62.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _62.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _62.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _62.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _62.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _63.VoteOption;
            voteOptionToJSON(object: _63.VoteOption): string;
            proposalStatusFromJSON(object: any): _63.ProposalStatus;
            proposalStatusToJSON(object: _63.ProposalStatus): string;
            proposalResultFromJSON(object: any): _63.ProposalResult;
            proposalResultToJSON(object: _63.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _63.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _63.ProposalExecutorResult): string;
            VoteOption: typeof _63.VoteOption;
            VoteOptionSDKType: typeof _63.VoteOptionSDKType;
            ProposalStatus: typeof _63.ProposalStatus;
            ProposalStatusSDKType: typeof _63.ProposalStatusSDKType;
            ProposalResult: typeof _63.ProposalResult;
            ProposalResultSDKType: typeof _63.ProposalResultSDKType;
            ProposalExecutorResult: typeof _63.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _63.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _63.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Member;
                fromPartial(object: Partial<_63.Member>): _63.Member;
            };
            Members: {
                encode(message: _63.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Members;
                fromPartial(object: Partial<_63.Members>): _63.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _63.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_63.ThresholdDecisionPolicy>): _63.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _63.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PercentageDecisionPolicy;
                fromPartial(object: Partial<_63.PercentageDecisionPolicy>): _63.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _63.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DecisionPolicyWindows;
                fromPartial(object: Partial<_63.DecisionPolicyWindows>): _63.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _63.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupInfo;
                fromPartial(object: Partial<_63.GroupInfo>): _63.GroupInfo;
            };
            GroupMember: {
                encode(message: _63.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupMember;
                fromPartial(object: Partial<_63.GroupMember>): _63.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _63.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupPolicyInfo;
                fromPartial(object: Partial<_63.GroupPolicyInfo>): _63.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _63.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Proposal;
                fromPartial(object: Partial<_63.Proposal>): _63.Proposal;
            };
            TallyResult: {
                encode(message: _63.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TallyResult;
                fromPartial(object: Partial<_63.TallyResult>): _63.TallyResult;
            };
            Vote: {
                encode(message: _63.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Vote;
                fromPartial(object: Partial<_63.Vote>): _63.Vote;
            };
            execFromJSON(object: any): _62.Exec;
            execToJSON(object: _62.Exec): string;
            Exec: typeof _62.Exec;
            ExecSDKType: typeof _62.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _62.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroup;
                fromPartial(object: Partial<_62.MsgCreateGroup>): _62.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _62.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupResponse;
                fromPartial(object: Partial<_62.MsgCreateGroupResponse>): _62.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _62.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_62.MsgUpdateGroupMembers>): _62.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _62.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_62.MsgUpdateGroupMembersResponse>): _62.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _62.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_62.MsgUpdateGroupAdmin>): _62.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _62.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_62.MsgUpdateGroupAdminResponse>): _62.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _62.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_62.MsgUpdateGroupMetadata>): _62.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _62.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_62.MsgUpdateGroupMetadataResponse>): _62.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _62.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_62.MsgCreateGroupPolicy>): _62.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _62.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_62.MsgCreateGroupPolicyResponse>): _62.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _62.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyAdmin>): _62.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _62.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_62.MsgCreateGroupWithPolicy>): _62.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _62.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_62.MsgCreateGroupWithPolicyResponse>): _62.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _62.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyAdminResponse>): _62.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _62.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyDecisionPolicy>): _62.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _62.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyDecisionPolicyResponse>): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _62.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyMetadata>): _62.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _62.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyMetadataResponse>): _62.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _62.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposal;
                fromPartial(object: Partial<_62.MsgSubmitProposal>): _62.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _62.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_62.MsgSubmitProposalResponse>): _62.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _62.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgWithdrawProposal;
                fromPartial(object: Partial<_62.MsgWithdrawProposal>): _62.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _62.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_62.MsgWithdrawProposalResponse>): _62.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _62.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVote;
                fromPartial(object: Partial<_62.MsgVote>): _62.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _62.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteResponse;
                fromPartial(_: Partial<_62.MsgVoteResponse>): _62.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _62.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExec;
                fromPartial(object: Partial<_62.MsgExec>): _62.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _62.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExecResponse;
                fromPartial(_: Partial<_62.MsgExecResponse>): _62.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _62.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgLeaveGroup;
                fromPartial(object: Partial<_62.MsgLeaveGroup>): _62.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _62.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_62.MsgLeaveGroupResponse>): _62.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _61.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupInfoRequest;
                fromPartial(object: Partial<_61.QueryGroupInfoRequest>): _61.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _61.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupInfoResponse;
                fromPartial(object: Partial<_61.QueryGroupInfoResponse>): _61.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _61.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_61.QueryGroupPolicyInfoRequest>): _61.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _61.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_61.QueryGroupPolicyInfoResponse>): _61.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _61.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupMembersRequest;
                fromPartial(object: Partial<_61.QueryGroupMembersRequest>): _61.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _61.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupMembersResponse;
                fromPartial(object: Partial<_61.QueryGroupMembersResponse>): _61.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _61.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_61.QueryGroupsByAdminRequest>): _61.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _61.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_61.QueryGroupsByAdminResponse>): _61.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _61.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByGroupRequest>): _61.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _61.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByGroupResponse>): _61.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _61.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByAdminRequest>): _61.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _61.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByAdminResponse>): _61.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _61.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalRequest;
                fromPartial(object: Partial<_61.QueryProposalRequest>): _61.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _61.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalResponse;
                fromPartial(object: Partial<_61.QueryProposalResponse>): _61.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _61.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_61.QueryProposalsByGroupPolicyRequest>): _61.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _61.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_61.QueryProposalsByGroupPolicyResponse>): _61.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _61.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_61.QueryVoteByProposalVoterRequest>): _61.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _61.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_61.QueryVoteByProposalVoterResponse>): _61.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _61.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_61.QueryVotesByProposalRequest>): _61.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _61.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_61.QueryVotesByProposalResponse>): _61.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _61.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_61.QueryVotesByVoterRequest>): _61.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _61.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_61.QueryVotesByVoterResponse>): _61.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _61.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_61.QueryGroupsByMemberRequest>): _61.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _61.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_61.QueryGroupsByMemberResponse>): _61.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _61.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultRequest;
                fromPartial(object: Partial<_61.QueryTallyResultRequest>): _61.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _61.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultResponse;
                fromPartial(object: Partial<_61.QueryTallyResultResponse>): _61.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _59.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventCreateGroup;
                fromPartial(object: Partial<_59.EventCreateGroup>): _59.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _59.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventUpdateGroup;
                fromPartial(object: Partial<_59.EventUpdateGroup>): _59.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _59.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventCreateGroupPolicy;
                fromPartial(object: Partial<_59.EventCreateGroupPolicy>): _59.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _59.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_59.EventUpdateGroupPolicy>): _59.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _59.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventSubmitProposal;
                fromPartial(object: Partial<_59.EventSubmitProposal>): _59.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _59.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventWithdrawProposal;
                fromPartial(object: Partial<_59.EventWithdrawProposal>): _59.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _59.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventVote;
                fromPartial(object: Partial<_59.EventVote>): _59.EventVote;
            };
            EventExec: {
                encode(message: _59.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventExec;
                fromPartial(object: Partial<_59.EventExec>): _59.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _59.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventLeaveGroup;
                fromPartial(object: Partial<_59.EventLeaveGroup>): _59.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _66.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInflationRequest;
                fromPartial(_: Partial<_66.QueryInflationRequest>): _66.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _66.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInflationResponse;
                fromPartial(object: Partial<_66.QueryInflationResponse>): _66.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _66.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_66.QueryAnnualProvisionsRequest>): _66.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _66.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_66.QueryAnnualProvisionsResponse>): _66.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _65.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Minter;
                fromPartial(object: Partial<_65.Minter>): _65.Minter;
            };
            Params: {
                encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: _72.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: _72.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _72.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _72.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _72.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgSend;
                fromPartial(object: Partial<_72.MsgSend>): _72.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _72.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgSendResponse;
                fromPartial(_: Partial<_72.MsgSendResponse>): _72.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _71.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryBalanceRequest;
                fromPartial(object: Partial<_71.QueryBalanceRequest>): _71.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _71.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryBalanceResponse;
                fromPartial(object: Partial<_71.QueryBalanceResponse>): _71.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _71.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryOwnerRequest;
                fromPartial(object: Partial<_71.QueryOwnerRequest>): _71.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _71.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryOwnerResponse;
                fromPartial(object: Partial<_71.QueryOwnerResponse>): _71.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _71.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QuerySupplyRequest;
                fromPartial(object: Partial<_71.QuerySupplyRequest>): _71.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _71.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QuerySupplyResponse;
                fromPartial(object: Partial<_71.QuerySupplyResponse>): _71.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _71.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTsRequest;
                fromPartial(object: Partial<_71.QueryNFTsRequest>): _71.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _71.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTsResponse;
                fromPartial(object: Partial<_71.QueryNFTsResponse>): _71.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _71.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTRequest;
                fromPartial(object: Partial<_71.QueryNFTRequest>): _71.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _71.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTResponse;
                fromPartial(object: Partial<_71.QueryNFTResponse>): _71.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _71.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassRequest;
                fromPartial(object: Partial<_71.QueryClassRequest>): _71.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _71.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassResponse;
                fromPartial(object: Partial<_71.QueryClassResponse>): _71.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _71.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassesRequest;
                fromPartial(object: Partial<_71.QueryClassesRequest>): _71.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _71.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassesResponse;
                fromPartial(object: Partial<_71.QueryClassesResponse>): _71.QueryClassesResponse;
            };
            Class: {
                encode(message: _70.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Class;
                fromPartial(object: Partial<_70.Class>): _70.Class;
            };
            NFT: {
                encode(message: _70.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.NFT;
                fromPartial(object: Partial<_70.NFT>): _70.NFT;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
            Entry: {
                encode(message: _69.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Entry;
                fromPartial(object: Partial<_69.Entry>): _69.Entry;
            };
            EventSend: {
                encode(message: _68.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventSend;
                fromPartial(object: Partial<_68.EventSend>): _68.EventSend;
            };
            EventMint: {
                encode(message: _68.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventMint;
                fromPartial(object: Partial<_68.EventMint>): _68.EventMint;
            };
            EventBurn: {
                encode(message: _68.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventBurn;
                fromPartial(object: Partial<_68.EventBurn>): _68.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _73.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TableDescriptor;
                fromPartial(object: Partial<_73.TableDescriptor>): _73.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _73.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_73.PrimaryKeyDescriptor>): _73.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _73.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_73.SecondaryIndexDescriptor>): _73.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _73.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SingletonDescriptor;
                fromPartial(object: Partial<_73.SingletonDescriptor>): _73.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _74.StorageType;
            storageTypeToJSON(object: _74.StorageType): string;
            StorageType: typeof _74.StorageType;
            StorageTypeSDKType: typeof _74.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _74.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_74.ModuleSchemaDescriptor>): _74.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _74.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_74.ModuleSchemaDescriptor_FileEntry>): _74.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _76.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsRequest;
                fromPartial(object: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _76.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsResponse;
                fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _76.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QuerySubspacesRequest;
                fromPartial(_: Partial<_76.QuerySubspacesRequest>): _76.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _76.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QuerySubspacesResponse;
                fromPartial(object: Partial<_76.QuerySubspacesResponse>): _76.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _76.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Subspace;
                fromPartial(object: Partial<_76.Subspace>): _76.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _75.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ParameterChangeProposal;
                fromPartial(object: Partial<_75.ParameterChangeProposal>): _75.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _75.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ParamChange;
                fromPartial(object: Partial<_75.ParamChange>): _75.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _80.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _80.MsgUnjail): {
                        typeUrl: string;
                        value: _80.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _80.MsgUnjail): {
                        typeUrl: string;
                        value: _80.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _80.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _80.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _80.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUnjail;
                fromPartial(object: Partial<_80.MsgUnjail>): _80.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _80.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUnjailResponse;
                fromPartial(_: Partial<_80.MsgUnjailResponse>): _80.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _79.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ValidatorSigningInfo;
                fromPartial(object: Partial<_79.ValidatorSigningInfo>): _79.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _79.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Params;
                fromPartial(object: Partial<_79.Params>): _79.Params;
            };
            QueryParamsRequest: {
                encode(_: _78.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsRequest;
                fromPartial(_: Partial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _78.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsResponse;
                fromPartial(object: Partial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _78.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySigningInfoRequest;
                fromPartial(object: Partial<_78.QuerySigningInfoRequest>): _78.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _78.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySigningInfoResponse;
                fromPartial(object: Partial<_78.QuerySigningInfoResponse>): _78.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _78.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySigningInfosRequest;
                fromPartial(object: Partial<_78.QuerySigningInfosRequest>): _78.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _78.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySigningInfosResponse;
                fromPartial(object: Partial<_78.QuerySigningInfosResponse>): _78.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
            SigningInfo: {
                encode(message: _77.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SigningInfo;
                fromPartial(object: Partial<_77.SigningInfo>): _77.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _77.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ValidatorMissedBlocks;
                fromPartial(object: Partial<_77.ValidatorMissedBlocks>): _77.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _77.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MissedBlock;
                fromPartial(object: Partial<_77.MissedBlock>): _77.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: _85.MsgCreateValidator;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: _85.MsgEditValidator;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: _85.MsgDelegate;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _85.MsgBeginRedelegate;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: _85.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: _85.MsgCreateValidator;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: _85.MsgEditValidator;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: _85.MsgDelegate;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _85.MsgBeginRedelegate;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: _85.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _85.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _85.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _85.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _85.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _85.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _85.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _85.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _85.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _85.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _85.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _85.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateValidator;
                fromPartial(object: Partial<_85.MsgCreateValidator>): _85.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _85.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_85.MsgCreateValidatorResponse>): _85.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _85.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgEditValidator;
                fromPartial(object: Partial<_85.MsgEditValidator>): _85.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _85.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgEditValidatorResponse;
                fromPartial(_: Partial<_85.MsgEditValidatorResponse>): _85.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _85.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgDelegate;
                fromPartial(object: Partial<_85.MsgDelegate>): _85.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _85.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgDelegateResponse;
                fromPartial(_: Partial<_85.MsgDelegateResponse>): _85.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _85.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgBeginRedelegate;
                fromPartial(object: Partial<_85.MsgBeginRedelegate>): _85.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _85.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_85.MsgBeginRedelegateResponse>): _85.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _85.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUndelegate;
                fromPartial(object: Partial<_85.MsgUndelegate>): _85.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _85.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUndelegateResponse;
                fromPartial(object: Partial<_85.MsgUndelegateResponse>): _85.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _84.BondStatus;
            bondStatusToJSON(object: _84.BondStatus): string;
            BondStatus: typeof _84.BondStatus;
            BondStatusSDKType: typeof _84.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _84.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.HistoricalInfo;
                fromPartial(object: Partial<_84.HistoricalInfo>): _84.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _84.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.CommissionRates;
                fromPartial(object: Partial<_84.CommissionRates>): _84.CommissionRates;
            };
            Commission: {
                encode(message: _84.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Commission;
                fromPartial(object: Partial<_84.Commission>): _84.Commission;
            };
            Description: {
                encode(message: _84.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Description;
                fromPartial(object: Partial<_84.Description>): _84.Description;
            };
            Validator: {
                encode(message: _84.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Validator;
                fromPartial(object: Partial<_84.Validator>): _84.Validator;
            };
            ValAddresses: {
                encode(message: _84.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ValAddresses;
                fromPartial(object: Partial<_84.ValAddresses>): _84.ValAddresses;
            };
            DVPair: {
                encode(message: _84.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DVPair;
                fromPartial(object: Partial<_84.DVPair>): _84.DVPair;
            };
            DVPairs: {
                encode(message: _84.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DVPairs;
                fromPartial(object: Partial<_84.DVPairs>): _84.DVPairs;
            };
            DVVTriplet: {
                encode(message: _84.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DVVTriplet;
                fromPartial(object: Partial<_84.DVVTriplet>): _84.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _84.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DVVTriplets;
                fromPartial(object: Partial<_84.DVVTriplets>): _84.DVVTriplets;
            };
            Delegation: {
                encode(message: _84.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Delegation;
                fromPartial(object: Partial<_84.Delegation>): _84.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _84.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.UnbondingDelegation;
                fromPartial(object: Partial<_84.UnbondingDelegation>): _84.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _84.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.UnbondingDelegationEntry;
                fromPartial(object: Partial<_84.UnbondingDelegationEntry>): _84.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _84.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RedelegationEntry;
                fromPartial(object: Partial<_84.RedelegationEntry>): _84.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _84.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Redelegation;
                fromPartial(object: Partial<_84.Redelegation>): _84.Redelegation;
            };
            Params: {
                encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                fromPartial(object: Partial<_84.Params>): _84.Params;
            };
            DelegationResponse: {
                encode(message: _84.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DelegationResponse;
                fromPartial(object: Partial<_84.DelegationResponse>): _84.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _84.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RedelegationEntryResponse;
                fromPartial(object: Partial<_84.RedelegationEntryResponse>): _84.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _84.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RedelegationResponse;
                fromPartial(object: Partial<_84.RedelegationResponse>): _84.RedelegationResponse;
            };
            Pool: {
                encode(message: _84.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Pool;
                fromPartial(object: Partial<_84.Pool>): _84.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _83.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorsRequest;
                fromPartial(object: Partial<_83.QueryValidatorsRequest>): _83.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _83.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorsResponse;
                fromPartial(object: Partial<_83.QueryValidatorsResponse>): _83.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _83.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorRequest;
                fromPartial(object: Partial<_83.QueryValidatorRequest>): _83.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _83.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorResponse;
                fromPartial(object: Partial<_83.QueryValidatorResponse>): _83.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _83.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_83.QueryValidatorDelegationsRequest>): _83.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _83.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_83.QueryValidatorDelegationsResponse>): _83.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _83.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_83.QueryValidatorUnbondingDelegationsRequest>): _83.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _83.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_83.QueryValidatorUnbondingDelegationsResponse>): _83.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _83.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegationRequest;
                fromPartial(object: Partial<_83.QueryDelegationRequest>): _83.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _83.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegationResponse;
                fromPartial(object: Partial<_83.QueryDelegationResponse>): _83.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _83.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_83.QueryUnbondingDelegationRequest>): _83.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _83.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_83.QueryUnbondingDelegationResponse>): _83.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _83.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_83.QueryDelegatorDelegationsRequest>): _83.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _83.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_83.QueryDelegatorDelegationsResponse>): _83.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _83.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_83.QueryDelegatorUnbondingDelegationsRequest>): _83.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _83.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_83.QueryDelegatorUnbondingDelegationsResponse>): _83.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _83.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryRedelegationsRequest;
                fromPartial(object: Partial<_83.QueryRedelegationsRequest>): _83.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _83.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryRedelegationsResponse;
                fromPartial(object: Partial<_83.QueryRedelegationsResponse>): _83.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _83.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorsRequest>): _83.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _83.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorsResponse>): _83.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _83.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorRequest>): _83.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _83.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorResponse>): _83.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _83.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_83.QueryHistoricalInfoRequest>): _83.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _83.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_83.QueryHistoricalInfoResponse>): _83.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _83.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolRequest;
                fromPartial(_: Partial<_83.QueryPoolRequest>): _83.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _83.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolResponse;
                fromPartial(object: Partial<_83.QueryPoolResponse>): _83.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _83.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryParamsRequest;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _83.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryParamsResponse;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _82.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.LastValidatorPower;
                fromPartial(object: Partial<_82.LastValidatorPower>): _82.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _81.AuthorizationType;
            authorizationTypeToJSON(object: _81.AuthorizationType): string;
            AuthorizationType: typeof _81.AuthorizationType;
            AuthorizationTypeSDKType: typeof _81.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _81.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.StakeAuthorization;
                fromPartial(object: Partial<_81.StakeAuthorization>): _81.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _81.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.StakeAuthorization_Validators;
                fromPartial(object: Partial<_81.StakeAuthorization_Validators>): _81.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _86.SignMode;
                signModeToJSON(object: _86.SignMode): string;
                SignMode: typeof _86.SignMode;
                SignModeSDKType: typeof _86.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _86.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptors;
                    fromPartial(object: Partial<_86.SignatureDescriptors>): _86.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _86.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptor;
                    fromPartial(object: Partial<_86.SignatureDescriptor>): _86.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _86.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_86.SignatureDescriptor_Data>): _86.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _86.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_86.SignatureDescriptor_Data_Single>): _86.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _86.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_86.SignatureDescriptor_Data_Multi>): _86.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _88.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Tx;
                fromPartial(object: Partial<_88.Tx>): _88.Tx;
            };
            TxRaw: {
                encode(message: _88.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.TxRaw;
                fromPartial(object: Partial<_88.TxRaw>): _88.TxRaw;
            };
            SignDoc: {
                encode(message: _88.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignDoc;
                fromPartial(object: Partial<_88.SignDoc>): _88.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _88.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignDocDirectAux;
                fromPartial(object: Partial<_88.SignDocDirectAux>): _88.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _88.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.TxBody;
                fromPartial(object: Partial<_88.TxBody>): _88.TxBody;
            };
            AuthInfo: {
                encode(message: _88.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.AuthInfo;
                fromPartial(object: Partial<_88.AuthInfo>): _88.AuthInfo;
            };
            SignerInfo: {
                encode(message: _88.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignerInfo;
                fromPartial(object: Partial<_88.SignerInfo>): _88.SignerInfo;
            };
            ModeInfo: {
                encode(message: _88.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ModeInfo;
                fromPartial(object: Partial<_88.ModeInfo>): _88.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _88.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ModeInfo_Single;
                fromPartial(object: Partial<_88.ModeInfo_Single>): _88.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _88.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ModeInfo_Multi;
                fromPartial(object: Partial<_88.ModeInfo_Multi>): _88.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _88.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Fee;
                fromPartial(object: Partial<_88.Fee>): _88.Fee;
            };
            Tip: {
                encode(message: _88.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Tip;
                fromPartial(object: Partial<_88.Tip>): _88.Tip;
            };
            AuxSignerData: {
                encode(message: _88.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.AuxSignerData;
                fromPartial(object: Partial<_88.AuxSignerData>): _88.AuxSignerData;
            };
            orderByFromJSON(object: any): _87.OrderBy;
            orderByToJSON(object: _87.OrderBy): string;
            broadcastModeFromJSON(object: any): _87.BroadcastMode;
            broadcastModeToJSON(object: _87.BroadcastMode): string;
            OrderBy: typeof _87.OrderBy;
            OrderBySDKType: typeof _87.OrderBySDKType;
            BroadcastMode: typeof _87.BroadcastMode;
            BroadcastModeSDKType: typeof _87.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _87.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetTxsEventRequest;
                fromPartial(object: Partial<_87.GetTxsEventRequest>): _87.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _87.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetTxsEventResponse;
                fromPartial(object: Partial<_87.GetTxsEventResponse>): _87.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _87.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BroadcastTxRequest;
                fromPartial(object: Partial<_87.BroadcastTxRequest>): _87.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _87.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BroadcastTxResponse;
                fromPartial(object: Partial<_87.BroadcastTxResponse>): _87.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _87.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SimulateRequest;
                fromPartial(object: Partial<_87.SimulateRequest>): _87.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _87.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SimulateResponse;
                fromPartial(object: Partial<_87.SimulateResponse>): _87.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _87.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetTxRequest;
                fromPartial(object: Partial<_87.GetTxRequest>): _87.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _87.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetTxResponse;
                fromPartial(object: Partial<_87.GetTxResponse>): _87.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _87.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_87.GetBlockWithTxsRequest>): _87.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _87.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_87.GetBlockWithTxsResponse>): _87.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _90.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _90.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _90.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _90.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _90.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _90.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _90.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _90.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _90.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _90.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _90.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _90.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _90.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _90.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _91.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Plan;
                fromPartial(object: Partial<_91.Plan>): _91.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _91.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_91.SoftwareUpgradeProposal>): _91.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _91.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_91.CancelSoftwareUpgradeProposal>): _91.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _91.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleVersion;
                fromPartial(object: Partial<_91.ModuleVersion>): _91.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _90.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_90.MsgSoftwareUpgrade>): _90.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _90.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_90.MsgSoftwareUpgradeResponse>): _90.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _90.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCancelUpgrade;
                fromPartial(object: Partial<_90.MsgCancelUpgrade>): _90.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _90.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_90.MsgCancelUpgradeResponse>): _90.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _89.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_89.QueryCurrentPlanRequest>): _89.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _89.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_89.QueryCurrentPlanResponse>): _89.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _89.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_89.QueryAppliedPlanRequest>): _89.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _89.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_89.QueryAppliedPlanResponse>): _89.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _89.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_89.QueryUpgradedConsensusStateRequest>): _89.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _89.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_89.QueryUpgradedConsensusStateResponse>): _89.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _89.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_89.QueryModuleVersionsRequest>): _89.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _89.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_89.QueryModuleVersionsResponse>): _89.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _89.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryAuthorityRequest;
                fromPartial(_: Partial<_89.QueryAuthorityRequest>): _89.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _89.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryAuthorityResponse;
                fromPartial(object: Partial<_89.QueryAuthorityResponse>): _89.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _92.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _92.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _92.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _92.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _92.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _92.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _92.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _92.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _92.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _92.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _92.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _92.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _92.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _92.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _93.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.BaseVestingAccount;
                fromPartial(object: Partial<_93.BaseVestingAccount>): _93.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _93.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ContinuousVestingAccount;
                fromPartial(object: Partial<_93.ContinuousVestingAccount>): _93.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _93.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DelayedVestingAccount;
                fromPartial(object: Partial<_93.DelayedVestingAccount>): _93.DelayedVestingAccount;
            };
            Period: {
                encode(message: _93.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Period;
                fromPartial(object: Partial<_93.Period>): _93.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _93.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PeriodicVestingAccount;
                fromPartial(object: Partial<_93.PeriodicVestingAccount>): _93.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _93.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PermanentLockedAccount;
                fromPartial(object: Partial<_93.PermanentLockedAccount>): _93.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _92.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreateVestingAccount;
                fromPartial(object: Partial<_92.MsgCreateVestingAccount>): _92.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _92.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_92.MsgCreateVestingAccountResponse>): _92.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _92.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_92.MsgCreatePermanentLockedAccount>): _92.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _92.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_92.MsgCreatePermanentLockedAccountResponse>): _92.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _92.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_92.MsgCreatePeriodicVestingAccount>): _92.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _92.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_92.MsgCreatePeriodicVestingAccountResponse>): _92.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
}
