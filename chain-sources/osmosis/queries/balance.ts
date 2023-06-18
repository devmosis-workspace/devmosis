import { cosmos } from "@chain-clients/osmosis";
import { osmosisInfo } from "../utils";
import type { QueryBalanceRequest } from "@chain-clients/osmosis/types/codegen/cosmos/bank/v1beta1/query";

export const osmosisBalanceQuery = async ({
  address,
}: Pick<QueryBalanceRequest, "address">) => {
  const { chain } = osmosisInfo;
  const baseDenom = chain?.staking?.staking_tokens?.[0].denom;
  const restEndpoint = chain?.apis?.rest?.[2].address ?? "";

  if (baseDenom === undefined) {
    throw new Error(
      `MsgDelegate - ${chain?.chain_name} base denom is undefined`
    );
  }

  const {
    cosmos: {
      bank: {
        v1beta1: { balance },
      },
    },
  } = await cosmos.ClientFactory.createLCDClient({
    restEndpoint,
  });

  const { balance: osmosisBalance } = await balance({
    denom: baseDenom,
    address,
  });

  return osmosisBalance;
};
