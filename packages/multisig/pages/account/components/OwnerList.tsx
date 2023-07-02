import { Typography } from "@/components/Typography";
import type { MultisigAccountResponse } from "@/graphql/queries/multisigAccount";

interface OwnerListProps {
  owners:
    | MultisigAccountResponse["multisigAccountByMultisigAddress"]["owners"]
    | undefined;
}

export const OwnerList = ({ owners }: OwnerListProps) => {
  return (
    <div className="w-full flex flex-col p-6 rounded-lg bg-white">
      <Typography.H3>Owners</Typography.H3>
      <hr className="border-t border-t-[#E8ECEF] my-3" />
      <div className="flex flex-col w-full">
        {owners?.map((owner) => {
          const isLast = owners.indexOf(owner) === owners.length - 1;
          return (
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <Typography.SMText className="w-full text-[#252631] break-words">
                  {owner.address}
                </Typography.SMText>
              </div>
              {!isLast ? (
                <hr className="border-t border-t-[#E8ECEF] my-3" />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
