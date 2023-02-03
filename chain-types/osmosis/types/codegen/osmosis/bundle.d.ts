import * as _143 from "./downtime-detector/v1beta1/downtime_duration";
import * as _144 from "./downtime-detector/v1beta1/genesis";
import * as _145 from "./downtime-detector/v1beta1/query";
import * as _146 from "./epochs/genesis";
import * as _147 from "./epochs/query";
import * as _148 from "./gamm/pool-models/balancer/balancerPool";
import * as _149 from "./gamm/v1beta1/genesis";
import * as _150 from "./gamm/v1beta1/query";
import * as _151 from "./gamm/v1beta1/tx";
import * as _152 from "./gamm/pool-models/balancer/tx/tx";
import * as _153 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _154 from "./gamm/pool-models/stableswap/tx";
import * as _155 from "./gamm/v2/query";
import * as _156 from "./ibc-rate-limit/v1beta1/params";
import * as _157 from "./ibc-rate-limit/v1beta1/query";
import * as _158 from "./incentives/gauge";
import * as _159 from "./incentives/genesis";
import * as _160 from "./incentives/params";
import * as _161 from "./incentives/query";
import * as _162 from "./incentives/tx";
import * as _163 from "./lockup/genesis";
import * as _164 from "./lockup/lock";
import * as _165 from "./lockup/params";
import * as _166 from "./lockup/query";
import * as _167 from "./lockup/tx";
import * as _168 from "./mint/v1beta1/genesis";
import * as _169 from "./mint/v1beta1/mint";
import * as _170 from "./mint/v1beta1/query";
import * as _171 from "./pool-incentives/v1beta1/genesis";
import * as _172 from "./pool-incentives/v1beta1/gov";
import * as _173 from "./pool-incentives/v1beta1/incentives";
import * as _174 from "./pool-incentives/v1beta1/query";
import * as _175 from "./sumtree/v1beta1/tree";
import * as _176 from "./superfluid/genesis";
import * as _177 from "./superfluid/params";
import * as _178 from "./superfluid/query";
import * as _179 from "./superfluid/superfluid";
import * as _180 from "./superfluid/tx";
import * as _181 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _182 from "./tokenfactory/v1beta1/genesis";
import * as _183 from "./tokenfactory/v1beta1/params";
import * as _184 from "./tokenfactory/v1beta1/query";
import * as _185 from "./tokenfactory/v1beta1/tx";
import * as _186 from "./twap/v1beta1/genesis";
import * as _187 from "./twap/v1beta1/query";
import * as _188 from "./twap/v1beta1/twap_record";
import * as _189 from "./txfees/v1beta1/feetoken";
import * as _190 from "./txfees/v1beta1/genesis";
import * as _191 from "./txfees/v1beta1/gov";
import * as _192 from "./txfees/v1beta1/query";
export declare namespace osmosis {
    namespace downtimedetector {
        const v1beta1: {
            RecoveredSinceDowntimeOfLengthRequest: {
                encode(message: _145.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_145.RecoveredSinceDowntimeOfLengthRequest>): _145.RecoveredSinceDowntimeOfLengthRequest;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                encode(message: _145.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_145.RecoveredSinceDowntimeOfLengthResponse>): _145.RecoveredSinceDowntimeOfLengthResponse;
            };
            GenesisDowntimeEntry: {
                encode(message: _144.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisDowntimeEntry;
                fromPartial(object: Partial<_144.GenesisDowntimeEntry>): _144.GenesisDowntimeEntry;
            };
            GenesisState: {
                encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
                fromPartial(object: Partial<_144.GenesisState>): _144.GenesisState;
            };
            downtimeFromJSON(object: any): _143.Downtime;
            downtimeToJSON(object: _143.Downtime): string;
            Downtime: typeof _143.Downtime;
            DowntimeSDKType: typeof _143.DowntimeSDKType;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _147.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_147.QueryEpochsInfoRequest>): _147.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _147.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_147.QueryEpochsInfoResponse>): _147.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _147.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_147.QueryCurrentEpochRequest>): _147.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _147.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_147.QueryCurrentEpochResponse>): _147.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _146.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.EpochInfo;
                fromPartial(object: Partial<_146.EpochInfo>): _146.EpochInfo;
            };
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
                fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _151.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _151.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _151.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _151.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _151.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _151.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _151.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _151.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _151.MsgJoinPool): {
                        typeUrl: string;
                        value: _151.MsgJoinPool;
                    };
                    exitPool(value: _151.MsgExitPool): {
                        typeUrl: string;
                        value: _151.MsgExitPool;
                    };
                    swapExactAmountIn(value: _151.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _151.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _151.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _151.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _151.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _151.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _151.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _151.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _151.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _151.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _151.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _151.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _151.MsgJoinPool): {
                        typeUrl: string;
                        value: _151.MsgJoinPool;
                    };
                    exitPool(value: _151.MsgExitPool): {
                        typeUrl: string;
                        value: _151.MsgExitPool;
                    };
                    swapExactAmountIn(value: _151.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _151.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _151.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _151.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _151.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _151.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _151.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _151.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _151.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _151.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _151.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _151.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _151.MsgJoinPool) => {
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
                    }) => _151.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _151.MsgExitPool) => {
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
                    }) => _151.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _151.MsgSwapExactAmountIn) => {
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
                    }) => _151.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _151.MsgSwapExactAmountOut) => {
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
                    }) => _151.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _151.MsgJoinSwapExternAmountIn) => {
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
                    }) => _151.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _151.MsgJoinSwapShareAmountOut) => {
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
                    }) => _151.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _151.MsgExitSwapExternAmountOut) => {
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
                    }) => _151.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _151.MsgExitSwapShareAmountIn) => {
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
                    }) => _151.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _151.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgJoinPool;
                fromPartial(object: Partial<_151.MsgJoinPool>): _151.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _151.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgJoinPoolResponse;
                fromPartial(object: Partial<_151.MsgJoinPoolResponse>): _151.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _151.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgExitPool;
                fromPartial(object: Partial<_151.MsgExitPool>): _151.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _151.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgExitPoolResponse;
                fromPartial(object: Partial<_151.MsgExitPoolResponse>): _151.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _151.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SwapAmountInRoute;
                fromPartial(object: Partial<_151.SwapAmountInRoute>): _151.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _151.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_151.MsgSwapExactAmountIn>): _151.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _151.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_151.MsgSwapExactAmountInResponse>): _151.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _151.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SwapAmountOutRoute;
                fromPartial(object: Partial<_151.SwapAmountOutRoute>): _151.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _151.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_151.MsgSwapExactAmountOut>): _151.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _151.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_151.MsgSwapExactAmountOutResponse>): _151.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _151.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_151.MsgJoinSwapExternAmountIn>): _151.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _151.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_151.MsgJoinSwapExternAmountInResponse>): _151.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _151.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_151.MsgJoinSwapShareAmountOut>): _151.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _151.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_151.MsgJoinSwapShareAmountOutResponse>): _151.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _151.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_151.MsgExitSwapShareAmountIn>): _151.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _151.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_151.MsgExitSwapShareAmountInResponse>): _151.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _151.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_151.MsgExitSwapExternAmountOut>): _151.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _151.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_151.MsgExitSwapExternAmountOutResponse>): _151.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _150.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolRequest;
                fromPartial(object: Partial<_150.QueryPoolRequest>): _150.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _150.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolResponse;
                fromPartial(object: Partial<_150.QueryPoolResponse>): _150.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _150.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolsRequest;
                fromPartial(object: Partial<_150.QueryPoolsRequest>): _150.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _150.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolsResponse;
                fromPartial(object: Partial<_150.QueryPoolsResponse>): _150.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _150.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryNumPoolsRequest;
                fromPartial(_: Partial<_150.QueryNumPoolsRequest>): _150.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _150.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryNumPoolsResponse;
                fromPartial(object: Partial<_150.QueryNumPoolsResponse>): _150.QueryNumPoolsResponse;
            };
            QueryPoolTypeRequest: {
                encode(message: _150.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolTypeRequest;
                fromPartial(object: Partial<_150.QueryPoolTypeRequest>): _150.QueryPoolTypeRequest;
            };
            QueryPoolTypeResponse: {
                encode(message: _150.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolTypeResponse;
                fromPartial(object: Partial<_150.QueryPoolTypeResponse>): _150.QueryPoolTypeResponse;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _150.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_150.QueryCalcJoinPoolSharesRequest>): _150.QueryCalcJoinPoolSharesRequest;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _150.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_150.QueryCalcJoinPoolSharesResponse>): _150.QueryCalcJoinPoolSharesResponse;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _150.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_150.QueryCalcExitPoolCoinsFromSharesRequest>): _150.QueryCalcExitPoolCoinsFromSharesRequest;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _150.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_150.QueryCalcExitPoolCoinsFromSharesResponse>): _150.QueryCalcExitPoolCoinsFromSharesResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _150.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolParamsRequest;
                fromPartial(object: Partial<_150.QueryPoolParamsRequest>): _150.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _150.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolParamsResponse;
                fromPartial(object: Partial<_150.QueryPoolParamsResponse>): _150.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _150.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_150.QueryTotalPoolLiquidityRequest>): _150.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _150.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_150.QueryTotalPoolLiquidityResponse>): _150.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _150.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTotalSharesRequest;
                fromPartial(object: Partial<_150.QueryTotalSharesRequest>): _150.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _150.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTotalSharesResponse;
                fromPartial(object: Partial<_150.QueryTotalSharesResponse>): _150.QueryTotalSharesResponse;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _150.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_150.QueryCalcJoinPoolNoSwapSharesRequest>): _150.QueryCalcJoinPoolNoSwapSharesRequest;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _150.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_150.QueryCalcJoinPoolNoSwapSharesResponse>): _150.QueryCalcJoinPoolNoSwapSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _150.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QuerySpotPriceRequest;
                fromPartial(object: Partial<_150.QuerySpotPriceRequest>): _150.QuerySpotPriceRequest;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _150.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_150.QueryPoolsWithFilterRequest>): _150.QueryPoolsWithFilterRequest;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _150.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_150.QueryPoolsWithFilterResponse>): _150.QueryPoolsWithFilterResponse;
            };
            QuerySpotPriceResponse: {
                encode(message: _150.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QuerySpotPriceResponse;
                fromPartial(object: Partial<_150.QuerySpotPriceResponse>): _150.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _150.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_150.QuerySwapExactAmountInRequest>): _150.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _150.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_150.QuerySwapExactAmountInResponse>): _150.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _150.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_150.QuerySwapExactAmountOutRequest>): _150.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _150.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_150.QuerySwapExactAmountOutResponse>): _150.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _150.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_150.QueryTotalLiquidityRequest>): _150.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _150.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_150.QueryTotalLiquidityResponse>): _150.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Params;
                fromPartial(object: Partial<_149.Params>): _149.Params;
            };
            GenesisState: {
                encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GenesisState;
                fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _148.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SmoothWeightChangeParams;
                fromPartial(object: Partial<_148.SmoothWeightChangeParams>): _148.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _148.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PoolParams;
                fromPartial(object: Partial<_148.PoolParams>): _148.PoolParams;
            };
            PoolAsset: {
                encode(message: _148.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PoolAsset;
                fromPartial(object: Partial<_148.PoolAsset>): _148.PoolAsset;
            };
            Pool: {
                encode(message: _148.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Pool;
                fromPartial(object: Partial<_148.Pool>): _148.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _152.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _152.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _152.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _152.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _152.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _152.MsgCreateBalancerPool) => {
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
                            }) => _152.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _152.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_152.MsgCreateBalancerPool>): _152.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _152.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_152.MsgCreateBalancerPoolResponse>): _152.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _154.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _154.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _154.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _154.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _154.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _154.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _154.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _154.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _154.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _154.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, scalingFactors, futurePoolGovernor, scalingFactorController }: _154.MsgCreateStableswapPool) => {
                                sender: string;
                                pool_params: {
                                    swap_fee: string;
                                    exit_fee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                scaling_factors: import("long")[];
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
                                scaling_factors: import("long")[];
                                future_pool_governor: string;
                                scaling_factor_controller: string;
                            }) => _154.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _154.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: import("long")[];
                            }) => _154.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _154.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_154.MsgCreateStableswapPool>): _154.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _154.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_154.MsgCreateStableswapPoolResponse>): _154.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _154.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_154.MsgStableSwapAdjustScalingFactors>): _154.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _154.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_154.MsgStableSwapAdjustScalingFactorsResponse>): _154.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _153.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.PoolParams;
                        fromPartial(object: Partial<_153.PoolParams>): _153.PoolParams;
                    };
                    Pool: {
                        encode(message: _153.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Pool;
                        fromPartial(object: Partial<_153.Pool>): _153.Pool;
                    };
                };
            }
        }
        const v2: {
            QuerySpotPriceRequest: {
                encode(message: _155.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QuerySpotPriceRequest;
                fromPartial(object: Partial<_155.QuerySpotPriceRequest>): _155.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _155.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QuerySpotPriceResponse;
                fromPartial(object: Partial<_155.QuerySpotPriceResponse>): _155.QuerySpotPriceResponse;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _157.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsRequest;
                fromPartial(_: Partial<_157.QueryParamsRequest>): _157.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _157.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsResponse;
                fromPartial(object: Partial<_157.QueryParamsResponse>): _157.QueryParamsResponse;
            };
            Params: {
                encode(message: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                fromPartial(object: Partial<_156.Params>): _156.Params;
            };
        };
    }
    const incentives: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _162.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _162.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _162.MsgCreateGauge): {
                    typeUrl: string;
                    value: _162.MsgCreateGauge;
                };
                addToGauge(value: _162.MsgAddToGauge): {
                    typeUrl: string;
                    value: _162.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _162.MsgCreateGauge): {
                    typeUrl: string;
                    value: _162.MsgCreateGauge;
                };
                addToGauge(value: _162.MsgAddToGauge): {
                    typeUrl: string;
                    value: _162.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _162.MsgCreateGauge) => {
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
                }) => _162.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _162.MsgAddToGauge) => {
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
                }) => _162.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _162.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateGauge;
            fromPartial(object: Partial<_162.MsgCreateGauge>): _162.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _162.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_162.MsgCreateGaugeResponse>): _162.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _162.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgAddToGauge;
            fromPartial(object: Partial<_162.MsgAddToGauge>): _162.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _162.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_162.MsgAddToGaugeResponse>): _162.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _161.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_161.ModuleToDistributeCoinsRequest>): _161.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _161.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_161.ModuleToDistributeCoinsResponse>): _161.ModuleToDistributeCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _161.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GaugeByIDRequest;
            fromPartial(object: Partial<_161.GaugeByIDRequest>): _161.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _161.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GaugeByIDResponse;
            fromPartial(object: Partial<_161.GaugeByIDResponse>): _161.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _161.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GaugesRequest;
            fromPartial(object: Partial<_161.GaugesRequest>): _161.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _161.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GaugesResponse;
            fromPartial(object: Partial<_161.GaugesResponse>): _161.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _161.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ActiveGaugesRequest;
            fromPartial(object: Partial<_161.ActiveGaugesRequest>): _161.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _161.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ActiveGaugesResponse;
            fromPartial(object: Partial<_161.ActiveGaugesResponse>): _161.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _161.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_161.ActiveGaugesPerDenomRequest>): _161.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _161.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_161.ActiveGaugesPerDenomResponse>): _161.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _161.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.UpcomingGaugesRequest;
            fromPartial(object: Partial<_161.UpcomingGaugesRequest>): _161.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _161.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.UpcomingGaugesResponse;
            fromPartial(object: Partial<_161.UpcomingGaugesResponse>): _161.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _161.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_161.UpcomingGaugesPerDenomRequest>): _161.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _161.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_161.UpcomingGaugesPerDenomResponse>): _161.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _161.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.RewardsEstRequest;
            fromPartial(object: Partial<_161.RewardsEstRequest>): _161.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _161.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.RewardsEstResponse;
            fromPartial(object: Partial<_161.RewardsEstResponse>): _161.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _161.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_161.QueryLockableDurationsRequest>): _161.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _161.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_161.QueryLockableDurationsResponse>): _161.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _160.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Params;
            fromPartial(object: Partial<_160.Params>): _160.Params;
        };
        GenesisState: {
            encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
            fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
        };
        Gauge: {
            encode(message: _158.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Gauge;
            fromPartial(object: Partial<_158.Gauge>): _158.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _158.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.LockableDurationsInfo;
            fromPartial(object: Partial<_158.LockableDurationsInfo>): _158.LockableDurationsInfo;
        };
    };
    const lockup: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _167.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _167.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _167.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _167.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _167.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _167.MsgLockTokens): {
                    typeUrl: string;
                    value: _167.MsgLockTokens;
                };
                beginUnlockingAll(value: _167.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _167.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _167.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _167.MsgBeginUnlocking;
                };
                extendLockup(value: _167.MsgExtendLockup): {
                    typeUrl: string;
                    value: _167.MsgExtendLockup;
                };
                forceUnlock(value: _167.MsgForceUnlock): {
                    typeUrl: string;
                    value: _167.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _167.MsgLockTokens): {
                    typeUrl: string;
                    value: _167.MsgLockTokens;
                };
                beginUnlockingAll(value: _167.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _167.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _167.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _167.MsgBeginUnlocking;
                };
                extendLockup(value: _167.MsgExtendLockup): {
                    typeUrl: string;
                    value: _167.MsgExtendLockup;
                };
                forceUnlock(value: _167.MsgForceUnlock): {
                    typeUrl: string;
                    value: _167.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _167.MsgLockTokens) => {
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
                }) => _167.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _167.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _167.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _167.MsgBeginUnlocking) => {
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
                }) => _167.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _167.MsgExtendLockup) => {
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
                }) => _167.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _167.MsgForceUnlock) => {
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
                }) => _167.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            encode(message: _167.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgLockTokens;
            fromPartial(object: Partial<_167.MsgLockTokens>): _167.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _167.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgLockTokensResponse;
            fromPartial(object: Partial<_167.MsgLockTokensResponse>): _167.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _167.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_167.MsgBeginUnlockingAll>): _167.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _167.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_167.MsgBeginUnlockingAllResponse>): _167.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _167.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgBeginUnlocking;
            fromPartial(object: Partial<_167.MsgBeginUnlocking>): _167.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _167.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_167.MsgBeginUnlockingResponse>): _167.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _167.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgExtendLockup;
            fromPartial(object: Partial<_167.MsgExtendLockup>): _167.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _167.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgExtendLockupResponse;
            fromPartial(object: Partial<_167.MsgExtendLockupResponse>): _167.MsgExtendLockupResponse;
        };
        MsgForceUnlock: {
            encode(message: _167.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgForceUnlock;
            fromPartial(object: Partial<_167.MsgForceUnlock>): _167.MsgForceUnlock;
        };
        MsgForceUnlockResponse: {
            encode(message: _167.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgForceUnlockResponse;
            fromPartial(object: Partial<_167.MsgForceUnlockResponse>): _167.MsgForceUnlockResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _166.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ModuleBalanceRequest;
            fromPartial(_: Partial<_166.ModuleBalanceRequest>): _166.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _166.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ModuleBalanceResponse;
            fromPartial(object: Partial<_166.ModuleBalanceResponse>): _166.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _166.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_166.ModuleLockedAmountRequest>): _166.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _166.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_166.ModuleLockedAmountResponse>): _166.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _166.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_166.AccountUnlockableCoinsRequest>): _166.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _166.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_166.AccountUnlockableCoinsResponse>): _166.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _166.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_166.AccountUnlockingCoinsRequest>): _166.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _166.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_166.AccountUnlockingCoinsResponse>): _166.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _166.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_166.AccountLockedCoinsRequest>): _166.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _166.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_166.AccountLockedCoinsResponse>): _166.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _166.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_166.AccountLockedPastTimeRequest>): _166.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _166.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_166.AccountLockedPastTimeResponse>): _166.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _166.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_166.AccountLockedPastTimeNotUnlockingOnlyRequest>): _166.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _166.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_166.AccountLockedPastTimeNotUnlockingOnlyResponse>): _166.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _166.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_166.AccountUnlockedBeforeTimeRequest>): _166.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _166.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_166.AccountUnlockedBeforeTimeResponse>): _166.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _166.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_166.AccountLockedPastTimeDenomRequest>): _166.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _166.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_166.AccountLockedPastTimeDenomResponse>): _166.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _166.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.LockedDenomRequest;
            fromPartial(object: Partial<_166.LockedDenomRequest>): _166.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _166.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.LockedDenomResponse;
            fromPartial(object: Partial<_166.LockedDenomResponse>): _166.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _166.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.LockedRequest;
            fromPartial(object: Partial<_166.LockedRequest>): _166.LockedRequest;
        };
        LockedResponse: {
            encode(message: _166.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.LockedResponse;
            fromPartial(object: Partial<_166.LockedResponse>): _166.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _166.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_166.SyntheticLockupsByLockupIDRequest>): _166.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _166.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_166.SyntheticLockupsByLockupIDResponse>): _166.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _166.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_166.AccountLockedLongerDurationRequest>): _166.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _166.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_166.AccountLockedLongerDurationResponse>): _166.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _166.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedDurationRequest;
            fromPartial(object: Partial<_166.AccountLockedDurationRequest>): _166.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _166.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedDurationResponse;
            fromPartial(object: Partial<_166.AccountLockedDurationResponse>): _166.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _166.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_166.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _166.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _166.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_166.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _166.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _166.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_166.AccountLockedLongerDurationDenomRequest>): _166.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _166.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_166.AccountLockedLongerDurationDenomResponse>): _166.AccountLockedLongerDurationDenomResponse;
        };
        QueryParamsRequest: {
            encode(_: _166.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryParamsRequest;
            fromPartial(_: Partial<_166.QueryParamsRequest>): _166.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _166.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryParamsResponse;
            fromPartial(object: Partial<_166.QueryParamsResponse>): _166.QueryParamsResponse;
        };
        Params: {
            encode(message: _165.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Params;
            fromPartial(object: Partial<_165.Params>): _165.Params;
        };
        lockQueryTypeFromJSON(object: any): _164.LockQueryType;
        lockQueryTypeToJSON(object: _164.LockQueryType): string;
        LockQueryType: typeof _164.LockQueryType;
        LockQueryTypeSDKType: typeof _164.LockQueryTypeSDKType;
        PeriodLock: {
            encode(message: _164.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.PeriodLock;
            fromPartial(object: Partial<_164.PeriodLock>): _164.PeriodLock;
        };
        QueryCondition: {
            encode(message: _164.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryCondition;
            fromPartial(object: Partial<_164.QueryCondition>): _164.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _164.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.SyntheticLock;
            fromPartial(object: Partial<_164.SyntheticLock>): _164.SyntheticLock;
        };
        GenesisState: {
            encode(message: _163.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisState;
            fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _170.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryParamsRequest;
                fromPartial(_: Partial<_170.QueryParamsRequest>): _170.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _170.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryParamsResponse;
                fromPartial(object: Partial<_170.QueryParamsResponse>): _170.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _170.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_170.QueryEpochProvisionsRequest>): _170.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _170.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_170.QueryEpochProvisionsResponse>): _170.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _169.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Minter;
                fromPartial(object: Partial<_169.Minter>): _169.Minter;
            };
            WeightedAddress: {
                encode(message: _169.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.WeightedAddress;
                fromPartial(object: Partial<_169.WeightedAddress>): _169.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _169.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.DistributionProportions;
                fromPartial(object: Partial<_169.DistributionProportions>): _169.DistributionProportions;
            };
            Params: {
                encode(message: _169.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Params;
                fromPartial(object: Partial<_169.Params>): _169.Params;
            };
            GenesisState: {
                encode(message: _168.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GenesisState;
                fromPartial(object: Partial<_168.GenesisState>): _168.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _174.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_174.QueryGaugeIdsRequest>): _174.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _174.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_174.QueryGaugeIdsResponse>): _174.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _174.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_174.QueryGaugeIdsResponse_GaugeIdWithDuration>): _174.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _174.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDistrInfoRequest;
                fromPartial(_: Partial<_174.QueryDistrInfoRequest>): _174.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _174.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDistrInfoResponse;
                fromPartial(object: Partial<_174.QueryDistrInfoResponse>): _174.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _174.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryParamsRequest;
                fromPartial(_: Partial<_174.QueryParamsRequest>): _174.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _174.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryParamsResponse;
                fromPartial(object: Partial<_174.QueryParamsResponse>): _174.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _174.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_174.QueryLockableDurationsRequest>): _174.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _174.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_174.QueryLockableDurationsResponse>): _174.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _174.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_174.QueryIncentivizedPoolsRequest>): _174.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _174.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.IncentivizedPool;
                fromPartial(object: Partial<_174.IncentivizedPool>): _174.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _174.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_174.QueryIncentivizedPoolsResponse>): _174.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _174.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_174.QueryExternalIncentiveGaugesRequest>): _174.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _174.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_174.QueryExternalIncentiveGaugesResponse>): _174.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _173.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Params;
                fromPartial(object: Partial<_173.Params>): _173.Params;
            };
            LockableDurationsInfo: {
                encode(message: _173.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.LockableDurationsInfo;
                fromPartial(object: Partial<_173.LockableDurationsInfo>): _173.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _173.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.DistrInfo;
                fromPartial(object: Partial<_173.DistrInfo>): _173.DistrInfo;
            };
            DistrRecord: {
                encode(message: _173.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.DistrRecord;
                fromPartial(object: Partial<_173.DistrRecord>): _173.DistrRecord;
            };
            PoolToGauge: {
                encode(message: _173.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PoolToGauge;
                fromPartial(object: Partial<_173.PoolToGauge>): _173.PoolToGauge;
            };
            PoolToGauges: {
                encode(message: _173.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PoolToGauges;
                fromPartial(object: Partial<_173.PoolToGauges>): _173.PoolToGauges;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _172.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_172.ReplacePoolIncentivesProposal>): _172.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _172.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_172.UpdatePoolIncentivesProposal>): _172.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _171.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GenesisState;
                fromPartial(object: Partial<_171.GenesisState>): _171.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _175.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Node;
                fromPartial(object: Partial<_175.Node>): _175.Node;
            };
            Child: {
                encode(message: _175.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Child;
                fromPartial(object: Partial<_175.Child>): _175.Child;
            };
            Leaf: {
                encode(message: _175.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Leaf;
                fromPartial(object: Partial<_175.Leaf>): _175.Leaf;
            };
        };
    }
    const superfluid: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _180.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _180.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _180.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _180.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _180.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _180.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _180.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _180.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _180.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _180.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _180.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _180.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _180.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _180.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _180.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _180.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _180.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _180.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _180.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _180.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _180.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _180.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _180.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _180.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _180.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _180.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _180.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _180.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _180.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _180.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _180.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _180.MsgLockAndSuperfluidDelegate) => {
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
                }) => _180.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _180.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _180.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _180.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_180.MsgSuperfluidDelegate>): _180.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _180.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_180.MsgSuperfluidDelegateResponse>): _180.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _180.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_180.MsgSuperfluidUndelegate>): _180.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _180.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_180.MsgSuperfluidUndelegateResponse>): _180.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _180.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_180.MsgSuperfluidUnbondLock>): _180.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _180.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_180.MsgSuperfluidUnbondLockResponse>): _180.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _180.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_180.MsgLockAndSuperfluidDelegate>): _180.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _180.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_180.MsgLockAndSuperfluidDelegateResponse>): _180.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _180.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_180.MsgUnPoolWhitelistedPool>): _180.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _180.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_180.MsgUnPoolWhitelistedPoolResponse>): _180.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _179.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _179.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _179.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _179.SuperfluidAssetTypeSDKType;
        SuperfluidAsset: {
            encode(message: _179.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.SuperfluidAsset;
            fromPartial(object: Partial<_179.SuperfluidAsset>): _179.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _179.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_179.SuperfluidIntermediaryAccount>): _179.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _179.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_179.OsmoEquivalentMultiplierRecord>): _179.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _179.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_179.SuperfluidDelegationRecord>): _179.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _179.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_179.LockIdIntermediaryAccountConnection>): _179.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _179.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_179.UnpoolWhitelistedPools>): _179.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _178.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.QueryParamsRequest;
            fromPartial(_: Partial<_178.QueryParamsRequest>): _178.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _178.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.QueryParamsResponse;
            fromPartial(object: Partial<_178.QueryParamsResponse>): _178.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _178.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AssetTypeRequest;
            fromPartial(object: Partial<_178.AssetTypeRequest>): _178.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _178.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AssetTypeResponse;
            fromPartial(object: Partial<_178.AssetTypeResponse>): _178.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _178.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AllAssetsRequest;
            fromPartial(_: Partial<_178.AllAssetsRequest>): _178.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _178.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AllAssetsResponse;
            fromPartial(object: Partial<_178.AllAssetsResponse>): _178.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _178.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AssetMultiplierRequest;
            fromPartial(object: Partial<_178.AssetMultiplierRequest>): _178.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _178.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AssetMultiplierResponse;
            fromPartial(object: Partial<_178.AssetMultiplierResponse>): _178.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _178.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_178.SuperfluidIntermediaryAccountInfo>): _178.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _178.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_178.AllIntermediaryAccountsRequest>): _178.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _178.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_178.AllIntermediaryAccountsResponse>): _178.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _178.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_178.ConnectedIntermediaryAccountRequest>): _178.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _178.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_178.ConnectedIntermediaryAccountResponse>): _178.ConnectedIntermediaryAccountResponse;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _178.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_178.QueryTotalDelegationByValidatorForDenomRequest>): _178.QueryTotalDelegationByValidatorForDenomRequest;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _178.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_178.QueryTotalDelegationByValidatorForDenomResponse>): _178.QueryTotalDelegationByValidatorForDenomResponse;
        };
        Delegations: {
            encode(message: _178.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Delegations;
            fromPartial(object: Partial<_178.Delegations>): _178.Delegations;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _178.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_178.TotalSuperfluidDelegationsRequest>): _178.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _178.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_178.TotalSuperfluidDelegationsResponse>): _178.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _178.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_178.SuperfluidDelegationAmountRequest>): _178.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _178.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_178.SuperfluidDelegationAmountResponse>): _178.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _178.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_178.SuperfluidDelegationsByDelegatorRequest>): _178.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _178.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_178.SuperfluidDelegationsByDelegatorResponse>): _178.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _178.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_178.SuperfluidUndelegationsByDelegatorRequest>): _178.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _178.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_178.SuperfluidUndelegationsByDelegatorResponse>): _178.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _178.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_178.SuperfluidDelegationsByValidatorDenomRequest>): _178.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _178.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_178.SuperfluidDelegationsByValidatorDenomResponse>): _178.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _178.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_178.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _178.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _178.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_178.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _178.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _178.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_178.QueryTotalDelegationByDelegatorRequest>): _178.QueryTotalDelegationByDelegatorRequest;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _178.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_178.QueryTotalDelegationByDelegatorResponse>): _178.QueryTotalDelegationByDelegatorResponse;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _178.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_178.QueryUnpoolWhitelistRequest>): _178.QueryUnpoolWhitelistRequest;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _178.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_178.QueryUnpoolWhitelistResponse>): _178.QueryUnpoolWhitelistResponse;
        };
        Params: {
            encode(message: _177.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Params;
            fromPartial(object: Partial<_177.Params>): _177.Params;
        };
        GenesisState: {
            encode(message: _176.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GenesisState;
            fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _185.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _185.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _185.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _185.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _185.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _185.MsgCreateDenom): {
                        typeUrl: string;
                        value: _185.MsgCreateDenom;
                    };
                    mint(value: _185.MsgMint): {
                        typeUrl: string;
                        value: _185.MsgMint;
                    };
                    burn(value: _185.MsgBurn): {
                        typeUrl: string;
                        value: _185.MsgBurn;
                    };
                    changeAdmin(value: _185.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _185.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _185.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _185.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _185.MsgCreateDenom): {
                        typeUrl: string;
                        value: _185.MsgCreateDenom;
                    };
                    mint(value: _185.MsgMint): {
                        typeUrl: string;
                        value: _185.MsgMint;
                    };
                    burn(value: _185.MsgBurn): {
                        typeUrl: string;
                        value: _185.MsgBurn;
                    };
                    changeAdmin(value: _185.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _185.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _185.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _185.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _185.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _185.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _185.MsgMint) => {
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
                    }) => _185.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _185.MsgBurn) => {
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
                    }) => _185.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _185.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _185.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: ({ sender, metadata }: _185.MsgSetDenomMetadata) => {
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
                    }) => _185.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                encode(message: _185.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgCreateDenom;
                fromPartial(object: Partial<_185.MsgCreateDenom>): _185.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _185.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgCreateDenomResponse;
                fromPartial(object: Partial<_185.MsgCreateDenomResponse>): _185.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _185.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgMint;
                fromPartial(object: Partial<_185.MsgMint>): _185.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _185.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgMintResponse;
                fromPartial(_: Partial<_185.MsgMintResponse>): _185.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _185.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgBurn;
                fromPartial(object: Partial<_185.MsgBurn>): _185.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _185.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgBurnResponse;
                fromPartial(_: Partial<_185.MsgBurnResponse>): _185.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _185.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgChangeAdmin;
                fromPartial(object: Partial<_185.MsgChangeAdmin>): _185.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _185.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgChangeAdminResponse;
                fromPartial(_: Partial<_185.MsgChangeAdminResponse>): _185.MsgChangeAdminResponse;
            };
            MsgSetDenomMetadata: {
                encode(message: _185.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgSetDenomMetadata;
                fromPartial(object: Partial<_185.MsgSetDenomMetadata>): _185.MsgSetDenomMetadata;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _185.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_185.MsgSetDenomMetadataResponse>): _185.MsgSetDenomMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _184.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.QueryParamsRequest;
                fromPartial(_: Partial<_184.QueryParamsRequest>): _184.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _184.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.QueryParamsResponse;
                fromPartial(object: Partial<_184.QueryParamsResponse>): _184.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _184.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_184.QueryDenomAuthorityMetadataRequest>): _184.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _184.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_184.QueryDenomAuthorityMetadataResponse>): _184.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _184.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_184.QueryDenomsFromCreatorRequest>): _184.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _184.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_184.QueryDenomsFromCreatorResponse>): _184.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _183.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Params;
                fromPartial(object: Partial<_183.Params>): _183.Params;
            };
            GenesisState: {
                encode(message: _182.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.GenesisState;
                fromPartial(object: Partial<_182.GenesisState>): _182.GenesisState;
            };
            GenesisDenom: {
                encode(message: _182.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.GenesisDenom;
                fromPartial(object: Partial<_182.GenesisDenom>): _182.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _181.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.DenomAuthorityMetadata;
                fromPartial(object: Partial<_181.DenomAuthorityMetadata>): _181.DenomAuthorityMetadata;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            TwapRecord: {
                encode(message: _188.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.TwapRecord;
                fromPartial(object: Partial<_188.TwapRecord>): _188.TwapRecord;
            };
            ArithmeticTwapRequest: {
                encode(message: _187.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ArithmeticTwapRequest;
                fromPartial(object: Partial<_187.ArithmeticTwapRequest>): _187.ArithmeticTwapRequest;
            };
            ArithmeticTwapResponse: {
                encode(message: _187.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ArithmeticTwapResponse;
                fromPartial(object: Partial<_187.ArithmeticTwapResponse>): _187.ArithmeticTwapResponse;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _187.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_187.ArithmeticTwapToNowRequest>): _187.ArithmeticTwapToNowRequest;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _187.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_187.ArithmeticTwapToNowResponse>): _187.ArithmeticTwapToNowResponse;
            };
            GeometricTwapRequest: {
                encode(message: _187.GeometricTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.GeometricTwapRequest;
                fromPartial(object: Partial<_187.GeometricTwapRequest>): _187.GeometricTwapRequest;
            };
            GeometricTwapResponse: {
                encode(message: _187.GeometricTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.GeometricTwapResponse;
                fromPartial(object: Partial<_187.GeometricTwapResponse>): _187.GeometricTwapResponse;
            };
            GeometricTwapToNowRequest: {
                encode(message: _187.GeometricTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_187.GeometricTwapToNowRequest>): _187.GeometricTwapToNowRequest;
            };
            GeometricTwapToNowResponse: {
                encode(message: _187.GeometricTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_187.GeometricTwapToNowResponse>): _187.GeometricTwapToNowResponse;
            };
            ParamsRequest: {
                encode(_: _187.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ParamsRequest;
                fromPartial(_: Partial<_187.ParamsRequest>): _187.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _187.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ParamsResponse;
                fromPartial(object: Partial<_187.ParamsResponse>): _187.ParamsResponse;
            };
            Params: {
                encode(message: _186.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.Params;
                fromPartial(object: Partial<_186.Params>): _186.Params;
            };
            GenesisState: {
                encode(message: _186.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GenesisState;
                fromPartial(object: Partial<_186.GenesisState>): _186.GenesisState;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _192.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryFeeTokensRequest;
                fromPartial(_: Partial<_192.QueryFeeTokensRequest>): _192.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _192.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryFeeTokensResponse;
                fromPartial(object: Partial<_192.QueryFeeTokensResponse>): _192.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _192.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_192.QueryDenomSpotPriceRequest>): _192.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _192.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_192.QueryDenomSpotPriceResponse>): _192.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _192.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_192.QueryDenomPoolIdRequest>): _192.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _192.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_192.QueryDenomPoolIdResponse>): _192.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _192.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryBaseDenomRequest;
                fromPartial(_: Partial<_192.QueryBaseDenomRequest>): _192.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _192.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryBaseDenomResponse;
                fromPartial(object: Partial<_192.QueryBaseDenomResponse>): _192.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _191.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_191.UpdateFeeTokenProposal>): _191.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _190.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.GenesisState;
                fromPartial(object: Partial<_190.GenesisState>): _190.GenesisState;
            };
            FeeToken: {
                encode(message: _189.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.FeeToken;
                fromPartial(object: Partial<_189.FeeToken>): _189.FeeToken;
            };
        };
    }
}
