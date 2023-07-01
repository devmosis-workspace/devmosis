"use client";
import { useSetAtom } from "jotai";

import { accountAtom } from "@/atoms/accountAtom";
import { assertFulfilled } from "@/utils/assertFulfilled";
import { getKeplrFromWindow } from "@common/utils";
import { SUPPORTED_CHAIN_PREFIXES } from "@/constants/supportedChainPrefix";
import type { ChainInfoWithoutEndpoints } from "@keplr-wallet/types";

const getAccountsFromKeplr = async (
  chainInfos: ChainInfoWithoutEndpoints[] | undefined
) => {
  try {
    const keplr = await getKeplrFromWindow();

    if (keplr !== undefined && chainInfos !== undefined) {
      const settledAccounts = await Promise.allSettled(
        chainInfos.map(async (chain) => {
          const key = await keplr.getKey(chain.chainId);
          const bech32Prefix = chain.bech32Config.bech32PrefixAccAddr;
          return { [bech32Prefix]: key };
        })
      );

      const accounts = settledAccounts
        .filter(assertFulfilled)
        .map((account) => account.value);

      return accounts;
    }

    return null;
  } catch (e) {
    console.error(e);

    return null;
  }
};

const getWalletChainInfos = async () => {
  try {
    const keplr = await getKeplrFromWindow();

    if (keplr !== undefined) {
      const walletChainInfos = await keplr.getChainInfosWithoutEndpoints();
      return walletChainInfos;
    }

    return undefined;
  } catch (e) {
    const error = e as Error;
    if (!error.message.includes("Request rejected")) {
      console.error(e);
    }
  }
};

export const useAccountInitial = () => {
  const setWalletAccount = useSetAtom(accountAtom);

  const accountInit = async () => {
    try {
      const walletChainInfos = await getWalletChainInfos();
      const filteredWalletChainInfos = walletChainInfos?.filter(
        (chain) =>
          !chain.beta &&
          SUPPORTED_CHAIN_PREFIXES.includes(
            chain.bech32Config.bech32PrefixAccAddr
          )
      );

      const accounts = await getAccountsFromKeplr(filteredWalletChainInfos);
      setWalletAccount(accounts);
    } catch (e) {
      console.error(e);
    }
  };

  return { accountInit };
};
