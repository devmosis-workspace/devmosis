import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.assetType = this.assetType.bind(this);
    this.allAssets = this.allAssets.bind(this);
    this.assetMultiplier = this.assetMultiplier.bind(this);
    this.allIntermediaryAccounts = this.allIntermediaryAccounts.bind(this);
    this.connectedIntermediaryAccount = this.connectedIntermediaryAccount.bind(this);
    this.totalSuperfluidDelegations = this.totalSuperfluidDelegations.bind(this);
    this.superfluidDelegationAmount = this.superfluidDelegationAmount.bind(this);
    this.superfluidDelegationsByDelegator = this.superfluidDelegationsByDelegator.bind(this);
    this.superfluidUndelegationsByDelegator = this.superfluidUndelegationsByDelegator.bind(this);
    this.superfluidDelegationsByValidatorDenom = this.superfluidDelegationsByValidatorDenom.bind(this);
    this.estimateSuperfluidDelegatedAmountByValidatorDenom = this.estimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
    this.totalDelegationByDelegator = this.totalDelegationByDelegator.bind(this);
    this.unpoolWhitelist = this.unpoolWhitelist.bind(this);
  }
  /* Params returns the total set of superfluid parameters. */
  async params(_params = {}) {
    const endpoint = `osmosis/superfluid/v1beta1/params`;
    return await this.req.get(endpoint);
  }
  /* Returns superfluid asset type, whether if it's a native asset or an lp
   share. */
  async assetType(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/asset_type`;
    return await this.req.get(endpoint, options);
  }
  /* Returns all registered superfluid assets. */
  async allAssets(_params = {}) {
    const endpoint = `osmosis/superfluid/v1beta1/all_assets`;
    return await this.req.get(endpoint);
  }
  /* Returns the osmo equivalent multiplier used in the most recent epoch. */
  async assetMultiplier(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/asset_multiplier`;
    return await this.req.get(endpoint, options);
  }
  /* Returns all superfluid intermediary accounts. */
  async allIntermediaryAccounts(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/superfluid/v1beta1/all_intermediary_accounts`;
    return await this.req.get(endpoint, options);
  }
  /* Returns intermediary account connected to a superfluid staked lock by id */
  async connectedIntermediaryAccount(params) {
    const endpoint = `osmosis/superfluid/v1beta1/connected_intermediary_account/${params.lockId}`;
    return await this.req.get(endpoint);
  }
  /* Returns the total amount of osmo superfluidly staked.
   Response is denominated in uosmo. */
  async totalSuperfluidDelegations(_params = {}) {
    const endpoint = `osmosis/superfluid/v1beta1/all_superfluid_delegations`;
    return await this.req.get(endpoint);
  }
  /* Returns the coins superfluid delegated for the delegator, validator, denom
   triplet */
  async superfluidDelegationAmount(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.delegatorAddress) !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.validatorAddress) !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegation_amount`;
    return await this.req.get(endpoint, options);
  }
  /* Returns all the delegated superfluid poistions for a specific delegator. */
  async superfluidDelegationsByDelegator(params) {
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations/${params.delegatorAddress}`;
    return await this.req.get(endpoint);
  }
  /* Returns all the undelegating superfluid poistions for a specific delegator. */
  async superfluidUndelegationsByDelegator(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${params.delegatorAddress}`;
    return await this.req.get(endpoint, options);
  }
  /* Returns all the superfluid positions of a specific denom delegated to one
   validator */
  async superfluidDelegationsByValidatorDenom(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.validatorAddress) !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom`;
    return await this.req.get(endpoint, options);
  }
  /* Returns the amount of a specific denom delegated to a specific validator
   This is labeled an estimate, because the way it calculates the amount can
   lead rounding errors from the true delegated amount */
  async estimateSuperfluidDelegatedAmountByValidatorDenom(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.validatorAddress) !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom`;
    return await this.req.get(endpoint, options);
  }
  /* Returns the specified delegations for a specific delegator */
  async totalDelegationByDelegator(params) {
    const endpoint = `osmosis/superfluid/v1beta1/total_delegation_by_delegator/${params.delegatorAddress}`;
    return await this.req.get(endpoint);
  }
  /* Returns a list of whitelisted pool ids to unpool. */
  async unpoolWhitelist(_params = {}) {
    const endpoint = `osmosis/superfluid/v1beta1/unpool_whitelist`;
    return await this.req.get(endpoint);
  }
}