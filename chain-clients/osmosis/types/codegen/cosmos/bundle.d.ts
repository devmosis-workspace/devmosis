import * as _66 from "./app/module/v1alpha1/module";
import * as _67 from "./app/v1alpha1/config";
import * as _68 from "./app/v1alpha1/module";
import * as _69 from "./app/v1alpha1/query";
import * as _70 from "./auth/v1beta1/auth";
import * as _71 from "./auth/v1beta1/genesis";
import * as _72 from "./auth/v1beta1/query";
import * as _73 from "./authz/v1beta1/authz";
import * as _74 from "./authz/v1beta1/event";
import * as _75 from "./authz/v1beta1/genesis";
import * as _76 from "./authz/v1beta1/query";
import * as _77 from "./authz/v1beta1/tx";
import * as _78 from "./bank/v1beta1/authz";
import * as _79 from "./bank/v1beta1/bank";
import * as _80 from "./bank/v1beta1/genesis";
import * as _81 from "./bank/v1beta1/query";
import * as _82 from "./bank/v1beta1/tx";
import * as _83 from "./base/abci/v1beta1/abci";
import * as _84 from "./base/kv/v1beta1/kv";
import * as _85 from "./base/node/v1beta1/query";
import * as _86 from "./base/query/v1beta1/pagination";
import * as _87 from "./base/reflection/v1beta1/reflection";
import * as _88 from "./base/reflection/v2alpha1/reflection";
import * as _89 from "./base/snapshots/v1beta1/snapshot";
import * as _90 from "./base/store/v1beta1/commit_info";
import * as _91 from "./base/store/v1beta1/listening";
import * as _92 from "./base/tendermint/v1beta1/query";
import * as _93 from "./base/tendermint/v1beta1/types";
import * as _94 from "./base/v1beta1/coin";
import * as _95 from "./capability/v1beta1/capability";
import * as _96 from "./capability/v1beta1/genesis";
import * as _97 from "./crisis/v1beta1/genesis";
import * as _98 from "./crisis/v1beta1/tx";
import * as _99 from "./crypto/ed25519/keys";
import * as _100 from "./crypto/hd/v1/hd";
import * as _101 from "./crypto/keyring/v1/record";
import * as _102 from "./crypto/multisig/keys";
import * as _103 from "./crypto/secp256k1/keys";
import * as _104 from "./crypto/secp256r1/keys";
import * as _105 from "./distribution/v1beta1/distribution";
import * as _106 from "./distribution/v1beta1/genesis";
import * as _107 from "./distribution/v1beta1/query";
import * as _108 from "./distribution/v1beta1/tx";
import * as _109 from "./evidence/v1beta1/evidence";
import * as _110 from "./evidence/v1beta1/genesis";
import * as _111 from "./evidence/v1beta1/query";
import * as _112 from "./evidence/v1beta1/tx";
import * as _113 from "./feegrant/v1beta1/feegrant";
import * as _114 from "./feegrant/v1beta1/genesis";
import * as _115 from "./feegrant/v1beta1/query";
import * as _116 from "./feegrant/v1beta1/tx";
import * as _117 from "./genutil/v1beta1/genesis";
import * as _118 from "./gov/v1/genesis";
import * as _119 from "./gov/v1/gov";
import * as _120 from "./gov/v1/query";
import * as _121 from "./gov/v1/tx";
import * as _122 from "./gov/v1beta1/genesis";
import * as _123 from "./gov/v1beta1/gov";
import * as _124 from "./gov/v1beta1/query";
import * as _125 from "./gov/v1beta1/tx";
import * as _126 from "./group/v1/events";
import * as _127 from "./group/v1/genesis";
import * as _128 from "./group/v1/query";
import * as _129 from "./group/v1/tx";
import * as _130 from "./group/v1/types";
import * as _131 from "./mint/v1beta1/genesis";
import * as _132 from "./mint/v1beta1/mint";
import * as _133 from "./mint/v1beta1/query";
import * as _135 from "./nft/v1beta1/event";
import * as _136 from "./nft/v1beta1/genesis";
import * as _137 from "./nft/v1beta1/nft";
import * as _138 from "./nft/v1beta1/query";
import * as _139 from "./nft/v1beta1/tx";
import * as _140 from "./orm/module/v1alpha1/module";
import * as _141 from "./orm/v1/orm";
import * as _142 from "./orm/v1alpha1/schema";
import * as _143 from "./params/v1beta1/params";
import * as _144 from "./params/v1beta1/query";
import * as _145 from "./slashing/v1beta1/genesis";
import * as _146 from "./slashing/v1beta1/query";
import * as _147 from "./slashing/v1beta1/slashing";
import * as _148 from "./slashing/v1beta1/tx";
import * as _149 from "./staking/v1beta1/authz";
import * as _150 from "./staking/v1beta1/genesis";
import * as _151 from "./staking/v1beta1/query";
import * as _152 from "./staking/v1beta1/staking";
import * as _153 from "./staking/v1beta1/tx";
import * as _154 from "./tx/signing/v1beta1/signing";
import * as _155 from "./tx/v1beta1/service";
import * as _156 from "./tx/v1beta1/tx";
import * as _157 from "./upgrade/v1beta1/query";
import * as _158 from "./upgrade/v1beta1/tx";
import * as _159 from "./upgrade/v1beta1/upgrade";
import * as _160 from "./vesting/v1beta1/tx";
import * as _161 from "./vesting/v1beta1/vesting";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _66.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Module;
                    fromPartial(_: Partial<_66.Module>): _66.Module;
                };
            };
        }
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _69.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConfigRequest;
                fromPartial(_: Partial<_69.QueryConfigRequest>): _69.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _69.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConfigResponse;
                fromPartial(object: Partial<_69.QueryConfigResponse>): _69.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _68.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ModuleDescriptor;
                fromPartial(object: Partial<_68.ModuleDescriptor>): _68.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _68.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PackageReference;
                fromPartial(object: Partial<_68.PackageReference>): _68.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _68.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MigrateFromInfo;
                fromPartial(object: Partial<_68.MigrateFromInfo>): _68.MigrateFromInfo;
            };
            Config: {
                encode(message: _67.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Config;
                fromPartial(object: Partial<_67.Config>): _67.Config;
            };
            ModuleConfig: {
                encode(message: _67.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ModuleConfig;
                fromPartial(object: Partial<_67.ModuleConfig>): _67.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _72.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryAccountsRequest;
                fromPartial(object: Partial<_72.QueryAccountsRequest>): _72.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _72.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryAccountsResponse;
                fromPartial(object: Partial<_72.QueryAccountsResponse>): _72.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _72.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryAccountRequest;
                fromPartial(object: Partial<_72.QueryAccountRequest>): _72.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _72.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryAccountResponse;
                fromPartial(object: Partial<_72.QueryAccountResponse>): _72.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _72.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryParamsRequest;
                fromPartial(_: Partial<_72.QueryParamsRequest>): _72.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _72.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryParamsResponse;
                fromPartial(object: Partial<_72.QueryParamsResponse>): _72.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _72.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_72.QueryModuleAccountsRequest>): _72.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _72.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_72.QueryModuleAccountsResponse>): _72.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _72.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_72.QueryModuleAccountByNameRequest>): _72.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _72.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_72.QueryModuleAccountByNameResponse>): _72.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _72.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Bech32PrefixRequest;
                fromPartial(_: Partial<_72.Bech32PrefixRequest>): _72.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _72.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Bech32PrefixResponse;
                fromPartial(object: Partial<_72.Bech32PrefixResponse>): _72.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _72.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.AddressBytesToStringRequest;
                fromPartial(object: Partial<_72.AddressBytesToStringRequest>): _72.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _72.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.AddressBytesToStringResponse;
                fromPartial(object: Partial<_72.AddressBytesToStringResponse>): _72.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _72.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.AddressStringToBytesRequest;
                fromPartial(object: Partial<_72.AddressStringToBytesRequest>): _72.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _72.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.AddressStringToBytesResponse;
                fromPartial(object: Partial<_72.AddressStringToBytesResponse>): _72.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _72.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_72.QueryAccountAddressByIDRequest>): _72.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _72.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_72.QueryAccountAddressByIDResponse>): _72.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
            };
            BaseAccount: {
                encode(message: _70.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.BaseAccount;
                fromPartial(object: Partial<_70.BaseAccount>): _70.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _70.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ModuleAccount;
                fromPartial(object: Partial<_70.ModuleAccount>): _70.ModuleAccount;
            };
            Params: {
                encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Params;
                fromPartial(object: Partial<_70.Params>): _70.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _77.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _77.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _77.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _77.MsgGrant): {
                        typeUrl: string;
                        value: _77.MsgGrant;
                    };
                    exec(value: _77.MsgExec): {
                        typeUrl: string;
                        value: _77.MsgExec;
                    };
                    revoke(value: _77.MsgRevoke): {
                        typeUrl: string;
                        value: _77.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _77.MsgGrant): {
                        typeUrl: string;
                        value: _77.MsgGrant;
                    };
                    exec(value: _77.MsgExec): {
                        typeUrl: string;
                        value: _77.MsgExec;
                    };
                    revoke(value: _77.MsgRevoke): {
                        typeUrl: string;
                        value: _77.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _77.MsgGrant) => {
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
                    }) => _77.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _77.MsgExec) => {
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
                    }) => _77.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _77.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _77.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _77.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgGrant;
                fromPartial(object: Partial<_77.MsgGrant>): _77.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _77.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgExecResponse;
                fromPartial(object: Partial<_77.MsgExecResponse>): _77.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _77.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgExec;
                fromPartial(object: Partial<_77.MsgExec>): _77.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _77.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgGrantResponse;
                fromPartial(_: Partial<_77.MsgGrantResponse>): _77.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _77.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgRevoke;
                fromPartial(object: Partial<_77.MsgRevoke>): _77.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _77.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgRevokeResponse;
                fromPartial(_: Partial<_77.MsgRevokeResponse>): _77.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _76.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryGrantsRequest;
                fromPartial(object: Partial<_76.QueryGrantsRequest>): _76.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _76.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryGrantsResponse;
                fromPartial(object: Partial<_76.QueryGrantsResponse>): _76.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _76.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_76.QueryGranterGrantsRequest>): _76.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _76.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_76.QueryGranterGrantsResponse>): _76.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _76.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_76.QueryGranteeGrantsRequest>): _76.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _76.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_76.QueryGranteeGrantsResponse>): _76.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
            };
            EventGrant: {
                encode(message: _74.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.EventGrant;
                fromPartial(object: Partial<_74.EventGrant>): _74.EventGrant;
            };
            EventRevoke: {
                encode(message: _74.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.EventRevoke;
                fromPartial(object: Partial<_74.EventRevoke>): _74.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _73.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenericAuthorization;
                fromPartial(object: Partial<_73.GenericAuthorization>): _73.GenericAuthorization;
            };
            Grant: {
                encode(message: _73.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Grant;
                fromPartial(object: Partial<_73.Grant>): _73.Grant;
            };
            GrantAuthorization: {
                encode(message: _73.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GrantAuthorization;
                fromPartial(object: Partial<_73.GrantAuthorization>): _73.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _73.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GrantQueueItem;
                fromPartial(object: Partial<_73.GrantQueueItem>): _73.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _82.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _82.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _82.MsgSend): {
                        typeUrl: string;
                        value: _82.MsgSend;
                    };
                    multiSend(value: _82.MsgMultiSend): {
                        typeUrl: string;
                        value: _82.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _82.MsgSend): {
                        typeUrl: string;
                        value: _82.MsgSend;
                    };
                    multiSend(value: _82.MsgMultiSend): {
                        typeUrl: string;
                        value: _82.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _82.MsgSend) => {
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
                    }) => _82.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _82.MsgMultiSend) => {
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
                    }) => _82.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _82.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgSend;
                fromPartial(object: Partial<_82.MsgSend>): _82.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _82.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgSendResponse;
                fromPartial(_: Partial<_82.MsgSendResponse>): _82.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _82.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgMultiSend;
                fromPartial(object: Partial<_82.MsgMultiSend>): _82.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _82.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgMultiSendResponse;
                fromPartial(_: Partial<_82.MsgMultiSendResponse>): _82.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _81.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryBalanceRequest;
                fromPartial(object: Partial<_81.QueryBalanceRequest>): _81.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _81.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryBalanceResponse;
                fromPartial(object: Partial<_81.QueryBalanceResponse>): _81.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _81.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllBalancesRequest;
                fromPartial(object: Partial<_81.QueryAllBalancesRequest>): _81.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _81.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllBalancesResponse;
                fromPartial(object: Partial<_81.QueryAllBalancesResponse>): _81.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _81.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_81.QuerySpendableBalancesRequest>): _81.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _81.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_81.QuerySpendableBalancesResponse>): _81.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _81.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_81.QueryTotalSupplyRequest>): _81.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _81.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_81.QueryTotalSupplyResponse>): _81.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _81.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QuerySupplyOfRequest;
                fromPartial(object: Partial<_81.QuerySupplyOfRequest>): _81.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _81.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QuerySupplyOfResponse;
                fromPartial(object: Partial<_81.QuerySupplyOfResponse>): _81.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _81.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsRequest;
                fromPartial(_: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _81.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsResponse;
                fromPartial(object: Partial<_81.QueryParamsResponse>): _81.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _81.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_81.QueryDenomsMetadataRequest>): _81.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _81.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_81.QueryDenomsMetadataResponse>): _81.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _81.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_81.QueryDenomMetadataRequest>): _81.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _81.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_81.QueryDenomMetadataResponse>): _81.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _81.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_81.QueryDenomOwnersRequest>): _81.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _81.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.DenomOwner;
                fromPartial(object: Partial<_81.DenomOwner>): _81.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _81.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_81.QueryDenomOwnersResponse>): _81.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GenesisState;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
            };
            Balance: {
                encode(message: _80.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Balance;
                fromPartial(object: Partial<_80.Balance>): _80.Balance;
            };
            Params: {
                encode(message: _79.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Params;
                fromPartial(object: Partial<_79.Params>): _79.Params;
            };
            SendEnabled: {
                encode(message: _79.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SendEnabled;
                fromPartial(object: Partial<_79.SendEnabled>): _79.SendEnabled;
            };
            Input: {
                encode(message: _79.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Input;
                fromPartial(object: Partial<_79.Input>): _79.Input;
            };
            Output: {
                encode(message: _79.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Output;
                fromPartial(object: Partial<_79.Output>): _79.Output;
            };
            Supply: {
                encode(message: _79.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Supply;
                fromPartial(object: Partial<_79.Supply>): _79.Supply;
            };
            DenomUnit: {
                encode(message: _79.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.DenomUnit;
                fromPartial(object: Partial<_79.DenomUnit>): _79.DenomUnit;
            };
            Metadata: {
                encode(message: _79.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Metadata;
                fromPartial(object: Partial<_79.Metadata>): _79.Metadata;
            };
            SendAuthorization: {
                encode(message: _78.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SendAuthorization;
                fromPartial(object: Partial<_78.SendAuthorization>): _78.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _83.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.TxResponse;
                    fromPartial(object: Partial<_83.TxResponse>): _83.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _83.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ABCIMessageLog;
                    fromPartial(object: Partial<_83.ABCIMessageLog>): _83.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _83.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.StringEvent;
                    fromPartial(object: Partial<_83.StringEvent>): _83.StringEvent;
                };
                Attribute: {
                    encode(message: _83.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Attribute;
                    fromPartial(object: Partial<_83.Attribute>): _83.Attribute;
                };
                GasInfo: {
                    encode(message: _83.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GasInfo;
                    fromPartial(object: Partial<_83.GasInfo>): _83.GasInfo;
                };
                Result: {
                    encode(message: _83.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Result;
                    fromPartial(object: Partial<_83.Result>): _83.Result;
                };
                SimulationResponse: {
                    encode(message: _83.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SimulationResponse;
                    fromPartial(object: Partial<_83.SimulationResponse>): _83.SimulationResponse;
                };
                MsgData: {
                    encode(message: _83.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgData;
                    fromPartial(object: Partial<_83.MsgData>): _83.MsgData;
                };
                TxMsgData: {
                    encode(message: _83.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.TxMsgData;
                    fromPartial(object: Partial<_83.TxMsgData>): _83.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _83.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SearchTxsResult;
                    fromPartial(object: Partial<_83.SearchTxsResult>): _83.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _84.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Pairs;
                    fromPartial(object: Partial<_84.Pairs>): _84.Pairs;
                };
                Pair: {
                    encode(message: _84.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Pair;
                    fromPartial(object: Partial<_84.Pair>): _84.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ConfigRequest: {
                    encode(_: _85.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ConfigRequest;
                    fromPartial(_: Partial<_85.ConfigRequest>): _85.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _85.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ConfigResponse;
                    fromPartial(object: Partial<_85.ConfigResponse>): _85.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _86.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PageRequest;
                    fromPartial(object: Partial<_86.PageRequest>): _86.PageRequest;
                };
                PageResponse: {
                    encode(message: _86.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PageResponse;
                    fromPartial(object: Partial<_86.PageResponse>): _86.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _87.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_87.ListAllInterfacesRequest>): _87.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _87.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_87.ListAllInterfacesResponse>): _87.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _87.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ListImplementationsRequest;
                    fromPartial(object: Partial<_87.ListImplementationsRequest>): _87.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _87.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ListImplementationsResponse;
                    fromPartial(object: Partial<_87.ListImplementationsResponse>): _87.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _88.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.AppDescriptor;
                    fromPartial(object: Partial<_88.AppDescriptor>): _88.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _88.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.TxDescriptor;
                    fromPartial(object: Partial<_88.TxDescriptor>): _88.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _88.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.AuthnDescriptor;
                    fromPartial(object: Partial<_88.AuthnDescriptor>): _88.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _88.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SigningModeDescriptor;
                    fromPartial(object: Partial<_88.SigningModeDescriptor>): _88.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _88.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ChainDescriptor;
                    fromPartial(object: Partial<_88.ChainDescriptor>): _88.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _88.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.CodecDescriptor;
                    fromPartial(object: Partial<_88.CodecDescriptor>): _88.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _88.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.InterfaceDescriptor;
                    fromPartial(object: Partial<_88.InterfaceDescriptor>): _88.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _88.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_88.InterfaceImplementerDescriptor>): _88.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _88.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_88.InterfaceAcceptingMessageDescriptor>): _88.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _88.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConfigurationDescriptor;
                    fromPartial(object: Partial<_88.ConfigurationDescriptor>): _88.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _88.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgDescriptor;
                    fromPartial(object: Partial<_88.MsgDescriptor>): _88.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _88.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_88.GetAuthnDescriptorRequest>): _88.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _88.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_88.GetAuthnDescriptorResponse>): _88.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _88.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_88.GetChainDescriptorRequest>): _88.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _88.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_88.GetChainDescriptorResponse>): _88.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _88.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_88.GetCodecDescriptorRequest>): _88.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _88.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_88.GetCodecDescriptorResponse>): _88.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _88.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_88.GetConfigurationDescriptorRequest>): _88.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _88.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_88.GetConfigurationDescriptorResponse>): _88.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _88.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_88.GetQueryServicesDescriptorRequest>): _88.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _88.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_88.GetQueryServicesDescriptorResponse>): _88.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _88.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_88.GetTxDescriptorRequest>): _88.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _88.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_88.GetTxDescriptorResponse>): _88.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _88.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryServicesDescriptor;
                    fromPartial(object: Partial<_88.QueryServicesDescriptor>): _88.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _88.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryServiceDescriptor;
                    fromPartial(object: Partial<_88.QueryServiceDescriptor>): _88.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _88.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryMethodDescriptor;
                    fromPartial(object: Partial<_88.QueryMethodDescriptor>): _88.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _89.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Snapshot;
                    fromPartial(object: Partial<_89.Snapshot>): _89.Snapshot;
                };
                Metadata: {
                    encode(message: _89.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Metadata;
                    fromPartial(object: Partial<_89.Metadata>): _89.Metadata;
                };
                SnapshotItem: {
                    encode(message: _89.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SnapshotItem;
                    fromPartial(object: Partial<_89.SnapshotItem>): _89.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _89.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SnapshotStoreItem;
                    fromPartial(object: Partial<_89.SnapshotStoreItem>): _89.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _89.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SnapshotIAVLItem;
                    fromPartial(object: Partial<_89.SnapshotIAVLItem>): _89.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _89.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_89.SnapshotExtensionMeta>): _89.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _89.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_89.SnapshotExtensionPayload>): _89.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _89.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SnapshotKVItem;
                    fromPartial(object: Partial<_89.SnapshotKVItem>): _89.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _89.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SnapshotSchema;
                    fromPartial(object: Partial<_89.SnapshotSchema>): _89.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _91.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.StoreKVPair;
                    fromPartial(object: Partial<_91.StoreKVPair>): _91.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _91.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BlockMetadata;
                    fromPartial(object: Partial<_91.BlockMetadata>): _91.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _91.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_91.BlockMetadata_DeliverTx>): _91.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _90.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CommitInfo;
                    fromPartial(object: Partial<_90.CommitInfo>): _90.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _90.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.StoreInfo;
                    fromPartial(object: Partial<_90.StoreInfo>): _90.StoreInfo;
                };
                CommitID: {
                    encode(message: _90.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CommitID;
                    fromPartial(object: Partial<_90.CommitID>): _90.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                Block: {
                    encode(message: _93.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Block;
                    fromPartial(object: Partial<_93.Block>): _93.Block;
                };
                Header: {
                    encode(message: _93.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Header;
                    fromPartial(object: Partial<_93.Header>): _93.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _92.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_92.GetValidatorSetByHeightRequest>): _92.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _92.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_92.GetValidatorSetByHeightResponse>): _92.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _92.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_92.GetLatestValidatorSetRequest>): _92.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _92.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_92.GetLatestValidatorSetResponse>): _92.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _92.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Validator;
                    fromPartial(object: Partial<_92.Validator>): _92.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _92.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_92.GetBlockByHeightRequest>): _92.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _92.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_92.GetBlockByHeightResponse>): _92.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _92.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetLatestBlockRequest;
                    fromPartial(_: Partial<_92.GetLatestBlockRequest>): _92.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _92.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetLatestBlockResponse;
                    fromPartial(object: Partial<_92.GetLatestBlockResponse>): _92.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _92.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetSyncingRequest;
                    fromPartial(_: Partial<_92.GetSyncingRequest>): _92.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _92.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetSyncingResponse;
                    fromPartial(object: Partial<_92.GetSyncingResponse>): _92.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _92.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetNodeInfoRequest;
                    fromPartial(_: Partial<_92.GetNodeInfoRequest>): _92.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _92.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GetNodeInfoResponse;
                    fromPartial(object: Partial<_92.GetNodeInfoResponse>): _92.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _92.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.VersionInfo;
                    fromPartial(object: Partial<_92.VersionInfo>): _92.VersionInfo;
                };
                Module: {
                    encode(message: _92.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Module;
                    fromPartial(object: Partial<_92.Module>): _92.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _92.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ABCIQueryRequest;
                    fromPartial(object: Partial<_92.ABCIQueryRequest>): _92.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _92.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ABCIQueryResponse;
                    fromPartial(object: Partial<_92.ABCIQueryResponse>): _92.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _92.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ProofOp;
                    fromPartial(object: Partial<_92.ProofOp>): _92.ProofOp;
                };
                ProofOps: {
                    encode(message: _92.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ProofOps;
                    fromPartial(object: Partial<_92.ProofOps>): _92.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _94.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Coin;
                fromPartial(object: Partial<_94.Coin>): _94.Coin;
            };
            DecCoin: {
                encode(message: _94.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DecCoin;
                fromPartial(object: Partial<_94.DecCoin>): _94.DecCoin;
            };
            IntProto: {
                encode(message: _94.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.IntProto;
                fromPartial(object: Partial<_94.IntProto>): _94.IntProto;
            };
            DecProto: {
                encode(message: _94.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DecProto;
                fromPartial(object: Partial<_94.DecProto>): _94.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _96.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisOwners;
                fromPartial(object: Partial<_96.GenesisOwners>): _96.GenesisOwners;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
            };
            Capability: {
                encode(message: _95.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Capability;
                fromPartial(object: Partial<_95.Capability>): _95.Capability;
            };
            Owner: {
                encode(message: _95.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Owner;
                fromPartial(object: Partial<_95.Owner>): _95.Owner;
            };
            CapabilityOwners: {
                encode(message: _95.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CapabilityOwners;
                fromPartial(object: Partial<_95.CapabilityOwners>): _95.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _98.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _98.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _98.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _98.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _98.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _98.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _98.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _98.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgVerifyInvariant;
                fromPartial(object: Partial<_98.MsgVerifyInvariant>): _98.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _98.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_98.MsgVerifyInvariantResponse>): _98.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _97.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _99.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.PubKey;
                fromPartial(object: Partial<_99.PubKey>): _99.PubKey;
            };
            PrivKey: {
                encode(message: _99.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.PrivKey;
                fromPartial(object: Partial<_99.PrivKey>): _99.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _100.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.BIP44Params;
                    fromPartial(object: Partial<_100.BIP44Params>): _100.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _101.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Record;
                    fromPartial(object: Partial<_101.Record>): _101.Record;
                };
                Record_Local: {
                    encode(message: _101.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Record_Local;
                    fromPartial(object: Partial<_101.Record_Local>): _101.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _101.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Record_Ledger;
                    fromPartial(object: Partial<_101.Record_Ledger>): _101.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _101.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Record_Multi;
                    fromPartial(_: Partial<_101.Record_Multi>): _101.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _101.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Record_Offline;
                    fromPartial(_: Partial<_101.Record_Offline>): _101.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _102.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.LegacyAminoPubKey;
                fromPartial(object: Partial<_102.LegacyAminoPubKey>): _102.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _103.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PubKey;
                fromPartial(object: Partial<_103.PubKey>): _103.PubKey;
            };
            PrivKey: {
                encode(message: _103.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PrivKey;
                fromPartial(object: Partial<_103.PrivKey>): _103.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _104.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PubKey;
                fromPartial(object: Partial<_104.PubKey>): _104.PubKey;
            };
            PrivKey: {
                encode(message: _104.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PrivKey;
                fromPartial(object: Partial<_104.PrivKey>): _104.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _108.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _108.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _108.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _108.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _108.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _108.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _108.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _108.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _108.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _108.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _108.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _108.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _108.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _108.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _108.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _108.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _108.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _108.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _108.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _108.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _108.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _108.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _108.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _108.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _108.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _108.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _108.MsgFundCommunityPool) => {
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
                    }) => _108.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _108.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_108.MsgSetWithdrawAddress>): _108.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _108.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_108.MsgSetWithdrawAddressResponse>): _108.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _108.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_108.MsgWithdrawDelegatorReward>): _108.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _108.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_108.MsgWithdrawDelegatorRewardResponse>): _108.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _108.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_108.MsgWithdrawValidatorCommission>): _108.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _108.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_108.MsgWithdrawValidatorCommissionResponse>): _108.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _108.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgFundCommunityPool;
                fromPartial(object: Partial<_108.MsgFundCommunityPool>): _108.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _108.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_108.MsgFundCommunityPoolResponse>): _108.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsRequest;
                fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsResponse;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _107.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_107.QueryValidatorOutstandingRewardsRequest>): _107.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _107.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_107.QueryValidatorOutstandingRewardsResponse>): _107.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _107.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_107.QueryValidatorCommissionRequest>): _107.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _107.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_107.QueryValidatorCommissionResponse>): _107.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _107.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_107.QueryValidatorSlashesRequest>): _107.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _107.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_107.QueryValidatorSlashesResponse>): _107.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _107.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_107.QueryDelegationRewardsRequest>): _107.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _107.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_107.QueryDelegationRewardsResponse>): _107.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _107.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_107.QueryDelegationTotalRewardsRequest>): _107.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _107.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_107.QueryDelegationTotalRewardsResponse>): _107.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _107.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorsRequest>): _107.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _107.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorsResponse>): _107.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _107.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_107.QueryDelegatorWithdrawAddressRequest>): _107.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _107.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_107.QueryDelegatorWithdrawAddressResponse>): _107.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _107.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_107.QueryCommunityPoolRequest>): _107.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _107.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_107.QueryCommunityPoolResponse>): _107.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _106.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_106.DelegatorWithdrawInfo>): _106.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _106.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_106.ValidatorOutstandingRewardsRecord>): _106.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _106.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_106.ValidatorAccumulatedCommissionRecord>): _106.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _106.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_106.ValidatorHistoricalRewardsRecord>): _106.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _106.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_106.ValidatorCurrentRewardsRecord>): _106.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _106.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_106.DelegatorStartingInfoRecord>): _106.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _106.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_106.ValidatorSlashEventRecord>): _106.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
            };
            Params: {
                encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Params;
                fromPartial(object: Partial<_105.Params>): _105.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _105.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_105.ValidatorHistoricalRewards>): _105.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _105.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ValidatorCurrentRewards;
                fromPartial(object: Partial<_105.ValidatorCurrentRewards>): _105.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _105.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_105.ValidatorAccumulatedCommission>): _105.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _105.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_105.ValidatorOutstandingRewards>): _105.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _105.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ValidatorSlashEvent;
                fromPartial(object: Partial<_105.ValidatorSlashEvent>): _105.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _105.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ValidatorSlashEvents;
                fromPartial(object: Partial<_105.ValidatorSlashEvents>): _105.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _105.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FeePool;
                fromPartial(object: Partial<_105.FeePool>): _105.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _105.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_105.CommunityPoolSpendProposal>): _105.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _105.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DelegatorStartingInfo;
                fromPartial(object: Partial<_105.DelegatorStartingInfo>): _105.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _105.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DelegationDelegatorReward;
                fromPartial(object: Partial<_105.DelegationDelegatorReward>): _105.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _105.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_105.CommunityPoolSpendProposalWithDeposit>): _105.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _112.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _112.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _112.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _112.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _112.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _112.MsgSubmitEvidence) => {
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
                    }) => _112.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _112.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgSubmitEvidence;
                fromPartial(object: Partial<_112.MsgSubmitEvidence>): _112.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _112.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_112.MsgSubmitEvidenceResponse>): _112.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _111.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryEvidenceRequest;
                fromPartial(object: Partial<_111.QueryEvidenceRequest>): _111.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _111.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryEvidenceResponse;
                fromPartial(object: Partial<_111.QueryEvidenceResponse>): _111.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _111.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_111.QueryAllEvidenceRequest>): _111.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _111.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_111.QueryAllEvidenceResponse>): _111.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
            };
            Equivocation: {
                encode(message: _109.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Equivocation;
                fromPartial(object: Partial<_109.Equivocation>): _109.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _116.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _116.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _116.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _116.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _116.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _116.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _116.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _116.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _116.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _116.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _116.MsgGrantAllowance) => {
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
                    }) => _116.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _116.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _116.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _116.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgGrantAllowance;
                fromPartial(object: Partial<_116.MsgGrantAllowance>): _116.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _116.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_116.MsgGrantAllowanceResponse>): _116.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _116.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgRevokeAllowance;
                fromPartial(object: Partial<_116.MsgRevokeAllowance>): _116.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _116.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_116.MsgRevokeAllowanceResponse>): _116.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _115.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAllowanceRequest;
                fromPartial(object: Partial<_115.QueryAllowanceRequest>): _115.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _115.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAllowanceResponse;
                fromPartial(object: Partial<_115.QueryAllowanceResponse>): _115.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _115.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAllowancesRequest;
                fromPartial(object: Partial<_115.QueryAllowancesRequest>): _115.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _115.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAllowancesResponse;
                fromPartial(object: Partial<_115.QueryAllowancesResponse>): _115.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _115.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_115.QueryAllowancesByGranterRequest>): _115.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _115.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_115.QueryAllowancesByGranterResponse>): _115.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
                fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
            };
            BasicAllowance: {
                encode(message: _113.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.BasicAllowance;
                fromPartial(object: Partial<_113.BasicAllowance>): _113.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _113.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.PeriodicAllowance;
                fromPartial(object: Partial<_113.PeriodicAllowance>): _113.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _113.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.AllowedMsgAllowance;
                fromPartial(object: Partial<_113.AllowedMsgAllowance>): _113.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _113.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Grant;
                fromPartial(object: Partial<_113.Grant>): _113.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _121.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _121.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _121.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _121.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _121.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _121.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _121.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _121.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _121.MsgExecLegacyContent;
                    };
                    vote(value: _121.MsgVote): {
                        typeUrl: string;
                        value: _121.MsgVote;
                    };
                    voteWeighted(value: _121.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _121.MsgVoteWeighted;
                    };
                    deposit(value: _121.MsgDeposit): {
                        typeUrl: string;
                        value: _121.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _121.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _121.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _121.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _121.MsgExecLegacyContent;
                    };
                    vote(value: _121.MsgVote): {
                        typeUrl: string;
                        value: _121.MsgVote;
                    };
                    voteWeighted(value: _121.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _121.MsgVoteWeighted;
                    };
                    deposit(value: _121.MsgDeposit): {
                        typeUrl: string;
                        value: _121.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _121.MsgSubmitProposal) => {
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
                    }) => _121.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _121.MsgExecLegacyContent) => {
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
                    }) => _121.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _121.MsgVote) => {
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
                    }) => _121.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _121.MsgVoteWeighted) => {
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
                    }) => _121.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _121.MsgDeposit) => {
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
                    }) => _121.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _121.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgSubmitProposal;
                fromPartial(object: Partial<_121.MsgSubmitProposal>): _121.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _121.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_121.MsgSubmitProposalResponse>): _121.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _121.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgExecLegacyContent;
                fromPartial(object: Partial<_121.MsgExecLegacyContent>): _121.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _121.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_121.MsgExecLegacyContentResponse>): _121.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _121.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgVote;
                fromPartial(object: Partial<_121.MsgVote>): _121.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _121.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgVoteResponse;
                fromPartial(_: Partial<_121.MsgVoteResponse>): _121.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _121.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgVoteWeighted;
                fromPartial(object: Partial<_121.MsgVoteWeighted>): _121.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _121.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_121.MsgVoteWeightedResponse>): _121.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _121.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgDeposit;
                fromPartial(object: Partial<_121.MsgDeposit>): _121.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _121.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgDepositResponse;
                fromPartial(_: Partial<_121.MsgDepositResponse>): _121.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _120.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryProposalRequest;
                fromPartial(object: Partial<_120.QueryProposalRequest>): _120.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _120.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryProposalResponse;
                fromPartial(object: Partial<_120.QueryProposalResponse>): _120.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _120.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryProposalsRequest;
                fromPartial(object: Partial<_120.QueryProposalsRequest>): _120.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _120.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryProposalsResponse;
                fromPartial(object: Partial<_120.QueryProposalsResponse>): _120.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _120.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryVoteRequest;
                fromPartial(object: Partial<_120.QueryVoteRequest>): _120.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _120.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryVoteResponse;
                fromPartial(object: Partial<_120.QueryVoteResponse>): _120.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _120.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryVotesRequest;
                fromPartial(object: Partial<_120.QueryVotesRequest>): _120.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _120.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryVotesResponse;
                fromPartial(object: Partial<_120.QueryVotesResponse>): _120.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _120.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryParamsRequest;
                fromPartial(object: Partial<_120.QueryParamsRequest>): _120.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _120.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryParamsResponse;
                fromPartial(object: Partial<_120.QueryParamsResponse>): _120.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _120.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryDepositRequest;
                fromPartial(object: Partial<_120.QueryDepositRequest>): _120.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _120.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryDepositResponse;
                fromPartial(object: Partial<_120.QueryDepositResponse>): _120.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _120.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryDepositsRequest;
                fromPartial(object: Partial<_120.QueryDepositsRequest>): _120.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _120.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryDepositsResponse;
                fromPartial(object: Partial<_120.QueryDepositsResponse>): _120.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _120.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryTallyResultRequest;
                fromPartial(object: Partial<_120.QueryTallyResultRequest>): _120.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _120.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryTallyResultResponse;
                fromPartial(object: Partial<_120.QueryTallyResultResponse>): _120.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _119.VoteOption;
            voteOptionToJSON(object: _119.VoteOption): string;
            proposalStatusFromJSON(object: any): _119.ProposalStatus;
            proposalStatusToJSON(object: _119.ProposalStatus): string;
            VoteOption: typeof _119.VoteOption;
            VoteOptionSDKType: typeof _119.VoteOption;
            ProposalStatus: typeof _119.ProposalStatus;
            ProposalStatusSDKType: typeof _119.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _119.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.WeightedVoteOption;
                fromPartial(object: Partial<_119.WeightedVoteOption>): _119.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _119.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Deposit;
                fromPartial(object: Partial<_119.Deposit>): _119.Deposit;
            };
            Proposal: {
                encode(message: _119.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Proposal;
                fromPartial(object: Partial<_119.Proposal>): _119.Proposal;
            };
            TallyResult: {
                encode(message: _119.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.TallyResult;
                fromPartial(object: Partial<_119.TallyResult>): _119.TallyResult;
            };
            Vote: {
                encode(message: _119.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Vote;
                fromPartial(object: Partial<_119.Vote>): _119.Vote;
            };
            DepositParams: {
                encode(message: _119.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.DepositParams;
                fromPartial(object: Partial<_119.DepositParams>): _119.DepositParams;
            };
            VotingParams: {
                encode(message: _119.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.VotingParams;
                fromPartial(object: Partial<_119.VotingParams>): _119.VotingParams;
            };
            TallyParams: {
                encode(message: _119.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.TallyParams;
                fromPartial(object: Partial<_119.TallyParams>): _119.TallyParams;
            };
            GenesisState: {
                encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
            };
        };
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _125.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _125.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    voteWeighted(value: _125.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _125.MsgVoteWeighted;
                    };
                    deposit(value: _125.MsgDeposit): {
                        typeUrl: string;
                        value: _125.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _125.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _125.MsgSubmitProposal;
                    };
                    vote(value: _125.MsgVote): {
                        typeUrl: string;
                        value: _125.MsgVote;
                    };
                    voteWeighted(value: _125.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _125.MsgVoteWeighted;
                    };
                    deposit(value: _125.MsgDeposit): {
                        typeUrl: string;
                        value: _125.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _125.MsgSubmitProposal) => {
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
                    }) => _125.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _125.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _125.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _125.MsgVoteWeighted) => {
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
                    }) => _125.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _125.MsgDeposit) => {
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
                    }) => _125.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _125.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgSubmitProposal;
                fromPartial(object: Partial<_125.MsgSubmitProposal>): _125.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _125.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_125.MsgSubmitProposalResponse>): _125.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _125.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgVote;
                fromPartial(object: Partial<_125.MsgVote>): _125.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _125.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgVoteResponse;
                fromPartial(_: Partial<_125.MsgVoteResponse>): _125.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _125.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgVoteWeighted;
                fromPartial(object: Partial<_125.MsgVoteWeighted>): _125.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _125.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_125.MsgVoteWeightedResponse>): _125.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _125.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgDeposit;
                fromPartial(object: Partial<_125.MsgDeposit>): _125.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _125.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgDepositResponse;
                fromPartial(_: Partial<_125.MsgDepositResponse>): _125.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _124.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryProposalRequest;
                fromPartial(object: Partial<_124.QueryProposalRequest>): _124.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _124.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryProposalResponse;
                fromPartial(object: Partial<_124.QueryProposalResponse>): _124.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _124.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryProposalsRequest;
                fromPartial(object: Partial<_124.QueryProposalsRequest>): _124.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _124.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryProposalsResponse;
                fromPartial(object: Partial<_124.QueryProposalsResponse>): _124.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _124.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryVoteRequest;
                fromPartial(object: Partial<_124.QueryVoteRequest>): _124.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _124.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryVoteResponse;
                fromPartial(object: Partial<_124.QueryVoteResponse>): _124.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _124.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryVotesRequest;
                fromPartial(object: Partial<_124.QueryVotesRequest>): _124.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _124.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryVotesResponse;
                fromPartial(object: Partial<_124.QueryVotesResponse>): _124.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _124.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsRequest;
                fromPartial(object: Partial<_124.QueryParamsRequest>): _124.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _124.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsResponse;
                fromPartial(object: Partial<_124.QueryParamsResponse>): _124.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _124.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDepositRequest;
                fromPartial(object: Partial<_124.QueryDepositRequest>): _124.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _124.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDepositResponse;
                fromPartial(object: Partial<_124.QueryDepositResponse>): _124.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _124.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDepositsRequest;
                fromPartial(object: Partial<_124.QueryDepositsRequest>): _124.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _124.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryDepositsResponse;
                fromPartial(object: Partial<_124.QueryDepositsResponse>): _124.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _124.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryTallyResultRequest;
                fromPartial(object: Partial<_124.QueryTallyResultRequest>): _124.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _124.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryTallyResultResponse;
                fromPartial(object: Partial<_124.QueryTallyResultResponse>): _124.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _123.VoteOption;
            voteOptionToJSON(object: _123.VoteOption): string;
            proposalStatusFromJSON(object: any): _123.ProposalStatus;
            proposalStatusToJSON(object: _123.ProposalStatus): string;
            VoteOption: typeof _123.VoteOption;
            VoteOptionSDKType: typeof _123.VoteOption;
            ProposalStatus: typeof _123.ProposalStatus;
            ProposalStatusSDKType: typeof _123.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _123.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.WeightedVoteOption;
                fromPartial(object: Partial<_123.WeightedVoteOption>): _123.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _123.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TextProposal;
                fromPartial(object: Partial<_123.TextProposal>): _123.TextProposal;
            };
            Deposit: {
                encode(message: _123.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Deposit;
                fromPartial(object: Partial<_123.Deposit>): _123.Deposit;
            };
            Proposal: {
                encode(message: _123.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Proposal;
                fromPartial(object: Partial<_123.Proposal>): _123.Proposal;
            };
            TallyResult: {
                encode(message: _123.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TallyResult;
                fromPartial(object: Partial<_123.TallyResult>): _123.TallyResult;
            };
            Vote: {
                encode(message: _123.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Vote;
                fromPartial(object: Partial<_123.Vote>): _123.Vote;
            };
            DepositParams: {
                encode(message: _123.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.DepositParams;
                fromPartial(object: Partial<_123.DepositParams>): _123.DepositParams;
            };
            VotingParams: {
                encode(message: _123.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.VotingParams;
                fromPartial(object: Partial<_123.VotingParams>): _123.VotingParams;
            };
            TallyParams: {
                encode(message: _123.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TallyParams;
                fromPartial(object: Partial<_123.TallyParams>): _123.TallyParams;
            };
            GenesisState: {
                encode(message: _122.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.GenesisState;
                fromPartial(object: Partial<_122.GenesisState>): _122.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _129.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _129.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _129.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _129.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _129.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _129.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _129.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _129.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _129.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _129.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _129.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _129.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _129.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _129.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _129.MsgCreateGroup): {
                        typeUrl: string;
                        value: _129.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _129.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _129.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _129.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _129.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _129.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _129.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _129.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _129.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _129.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _129.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _129.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _129.MsgWithdrawProposal;
                    };
                    vote(value: _129.MsgVote): {
                        typeUrl: string;
                        value: _129.MsgVote;
                    };
                    exec(value: _129.MsgExec): {
                        typeUrl: string;
                        value: _129.MsgExec;
                    };
                    leaveGroup(value: _129.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _129.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _129.MsgCreateGroup): {
                        typeUrl: string;
                        value: _129.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _129.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _129.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _129.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _129.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _129.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _129.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _129.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _129.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _129.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _129.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _129.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _129.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _129.MsgWithdrawProposal;
                    };
                    vote(value: _129.MsgVote): {
                        typeUrl: string;
                        value: _129.MsgVote;
                    };
                    exec(value: _129.MsgExec): {
                        typeUrl: string;
                        value: _129.MsgExec;
                    };
                    leaveGroup(value: _129.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _129.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _129.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    }) => _129.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _129.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    }) => _129.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _129.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _129.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _129.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _129.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _129.MsgCreateGroupPolicy) => {
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
                    }) => _129.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _129.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
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
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _129.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _129.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _129.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _129.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_policy_address, decision_policy }: {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _129.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _129.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _129.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _129.MsgSubmitProposal) => {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ group_policy_address, proposers, metadata, messages, exec }: {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _129.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _129.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _129.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _129.MsgVote) => {
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
                    }) => _129.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _129.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _129.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _129.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _129.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _130.VoteOption;
            voteOptionToJSON(object: _130.VoteOption): string;
            proposalStatusFromJSON(object: any): _130.ProposalStatus;
            proposalStatusToJSON(object: _130.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _130.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _130.ProposalExecutorResult): string;
            VoteOption: typeof _130.VoteOption;
            VoteOptionSDKType: typeof _130.VoteOption;
            ProposalStatus: typeof _130.ProposalStatus;
            ProposalStatusSDKType: typeof _130.ProposalStatus;
            ProposalExecutorResult: typeof _130.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _130.ProposalExecutorResult;
            Member: {
                encode(message: _130.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Member;
                fromPartial(object: Partial<_130.Member>): _130.Member;
            };
            MemberRequest: {
                encode(message: _130.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MemberRequest;
                fromPartial(object: Partial<_130.MemberRequest>): _130.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _130.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_130.ThresholdDecisionPolicy>): _130.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _130.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PercentageDecisionPolicy;
                fromPartial(object: Partial<_130.PercentageDecisionPolicy>): _130.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _130.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DecisionPolicyWindows;
                fromPartial(object: Partial<_130.DecisionPolicyWindows>): _130.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _130.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GroupInfo;
                fromPartial(object: Partial<_130.GroupInfo>): _130.GroupInfo;
            };
            GroupMember: {
                encode(message: _130.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GroupMember;
                fromPartial(object: Partial<_130.GroupMember>): _130.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _130.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GroupPolicyInfo;
                fromPartial(object: Partial<_130.GroupPolicyInfo>): _130.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _130.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Proposal;
                fromPartial(object: Partial<_130.Proposal>): _130.Proposal;
            };
            TallyResult: {
                encode(message: _130.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.TallyResult;
                fromPartial(object: Partial<_130.TallyResult>): _130.TallyResult;
            };
            Vote: {
                encode(message: _130.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Vote;
                fromPartial(object: Partial<_130.Vote>): _130.Vote;
            };
            execFromJSON(object: any): _129.Exec;
            execToJSON(object: _129.Exec): string;
            Exec: typeof _129.Exec;
            ExecSDKType: typeof _129.Exec;
            MsgCreateGroup: {
                encode(message: _129.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateGroup;
                fromPartial(object: Partial<_129.MsgCreateGroup>): _129.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _129.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateGroupResponse;
                fromPartial(object: Partial<_129.MsgCreateGroupResponse>): _129.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _129.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_129.MsgUpdateGroupMembers>): _129.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _129.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupMembersResponse>): _129.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _129.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_129.MsgUpdateGroupAdmin>): _129.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _129.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupAdminResponse>): _129.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _129.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_129.MsgUpdateGroupMetadata>): _129.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _129.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupMetadataResponse>): _129.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _129.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_129.MsgCreateGroupPolicy>): _129.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _129.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_129.MsgCreateGroupPolicyResponse>): _129.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _129.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_129.MsgUpdateGroupPolicyAdmin>): _129.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _129.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_129.MsgCreateGroupWithPolicy>): _129.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _129.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_129.MsgCreateGroupWithPolicyResponse>): _129.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _129.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupPolicyAdminResponse>): _129.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _129.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_129.MsgUpdateGroupPolicyDecisionPolicy>): _129.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _129.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupPolicyDecisionPolicyResponse>): _129.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _129.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_129.MsgUpdateGroupPolicyMetadata>): _129.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _129.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_129.MsgUpdateGroupPolicyMetadataResponse>): _129.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _129.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSubmitProposal;
                fromPartial(object: Partial<_129.MsgSubmitProposal>): _129.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _129.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_129.MsgSubmitProposalResponse>): _129.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _129.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawProposal;
                fromPartial(object: Partial<_129.MsgWithdrawProposal>): _129.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _129.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_129.MsgWithdrawProposalResponse>): _129.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _129.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgVote;
                fromPartial(object: Partial<_129.MsgVote>): _129.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _129.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgVoteResponse;
                fromPartial(_: Partial<_129.MsgVoteResponse>): _129.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _129.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgExec;
                fromPartial(object: Partial<_129.MsgExec>): _129.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _129.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgExecResponse;
                fromPartial(object: Partial<_129.MsgExecResponse>): _129.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _129.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgLeaveGroup;
                fromPartial(object: Partial<_129.MsgLeaveGroup>): _129.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _129.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_129.MsgLeaveGroupResponse>): _129.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _128.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupInfoRequest;
                fromPartial(object: Partial<_128.QueryGroupInfoRequest>): _128.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _128.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupInfoResponse;
                fromPartial(object: Partial<_128.QueryGroupInfoResponse>): _128.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _128.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_128.QueryGroupPolicyInfoRequest>): _128.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _128.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_128.QueryGroupPolicyInfoResponse>): _128.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _128.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupMembersRequest;
                fromPartial(object: Partial<_128.QueryGroupMembersRequest>): _128.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _128.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupMembersResponse;
                fromPartial(object: Partial<_128.QueryGroupMembersResponse>): _128.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _128.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_128.QueryGroupsByAdminRequest>): _128.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _128.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_128.QueryGroupsByAdminResponse>): _128.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _128.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_128.QueryGroupPoliciesByGroupRequest>): _128.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _128.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_128.QueryGroupPoliciesByGroupResponse>): _128.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _128.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_128.QueryGroupPoliciesByAdminRequest>): _128.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _128.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_128.QueryGroupPoliciesByAdminResponse>): _128.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _128.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryProposalRequest;
                fromPartial(object: Partial<_128.QueryProposalRequest>): _128.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _128.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryProposalResponse;
                fromPartial(object: Partial<_128.QueryProposalResponse>): _128.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _128.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_128.QueryProposalsByGroupPolicyRequest>): _128.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _128.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_128.QueryProposalsByGroupPolicyResponse>): _128.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _128.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_128.QueryVoteByProposalVoterRequest>): _128.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _128.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_128.QueryVoteByProposalVoterResponse>): _128.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _128.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_128.QueryVotesByProposalRequest>): _128.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _128.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_128.QueryVotesByProposalResponse>): _128.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _128.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_128.QueryVotesByVoterRequest>): _128.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _128.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_128.QueryVotesByVoterResponse>): _128.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _128.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_128.QueryGroupsByMemberRequest>): _128.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _128.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_128.QueryGroupsByMemberResponse>): _128.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _128.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryTallyResultRequest;
                fromPartial(object: Partial<_128.QueryTallyResultRequest>): _128.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _128.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryTallyResultResponse;
                fromPartial(object: Partial<_128.QueryTallyResultResponse>): _128.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _126.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventCreateGroup;
                fromPartial(object: Partial<_126.EventCreateGroup>): _126.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _126.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventUpdateGroup;
                fromPartial(object: Partial<_126.EventUpdateGroup>): _126.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _126.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventCreateGroupPolicy;
                fromPartial(object: Partial<_126.EventCreateGroupPolicy>): _126.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _126.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_126.EventUpdateGroupPolicy>): _126.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _126.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventSubmitProposal;
                fromPartial(object: Partial<_126.EventSubmitProposal>): _126.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _126.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventWithdrawProposal;
                fromPartial(object: Partial<_126.EventWithdrawProposal>): _126.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _126.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventVote;
                fromPartial(object: Partial<_126.EventVote>): _126.EventVote;
            };
            EventExec: {
                encode(message: _126.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventExec;
                fromPartial(object: Partial<_126.EventExec>): _126.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _126.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventLeaveGroup;
                fromPartial(object: Partial<_126.EventLeaveGroup>): _126.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _133.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsRequest;
                fromPartial(_: Partial<_133.QueryParamsRequest>): _133.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _133.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsResponse;
                fromPartial(object: Partial<_133.QueryParamsResponse>): _133.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _133.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryInflationRequest;
                fromPartial(_: Partial<_133.QueryInflationRequest>): _133.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _133.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryInflationResponse;
                fromPartial(object: Partial<_133.QueryInflationResponse>): _133.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _133.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_133.QueryAnnualProvisionsRequest>): _133.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _133.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_133.QueryAnnualProvisionsResponse>): _133.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _132.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Minter;
                fromPartial(object: Partial<_132.Minter>): _132.Minter;
            };
            Params: {
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                fromPartial(object: Partial<_132.Params>): _132.Params;
            };
            GenesisState: {
                encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
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
                    send(value: _139.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _139.MsgSend): {
                        typeUrl: string;
                        value: _139.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _139.MsgSend): {
                        typeUrl: string;
                        value: _139.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _139.MsgSend) => {
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
                    }) => _139.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _139.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgSend;
                fromPartial(object: Partial<_139.MsgSend>): _139.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _139.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgSendResponse;
                fromPartial(_: Partial<_139.MsgSendResponse>): _139.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _138.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryBalanceRequest;
                fromPartial(object: Partial<_138.QueryBalanceRequest>): _138.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _138.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryBalanceResponse;
                fromPartial(object: Partial<_138.QueryBalanceResponse>): _138.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _138.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryOwnerRequest;
                fromPartial(object: Partial<_138.QueryOwnerRequest>): _138.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _138.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryOwnerResponse;
                fromPartial(object: Partial<_138.QueryOwnerResponse>): _138.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _138.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QuerySupplyRequest;
                fromPartial(object: Partial<_138.QuerySupplyRequest>): _138.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _138.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QuerySupplyResponse;
                fromPartial(object: Partial<_138.QuerySupplyResponse>): _138.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _138.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryNFTsRequest;
                fromPartial(object: Partial<_138.QueryNFTsRequest>): _138.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _138.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryNFTsResponse;
                fromPartial(object: Partial<_138.QueryNFTsResponse>): _138.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _138.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryNFTRequest;
                fromPartial(object: Partial<_138.QueryNFTRequest>): _138.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _138.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryNFTResponse;
                fromPartial(object: Partial<_138.QueryNFTResponse>): _138.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _138.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryClassRequest;
                fromPartial(object: Partial<_138.QueryClassRequest>): _138.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _138.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryClassResponse;
                fromPartial(object: Partial<_138.QueryClassResponse>): _138.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _138.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryClassesRequest;
                fromPartial(object: Partial<_138.QueryClassesRequest>): _138.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _138.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryClassesResponse;
                fromPartial(object: Partial<_138.QueryClassesResponse>): _138.QueryClassesResponse;
            };
            Class: {
                encode(message: _137.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Class;
                fromPartial(object: Partial<_137.Class>): _137.Class;
            };
            NFT: {
                encode(message: _137.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.NFT;
                fromPartial(object: Partial<_137.NFT>): _137.NFT;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
            };
            Entry: {
                encode(message: _136.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Entry;
                fromPartial(object: Partial<_136.Entry>): _136.Entry;
            };
            EventSend: {
                encode(message: _135.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EventSend;
                fromPartial(object: Partial<_135.EventSend>): _135.EventSend;
            };
            EventMint: {
                encode(message: _135.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EventMint;
                fromPartial(object: Partial<_135.EventMint>): _135.EventMint;
            };
            EventBurn: {
                encode(message: _135.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EventBurn;
                fromPartial(object: Partial<_135.EventBurn>): _135.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _140.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Module;
                    fromPartial(_: Partial<_140.Module>): _140.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _141.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.TableDescriptor;
                fromPartial(object: Partial<_141.TableDescriptor>): _141.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _141.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_141.PrimaryKeyDescriptor>): _141.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _141.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_141.SecondaryIndexDescriptor>): _141.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _141.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SingletonDescriptor;
                fromPartial(object: Partial<_141.SingletonDescriptor>): _141.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _142.StorageType;
            storageTypeToJSON(object: _142.StorageType): string;
            StorageType: typeof _142.StorageType;
            StorageTypeSDKType: typeof _142.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _142.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_142.ModuleSchemaDescriptor>): _142.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _142.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_142.ModuleSchemaDescriptor_FileEntry>): _142.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _144.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryParamsRequest;
                fromPartial(object: Partial<_144.QueryParamsRequest>): _144.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _144.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryParamsResponse;
                fromPartial(object: Partial<_144.QueryParamsResponse>): _144.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _144.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubspacesRequest;
                fromPartial(_: Partial<_144.QuerySubspacesRequest>): _144.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _144.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QuerySubspacesResponse;
                fromPartial(object: Partial<_144.QuerySubspacesResponse>): _144.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _144.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Subspace;
                fromPartial(object: Partial<_144.Subspace>): _144.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _143.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ParameterChangeProposal;
                fromPartial(object: Partial<_143.ParameterChangeProposal>): _143.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _143.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ParamChange;
                fromPartial(object: Partial<_143.ParamChange>): _143.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _148.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _148.MsgUnjail): {
                        typeUrl: string;
                        value: _148.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _148.MsgUnjail): {
                        typeUrl: string;
                        value: _148.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _148.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _148.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _148.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUnjail;
                fromPartial(object: Partial<_148.MsgUnjail>): _148.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _148.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgUnjailResponse;
                fromPartial(_: Partial<_148.MsgUnjailResponse>): _148.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _147.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ValidatorSigningInfo;
                fromPartial(object: Partial<_147.ValidatorSigningInfo>): _147.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _147.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Params;
                fromPartial(object: Partial<_147.Params>): _147.Params;
            };
            QueryParamsRequest: {
                encode(_: _146.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsRequest;
                fromPartial(_: Partial<_146.QueryParamsRequest>): _146.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _146.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryParamsResponse;
                fromPartial(object: Partial<_146.QueryParamsResponse>): _146.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _146.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySigningInfoRequest;
                fromPartial(object: Partial<_146.QuerySigningInfoRequest>): _146.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _146.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySigningInfoResponse;
                fromPartial(object: Partial<_146.QuerySigningInfoResponse>): _146.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _146.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySigningInfosRequest;
                fromPartial(object: Partial<_146.QuerySigningInfosRequest>): _146.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _146.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySigningInfosResponse;
                fromPartial(object: Partial<_146.QuerySigningInfosResponse>): _146.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _145.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GenesisState;
                fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
            };
            SigningInfo: {
                encode(message: _145.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.SigningInfo;
                fromPartial(object: Partial<_145.SigningInfo>): _145.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _145.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ValidatorMissedBlocks;
                fromPartial(object: Partial<_145.ValidatorMissedBlocks>): _145.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _145.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MissedBlock;
                fromPartial(object: Partial<_145.MissedBlock>): _145.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _153.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _153.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _153.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _153.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _153.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _153.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _153.MsgCreateValidator): {
                        typeUrl: string;
                        value: _153.MsgCreateValidator;
                    };
                    editValidator(value: _153.MsgEditValidator): {
                        typeUrl: string;
                        value: _153.MsgEditValidator;
                    };
                    delegate(value: _153.MsgDelegate): {
                        typeUrl: string;
                        value: _153.MsgDelegate;
                    };
                    beginRedelegate(value: _153.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _153.MsgBeginRedelegate;
                    };
                    undelegate(value: _153.MsgUndelegate): {
                        typeUrl: string;
                        value: _153.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _153.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _153.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _153.MsgCreateValidator): {
                        typeUrl: string;
                        value: _153.MsgCreateValidator;
                    };
                    editValidator(value: _153.MsgEditValidator): {
                        typeUrl: string;
                        value: _153.MsgEditValidator;
                    };
                    delegate(value: _153.MsgDelegate): {
                        typeUrl: string;
                        value: _153.MsgDelegate;
                    };
                    beginRedelegate(value: _153.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _153.MsgBeginRedelegate;
                    };
                    undelegate(value: _153.MsgUndelegate): {
                        typeUrl: string;
                        value: _153.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _153.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _153.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _153.MsgCreateValidator) => {
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
                    }) => _153.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _153.MsgEditValidator) => {
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
                    }) => _153.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _153.MsgDelegate) => {
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
                    }) => _153.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _153.MsgBeginRedelegate) => {
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
                    }) => _153.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _153.MsgUndelegate) => {
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
                    }) => _153.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _153.MsgCancelUnbondingDelegation) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    };
                    fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    }) => _153.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _153.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateValidator;
                fromPartial(object: Partial<_153.MsgCreateValidator>): _153.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _153.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_153.MsgCreateValidatorResponse>): _153.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _153.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgEditValidator;
                fromPartial(object: Partial<_153.MsgEditValidator>): _153.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _153.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgEditValidatorResponse;
                fromPartial(_: Partial<_153.MsgEditValidatorResponse>): _153.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _153.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDelegate;
                fromPartial(object: Partial<_153.MsgDelegate>): _153.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _153.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDelegateResponse;
                fromPartial(_: Partial<_153.MsgDelegateResponse>): _153.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _153.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgBeginRedelegate;
                fromPartial(object: Partial<_153.MsgBeginRedelegate>): _153.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _153.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_153.MsgBeginRedelegateResponse>): _153.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _153.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUndelegate;
                fromPartial(object: Partial<_153.MsgUndelegate>): _153.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _153.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUndelegateResponse;
                fromPartial(object: Partial<_153.MsgUndelegateResponse>): _153.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _153.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_153.MsgCancelUnbondingDelegation>): _153.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _153.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_153.MsgCancelUnbondingDelegationResponse>): _153.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _152.BondStatus;
            bondStatusToJSON(object: _152.BondStatus): string;
            BondStatus: typeof _152.BondStatus;
            BondStatusSDKType: typeof _152.BondStatus;
            HistoricalInfo: {
                encode(message: _152.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.HistoricalInfo;
                fromPartial(object: Partial<_152.HistoricalInfo>): _152.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _152.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.CommissionRates;
                fromPartial(object: Partial<_152.CommissionRates>): _152.CommissionRates;
            };
            Commission: {
                encode(message: _152.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Commission;
                fromPartial(object: Partial<_152.Commission>): _152.Commission;
            };
            Description: {
                encode(message: _152.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Description;
                fromPartial(object: Partial<_152.Description>): _152.Description;
            };
            Validator: {
                encode(message: _152.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Validator;
                fromPartial(object: Partial<_152.Validator>): _152.Validator;
            };
            ValAddresses: {
                encode(message: _152.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ValAddresses;
                fromPartial(object: Partial<_152.ValAddresses>): _152.ValAddresses;
            };
            DVPair: {
                encode(message: _152.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.DVPair;
                fromPartial(object: Partial<_152.DVPair>): _152.DVPair;
            };
            DVPairs: {
                encode(message: _152.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.DVPairs;
                fromPartial(object: Partial<_152.DVPairs>): _152.DVPairs;
            };
            DVVTriplet: {
                encode(message: _152.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.DVVTriplet;
                fromPartial(object: Partial<_152.DVVTriplet>): _152.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _152.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.DVVTriplets;
                fromPartial(object: Partial<_152.DVVTriplets>): _152.DVVTriplets;
            };
            Delegation: {
                encode(message: _152.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Delegation;
                fromPartial(object: Partial<_152.Delegation>): _152.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _152.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UnbondingDelegation;
                fromPartial(object: Partial<_152.UnbondingDelegation>): _152.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _152.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UnbondingDelegationEntry;
                fromPartial(object: Partial<_152.UnbondingDelegationEntry>): _152.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _152.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RedelegationEntry;
                fromPartial(object: Partial<_152.RedelegationEntry>): _152.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _152.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Redelegation;
                fromPartial(object: Partial<_152.Redelegation>): _152.Redelegation;
            };
            Params: {
                encode(message: _152.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Params;
                fromPartial(object: Partial<_152.Params>): _152.Params;
            };
            DelegationResponse: {
                encode(message: _152.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.DelegationResponse;
                fromPartial(object: Partial<_152.DelegationResponse>): _152.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _152.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RedelegationEntryResponse;
                fromPartial(object: Partial<_152.RedelegationEntryResponse>): _152.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _152.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RedelegationResponse;
                fromPartial(object: Partial<_152.RedelegationResponse>): _152.RedelegationResponse;
            };
            Pool: {
                encode(message: _152.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Pool;
                fromPartial(object: Partial<_152.Pool>): _152.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _151.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryValidatorsRequest;
                fromPartial(object: Partial<_151.QueryValidatorsRequest>): _151.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _151.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryValidatorsResponse;
                fromPartial(object: Partial<_151.QueryValidatorsResponse>): _151.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _151.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryValidatorRequest;
                fromPartial(object: Partial<_151.QueryValidatorRequest>): _151.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _151.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryValidatorResponse;
                fromPartial(object: Partial<_151.QueryValidatorResponse>): _151.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _151.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_151.QueryValidatorDelegationsRequest>): _151.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _151.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_151.QueryValidatorDelegationsResponse>): _151.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _151.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_151.QueryValidatorUnbondingDelegationsRequest>): _151.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _151.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_151.QueryValidatorUnbondingDelegationsResponse>): _151.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _151.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegationRequest;
                fromPartial(object: Partial<_151.QueryDelegationRequest>): _151.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _151.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegationResponse;
                fromPartial(object: Partial<_151.QueryDelegationResponse>): _151.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _151.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_151.QueryUnbondingDelegationRequest>): _151.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _151.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_151.QueryUnbondingDelegationResponse>): _151.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _151.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_151.QueryDelegatorDelegationsRequest>): _151.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _151.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_151.QueryDelegatorDelegationsResponse>): _151.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _151.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_151.QueryDelegatorUnbondingDelegationsRequest>): _151.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _151.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_151.QueryDelegatorUnbondingDelegationsResponse>): _151.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _151.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryRedelegationsRequest;
                fromPartial(object: Partial<_151.QueryRedelegationsRequest>): _151.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _151.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryRedelegationsResponse;
                fromPartial(object: Partial<_151.QueryRedelegationsResponse>): _151.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _151.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_151.QueryDelegatorValidatorsRequest>): _151.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _151.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_151.QueryDelegatorValidatorsResponse>): _151.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _151.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_151.QueryDelegatorValidatorRequest>): _151.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _151.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_151.QueryDelegatorValidatorResponse>): _151.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _151.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_151.QueryHistoricalInfoRequest>): _151.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _151.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_151.QueryHistoricalInfoResponse>): _151.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _151.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryPoolRequest;
                fromPartial(_: Partial<_151.QueryPoolRequest>): _151.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _151.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryPoolResponse;
                fromPartial(object: Partial<_151.QueryPoolResponse>): _151.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _151.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryParamsRequest;
                fromPartial(_: Partial<_151.QueryParamsRequest>): _151.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _151.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryParamsResponse;
                fromPartial(object: Partial<_151.QueryParamsResponse>): _151.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _150.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LastValidatorPower;
                fromPartial(object: Partial<_150.LastValidatorPower>): _150.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _149.AuthorizationType;
            authorizationTypeToJSON(object: _149.AuthorizationType): string;
            AuthorizationType: typeof _149.AuthorizationType;
            AuthorizationTypeSDKType: typeof _149.AuthorizationType;
            StakeAuthorization: {
                encode(message: _149.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.StakeAuthorization;
                fromPartial(object: Partial<_149.StakeAuthorization>): _149.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _149.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.StakeAuthorization_Validators;
                fromPartial(object: Partial<_149.StakeAuthorization_Validators>): _149.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _154.SignMode;
                signModeToJSON(object: _154.SignMode): string;
                SignMode: typeof _154.SignMode;
                SignModeSDKType: typeof _154.SignMode;
                SignatureDescriptors: {
                    encode(message: _154.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SignatureDescriptors;
                    fromPartial(object: Partial<_154.SignatureDescriptors>): _154.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _154.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SignatureDescriptor;
                    fromPartial(object: Partial<_154.SignatureDescriptor>): _154.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _154.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_154.SignatureDescriptor_Data>): _154.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _154.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_154.SignatureDescriptor_Data_Single>): _154.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _154.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_154.SignatureDescriptor_Data_Multi>): _154.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _156.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Tx;
                fromPartial(object: Partial<_156.Tx>): _156.Tx;
            };
            TxRaw: {
                encode(message: _156.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.TxRaw;
                fromPartial(object: Partial<_156.TxRaw>): _156.TxRaw;
            };
            SignDoc: {
                encode(message: _156.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.SignDoc;
                fromPartial(object: Partial<_156.SignDoc>): _156.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _156.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.SignDocDirectAux;
                fromPartial(object: Partial<_156.SignDocDirectAux>): _156.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _156.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.TxBody;
                fromPartial(object: Partial<_156.TxBody>): _156.TxBody;
            };
            AuthInfo: {
                encode(message: _156.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.AuthInfo;
                fromPartial(object: Partial<_156.AuthInfo>): _156.AuthInfo;
            };
            SignerInfo: {
                encode(message: _156.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.SignerInfo;
                fromPartial(object: Partial<_156.SignerInfo>): _156.SignerInfo;
            };
            ModeInfo: {
                encode(message: _156.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ModeInfo;
                fromPartial(object: Partial<_156.ModeInfo>): _156.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _156.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ModeInfo_Single;
                fromPartial(object: Partial<_156.ModeInfo_Single>): _156.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _156.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ModeInfo_Multi;
                fromPartial(object: Partial<_156.ModeInfo_Multi>): _156.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _156.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Fee;
                fromPartial(object: Partial<_156.Fee>): _156.Fee;
            };
            Tip: {
                encode(message: _156.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Tip;
                fromPartial(object: Partial<_156.Tip>): _156.Tip;
            };
            AuxSignerData: {
                encode(message: _156.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.AuxSignerData;
                fromPartial(object: Partial<_156.AuxSignerData>): _156.AuxSignerData;
            };
            orderByFromJSON(object: any): _155.OrderBy;
            orderByToJSON(object: _155.OrderBy): string;
            broadcastModeFromJSON(object: any): _155.BroadcastMode;
            broadcastModeToJSON(object: _155.BroadcastMode): string;
            OrderBy: typeof _155.OrderBy;
            OrderBySDKType: typeof _155.OrderBy;
            BroadcastMode: typeof _155.BroadcastMode;
            BroadcastModeSDKType: typeof _155.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _155.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GetTxsEventRequest;
                fromPartial(object: Partial<_155.GetTxsEventRequest>): _155.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _155.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GetTxsEventResponse;
                fromPartial(object: Partial<_155.GetTxsEventResponse>): _155.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _155.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.BroadcastTxRequest;
                fromPartial(object: Partial<_155.BroadcastTxRequest>): _155.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _155.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.BroadcastTxResponse;
                fromPartial(object: Partial<_155.BroadcastTxResponse>): _155.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _155.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.SimulateRequest;
                fromPartial(object: Partial<_155.SimulateRequest>): _155.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _155.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.SimulateResponse;
                fromPartial(object: Partial<_155.SimulateResponse>): _155.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _155.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GetTxRequest;
                fromPartial(object: Partial<_155.GetTxRequest>): _155.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _155.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GetTxResponse;
                fromPartial(object: Partial<_155.GetTxResponse>): _155.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _155.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_155.GetBlockWithTxsRequest>): _155.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _155.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_155.GetBlockWithTxsResponse>): _155.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _158.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _158.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _158.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _158.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _158.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _158.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _158.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _158.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _158.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _158.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _158.MsgSoftwareUpgrade) => {
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
                    }) => _158.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _158.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _158.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _159.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Plan;
                fromPartial(object: Partial<_159.Plan>): _159.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _159.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_159.SoftwareUpgradeProposal>): _159.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _159.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_159.CancelSoftwareUpgradeProposal>): _159.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _159.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ModuleVersion;
                fromPartial(object: Partial<_159.ModuleVersion>): _159.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _158.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_158.MsgSoftwareUpgrade>): _158.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _158.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_158.MsgSoftwareUpgradeResponse>): _158.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _158.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgCancelUpgrade;
                fromPartial(object: Partial<_158.MsgCancelUpgrade>): _158.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _158.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_158.MsgCancelUpgradeResponse>): _158.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _157.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_157.QueryCurrentPlanRequest>): _157.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _157.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_157.QueryCurrentPlanResponse>): _157.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _157.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_157.QueryAppliedPlanRequest>): _157.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _157.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_157.QueryAppliedPlanResponse>): _157.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _157.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_157.QueryUpgradedConsensusStateRequest>): _157.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _157.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_157.QueryUpgradedConsensusStateResponse>): _157.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _157.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_157.QueryModuleVersionsRequest>): _157.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _157.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_157.QueryModuleVersionsResponse>): _157.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _157.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryAuthorityRequest;
                fromPartial(_: Partial<_157.QueryAuthorityRequest>): _157.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _157.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryAuthorityResponse;
                fromPartial(object: Partial<_157.QueryAuthorityResponse>): _157.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _160.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _160.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _160.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _160.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _160.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _160.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _160.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _160.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _160.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _160.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _160.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _160.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _160.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _160.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _160.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _160.MsgCreateVestingAccount) => {
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
                    }) => _160.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _160.MsgCreatePermanentLockedAccount) => {
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
                    }) => _160.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _160.MsgCreatePeriodicVestingAccount) => {
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
                    }) => _160.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _161.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.BaseVestingAccount;
                fromPartial(object: Partial<_161.BaseVestingAccount>): _161.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _161.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ContinuousVestingAccount;
                fromPartial(object: Partial<_161.ContinuousVestingAccount>): _161.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _161.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.DelayedVestingAccount;
                fromPartial(object: Partial<_161.DelayedVestingAccount>): _161.DelayedVestingAccount;
            };
            Period: {
                encode(message: _161.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Period;
                fromPartial(object: Partial<_161.Period>): _161.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _161.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PeriodicVestingAccount;
                fromPartial(object: Partial<_161.PeriodicVestingAccount>): _161.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _161.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PermanentLockedAccount;
                fromPartial(object: Partial<_161.PermanentLockedAccount>): _161.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _160.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCreateVestingAccount;
                fromPartial(object: Partial<_160.MsgCreateVestingAccount>): _160.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _160.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_160.MsgCreateVestingAccountResponse>): _160.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _160.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_160.MsgCreatePermanentLockedAccount>): _160.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _160.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_160.MsgCreatePermanentLockedAccountResponse>): _160.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _160.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_160.MsgCreatePeriodicVestingAccount>): _160.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _160.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_160.MsgCreatePeriodicVestingAccountResponse>): _160.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
}
