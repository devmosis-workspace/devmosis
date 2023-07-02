import { cosmos } from "@chain-clients/osmosis";
import { osmosisInfo } from "../utils";
import type { QueryBalanceRequest } from "@chain-clients/osmosis/types/codegen/cosmos/bank/v1beta1/query";

interface OsmosisAccount {
  "@type": string;
  address: string;
  pub_key: {
    "@type": string;
    key: string;
  };
  account_number: string;
  sequence: string;
}

export const osmosisAccountQuery = async ({
  address,
}: Pick<QueryBalanceRequest, "address">) => {
  const { chain } = osmosisInfo;
  const restEndpoint = chain?.apis?.rest?.[2].address ?? "";

  const {
    cosmos: {
      auth: {
        v1beta1: { account },
      },
    },
  } = await cosmos.ClientFactory.createLCDClient({
    restEndpoint,
  });

  const { account: osmosisAccount } = await account({
    address,
  });

  return osmosisAccount as unknown as OsmosisAccount;
};
