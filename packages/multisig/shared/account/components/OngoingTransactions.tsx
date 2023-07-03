import { Typography } from "@/components/Typography";
import type { MultisigAccountResponse } from "@/graphql/queries/multisigAccount";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface OngoingTransactionsProps {
  ongoingTx: MultisigAccountResponse["multisigAccountByMultisigAddress"]["transactions"];
  threshold: number | undefined;
}

export const OngoingTransactions = ({
  ongoingTx,
  threshold,
}: OngoingTransactionsProps) => {
  const params = useParams();

  return (
    <div className="w-full flex flex-col p-6 rounded-lg bg-white">
      <Typography.H3>Ongoing Transactions</Typography.H3>

      <div className="w-full mt-6 max-w-full overflow-x-auto">
        <div className="w-full border-b-2 border-[#F6F9FC]">
          <tr className="w-full flex">
            <th className="w-[600px] shrink-0 pl-4 pb-3 flex">
              <Typography.SMText className="text-[#98A9BC]">
                Title
              </Typography.SMText>
            </th>
            <th className="w-[200px] shrink-0 pl-4 pb-3 flex">
              <Typography.SMText className="text-[#98A9BC]">
                Threshold
              </Typography.SMText>
            </th>
            <th className="w-[248px] shrink-0 pl-4 pb-3 flex">
              <Typography.SMText className="text-[#98A9BC]">
                Submit Time
              </Typography.SMText>
            </th>
            <th className="w-[40px] shrink-0 flex" />
          </tr>
        </div>
        <tbody className="w-full flex">
          {ongoingTx?.map((transaction) => {
            const currentSigners = transaction.signatures.length;
            const isNotEnoughSigners = currentSigners < (threshold ?? 0);
            const isDescriptionEmpty =
              transaction.description === "" ||
              transaction.description === null;

            const isLast =
              ongoingTx[ongoingTx.length - 1].id === transaction.id;

            return (
              <Link
                href={`/account/${params?.address}/tx/${transaction.id}`}
                prefetch={false}
                className="w-full flex"
              >
                <tr
                  key={transaction.id}
                  className="w-full flex items-center h-16 hover:bg-[#F6F9FC] cursor-pointer"
                >
                  <td className="w-[600px] pl-4 flex flex-col">
                    <Typography.SMText className="text-[#252631]">
                      {transaction.title}
                    </Typography.SMText>
                    {!isDescriptionEmpty ? (
                      <Typography.XSText className="w-full mt-1 break-all text-[#778CA2] line-clamp-1">
                        {transaction.description}
                      </Typography.XSText>
                    ) : null}
                  </td>
                  <td className="w-[200px] pl-4 py-3 flex items-center">
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
                  </td>
                  <td className="w-[248px] pl-4 py-3 flex">
                    <Typography.SMText className="text-[#252631]">
                      {dayjs(transaction.createdAt).fromNow()}
                    </Typography.SMText>
                  </td>
                  <td className="w-[40px] flex">
                    <Image
                      src="/chevron-right.svg"
                      alt="chevron-right"
                      width={10}
                      height={10}
                    />
                  </td>
                </tr>
                {!isLast ? (
                  <hr className="w-full border-t-2 border-[#F6F9FC]" />
                ) : null}
              </Link>
            );
          })}
        </tbody>
      </div>
    </div>
  );
};
