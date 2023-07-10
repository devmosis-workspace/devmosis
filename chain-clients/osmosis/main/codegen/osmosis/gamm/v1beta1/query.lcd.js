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
var _helpers = require("../../../helpers");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }
  /* Pools */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "pools",
    value: function () {
      var _pools = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var params,
          options,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "osmosis/gamm/v1beta1/pools";
              _context.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context.abrupt("return", _context.sent);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function pools() {
        return _pools.apply(this, arguments);
      }
      return pools;
    }() /* Deprecated: please use the alternative in x/poolmanager */
  }, {
    key: "numPools",
    value: function () {
      var _numPools = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _params,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              endpoint = "osmosis/gamm/v1beta1/num_pools";
              _context2.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context2.abrupt("return", _context2.sent);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function numPools() {
        return _numPools.apply(this, arguments);
      }
      return numPools;
    }() /* TotalLiquidity */
  }, {
    key: "totalLiquidity",
    value: function () {
      var _totalLiquidity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _params,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              endpoint = "osmosis/gamm/v1beta1/total_liquidity";
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
      function totalLiquidity() {
        return _totalLiquidity.apply(this, arguments);
      }
      return totalLiquidity;
    }()
    /* PoolsWithFilter allows you to query specific pools with requested
     parameters */
  }, {
    key: "poolsWithFilter",
    value: function () {
      var _poolsWithFilter = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.minLiquidity) !== "undefined") {
                options.params.min_liquidity = params.minLiquidity;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.poolType) !== "undefined") {
                options.params.pool_type = params.poolType;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "osmosis/gamm/v1beta1/filtered_pools";
              _context4.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context4.abrupt("return", _context4.sent);
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function poolsWithFilter(_x) {
        return _poolsWithFilter.apply(this, arguments);
      }
      return poolsWithFilter;
    }() /* Per Pool gRPC Endpoints */
  }, {
    key: "pool",
    value: function () {
      var _pool = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "osmosis/gamm/v1beta1/pools/".concat(params.poolId);
              _context5.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context5.abrupt("return", _context5.sent);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function pool(_x2) {
        return _pool.apply(this, arguments);
      }
      return pool;
    }()
    /* PoolType returns the type of the pool.
     Returns "Balancer" as a string literal when the pool is a balancer pool.
     Errors if the pool is failed to be type caseted. */
  }, {
    key: "poolType",
    value: function () {
      var _poolType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "osmosis/gamm/v1beta1/pool_type/".concat(params.poolId);
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
      function poolType(_x3) {
        return _poolType.apply(this, arguments);
      }
      return poolType;
    }() /* CalcJoinPoolShares */
  }, {
    key: "calcJoinPoolShares",
    value: function () {
      var _calcJoinPoolShares = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.tokensIn) !== "undefined") {
                options.params.tokens_in = params.tokensIn;
              }
              endpoint = "osmosis/gamm/v1beta1/pools/".concat(params.poolId, "/join_swap_exact_in");
              _context7.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context7.abrupt("return", _context7.sent);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function calcJoinPoolShares(_x4) {
        return _calcJoinPoolShares.apply(this, arguments);
      }
      return calcJoinPoolShares;
    }() /* CalcExitPoolCoinsFromShares */
  }, {
    key: "calcExitPoolCoinsFromShares",
    value: function () {
      var _calcExitPoolCoinsFromShares = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.shareInAmount) !== "undefined") {
                options.params.share_in_amount = params.shareInAmount;
              }
              endpoint = "osmosis/gamm/v1beta1/pools/".concat(params.poolId, "/exit_swap_share_amount_in");
              _context8.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context8.abrupt("return", _context8.sent);
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function calcExitPoolCoinsFromShares(_x5) {
        return _calcExitPoolCoinsFromShares.apply(this, arguments);
      }
      return calcExitPoolCoinsFromShares;
    }() /* PoolParams */
  }, {
    key: "poolParams",
    value: function () {
      var _poolParams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "osmosis/gamm/v1beta1/pools/".concat(params.poolId, "/params");
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
      function poolParams(_x6) {
        return _poolParams.apply(this, arguments);
      }
      return poolParams;
    }() /* TotalPoolLiquidity */
  }, {
    key: "totalPoolLiquidity",
    value: function () {
      var _totalPoolLiquidity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              endpoint = "osmosis/gamm/v1beta1/pools/".concat(params.poolId, "/total_pool_liquidity");
              _context10.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context10.abrupt("return", _context10.sent);
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function totalPoolLiquidity(_x7) {
        return _totalPoolLiquidity.apply(this, arguments);
      }
      return totalPoolLiquidity;
    }() /* TotalShares */
  }, {
    key: "totalShares",
    value: function () {
      var _totalShares = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              endpoint = "osmosis/gamm/v1beta1/pools/".concat(params.poolId, "/total_shares");
              _context11.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context11.abrupt("return", _context11.sent);
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function totalShares(_x8) {
        return _totalShares.apply(this, arguments);
      }
      return totalShares;
    }()
    /* SpotPrice defines a gRPC query handler that returns the spot price given
     a base denomination and a quote denomination. */
  }, {
    key: "spotPrice",
    value: function () {
      var _spotPrice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.baseAssetDenom) !== "undefined") {
                options.params.base_asset_denom = params.baseAssetDenom;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.quoteAssetDenom) !== "undefined") {
                options.params.quote_asset_denom = params.quoteAssetDenom;
              }
              endpoint = "osmosis/gamm/v1beta1/pools/".concat(params.poolId, "/prices");
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
      function spotPrice(_x9) {
        return _spotPrice.apply(this, arguments);
      }
      return spotPrice;
    }() /* Deprecated: please use the alternative in x/poolmanager */
  }, {
    key: "estimateSwapExactAmountIn",
    value: function () {
      var _estimateSwapExactAmountIn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.sender) !== "undefined") {
                options.params.sender = params.sender;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.tokenIn) !== "undefined") {
                options.params.token_in = params.tokenIn;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.routes) !== "undefined") {
                options.params.routes = params.routes;
              }
              endpoint = "osmosis/gamm/v1beta1/".concat(params.poolId, "/estimate/swap_exact_amount_in");
              _context13.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context13.abrupt("return", _context13.sent);
            case 8:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function estimateSwapExactAmountIn(_x10) {
        return _estimateSwapExactAmountIn.apply(this, arguments);
      }
      return estimateSwapExactAmountIn;
    }() /* Deprecated: please use the alternative in x/poolmanager */
  }, {
    key: "estimateSwapExactAmountOut",
    value: function () {
      var _estimateSwapExactAmountOut = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.sender) !== "undefined") {
                options.params.sender = params.sender;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.routes) !== "undefined") {
                options.params.routes = params.routes;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.tokenOut) !== "undefined") {
                options.params.token_out = params.tokenOut;
              }
              endpoint = "osmosis/gamm/v1beta1/".concat(params.poolId, "/estimate/swap_exact_amount_out");
              _context14.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context14.abrupt("return", _context14.sent);
            case 8:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function estimateSwapExactAmountOut(_x11) {
        return _estimateSwapExactAmountOut.apply(this, arguments);
      }
      return estimateSwapExactAmountOut;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;