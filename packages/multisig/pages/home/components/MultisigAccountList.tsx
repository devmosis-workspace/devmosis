"use client";

import { type MultisigAccountsResponse } from "@/queries/multisigAccount";
import { MultisigAccountBox } from "./MultisigAccountBox";
import { Typography } from "@/components/Typography";

interface MultisigAccountListProps {
  multisigAccounts:
    | MultisigAccountsResponse["multisigAccountsByOwnerAddress"]
    | undefined;
}

export const MultisigAccountList = ({
  multisigAccounts,
}: MultisigAccountListProps) => {
  return (
    <div className="flex flex-col">
      <Typography.H3 className="text-[#98A9BC] mb-6">
        Multisig Accounts
      </Typography.H3>

      <div className="w-full flex flex-col p-6 rounded-lg bg-white">
        {multisigAccounts?.map((account) => {
          const isLast =
            multisigAccounts.indexOf(account) === multisigAccounts.length - 1;
          return (
            <div className="flex flex-col w-full">
              <MultisigAccountBox key={account.address} account={account} />
              {!isLast ? <hr className="border-t border-t-[#E8ECEF]" /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
