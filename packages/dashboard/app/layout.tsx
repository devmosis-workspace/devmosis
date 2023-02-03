/* eslint-disable @next/next/no-head-element */
"use client";

import { useEffect } from "react";

import { useKeplrListener } from "@/hooks/useKeplrListener";
import { useAccountInitial } from "@/hooks/useAccountInitial";
import { useChainInitial } from "@/hooks/useChainInitial";
import { globalStyles } from "@/styles/globalStyles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "next" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chainInfoInit } = useChainInitial();
  const { accountInit } = useAccountInitial();

  useEffect(() => {
    chainInfoInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    accountInit();
  }, [accountInit]);

  useKeplrListener();

  return (
    <html>
      <head></head>
      <body>
        <CacheProvider value={cache}>
          {globalStyles}
          {children}
        </CacheProvider>
      </body>
    </html>
  );
}