import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PoolType is an enumeration of all supported pool types. */
export declare enum PoolType {
    /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
    Balancer = 0,
    /**
     * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
     * in x/gamm.
     */
    Stableswap = 1,
    UNRECOGNIZED = -1
}
export declare const PoolTypeSDKType: typeof PoolType;
export declare function poolTypeFromJSON(object: any): PoolType;
export declare function poolTypeToJSON(object: PoolType): string;
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRoute {
    /** pool_type specifies the type of the pool */
    poolType: PoolType;
    poolId: Long;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteSDKType {
    pool_type: PoolType;
    pool_id: Long;
}
export declare const ModuleRoute: {
    encode(message: ModuleRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleRoute;
    fromPartial(object: Partial<ModuleRoute>): ModuleRoute;
};