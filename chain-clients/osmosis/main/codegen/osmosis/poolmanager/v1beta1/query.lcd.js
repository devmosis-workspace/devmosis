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
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
  }
  /* Params */
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
              endpoint = "osmosis/poolmanager/v1beta1/Params";
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
    }() /* Estimates swap amount out given in. */
  }, {
    key: "estimateSwapExactAmountIn",
    value: function () {
      var _estimateSwapExactAmountIn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
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
              _context2.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context2.abrupt("return", _context2.sent);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function estimateSwapExactAmountIn(_x) {
        return _estimateSwapExactAmountIn.apply(this, arguments);
      }
      return estimateSwapExactAmountIn;
    }() /* Estimates swap amount in given out. */
  }, {
    key: "estimateSwapExactAmountOut",
    value: function () {
      var _estimateSwapExactAmountOut = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
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
              _context3.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context3.abrupt("return", _context3.sent);
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function estimateSwapExactAmountOut(_x2) {
        return _estimateSwapExactAmountOut.apply(this, arguments);
      }
      return estimateSwapExactAmountOut;
    }() /* NumPools */
  }, {
    key: "numPools",
    value: function () {
      var _numPools = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _params,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              endpoint = "osmosis/poolmanager/v1beta1/num_pools";
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
      function numPools() {
        return _numPools.apply(this, arguments);
      }
      return numPools;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;