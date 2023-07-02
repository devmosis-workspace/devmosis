"use client";

import { type MultisigAccountsResponse } from "@/graphql/queries/multisigAccount";
import { MultisigAccountBox } from "./MultisigAccountBox";
import { Typography } from "@/components/Typography";
import { useState } from "react";
import { AccountCreateModal } from "./AccountCreateModal";

interface MultisigAccountListProps {
  addresses: string[] | undefined;
  multisigAccounts:
    | MultisigAccountsResponse["multisigAccountsByOwnerAddress"]
    | undefined;
}

export const MultisigAccountList = ({
  addresses,
  multisigAccounts,
}: MultisigAccountListProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsCreateModalOpen(true);
  };

  const handleModalClose = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <Typography.H3 className="text-[#98A9BC]">
            Multisig Accounts
          </Typography.H3>
          <button
            type="button"
            onClick={handleModalOpen}
            className="flex justify-center items-center w-[185px] h-[40px] bg-[#4D7CFE] rounded"
          >
            <Typography.SMText className="text-white">
              Create Multisig Account
            </Typography.SMText>
          </button>
        </div>

        <div className="w-full flex flex-col p-6 rounded-lg bg-white">
          {multisigAccounts?.map((account) => {
            const isLast =
              multisigAccounts.indexOf(account) === multisigAccounts.length - 1;
            return (
              <div className="flex flex-col w-full">
                <MultisigAccountBox
                  key={account.address}
                  account={account}
                  addresses={addresses}
                />
                {!isLast ? (
                  <hr className="border-t border-t-[#E8ECEF]" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      {isCreateModalOpen ? (
        <AccountCreateModal
          isOpen={isCreateModalOpen}
          handleClose={handleModalClose}
        />
      ) : null}
    </>
  );
};
