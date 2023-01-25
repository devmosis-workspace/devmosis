/* eslint-disable @next/next/no-head-element */
"use client";

import { useChainInitial } from '@/hooks/useChainInitial';
import { globalStyles } from '@/styles/globalStyles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const cache = createCache({ key: "next" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useChainInitial();

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
