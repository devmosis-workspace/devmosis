import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.params = this.params.bind(this);
  }
  /* Accounts returns all the existing accounts
  
   Since: cosmos-sdk 0.43 */

  async accounts(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.req.get(endpoint, options);
  }
  /* Account returns account details based on address. */

  async account(params) {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.req.get(endpoint);
  }
  /* Params queries all parameters. */

  async params(_params = {}) {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.req.get(endpoint);
  }
}