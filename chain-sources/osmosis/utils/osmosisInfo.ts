import { assets as allAssets, chains } from "chain-registry";

const OSMO_BECH32_PREFIX = "osmo";

const chain = chains.find(
  (chain) =>
    chain.bech32_prefix === OSMO_BECH32_PREFIX &&
    chain.network_type === "mainnet"
);

const assets = allAssets.find(
  (asset) => asset.chain_name === chain?.chain_name
)?.assets;

const stakingToken = assets?.find(
  (asset) => asset.base === chain?.staking?.staking_tokens?.[0].denom
);

const coinDecimal = stakingToken?.denom_units.filter(
  (unit) => unit.denom !== chain?.staking?.staking_tokens?.[0].denom
)?.[0].exponent;

export const osmosisInfo = {
  chain,
  assets,
  stakingToken,
  coinDecimal,
};

