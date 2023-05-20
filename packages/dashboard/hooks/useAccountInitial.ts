import { useAtomValue, useSetAtom } from "jotai";

import { accountAtom } from "@/atoms/accountAtom";
import { registeredChainAtom } from "@/atoms/chainAtom";
import { assertFulfilled } from "@/utils/assertFulfilled";
import { getKeplrFromWindow } from "@/utils/keplr";

const getAccountsFromKeplr = async (registeredChains: any[]) => {
  try {
    const keplr = await getKeplrFromWindow();

    if (keplr !== undefined) {
      const settledAccounts = await Promise.allSettled(
        registeredChains.map(async (chain) => {
          const key = await keplr.getKey(chain.chain_id);
          return key;
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

export const useAccountInitial = () => {
  const registeredChains = useAtomValue(registeredChainAtom);

  const setWalletAccount = useSetAtom(accountAtom);

  const accountInit = async () => {
    try {
      const accounts = await getAccountsFromKeplr(registeredChains);
      setWalletAccount(accounts);
    } catch (e) {
      console.error(e);
    }
  };

  return { accountInit };
};
