import { assets, chains, type Chain } from "chain-registry";
import { useSetAtom } from "jotai";

import {
  registeredChainAtom,
  unregisteredChainAtom,
  unsupportedChainAtom,
} from "@/atoms/chainAtom";
import { getKeplrFromWindow } from "@/utils/keplr";

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

const separateChains = (walletChainInfos: ChainInfoWithoutEndpoints[]) =>
  chains.reduce(
    (acc, chain) => {
      const [registered, unregistered, unsupported] = acc;

      const chainAssets = assets.find(
        (asset) => asset.chain_name === chain.chain_name
      )?.assets;

      const noRPC = chain.apis?.rpc?.[0].address === undefined;
      const noREST = chain.apis?.rest?.[0].address === undefined;
      const noAssets = chainAssets === undefined;

      if (walletChainInfos.find((info) => info.chainId === chain.chain_id)) {
        registered.push(chain);
      } else if (noRPC || noREST || noAssets) {
        unsupported.push(chain);
      } else {
        unregistered.push(chain);
      }
      return acc;
    },
    [[], [], []] as [Chain[], Chain[], Chain[]]
  );

export const useChainInitial = () => {
  const setRegisteredChains = useSetAtom(registeredChainAtom);
  const setUnregisteredChains = useSetAtom(unregisteredChainAtom);
  const setUnsupportedChains = useSetAtom(unsupportedChainAtom);

  const chainInfoInit = async () => {
    const walletChainInfos = await getWalletChainInfos();
    if (walletChainInfos !== undefined) {
      const [registeredChains, unregisteredChains, unsupportedChains] =
        await separateChains(walletChainInfos);

      setRegisteredChains(registeredChains);
      setUnregisteredChains(unregisteredChains);
      setUnsupportedChains(unsupportedChains);
    }
  };

  return { chainInfoInit };
};
