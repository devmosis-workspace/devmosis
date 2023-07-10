import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.userValidatorPreferences = this.userValidatorPreferences.bind(this);
  }
  /* Returns the list of ValidatorPreferences for the user. */
  async userValidatorPreferences(params) {
    const endpoint = `osmosis/valset-pref/v1beta1/${params.address}`;
    return await this.req.get(endpoint);
  }
}