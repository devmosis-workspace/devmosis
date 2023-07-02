"use client";

import { accountAtom } from "@/atoms/accountAtom";
import { MultisigAccountList } from "@/pages/home/components/MultisigAccountList";
import { OverviewGrid } from "@/pages/home/components/OverviewGrid";
import {
  GET_MULTISIG_ACCOUNTS_BY_OWNER_ADDRESS,
  type MultisigAccountsResponse,
} from "@/graphql/queries/multisigAccount";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useAtomValue } from "jotai";

export default function Home() {
  const accounts = useAtomValue(accountAtom);

  const addresses = accounts?.map(
    (account) => Object.values(account).map((value) => value.bech32Address)[0]
  );

  const { data: multisigAccountsData } =
    useSuspenseQuery<MultisigAccountsResponse>(
      GET_MULTISIG_ACCOUNTS_BY_OWNER_ADDRESS,
      {
        variables: {
          ownerAddresses: addresses,
        },
        skip: addresses === undefined,
      }
    );
  return (
    <div className="w-full flex flex-col">
      <OverviewGrid
        addresses={addresses}
        multisigAccounts={multisigAccountsData?.multisigAccountsByOwnerAddress}
      />
      <MultisigAccountList
        addresses={addresses}
        multisigAccounts={multisigAccountsData?.multisigAccountsByOwnerAddress}
      />
    </div>
  );
}
