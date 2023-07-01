import { Typography } from "@/components/Typography";
import type { MultisigAccountsResponse } from "@/queries/multisigAccount";
import Image from "next/image";
import Link from "next/link";

interface MultisigAccountBoxProps {
  account: MultisigAccountsResponse["multisigAccountsByOwnerAddress"][0];
}

export const MultisigAccountBox = ({ account }: MultisigAccountBoxProps) => {
  const ongoingTransactions = account.transactions.filter(
    (transaction) => transaction.txHash === null
  ).length;

  const transactionCount = `${ongoingTransactions} ${ongoingTransactions === 1 ? "TX" : "TXs"}`

  return (
    <Link
      href={`/account/${account.address}`}
      className="flex justify-between items-center w-full h-14"
    >
      <div className="flex flex-col">
        <Typography.H5>{account.name}</Typography.H5>
        <Typography.SMText className="text-[#98A9BC]">
          {account.address}
        </Typography.SMText>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Image src="/spinner.svg" alt="spinner" width={16} height={16.07} className="animate-spin pb-[1px]" />
          <Typography.SMText className="text-[#98A9BC] ml-2">
            {transactionCount}
          </Typography.SMText>
        </div>
        <Image
          src="/chevron-right.svg"
          alt="chevron-right"
          width={12}
          height={10}
        />
      </div>
    </Link>
  );
};
