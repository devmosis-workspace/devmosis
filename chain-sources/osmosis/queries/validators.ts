import { cosmos } from "@chain-clients/osmosis";
import { osmosisInfo } from "../utils";
import Long from "long";
import type { ValidatorSDKType } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/staking";
import type { QueryValidatorsRequest } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/query";

export const osmosisValidatorsQuery = async () => {
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
      staking: {
        v1beta1: { validators },
      },
    },
  } = await cosmos.ClientFactory.createLCDClient({
    restEndpoint,
  });

  const osmosisValidators = await validators({
    pagination: {
      limit: new Long(1000),
      offset: new Long(0),
    },
  } as QueryValidatorsRequest);

  const classifiedValidators = osmosisValidators.validators?.reduce(
    (acc, validator) => {
      const validatorStatus = validator.status as any as string;
      if (validator.jailed) {
        acc.jailed.push(validator);
      } else if (validatorStatus === "BOND_STATUS_BONDED") {
        acc.bonded.push(validator);
      } else if (validatorStatus === "BOND_STATUS_UNBONDED") {
        acc.unbonded.push(validator);
      } else if (validatorStatus === "BOND_STATUS_UNBONDING") {
        acc.unbonding.push(validator);
      }
      return acc;
    },
    {
      bonded: [] as ValidatorSDKType[],
      unbonded: [] as ValidatorSDKType[],
      unbonding: [] as ValidatorSDKType[],
      jailed: [] as ValidatorSDKType[],
    }
  );

  return classifiedValidators;
};
