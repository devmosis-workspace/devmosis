import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.spotPrice = this.spotPrice.bind(this);
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
    const endpoint = `osmosis/gamm/v2/pools/${params.poolId}/prices`;
    return await this.req.get(endpoint, options);
  }
}