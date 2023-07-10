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
    this.gaugeIds = this.gaugeIds.bind(this);
    this.distrInfo = this.distrInfo.bind(this);
    this.params = this.params.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
    this.incentivizedPools = this.incentivizedPools.bind(this);
    this.externalIncentiveGauges = this.externalIncentiveGauges.bind(this);
  }
  /* GaugeIds takes the pool id and returns the matching gauge ids and durations */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "gaugeIds",
    value: function () {
      var _gaugeIds = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "osmosis/pool-incentives/v1beta1/gauge-ids/".concat(params.poolId);
              _context.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function gaugeIds(_x) {
        return _gaugeIds.apply(this, arguments);
      }
      return gaugeIds;
    }() /* DistrInfo returns the pool's matching gauge ids and weights. */
  }, {
    key: "distrInfo",
    value: function () {
      var _distrInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _params,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              endpoint = "osmosis/pool-incentives/v1beta1/distr_info";
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
      function distrInfo() {
        return _distrInfo.apply(this, arguments);
      }
      return distrInfo;
    }() /* Params returns pool incentives params. */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _params,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              endpoint = "osmosis/pool-incentives/v1beta1/params";
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
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }() /* LockableDurations returns lock durations for pools. */
  }, {
    key: "lockableDurations",
    value: function () {
      var _lockableDurations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _params,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              endpoint = "osmosis/pool-incentives/v1beta1/lockable_durations";
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
      function lockableDurations() {
        return _lockableDurations.apply(this, arguments);
      }
      return lockableDurations;
    }() /* IncentivizedPools returns currently incentivized pools */
  }, {
    key: "incentivizedPools",
    value: function () {
      var _incentivizedPools = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _params,
          endpoint,
          _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              endpoint = "osmosis/pool-incentives/v1beta1/incentivized_pools";
              _context5.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context5.abrupt("return", _context5.sent);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function incentivizedPools() {
        return _incentivizedPools.apply(this, arguments);
      }
      return incentivizedPools;
    }() /* ExternalIncentiveGauges returns external incentive gauges. */
  }, {
    key: "externalIncentiveGauges",
    value: function () {
      var _externalIncentiveGauges = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _params,
          endpoint,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
              endpoint = "osmosis/pool-incentives/v1beta1/external_incentive_gauges";
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
      function externalIncentiveGauges() {
        return _externalIncentiveGauges.apply(this, arguments);
      }
      return externalIncentiveGauges;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;