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
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
    this.geometricTwap = this.geometricTwap.bind(this);
    this.geometricTwapToNow = this.geometricTwapToNow.bind(this);
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
              endpoint = "osmosis/twap/v1beta1/Params";
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
    }() /* ArithmeticTwap */
  }, {
    key: "arithmeticTwap",
    value: function () {
      var _arithmeticTwap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.poolId) !== "undefined") {
                options.params.pool_id = params.poolId;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.baseAsset) !== "undefined") {
                options.params.base_asset = params.baseAsset;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.quoteAsset) !== "undefined") {
                options.params.quote_asset = params.quoteAsset;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.startTime) !== "undefined") {
                options.params.start_time = params.startTime;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.endTime) !== "undefined") {
                options.params.end_time = params.endTime;
              }
              endpoint = "osmosis/twap/v1beta1/ArithmeticTwap";
              _context2.next = 9;
              return this.req.get(endpoint, options);
            case 9:
              return _context2.abrupt("return", _context2.sent);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function arithmeticTwap(_x) {
        return _arithmeticTwap.apply(this, arguments);
      }
      return arithmeticTwap;
    }() /* ArithmeticTwapToNow */
  }, {
    key: "arithmeticTwapToNow",
    value: function () {
      var _arithmeticTwapToNow = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.poolId) !== "undefined") {
                options.params.pool_id = params.poolId;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.baseAsset) !== "undefined") {
                options.params.base_asset = params.baseAsset;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.quoteAsset) !== "undefined") {
                options.params.quote_asset = params.quoteAsset;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.startTime) !== "undefined") {
                options.params.start_time = params.startTime;
              }
              endpoint = "osmosis/twap/v1beta1/ArithmeticTwapToNow";
              _context3.next = 8;
              return this.req.get(endpoint, options);
            case 8:
              return _context3.abrupt("return", _context3.sent);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function arithmeticTwapToNow(_x2) {
        return _arithmeticTwapToNow.apply(this, arguments);
      }
      return arithmeticTwapToNow;
    }() /* GeometricTwap */
  }, {
    key: "geometricTwap",
    value: function () {
      var _geometricTwap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.poolId) !== "undefined") {
                options.params.pool_id = params.poolId;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.baseAsset) !== "undefined") {
                options.params.base_asset = params.baseAsset;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.quoteAsset) !== "undefined") {
                options.params.quote_asset = params.quoteAsset;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.startTime) !== "undefined") {
                options.params.start_time = params.startTime;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.endTime) !== "undefined") {
                options.params.end_time = params.endTime;
              }
              endpoint = "osmosis/twap/v1beta1/GeometricTwap";
              _context4.next = 9;
              return this.req.get(endpoint, options);
            case 9:
              return _context4.abrupt("return", _context4.sent);
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function geometricTwap(_x3) {
        return _geometricTwap.apply(this, arguments);
      }
      return geometricTwap;
    }() /* GeometricTwapToNow */
  }, {
    key: "geometricTwapToNow",
    value: function () {
      var _geometricTwapToNow = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.poolId) !== "undefined") {
                options.params.pool_id = params.poolId;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.baseAsset) !== "undefined") {
                options.params.base_asset = params.baseAsset;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.quoteAsset) !== "undefined") {
                options.params.quote_asset = params.quoteAsset;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.startTime) !== "undefined") {
                options.params.start_time = params.startTime;
              }
              endpoint = "osmosis/twap/v1beta1/GeometricTwapToNow";
              _context5.next = 8;
              return this.req.get(endpoint, options);
            case 8:
              return _context5.abrupt("return", _context5.sent);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function geometricTwapToNow(_x4) {
        return _geometricTwapToNow.apply(this, arguments);
      }
      return geometricTwapToNow;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;