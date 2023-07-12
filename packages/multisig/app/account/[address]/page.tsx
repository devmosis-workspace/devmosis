"use client";
import {
  GET_MULTISIG_ACCOUNT_BY_ADDRESS,
  type MultisigAccountResponse,
} from "@/graphql/queries/multisigAccount";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { OngoingTransactions } from "@/shared/account/components/OngoingTransactions";
import { TransactionHistory } from "@/shared/account/components/TransactionHistory";
import { AccountDetail } from "@/shared/account/components/AccountDetail";
import { OwnerList } from "@/shared/account/components/OwnerList";
import { Typography } from "@/components/Typography";
import { twMerge } from "tailwind-merge";
import { supportedChainInfos } from "@/constants/supportedChainInfos";
import Link from "next/link";

dayjs.extend(relativeTime);

export const dynamic = "force-dynamic";

export default function Account() {
  const params = useParams();
  const [tab, setTab] = useState<"ongoing" | "history" | "owners">("ongoing");
  const { data } = useSuspenseQuery<MultisigAccountResponse>(
    GET_MULTISIG_ACCOUNT_BY_ADDRESS,
    {
      variables: {
        multisigAddress: params?.address,
      },
      skip: params?.address === undefined,
    }
  );

  const account = data?.multisigAccountByMultisigAddress;
  const owners = account?.owners;
  const threshold = account?.threshold;

  const transactions = account?.transactions;

  const chainInfo = supportedChainInfos.find(
    (chainInfo) => chainInfo.bech32_prefix === account?.bech32Prefix
  );

  const { ongoingTx, completedTx } = useMemo(() => {
    return (
      transactions?.reduce(
        (acc, transaction) => {
          if (transaction.txHash === null) {
            return { ...acc, ongoingTx: [...acc.ongoingTx, transaction] };
          }
          return { ...acc, completedTx: [...acc.completedTx, transaction] };
        },
        { ongoingTx: [], completedTx: [] } as {
          ongoingTx: typeof transactions;
          completedTx: typeof transactions;
        }
      ) ?? { ongoingTx: [], completedTx: [] }
    );
  }, [data]);

  return (
    <div className="w-full flex flex-col gap-4 max-w-full overflow-x-auto">
      <AccountDetail
        account={account}
        ongoingTx={ongoingTx}
        chainInfo={chainInfo}
      />
      {/* <AccountAssets chainInfo={chainInfo} /> */}
      <div className="flex justify-between mt-1">
        <div className="flex h-fit">
          <button
            type="button"
            className={twMerge(
              "flex px-2 mr-2",
              tab === "ongoing" && "border-b-2 border-[#4D7CFE]"
            )}
            onClick={() => setTab("ongoing")}
          >
            <Typography.H5
              className={twMerge(
                "text-[#778CA2] mb-2",
                tab === "ongoing" && "text-[#4D7CFE]"
              )}
            >
              Ongoing Transactions
            </Typography.H5>
          </button>
          <button
            type="button"
            className={twMerge(
              "flex px-2 mr-2",
              tab === "history" && "border-b-2 border-[#4D7CFE]"
            )}
            onClick={() => setTab("history")}
          >
            <Typography.H5
              className={twMerge(
                "text-[#778CA2] mb-2",
                tab === "history" && "text-[#4D7CFE]"
              )}
            >
              Transaction History
            </Typography.H5>
          </button>
          <button
            type="button"
            className={twMerge(
              "flex px-2 mr-2",
              tab === "owners" && "border-b-2 border-[#4D7CFE]"
            )}
            onClick={() => setTab("owners")}
          >
            <Typography.H5
              className={twMerge(
                "text-[#778CA2] mb-2",
                tab === "owners" && "text-[#4D7CFE]"
              )}
            >
              Owners
            </Typography.H5>
          </button>
        </div>
        <Link
          href={`/account/${params?.address}/tx/create`}
          prefetch={false}
          className="flex justify-center items-center w-[165px] h-[40px] bg-[#4D7CFE] rounded"
        >
          <Typography.SMText className="text-white">
            Create Transaction
          </Typography.SMText>
        </Link>
      </div>

      {tab === "ongoing" ? (
        <OngoingTransactions ongoingTx={ongoingTx} threshold={threshold} />
      ) : null}
      {tab === "history" ? (
        <TransactionHistory completedTx={completedTx} threshold={threshold} />
      ) : null}
      {tab === "owners" ? <OwnerList owners={owners} /> : null}

      <>{JSON.stringify(params)}</>
    </div>
  );
}
