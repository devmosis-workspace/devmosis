//@ts-nocheck

import { Long } from "../../helpers";
export const AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid-delegate",
    toAmino: ({
      sender,
      lockId,
      valAddr
    }) => {
      return {
        sender,
        lock_id: lockId.toString(),
        val_addr: valAddr
      };
    },
    fromAmino: ({
      sender,
      lock_id,
      val_addr
    }) => {
      return {
        sender,
        lockId: Long.fromString(lock_id),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid-undelegate",
    toAmino: ({
      sender,
      lockId
    }) => {
      return {
        sender,
        lock_id: lockId.toString()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }) => {
      return {
        sender,
        lockId: Long.fromString(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid-unbond-lock",
    toAmino: ({
      sender,
      lockId
    }) => {
      return {
        sender,
        lock_id: lockId.toString()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }) => {
      return {
        sender,
        lockId: Long.fromString(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
    aminoType: "osmosis/superfluid-undelegate-and-unbond-lock",
    toAmino: ({
      sender,
      lockId,
      coin
    }) => {
      return {
        sender,
        lock_id: lockId.toString(),
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      lock_id,
      coin
    }) => {
      return {
        sender,
        lockId: Long.fromString(lock_id),
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/lock-and-superfluid-delegate",
    toAmino: ({
      sender,
      coins,
      valAddr
    }) => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        val_addr: valAddr
      };
    },
    fromAmino: ({
      sender,
      coins,
      val_addr
    }) => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr: val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
    aminoType: "osmosis/unpool-whitelisted-pool",
    toAmino: ({
      sender,
      poolId
    }) => {
      return {
        sender,
        pool_id: poolId.toString()
      };
    },
    fromAmino: ({
      sender,
      pool_id
    }) => {
      return {
        sender,
        poolId: Long.fromString(pool_id)
      };
    }
  }
};