"use client";
import { registeredChainAtom } from "@/atoms/chainAtom";
import { osmosis } from "@chain-types/osmosis";
import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import { useCallback, useState } from "react";

type Message = {
  [bech32Prefix: string]: any[];
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const registeredChains = useAtomValue(registeredChainAtom);

  const createMessageGroup = (bech32Prefix: string) => {
    setMessages((prev) => [...prev, { [bech32Prefix]: [] }]);
  };

  const removeMessageGroup = (index: number) => {
    setMessages((prev) => prev.filter((_, i) => i !== index));
  };

  const findChainInfoByBech32Prefix = useCallback(
    (bech32Prefix: string) => {
      return registeredChains.find(
        (chain) => chain.bech32_prefix === bech32Prefix
      );
    },
    [registeredChains]
  );

  return (
    <Container>
      <BasketArea>
        {messages.map((message, index) => {
          const bech32Prefix = Object.keys(message)[0];
          const key = `${bech32Prefix}-${index}`
          const chainInfo = findChainInfoByBech32Prefix(bech32Prefix);
          if(chainInfo === undefined) return null;
          
          return (
            <div key={key}>
              <button onClick={() => removeMessageGroup(index)}>Remove</button>
              <div>{chainInfo.pretty_name}</div>
            </div>
          );
        })}
        <button onClick={() => createMessageGroup("osmo")}>Add</button>
      </BasketArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const BasketArea = styled.div`
  display: flex;
  flex-direction: column;
`;
