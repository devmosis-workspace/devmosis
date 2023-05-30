import { osmosisMsgs } from "../../utils";
import { MsgDelegate } from "./MsgDelegate";

interface TransactionListProps {
  id: string;
  typeUrl: string;
  index: number;
  myAddress: string | undefined;
}

export const OsmosisTransactions = ({
  id,
  typeUrl,
  index,
  myAddress,
}: TransactionListProps) => {
  const {
    beginRedelegate,
    cancelUnbondingDelegation,
    delegate,
    multiSend,
    send,
    undelegate,
    setWithdrawAddress,
    withdrawDelegatorReward,
  } = osmosisMsgs;

  switch (typeUrl) {
    case beginRedelegate(null as any).typeUrl:
      return null;
    case cancelUnbondingDelegation(null as any).typeUrl:
      return null;
    case delegate(null as any).typeUrl:
      return <MsgDelegate key={id} index={index} delegatorAddress={myAddress} />;
    case multiSend(null as any).typeUrl:
      return null;
    case send(null as any).typeUrl:
      return null;
    case undelegate(null as any).typeUrl:
      return null;
    case setWithdrawAddress(null as any).typeUrl:
      return null;
    case withdrawDelegatorReward(null as any).typeUrl:
      return null;
    default:
      return null;
  }
};
