import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
    this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
    this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
    this.getProtoRevStatisticsByRoute = this.getProtoRevStatisticsByRoute.bind(this);
    this.getProtoRevAllRouteStatistics = this.getProtoRevAllRouteStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
    this.getProtoRevAdminAccount = this.getProtoRevAdminAccount.bind(this);
    this.getProtoRevDeveloperAccount = this.getProtoRevDeveloperAccount.bind(this);
    this.getProtoRevPoolWeights = this.getProtoRevPoolWeights.bind(this);
    this.getProtoRevMaxPoolPointsPerTx = this.getProtoRevMaxPoolPointsPerTx.bind(this);
    this.getProtoRevMaxPoolPointsPerBlock = this.getProtoRevMaxPoolPointsPerBlock.bind(this);
    this.getProtoRevBaseDenoms = this.getProtoRevBaseDenoms.bind(this);
    this.getProtoRevEnabled = this.getProtoRevEnabled.bind(this);
    this.getProtoRevPool = this.getProtoRevPool.bind(this);
  }
  /* Params queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `osmosis/v14/protorev/params`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   has executed */
  async getProtoRevNumberOfTrades(_params = {}) {
    const endpoint = `osmosis/v14/protorev/number_of_trades`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevProfitsByDenom queries the profits of the module by denom */
  async getProtoRevProfitsByDenom(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/v14/protorev/profits_by_denom`;
    return await this.req.get(endpoint, options);
  }
  /* GetProtoRevAllProfits queries all of the profits from the module */
  async getProtoRevAllProfits(_params = {}) {
    const endpoint = `osmosis/v14/protorev/all_profits`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
   that have been executed for a given route */
  async getProtoRevStatisticsByRoute(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.route) !== "undefined") {
      options.params.route = params.route;
    }
    const endpoint = `osmosis/v14/protorev/statistics_by_route`;
    return await this.req.get(endpoint, options);
  }
  /* GetProtoRevAllRouteStatistics queries all of routes that the module has
   arbitraged against and the number of trades and profits that have been
   accumulated for each route */
  async getProtoRevAllRouteStatistics(_params = {}) {
    const endpoint = `osmosis/v14/protorev/all_route_statistics`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   is currently arbitraging */
  async getProtoRevTokenPairArbRoutes(_params = {}) {
    const endpoint = `osmosis/v14/protorev/token_pair_arb_routes`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevAdminAccount queries the admin account of the module */
  async getProtoRevAdminAccount(_params = {}) {
    const endpoint = `osmosis/v14/protorev/admin_account`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevDeveloperAccount queries the developer account of the module */
  async getProtoRevDeveloperAccount(_params = {}) {
    const endpoint = `osmosis/v14/protorev/developer_account`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevPoolWeights queries the weights of each pool type currently
   being used by the module */
  async getProtoRevPoolWeights(_params = {}) {
    const endpoint = `osmosis/v14/protorev/pool_weights`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
   that can be consumed per transaction */
  async getProtoRevMaxPoolPointsPerTx(_params = {}) {
    const endpoint = `osmosis/v14/protorev/max_pool_points_per_tx`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
   that can consumed per block */
  async getProtoRevMaxPoolPointsPerBlock(_params = {}) {
    const endpoint = `osmosis/v14/protorev/max_pool_points_per_block`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevBaseDenoms queries the base denoms that the module is currently
   utilizing for arbitrage */
  async getProtoRevBaseDenoms(_params = {}) {
    const endpoint = `osmosis/v14/protorev/base_denoms`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevEnabled queries whether the module is enabled or not */
  async getProtoRevEnabled(_params = {}) {
    const endpoint = `osmosis/v14/protorev/enabled`;
    return await this.req.get(endpoint);
  }
  /* GetProtoRevPool queries the pool id used via the highest liquidity method
   for arbitrage route building given a pair of denominations */
  async getProtoRevPool(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.baseDenom) !== "undefined") {
      options.params.base_denom = params.baseDenom;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.otherDenom) !== "undefined") {
      options.params.other_denom = params.otherDenom;
    }
    const endpoint = `osmosis/v14/protorev/pool`;
    return await this.req.get(endpoint, options);
  }
}