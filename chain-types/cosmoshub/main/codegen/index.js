"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extern = require("./extern");
Object.keys(_extern).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _extern[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extern[key];
    }
  });
});