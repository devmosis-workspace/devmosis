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
    this.spotPrice = this.spotPrice.bind(this);
  }
  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "spotPrice",
    value: function () {
      var _spotPrice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
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
              endpoint = "osmosis/gamm/v2/pools/".concat(params.poolId, "/prices");
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
      function spotPrice(_x) {
        return _spotPrice.apply(this, arguments);
      }
      return spotPrice;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;