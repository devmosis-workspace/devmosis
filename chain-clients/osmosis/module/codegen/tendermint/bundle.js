import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _162 from "./abci/types";
import * as _163 from "./crypto/keys";
import * as _164 from "./crypto/proof";
import * as _165 from "./libs/bits/types";
import * as _166 from "./p2p/types";
import * as _167 from "./types/block";
import * as _168 from "./types/evidence";
import * as _169 from "./types/params";
import * as _170 from "./types/types";
import * as _171 from "./types/validator";
import * as _172 from "./version/types";
export let tendermint;
(function (_tendermint) {
  const abci = _tendermint.abci = _objectSpread({}, _162);
  const crypto = _tendermint.crypto = _objectSpread(_objectSpread({}, _163), _164);
  let libs;
  (function (_libs) {
    const bits = _libs.bits = _objectSpread({}, _165);
  })(libs || (libs = _tendermint.libs || (_tendermint.libs = {})));
  const p2p = _tendermint.p2p = _objectSpread({}, _166);
  const types = _tendermint.types = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _167), _168), _169), _170), _171);
  const version = _tendermint.version = _objectSpread({}, _172);
})(tendermint || (tendermint = {}));