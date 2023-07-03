"use client";

import { Typography } from "@/components/Typography";
import {
  GET_TRANSACTION_BY_TRANSACTION_ID,
  type TransactionResponse,
} from "@/graphql/queries/transaction";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

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
  const transaction = transactionData?.transactionByTransactionId;
  const signatures = transaction?.signatures ?? [];
  const threshold = transaction?.MultisigAccount.threshold;

  const currentSigners = signatures.length;
  const isNotEnoughSigners = currentSigners < (threshold ?? 0);

  return (
    <div className="flex flex-col w-full">
      <Typography.H4 className="text-[#778CA2] mb-6">
        Transaction Detail
      </Typography.H4>
      <div className="flex w-full gap-4">
        <div className="flex-1 flex flex-col">
          <div className="w-full flex flex-col p-6 rounded-lg bg-white mb-4">
            <Typography.H2>{transaction?.title}</Typography.H2>
            <Typography.H5 className="mt-2 text-[#778CA2]">
              {transaction?.description ?? "No description"}
            </Typography.H5>
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography.H4 className="text-[#778CA2]">
              Signature Status
            </Typography.H4>
            <button
              type="button"
              // onClick={handleModalOpen}
              className="flex justify-center items-center ml-auto w-[150px] h-[40px] bg-[#4D7CFE] rounded"
            >
              <Typography.SMText className="text-white">
                Sign Transaction
              </Typography.SMText>
            </button>
          </div>
          <div className="w-full flex flex-col p-6 rounded-lg bg-white">
            {signatures.map((signature) => {
              const isLast =
                signatures.indexOf(signature) === signatures.length - 1;
              return (
                <div
                  key={signature.signerAddress}
                  className="flex flex-col w-full"
                >
                  <div className="flex justify-between items-center w-full h-8">
                    <div className="flex flex-col">
                      <Typography.H5>{}</Typography.H5>
                      <Typography.SMText>
                        {signature.signerAddress}
                      </Typography.SMText>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center py-1 px-2 rounded bg-[#6DD230]/10">
                        <Typography.SMText className="text-[#6DD230]">
                          Signed
                        </Typography.SMText>
                      </div>
                    </div>
                  </div>
                  {!isLast ? (
                    <hr className="border-t border-t-[#E8ECEF]" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-[200px] rounded bg-white p-4 h-fit">
          <Typography.H4 className="text-[#252631] mb-1">
            TX Status
          </Typography.H4>
          <Typography.SMText className="text-[#778CA2]">
            {transaction?.txHash === null ? "Ongoing" : "Success"}
          </Typography.SMText>
          <hr className="border-t border-t-[#E8ECEF] my-3" />
          <Typography.H4 className="text-[#252631] mb-1">
            Submit Time
          </Typography.H4>
          <Typography.SMText className="text-[#778CA2]">
            {dayjs(transaction?.createdAt).format("YYYY-MM-DD")}
          </Typography.SMText>
          <hr className="border-t border-t-[#E8ECEF] my-3" />
          <Typography.H4 className="text-[#252631] mb-1">TX Hash</Typography.H4>
          <Typography.SMText className="text-[#778CA2]">
            {transaction?.txHash ?? "N/A"}
          </Typography.SMText>
          <hr className="border-t border-t-[#E8ECEF] my-3" />
          <Typography.H4 className="text-[#252631] mb-1">
            Threshold
          </Typography.H4>
          <div className="flex">
            <Image src="/users.svg" alt="user" width={22} height={20} />
            <Typography.SMText
              className={twMerge(
                "ml-2 mr-1",
                isNotEnoughSigners ? "text-[#FE4D97]" : "text-[#6DD230]"
              )}
            >
              {currentSigners}
            </Typography.SMText>
            <Typography.SMText className="text-[#252631]">
              {`/ ${threshold}`}
            </Typography.SMText>
          </div>
        </div>
      </div>
    </div>
  );
}
