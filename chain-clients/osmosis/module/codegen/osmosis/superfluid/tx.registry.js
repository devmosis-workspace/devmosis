//@ts-nocheck

import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgSuperfluidUndelegateAndUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export const registry = [["/osmosis.superfluid.MsgSuperfluidDelegate", MsgSuperfluidDelegate], ["/osmosis.superfluid.MsgSuperfluidUndelegate", MsgSuperfluidUndelegate], ["/osmosis.superfluid.MsgSuperfluidUnbondLock", MsgSuperfluidUnbondLock], ["/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock", MsgSuperfluidUndelegateAndUnbondLock], ["/osmosis.superfluid.MsgLockAndSuperfluidDelegate", MsgLockAndSuperfluidDelegate], ["/osmosis.superfluid.MsgUnPoolWhitelistedPool", MsgUnPoolWhitelistedPool]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    superfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: MsgSuperfluidDelegate.encode(value).finish()
      };
    },
    superfluidUndelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: MsgSuperfluidUndelegate.encode(value).finish()
      };
    },
    superfluidUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: MsgSuperfluidUnbondLock.encode(value).finish()
      };
    },
    superfluidUndelegateAndUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: MsgSuperfluidUndelegateAndUnbondLock.encode(value).finish()
      };
    },
    lockAndSuperfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: MsgLockAndSuperfluidDelegate.encode(value).finish()
      };
    },
    unPoolWhitelistedPool(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: MsgUnPoolWhitelistedPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    superfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value
      };
    },
    superfluidUndelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value
      };
    },
    superfluidUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value
      };
    },
    superfluidUndelegateAndUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value
      };
    },
    lockAndSuperfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value
      };
    },
    unPoolWhitelistedPool(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value
      };
    }
  },
  fromPartial: {
    superfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
        value: MsgSuperfluidDelegate.fromPartial(value)
      };
    },
    superfluidUndelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
        value: MsgSuperfluidUndelegate.fromPartial(value)
      };
    },
    superfluidUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
        value: MsgSuperfluidUnbondLock.fromPartial(value)
      };
    },
    superfluidUndelegateAndUnbondLock(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: MsgSuperfluidUndelegateAndUnbondLock.fromPartial(value)
      };
    },
    lockAndSuperfluidDelegate(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
        value: MsgLockAndSuperfluidDelegate.fromPartial(value)
      };
    },
    unPoolWhitelistedPool(value) {
      return {
        typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
        value: MsgUnPoolWhitelistedPool.fromPartial(value)
      };
    }
  }
};