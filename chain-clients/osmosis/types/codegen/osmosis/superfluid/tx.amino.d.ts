import { AminoMsg } from "@cosmjs/amino";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgSuperfluidUndelegateAndUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export interface MsgSuperfluidDelegateAminoType extends AminoMsg {
    type: "osmosis/superfluid-delegate";
    value: {
        sender: string;
        lock_id: string;
        val_addr: string;
    };
}
export interface MsgSuperfluidUndelegateAminoType extends AminoMsg {
    type: "osmosis/superfluid-undelegate";
    value: {
        sender: string;
        lock_id: string;
    };
}
export interface MsgSuperfluidUnbondLockAminoType extends AminoMsg {
    type: "osmosis/superfluid-unbond-lock";
    value: {
        sender: string;
        lock_id: string;
    };
}
export interface MsgSuperfluidUndelegateAndUnbondLockAminoType extends AminoMsg {
    type: "osmosis/superfluid-undelegate-and-unbond-lock";
    value: {
        sender: string;
        lock_id: string;
        coin: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgLockAndSuperfluidDelegateAminoType extends AminoMsg {
    type: "osmosis/lock-and-superfluid-delegate";
    value: {
        sender: string;
        coins: {
            denom: string;
            amount: string;
        }[];
        val_addr: string;
    };
}
export interface MsgUnPoolWhitelistedPoolAminoType extends AminoMsg {
    type: "osmosis/unpool-whitelisted-pool";
    value: {
        sender: string;
        pool_id: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, lockId, valAddr }: MsgSuperfluidDelegate) => MsgSuperfluidDelegateAminoType["value"];
        fromAmino: ({ sender, lock_id, val_addr }: MsgSuperfluidDelegateAminoType["value"]) => MsgSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        aminoType: string;
        toAmino: ({ sender, lockId }: MsgSuperfluidUndelegate) => MsgSuperfluidUndelegateAminoType["value"];
        fromAmino: ({ sender, lock_id }: MsgSuperfluidUndelegateAminoType["value"]) => MsgSuperfluidUndelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        aminoType: string;
        toAmino: ({ sender, lockId }: MsgSuperfluidUnbondLock) => MsgSuperfluidUnbondLockAminoType["value"];
        fromAmino: ({ sender, lock_id }: MsgSuperfluidUnbondLockAminoType["value"]) => MsgSuperfluidUnbondLock;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
        aminoType: string;
        toAmino: ({ sender, lockId, coin }: MsgSuperfluidUndelegateAndUnbondLock) => MsgSuperfluidUndelegateAndUnbondLockAminoType["value"];
        fromAmino: ({ sender, lock_id, coin }: MsgSuperfluidUndelegateAndUnbondLockAminoType["value"]) => MsgSuperfluidUndelegateAndUnbondLock;
    };
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, coins, valAddr }: MsgLockAndSuperfluidDelegate) => MsgLockAndSuperfluidDelegateAminoType["value"];
        fromAmino: ({ sender, coins, val_addr }: MsgLockAndSuperfluidDelegateAminoType["value"]) => MsgLockAndSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
        aminoType: string;
        toAmino: ({ sender, poolId }: MsgUnPoolWhitelistedPool) => MsgUnPoolWhitelistedPoolAminoType["value"];
        fromAmino: ({ sender, pool_id }: MsgUnPoolWhitelistedPoolAminoType["value"]) => MsgUnPoolWhitelistedPool;
    };
};
