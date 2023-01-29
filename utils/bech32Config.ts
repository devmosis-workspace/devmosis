import type { Bech32Config } from "@keplr-wallet/types";

export const generateBech32Config = (mainPrefix: string): Bech32Config => {
  const validatorPrefix = "val";
  const consensusPrefix = "cons";
  const publicPrefix = "pub";
  const operatorPrefix = "oper";

  return {
    bech32PrefixAccAddr: mainPrefix,
    bech32PrefixAccPub: mainPrefix + publicPrefix,
    bech32PrefixValAddr: mainPrefix + validatorPrefix + operatorPrefix,
    bech32PrefixValPub:
      mainPrefix + validatorPrefix + operatorPrefix + publicPrefix,
    bech32PrefixConsAddr: mainPrefix + validatorPrefix + consensusPrefix,
    bech32PrefixConsPub:
      mainPrefix + validatorPrefix + consensusPrefix + publicPrefix,
  };
};
