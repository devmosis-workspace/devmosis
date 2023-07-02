import { Typography } from "@/components/Typography";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Chain } from "chain-registry";
import { useParams } from "next/navigation";

interface AccountAssetsProps {
  chainInfo: Chain | undefined;
}

export const AccountAssets = ({ chainInfo }: AccountAssetsProps) => {
  const params = useParams();
  const accountAddress = params?.address;

  const { data } = useQuery({
    queryKey: ["getAccountAssets", accountAddress],
    queryFn: async () => {
      const restEndpoint = chainInfo?.apis?.rest[2];
      const response = await axios.get(
        `${restEndpoint}/cosmos/bank/v1beta1/balances/${accountAddress}`
      );
      return response
    },
    enabled: accountAddress !== undefined,
  });
  return (
    <div className="flex flex-col w-full">
      <Typography.H4 className="text-[#778CA2] mb-6">Assets</Typography.H4>
    </div>
  );
};
