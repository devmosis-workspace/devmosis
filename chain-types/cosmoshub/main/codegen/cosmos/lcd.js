"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLCDClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _lcd = require("@osmonauts/lcd");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createLCDClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var restEndpoint, requestClient;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          restEndpoint = _ref.restEndpoint;
          requestClient = new _lcd.LCDClient({
            restEndpoint: restEndpoint
          });
          _context.next = 4;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./auth/v1beta1/query.lcd"));
          });
        case 4:
          _context.t0 = _context.sent.LCDQueryClient;
          _context.t1 = {
            requestClient: requestClient
          };
          _context.t2 = new _context.t0(_context.t1);
          _context.t3 = {
            v1beta1: _context.t2
          };
          _context.next = 10;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./authz/v1beta1/query.lcd"));
          });
        case 10:
          _context.t4 = _context.sent.LCDQueryClient;
          _context.t5 = {
            requestClient: requestClient
          };
          _context.t6 = new _context.t4(_context.t5);
          _context.t7 = {
            v1beta1: _context.t6
          };
          _context.next = 16;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./bank/v1beta1/query.lcd"));
          });
        case 16:
          _context.t8 = _context.sent.LCDQueryClient;
          _context.t9 = {
            requestClient: requestClient
          };
          _context.t10 = new _context.t8(_context.t9);
          _context.t11 = {
            v1beta1: _context.t10
          };
          _context.next = 22;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./base/tendermint/v1beta1/query.lcd"));
          });
        case 22:
          _context.t12 = _context.sent.LCDQueryClient;
          _context.t13 = {
            requestClient: requestClient
          };
          _context.t14 = new _context.t12(_context.t13);
          _context.t15 = {
            v1beta1: _context.t14
          };
          _context.t16 = {
            tendermint: _context.t15
          };
          _context.next = 29;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./distribution/v1beta1/query.lcd"));
          });
        case 29:
          _context.t17 = _context.sent.LCDQueryClient;
          _context.t18 = {
            requestClient: requestClient
          };
          _context.t19 = new _context.t17(_context.t18);
          _context.t20 = {
            v1beta1: _context.t19
          };
          _context.next = 35;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./evidence/v1beta1/query.lcd"));
          });
        case 35:
          _context.t21 = _context.sent.LCDQueryClient;
          _context.t22 = {
            requestClient: requestClient
          };
          _context.t23 = new _context.t21(_context.t22);
          _context.t24 = {
            v1beta1: _context.t23
          };
          _context.next = 41;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./feegrant/v1beta1/query.lcd"));
          });
        case 41:
          _context.t25 = _context.sent.LCDQueryClient;
          _context.t26 = {
            requestClient: requestClient
          };
          _context.t27 = new _context.t25(_context.t26);
          _context.t28 = {
            v1beta1: _context.t27
          };
          _context.next = 47;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./gov/v1beta1/query.lcd"));
          });
        case 47:
          _context.t29 = _context.sent.LCDQueryClient;
          _context.t30 = {
            requestClient: requestClient
          };
          _context.t31 = new _context.t29(_context.t30);
          _context.t32 = {
            v1beta1: _context.t31
          };
          _context.next = 53;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./mint/v1beta1/query.lcd"));
          });
        case 53:
          _context.t33 = _context.sent.LCDQueryClient;
          _context.t34 = {
            requestClient: requestClient
          };
          _context.t35 = new _context.t33(_context.t34);
          _context.t36 = {
            v1beta1: _context.t35
          };
          _context.next = 59;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./params/v1beta1/query.lcd"));
          });
        case 59:
          _context.t37 = _context.sent.LCDQueryClient;
          _context.t38 = {
            requestClient: requestClient
          };
          _context.t39 = new _context.t37(_context.t38);
          _context.t40 = {
            v1beta1: _context.t39
          };
          _context.next = 65;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./slashing/v1beta1/query.lcd"));
          });
        case 65:
          _context.t41 = _context.sent.LCDQueryClient;
          _context.t42 = {
            requestClient: requestClient
          };
          _context.t43 = new _context.t41(_context.t42);
          _context.t44 = {
            v1beta1: _context.t43
          };
          _context.next = 71;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./staking/v1beta1/query.lcd"));
          });
        case 71:
          _context.t45 = _context.sent.LCDQueryClient;
          _context.t46 = {
            requestClient: requestClient
          };
          _context.t47 = new _context.t45(_context.t46);
          _context.t48 = {
            v1beta1: _context.t47
          };
          _context.next = 77;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./tx/v1beta1/service.lcd"));
          });
        case 77:
          _context.t49 = _context.sent.LCDQueryClient;
          _context.t50 = {
            requestClient: requestClient
          };
          _context.t51 = new _context.t49(_context.t50);
          _context.t52 = {
            v1beta1: _context.t51
          };
          _context.next = 83;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./upgrade/v1beta1/query.lcd"));
          });
        case 83:
          _context.t53 = _context.sent.LCDQueryClient;
          _context.t54 = {
            requestClient: requestClient
          };
          _context.t55 = new _context.t53(_context.t54);
          _context.t56 = {
            v1beta1: _context.t55
          };
          _context.t57 = {
            auth: _context.t3,
            authz: _context.t7,
            bank: _context.t11,
            base: _context.t16,
            distribution: _context.t20,
            evidence: _context.t24,
            feegrant: _context.t28,
            gov: _context.t32,
            mint: _context.t36,
            params: _context.t40,
            slashing: _context.t44,
            staking: _context.t48,
            tx: _context.t52,
            upgrade: _context.t56
          };
          return _context.abrupt("return", {
            cosmos: _context.t57
          });
        case 89:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createLCDClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createLCDClient = createLCDClient;