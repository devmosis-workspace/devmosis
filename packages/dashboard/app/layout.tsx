/* eslint-disable @next/next/no-head-element */
"use client";

import { useEffect } from "react";
import { Inter, Poppins } from "next/font/google";

import { useKeplrListener } from "@/hooks/useKeplrListener";
import { useAccountInitial } from "@/hooks/useAccountInitial";
import { useChainInitial } from "@/hooks/useChainInitial";
import { globalStyles } from "@/styles/globalStyles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Sidebar } from "@/components/layout/Sidebar";

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
          <Sidebar />
          <Container>
            <Wrapper>{children}</Wrapper>
          </Container>
        </CacheProvider>
      </body>
    </html>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-left: 220px;

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  padding: 60px 40px 40px;
`;
