//@ts-nocheck

import { Long } from "../../helpers";
export const AminoConverter = {
  "/osmosis.lockup.MsgLockTokens": {
    aminoType: "osmosis/lockup/lock-tokens",
    toAmino: ({
      owner,
      duration,
      coins
    }) => {
      return {
        owner,
        duration: (duration * 1000000000).toString(),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      duration,
      coins
    }) => {
      return {
        owner,
        duration: {
          seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1000000000)),
          nanos: parseInt(duration) % 1000000000
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlockingAll": {
    aminoType: "osmosis/lockup/begin-unlock-tokens",
    toAmino: ({
      owner
    }) => {
      return {
        owner
      };
    },
    fromAmino: ({
      owner
    }) => {
      return {
        owner
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlocking": {
    aminoType: "osmosis/lockup/begin-unlock-period-lock",
    toAmino: ({
      owner,
      ID,
      coins
    }) => {
      return {
        owner,
        ID: ID.toString(),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      ID,
      coins
    }) => {
      return {
        owner,
        ID: Long.fromString(ID),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.lockup.MsgExtendLockup": {
    aminoType: "osmosis/lockup/extend-lockup",
    toAmino: ({
      owner,
      ID,
      duration
    }) => {
      return {
        owner,
        ID: ID.toString(),
        duration: (duration * 1000000000).toString()
      };
    },
    fromAmino: ({
      owner,
      ID,
      duration
    }) => {
      return {
        owner,
        ID: Long.fromString(ID),
        duration: {
          seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1000000000)),
          nanos: parseInt(duration) % 1000000000
        }
      };
    }
  },
  "/osmosis.lockup.MsgForceUnlock": {
    aminoType: "osmosis/lockup/force-unlock",
    toAmino: ({
      owner,
      ID,
      coins
    }) => {
      return {
        owner,
        ID: ID.toString(),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      ID,
      coins
    }) => {
      return {
        owner,
        ID: Long.fromString(ID),
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};