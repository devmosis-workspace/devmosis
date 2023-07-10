import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _175 from "./api/annotations";
import * as _176 from "./protobuf/any";
import * as _177 from "./protobuf/duration";
import * as _178 from "./protobuf/timestamp";
import * as _179 from "./protobuf/descriptor";
export let google;
(function (_google) {
  const api = _google.api = _objectSpread({}, _175);
  const protobuf = _google.protobuf = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _176), _177), _178), _179);
})(google || (google = {}));