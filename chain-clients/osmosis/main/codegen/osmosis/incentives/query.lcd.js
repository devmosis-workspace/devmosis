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
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.gaugeByID = this.gaugeByID.bind(this);
    this.gauges = this.gauges.bind(this);
    this.activeGauges = this.activeGauges.bind(this);
    this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
    this.upcomingGauges = this.upcomingGauges.bind(this);
    this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
    this.rewardsEst = this.rewardsEst.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
  }
  /* ModuleToDistributeCoins returns coins that are going to be distributed */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "moduleToDistributeCoins",
    value: function () {
      var _moduleToDistributeCoins = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "osmosis/incentives/v1beta1/module_to_distribute_coins";
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
      function moduleToDistributeCoins() {
        return _moduleToDistributeCoins.apply(this, arguments);
      }
      return moduleToDistributeCoins;
    }() /* GaugeByID returns gauges by their respective ID */
  }, {
    key: "gaugeByID",
    value: function () {
      var _gaugeByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "osmosis/incentives/v1beta1/gauge_by_id/".concat(params.id);
              _context2.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function gaugeByID(_x) {
        return _gaugeByID.apply(this, arguments);
      }
      return gaugeByID;
    }() /* Gauges returns both upcoming and active gauges */
  }, {
    key: "gauges",
    value: function () {
      var _gauges = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var params,
          options,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "osmosis/incentives/v1beta1/gauges";
              _context3.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context3.abrupt("return", _context3.sent);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function gauges() {
        return _gauges.apply(this, arguments);
      }
      return gauges;
    }() /* ActiveGauges returns active gauges */
  }, {
    key: "activeGauges",
    value: function () {
      var _activeGauges = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var params,
          options,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "osmosis/incentives/v1beta1/active_gauges";
              _context4.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context4.abrupt("return", _context4.sent);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function activeGauges() {
        return _activeGauges.apply(this, arguments);
      }
      return activeGauges;
    }() /* ActiveGaugesPerDenom returns active gauges by denom */
  }, {
    key: "activeGaugesPerDenom",
    value: function () {
      var _activeGaugesPerDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "osmosis/incentives/v1beta1/active_gauges_per_denom";
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
      function activeGaugesPerDenom(_x2) {
        return _activeGaugesPerDenom.apply(this, arguments);
      }
      return activeGaugesPerDenom;
    }() /* Returns scheduled gauges that have not yet occured */
  }, {
    key: "upcomingGauges",
    value: function () {
      var _upcomingGauges = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var params,
          options,
          endpoint,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "osmosis/incentives/v1beta1/upcoming_gauges";
              _context6.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context6.abrupt("return", _context6.sent);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function upcomingGauges() {
        return _upcomingGauges.apply(this, arguments);
      }
      return upcomingGauges;
    }()
    /* UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     by denom */
  }, {
    key: "upcomingGaugesPerDenom",
    value: function () {
      var _upcomingGaugesPerDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "osmosis/incentives/v1beta1/upcoming_gauges_per_denom";
              _context7.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context7.abrupt("return", _context7.sent);
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function upcomingGaugesPerDenom(_x3) {
        return _upcomingGaugesPerDenom.apply(this, arguments);
      }
      return upcomingGaugesPerDenom;
    }()
    /* RewardsEst returns an estimate of the rewards from now until a specified
     time in the future The querier either provides an address or a set of locks
     for which they want to find the associated rewards */
  }, {
    key: "rewardsEst",
    value: function () {
      var _rewardsEst = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.lockIds) !== "undefined") {
                options.params.lock_ids = params.lockIds;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.endEpoch) !== "undefined") {
                options.params.end_epoch = params.endEpoch;
              }
              endpoint = "osmosis/incentives/v1beta1/rewards_est/".concat(params.owner);
              _context8.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context8.abrupt("return", _context8.sent);
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function rewardsEst(_x4) {
        return _rewardsEst.apply(this, arguments);
      }
      return rewardsEst;
    }()
    /* LockableDurations returns lockable durations that are valid to distribute
     incentives for */
  }, {
    key: "lockableDurations",
    value: function () {
      var _lockableDurations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        var _params,
          endpoint,
          _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _params = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
              endpoint = "osmosis/incentives/v1beta1/lockable_durations";
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
      function lockableDurations() {
        return _lockableDurations.apply(this, arguments);
      }
      return lockableDurations;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;