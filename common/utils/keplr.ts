import type { ChainInfo, Keplr } from "@keplr-wallet/types";

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
