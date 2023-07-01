"use client";

import { Typography } from "@/components/Typography";
import type { MultisigAccountsResponse } from "@/queries/multisigAccount";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface OverviewGridProps {
  addresses: string[] | undefined;
  multisigAccounts:
    | MultisigAccountsResponse["multisigAccountsByOwnerAddress"]
    | undefined;
}

export const OverviewGrid = ({
  addresses,
  multisigAccounts,
}: OverviewGridProps) => {
  const overviewDefaultData = {
    ongoingTransactions: 0,
    pendingAccounts: 0,
  };
  const overviewData = useMemo(
    () =>
      multisigAccounts?.reduce((acc, curr) => {
        const onGoingTransactions = curr.transactions.filter(
          (transaction) => transaction.txHash === null
        );

        const pendingAccounts = curr.owners.filter(
          (owner) =>
            owner.certified === false &&
            owner.rejected === false &&
            addresses?.includes(owner.address)
        );

        return {
          ongoingTransactions:
            acc.ongoingTransactions + onGoingTransactions.length,
          pendingAccounts: acc.pendingAccounts + pendingAccounts.length,
        };
      }, overviewDefaultData) ?? overviewDefaultData,
    [multisigAccounts, addresses]
  );

  const validAccountCount = (multisigAccounts?.length ?? 0) - overviewData.pendingAccounts;

  return (
    <div className="flex flex-col w-full mb-5">
      <Typography.H3 className="text-[#98A9BC] mb-6">Overview</Typography.H3>
      <div className="grid grid-cols-3 gap-7">
        <Link
          href="/txs/ongoing"
          prefetch={false}
          className="flex items-center flex-1 h-[98px] bg-white rounded-[4px] px-5"
        >
          <Image
            src="/check-circle.svg"
            alt="check-circle"
            width={60}
            height={60}
          />
          <div className="flex flex-col ml-5">
            <Typography.H2 className="mb-[1px] text-[#252631]">
              {overviewData.ongoingTransactions}
            </Typography.H2>
            <Typography.SMText className="text-[#98A9BC]">
              Ongoing Transactions
            </Typography.SMText>
          </div>
        </Link>
        <Link
          href="/accounts"
          prefetch={false}
          className="flex items-center flex-1 h-[98px] bg-white rounded-[4px] px-5"
        >
          <Image
            src="/user-circle.svg"
            alt="user-circle"
            width={60}
            height={60}
          />
          <div className="flex flex-col ml-5">
            <Typography.H2 className="mb-[1px] text-[#252631]">
              {overviewData.pendingAccounts}
            </Typography.H2>
            <Typography.SMText className="text-[#98A9BC]">
              Pending Accounts
            </Typography.SMText>
          </div>
        </Link>
        <div className="flex items-center flex-1 h-[98px] bg-white rounded-[4px] px-5">
          <Image
            src="/account-circle.svg"
            alt="user-circle"
            width={60}
            height={60}
          />
          <div className="flex flex-col ml-5">
            <Typography.H2 className="mb-[1px] text-[#252631]">
              {validAccountCount}
            </Typography.H2>
            <Typography.SMText className="text-[#98A9BC]">
              Multisig Accounts
            </Typography.SMText>
          </div>
        </div>
      </div>
    </div>
  );
};
