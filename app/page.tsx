"use client";

import { assets } from "chain-registry";
import { useAtomValue } from "jotai";

import { registeredChainAtom, unregisteredChainAtom } from "@/atoms/chainAtom";
import { useChainInitial } from "@/hooks/useChainInitial";
import { generateBech32Config } from "@/utils/bech32Config";
import { suggestChainFromWindow } from "@/utils/keplr";
import styled from "@emotion/styled";

import type { AssetDenomUnit, Chain } from "@chain-registry/types";
import type { ChainInfo, FeeCurrency, Currency } from "@keplr-wallet/types";

export default function Home() {
  const { chainInfoInit } = useChainInitial();

  const registeredChains = useAtomValue(registeredChainAtom);
  const unregisteredChains = useAtomValue(unregisteredChainAtom);

  const handleClick = async (chain: Chain) => {
    try {
      const chainAssets = assets.find(
        (asset) => asset.chain_name === chain.chain_name
      )?.assets;

      if (chainAssets === undefined) return;

      const checkEmptyText = (text: string | undefined) => {
        if (text === "") return undefined;
        return text;
      };

      const checkCoinDecimals = (denomUnits: AssetDenomUnit[]) => {
        const doesntHaveMinimalDenom = denomUnits[1] === undefined;

        if (doesntHaveMinimalDenom) {
          return denomUnits[0].exponent;
        }

        return denomUnits[1].exponent;
      };

      const currencies: Currency[] = chainAssets.map((asset) => ({
        coinDenom: asset.display,
        coinMinimalDenom: asset.base,
        coinDecimals: checkCoinDecimals(asset.denom_units),
        coinGeckoId: checkEmptyText(asset.coingecko_id),
        // coinImageUrl: checkEmptyText(
        //   asset.logo_URIs?.png ?? asset.logo_URIs?.jpeg
        // ),
      }));

      const feeToken = chain.fees?.fee_tokens?.[0];
      const lowGasPrice = feeToken?.low_gas_price;
      const averageGasPrice = feeToken?.average_gas_price;
      const highGasPrice = feeToken?.high_gas_price;
      const fixedMinGasPrice = feeToken?.fixed_min_gas_price ?? 0;

      const gasPriceStep = {
        low: lowGasPrice ?? averageGasPrice ?? highGasPrice ?? fixedMinGasPrice,
        average:
          averageGasPrice ?? lowGasPrice ?? highGasPrice ?? fixedMinGasPrice,
        high:
          highGasPrice ?? lowGasPrice ?? averageGasPrice ?? fixedMinGasPrice,
      };

      const feeCurrency: FeeCurrency = { ...currencies[0], ...gasPriceStep };

      const chainInfo: ChainInfo = {
        rpc: chain.apis?.rpc?.[0].address ?? "",
        rest: chain.apis?.rest?.[0].address ?? "",
        chainId: chain.chain_id,
        chainName: chain.pretty_name,
        stakeCurrency: currencies[0],
        bip44: { coinType: chain.slip44 },
        bech32Config: generateBech32Config(chain.bech32_prefix),
        currencies,
        feeCurrencies: [feeCurrency],
      };

      await suggestChainFromWindow(chainInfo);

      chainInfoInit();
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
      Unregistered chains:
      <Grid>
        {unregisteredChains.map((chain) => (
          <Button key={chain.chain_id} onClick={() => handleClick(chain)}>
            {chain.pretty_name}
          </Button>
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
