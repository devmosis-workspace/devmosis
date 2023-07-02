import { Typography } from "@/components/Typography";
import type { MultisigAccountsResponse } from "@/graphql/queries/multisigAccount";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface MultisigAccountBoxProps {
  addresses: string[] | undefined;
  account: MultisigAccountsResponse["multisigAccountsByOwnerAddress"][0];
}

export const MultisigAccountBox = ({
  addresses,
  account,
}: MultisigAccountBoxProps) => {
  const ongoingTransactions = account.transactions.filter(
    (transaction) => transaction.txHash === null
  ).length;

  const isTransactionZero = ongoingTransactions === 0;
  const needsInvitationAcceptance = useMemo(
    () =>
      account.owners.some(
        (owner) =>
          owner.certified === false &&
          owner.rejected === false &&
          addresses?.includes(owner.address)
      ),
    [account, addresses]
  );

  const transactionCount = `Ongoing ${ongoingTransactions} ${
    ongoingTransactions === 1 ? "TX" : "TXs"
  }`;

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
        {!isTransactionZero ? (
          <div className="flex items-center py-1 px-2 rounded bg-[#6DD230]/10 mr-4">
            <Typography.SMText className="text-[#6DD230]">
              {transactionCount}
            </Typography.SMText>
          </div>
        ) : null}
        {needsInvitationAcceptance && (
          <div className="flex items-center py-1 px-2 rounded bg-[#FE4D97]/10 mr-4">
            <Typography.SMText className="text-[#FE4D97]">
              Requires invitation acceptance
            </Typography.SMText>
          </div>
        )}
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
