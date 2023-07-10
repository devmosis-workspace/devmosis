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
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
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
              endpoint = "osmosis/v14/protorev/params";
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
    /* GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     has executed */
  }, {
    key: "getProtoRevNumberOfTrades",
    value: function () {
      var _getProtoRevNumberOfTrades = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _params,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              endpoint = "osmosis/v14/protorev/number_of_trades";
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
      function getProtoRevNumberOfTrades() {
        return _getProtoRevNumberOfTrades.apply(this, arguments);
      }
      return getProtoRevNumberOfTrades;
    }() /* GetProtoRevProfitsByDenom queries the profits of the module by denom */
  }, {
    key: "getProtoRevProfitsByDenom",
    value: function () {
      var _getProtoRevProfitsByDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "osmosis/v14/protorev/profits_by_denom";
              _context3.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context3.abrupt("return", _context3.sent);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getProtoRevProfitsByDenom(_x) {
        return _getProtoRevProfitsByDenom.apply(this, arguments);
      }
      return getProtoRevProfitsByDenom;
    }() /* GetProtoRevAllProfits queries all of the profits from the module */
  }, {
    key: "getProtoRevAllProfits",
    value: function () {
      var _getProtoRevAllProfits = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _params,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              endpoint = "osmosis/v14/protorev/all_profits";
              _context4.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context4.abrupt("return", _context4.sent);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getProtoRevAllProfits() {
        return _getProtoRevAllProfits.apply(this, arguments);
      }
      return getProtoRevAllProfits;
    }()
    /* GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
     that have been executed for a given route */
  }, {
    key: "getProtoRevStatisticsByRoute",
    value: function () {
      var _getProtoRevStatisticsByRoute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.route) !== "undefined") {
                options.params.route = params.route;
              }
              endpoint = "osmosis/v14/protorev/statistics_by_route";
              _context5.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context5.abrupt("return", _context5.sent);
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getProtoRevStatisticsByRoute(_x2) {
        return _getProtoRevStatisticsByRoute.apply(this, arguments);
      }
      return getProtoRevStatisticsByRoute;
    }()
    /* GetProtoRevAllRouteStatistics queries all of routes that the module has
     arbitraged against and the number of trades and profits that have been
     accumulated for each route */
  }, {
    key: "getProtoRevAllRouteStatistics",
    value: function () {
      var _getProtoRevAllRouteStatistics = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _params,
          endpoint,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
              endpoint = "osmosis/v14/protorev/all_route_statistics";
              _context6.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context6.abrupt("return", _context6.sent);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getProtoRevAllRouteStatistics() {
        return _getProtoRevAllRouteStatistics.apply(this, arguments);
      }
      return getProtoRevAllRouteStatistics;
    }()
    /* GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     is currently arbitraging */
  }, {
    key: "getProtoRevTokenPairArbRoutes",
    value: function () {
      var _getProtoRevTokenPairArbRoutes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _params,
          endpoint,
          _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _params = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              endpoint = "osmosis/v14/protorev/token_pair_arb_routes";
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
      function getProtoRevTokenPairArbRoutes() {
        return _getProtoRevTokenPairArbRoutes.apply(this, arguments);
      }
      return getProtoRevTokenPairArbRoutes;
    }() /* GetProtoRevAdminAccount queries the admin account of the module */
  }, {
    key: "getProtoRevAdminAccount",
    value: function () {
      var _getProtoRevAdminAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var _params,
          endpoint,
          _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _params = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
              endpoint = "osmosis/v14/protorev/admin_account";
              _context8.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context8.abrupt("return", _context8.sent);
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getProtoRevAdminAccount() {
        return _getProtoRevAdminAccount.apply(this, arguments);
      }
      return getProtoRevAdminAccount;
    }() /* GetProtoRevDeveloperAccount queries the developer account of the module */
  }, {
    key: "getProtoRevDeveloperAccount",
    value: function () {
      var _getProtoRevDeveloperAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        var _params,
          endpoint,
          _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _params = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
              endpoint = "osmosis/v14/protorev/developer_account";
              _context9.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context9.abrupt("return", _context9.sent);
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getProtoRevDeveloperAccount() {
        return _getProtoRevDeveloperAccount.apply(this, arguments);
      }
      return getProtoRevDeveloperAccount;
    }()
    /* GetProtoRevPoolWeights queries the weights of each pool type currently
     being used by the module */
  }, {
    key: "getProtoRevPoolWeights",
    value: function () {
      var _getProtoRevPoolWeights = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var _params,
          endpoint,
          _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _params = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
              endpoint = "osmosis/v14/protorev/pool_weights";
              _context10.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context10.abrupt("return", _context10.sent);
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getProtoRevPoolWeights() {
        return _getProtoRevPoolWeights.apply(this, arguments);
      }
      return getProtoRevPoolWeights;
    }()
    /* GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
     that can be consumed per transaction */
  }, {
    key: "getProtoRevMaxPoolPointsPerTx",
    value: function () {
      var _getProtoRevMaxPoolPointsPerTx = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        var _params,
          endpoint,
          _args11 = arguments;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _params = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {};
              endpoint = "osmosis/v14/protorev/max_pool_points_per_tx";
              _context11.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context11.abrupt("return", _context11.sent);
            case 5:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function getProtoRevMaxPoolPointsPerTx() {
        return _getProtoRevMaxPoolPointsPerTx.apply(this, arguments);
      }
      return getProtoRevMaxPoolPointsPerTx;
    }()
    /* GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
     that can consumed per block */
  }, {
    key: "getProtoRevMaxPoolPointsPerBlock",
    value: function () {
      var _getProtoRevMaxPoolPointsPerBlock = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
        var _params,
          endpoint,
          _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _params = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {};
              endpoint = "osmosis/v14/protorev/max_pool_points_per_block";
              _context12.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context12.abrupt("return", _context12.sent);
            case 5:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function getProtoRevMaxPoolPointsPerBlock() {
        return _getProtoRevMaxPoolPointsPerBlock.apply(this, arguments);
      }
      return getProtoRevMaxPoolPointsPerBlock;
    }()
    /* GetProtoRevBaseDenoms queries the base denoms that the module is currently
     utilizing for arbitrage */
  }, {
    key: "getProtoRevBaseDenoms",
    value: function () {
      var _getProtoRevBaseDenoms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
        var _params,
          endpoint,
          _args13 = arguments;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _params = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {};
              endpoint = "osmosis/v14/protorev/base_denoms";
              _context13.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context13.abrupt("return", _context13.sent);
            case 5:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function getProtoRevBaseDenoms() {
        return _getProtoRevBaseDenoms.apply(this, arguments);
      }
      return getProtoRevBaseDenoms;
    }() /* GetProtoRevEnabled queries whether the module is enabled or not */
  }, {
    key: "getProtoRevEnabled",
    value: function () {
      var _getProtoRevEnabled = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
        var _params,
          endpoint,
          _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _params = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
              endpoint = "osmosis/v14/protorev/enabled";
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
      function getProtoRevEnabled() {
        return _getProtoRevEnabled.apply(this, arguments);
      }
      return getProtoRevEnabled;
    }()
    /* GetProtoRevPool queries the pool id used via the highest liquidity method
     for arbitrage route building given a pair of denominations */
  }, {
    key: "getProtoRevPool",
    value: function () {
      var _getProtoRevPool = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.baseDenom) !== "undefined") {
                options.params.base_denom = params.baseDenom;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.otherDenom) !== "undefined") {
                options.params.other_denom = params.otherDenom;
              }
              endpoint = "osmosis/v14/protorev/pool";
              _context15.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context15.abrupt("return", _context15.sent);
            case 7:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function getProtoRevPool(_x3) {
        return _getProtoRevPool.apply(this, arguments);
      }
      return getProtoRevPool;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;