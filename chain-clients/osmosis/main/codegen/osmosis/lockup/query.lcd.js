"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LCDQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.moduleBalance = this.moduleBalance.bind(this);
    this.moduleLockedAmount = this.moduleLockedAmount.bind(this);
    this.accountUnlockableCoins = this.accountUnlockableCoins.bind(this);
    this.accountUnlockingCoins = this.accountUnlockingCoins.bind(this);
    this.accountLockedCoins = this.accountLockedCoins.bind(this);
    this.accountLockedPastTime = this.accountLockedPastTime.bind(this);
    this.accountLockedPastTimeNotUnlockingOnly = this.accountLockedPastTimeNotUnlockingOnly.bind(this);
    this.accountUnlockedBeforeTime = this.accountUnlockedBeforeTime.bind(this);
    this.accountLockedPastTimeDenom = this.accountLockedPastTimeDenom.bind(this);
    this.lockedDenom = this.lockedDenom.bind(this);
    this.lockedByID = this.lockedByID.bind(this);
    this.nextLockID = this.nextLockID.bind(this);
    this.syntheticLockupsByLockupID = this.syntheticLockupsByLockupID.bind(this);
    this.accountLockedLongerDuration = this.accountLockedLongerDuration.bind(this);
    this.accountLockedDuration = this.accountLockedDuration.bind(this);
    this.accountLockedLongerDurationNotUnlockingOnly = this.accountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.accountLockedLongerDurationDenom = this.accountLockedLongerDurationDenom.bind(this);
    this.params = this.params.bind(this);
  }
  /* Return full balance of the module */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "moduleBalance",
    value: function () {
      var _moduleBalance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "osmosis/lockup/v1beta1/module_balance";
              _context.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function moduleBalance() {
        return _moduleBalance.apply(this, arguments);
      }
      return moduleBalance;
    }() /* Return locked balance of the module */
  }, {
    key: "moduleLockedAmount",
    value: function () {
      var _moduleLockedAmount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _params,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              endpoint = "osmosis/lockup/v1beta1/module_locked_amount";
              _context2.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context2.abrupt("return", _context2.sent);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function moduleLockedAmount() {
        return _moduleLockedAmount.apply(this, arguments);
      }
      return moduleLockedAmount;
    }() /* Returns unlockable coins which are not withdrawn yet */
  }, {
    key: "accountUnlockableCoins",
    value: function () {
      var _accountUnlockableCoins = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "osmosis/lockup/v1beta1/account_unlockable_coins/".concat(params.owner);
              _context3.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function accountUnlockableCoins(_x) {
        return _accountUnlockableCoins.apply(this, arguments);
      }
      return accountUnlockableCoins;
    }() /* Returns unlocking coins */
  }, {
    key: "accountUnlockingCoins",
    value: function () {
      var _accountUnlockingCoins = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              endpoint = "osmosis/lockup/v1beta1/account_unlocking_coins/".concat(params.owner);
              _context4.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context4.abrupt("return", _context4.sent);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function accountUnlockingCoins(_x2) {
        return _accountUnlockingCoins.apply(this, arguments);
      }
      return accountUnlockingCoins;
    }() /* Return a locked coins that can't be withdrawn */
  }, {
    key: "accountLockedCoins",
    value: function () {
      var _accountLockedCoins = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "osmosis/lockup/v1beta1/account_locked_coins/".concat(params.owner);
              _context5.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context5.abrupt("return", _context5.sent);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function accountLockedCoins(_x3) {
        return _accountLockedCoins.apply(this, arguments);
      }
      return accountLockedCoins;
    }() /* Returns locked records of an account with unlock time beyond timestamp */
  }, {
    key: "accountLockedPastTime",
    value: function () {
      var _accountLockedPastTime = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.timestamp) !== "undefined") {
                options.params.timestamp = params.timestamp;
              }
              endpoint = "osmosis/lockup/v1beta1/account_locked_pasttime/".concat(params.owner);
              _context6.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context6.abrupt("return", _context6.sent);
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function accountLockedPastTime(_x4) {
        return _accountLockedPastTime.apply(this, arguments);
      }
      return accountLockedPastTime;
    }()
    /* Returns locked records of an account with unlock time beyond timestamp
     excluding tokens started unlocking */
  }, {
    key: "accountLockedPastTimeNotUnlockingOnly",
    value: function () {
      var _accountLockedPastTimeNotUnlockingOnly = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.timestamp) !== "undefined") {
                options.params.timestamp = params.timestamp;
              }
              endpoint = "osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/".concat(params.owner);
              _context7.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context7.abrupt("return", _context7.sent);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function accountLockedPastTimeNotUnlockingOnly(_x5) {
        return _accountLockedPastTimeNotUnlockingOnly.apply(this, arguments);
      }
      return accountLockedPastTimeNotUnlockingOnly;
    }() /* Returns unlocked records with unlock time before timestamp */
  }, {
    key: "accountUnlockedBeforeTime",
    value: function () {
      var _accountUnlockedBeforeTime = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.timestamp) !== "undefined") {
                options.params.timestamp = params.timestamp;
              }
              endpoint = "osmosis/lockup/v1beta1/account_unlocked_before_time/".concat(params.owner);
              _context8.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context8.abrupt("return", _context8.sent);
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function accountUnlockedBeforeTime(_x6) {
        return _accountUnlockedBeforeTime.apply(this, arguments);
      }
      return accountUnlockedBeforeTime;
    }() /* Returns lock records by address, timestamp, denom */
  }, {
    key: "accountLockedPastTimeDenom",
    value: function () {
      var _accountLockedPastTimeDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.timestamp) !== "undefined") {
                options.params.timestamp = params.timestamp;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "osmosis/lockup/v1beta1/account_locked_pasttime_denom/".concat(params.owner);
              _context9.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context9.abrupt("return", _context9.sent);
            case 7:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function accountLockedPastTimeDenom(_x7) {
        return _accountLockedPastTimeDenom.apply(this, arguments);
      }
      return accountLockedPastTimeDenom;
    }() /* Returns total locked per denom with longer past given time */
  }, {
    key: "lockedDenom",
    value: function () {
      var _lockedDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
                options.params.duration = params.duration;
              }
              endpoint = "osmosis/lockup/v1beta1/locked_denom";
              _context10.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context10.abrupt("return", _context10.sent);
            case 7:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function lockedDenom(_x8) {
        return _lockedDenom.apply(this, arguments);
      }
      return lockedDenom;
    }() /* Returns lock record by id */
  }, {
    key: "lockedByID",
    value: function () {
      var _lockedByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              endpoint = "osmosis/lockup/v1beta1/locked_by_id/".concat(params.lockId);
              _context11.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context11.abrupt("return", _context11.sent);
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function lockedByID(_x9) {
        return _lockedByID.apply(this, arguments);
      }
      return lockedByID;
    }() /* Returns next lock ID */
  }, {
    key: "nextLockID",
    value: function () {
      var _nextLockID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
        var _params,
          endpoint,
          _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _params = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {};
              endpoint = "osmosis/lockup/v1beta1/next_lock_id";
              _context12.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context12.abrupt("return", _context12.sent);
            case 5:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function nextLockID() {
        return _nextLockID.apply(this, arguments);
      }
      return nextLockID;
    }() /* Returns synthetic lockups by native lockup id */
  }, {
    key: "syntheticLockupsByLockupID",
    value: function () {
      var _syntheticLockupsByLockupID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              endpoint = "osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/".concat(params.lockId);
              _context13.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context13.abrupt("return", _context13.sent);
            case 4:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function syntheticLockupsByLockupID(_x10) {
        return _syntheticLockupsByLockupID.apply(this, arguments);
      }
      return syntheticLockupsByLockupID;
    }() /* Returns account locked records with longer duration */
  }, {
    key: "accountLockedLongerDuration",
    value: function () {
      var _accountLockedLongerDuration = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
                options.params.duration = params.duration;
              }
              endpoint = "osmosis/lockup/v1beta1/account_locked_longer_duration/".concat(params.owner);
              _context14.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context14.abrupt("return", _context14.sent);
            case 6:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function accountLockedLongerDuration(_x11) {
        return _accountLockedLongerDuration.apply(this, arguments);
      }
      return accountLockedLongerDuration;
    }() /* Returns account locked records with a specific duration */
  }, {
    key: "accountLockedDuration",
    value: function () {
      var _accountLockedDuration = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
                options.params.duration = params.duration;
              }
              endpoint = "osmosis/lockup/v1beta1/account_locked_duration/".concat(params.owner);
              _context15.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context15.abrupt("return", _context15.sent);
            case 6:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function accountLockedDuration(_x12) {
        return _accountLockedDuration.apply(this, arguments);
      }
      return accountLockedDuration;
    }()
    /* Returns account locked records with longer duration excluding tokens
     started unlocking */
  }, {
    key: "accountLockedLongerDurationNotUnlockingOnly",
    value: function () {
      var _accountLockedLongerDurationNotUnlockingOnly = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
                options.params.duration = params.duration;
              }
              endpoint = "osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/".concat(params.owner);
              _context16.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context16.abrupt("return", _context16.sent);
            case 6:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function accountLockedLongerDurationNotUnlockingOnly(_x13) {
        return _accountLockedLongerDurationNotUnlockingOnly.apply(this, arguments);
      }
      return accountLockedLongerDurationNotUnlockingOnly;
    }() /* Returns account's locked records for a denom with longer duration */
  }, {
    key: "accountLockedLongerDurationDenom",
    value: function () {
      var _accountLockedLongerDurationDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.duration) !== "undefined") {
                options.params.duration = params.duration;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "osmosis/lockup/v1beta1/account_locked_longer_duration_denom/".concat(params.owner);
              _context17.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context17.abrupt("return", _context17.sent);
            case 7:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function accountLockedLongerDurationDenom(_x14) {
        return _accountLockedLongerDurationDenom.apply(this, arguments);
      }
      return accountLockedLongerDurationDenom;
    }() /* Params returns lockup params. */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
        var _params,
          endpoint,
          _args18 = arguments;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _params = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : {};
              endpoint = "osmosis/lockup/v1beta1/params";
              _context18.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context18.abrupt("return", _context18.sent);
            case 5:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;