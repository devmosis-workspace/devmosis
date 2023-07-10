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
            return _interopRequireWildcard(require("./downtime-detector/v1beta1/query.lcd"));
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
            return _interopRequireWildcard(require("./epochs/query.lcd"));
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
            return _interopRequireWildcard(require("./gamm/v1beta1/query.lcd"));
          });
        case 16:
          _context.t8 = _context.sent.LCDQueryClient;
          _context.t9 = {
            requestClient: requestClient
          };
          _context.t10 = new _context.t8(_context.t9);
          _context.next = 21;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./gamm/v2/query.lcd"));
          });
        case 21:
          _context.t11 = _context.sent.LCDQueryClient;
          _context.t12 = {
            requestClient: requestClient
          };
          _context.t13 = new _context.t11(_context.t12);
          _context.t14 = {
            v1beta1: _context.t10,
            v2: _context.t13
          };
          _context.next = 27;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./ibc-rate-limit/v1beta1/query.lcd"));
          });
        case 27:
          _context.t15 = _context.sent.LCDQueryClient;
          _context.t16 = {
            requestClient: requestClient
          };
          _context.t17 = new _context.t15(_context.t16);
          _context.t18 = {
            v1beta1: _context.t17
          };
          _context.next = 33;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./incentives/query.lcd"));
          });
        case 33:
          _context.t19 = _context.sent.LCDQueryClient;
          _context.t20 = {
            requestClient: requestClient
          };
          _context.t21 = new _context.t19(_context.t20);
          _context.next = 38;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./lockup/query.lcd"));
          });
        case 38:
          _context.t22 = _context.sent.LCDQueryClient;
          _context.t23 = {
            requestClient: requestClient
          };
          _context.t24 = new _context.t22(_context.t23);
          _context.next = 43;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./mint/v1beta1/query.lcd"));
          });
        case 43:
          _context.t25 = _context.sent.LCDQueryClient;
          _context.t26 = {
            requestClient: requestClient
          };
          _context.t27 = new _context.t25(_context.t26);
          _context.t28 = {
            v1beta1: _context.t27
          };
          _context.next = 49;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./pool-incentives/v1beta1/query.lcd"));
          });
        case 49:
          _context.t29 = _context.sent.LCDQueryClient;
          _context.t30 = {
            requestClient: requestClient
          };
          _context.t31 = new _context.t29(_context.t30);
          _context.t32 = {
            v1beta1: _context.t31
          };
          _context.next = 55;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./poolmanager/v1beta1/query.lcd"));
          });
        case 55:
          _context.t33 = _context.sent.LCDQueryClient;
          _context.t34 = {
            requestClient: requestClient
          };
          _context.t35 = new _context.t33(_context.t34);
          _context.t36 = {
            v1beta1: _context.t35
          };
          _context.next = 61;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./protorev/v1beta1/query.lcd"));
          });
        case 61:
          _context.t37 = _context.sent.LCDQueryClient;
          _context.t38 = {
            requestClient: requestClient
          };
          _context.t39 = new _context.t37(_context.t38);
          _context.t40 = {
            v1beta1: _context.t39
          };
          _context.next = 67;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./superfluid/query.lcd"));
          });
        case 67:
          _context.t41 = _context.sent.LCDQueryClient;
          _context.t42 = {
            requestClient: requestClient
          };
          _context.t43 = new _context.t41(_context.t42);
          _context.next = 72;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./tokenfactory/v1beta1/query.lcd"));
          });
        case 72:
          _context.t44 = _context.sent.LCDQueryClient;
          _context.t45 = {
            requestClient: requestClient
          };
          _context.t46 = new _context.t44(_context.t45);
          _context.t47 = {
            v1beta1: _context.t46
          };
          _context.next = 78;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./twap/v1beta1/query.lcd"));
          });
        case 78:
          _context.t48 = _context.sent.LCDQueryClient;
          _context.t49 = {
            requestClient: requestClient
          };
          _context.t50 = new _context.t48(_context.t49);
          _context.t51 = {
            v1beta1: _context.t50
          };
          _context.next = 84;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./txfees/v1beta1/query.lcd"));
          });
        case 84:
          _context.t52 = _context.sent.LCDQueryClient;
          _context.t53 = {
            requestClient: requestClient
          };
          _context.t54 = new _context.t52(_context.t53);
          _context.t55 = {
            v1beta1: _context.t54
          };
          _context.next = 90;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./valset-pref/v1beta1/query.lcd"));
          });
        case 90:
          _context.t56 = _context.sent.LCDQueryClient;
          _context.t57 = {
            requestClient: requestClient
          };
          _context.t58 = new _context.t56(_context.t57);
          _context.t59 = {
            v1beta1: _context.t58
          };
          _context.t60 = {
            downtimedetector: _context.t3,
            epochs: _context.t7,
            gamm: _context.t14,
            ibcratelimit: _context.t18,
            incentives: _context.t21,
            lockup: _context.t24,
            mint: _context.t28,
            poolincentives: _context.t32,
            poolmanager: _context.t36,
            protorev: _context.t40,
            superfluid: _context.t43,
            tokenfactory: _context.t47,
            twap: _context.t51,
            txfees: _context.t55,
            valsetpref: _context.t59
          };
          _context.next = 97;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/auth/v1beta1/query.lcd"));
          });
        case 97:
          _context.t61 = _context.sent.LCDQueryClient;
          _context.t62 = {
            requestClient: requestClient
          };
          _context.t63 = new _context.t61(_context.t62);
          _context.t64 = {
            v1beta1: _context.t63
          };
          _context.next = 103;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/authz/v1beta1/query.lcd"));
          });
        case 103:
          _context.t65 = _context.sent.LCDQueryClient;
          _context.t66 = {
            requestClient: requestClient
          };
          _context.t67 = new _context.t65(_context.t66);
          _context.t68 = {
            v1beta1: _context.t67
          };
          _context.next = 109;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/query.lcd"));
          });
        case 109:
          _context.t69 = _context.sent.LCDQueryClient;
          _context.t70 = {
            requestClient: requestClient
          };
          _context.t71 = new _context.t69(_context.t70);
          _context.t72 = {
            v1beta1: _context.t71
          };
          _context.next = 115;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/base/node/v1beta1/query.lcd"));
          });
        case 115:
          _context.t73 = _context.sent.LCDQueryClient;
          _context.t74 = {
            requestClient: requestClient
          };
          _context.t75 = new _context.t73(_context.t74);
          _context.t76 = {
            v1beta1: _context.t75
          };
          _context.next = 121;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/base/tendermint/v1beta1/query.lcd"));
          });
        case 121:
          _context.t77 = _context.sent.LCDQueryClient;
          _context.t78 = {
            requestClient: requestClient
          };
          _context.t79 = new _context.t77(_context.t78);
          _context.t80 = {
            v1beta1: _context.t79
          };
          _context.t81 = {
            node: _context.t76,
            tendermint: _context.t80
          };
          _context.next = 128;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/query.lcd"));
          });
        case 128:
          _context.t82 = _context.sent.LCDQueryClient;
          _context.t83 = {
            requestClient: requestClient
          };
          _context.t84 = new _context.t82(_context.t83);
          _context.t85 = {
            v1beta1: _context.t84
          };
          _context.next = 134;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/query.lcd"));
          });
        case 134:
          _context.t86 = _context.sent.LCDQueryClient;
          _context.t87 = {
            requestClient: requestClient
          };
          _context.t88 = new _context.t86(_context.t87);
          _context.t89 = {
            v1beta1: _context.t88
          };
          _context.next = 140;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/query.lcd"));
          });
        case 140:
          _context.t90 = _context.sent.LCDQueryClient;
          _context.t91 = {
            requestClient: requestClient
          };
          _context.t92 = new _context.t90(_context.t91);
          _context.t93 = {
            v1beta1: _context.t92
          };
          _context.next = 146;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1/query.lcd"));
          });
        case 146:
          _context.t94 = _context.sent.LCDQueryClient;
          _context.t95 = {
            requestClient: requestClient
          };
          _context.t96 = new _context.t94(_context.t95);
          _context.next = 151;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/query.lcd"));
          });
        case 151:
          _context.t97 = _context.sent.LCDQueryClient;
          _context.t98 = {
            requestClient: requestClient
          };
          _context.t99 = new _context.t97(_context.t98);
          _context.t100 = {
            v1: _context.t96,
            v1beta1: _context.t99
          };
          _context.next = 157;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/group/v1/query.lcd"));
          });
        case 157:
          _context.t101 = _context.sent.LCDQueryClient;
          _context.t102 = {
            requestClient: requestClient
          };
          _context.t103 = new _context.t101(_context.t102);
          _context.t104 = {
            v1: _context.t103
          };
          _context.next = 163;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/mint/v1beta1/query.lcd"));
          });
        case 163:
          _context.t105 = _context.sent.LCDQueryClient;
          _context.t106 = {
            requestClient: requestClient
          };
          _context.t107 = new _context.t105(_context.t106);
          _context.t108 = {
            v1beta1: _context.t107
          };
          _context.next = 169;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/nft/v1beta1/query.lcd"));
          });
        case 169:
          _context.t109 = _context.sent.LCDQueryClient;
          _context.t110 = {
            requestClient: requestClient
          };
          _context.t111 = new _context.t109(_context.t110);
          _context.t112 = {
            v1beta1: _context.t111
          };
          _context.next = 175;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/params/v1beta1/query.lcd"));
          });
        case 175:
          _context.t113 = _context.sent.LCDQueryClient;
          _context.t114 = {
            requestClient: requestClient
          };
          _context.t115 = new _context.t113(_context.t114);
          _context.t116 = {
            v1beta1: _context.t115
          };
          _context.next = 181;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/query.lcd"));
          });
        case 181:
          _context.t117 = _context.sent.LCDQueryClient;
          _context.t118 = {
            requestClient: requestClient
          };
          _context.t119 = new _context.t117(_context.t118);
          _context.t120 = {
            v1beta1: _context.t119
          };
          _context.next = 187;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/query.lcd"));
          });
        case 187:
          _context.t121 = _context.sent.LCDQueryClient;
          _context.t122 = {
            requestClient: requestClient
          };
          _context.t123 = new _context.t121(_context.t122);
          _context.t124 = {
            v1beta1: _context.t123
          };
          _context.next = 193;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/tx/v1beta1/service.lcd"));
          });
        case 193:
          _context.t125 = _context.sent.LCDQueryClient;
          _context.t126 = {
            requestClient: requestClient
          };
          _context.t127 = new _context.t125(_context.t126);
          _context.t128 = {
            v1beta1: _context.t127
          };
          _context.next = 199;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/query.lcd"));
          });
        case 199:
          _context.t129 = _context.sent.LCDQueryClient;
          _context.t130 = {
            requestClient: requestClient
          };
          _context.t131 = new _context.t129(_context.t130);
          _context.t132 = {
            v1beta1: _context.t131
          };
          _context.t133 = {
            auth: _context.t64,
            authz: _context.t68,
            bank: _context.t72,
            base: _context.t81,
            distribution: _context.t85,
            evidence: _context.t89,
            feegrant: _context.t93,
            gov: _context.t100,
            group: _context.t104,
            mint: _context.t108,
            nft: _context.t112,
            params: _context.t116,
            slashing: _context.t120,
            staking: _context.t124,
            tx: _context.t128,
            upgrade: _context.t132
          };
          return _context.abrupt("return", {
            osmosis: _context.t60,
            cosmos: _context.t133
          });
        case 205:
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