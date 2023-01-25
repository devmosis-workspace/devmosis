import { chains } from "chain-registry";
import { useSetAtom } from "jotai";

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

const separateChains = async (walletChainInfos: ChainInfoWithoutEndpoints[]) =>
  chains.reduce(
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

export const useChainInitial = () => {
  const setRegisteredChains = useSetAtom(registeredChainAtom);
  const setUnregisteredChains = useSetAtom(unregisteredChainAtom);

  const chainInfoInit = async () => {
    const walletChainInfos = await getWalletChainInfos();
    if (walletChainInfos !== undefined) {
      const [registeredChains, unregisteredChains] = await separateChains(
        walletChainInfos
      );

      setRegisteredChains(registeredChains);
      setUnregisteredChains(unregisteredChains);
    }
  };

  return { chainInfoInit };
};
