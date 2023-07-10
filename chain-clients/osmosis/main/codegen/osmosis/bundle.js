"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.osmosis = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _0 = _interopRequireWildcard(require("./accum/v1beta1/accum"));
var _1 = _interopRequireWildcard(require("./downtime-detector/v1beta1/downtime_duration"));
var _2 = _interopRequireWildcard(require("./downtime-detector/v1beta1/genesis"));
var _3 = _interopRequireWildcard(require("./downtime-detector/v1beta1/query"));
var _4 = _interopRequireWildcard(require("./epochs/genesis"));
var _5 = _interopRequireWildcard(require("./epochs/query"));
var _6 = _interopRequireWildcard(require("./gamm/pool-models/balancer/balancerPool"));
var _7 = _interopRequireWildcard(require("./gamm/v1beta1/genesis"));
var _8 = _interopRequireWildcard(require("./gamm/v1beta1/query"));
var _9 = _interopRequireWildcard(require("./gamm/v1beta1/tx"));
var _10 = _interopRequireWildcard(require("./gamm/pool-models/balancer/tx/tx"));
var _11 = _interopRequireWildcard(require("./gamm/pool-models/stableswap/stableswap_pool"));
var _12 = _interopRequireWildcard(require("./gamm/pool-models/stableswap/tx"));
var _13 = _interopRequireWildcard(require("./gamm/v2/query"));
var _14 = _interopRequireWildcard(require("./ibc-rate-limit/v1beta1/genesis"));
var _15 = _interopRequireWildcard(require("./ibc-rate-limit/v1beta1/params"));
var _16 = _interopRequireWildcard(require("./ibc-rate-limit/v1beta1/query"));
var _17 = _interopRequireWildcard(require("./incentives/gauge"));
var _18 = _interopRequireWildcard(require("./incentives/genesis"));
var _19 = _interopRequireWildcard(require("./incentives/params"));
var _20 = _interopRequireWildcard(require("./incentives/query"));
var _21 = _interopRequireWildcard(require("./incentives/tx"));
var _22 = _interopRequireWildcard(require("./lockup/genesis"));
var _23 = _interopRequireWildcard(require("./lockup/lock"));
var _24 = _interopRequireWildcard(require("./lockup/params"));
var _25 = _interopRequireWildcard(require("./lockup/query"));
var _26 = _interopRequireWildcard(require("./lockup/tx"));
var _27 = _interopRequireWildcard(require("./mint/v1beta1/genesis"));
var _28 = _interopRequireWildcard(require("./mint/v1beta1/mint"));
var _29 = _interopRequireWildcard(require("./mint/v1beta1/query"));
var _30 = _interopRequireWildcard(require("./pool-incentives/v1beta1/genesis"));
var _31 = _interopRequireWildcard(require("./pool-incentives/v1beta1/gov"));
var _32 = _interopRequireWildcard(require("./pool-incentives/v1beta1/incentives"));
var _33 = _interopRequireWildcard(require("./pool-incentives/v1beta1/query"));
var _34 = _interopRequireWildcard(require("./poolmanager/v1beta1/genesis"));
var _35 = _interopRequireWildcard(require("./poolmanager/v1beta1/module_route"));
var _36 = _interopRequireWildcard(require("./poolmanager/v1beta1/query"));
var _37 = _interopRequireWildcard(require("./poolmanager/v1beta1/swap_route"));
var _38 = _interopRequireWildcard(require("./poolmanager/v1beta1/tx"));
var _39 = _interopRequireWildcard(require("./protorev/v1beta1/genesis"));
var _40 = _interopRequireWildcard(require("./protorev/v1beta1/gov"));
var _41 = _interopRequireWildcard(require("./protorev/v1beta1/params"));
var _42 = _interopRequireWildcard(require("./protorev/v1beta1/protorev"));
var _43 = _interopRequireWildcard(require("./protorev/v1beta1/query"));
var _44 = _interopRequireWildcard(require("./protorev/v1beta1/tx"));
var _45 = _interopRequireWildcard(require("./sumtree/v1beta1/tree"));
var _46 = _interopRequireWildcard(require("./superfluid/genesis"));
var _47 = _interopRequireWildcard(require("./superfluid/params"));
var _48 = _interopRequireWildcard(require("./superfluid/query"));
var _49 = _interopRequireWildcard(require("./superfluid/superfluid"));
var _50 = _interopRequireWildcard(require("./superfluid/tx"));
var _51 = _interopRequireWildcard(require("./tokenfactory/v1beta1/authorityMetadata"));
var _52 = _interopRequireWildcard(require("./tokenfactory/v1beta1/genesis"));
var _53 = _interopRequireWildcard(require("./tokenfactory/v1beta1/params"));
var _54 = _interopRequireWildcard(require("./tokenfactory/v1beta1/query"));
var _55 = _interopRequireWildcard(require("./tokenfactory/v1beta1/tx"));
var _56 = _interopRequireWildcard(require("./twap/v1beta1/genesis"));
var _57 = _interopRequireWildcard(require("./twap/v1beta1/query"));
var _58 = _interopRequireWildcard(require("./twap/v1beta1/twap_record"));
var _59 = _interopRequireWildcard(require("./txfees/v1beta1/feetoken"));
var _60 = _interopRequireWildcard(require("./txfees/v1beta1/genesis"));
var _61 = _interopRequireWildcard(require("./txfees/v1beta1/gov"));
var _62 = _interopRequireWildcard(require("./txfees/v1beta1/query"));
var _63 = _interopRequireWildcard(require("./valset-pref/v1beta1/query"));
var _64 = _interopRequireWildcard(require("./valset-pref/v1beta1/state"));
var _65 = _interopRequireWildcard(require("./valset-pref/v1beta1/tx"));
var _180 = _interopRequireWildcard(require("./gamm/pool-models/balancer/tx/tx.amino"));
var _181 = _interopRequireWildcard(require("./gamm/pool-models/stableswap/tx.amino"));
var _182 = _interopRequireWildcard(require("./gamm/v1beta1/tx.amino"));
var _183 = _interopRequireWildcard(require("./incentives/tx.amino"));
var _184 = _interopRequireWildcard(require("./lockup/tx.amino"));
var _185 = _interopRequireWildcard(require("./poolmanager/v1beta1/tx.amino"));
var _186 = _interopRequireWildcard(require("./protorev/v1beta1/tx.amino"));
var _187 = _interopRequireWildcard(require("./superfluid/tx.amino"));
var _188 = _interopRequireWildcard(require("./tokenfactory/v1beta1/tx.amino"));
var _189 = _interopRequireWildcard(require("./valset-pref/v1beta1/tx.amino"));
var _190 = _interopRequireWildcard(require("./gamm/pool-models/balancer/tx/tx.registry"));
var _191 = _interopRequireWildcard(require("./gamm/pool-models/stableswap/tx.registry"));
var _192 = _interopRequireWildcard(require("./gamm/v1beta1/tx.registry"));
var _193 = _interopRequireWildcard(require("./incentives/tx.registry"));
var _194 = _interopRequireWildcard(require("./lockup/tx.registry"));
var _195 = _interopRequireWildcard(require("./poolmanager/v1beta1/tx.registry"));
var _196 = _interopRequireWildcard(require("./protorev/v1beta1/tx.registry"));
var _197 = _interopRequireWildcard(require("./superfluid/tx.registry"));
var _198 = _interopRequireWildcard(require("./tokenfactory/v1beta1/tx.registry"));
var _199 = _interopRequireWildcard(require("./valset-pref/v1beta1/tx.registry"));
var _200 = _interopRequireWildcard(require("./downtime-detector/v1beta1/query.lcd"));
var _201 = _interopRequireWildcard(require("./epochs/query.lcd"));
var _202 = _interopRequireWildcard(require("./gamm/v1beta1/query.lcd"));
var _203 = _interopRequireWildcard(require("./gamm/v2/query.lcd"));
var _204 = _interopRequireWildcard(require("./ibc-rate-limit/v1beta1/query.lcd"));
var _205 = _interopRequireWildcard(require("./incentives/query.lcd"));
var _206 = _interopRequireWildcard(require("./lockup/query.lcd"));
var _207 = _interopRequireWildcard(require("./mint/v1beta1/query.lcd"));
var _208 = _interopRequireWildcard(require("./pool-incentives/v1beta1/query.lcd"));
var _209 = _interopRequireWildcard(require("./poolmanager/v1beta1/query.lcd"));
var _210 = _interopRequireWildcard(require("./protorev/v1beta1/query.lcd"));
var _211 = _interopRequireWildcard(require("./superfluid/query.lcd"));
var _212 = _interopRequireWildcard(require("./tokenfactory/v1beta1/query.lcd"));
var _213 = _interopRequireWildcard(require("./twap/v1beta1/query.lcd"));
var _214 = _interopRequireWildcard(require("./txfees/v1beta1/query.lcd"));
var _215 = _interopRequireWildcard(require("./valset-pref/v1beta1/query.lcd"));
var _262 = _interopRequireWildcard(require("./lcd"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var osmosis;
exports.osmosis = osmosis;
(function (_osmosis) {
  var accum;
  (function (_accum) {
    var v1beta1 = _accum.v1beta1 = _objectSpread({}, _0);
  })(accum || (accum = _osmosis.accum || (_osmosis.accum = {})));
  var downtimedetector;
  (function (_downtimedetector) {
    var v1beta1 = _downtimedetector.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _1), _2), _3), _200);
  })(downtimedetector || (downtimedetector = _osmosis.downtimedetector || (_osmosis.downtimedetector = {})));
  var epochs;
  (function (_epochs) {
    var v1beta1 = _epochs.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _4), _5), _201);
  })(epochs || (epochs = _osmosis.epochs || (_osmosis.epochs = {})));
  var gamm;
  (function (_gamm) {
    var v1beta1 = _gamm.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _6), _7), _8), _9), _182), _192), _202);
    var poolmodels;
    (function (_poolmodels) {
      var balancer;
      (function (_balancer) {
        var v1beta1 = _balancer.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _10), _180), _190);
      })(balancer || (balancer = _poolmodels.balancer || (_poolmodels.balancer = {})));
      var stableswap;
      (function (_stableswap) {
        var v1beta1 = _stableswap.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _11), _12), _181), _191);
      })(stableswap || (stableswap = _poolmodels.stableswap || (_poolmodels.stableswap = {})));
    })(poolmodels || (poolmodels = _gamm.poolmodels || (_gamm.poolmodels = {})));
    var v2 = _gamm.v2 = _objectSpread(_objectSpread({}, _13), _203);
  })(gamm || (gamm = _osmosis.gamm || (_osmosis.gamm = {})));
  var ibcratelimit;
  (function (_ibcratelimit) {
    var v1beta1 = _ibcratelimit.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _14), _15), _16), _204);
  })(ibcratelimit || (ibcratelimit = _osmosis.ibcratelimit || (_osmosis.ibcratelimit = {})));
  var incentives = _osmosis.incentives = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _17), _18), _19), _20), _21), _183), _193), _205);
  var lockup = _osmosis.lockup = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _22), _23), _24), _25), _26), _184), _194), _206);
  var mint;
  (function (_mint) {
    var v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _27), _28), _29), _207);
  })(mint || (mint = _osmosis.mint || (_osmosis.mint = {})));
  var poolincentives;
  (function (_poolincentives) {
    var v1beta1 = _poolincentives.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _30), _31), _32), _33), _208);
  })(poolincentives || (poolincentives = _osmosis.poolincentives || (_osmosis.poolincentives = {})));
  var poolmanager;
  (function (_poolmanager) {
    var v1beta1 = _poolmanager.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _34), _35), _36), _37), _38), _185), _195), _209);
  })(poolmanager || (poolmanager = _osmosis.poolmanager || (_osmosis.poolmanager = {})));
  var protorev;
  (function (_protorev) {
    var v1beta1 = _protorev.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _39), _40), _41), _42), _43), _44), _186), _196), _210);
  })(protorev || (protorev = _osmosis.protorev || (_osmosis.protorev = {})));
  var store;
  (function (_store) {
    var v1beta1 = _store.v1beta1 = _objectSpread({}, _45);
  })(store || (store = _osmosis.store || (_osmosis.store = {})));
  var superfluid = _osmosis.superfluid = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _46), _47), _48), _49), _50), _187), _197), _211);
  var tokenfactory;
  (function (_tokenfactory) {
    var v1beta1 = _tokenfactory.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _51), _52), _53), _54), _55), _188), _198), _212);
  })(tokenfactory || (tokenfactory = _osmosis.tokenfactory || (_osmosis.tokenfactory = {})));
  var twap;
  (function (_twap) {
    var v1beta1 = _twap.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _56), _57), _58), _213);
  })(twap || (twap = _osmosis.twap || (_osmosis.twap = {})));
  var txfees;
  (function (_txfees) {
    var v1beta1 = _txfees.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _59), _60), _61), _62), _214);
  })(txfees || (txfees = _osmosis.txfees || (_osmosis.txfees = {})));
  var valsetpref;
  (function (_valsetpref) {
    var v1beta1 = _valsetpref.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _63), _64), _65), _189), _199), _215);
  })(valsetpref || (valsetpref = _osmosis.valsetpref || (_osmosis.valsetpref = {})));
  var ClientFactory = _osmosis.ClientFactory = _objectSpread({}, _262);
})(osmosis || (exports.osmosis = osmosis = {}));