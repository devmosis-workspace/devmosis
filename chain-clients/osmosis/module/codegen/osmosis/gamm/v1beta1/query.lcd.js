import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }
  /* Pools */
  async pools(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/pools`;
    return await this.req.get(endpoint, options);
  }
  /* Deprecated: please use the alternative in x/poolmanager */
  async numPools(_params = {}) {
    const endpoint = `osmosis/gamm/v1beta1/num_pools`;
    return await this.req.get(endpoint);
  }
  /* TotalLiquidity */
  async totalLiquidity(_params = {}) {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
    return await this.req.get(endpoint);
  }
  /* PoolsWithFilter allows you to query specific pools with requested
   parameters */
  async poolsWithFilter(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.minLiquidity) !== "undefined") {
      options.params.min_liquidity = params.minLiquidity;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.poolType) !== "undefined") {
      options.params.pool_type = params.poolType;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/gamm/v1beta1/filtered_pools`;
    return await this.req.get(endpoint, options);
  }
  /* Per Pool gRPC Endpoints */
  async pool(params) {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.req.get(endpoint);
  }
  /* PoolType returns the type of the pool.
   Returns "Balancer" as a string literal when the pool is a balancer pool.
   Errors if the pool is failed to be type caseted. */
  async poolType(params) {
    const endpoint = `osmosis/gamm/v1beta1/pool_type/${params.poolId}`;
    return await this.req.get(endpoint);
  }
  /* CalcJoinPoolShares */
  async calcJoinPoolShares(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.tokensIn) !== "undefined") {
      options.params.tokens_in = params.tokensIn;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/join_swap_exact_in`;
    return await this.req.get(endpoint, options);
  }
  /* CalcExitPoolCoinsFromShares */
  async calcExitPoolCoinsFromShares(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.shareInAmount) !== "undefined") {
      options.params.share_in_amount = params.shareInAmount;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/exit_swap_share_amount_in`;
    return await this.req.get(endpoint, options);
  }
  /* PoolParams */
  async poolParams(params) {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/params`;
    return await this.req.get(endpoint);
  }
  /* TotalPoolLiquidity */
  async totalPoolLiquidity(params) {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.req.get(endpoint);
  }
  /* TotalShares */
  async totalShares(params) {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_shares`;
    return await this.req.get(endpoint);
  }
  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  async spotPrice(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.baseAssetDenom) !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.quoteAssetDenom) !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/prices`;
    return await this.req.get(endpoint, options);
  }
  /* Deprecated: please use the alternative in x/poolmanager */
  async estimateSwapExactAmountIn(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.sender) !== "undefined") {
      options.params.sender = params.sender;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.tokenIn) !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.routes) !== "undefined") {
      options.params.routes = params.routes;
    }
    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_in`;
    return await this.req.get(endpoint, options);
  }
  /* Deprecated: please use the alternative in x/poolmanager */
  async estimateSwapExactAmountOut(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.sender) !== "undefined") {
      options.params.sender = params.sender;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.routes) !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.tokenOut) !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return await this.req.get(endpoint, options);
  }
}