import { assets } from "chain-registry";

import { AssetDenomUnit, Chain } from "@chain-registry/types";

import { generateBech32Config } from "./bech32Config";

import type {
  ChainInfo,
  Currency,
  FeeCurrency,
  Keplr,
} from "@keplr-wallet/types";

declare global {
  interface Window {
    keplr: Keplr | undefined;
  }
}

export const getKeplrFromWindow: () => Promise<
  Keplr | undefined
> = async () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  if (window?.keplr) {
    return window.keplr;
  }

  if (document.readyState === "complete") {
    return window?.keplr;
  }

  return new Promise((resolve) => {
    const documentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === "complete"
      ) {
        resolve(window?.keplr);
        document.removeEventListener("readystatechange", documentStateChange);
      }
    };

    document.addEventListener("readystatechange", documentStateChange);
  });
};

export async function suggestChainFromWindow(chainInfo: ChainInfo) {
  if (typeof window !== "undefined") {
    const keplr = await getKeplrFromWindow();

    if (keplr !== undefined) {
      const info = {
        ...chainInfo,
        stakeCurrency: {
          ...chainInfo.stakeCurrency,
          coinImageUrl: chainInfo.stakeCurrency.coinImageUrl
            ? window.origin + chainInfo.stakeCurrency.coinImageUrl
            : undefined,
        },
        currencies: chainInfo.currencies.map((currency) => ({
          ...currency,
          coinImageUrl: currency.coinImageUrl
            ? window.origin + currency.coinImageUrl
            : undefined,
        })),
        feeCurrencies: chainInfo.feeCurrencies.map((currency) => ({
          ...currency,
          coinImageUrl: currency.coinImageUrl
            ? window.origin + currency.coinImageUrl
            : undefined,
        })),
      };

      await keplr.experimentalSuggestChain(info);
    }
  }
}

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
