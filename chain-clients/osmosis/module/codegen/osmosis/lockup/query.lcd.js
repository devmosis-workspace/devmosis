import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.moduleBalance = this.moduleBalance.bind(this);
    this.moduleLockedAmount = this.moduleLockedAmount.bind(this);
    this.accountUnlockableCoins = this.accountUnlockableCoins.bind(this);
    this.accountUnlockingCoins = this.accountUnlockingCoins.bind(this);
    this.accountLockedCoins = this.accountLockedCoins.bind(this);
    this.accountLockedPastTime = this.accountLockedPastTime.bind(this);
    this.accountLockedPastTimeNotUnlockingOnly = this.accountLockedPastTimeNotUnlockingOnly.bind(this);
    this.accountUnlockedBeforeTime = this.accountUnlockedBeforeTime.bind(this);
    this.accountLockedPastTimeDenom = this.accountLockedPastTimeDenom.bind(this);
    this.lockedDenom = this.lockedDenom.bind(this);
    this.lockedByID = this.lockedByID.bind(this);
    this.nextLockID = this.nextLockID.bind(this);
    this.syntheticLockupsByLockupID = this.syntheticLockupsByLockupID.bind(this);
    this.accountLockedLongerDuration = this.accountLockedLongerDuration.bind(this);
    this.accountLockedDuration = this.accountLockedDuration.bind(this);
    this.accountLockedLongerDurationNotUnlockingOnly = this.accountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.accountLockedLongerDurationDenom = this.accountLockedLongerDurationDenom.bind(this);
    this.params = this.params.bind(this);
  }
  /* Return full balance of the module */
  async moduleBalance(_params = {}) {
    const endpoint = `osmosis/lockup/v1beta1/module_balance`;
    return await this.req.get(endpoint);
  }
  /* Return locked balance of the module */
  async moduleLockedAmount(_params = {}) {
    const endpoint = `osmosis/lockup/v1beta1/module_locked_amount`;
    return await this.req.get(endpoint);
  }
  /* Returns unlockable coins which are not withdrawn yet */
  async accountUnlockableCoins(params) {
    const endpoint = `osmosis/lockup/v1beta1/account_unlockable_coins/${params.owner}`;
    return await this.req.get(endpoint);
  }
  /* Returns unlocking coins */
  async accountUnlockingCoins(params) {
    const endpoint = `osmosis/lockup/v1beta1/account_unlocking_coins/${params.owner}`;
    return await this.req.get(endpoint);
  }
  /* Return a locked coins that can't be withdrawn */
  async accountLockedCoins(params) {
    const endpoint = `osmosis/lockup/v1beta1/account_locked_coins/${params.owner}`;
    return await this.req.get(endpoint);
  }
  /* Returns locked records of an account with unlock time beyond timestamp */
  async accountLockedPastTime(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.timestamp) !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime/${params.owner}`;
    return await this.req.get(endpoint, options);
  }
  /* Returns locked records of an account with unlock time beyond timestamp
   excluding tokens started unlocking */
  async accountLockedPastTimeNotUnlockingOnly(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.timestamp) !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${params.owner}`;
    return await this.req.get(endpoint, options);
  }
  /* Returns unlocked records with unlock time before timestamp */
  async accountUnlockedBeforeTime(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.timestamp) !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_unlocked_before_time/${params.owner}`;
    return await this.req.get(endpoint, options);
  }
  /* Returns lock records by address, timestamp, denom */
  async accountLockedPastTimeDenom(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.timestamp) !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_denom/${params.owner}`;
    return await this.req.get(endpoint, options);
  }
  /* Returns total locked per denom with longer past given time */
  async lockedDenom(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `osmosis/lockup/v1beta1/locked_denom`;
    return await this.req.get(endpoint, options);
  }
  /* Returns lock record by id */
  async lockedByID(params) {
    const endpoint = `osmosis/lockup/v1beta1/locked_by_id/${params.lockId}`;
    return await this.req.get(endpoint);
  }
  /* Returns next lock ID */
  async nextLockID(_params = {}) {
    const endpoint = `osmosis/lockup/v1beta1/next_lock_id`;
    return await this.req.get(endpoint);
  }
  /* Returns synthetic lockups by native lockup id */
  async syntheticLockupsByLockupID(params) {
    const endpoint = `osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${params.lockId}`;
    return await this.req.get(endpoint);
  }
  /* Returns account locked records with longer duration */
  async accountLockedLongerDuration(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration/${params.owner}`;
    return await this.req.get(endpoint, options);
  }
  /* Returns account locked records with a specific duration */
  async accountLockedDuration(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_duration/${params.owner}`;
    return await this.req.get(endpoint, options);
  }
  /* Returns account locked records with longer duration excluding tokens
   started unlocking */
  async accountLockedLongerDurationNotUnlockingOnly(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${params.owner}`;
    return await this.req.get(endpoint, options);
  }
  /* Returns account's locked records for a denom with longer duration */
  async accountLockedLongerDurationDenom(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
      options.params.duration = params.duration;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${params.owner}`;
    return await this.req.get(endpoint, options);
  }
  /* Params returns lockup params. */
  async params(_params = {}) {
    const endpoint = `osmosis/lockup/v1beta1/params`;
    return await this.req.get(endpoint);
  }
}