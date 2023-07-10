import type { Keplr, OfflineAminoSigner } from "@keplr-wallet/types";

declare global {
  interface Window {
    keplr: Keplr | undefined;
    getOfflineSignerOnlyAmino:
      | ((chainId: string) => OfflineAminoSigner)
      | undefined;
  }
}
