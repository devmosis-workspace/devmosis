import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _0 from "./accum/v1beta1/accum";
import * as _1 from "./downtime-detector/v1beta1/downtime_duration";
import * as _2 from "./downtime-detector/v1beta1/genesis";
import * as _3 from "./downtime-detector/v1beta1/query";
import * as _4 from "./epochs/genesis";
import * as _5 from "./epochs/query";
import * as _6 from "./gamm/pool-models/balancer/balancerPool";
import * as _7 from "./gamm/v1beta1/genesis";
import * as _8 from "./gamm/v1beta1/query";
import * as _9 from "./gamm/v1beta1/tx";
import * as _10 from "./gamm/pool-models/balancer/tx/tx";
import * as _11 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _12 from "./gamm/pool-models/stableswap/tx";
import * as _13 from "./gamm/v2/query";
import * as _14 from "./ibc-rate-limit/v1beta1/genesis";
import * as _15 from "./ibc-rate-limit/v1beta1/params";
import * as _16 from "./ibc-rate-limit/v1beta1/query";
import * as _17 from "./incentives/gauge";
import * as _18 from "./incentives/genesis";
import * as _19 from "./incentives/params";
import * as _20 from "./incentives/query";
import * as _21 from "./incentives/tx";
import * as _22 from "./lockup/genesis";
import * as _23 from "./lockup/lock";
import * as _24 from "./lockup/params";
import * as _25 from "./lockup/query";
import * as _26 from "./lockup/tx";
import * as _27 from "./mint/v1beta1/genesis";
import * as _28 from "./mint/v1beta1/mint";
import * as _29 from "./mint/v1beta1/query";
import * as _30 from "./pool-incentives/v1beta1/genesis";
import * as _31 from "./pool-incentives/v1beta1/gov";
import * as _32 from "./pool-incentives/v1beta1/incentives";
import * as _33 from "./pool-incentives/v1beta1/query";
import * as _34 from "./poolmanager/v1beta1/genesis";
import * as _35 from "./poolmanager/v1beta1/module_route";
import * as _36 from "./poolmanager/v1beta1/query";
import * as _37 from "./poolmanager/v1beta1/swap_route";
import * as _38 from "./poolmanager/v1beta1/tx";
import * as _39 from "./protorev/v1beta1/genesis";
import * as _40 from "./protorev/v1beta1/gov";
import * as _41 from "./protorev/v1beta1/params";
import * as _42 from "./protorev/v1beta1/protorev";
import * as _43 from "./protorev/v1beta1/query";
import * as _44 from "./protorev/v1beta1/tx";
import * as _45 from "./sumtree/v1beta1/tree";
import * as _46 from "./superfluid/genesis";
import * as _47 from "./superfluid/params";
import * as _48 from "./superfluid/query";
import * as _49 from "./superfluid/superfluid";
import * as _50 from "./superfluid/tx";
import * as _51 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _52 from "./tokenfactory/v1beta1/genesis";
import * as _53 from "./tokenfactory/v1beta1/params";
import * as _54 from "./tokenfactory/v1beta1/query";
import * as _55 from "./tokenfactory/v1beta1/tx";
import * as _56 from "./twap/v1beta1/genesis";
import * as _57 from "./twap/v1beta1/query";
import * as _58 from "./twap/v1beta1/twap_record";
import * as _59 from "./txfees/v1beta1/feetoken";
import * as _60 from "./txfees/v1beta1/genesis";
import * as _61 from "./txfees/v1beta1/gov";
import * as _62 from "./txfees/v1beta1/query";
import * as _63 from "./valset-pref/v1beta1/query";
import * as _64 from "./valset-pref/v1beta1/state";
import * as _65 from "./valset-pref/v1beta1/tx";
import * as _180 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _181 from "./gamm/pool-models/stableswap/tx.amino";
import * as _182 from "./gamm/v1beta1/tx.amino";
import * as _183 from "./incentives/tx.amino";
import * as _184 from "./lockup/tx.amino";
import * as _185 from "./poolmanager/v1beta1/tx.amino";
import * as _186 from "./protorev/v1beta1/tx.amino";
import * as _187 from "./superfluid/tx.amino";
import * as _188 from "./tokenfactory/v1beta1/tx.amino";
import * as _189 from "./valset-pref/v1beta1/tx.amino";
import * as _190 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _191 from "./gamm/pool-models/stableswap/tx.registry";
import * as _192 from "./gamm/v1beta1/tx.registry";
import * as _193 from "./incentives/tx.registry";
import * as _194 from "./lockup/tx.registry";
import * as _195 from "./poolmanager/v1beta1/tx.registry";
import * as _196 from "./protorev/v1beta1/tx.registry";
import * as _197 from "./superfluid/tx.registry";
import * as _198 from "./tokenfactory/v1beta1/tx.registry";
import * as _199 from "./valset-pref/v1beta1/tx.registry";
import * as _200 from "./downtime-detector/v1beta1/query.lcd";
import * as _201 from "./epochs/query.lcd";
import * as _202 from "./gamm/v1beta1/query.lcd";
import * as _203 from "./gamm/v2/query.lcd";
import * as _204 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _205 from "./incentives/query.lcd";
import * as _206 from "./lockup/query.lcd";
import * as _207 from "./mint/v1beta1/query.lcd";
import * as _208 from "./pool-incentives/v1beta1/query.lcd";
import * as _209 from "./poolmanager/v1beta1/query.lcd";
import * as _210 from "./protorev/v1beta1/query.lcd";
import * as _211 from "./superfluid/query.lcd";
import * as _212 from "./tokenfactory/v1beta1/query.lcd";
import * as _213 from "./twap/v1beta1/query.lcd";
import * as _214 from "./txfees/v1beta1/query.lcd";
import * as _215 from "./valset-pref/v1beta1/query.lcd";
import * as _262 from "./lcd";
export let osmosis;
(function (_osmosis) {
  let accum;
  (function (_accum) {
    const v1beta1 = _accum.v1beta1 = _objectSpread({}, _0);
  })(accum || (accum = _osmosis.accum || (_osmosis.accum = {})));
  let downtimedetector;
  (function (_downtimedetector) {
    const v1beta1 = _downtimedetector.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _1), _2), _3), _200);
  })(downtimedetector || (downtimedetector = _osmosis.downtimedetector || (_osmosis.downtimedetector = {})));
  let epochs;
  (function (_epochs) {
    const v1beta1 = _epochs.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _4), _5), _201);
  })(epochs || (epochs = _osmosis.epochs || (_osmosis.epochs = {})));
  let gamm;
  (function (_gamm) {
    const v1beta1 = _gamm.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _6), _7), _8), _9), _182), _192), _202);
    let poolmodels;
    (function (_poolmodels) {
      let balancer;
      (function (_balancer) {
        const v1beta1 = _balancer.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _10), _180), _190);
      })(balancer || (balancer = _poolmodels.balancer || (_poolmodels.balancer = {})));
      let stableswap;
      (function (_stableswap) {
        const v1beta1 = _stableswap.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _11), _12), _181), _191);
      })(stableswap || (stableswap = _poolmodels.stableswap || (_poolmodels.stableswap = {})));
    })(poolmodels || (poolmodels = _gamm.poolmodels || (_gamm.poolmodels = {})));
    const v2 = _gamm.v2 = _objectSpread(_objectSpread({}, _13), _203);
  })(gamm || (gamm = _osmosis.gamm || (_osmosis.gamm = {})));
  let ibcratelimit;
  (function (_ibcratelimit) {
    const v1beta1 = _ibcratelimit.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _14), _15), _16), _204);
  })(ibcratelimit || (ibcratelimit = _osmosis.ibcratelimit || (_osmosis.ibcratelimit = {})));
  const incentives = _osmosis.incentives = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _17), _18), _19), _20), _21), _183), _193), _205);
  const lockup = _osmosis.lockup = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _22), _23), _24), _25), _26), _184), _194), _206);
  let mint;
  (function (_mint) {
    const v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _27), _28), _29), _207);
  })(mint || (mint = _osmosis.mint || (_osmosis.mint = {})));
  let poolincentives;
  (function (_poolincentives) {
    const v1beta1 = _poolincentives.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _30), _31), _32), _33), _208);
  })(poolincentives || (poolincentives = _osmosis.poolincentives || (_osmosis.poolincentives = {})));
  let poolmanager;
  (function (_poolmanager) {
    const v1beta1 = _poolmanager.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _34), _35), _36), _37), _38), _185), _195), _209);
  })(poolmanager || (poolmanager = _osmosis.poolmanager || (_osmosis.poolmanager = {})));
  let protorev;
  (function (_protorev) {
    const v1beta1 = _protorev.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _39), _40), _41), _42), _43), _44), _186), _196), _210);
  })(protorev || (protorev = _osmosis.protorev || (_osmosis.protorev = {})));
  let store;
  (function (_store) {
    const v1beta1 = _store.v1beta1 = _objectSpread({}, _45);
  })(store || (store = _osmosis.store || (_osmosis.store = {})));
  const superfluid = _osmosis.superfluid = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _46), _47), _48), _49), _50), _187), _197), _211);
  let tokenfactory;
  (function (_tokenfactory) {
    const v1beta1 = _tokenfactory.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _51), _52), _53), _54), _55), _188), _198), _212);
  })(tokenfactory || (tokenfactory = _osmosis.tokenfactory || (_osmosis.tokenfactory = {})));
  let twap;
  (function (_twap) {
    const v1beta1 = _twap.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _56), _57), _58), _213);
  })(twap || (twap = _osmosis.twap || (_osmosis.twap = {})));
  let txfees;
  (function (_txfees) {
    const v1beta1 = _txfees.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _59), _60), _61), _62), _214);
  })(txfees || (txfees = _osmosis.txfees || (_osmosis.txfees = {})));
  let valsetpref;
  (function (_valsetpref) {
    const v1beta1 = _valsetpref.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _63), _64), _65), _189), _199), _215);
  })(valsetpref || (valsetpref = _osmosis.valsetpref || (_osmosis.valsetpref = {})));
  const ClientFactory = _osmosis.ClientFactory = _objectSpread({}, _262);
})(osmosis || (osmosis = {}));