import { assets, type AssetDenomUnit, type Chain } from "chain-registry";

import type { ChainInfo, Currency, FeeCurrency } from "@keplr-wallet/types";
import { generateBech32Config } from "./bech32Config";

export const generateKeplrChainInfo = (chain: Chain) => {
  const chainAssets = assets.find(
    (asset) => asset.chain_name === chain.chain_name
  )?.assets;

  if (chainAssets === undefined) return undefined;

  const checkCoinDecimals = (denomUnits: AssetDenomUnit[]) => {
    const doesntHaveMinimalDenom = denomUnits[1] === undefined;

    return doesntHaveMinimalDenom
      ? denomUnits[0].exponent
      : denomUnits[1].exponent;
  };

  const checkEmptyText = (text: string | undefined) => {
    return text !== "" ? text : undefined;
  };

  const currencies: Currency[] = chainAssets.map((asset) => ({
    coinDenom: asset.display,
    coinMinimalDenom: asset.base,
    coinDecimals: checkCoinDecimals(asset.denom_units),
    coinGeckoId: checkEmptyText(asset.coingecko_id),
  }));

  const feeToken = chain.fees?.fee_tokens?.[0];
  const lowGasPrice = feeToken?.low_gas_price;
  const averageGasPrice = feeToken?.average_gas_price;
  const highGasPrice = feeToken?.high_gas_price;
  const fixedMinGasPrice = feeToken?.fixed_min_gas_price ?? 0;

  const gasPriceStep = {
    low: lowGasPrice ?? averageGasPrice ?? highGasPrice ?? fixedMinGasPrice,
    average: averageGasPrice ?? lowGasPrice ?? highGasPrice ?? fixedMinGasPrice,
    high: highGasPrice ?? lowGasPrice ?? averageGasPrice ?? fixedMinGasPrice,
  };

  const feeCurrency: FeeCurrency = { ...currencies[0], ...gasPriceStep };

  const chainInfo: ChainInfo = {
    rpc: chain.apis?.rpc?.[0].address ?? "",
    rest: chain.apis?.rest?.[0].address ?? "",
    chainId: chain.chain_id,
    chainName: chain.pretty_name,
    stakeCurrency: currencies[0],
    bip44: { coinType: chain.slip44 },
    bech32Config: generateBech32Config(chain.bech32_prefix),
    currencies,
    feeCurrencies: [feeCurrency],
  };

  return chainInfo;
};
