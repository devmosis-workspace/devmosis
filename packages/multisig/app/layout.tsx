"use client";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { ApolloWrapper } from "@/lib/ApolloWrapper";
import { Rubik } from "next/font/google";
import { useState, type PropsWithChildren } from "react";
import { useAccountInitial } from "@/hooks/useAccountInitial";
import { useKeplrListener } from "@/hooks/useKeplrListener";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-rubik",
});

export default function RootLayout({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  useAccountInitial();
  useKeplrListener();
  return (
    <html lang="en" className={rubik.variable}>
      <body>
        <div className="w-full min-h-screen flex">
          <Navigation />
          <div className="w-full flex flex-col items-center">
            <Header />
            <div className="flex flex-col max-w-[1200px] w-full p-8">
              <ApolloWrapper>
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </ApolloWrapper>
            </div>
          </div>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
