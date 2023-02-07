"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _0 = _interopRequireWildcard(require("./auth/v1beta1/auth"));
var _1 = _interopRequireWildcard(require("./auth/v1beta1/genesis"));
var _2 = _interopRequireWildcard(require("./auth/v1beta1/query"));
var _3 = _interopRequireWildcard(require("./authz/v1beta1/authz"));
var _4 = _interopRequireWildcard(require("./authz/v1beta1/event"));
var _5 = _interopRequireWildcard(require("./authz/v1beta1/genesis"));
var _6 = _interopRequireWildcard(require("./authz/v1beta1/query"));
var _7 = _interopRequireWildcard(require("./authz/v1beta1/tx"));
var _8 = _interopRequireWildcard(require("./bank/v1beta1/authz"));
var _9 = _interopRequireWildcard(require("./bank/v1beta1/bank"));
var _10 = _interopRequireWildcard(require("./bank/v1beta1/genesis"));
var _11 = _interopRequireWildcard(require("./bank/v1beta1/query"));
var _12 = _interopRequireWildcard(require("./bank/v1beta1/tx"));
var _13 = _interopRequireWildcard(require("./base/abci/v1beta1/abci"));
var _14 = _interopRequireWildcard(require("./base/kv/v1beta1/kv"));
var _15 = _interopRequireWildcard(require("./base/query/v1beta1/pagination"));
var _16 = _interopRequireWildcard(require("./base/reflection/v1beta1/reflection"));
var _17 = _interopRequireWildcard(require("./base/reflection/v2alpha1/reflection"));
var _18 = _interopRequireWildcard(require("./base/snapshots/v1beta1/snapshot"));
var _19 = _interopRequireWildcard(require("./base/store/v1beta1/commit_info"));
var _20 = _interopRequireWildcard(require("./base/store/v1beta1/listening"));
var _21 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query"));
var _22 = _interopRequireWildcard(require("./base/v1beta1/coin"));
var _23 = _interopRequireWildcard(require("./capability/v1beta1/capability"));
var _24 = _interopRequireWildcard(require("./capability/v1beta1/genesis"));
var _25 = _interopRequireWildcard(require("./crisis/v1beta1/genesis"));
var _26 = _interopRequireWildcard(require("./crisis/v1beta1/tx"));
var _27 = _interopRequireWildcard(require("./crypto/ed25519/keys"));
var _28 = _interopRequireWildcard(require("./crypto/multisig/keys"));
var _29 = _interopRequireWildcard(require("./crypto/secp256k1/keys"));
var _30 = _interopRequireWildcard(require("./crypto/secp256r1/keys"));
var _31 = _interopRequireWildcard(require("./distribution/v1beta1/distribution"));
var _32 = _interopRequireWildcard(require("./distribution/v1beta1/genesis"));
var _33 = _interopRequireWildcard(require("./distribution/v1beta1/query"));
var _34 = _interopRequireWildcard(require("./distribution/v1beta1/tx"));
var _35 = _interopRequireWildcard(require("./evidence/v1beta1/evidence"));
var _36 = _interopRequireWildcard(require("./evidence/v1beta1/genesis"));
var _37 = _interopRequireWildcard(require("./evidence/v1beta1/query"));
var _38 = _interopRequireWildcard(require("./evidence/v1beta1/tx"));
var _39 = _interopRequireWildcard(require("./feegrant/v1beta1/feegrant"));
var _40 = _interopRequireWildcard(require("./feegrant/v1beta1/genesis"));
var _41 = _interopRequireWildcard(require("./feegrant/v1beta1/query"));
var _42 = _interopRequireWildcard(require("./feegrant/v1beta1/tx"));
var _43 = _interopRequireWildcard(require("./genutil/v1beta1/genesis"));
var _44 = _interopRequireWildcard(require("./gov/v1beta1/genesis"));
var _45 = _interopRequireWildcard(require("./gov/v1beta1/gov"));
var _46 = _interopRequireWildcard(require("./gov/v1beta1/query"));
var _47 = _interopRequireWildcard(require("./gov/v1beta1/tx"));
var _48 = _interopRequireWildcard(require("./mint/v1beta1/genesis"));
var _49 = _interopRequireWildcard(require("./mint/v1beta1/mint"));
var _50 = _interopRequireWildcard(require("./mint/v1beta1/query"));
var _51 = _interopRequireWildcard(require("./params/v1beta1/params"));
var _52 = _interopRequireWildcard(require("./params/v1beta1/query"));
var _53 = _interopRequireWildcard(require("./slashing/v1beta1/genesis"));
var _54 = _interopRequireWildcard(require("./slashing/v1beta1/query"));
var _55 = _interopRequireWildcard(require("./slashing/v1beta1/slashing"));
var _56 = _interopRequireWildcard(require("./slashing/v1beta1/tx"));
var _57 = _interopRequireWildcard(require("./staking/v1beta1/authz"));
var _58 = _interopRequireWildcard(require("./staking/v1beta1/genesis"));
var _59 = _interopRequireWildcard(require("./staking/v1beta1/query"));
var _60 = _interopRequireWildcard(require("./staking/v1beta1/staking"));
var _61 = _interopRequireWildcard(require("./staking/v1beta1/tx"));
var _62 = _interopRequireWildcard(require("./tx/signing/v1beta1/signing"));
var _63 = _interopRequireWildcard(require("./tx/v1beta1/service"));
var _64 = _interopRequireWildcard(require("./tx/v1beta1/tx"));
var _65 = _interopRequireWildcard(require("./upgrade/v1beta1/query"));
var _66 = _interopRequireWildcard(require("./upgrade/v1beta1/upgrade"));
var _67 = _interopRequireWildcard(require("./vesting/v1beta1/tx"));
var _68 = _interopRequireWildcard(require("./vesting/v1beta1/vesting"));
var _90 = _interopRequireWildcard(require("./authz/v1beta1/tx.amino"));
var _91 = _interopRequireWildcard(require("./bank/v1beta1/tx.amino"));
var _92 = _interopRequireWildcard(require("./crisis/v1beta1/tx.amino"));
var _93 = _interopRequireWildcard(require("./distribution/v1beta1/tx.amino"));
var _94 = _interopRequireWildcard(require("./evidence/v1beta1/tx.amino"));
var _95 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.amino"));
var _96 = _interopRequireWildcard(require("./gov/v1beta1/tx.amino"));
var _97 = _interopRequireWildcard(require("./slashing/v1beta1/tx.amino"));
var _98 = _interopRequireWildcard(require("./staking/v1beta1/tx.amino"));
var _99 = _interopRequireWildcard(require("./vesting/v1beta1/tx.amino"));
var _100 = _interopRequireWildcard(require("./authz/v1beta1/tx.registry"));
var _101 = _interopRequireWildcard(require("./bank/v1beta1/tx.registry"));
var _102 = _interopRequireWildcard(require("./crisis/v1beta1/tx.registry"));
var _103 = _interopRequireWildcard(require("./distribution/v1beta1/tx.registry"));
var _104 = _interopRequireWildcard(require("./evidence/v1beta1/tx.registry"));
var _105 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.registry"));
var _106 = _interopRequireWildcard(require("./gov/v1beta1/tx.registry"));
var _107 = _interopRequireWildcard(require("./slashing/v1beta1/tx.registry"));
var _108 = _interopRequireWildcard(require("./staking/v1beta1/tx.registry"));
var _109 = _interopRequireWildcard(require("./vesting/v1beta1/tx.registry"));
var _110 = _interopRequireWildcard(require("./auth/v1beta1/query.rpc.Query"));
var _111 = _interopRequireWildcard(require("./authz/v1beta1/query.rpc.Query"));
var _112 = _interopRequireWildcard(require("./bank/v1beta1/query.rpc.Query"));
var _113 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _114 = _interopRequireWildcard(require("./distribution/v1beta1/query.rpc.Query"));
var _115 = _interopRequireWildcard(require("./evidence/v1beta1/query.rpc.Query"));
var _116 = _interopRequireWildcard(require("./feegrant/v1beta1/query.rpc.Query"));
var _117 = _interopRequireWildcard(require("./gov/v1beta1/query.rpc.Query"));
var _118 = _interopRequireWildcard(require("./mint/v1beta1/query.rpc.Query"));
var _119 = _interopRequireWildcard(require("./params/v1beta1/query.rpc.Query"));
var _120 = _interopRequireWildcard(require("./slashing/v1beta1/query.rpc.Query"));
var _121 = _interopRequireWildcard(require("./staking/v1beta1/query.rpc.Query"));
var _122 = _interopRequireWildcard(require("./tx/v1beta1/service.rpc.Service"));
var _123 = _interopRequireWildcard(require("./upgrade/v1beta1/query.rpc.Query"));
var _124 = _interopRequireWildcard(require("./authz/v1beta1/tx.rpc.msg"));
var _125 = _interopRequireWildcard(require("./bank/v1beta1/tx.rpc.msg"));
var _126 = _interopRequireWildcard(require("./crisis/v1beta1/tx.rpc.msg"));
var _127 = _interopRequireWildcard(require("./distribution/v1beta1/tx.rpc.msg"));
var _128 = _interopRequireWildcard(require("./evidence/v1beta1/tx.rpc.msg"));
var _129 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.rpc.msg"));
var _130 = _interopRequireWildcard(require("./gov/v1beta1/tx.rpc.msg"));
var _131 = _interopRequireWildcard(require("./slashing/v1beta1/tx.rpc.msg"));
var _132 = _interopRequireWildcard(require("./staking/v1beta1/tx.rpc.msg"));
var _133 = _interopRequireWildcard(require("./vesting/v1beta1/tx.rpc.msg"));
var _134 = _interopRequireWildcard(require("./rpc.query"));
var _135 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cosmos;
exports.cosmos = cosmos;
(function (_cosmos) {
  var auth;
  (function (_auth) {
    var v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _0), _1), _2), _110);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  var authz;
  (function (_authz) {
    var v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _3), _4), _5), _6), _7), _90), _100), _111), _124);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  var bank;
  (function (_bank) {
    var v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _8), _9), _10), _11), _12), _91), _101), _112), _125);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  var base;
  (function (_base) {
    var abci;
    (function (_abci) {
      var v1beta1 = _abci.v1beta1 = _objectSpread({}, _13);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    var kv;
    (function (_kv) {
      var v1beta1 = _kv.v1beta1 = _objectSpread({}, _14);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    var query;
    (function (_query) {
      var v1beta1 = _query.v1beta1 = _objectSpread({}, _15);
    })(query || (query = _base.query || (_base.query = {})));
    var reflection;
    (function (_reflection) {
      var v1beta1 = _reflection.v1beta1 = _objectSpread({}, _16);
      var v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _17);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    var snapshots;
    (function (_snapshots) {
      var v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _18);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    var store;
    (function (_store) {
      var v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _19), _20);
    })(store || (store = _base.store || (_base.store = {})));
    var tendermint;
    (function (_tendermint) {
      var v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread({}, _21), _113);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    var v1beta1 = _base.v1beta1 = _objectSpread({}, _22);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  var capability;
  (function (_capability) {
    var v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _23), _24);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  var crisis;
  (function (_crisis) {
    var v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _25), _26), _92), _102), _126);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  var crypto;
  (function (_crypto) {
    var ed25519 = _crypto.ed25519 = _objectSpread({}, _27);
    var multisig = _crypto.multisig = _objectSpread({}, _28);
    var secp256k1 = _crypto.secp256k1 = _objectSpread({}, _29);
    var secp256r1 = _crypto.secp256r1 = _objectSpread({}, _30);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  var distribution;
  (function (_distribution) {
    var v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _31), _32), _33), _34), _93), _103), _114), _127);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  var evidence;
  (function (_evidence) {
    var v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _35), _36), _37), _38), _94), _104), _115), _128);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  var feegrant;
  (function (_feegrant) {
    var v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _39), _40), _41), _42), _95), _105), _116), _129);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  var genutil;
  (function (_genutil) {
    var v1beta1 = _genutil.v1beta1 = _objectSpread({}, _43);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  var gov;
  (function (_gov) {
    var v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _44), _45), _46), _47), _96), _106), _117), _130);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  var mint;
  (function (_mint) {
    var v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _48), _49), _50), _118);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  var params;
  (function (_params) {
    var v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _51), _52), _119);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  var slashing;
  (function (_slashing) {
    var v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _53), _54), _55), _56), _97), _107), _120), _131);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  var staking;
  (function (_staking) {
    var v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _57), _58), _59), _60), _61), _98), _108), _121), _132);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  var tx;
  (function (_tx) {
    var signing;
    (function (_signing) {
      var v1beta1 = _signing.v1beta1 = _objectSpread({}, _62);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    var v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _63), _64), _122);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  var upgrade;
  (function (_upgrade) {
    var v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _65), _66), _123);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  var vesting;
  (function (_vesting) {
    var v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _67), _68), _99), _109), _133);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  var ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread({}, _134), _135);
})(cosmos || (exports.cosmos = cosmos = {}));