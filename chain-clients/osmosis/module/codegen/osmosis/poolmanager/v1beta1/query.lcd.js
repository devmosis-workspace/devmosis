import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
  }
  /* Params */
  async params(_params = {}) {
    const endpoint = `osmosis/poolmanager/v1beta1/Params`;
    return await this.req.get(endpoint);
  }
  /* Estimates swap amount out given in. */
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
  /* Estimates swap amount in given out. */
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
  /* NumPools */
  async numPools(_params = {}) {
    const endpoint = `osmosis/poolmanager/v1beta1/num_pools`;
    return await this.req.get(endpoint);
  }
}