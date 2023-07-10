import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
  }
  /* RecoveredSinceDowntimeOfLength */
  async recoveredSinceDowntimeOfLength(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.downtime) !== "undefined") {
      options.params.downtime = params.downtime;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.recovery) !== "undefined") {
      options.params.recovery = params.recovery;
    }
    const endpoint = `osmosis/downtime-detector/v1beta1/RecoveredSinceDowntimeOfLength`;
    return await this.req.get(endpoint, options);
  }
}