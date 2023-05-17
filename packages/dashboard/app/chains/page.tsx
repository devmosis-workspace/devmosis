"use client";

import { useAtomValue } from "jotai";

import {
  registeredChainAtom,
  unregisteredChainAtom,
  unsupportedChainAtom,
} from "@/atoms/chainAtom";
import { useChainInitial } from "@/hooks/useChainInitial";
import { generateKeplrChainInfo, suggestChainFromWindow } from "@/utils/keplr";
import styled from "@emotion/styled";

import type { Chain } from "chain-registry";

export default function Chains() {
  const { chainInfoInit } = useChainInitial();

  const registeredChains = useAtomValue(registeredChainAtom);
  const unregisteredChains = useAtomValue(unregisteredChainAtom);
  const unsupportedChains = useAtomValue(unsupportedChainAtom);

  const registerChainWithKeplr = async (chain: Chain) => {
    try {
      const chainInfo = await generateKeplrChainInfo(chain);

      if (chainInfo !== undefined) {
        await suggestChainFromWindow(chainInfo);
        chainInfoInit();
      }
    } catch (e) {
      const error = e as Error;
      if (!error.message.includes("Request rejected")) {
        console.error(e);
      }
    }
  };

  return (
    <Container>
      Registered chains:
      <Grid>
        {registeredChains.map((chain) => (
          <div key={chain.chain_id}>{chain.pretty_name}</div>
        ))}
      </Grid>
      Support chains:
      <Grid>
        {unregisteredChains.map((chain) => (
          <Button
            key={chain.chain_id}
            onClick={() => registerChainWithKeplr(chain)}
          >
            {chain.pretty_name}
          </Button>
        ))}
      </Grid>
      Unsupport chains:
      <Grid>
        {unsupportedChains.map((chain) => (
          <div key={chain.chain_id}>{chain.pretty_name}</div>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  padding: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
