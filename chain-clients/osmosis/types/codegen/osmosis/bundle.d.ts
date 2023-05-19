import * as _0 from "./accum/v1beta1/accum";
import * as _1 from "./downtime-detector/v1beta1/downtime_duration";
import * as _2 from "./downtime-detector/v1beta1/genesis";
import * as _3 from "./downtime-detector/v1beta1/query";
import * as _4 from "./epochs/genesis";
import * as _5 from "./epochs/query";
import * as _6 from "./gamm/pool-models/balancer/balancerPool";
import * as _7 from "./gamm/v1beta1/genesis";
import * as _8 from "./gamm/v1beta1/query";
import * as _9 from "./gamm/v1beta1/tx";
import * as _10 from "./gamm/pool-models/balancer/tx/tx";
import * as _11 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _12 from "./gamm/pool-models/stableswap/tx";
import * as _13 from "./gamm/v2/query";
import * as _14 from "./ibc-rate-limit/v1beta1/genesis";
import * as _15 from "./ibc-rate-limit/v1beta1/params";
import * as _16 from "./ibc-rate-limit/v1beta1/query";
import * as _17 from "./incentives/gauge";
import * as _18 from "./incentives/genesis";
import * as _19 from "./incentives/params";
import * as _20 from "./incentives/query";
import * as _21 from "./incentives/tx";
import * as _22 from "./lockup/genesis";
import * as _23 from "./lockup/lock";
import * as _24 from "./lockup/params";
import * as _25 from "./lockup/query";
import * as _26 from "./lockup/tx";
import * as _27 from "./mint/v1beta1/genesis";
import * as _28 from "./mint/v1beta1/mint";
import * as _29 from "./mint/v1beta1/query";
import * as _30 from "./pool-incentives/v1beta1/genesis";
import * as _31 from "./pool-incentives/v1beta1/gov";
import * as _32 from "./pool-incentives/v1beta1/incentives";
import * as _33 from "./pool-incentives/v1beta1/query";
import * as _34 from "./poolmanager/v1beta1/genesis";
import * as _35 from "./poolmanager/v1beta1/module_route";
import * as _36 from "./poolmanager/v1beta1/query";
import * as _37 from "./poolmanager/v1beta1/swap_route";
import * as _38 from "./poolmanager/v1beta1/tx";
import * as _39 from "./protorev/v1beta1/genesis";
import * as _40 from "./protorev/v1beta1/gov";
import * as _41 from "./protorev/v1beta1/params";
import * as _42 from "./protorev/v1beta1/protorev";
import * as _43 from "./protorev/v1beta1/query";
import * as _44 from "./protorev/v1beta1/tx";
import * as _45 from "./sumtree/v1beta1/tree";
import * as _46 from "./superfluid/genesis";
import * as _47 from "./superfluid/params";
import * as _48 from "./superfluid/query";
import * as _49 from "./superfluid/superfluid";
import * as _50 from "./superfluid/tx";
import * as _51 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _52 from "./tokenfactory/v1beta1/genesis";
import * as _53 from "./tokenfactory/v1beta1/params";
import * as _54 from "./tokenfactory/v1beta1/query";
import * as _55 from "./tokenfactory/v1beta1/tx";
import * as _56 from "./twap/v1beta1/genesis";
import * as _57 from "./twap/v1beta1/query";
import * as _58 from "./twap/v1beta1/twap_record";
import * as _59 from "./txfees/v1beta1/feetoken";
import * as _60 from "./txfees/v1beta1/genesis";
import * as _61 from "./txfees/v1beta1/gov";
import * as _62 from "./txfees/v1beta1/query";
import * as _63 from "./valset-pref/v1beta1/query";
import * as _64 from "./valset-pref/v1beta1/state";
import * as _65 from "./valset-pref/v1beta1/tx";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                encode(message: _0.AccumulatorContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.AccumulatorContent;
                fromPartial(object: Partial<_0.AccumulatorContent>): _0.AccumulatorContent;
            };
            Options: {
                encode(_: _0.Options, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Options;
                fromPartial(_: Partial<_0.Options>): _0.Options;
            };
            Record: {
                encode(message: _0.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Record;
                fromPartial(object: Partial<_0.Record>): _0.Record;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            RecoveredSinceDowntimeOfLengthRequest: {
                encode(message: _3.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_3.RecoveredSinceDowntimeOfLengthRequest>): _3.RecoveredSinceDowntimeOfLengthRequest;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                encode(message: _3.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_3.RecoveredSinceDowntimeOfLengthResponse>): _3.RecoveredSinceDowntimeOfLengthResponse;
            };
            GenesisDowntimeEntry: {
                encode(message: _2.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisDowntimeEntry;
                fromPartial(object: Partial<_2.GenesisDowntimeEntry>): _2.GenesisDowntimeEntry;
            };
            GenesisState: {
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
            };
            downtimeFromJSON(object: any): _1.Downtime;
            downtimeToJSON(object: _1.Downtime): string;
            Downtime: typeof _1.Downtime;
            DowntimeSDKType: typeof _1.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _5.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_5.QueryEpochsInfoRequest>): _5.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _5.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_5.QueryEpochsInfoResponse>): _5.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _5.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_5.QueryCurrentEpochRequest>): _5.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _5.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_5.QueryCurrentEpochResponse>): _5.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _4.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EpochInfo;
                fromPartial(object: Partial<_4.EpochInfo>): _4.EpochInfo;
            };
            GenesisState: {
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _9.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _9.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _9.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _9.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _9.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _9.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _9.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _9.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _9.MsgJoinPool): {
                        typeUrl: string;
                        value: _9.MsgJoinPool;
                    };
                    exitPool(value: _9.MsgExitPool): {
                        typeUrl: string;
                        value: _9.MsgExitPool;
                    };
                    swapExactAmountIn(value: _9.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _9.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _9.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _9.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _9.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _9.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _9.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _9.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _9.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _9.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _9.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _9.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _9.MsgJoinPool): {
                        typeUrl: string;
                        value: _9.MsgJoinPool;
                    };
                    exitPool(value: _9.MsgExitPool): {
                        typeUrl: string;
                        value: _9.MsgExitPool;
                    };
                    swapExactAmountIn(value: _9.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _9.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _9.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _9.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _9.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _9.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _9.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _9.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _9.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _9.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _9.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _9.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _9.MsgJoinPool) => {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_out_amount, token_in_maxs }: {
                        sender: string;
                        pool_id: string;
                        share_out_amount: string;
                        token_in_maxs: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _9.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _9.MsgExitPool) => {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, pool_id, share_in_amount, token_out_mins }: {
                        sender: string;
                        pool_id: string;
                        share_in_amount: string;
                        token_out_mins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _9.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _9.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    }) => _9.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _9.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, token_in_max_amount, token_out }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    }) => _9.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _9.MsgJoinSwapExternAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in, share_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        share_out_min_amount: string;
                    }) => _9.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _9.MsgJoinSwapShareAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_in_denom, share_out_amount, token_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_in_denom: string;
                        share_out_amount: string;
                        token_in_max_amount: string;
                    }) => _9.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _9.MsgExitSwapExternAmountOut) => {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out, share_in_max_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                        share_in_max_amount: string;
                    }) => _9.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _9.MsgExitSwapShareAmountIn) => {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, pool_id, token_out_denom, share_in_amount, token_out_min_amount }: {
                        sender: string;
                        pool_id: string;
                        token_out_denom: string;
                        share_in_amount: string;
                        token_out_min_amount: string;
                    }) => _9.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _9.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgJoinPool;
                fromPartial(object: Partial<_9.MsgJoinPool>): _9.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _9.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgJoinPoolResponse;
                fromPartial(object: Partial<_9.MsgJoinPoolResponse>): _9.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _9.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExitPool;
                fromPartial(object: Partial<_9.MsgExitPool>): _9.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _9.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExitPoolResponse;
                fromPartial(object: Partial<_9.MsgExitPoolResponse>): _9.MsgExitPoolResponse;
            };
            MsgSwapExactAmountIn: {
                encode(message: _9.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_9.MsgSwapExactAmountIn>): _9.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _9.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_9.MsgSwapExactAmountInResponse>): _9.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _9.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_9.MsgSwapExactAmountOut>): _9.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _9.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_9.MsgSwapExactAmountOutResponse>): _9.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _9.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_9.MsgJoinSwapExternAmountIn>): _9.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _9.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_9.MsgJoinSwapExternAmountInResponse>): _9.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _9.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_9.MsgJoinSwapShareAmountOut>): _9.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _9.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_9.MsgJoinSwapShareAmountOutResponse>): _9.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _9.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_9.MsgExitSwapShareAmountIn>): _9.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _9.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_9.MsgExitSwapShareAmountInResponse>): _9.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _9.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_9.MsgExitSwapExternAmountOut>): _9.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _9.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_9.MsgExitSwapExternAmountOutResponse>): _9.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _8.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolRequest;
                fromPartial(object: Partial<_8.QueryPoolRequest>): _8.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _8.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolResponse;
                fromPartial(object: Partial<_8.QueryPoolResponse>): _8.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _8.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolsRequest;
                fromPartial(object: Partial<_8.QueryPoolsRequest>): _8.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _8.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolsResponse;
                fromPartial(object: Partial<_8.QueryPoolsResponse>): _8.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _8.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryNumPoolsRequest;
                fromPartial(_: Partial<_8.QueryNumPoolsRequest>): _8.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _8.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryNumPoolsResponse;
                fromPartial(object: Partial<_8.QueryNumPoolsResponse>): _8.QueryNumPoolsResponse;
            };
            QueryPoolTypeRequest: {
                encode(message: _8.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolTypeRequest;
                fromPartial(object: Partial<_8.QueryPoolTypeRequest>): _8.QueryPoolTypeRequest;
            };
            QueryPoolTypeResponse: {
                encode(message: _8.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolTypeResponse;
                fromPartial(object: Partial<_8.QueryPoolTypeResponse>): _8.QueryPoolTypeResponse;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _8.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_8.QueryCalcJoinPoolSharesRequest>): _8.QueryCalcJoinPoolSharesRequest;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _8.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_8.QueryCalcJoinPoolSharesResponse>): _8.QueryCalcJoinPoolSharesResponse;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _8.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_8.QueryCalcExitPoolCoinsFromSharesRequest>): _8.QueryCalcExitPoolCoinsFromSharesRequest;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _8.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_8.QueryCalcExitPoolCoinsFromSharesResponse>): _8.QueryCalcExitPoolCoinsFromSharesResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _8.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolParamsRequest;
                fromPartial(object: Partial<_8.QueryPoolParamsRequest>): _8.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _8.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolParamsResponse;
                fromPartial(object: Partial<_8.QueryPoolParamsResponse>): _8.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _8.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_8.QueryTotalPoolLiquidityRequest>): _8.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _8.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_8.QueryTotalPoolLiquidityResponse>): _8.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _8.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalSharesRequest;
                fromPartial(object: Partial<_8.QueryTotalSharesRequest>): _8.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _8.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalSharesResponse;
                fromPartial(object: Partial<_8.QueryTotalSharesResponse>): _8.QueryTotalSharesResponse;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _8.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_8.QueryCalcJoinPoolNoSwapSharesRequest>): _8.QueryCalcJoinPoolNoSwapSharesRequest;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _8.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_8.QueryCalcJoinPoolNoSwapSharesResponse>): _8.QueryCalcJoinPoolNoSwapSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _8.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QuerySpotPriceRequest;
                fromPartial(object: Partial<_8.QuerySpotPriceRequest>): _8.QuerySpotPriceRequest;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _8.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_8.QueryPoolsWithFilterRequest>): _8.QueryPoolsWithFilterRequest;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _8.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_8.QueryPoolsWithFilterResponse>): _8.QueryPoolsWithFilterResponse;
            };
            QuerySpotPriceResponse: {
                encode(message: _8.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QuerySpotPriceResponse;
                fromPartial(object: Partial<_8.QuerySpotPriceResponse>): _8.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _8.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_8.QuerySwapExactAmountInRequest>): _8.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _8.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_8.QuerySwapExactAmountInResponse>): _8.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _8.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_8.QuerySwapExactAmountOutRequest>): _8.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _8.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_8.QuerySwapExactAmountOutResponse>): _8.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _8.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_8.QueryTotalLiquidityRequest>): _8.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _8.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_8.QueryTotalLiquidityResponse>): _8.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
            };
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _6.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.SmoothWeightChangeParams;
                fromPartial(object: Partial<_6.SmoothWeightChangeParams>): _6.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _6.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.PoolParams;
                fromPartial(object: Partial<_6.PoolParams>): _6.PoolParams;
            };
            PoolAsset: {
                encode(message: _6.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.PoolAsset;
                fromPartial(object: Partial<_6.PoolAsset>): _6.PoolAsset;
            };
            Pool: {
                encode(message: _6.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Pool;
                fromPartial(object: Partial<_6.Pool>): _6.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _10.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _10.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _10.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _10.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _10.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _10.MsgCreateBalancerPool) => {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                    smooth_weight_change_params: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initial_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        target_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                pool_assets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            };
                            fromAmino: ({ sender, pool_params, pool_assets, future_pool_governor }: {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                    smooth_weight_change_params: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initial_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        target_pool_weights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                pool_assets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            }) => _10.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _10.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_10.MsgCreateBalancerPool>): _10.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _10.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_10.MsgCreateBalancerPoolResponse>): _10.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _12.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _12.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _12.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _12.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _12.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _12.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _12.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _12.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _12.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _12.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor, scalingFactorController }: _12.MsgCreateStableswapPool) => {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: string[];
                                future_pool_governor: string;
                                scaling_factor_controller: string;
                            };
                            fromAmino: ({ sender, pool_params, initial_pool_liquidity, scaling_factors, future_pool_governor, scaling_factor_controller }: {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: string[];
                                future_pool_governor: string;
                                scaling_factor_controller: string;
                            }) => _12.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _12.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: string[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: string[];
                            }) => _12.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _12.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_12.MsgCreateStableswapPool>): _12.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _12.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_12.MsgCreateStableswapPoolResponse>): _12.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _12.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_12.MsgStableSwapAdjustScalingFactors>): _12.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _12.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_12.MsgStableSwapAdjustScalingFactorsResponse>): _12.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _11.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PoolParams;
                        fromPartial(object: Partial<_11.PoolParams>): _11.PoolParams;
                    };
                    Pool: {
                        encode(message: _11.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Pool;
                        fromPartial(object: Partial<_11.Pool>): _11.Pool;
                    };
                };
            }
        }
        const v2: {
            QuerySpotPriceRequest: {
                encode(message: _13.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySpotPriceRequest;
                fromPartial(object: Partial<_13.QuerySpotPriceRequest>): _13.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _13.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySpotPriceResponse;
                fromPartial(object: Partial<_13.QuerySpotPriceResponse>): _13.QuerySpotPriceResponse;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            ParamsRequest: {
                encode(_: _16.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ParamsRequest;
                fromPartial(_: Partial<_16.ParamsRequest>): _16.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _16.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ParamsResponse;
                fromPartial(object: Partial<_16.ParamsResponse>): _16.ParamsResponse;
            };
            Params: {
                encode(message: _15.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Params;
                fromPartial(object: Partial<_15.Params>): _15.Params;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
            };
        };
    }
    const incentives: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _21.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _21.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _21.MsgCreateGauge): {
                    typeUrl: string;
                    value: _21.MsgCreateGauge;
                };
                addToGauge(value: _21.MsgAddToGauge): {
                    typeUrl: string;
                    value: _21.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _21.MsgCreateGauge): {
                    typeUrl: string;
                    value: _21.MsgCreateGauge;
                };
                addToGauge(value: _21.MsgAddToGauge): {
                    typeUrl: string;
                    value: _21.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _21.MsgCreateGauge) => {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                    num_epochs_paid_over: string;
                };
                fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                    num_epochs_paid_over: string;
                }) => _21.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _21.MsgAddToGauge) => {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, gauge_id, rewards }: {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _21.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _21.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgCreateGauge;
            fromPartial(object: Partial<_21.MsgCreateGauge>): _21.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _21.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_21.MsgCreateGaugeResponse>): _21.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _21.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgAddToGauge;
            fromPartial(object: Partial<_21.MsgAddToGauge>): _21.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _21.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_21.MsgAddToGaugeResponse>): _21.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _20.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_20.ModuleToDistributeCoinsRequest>): _20.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _20.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_20.ModuleToDistributeCoinsResponse>): _20.ModuleToDistributeCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _20.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GaugeByIDRequest;
            fromPartial(object: Partial<_20.GaugeByIDRequest>): _20.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _20.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GaugeByIDResponse;
            fromPartial(object: Partial<_20.GaugeByIDResponse>): _20.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _20.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GaugesRequest;
            fromPartial(object: Partial<_20.GaugesRequest>): _20.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _20.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GaugesResponse;
            fromPartial(object: Partial<_20.GaugesResponse>): _20.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _20.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ActiveGaugesRequest;
            fromPartial(object: Partial<_20.ActiveGaugesRequest>): _20.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _20.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ActiveGaugesResponse;
            fromPartial(object: Partial<_20.ActiveGaugesResponse>): _20.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _20.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_20.ActiveGaugesPerDenomRequest>): _20.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _20.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_20.ActiveGaugesPerDenomResponse>): _20.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _20.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.UpcomingGaugesRequest;
            fromPartial(object: Partial<_20.UpcomingGaugesRequest>): _20.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _20.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.UpcomingGaugesResponse;
            fromPartial(object: Partial<_20.UpcomingGaugesResponse>): _20.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _20.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_20.UpcomingGaugesPerDenomRequest>): _20.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _20.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_20.UpcomingGaugesPerDenomResponse>): _20.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _20.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.RewardsEstRequest;
            fromPartial(object: Partial<_20.RewardsEstRequest>): _20.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _20.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.RewardsEstResponse;
            fromPartial(object: Partial<_20.RewardsEstResponse>): _20.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _20.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_20.QueryLockableDurationsRequest>): _20.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _20.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_20.QueryLockableDurationsResponse>): _20.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _19.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Params;
            fromPartial(object: Partial<_19.Params>): _19.Params;
        };
        GenesisState: {
            encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GenesisState;
            fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
        };
        Gauge: {
            encode(message: _17.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Gauge;
            fromPartial(object: Partial<_17.Gauge>): _17.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _17.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.LockableDurationsInfo;
            fromPartial(object: Partial<_17.LockableDurationsInfo>): _17.LockableDurationsInfo;
        };
    };
    const lockup: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _26.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _26.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _26.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _26.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _26.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _26.MsgLockTokens): {
                    typeUrl: string;
                    value: _26.MsgLockTokens;
                };
                beginUnlockingAll(value: _26.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _26.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _26.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _26.MsgBeginUnlocking;
                };
                extendLockup(value: _26.MsgExtendLockup): {
                    typeUrl: string;
                    value: _26.MsgExtendLockup;
                };
                forceUnlock(value: _26.MsgForceUnlock): {
                    typeUrl: string;
                    value: _26.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _26.MsgLockTokens): {
                    typeUrl: string;
                    value: _26.MsgLockTokens;
                };
                beginUnlockingAll(value: _26.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _26.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _26.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _26.MsgBeginUnlocking;
                };
                extendLockup(value: _26.MsgExtendLockup): {
                    typeUrl: string;
                    value: _26.MsgExtendLockup;
                };
                forceUnlock(value: _26.MsgForceUnlock): {
                    typeUrl: string;
                    value: _26.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _26.MsgLockTokens) => {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, duration, coins }: {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _26.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _26.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _26.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _26.MsgBeginUnlocking) => {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, ID, coins }: {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _26.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _26.MsgExtendLockup) => {
                    owner: string;
                    ID: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                };
                fromAmino: ({ owner, ID, duration }: {
                    owner: string;
                    ID: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                }) => _26.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _26.MsgForceUnlock) => {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, ID, coins }: {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _26.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            encode(message: _26.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgLockTokens;
            fromPartial(object: Partial<_26.MsgLockTokens>): _26.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _26.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgLockTokensResponse;
            fromPartial(object: Partial<_26.MsgLockTokensResponse>): _26.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _26.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_26.MsgBeginUnlockingAll>): _26.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _26.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_26.MsgBeginUnlockingAllResponse>): _26.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _26.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgBeginUnlocking;
            fromPartial(object: Partial<_26.MsgBeginUnlocking>): _26.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _26.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_26.MsgBeginUnlockingResponse>): _26.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _26.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgExtendLockup;
            fromPartial(object: Partial<_26.MsgExtendLockup>): _26.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _26.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgExtendLockupResponse;
            fromPartial(object: Partial<_26.MsgExtendLockupResponse>): _26.MsgExtendLockupResponse;
        };
        MsgForceUnlock: {
            encode(message: _26.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgForceUnlock;
            fromPartial(object: Partial<_26.MsgForceUnlock>): _26.MsgForceUnlock;
        };
        MsgForceUnlockResponse: {
            encode(message: _26.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgForceUnlockResponse;
            fromPartial(object: Partial<_26.MsgForceUnlockResponse>): _26.MsgForceUnlockResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _25.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ModuleBalanceRequest;
            fromPartial(_: Partial<_25.ModuleBalanceRequest>): _25.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _25.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ModuleBalanceResponse;
            fromPartial(object: Partial<_25.ModuleBalanceResponse>): _25.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _25.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_25.ModuleLockedAmountRequest>): _25.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _25.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_25.ModuleLockedAmountResponse>): _25.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _25.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_25.AccountUnlockableCoinsRequest>): _25.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _25.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_25.AccountUnlockableCoinsResponse>): _25.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _25.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_25.AccountUnlockingCoinsRequest>): _25.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _25.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_25.AccountUnlockingCoinsResponse>): _25.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _25.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_25.AccountLockedCoinsRequest>): _25.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _25.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_25.AccountLockedCoinsResponse>): _25.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _25.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_25.AccountLockedPastTimeRequest>): _25.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _25.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_25.AccountLockedPastTimeResponse>): _25.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _25.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_25.AccountLockedPastTimeNotUnlockingOnlyRequest>): _25.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _25.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_25.AccountLockedPastTimeNotUnlockingOnlyResponse>): _25.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _25.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_25.AccountUnlockedBeforeTimeRequest>): _25.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _25.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_25.AccountUnlockedBeforeTimeResponse>): _25.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _25.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_25.AccountLockedPastTimeDenomRequest>): _25.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _25.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_25.AccountLockedPastTimeDenomResponse>): _25.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _25.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.LockedDenomRequest;
            fromPartial(object: Partial<_25.LockedDenomRequest>): _25.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _25.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.LockedDenomResponse;
            fromPartial(object: Partial<_25.LockedDenomResponse>): _25.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _25.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.LockedRequest;
            fromPartial(object: Partial<_25.LockedRequest>): _25.LockedRequest;
        };
        LockedResponse: {
            encode(message: _25.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.LockedResponse;
            fromPartial(object: Partial<_25.LockedResponse>): _25.LockedResponse;
        };
        NextLockIDRequest: {
            encode(_: _25.NextLockIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.NextLockIDRequest;
            fromPartial(_: Partial<_25.NextLockIDRequest>): _25.NextLockIDRequest;
        };
        NextLockIDResponse: {
            encode(message: _25.NextLockIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.NextLockIDResponse;
            fromPartial(object: Partial<_25.NextLockIDResponse>): _25.NextLockIDResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _25.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_25.SyntheticLockupsByLockupIDRequest>): _25.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _25.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_25.SyntheticLockupsByLockupIDResponse>): _25.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _25.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_25.AccountLockedLongerDurationRequest>): _25.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _25.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_25.AccountLockedLongerDurationResponse>): _25.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _25.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedDurationRequest;
            fromPartial(object: Partial<_25.AccountLockedDurationRequest>): _25.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _25.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedDurationResponse;
            fromPartial(object: Partial<_25.AccountLockedDurationResponse>): _25.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _25.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_25.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _25.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _25.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_25.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _25.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _25.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_25.AccountLockedLongerDurationDenomRequest>): _25.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _25.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_25.AccountLockedLongerDurationDenomResponse>): _25.AccountLockedLongerDurationDenomResponse;
        };
        QueryParamsRequest: {
            encode(_: _25.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryParamsRequest;
            fromPartial(_: Partial<_25.QueryParamsRequest>): _25.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _25.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryParamsResponse;
            fromPartial(object: Partial<_25.QueryParamsResponse>): _25.QueryParamsResponse;
        };
        Params: {
            encode(message: _24.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Params;
            fromPartial(object: Partial<_24.Params>): _24.Params;
        };
        lockQueryTypeFromJSON(object: any): _23.LockQueryType;
        lockQueryTypeToJSON(object: _23.LockQueryType): string;
        LockQueryType: typeof _23.LockQueryType;
        LockQueryTypeSDKType: typeof _23.LockQueryType;
        PeriodLock: {
            encode(message: _23.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PeriodLock;
            fromPartial(object: Partial<_23.PeriodLock>): _23.PeriodLock;
        };
        QueryCondition: {
            encode(message: _23.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryCondition;
            fromPartial(object: Partial<_23.QueryCondition>): _23.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _23.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SyntheticLock;
            fromPartial(object: Partial<_23.SyntheticLock>): _23.SyntheticLock;
        };
        GenesisState: {
            encode(message: _22.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GenesisState;
            fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _29.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryParamsRequest;
                fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _29.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _29.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_29.QueryEpochProvisionsRequest>): _29.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _29.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_29.QueryEpochProvisionsResponse>): _29.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _28.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Minter;
                fromPartial(object: Partial<_28.Minter>): _28.Minter;
            };
            WeightedAddress: {
                encode(message: _28.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.WeightedAddress;
                fromPartial(object: Partial<_28.WeightedAddress>): _28.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _28.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.DistributionProportions;
                fromPartial(object: Partial<_28.DistributionProportions>): _28.DistributionProportions;
            };
            Params: {
                encode(message: _28.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Params;
                fromPartial(object: Partial<_28.Params>): _28.Params;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _33.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_33.QueryGaugeIdsRequest>): _33.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _33.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_33.QueryGaugeIdsResponse>): _33.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _33.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_33.QueryGaugeIdsResponse_GaugeIdWithDuration>): _33.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _33.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDistrInfoRequest;
                fromPartial(_: Partial<_33.QueryDistrInfoRequest>): _33.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _33.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDistrInfoResponse;
                fromPartial(object: Partial<_33.QueryDistrInfoResponse>): _33.QueryDistrInfoResponse;
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
            QueryLockableDurationsRequest: {
                encode(_: _33.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_33.QueryLockableDurationsRequest>): _33.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _33.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_33.QueryLockableDurationsResponse>): _33.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _33.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_33.QueryIncentivizedPoolsRequest>): _33.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _33.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.IncentivizedPool;
                fromPartial(object: Partial<_33.IncentivizedPool>): _33.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _33.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_33.QueryIncentivizedPoolsResponse>): _33.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _33.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_33.QueryExternalIncentiveGaugesRequest>): _33.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _33.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_33.QueryExternalIncentiveGaugesResponse>): _33.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _32.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Params;
                fromPartial(object: Partial<_32.Params>): _32.Params;
            };
            LockableDurationsInfo: {
                encode(message: _32.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.LockableDurationsInfo;
                fromPartial(object: Partial<_32.LockableDurationsInfo>): _32.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _32.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DistrInfo;
                fromPartial(object: Partial<_32.DistrInfo>): _32.DistrInfo;
            };
            DistrRecord: {
                encode(message: _32.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DistrRecord;
                fromPartial(object: Partial<_32.DistrRecord>): _32.DistrRecord;
            };
            PoolToGauge: {
                encode(message: _32.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PoolToGauge;
                fromPartial(object: Partial<_32.PoolToGauge>): _32.PoolToGauge;
            };
            PoolToGauges: {
                encode(message: _32.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PoolToGauges;
                fromPartial(object: Partial<_32.PoolToGauges>): _32.PoolToGauges;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _31.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_31.ReplacePoolIncentivesProposal>): _31.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _31.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_31.UpdatePoolIncentivesProposal>): _31.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _38.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _38.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _38.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _38.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _38.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _38.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _38.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _38.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _38.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _38.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _38.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    };
                    fromAmino: ({ sender, routes, token_in, token_out_min_amount }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_out_denom: string;
                        }[];
                        token_in: {
                            denom: string;
                            amount: string;
                        };
                        token_out_min_amount: string;
                    }) => _38.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _38.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, token_in_max_amount, token_out }: {
                        sender: string;
                        routes: {
                            pool_id: string;
                            token_in_denom: string;
                        }[];
                        token_in_max_amount: string;
                        token_out: {
                            denom: string;
                            amount: string;
                        };
                    }) => _38.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                encode(message: _38.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_38.MsgSwapExactAmountIn>): _38.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _38.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_38.MsgSwapExactAmountInResponse>): _38.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _38.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_38.MsgSwapExactAmountOut>): _38.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _38.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_38.MsgSwapExactAmountOutResponse>): _38.MsgSwapExactAmountOutResponse;
            };
            SwapAmountInRoute: {
                encode(message: _37.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SwapAmountInRoute;
                fromPartial(object: Partial<_37.SwapAmountInRoute>): _37.SwapAmountInRoute;
            };
            SwapAmountOutRoute: {
                encode(message: _37.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SwapAmountOutRoute;
                fromPartial(object: Partial<_37.SwapAmountOutRoute>): _37.SwapAmountOutRoute;
            };
            ParamsRequest: {
                encode(_: _36.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.ParamsRequest;
                fromPartial(_: Partial<_36.ParamsRequest>): _36.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _36.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.ParamsResponse;
                fromPartial(object: Partial<_36.ParamsResponse>): _36.ParamsResponse;
            };
            EstimateSwapExactAmountInRequest: {
                encode(message: _36.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_36.EstimateSwapExactAmountInRequest>): _36.EstimateSwapExactAmountInRequest;
            };
            EstimateSwapExactAmountInResponse: {
                encode(message: _36.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_36.EstimateSwapExactAmountInResponse>): _36.EstimateSwapExactAmountInResponse;
            };
            EstimateSwapExactAmountOutRequest: {
                encode(message: _36.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_36.EstimateSwapExactAmountOutRequest>): _36.EstimateSwapExactAmountOutRequest;
            };
            EstimateSwapExactAmountOutResponse: {
                encode(message: _36.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_36.EstimateSwapExactAmountOutResponse>): _36.EstimateSwapExactAmountOutResponse;
            };
            NumPoolsRequest: {
                encode(_: _36.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.NumPoolsRequest;
                fromPartial(_: Partial<_36.NumPoolsRequest>): _36.NumPoolsRequest;
            };
            NumPoolsResponse: {
                encode(message: _36.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.NumPoolsResponse;
                fromPartial(object: Partial<_36.NumPoolsResponse>): _36.NumPoolsResponse;
            };
            poolTypeFromJSON(object: any): _35.PoolType;
            poolTypeToJSON(object: _35.PoolType): string;
            PoolType: typeof _35.PoolType;
            PoolTypeSDKType: typeof _35.PoolType;
            ModuleRoute: {
                encode(message: _35.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ModuleRoute;
                fromPartial(object: Partial<_35.ModuleRoute>): _35.ModuleRoute;
            };
            Params: {
                encode(message: _34.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _44.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _44.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _44.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _44.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPoolWeights(value: _44.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _44.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _44.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _44.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _44.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _44.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _44.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _44.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _44.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _44.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _44.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _44.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _44.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _44.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _44.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _44.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _44.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _44.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _44.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _44.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _44.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _44.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _44.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _44.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _44.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _44.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: ({ admin, hotRoutes }: _44.MsgSetHotRoutes) => {
                        admin: string;
                        hot_routes: {
                            arb_routes: {
                                trades: {
                                    pool: string;
                                    token_in: string;
                                    token_out: string;
                                }[];
                                step_size: string;
                            }[];
                            token_in: string;
                            token_out: string;
                        }[];
                    };
                    fromAmino: ({ admin, hot_routes }: {
                        admin: string;
                        hot_routes: {
                            arb_routes: {
                                trades: {
                                    pool: string;
                                    token_in: string;
                                    token_out: string;
                                }[];
                                step_size: string;
                            }[];
                            token_in: string;
                            token_out: string;
                        }[];
                    }) => _44.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: ({ admin, developerAccount }: _44.MsgSetDeveloperAccount) => {
                        admin: string;
                        developer_account: string;
                    };
                    fromAmino: ({ admin, developer_account }: {
                        admin: string;
                        developer_account: string;
                    }) => _44.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: ({ admin, maxPoolPointsPerTx }: _44.MsgSetMaxPoolPointsPerTx) => {
                        admin: string;
                        max_pool_points_per_tx: string;
                    };
                    fromAmino: ({ admin, max_pool_points_per_tx }: {
                        admin: string;
                        max_pool_points_per_tx: string;
                    }) => _44.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: ({ admin, maxPoolPointsPerBlock }: _44.MsgSetMaxPoolPointsPerBlock) => {
                        admin: string;
                        max_pool_points_per_block: string;
                    };
                    fromAmino: ({ admin, max_pool_points_per_block }: {
                        admin: string;
                        max_pool_points_per_block: string;
                    }) => _44.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
                    aminoType: string;
                    toAmino: ({ admin, poolWeights }: _44.MsgSetPoolWeights) => {
                        admin: string;
                        pool_weights: {
                            stable_weight: string;
                            balancer_weight: string;
                            concentrated_weight: string;
                        };
                    };
                    fromAmino: ({ admin, pool_weights }: {
                        admin: string;
                        pool_weights: {
                            stable_weight: string;
                            balancer_weight: string;
                            concentrated_weight: string;
                        };
                    }) => _44.MsgSetPoolWeights;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: ({ admin, baseDenoms }: _44.MsgSetBaseDenoms) => {
                        admin: string;
                        base_denoms: {
                            denom: string;
                            step_size: string;
                        }[];
                    };
                    fromAmino: ({ admin, base_denoms }: {
                        admin: string;
                        base_denoms: {
                            denom: string;
                            step_size: string;
                        }[];
                    }) => _44.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                encode(message: _44.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetHotRoutes;
                fromPartial(object: Partial<_44.MsgSetHotRoutes>): _44.MsgSetHotRoutes;
            };
            MsgSetHotRoutesResponse: {
                encode(_: _44.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_44.MsgSetHotRoutesResponse>): _44.MsgSetHotRoutesResponse;
            };
            MsgSetDeveloperAccount: {
                encode(message: _44.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_44.MsgSetDeveloperAccount>): _44.MsgSetDeveloperAccount;
            };
            MsgSetDeveloperAccountResponse: {
                encode(_: _44.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_44.MsgSetDeveloperAccountResponse>): _44.MsgSetDeveloperAccountResponse;
            };
            MsgSetPoolWeights: {
                encode(message: _44.MsgSetPoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetPoolWeights;
                fromPartial(object: Partial<_44.MsgSetPoolWeights>): _44.MsgSetPoolWeights;
            };
            MsgSetPoolWeightsResponse: {
                encode(_: _44.MsgSetPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetPoolWeightsResponse;
                fromPartial(_: Partial<_44.MsgSetPoolWeightsResponse>): _44.MsgSetPoolWeightsResponse;
            };
            MsgSetMaxPoolPointsPerTx: {
                encode(message: _44.MsgSetMaxPoolPointsPerTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_44.MsgSetMaxPoolPointsPerTx>): _44.MsgSetMaxPoolPointsPerTx;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                encode(_: _44.MsgSetMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_44.MsgSetMaxPoolPointsPerTxResponse>): _44.MsgSetMaxPoolPointsPerTxResponse;
            };
            MsgSetMaxPoolPointsPerBlock: {
                encode(message: _44.MsgSetMaxPoolPointsPerBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_44.MsgSetMaxPoolPointsPerBlock>): _44.MsgSetMaxPoolPointsPerBlock;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                encode(_: _44.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_44.MsgSetMaxPoolPointsPerBlockResponse>): _44.MsgSetMaxPoolPointsPerBlockResponse;
            };
            MsgSetBaseDenoms: {
                encode(message: _44.MsgSetBaseDenoms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetBaseDenoms;
                fromPartial(object: Partial<_44.MsgSetBaseDenoms>): _44.MsgSetBaseDenoms;
            };
            MsgSetBaseDenomsResponse: {
                encode(_: _44.MsgSetBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_44.MsgSetBaseDenomsResponse>): _44.MsgSetBaseDenomsResponse;
            };
            QueryParamsRequest: {
                encode(_: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsRequest;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsResponse;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                encode(_: _43.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevNumberOfTradesRequest>): _43.QueryGetProtoRevNumberOfTradesRequest;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                encode(message: _43.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevNumberOfTradesResponse>): _43.QueryGetProtoRevNumberOfTradesResponse;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                encode(message: _43.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_43.QueryGetProtoRevProfitsByDenomRequest>): _43.QueryGetProtoRevProfitsByDenomRequest;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                encode(message: _43.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevProfitsByDenomResponse>): _43.QueryGetProtoRevProfitsByDenomResponse;
            };
            QueryGetProtoRevAllProfitsRequest: {
                encode(_: _43.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevAllProfitsRequest>): _43.QueryGetProtoRevAllProfitsRequest;
            };
            QueryGetProtoRevAllProfitsResponse: {
                encode(message: _43.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevAllProfitsResponse>): _43.QueryGetProtoRevAllProfitsResponse;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                encode(message: _43.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_43.QueryGetProtoRevStatisticsByRouteRequest>): _43.QueryGetProtoRevStatisticsByRouteRequest;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                encode(message: _43.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevStatisticsByRouteResponse>): _43.QueryGetProtoRevStatisticsByRouteResponse;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                encode(_: _43.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevAllRouteStatisticsRequest>): _43.QueryGetProtoRevAllRouteStatisticsRequest;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                encode(message: _43.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevAllRouteStatisticsResponse>): _43.QueryGetProtoRevAllRouteStatisticsResponse;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                encode(_: _43.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevTokenPairArbRoutesRequest>): _43.QueryGetProtoRevTokenPairArbRoutesRequest;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                encode(message: _43.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevTokenPairArbRoutesResponse>): _43.QueryGetProtoRevTokenPairArbRoutesResponse;
            };
            QueryGetProtoRevAdminAccountRequest: {
                encode(_: _43.QueryGetProtoRevAdminAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevAdminAccountRequest>): _43.QueryGetProtoRevAdminAccountRequest;
            };
            QueryGetProtoRevAdminAccountResponse: {
                encode(message: _43.QueryGetProtoRevAdminAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevAdminAccountResponse>): _43.QueryGetProtoRevAdminAccountResponse;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                encode(_: _43.QueryGetProtoRevDeveloperAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevDeveloperAccountRequest>): _43.QueryGetProtoRevDeveloperAccountRequest;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                encode(message: _43.QueryGetProtoRevDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevDeveloperAccountResponse>): _43.QueryGetProtoRevDeveloperAccountResponse;
            };
            QueryGetProtoRevPoolWeightsRequest: {
                encode(_: _43.QueryGetProtoRevPoolWeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevPoolWeightsRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevPoolWeightsRequest>): _43.QueryGetProtoRevPoolWeightsRequest;
            };
            QueryGetProtoRevPoolWeightsResponse: {
                encode(message: _43.QueryGetProtoRevPoolWeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevPoolWeightsResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevPoolWeightsResponse>): _43.QueryGetProtoRevPoolWeightsResponse;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                encode(_: _43.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _43.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                encode(message: _43.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _43.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                encode(_: _43.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _43.QueryGetProtoRevMaxPoolPointsPerTxRequest;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                encode(message: _43.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _43.QueryGetProtoRevMaxPoolPointsPerTxResponse;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                encode(_: _43.QueryGetProtoRevBaseDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevBaseDenomsRequest>): _43.QueryGetProtoRevBaseDenomsRequest;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                encode(message: _43.QueryGetProtoRevBaseDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevBaseDenomsResponse>): _43.QueryGetProtoRevBaseDenomsResponse;
            };
            QueryGetProtoRevEnabledRequest: {
                encode(_: _43.QueryGetProtoRevEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_43.QueryGetProtoRevEnabledRequest>): _43.QueryGetProtoRevEnabledRequest;
            };
            QueryGetProtoRevEnabledResponse: {
                encode(message: _43.QueryGetProtoRevEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevEnabledResponse>): _43.QueryGetProtoRevEnabledResponse;
            };
            QueryGetProtoRevPoolRequest: {
                encode(message: _43.QueryGetProtoRevPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevPoolRequest;
                fromPartial(object: Partial<_43.QueryGetProtoRevPoolRequest>): _43.QueryGetProtoRevPoolRequest;
            };
            QueryGetProtoRevPoolResponse: {
                encode(message: _43.QueryGetProtoRevPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryGetProtoRevPoolResponse;
                fromPartial(object: Partial<_43.QueryGetProtoRevPoolResponse>): _43.QueryGetProtoRevPoolResponse;
            };
            TokenPairArbRoutes: {
                encode(message: _42.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.TokenPairArbRoutes;
                fromPartial(object: Partial<_42.TokenPairArbRoutes>): _42.TokenPairArbRoutes;
            };
            Route: {
                encode(message: _42.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Route;
                fromPartial(object: Partial<_42.Route>): _42.Route;
            };
            Trade: {
                encode(message: _42.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Trade;
                fromPartial(object: Partial<_42.Trade>): _42.Trade;
            };
            RouteStatistics: {
                encode(message: _42.RouteStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.RouteStatistics;
                fromPartial(object: Partial<_42.RouteStatistics>): _42.RouteStatistics;
            };
            PoolWeights: {
                encode(message: _42.PoolWeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.PoolWeights;
                fromPartial(object: Partial<_42.PoolWeights>): _42.PoolWeights;
            };
            BaseDenom: {
                encode(message: _42.BaseDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BaseDenom;
                fromPartial(object: Partial<_42.BaseDenom>): _42.BaseDenom;
            };
            Params: {
                encode(message: _41.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Params;
                fromPartial(object: Partial<_41.Params>): _41.Params;
            };
            SetProtoRevEnabledProposal: {
                encode(message: _40.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_40.SetProtoRevEnabledProposal>): _40.SetProtoRevEnabledProposal;
            };
            SetProtoRevAdminAccountProposal: {
                encode(message: _40.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_40.SetProtoRevAdminAccountProposal>): _40.SetProtoRevAdminAccountProposal;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _45.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Node;
                fromPartial(object: Partial<_45.Node>): _45.Node;
            };
            Child: {
                encode(message: _45.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Child;
                fromPartial(object: Partial<_45.Child>): _45.Child;
            };
            Leaf: {
                encode(message: _45.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Leaf;
                fromPartial(object: Partial<_45.Leaf>): _45.Leaf;
            };
        };
    }
    const superfluid: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _50.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _50.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _50.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _50.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _50.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _50.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _50.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _50.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _50.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _50.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _50.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _50.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _50.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _50.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _50.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _50.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _50.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _50.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _50.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _50.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _50.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _50.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _50.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _50.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _50.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _50.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _50.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _50.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _50.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _50.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _50.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _50.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _50.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _50.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _50.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _50.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId, coin }: _50.MsgSuperfluidUndelegateAndUnbondLock) => {
                    sender: string;
                    lock_id: string;
                    coin: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ sender, lock_id, coin }: {
                    sender: string;
                    lock_id: string;
                    coin: {
                        denom: string;
                        amount: string;
                    };
                }) => _50.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _50.MsgLockAndSuperfluidDelegate) => {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                };
                fromAmino: ({ sender, coins, val_addr }: {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                }) => _50.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _50.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _50.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _50.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_50.MsgSuperfluidDelegate>): _50.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _50.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_50.MsgSuperfluidDelegateResponse>): _50.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _50.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_50.MsgSuperfluidUndelegate>): _50.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _50.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_50.MsgSuperfluidUndelegateResponse>): _50.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _50.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_50.MsgSuperfluidUnbondLock>): _50.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _50.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_50.MsgSuperfluidUnbondLockResponse>): _50.MsgSuperfluidUnbondLockResponse;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            encode(message: _50.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_50.MsgSuperfluidUndelegateAndUnbondLock>): _50.MsgSuperfluidUndelegateAndUnbondLock;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            encode(_: _50.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(_: Partial<_50.MsgSuperfluidUndelegateAndUnbondLockResponse>): _50.MsgSuperfluidUndelegateAndUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _50.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_50.MsgLockAndSuperfluidDelegate>): _50.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _50.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_50.MsgLockAndSuperfluidDelegateResponse>): _50.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _50.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_50.MsgUnPoolWhitelistedPool>): _50.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _50.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_50.MsgUnPoolWhitelistedPoolResponse>): _50.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _49.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _49.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _49.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _49.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _49.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SuperfluidAsset;
            fromPartial(object: Partial<_49.SuperfluidAsset>): _49.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _49.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_49.SuperfluidIntermediaryAccount>): _49.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _49.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_49.OsmoEquivalentMultiplierRecord>): _49.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _49.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_49.SuperfluidDelegationRecord>): _49.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _49.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_49.LockIdIntermediaryAccountConnection>): _49.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _49.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_49.UnpoolWhitelistedPools>): _49.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsRequest;
            fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsResponse;
            fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _48.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AssetTypeRequest;
            fromPartial(object: Partial<_48.AssetTypeRequest>): _48.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _48.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AssetTypeResponse;
            fromPartial(object: Partial<_48.AssetTypeResponse>): _48.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _48.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AllAssetsRequest;
            fromPartial(_: Partial<_48.AllAssetsRequest>): _48.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _48.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AllAssetsResponse;
            fromPartial(object: Partial<_48.AllAssetsResponse>): _48.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _48.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AssetMultiplierRequest;
            fromPartial(object: Partial<_48.AssetMultiplierRequest>): _48.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _48.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AssetMultiplierResponse;
            fromPartial(object: Partial<_48.AssetMultiplierResponse>): _48.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _48.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_48.SuperfluidIntermediaryAccountInfo>): _48.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _48.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_48.AllIntermediaryAccountsRequest>): _48.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _48.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_48.AllIntermediaryAccountsResponse>): _48.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _48.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_48.ConnectedIntermediaryAccountRequest>): _48.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _48.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_48.ConnectedIntermediaryAccountResponse>): _48.ConnectedIntermediaryAccountResponse;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _48.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_48.QueryTotalDelegationByValidatorForDenomRequest>): _48.QueryTotalDelegationByValidatorForDenomRequest;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _48.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_48.QueryTotalDelegationByValidatorForDenomResponse>): _48.QueryTotalDelegationByValidatorForDenomResponse;
        };
        Delegations: {
            encode(message: _48.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Delegations;
            fromPartial(object: Partial<_48.Delegations>): _48.Delegations;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _48.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_48.TotalSuperfluidDelegationsRequest>): _48.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _48.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_48.TotalSuperfluidDelegationsResponse>): _48.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _48.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_48.SuperfluidDelegationAmountRequest>): _48.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _48.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_48.SuperfluidDelegationAmountResponse>): _48.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _48.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_48.SuperfluidDelegationsByDelegatorRequest>): _48.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _48.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_48.SuperfluidDelegationsByDelegatorResponse>): _48.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _48.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_48.SuperfluidUndelegationsByDelegatorRequest>): _48.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _48.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_48.SuperfluidUndelegationsByDelegatorResponse>): _48.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _48.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_48.SuperfluidDelegationsByValidatorDenomRequest>): _48.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _48.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_48.SuperfluidDelegationsByValidatorDenomResponse>): _48.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _48.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_48.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _48.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _48.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_48.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _48.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _48.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_48.QueryTotalDelegationByDelegatorRequest>): _48.QueryTotalDelegationByDelegatorRequest;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _48.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_48.QueryTotalDelegationByDelegatorResponse>): _48.QueryTotalDelegationByDelegatorResponse;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _48.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_48.QueryUnpoolWhitelistRequest>): _48.QueryUnpoolWhitelistRequest;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _48.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_48.QueryUnpoolWhitelistResponse>): _48.QueryUnpoolWhitelistResponse;
        };
        Params: {
            encode(message: _47.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Params;
            fromPartial(object: Partial<_47.Params>): _47.Params;
        };
        GenesisState: {
            encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
            fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _55.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _55.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _55.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _55.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _55.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _55.MsgCreateDenom): {
                        typeUrl: string;
                        value: _55.MsgCreateDenom;
                    };
                    mint(value: _55.MsgMint): {
                        typeUrl: string;
                        value: _55.MsgMint;
                    };
                    burn(value: _55.MsgBurn): {
                        typeUrl: string;
                        value: _55.MsgBurn;
                    };
                    changeAdmin(value: _55.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _55.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _55.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _55.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _55.MsgCreateDenom): {
                        typeUrl: string;
                        value: _55.MsgCreateDenom;
                    };
                    mint(value: _55.MsgMint): {
                        typeUrl: string;
                        value: _55.MsgMint;
                    };
                    burn(value: _55.MsgBurn): {
                        typeUrl: string;
                        value: _55.MsgBurn;
                    };
                    changeAdmin(value: _55.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _55.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _55.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _55.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _55.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _55.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _55.MsgMint) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _55.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _55.MsgBurn) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _55.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _55.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _55.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _55.MsgSetDenomMetadata) => {
                        sender: string;
                        metadata: {
                            description: string;
                            denom_units: {
                                denom: string;
                                exponent: number;
                                aliases: string[];
                            }[];
                            base: string;
                            display: string;
                            name: string;
                            symbol: string;
                            uri: string;
                            uri_hash: string;
                        };
                    };
                    fromAmino: ({ sender, metadata }: {
                        sender: string;
                        metadata: {
                            description: string;
                            denom_units: {
                                denom: string;
                                exponent: number;
                                aliases: string[];
                            }[];
                            base: string;
                            display: string;
                            name: string;
                            symbol: string;
                            uri: string;
                            uri_hash: string;
                        };
                    }) => _55.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                encode(message: _55.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgCreateDenom;
                fromPartial(object: Partial<_55.MsgCreateDenom>): _55.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _55.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgCreateDenomResponse;
                fromPartial(object: Partial<_55.MsgCreateDenomResponse>): _55.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _55.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgMint;
                fromPartial(object: Partial<_55.MsgMint>): _55.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _55.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgMintResponse;
                fromPartial(_: Partial<_55.MsgMintResponse>): _55.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _55.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgBurn;
                fromPartial(object: Partial<_55.MsgBurn>): _55.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _55.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgBurnResponse;
                fromPartial(_: Partial<_55.MsgBurnResponse>): _55.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _55.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgChangeAdmin;
                fromPartial(object: Partial<_55.MsgChangeAdmin>): _55.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _55.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgChangeAdminResponse;
                fromPartial(_: Partial<_55.MsgChangeAdminResponse>): _55.MsgChangeAdminResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _55.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSetDenomMetadata;
                fromPartial(object: Partial<_55.MsgSetDenomMetadata>): _55.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _55.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_55.MsgSetDenomMetadataResponse>): _55.MsgSetDenomMetadataResponse;
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
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _54.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_54.QueryDenomAuthorityMetadataRequest>): _54.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _54.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_54.QueryDenomAuthorityMetadataResponse>): _54.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _54.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_54.QueryDenomsFromCreatorRequest>): _54.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _54.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_54.QueryDenomsFromCreatorResponse>): _54.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
            };
            GenesisDenom: {
                encode(message: _52.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisDenom;
                fromPartial(object: Partial<_52.GenesisDenom>): _52.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _51.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DenomAuthorityMetadata;
                fromPartial(object: Partial<_51.DenomAuthorityMetadata>): _51.DenomAuthorityMetadata;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            TwapRecord: {
                encode(message: _58.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.TwapRecord;
                fromPartial(object: Partial<_58.TwapRecord>): _58.TwapRecord;
            };
            ArithmeticTwapRequest: {
                encode(message: _57.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ArithmeticTwapRequest;
                fromPartial(object: Partial<_57.ArithmeticTwapRequest>): _57.ArithmeticTwapRequest;
            };
            ArithmeticTwapResponse: {
                encode(message: _57.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ArithmeticTwapResponse;
                fromPartial(object: Partial<_57.ArithmeticTwapResponse>): _57.ArithmeticTwapResponse;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _57.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_57.ArithmeticTwapToNowRequest>): _57.ArithmeticTwapToNowRequest;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _57.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_57.ArithmeticTwapToNowResponse>): _57.ArithmeticTwapToNowResponse;
            };
            GeometricTwapRequest: {
                encode(message: _57.GeometricTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GeometricTwapRequest;
                fromPartial(object: Partial<_57.GeometricTwapRequest>): _57.GeometricTwapRequest;
            };
            GeometricTwapResponse: {
                encode(message: _57.GeometricTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GeometricTwapResponse;
                fromPartial(object: Partial<_57.GeometricTwapResponse>): _57.GeometricTwapResponse;
            };
            GeometricTwapToNowRequest: {
                encode(message: _57.GeometricTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_57.GeometricTwapToNowRequest>): _57.GeometricTwapToNowRequest;
            };
            GeometricTwapToNowResponse: {
                encode(message: _57.GeometricTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_57.GeometricTwapToNowResponse>): _57.GeometricTwapToNowResponse;
            };
            ParamsRequest: {
                encode(_: _57.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ParamsRequest;
                fromPartial(_: Partial<_57.ParamsRequest>): _57.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _57.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ParamsResponse;
                fromPartial(object: Partial<_57.ParamsResponse>): _57.ParamsResponse;
            };
            Params: {
                encode(message: _56.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Params;
                fromPartial(object: Partial<_56.Params>): _56.Params;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _62.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryFeeTokensRequest;
                fromPartial(_: Partial<_62.QueryFeeTokensRequest>): _62.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _62.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryFeeTokensResponse;
                fromPartial(object: Partial<_62.QueryFeeTokensResponse>): _62.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _62.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_62.QueryDenomSpotPriceRequest>): _62.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _62.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_62.QueryDenomSpotPriceResponse>): _62.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _62.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_62.QueryDenomPoolIdRequest>): _62.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _62.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_62.QueryDenomPoolIdResponse>): _62.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _62.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBaseDenomRequest;
                fromPartial(_: Partial<_62.QueryBaseDenomRequest>): _62.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _62.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBaseDenomResponse;
                fromPartial(object: Partial<_62.QueryBaseDenomResponse>): _62.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _61.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_61.UpdateFeeTokenProposal>): _61.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
            FeeToken: {
                encode(message: _59.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FeeToken;
                fromPartial(object: Partial<_59.FeeToken>): _59.FeeToken;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _65.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _65.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _65.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _65.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _65.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _65.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _65.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _65.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _65.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _65.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _65.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _65.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _65.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _65.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _65.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _65.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _65.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _65.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _65.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _65.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _65.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _65.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _65.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _65.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _65.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _65.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _65.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _65.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: ({ delegator, preferences }: _65.MsgSetValidatorSetPreference) => {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ delegator, preferences }: {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    }) => _65.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, coin }: _65.MsgDelegateToValidatorSet) => {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator, coin }: {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _65.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, coin }: _65.MsgUndelegateFromValidatorSet) => {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator, coin }: {
                        delegator: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                    }) => _65.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: ({ delegator, preferences }: _65.MsgRedelegateValidatorSet) => {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ delegator, preferences }: {
                        delegator: string;
                        preferences: {
                            val_oper_address: string;
                            weight: string;
                        }[];
                    }) => _65.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: ({ delegator }: _65.MsgWithdrawDelegationRewards) => {
                        delegator: string;
                    };
                    fromAmino: ({ delegator }: {
                        delegator: string;
                    }) => _65.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: ({ delegator, lockID }: _65.MsgDelegateBondedTokens) => {
                        delegator: string;
                        lockID: string;
                    };
                    fromAmino: ({ delegator, lockID }: {
                        delegator: string;
                        lockID: string;
                    }) => _65.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                encode(message: _65.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_65.MsgSetValidatorSetPreference>): _65.MsgSetValidatorSetPreference;
            };
            MsgSetValidatorSetPreferenceResponse: {
                encode(_: _65.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_65.MsgSetValidatorSetPreferenceResponse>): _65.MsgSetValidatorSetPreferenceResponse;
            };
            MsgDelegateToValidatorSet: {
                encode(message: _65.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_65.MsgDelegateToValidatorSet>): _65.MsgDelegateToValidatorSet;
            };
            MsgDelegateToValidatorSetResponse: {
                encode(_: _65.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_65.MsgDelegateToValidatorSetResponse>): _65.MsgDelegateToValidatorSetResponse;
            };
            MsgUndelegateFromValidatorSet: {
                encode(message: _65.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_65.MsgUndelegateFromValidatorSet>): _65.MsgUndelegateFromValidatorSet;
            };
            MsgUndelegateFromValidatorSetResponse: {
                encode(_: _65.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_65.MsgUndelegateFromValidatorSetResponse>): _65.MsgUndelegateFromValidatorSetResponse;
            };
            MsgRedelegateValidatorSet: {
                encode(message: _65.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_65.MsgRedelegateValidatorSet>): _65.MsgRedelegateValidatorSet;
            };
            MsgRedelegateValidatorSetResponse: {
                encode(_: _65.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_65.MsgRedelegateValidatorSetResponse>): _65.MsgRedelegateValidatorSetResponse;
            };
            MsgWithdrawDelegationRewards: {
                encode(message: _65.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_65.MsgWithdrawDelegationRewards>): _65.MsgWithdrawDelegationRewards;
            };
            MsgWithdrawDelegationRewardsResponse: {
                encode(_: _65.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_65.MsgWithdrawDelegationRewardsResponse>): _65.MsgWithdrawDelegationRewardsResponse;
            };
            MsgDelegateBondedTokens: {
                encode(message: _65.MsgDelegateBondedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_65.MsgDelegateBondedTokens>): _65.MsgDelegateBondedTokens;
            };
            MsgDelegateBondedTokensResponse: {
                encode(_: _65.MsgDelegateBondedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_65.MsgDelegateBondedTokensResponse>): _65.MsgDelegateBondedTokensResponse;
            };
            ValidatorPreference: {
                encode(message: _64.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ValidatorPreference;
                fromPartial(object: Partial<_64.ValidatorPreference>): _64.ValidatorPreference;
            };
            ValidatorSetPreferences: {
                encode(message: _64.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ValidatorSetPreferences;
                fromPartial(object: Partial<_64.ValidatorSetPreferences>): _64.ValidatorSetPreferences;
            };
            UserValidatorPreferencesRequest: {
                encode(message: _63.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_63.UserValidatorPreferencesRequest>): _63.UserValidatorPreferencesRequest;
            };
            UserValidatorPreferencesResponse: {
                encode(message: _63.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_63.UserValidatorPreferencesResponse>): _63.UserValidatorPreferencesResponse;
            };
        };
    }
}
