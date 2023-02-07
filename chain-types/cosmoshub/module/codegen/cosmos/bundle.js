import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _0 from "./auth/v1beta1/auth";
import * as _1 from "./auth/v1beta1/genesis";
import * as _2 from "./auth/v1beta1/query";
import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/reflection/v1beta1/reflection";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/snapshots/v1beta1/snapshot";
import * as _19 from "./base/store/v1beta1/commit_info";
import * as _20 from "./base/store/v1beta1/listening";
import * as _21 from "./base/tendermint/v1beta1/query";
import * as _22 from "./base/v1beta1/coin";
import * as _23 from "./capability/v1beta1/capability";
import * as _24 from "./capability/v1beta1/genesis";
import * as _25 from "./crisis/v1beta1/genesis";
import * as _26 from "./crisis/v1beta1/tx";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/multisig/keys";
import * as _29 from "./crypto/secp256k1/keys";
import * as _30 from "./crypto/secp256r1/keys";
import * as _31 from "./distribution/v1beta1/distribution";
import * as _32 from "./distribution/v1beta1/genesis";
import * as _33 from "./distribution/v1beta1/query";
import * as _34 from "./distribution/v1beta1/tx";
import * as _35 from "./evidence/v1beta1/evidence";
import * as _36 from "./evidence/v1beta1/genesis";
import * as _37 from "./evidence/v1beta1/query";
import * as _38 from "./evidence/v1beta1/tx";
import * as _39 from "./feegrant/v1beta1/feegrant";
import * as _40 from "./feegrant/v1beta1/genesis";
import * as _41 from "./feegrant/v1beta1/query";
import * as _42 from "./feegrant/v1beta1/tx";
import * as _43 from "./genutil/v1beta1/genesis";
import * as _44 from "./gov/v1beta1/genesis";
import * as _45 from "./gov/v1beta1/gov";
import * as _46 from "./gov/v1beta1/query";
import * as _47 from "./gov/v1beta1/tx";
import * as _48 from "./mint/v1beta1/genesis";
import * as _49 from "./mint/v1beta1/mint";
import * as _50 from "./mint/v1beta1/query";
import * as _51 from "./params/v1beta1/params";
import * as _52 from "./params/v1beta1/query";
import * as _53 from "./slashing/v1beta1/genesis";
import * as _54 from "./slashing/v1beta1/query";
import * as _55 from "./slashing/v1beta1/slashing";
import * as _56 from "./slashing/v1beta1/tx";
import * as _57 from "./staking/v1beta1/authz";
import * as _58 from "./staking/v1beta1/genesis";
import * as _59 from "./staking/v1beta1/query";
import * as _60 from "./staking/v1beta1/staking";
import * as _61 from "./staking/v1beta1/tx";
import * as _62 from "./tx/signing/v1beta1/signing";
import * as _63 from "./tx/v1beta1/service";
import * as _64 from "./tx/v1beta1/tx";
import * as _65 from "./upgrade/v1beta1/query";
import * as _66 from "./upgrade/v1beta1/upgrade";
import * as _67 from "./vesting/v1beta1/tx";
import * as _68 from "./vesting/v1beta1/vesting";
import * as _90 from "./authz/v1beta1/tx.amino";
import * as _91 from "./bank/v1beta1/tx.amino";
import * as _92 from "./crisis/v1beta1/tx.amino";
import * as _93 from "./distribution/v1beta1/tx.amino";
import * as _94 from "./evidence/v1beta1/tx.amino";
import * as _95 from "./feegrant/v1beta1/tx.amino";
import * as _96 from "./gov/v1beta1/tx.amino";
import * as _97 from "./slashing/v1beta1/tx.amino";
import * as _98 from "./staking/v1beta1/tx.amino";
import * as _99 from "./vesting/v1beta1/tx.amino";
import * as _100 from "./authz/v1beta1/tx.registry";
import * as _101 from "./bank/v1beta1/tx.registry";
import * as _102 from "./crisis/v1beta1/tx.registry";
import * as _103 from "./distribution/v1beta1/tx.registry";
import * as _104 from "./evidence/v1beta1/tx.registry";
import * as _105 from "./feegrant/v1beta1/tx.registry";
import * as _106 from "./gov/v1beta1/tx.registry";
import * as _107 from "./slashing/v1beta1/tx.registry";
import * as _108 from "./staking/v1beta1/tx.registry";
import * as _109 from "./vesting/v1beta1/tx.registry";
import * as _110 from "./auth/v1beta1/query.rpc.Query";
import * as _111 from "./authz/v1beta1/query.rpc.Query";
import * as _112 from "./bank/v1beta1/query.rpc.Query";
import * as _113 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _114 from "./distribution/v1beta1/query.rpc.Query";
import * as _115 from "./evidence/v1beta1/query.rpc.Query";
import * as _116 from "./feegrant/v1beta1/query.rpc.Query";
import * as _117 from "./gov/v1beta1/query.rpc.Query";
import * as _118 from "./mint/v1beta1/query.rpc.Query";
import * as _119 from "./params/v1beta1/query.rpc.Query";
import * as _120 from "./slashing/v1beta1/query.rpc.Query";
import * as _121 from "./staking/v1beta1/query.rpc.Query";
import * as _122 from "./tx/v1beta1/service.rpc.Service";
import * as _123 from "./upgrade/v1beta1/query.rpc.Query";
import * as _124 from "./authz/v1beta1/tx.rpc.msg";
import * as _125 from "./bank/v1beta1/tx.rpc.msg";
import * as _126 from "./crisis/v1beta1/tx.rpc.msg";
import * as _127 from "./distribution/v1beta1/tx.rpc.msg";
import * as _128 from "./evidence/v1beta1/tx.rpc.msg";
import * as _129 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _130 from "./gov/v1beta1/tx.rpc.msg";
import * as _131 from "./slashing/v1beta1/tx.rpc.msg";
import * as _132 from "./staking/v1beta1/tx.rpc.msg";
import * as _133 from "./vesting/v1beta1/tx.rpc.msg";
import * as _134 from "./rpc.query";
import * as _135 from "./rpc.tx";
export let cosmos;
(function (_cosmos) {
  let auth;
  (function (_auth) {
    const v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _0), _1), _2), _110);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  let authz;
  (function (_authz) {
    const v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _3), _4), _5), _6), _7), _90), _100), _111), _124);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  let bank;
  (function (_bank) {
    const v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _8), _9), _10), _11), _12), _91), _101), _112), _125);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  let base;
  (function (_base) {
    let abci;
    (function (_abci) {
      const v1beta1 = _abci.v1beta1 = _objectSpread({}, _13);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    let kv;
    (function (_kv) {
      const v1beta1 = _kv.v1beta1 = _objectSpread({}, _14);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    let query;
    (function (_query) {
      const v1beta1 = _query.v1beta1 = _objectSpread({}, _15);
    })(query || (query = _base.query || (_base.query = {})));
    let reflection;
    (function (_reflection) {
      const v1beta1 = _reflection.v1beta1 = _objectSpread({}, _16);
      const v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _17);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    let snapshots;
    (function (_snapshots) {
      const v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _18);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    let store;
    (function (_store) {
      const v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _19), _20);
    })(store || (store = _base.store || (_base.store = {})));
    let tendermint;
    (function (_tendermint) {
      const v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread({}, _21), _113);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    const v1beta1 = _base.v1beta1 = _objectSpread({}, _22);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  let capability;
  (function (_capability) {
    const v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _23), _24);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  let crisis;
  (function (_crisis) {
    const v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _25), _26), _92), _102), _126);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  let crypto;
  (function (_crypto) {
    const ed25519 = _crypto.ed25519 = _objectSpread({}, _27);
    const multisig = _crypto.multisig = _objectSpread({}, _28);
    const secp256k1 = _crypto.secp256k1 = _objectSpread({}, _29);
    const secp256r1 = _crypto.secp256r1 = _objectSpread({}, _30);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  let distribution;
  (function (_distribution) {
    const v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _31), _32), _33), _34), _93), _103), _114), _127);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  let evidence;
  (function (_evidence) {
    const v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _35), _36), _37), _38), _94), _104), _115), _128);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  let feegrant;
  (function (_feegrant) {
    const v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _39), _40), _41), _42), _95), _105), _116), _129);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  let genutil;
  (function (_genutil) {
    const v1beta1 = _genutil.v1beta1 = _objectSpread({}, _43);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  let gov;
  (function (_gov) {
    const v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _44), _45), _46), _47), _96), _106), _117), _130);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  let mint;
  (function (_mint) {
    const v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _48), _49), _50), _118);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  let params;
  (function (_params) {
    const v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _51), _52), _119);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  let slashing;
  (function (_slashing) {
    const v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _53), _54), _55), _56), _97), _107), _120), _131);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  let staking;
  (function (_staking) {
    const v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _57), _58), _59), _60), _61), _98), _108), _121), _132);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  let tx;
  (function (_tx) {
    let signing;
    (function (_signing) {
      const v1beta1 = _signing.v1beta1 = _objectSpread({}, _62);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    const v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _63), _64), _122);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  let upgrade;
  (function (_upgrade) {
    const v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _65), _66), _123);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  let vesting;
  (function (_vesting) {
    const v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _67), _68), _99), _109), _133);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  const ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread({}, _134), _135);
})(cosmos || (cosmos = {}));