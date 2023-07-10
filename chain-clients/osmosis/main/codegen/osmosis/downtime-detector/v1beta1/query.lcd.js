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
    this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
  }
  /* RecoveredSinceDowntimeOfLength */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "recoveredSinceDowntimeOfLength",
    value: function () {
      var _recoveredSinceDowntimeOfLength = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.downtime) !== "undefined") {
                options.params.downtime = params.downtime;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.recovery) !== "undefined") {
                options.params.recovery = params.recovery;
              }
              endpoint = "osmosis/downtime-detector/v1beta1/RecoveredSinceDowntimeOfLength";
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
      function recoveredSinceDowntimeOfLength(_x) {
        return _recoveredSinceDowntimeOfLength.apply(this, arguments);
      }
      return recoveredSinceDowntimeOfLength;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;