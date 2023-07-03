"use client";

import { Typography } from "@/components/Typography";
import {
  GET_TRANSACTION_BY_TRANSACTION_ID,
  type TransactionResponse,
} from "@/graphql/queries/transaction";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Transaction() {
  const params = useParams();
  const { data: transactionData } = useSuspenseQuery<TransactionResponse>(
    GET_TRANSACTION_BY_TRANSACTION_ID,
    {
      variables: {
        transactionId: Number(params.transactionId),
      },
      skip: params?.transactionId === undefined,
    }
  );
  console.log(transactionData)

  return (
    <div className="flex flex-col w-full">
      <Typography.H4 className="text-[#778CA2] mb-6">
        Account Detail
      </Typography.H4>
      <div className="flex w-full gap-4">
        <div className="flex-1 flex flex-col p-6 rounded-lg bg-white">
          <Typography.H2>
            {transactionData?.transactionByTransactionId.title}
          </Typography.H2>
          <Typography.H5 className="mt-2 text-[#778CA2]">
            {transactionData?.transactionByTransactionId.description ??
              "No description"}
          </Typography.H5>
        </div>
      </div>
    </div>
  );
}
