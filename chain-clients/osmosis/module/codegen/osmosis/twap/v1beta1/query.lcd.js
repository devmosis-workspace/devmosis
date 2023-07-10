import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
    this.geometricTwap = this.geometricTwap.bind(this);
    this.geometricTwapToNow = this.geometricTwapToNow.bind(this);
  }
  /* Params */
  async params(_params = {}) {
    const endpoint = `osmosis/twap/v1beta1/Params`;
    return await this.req.get(endpoint);
  }
  /* ArithmeticTwap */
  async arithmeticTwap(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.poolId) !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.baseAsset) !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.quoteAsset) !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.startTime) !== "undefined") {
      options.params.start_time = params.startTime;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.endTime) !== "undefined") {
      options.params.end_time = params.endTime;
    }
    const endpoint = `osmosis/twap/v1beta1/ArithmeticTwap`;
    return await this.req.get(endpoint, options);
  }
  /* ArithmeticTwapToNow */
  async arithmeticTwapToNow(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.poolId) !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.baseAsset) !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.quoteAsset) !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.startTime) !== "undefined") {
      options.params.start_time = params.startTime;
    }
    const endpoint = `osmosis/twap/v1beta1/ArithmeticTwapToNow`;
    return await this.req.get(endpoint, options);
  }
  /* GeometricTwap */
  async geometricTwap(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.poolId) !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.baseAsset) !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.quoteAsset) !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.startTime) !== "undefined") {
      options.params.start_time = params.startTime;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.endTime) !== "undefined") {
      options.params.end_time = params.endTime;
    }
    const endpoint = `osmosis/twap/v1beta1/GeometricTwap`;
    return await this.req.get(endpoint, options);
  }
  /* GeometricTwapToNow */
  async geometricTwapToNow(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.poolId) !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.baseAsset) !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.quoteAsset) !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.startTime) !== "undefined") {
      options.params.start_time = params.startTime;
    }
    const endpoint = `osmosis/twap/v1beta1/GeometricTwapToNow`;
    return await this.req.get(endpoint, options);
  }
}