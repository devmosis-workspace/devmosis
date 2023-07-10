"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.lockup.MsgLockTokens": {
    aminoType: "osmosis/lockup/lock-tokens",
    toAmino: function toAmino(_ref) {
      var owner = _ref.owner,
        duration = _ref.duration,
        coins = _ref.coins;
      return {
        owner: owner,
        duration: (duration * 1000000000).toString(),
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var owner = _ref2.owner,
        duration = _ref2.duration,
        coins = _ref2.coins;
      return {
        owner: owner,
        duration: {
          seconds: _helpers.Long.fromNumber(Math.floor(parseInt(duration) / 1000000000)),
          nanos: parseInt(duration) % 1000000000
        },
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlockingAll": {
    aminoType: "osmosis/lockup/begin-unlock-tokens",
    toAmino: function toAmino(_ref3) {
      var owner = _ref3.owner;
      return {
        owner: owner
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var owner = _ref4.owner;
      return {
        owner: owner
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlocking": {
    aminoType: "osmosis/lockup/begin-unlock-period-lock",
    toAmino: function toAmino(_ref5) {
      var owner = _ref5.owner,
        ID = _ref5.ID,
        coins = _ref5.coins;
      return {
        owner: owner,
        ID: ID.toString(),
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var owner = _ref6.owner,
        ID = _ref6.ID,
        coins = _ref6.coins;
      return {
        owner: owner,
        ID: _helpers.Long.fromString(ID),
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/osmosis.lockup.MsgExtendLockup": {
    aminoType: "osmosis/lockup/extend-lockup",
    toAmino: function toAmino(_ref7) {
      var owner = _ref7.owner,
        ID = _ref7.ID,
        duration = _ref7.duration;
      return {
        owner: owner,
        ID: ID.toString(),
        duration: (duration * 1000000000).toString()
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var owner = _ref8.owner,
        ID = _ref8.ID,
        duration = _ref8.duration;
      return {
        owner: owner,
        ID: _helpers.Long.fromString(ID),
        duration: {
          seconds: _helpers.Long.fromNumber(Math.floor(parseInt(duration) / 1000000000)),
          nanos: parseInt(duration) % 1000000000
        }
      };
    }
  },
  "/osmosis.lockup.MsgForceUnlock": {
    aminoType: "osmosis/lockup/force-unlock",
    toAmino: function toAmino(_ref9) {
      var owner = _ref9.owner,
        ID = _ref9.ID,
        coins = _ref9.coins;
      return {
        owner: owner,
        ID: ID.toString(),
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var owner = _ref10.owner,
        ID = _ref10.ID,
        coins = _ref10.coins;
      return {
        owner: owner,
        ID: _helpers.Long.fromString(ID),
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;