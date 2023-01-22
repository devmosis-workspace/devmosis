"use client";

import { registeredChainAtom, unregisteredChainAtom } from "@/atoms/chainAtom";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

export default function Home() {
  const registeredChains = useAtomValue(registeredChainAtom);
  const unregisteredChains = useAtomValue(unregisteredChainAtom);

  useEffect(() => {
    console.log("d",registeredChains);
    console.log(unregisteredChains);
  }, [registeredChains, unregisteredChains])
  return <></>;
}
