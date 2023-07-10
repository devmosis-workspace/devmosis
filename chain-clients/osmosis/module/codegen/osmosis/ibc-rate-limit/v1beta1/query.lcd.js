import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
  }
  /* Params defines a gRPC query method that returns the ibc-rate-limit module's
   parameters. */
  async params(_params = {}) {
    const endpoint = `osmosis/ibc-rate-limit/v1beta1/params`;
    return await this.req.get(endpoint);
  }
}