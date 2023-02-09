/* eslint-disable @next/next/no-head-element */
"use client";

import { useEffect } from "react";
import { Inter, Poppins } from "@next/font/google";

import { useKeplrListener } from "@/hooks/useKeplrListener";
import { useAccountInitial } from "@/hooks/useAccountInitial";
import { useChainInitial } from "@/hooks/useChainInitial";
import { globalStyles } from "@/styles/globalStyles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Layout } from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head></head>
      <body>
        <CacheProvider value={cache}>
          {globalStyles}
          <Layout>
            {children}
          </Layout>
        </CacheProvider>
      </body>
    </html>
  );
}
