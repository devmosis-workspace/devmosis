"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.osmosisProtoRegistry = exports.osmosisAminoConverters = exports.getSigningOsmosisClientOptions = exports.getSigningOsmosisClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _protoSigning = require("@cosmjs/proto-signing");
var _stargate = require("@cosmjs/stargate");
var osmosisGammPoolmodelsBalancerTxTxRegistry = _interopRequireWildcard(require("./gamm/pool-models/balancer/tx/tx.registry"));
var osmosisGammPoolmodelsStableswapTxRegistry = _interopRequireWildcard(require("./gamm/pool-models/stableswap/tx.registry"));
var osmosisGammV1beta1TxRegistry = _interopRequireWildcard(require("./gamm/v1beta1/tx.registry"));
var osmosisIncentivesTxRegistry = _interopRequireWildcard(require("./incentives/tx.registry"));
var osmosisLockupTxRegistry = _interopRequireWildcard(require("./lockup/tx.registry"));
var osmosisPoolmanagerV1beta1TxRegistry = _interopRequireWildcard(require("./poolmanager/v1beta1/tx.registry"));
var osmosisProtorevV1beta1TxRegistry = _interopRequireWildcard(require("./protorev/v1beta1/tx.registry"));
var osmosisSuperfluidTxRegistry = _interopRequireWildcard(require("./superfluid/tx.registry"));
var osmosisTokenfactoryV1beta1TxRegistry = _interopRequireWildcard(require("./tokenfactory/v1beta1/tx.registry"));
var osmosisValsetprefV1beta1TxRegistry = _interopRequireWildcard(require("./valset-pref/v1beta1/tx.registry"));
var osmosisGammPoolmodelsBalancerTxTxAmino = _interopRequireWildcard(require("./gamm/pool-models/balancer/tx/tx.amino"));
var osmosisGammPoolmodelsStableswapTxAmino = _interopRequireWildcard(require("./gamm/pool-models/stableswap/tx.amino"));
var osmosisGammV1beta1TxAmino = _interopRequireWildcard(require("./gamm/v1beta1/tx.amino"));
var osmosisIncentivesTxAmino = _interopRequireWildcard(require("./incentives/tx.amino"));
var osmosisLockupTxAmino = _interopRequireWildcard(require("./lockup/tx.amino"));
var osmosisPoolmanagerV1beta1TxAmino = _interopRequireWildcard(require("./poolmanager/v1beta1/tx.amino"));
var osmosisProtorevV1beta1TxAmino = _interopRequireWildcard(require("./protorev/v1beta1/tx.amino"));
var osmosisSuperfluidTxAmino = _interopRequireWildcard(require("./superfluid/tx.amino"));
var osmosisTokenfactoryV1beta1TxAmino = _interopRequireWildcard(require("./tokenfactory/v1beta1/tx.amino"));
var osmosisValsetprefV1beta1TxAmino = _interopRequireWildcard(require("./valset-pref/v1beta1/tx.amino"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var osmosisAminoConverters = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, osmosisGammPoolmodelsBalancerTxTxAmino.AminoConverter), osmosisGammPoolmodelsStableswapTxAmino.AminoConverter), osmosisGammV1beta1TxAmino.AminoConverter), osmosisIncentivesTxAmino.AminoConverter), osmosisLockupTxAmino.AminoConverter), osmosisPoolmanagerV1beta1TxAmino.AminoConverter), osmosisProtorevV1beta1TxAmino.AminoConverter), osmosisSuperfluidTxAmino.AminoConverter), osmosisTokenfactoryV1beta1TxAmino.AminoConverter), osmosisValsetprefV1beta1TxAmino.AminoConverter);
exports.osmosisAminoConverters = osmosisAminoConverters;
var osmosisProtoRegistry = [].concat((0, _toConsumableArray2["default"])(osmosisGammPoolmodelsBalancerTxTxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisGammPoolmodelsStableswapTxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisGammV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisIncentivesTxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisLockupTxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisPoolmanagerV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisProtorevV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisSuperfluidTxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisTokenfactoryV1beta1TxRegistry.registry), (0, _toConsumableArray2["default"])(osmosisValsetprefV1beta1TxRegistry.registry));
exports.osmosisProtoRegistry = osmosisProtoRegistry;
var getSigningOsmosisClientOptions = function getSigningOsmosisClientOptions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$defaultTypes = _ref.defaultTypes,
    defaultTypes = _ref$defaultTypes === void 0 ? _stargate.defaultRegistryTypes : _ref$defaultTypes;
  var registry = new _protoSigning.Registry([].concat((0, _toConsumableArray2["default"])(defaultTypes), (0, _toConsumableArray2["default"])(osmosisProtoRegistry)));
  var aminoTypes = new _stargate.AminoTypes(_objectSpread({}, osmosisAminoConverters));
  return {
    registry: registry,
    aminoTypes: aminoTypes
  };
};
exports.getSigningOsmosisClientOptions = getSigningOsmosisClientOptions;
var getSigningOsmosisClient = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
    var rpcEndpoint, signer, _ref2$defaultTypes, defaultTypes, _getSigningOsmosisCli, registry, aminoTypes, client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rpcEndpoint = _ref2.rpcEndpoint, signer = _ref2.signer, _ref2$defaultTypes = _ref2.defaultTypes, defaultTypes = _ref2$defaultTypes === void 0 ? _stargate.defaultRegistryTypes : _ref2$defaultTypes;
          _getSigningOsmosisCli = getSigningOsmosisClientOptions({
            defaultTypes: defaultTypes
          }), registry = _getSigningOsmosisCli.registry, aminoTypes = _getSigningOsmosisCli.aminoTypes;
          _context.next = 4;
          return _stargate.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
            registry: registry,
            aminoTypes: aminoTypes
          });
        case 4:
          client = _context.sent;
          return _context.abrupt("return", client);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getSigningOsmosisClient(_x) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getSigningOsmosisClient = getSigningOsmosisClient;