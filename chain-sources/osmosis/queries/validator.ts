import { cosmos } from "@chain-clients/osmosis";
import { osmosisInfo } from "../utils";
import { getValidatorProfilePicture } from "@common/queries";
import type { QueryValidatorRequest } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/query";

export const osmosisValidatorQuery = async ({
  validatorAddr,
}: QueryValidatorRequest) => {
  const { chain } = osmosisInfo;
  const restEndpoint = chain?.apis?.rest?.[2].address ?? "";

  const {
    cosmos: {
      staking: {
        v1beta1: { validator },
      },
    },
  } = await cosmos.ClientFactory.createLCDClient({
    restEndpoint,
  });

  const { validator: osmosisValidator } = await validator({
    validatorAddr,
  });

  const validatorProfilePicture = await getValidatorProfilePicture(
    osmosisValidator?.description?.identity
  );

  return { ...osmosisValidator, profilePicture: validatorProfilePicture };
};
