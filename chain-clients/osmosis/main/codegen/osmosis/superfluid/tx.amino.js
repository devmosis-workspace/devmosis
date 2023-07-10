"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid-delegate",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        lockId = _ref.lockId,
        valAddr = _ref.valAddr;
      return {
        sender: sender,
        lock_id: lockId.toString(),
        val_addr: valAddr
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        lock_id = _ref2.lock_id,
        val_addr = _ref2.val_addr;
      return {
        sender: sender,
        lockId: _helpers.Long.fromString(lock_id),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid-undelegate",
    toAmino: function toAmino(_ref3) {
      var sender = _ref3.sender,
        lockId = _ref3.lockId;
      return {
        sender: sender,
        lock_id: lockId.toString()
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var sender = _ref4.sender,
        lock_id = _ref4.lock_id;
      return {
        sender: sender,
        lockId: _helpers.Long.fromString(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid-unbond-lock",
    toAmino: function toAmino(_ref5) {
      var sender = _ref5.sender,
        lockId = _ref5.lockId;
      return {
        sender: sender,
        lock_id: lockId.toString()
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var sender = _ref6.sender,
        lock_id = _ref6.lock_id;
      return {
        sender: sender,
        lockId: _helpers.Long.fromString(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
    aminoType: "osmosis/superfluid-undelegate-and-unbond-lock",
    toAmino: function toAmino(_ref7) {
      var sender = _ref7.sender,
        lockId = _ref7.lockId,
        coin = _ref7.coin;
      return {
        sender: sender,
        lock_id: lockId.toString(),
        coin: {
          denom: coin.denom,
          amount: _helpers.Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var sender = _ref8.sender,
        lock_id = _ref8.lock_id,
        coin = _ref8.coin;
      return {
        sender: sender,
        lockId: _helpers.Long.fromString(lock_id),
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/lock-and-superfluid-delegate",
    toAmino: function toAmino(_ref9) {
      var sender = _ref9.sender,
        coins = _ref9.coins,
        valAddr = _ref9.valAddr;
      return {
        sender: sender,
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        val_addr: valAddr
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var sender = _ref10.sender,
        coins = _ref10.coins,
        val_addr = _ref10.val_addr;
      return {
        sender: sender,
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
    aminoType: "osmosis/unpool-whitelisted-pool",
    toAmino: function toAmino(_ref11) {
      var sender = _ref11.sender,
        poolId = _ref11.poolId;
      return {
        sender: sender,
        pool_id: poolId.toString()
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var sender = _ref12.sender,
        pool_id = _ref12.pool_id;
      return {
        sender: sender,
        poolId: _helpers.Long.fromString(pool_id)
      };
    }
  }
};
exports.AminoConverter = AminoConverter;