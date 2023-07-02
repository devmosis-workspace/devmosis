import { chains } from "chain-registry";
import { SUPPORTED_CHAIN_PREFIXES } from "./supportedChainPrefix";

export const supportedChainInfos = chains
  .filter(
    (chain) =>
      SUPPORTED_CHAIN_PREFIXES.includes(chain.bech32_prefix) &&
      chain.network_type === "mainnet" &&
      chain.chain_name !== "terra" &&
      chain.chain_name !== "nobltestnet"
  )
  .sort((a, b) => a.chain_name.localeCompare(b.chain_name));
