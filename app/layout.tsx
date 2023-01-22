/* eslint-disable @next/next/no-head-element */
"use client";

import { useChainInitial } from "hooks/useChainInitial";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useChainInitial();

  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
