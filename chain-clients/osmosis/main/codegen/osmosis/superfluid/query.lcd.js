"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LCDQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _helpers = require("../../helpers");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
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
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "osmosis/superfluid/v1beta1/params";
              _context.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }()
    /* Returns superfluid asset type, whether if it's a native asset or an lp
     share. */
  }, {
    key: "assetType",
    value: function () {
      var _assetType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "osmosis/superfluid/v1beta1/asset_type";
              _context2.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context2.abrupt("return", _context2.sent);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function assetType(_x) {
        return _assetType.apply(this, arguments);
      }
      return assetType;
    }() /* Returns all registered superfluid assets. */
  }, {
    key: "allAssets",
    value: function () {
      var _allAssets = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _params,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              endpoint = "osmosis/superfluid/v1beta1/all_assets";
              _context3.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context3.abrupt("return", _context3.sent);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function allAssets() {
        return _allAssets.apply(this, arguments);
      }
      return allAssets;
    }() /* Returns the osmo equivalent multiplier used in the most recent epoch. */
  }, {
    key: "assetMultiplier",
    value: function () {
      var _assetMultiplier = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "osmosis/superfluid/v1beta1/asset_multiplier";
              _context4.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context4.abrupt("return", _context4.sent);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function assetMultiplier(_x2) {
        return _assetMultiplier.apply(this, arguments);
      }
      return assetMultiplier;
    }() /* Returns all superfluid intermediary accounts. */
  }, {
    key: "allIntermediaryAccounts",
    value: function () {
      var _allIntermediaryAccounts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var params,
          options,
          endpoint,
          _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "osmosis/superfluid/v1beta1/all_intermediary_accounts";
              _context5.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context5.abrupt("return", _context5.sent);
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function allIntermediaryAccounts() {
        return _allIntermediaryAccounts.apply(this, arguments);
      }
      return allIntermediaryAccounts;
    }() /* Returns intermediary account connected to a superfluid staked lock by id */
  }, {
    key: "connectedIntermediaryAccount",
    value: function () {
      var _connectedIntermediaryAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "osmosis/superfluid/v1beta1/connected_intermediary_account/".concat(params.lockId);
              _context6.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context6.abrupt("return", _context6.sent);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function connectedIntermediaryAccount(_x3) {
        return _connectedIntermediaryAccount.apply(this, arguments);
      }
      return connectedIntermediaryAccount;
    }()
    /* Returns the total amount of osmo superfluidly staked.
     Response is denominated in uosmo. */
  }, {
    key: "totalSuperfluidDelegations",
    value: function () {
      var _totalSuperfluidDelegations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _params,
          endpoint,
          _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _params = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              endpoint = "osmosis/superfluid/v1beta1/all_superfluid_delegations";
              _context7.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context7.abrupt("return", _context7.sent);
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function totalSuperfluidDelegations() {
        return _totalSuperfluidDelegations.apply(this, arguments);
      }
      return totalSuperfluidDelegations;
    }()
    /* Returns the coins superfluid delegated for the delegator, validator, denom
     triplet */
  }, {
    key: "superfluidDelegationAmount",
    value: function () {
      var _superfluidDelegationAmount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              options = {
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
              endpoint = "osmosis/superfluid/v1beta1/superfluid_delegation_amount";
              _context8.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context8.abrupt("return", _context8.sent);
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function superfluidDelegationAmount(_x4) {
        return _superfluidDelegationAmount.apply(this, arguments);
      }
      return superfluidDelegationAmount;
    }() /* Returns all the delegated superfluid poistions for a specific delegator. */
  }, {
    key: "superfluidDelegationsByDelegator",
    value: function () {
      var _superfluidDelegationsByDelegator = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "osmosis/superfluid/v1beta1/superfluid_delegations/".concat(params.delegatorAddress);
              _context9.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context9.abrupt("return", _context9.sent);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function superfluidDelegationsByDelegator(_x5) {
        return _superfluidDelegationsByDelegator.apply(this, arguments);
      }
      return superfluidDelegationsByDelegator;
    }() /* Returns all the undelegating superfluid poistions for a specific delegator. */
  }, {
    key: "superfluidUndelegationsByDelegator",
    value: function () {
      var _superfluidUndelegationsByDelegator = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/".concat(params.delegatorAddress);
              _context10.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context10.abrupt("return", _context10.sent);
            case 6:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function superfluidUndelegationsByDelegator(_x6) {
        return _superfluidUndelegationsByDelegator.apply(this, arguments);
      }
      return superfluidUndelegationsByDelegator;
    }()
    /* Returns all the superfluid positions of a specific denom delegated to one
     validator */
  }, {
    key: "superfluidDelegationsByValidatorDenom",
    value: function () {
      var _superfluidDelegationsByValidatorDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.validatorAddress) !== "undefined") {
                options.params.validator_address = params.validatorAddress;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom";
              _context11.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context11.abrupt("return", _context11.sent);
            case 7:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function superfluidDelegationsByValidatorDenom(_x7) {
        return _superfluidDelegationsByValidatorDenom.apply(this, arguments);
      }
      return superfluidDelegationsByValidatorDenom;
    }()
    /* Returns the amount of a specific denom delegated to a specific validator
     This is labeled an estimate, because the way it calculates the amount can
     lead rounding errors from the true delegated amount */
  }, {
    key: "estimateSuperfluidDelegatedAmountByValidatorDenom",
    value: function () {
      var _estimateSuperfluidDelegatedAmountByValidatorDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.validatorAddress) !== "undefined") {
                options.params.validator_address = params.validatorAddress;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom";
              _context12.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context12.abrupt("return", _context12.sent);
            case 7:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function estimateSuperfluidDelegatedAmountByValidatorDenom(_x8) {
        return _estimateSuperfluidDelegatedAmountByValidatorDenom.apply(this, arguments);
      }
      return estimateSuperfluidDelegatedAmountByValidatorDenom;
    }() /* Returns the specified delegations for a specific delegator */
  }, {
    key: "totalDelegationByDelegator",
    value: function () {
      var _totalDelegationByDelegator = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              endpoint = "osmosis/superfluid/v1beta1/total_delegation_by_delegator/".concat(params.delegatorAddress);
              _context13.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context13.abrupt("return", _context13.sent);
            case 4:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function totalDelegationByDelegator(_x9) {
        return _totalDelegationByDelegator.apply(this, arguments);
      }
      return totalDelegationByDelegator;
    }() /* Returns a list of whitelisted pool ids to unpool. */
  }, {
    key: "unpoolWhitelist",
    value: function () {
      var _unpoolWhitelist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
        var _params,
          endpoint,
          _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _params = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
              endpoint = "osmosis/superfluid/v1beta1/unpool_whitelist";
              _context14.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context14.abrupt("return", _context14.sent);
            case 5:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function unpoolWhitelist() {
        return _unpoolWhitelist.apply(this, arguments);
      }
      return unpoolWhitelist;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;