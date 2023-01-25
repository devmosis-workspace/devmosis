import { chains } from "chain-registry";
import { useSetAtom } from "jotai";
import { useCallback } from "react";

import { registeredChainAtom, unregisteredChainAtom } from "@/atoms/chainAtom";
import { getKeplrFromWindow } from "@/utils/keplr";

import type { Chain } from "@chain-registry/types";
import type { ChainInfoWithoutEndpoints } from "@keplr-wallet/types";

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

export const useChainInitial = () => {
  const setRegisteredChains = useSetAtom(registeredChainAtom);
  const setUnregisteredChains = useSetAtom(unregisteredChainAtom);

  const separateChains = async (
    walletChainInfos: ChainInfoWithoutEndpoints[]
  ) => {
    const [registeredChains, unregisteredChains] = chains.reduce(
      (acc, chain) => {
        const [registered, unregistered] = acc;
        if (walletChainInfos.find((info) => info.chainId === chain.chain_id)) {
          registered.push(chain);
        } else {
          unregistered.push(chain);
        }
        return acc;
      },
      [[], []] as [Chain[], Chain[]]
    );
    setRegisteredChains(registeredChains);
    setUnregisteredChains(unregisteredChains);
  };

  const chainInfoInit = useCallback(async () => {
    const walletChainInfos = await getWalletChainInfos();
    if (walletChainInfos !== undefined) {
      await separateChains(walletChainInfos);
    }
  }, [getWalletChainInfos, separateChains]);

  return { chainInfoInit };
};
