import { useEffect } from 'react';

import { useAccountInitial } from './useAccountInitial';

export const useKeplrListener = () => {
  const { accountInit } = useAccountInitial();

  useEffect(() => {
    const updateAccount = async () => {
      accountInit();
    };

    window.addEventListener("keplr_keystorechange", updateAccount);

    return () => {
      window.removeEventListener("keplr_keystorechange", updateAccount);
    };
  }, [accountInit]);
};
