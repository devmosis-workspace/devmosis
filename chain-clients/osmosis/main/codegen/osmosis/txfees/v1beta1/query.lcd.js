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
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.denomPoolId = this.denomPoolId.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }
  /* FeeTokens returns a list of all the whitelisted fee tokens and their
   corresponding pools. It does not include the BaseDenom, which has its own
   query endpoint */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "feeTokens",
    value: function () {
      var _feeTokens = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "osmosis/txfees/v1beta1/fee_tokens";
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
      function feeTokens() {
        return _feeTokens.apply(this, arguments);
      }
      return feeTokens;
    }() /* DenomSpotPrice returns all spot prices by each registered token denom. */
  }, {
    key: "denomSpotPrice",
    value: function () {
      var _denomSpotPrice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
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
              endpoint = "osmosis/txfees/v1beta1/spot_price_by_denom";
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
      function denomSpotPrice(_x) {
        return _denomSpotPrice.apply(this, arguments);
      }
      return denomSpotPrice;
    }() /* Returns the poolID for a specified denom input. */
  }, {
    key: "denomPoolId",
    value: function () {
      var _denomPoolId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "osmosis/txfees/v1beta1/denom_pool_id/".concat(params.denom);
              _context3.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function denomPoolId(_x2) {
        return _denomPoolId.apply(this, arguments);
      }
      return denomPoolId;
    }() /* Returns a list of all base denom tokens and their corresponding pools. */
  }, {
    key: "baseDenom",
    value: function () {
      var _baseDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _params,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              endpoint = "osmosis/txfees/v1beta1/base_denom";
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
      function baseDenom() {
        return _baseDenom.apply(this, arguments);
      }
      return baseDenom;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;