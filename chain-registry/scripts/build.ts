import fs from "node:fs";
import deepmerge from "deepmerge";
import { globSync } from "glob";
import type { AssetList, Chain, IBCInfo } from "../types";

const paths = globSync(`${__dirname}/../chain-registry/**/*.json`);
const assets: AssetList[] = [];
const chains: Chain[] = [];
const ibcs: IBCInfo[] = [];
paths.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  if (!data.$schema) {
    console.warn("problematic data:");
    console.log(data);
    return;
  }
  if (data.$schema.endsWith("assetlist.schema.json")) assets.push(data);
  if (data.$schema.endsWith("chain.schema.json")) chains.push(data);
  if (data.$schema.endsWith("ibc_data.schema.json")) ibcs.push(data);
});

const addAssets: AssetList[] = [];
const addChains: Chain[] = [];

addChains.forEach((chain) => {
  const existingChainIndex = chains.findIndex(
    (c) => c.chain_name === chain.chain_name
  );
  if (existingChainIndex > -1) {
    const existingChain = chains[existingChainIndex];
    chains[existingChainIndex] = deepmerge(existingChain, chain);
  } else {
    chains.push(chain);
  }
});

chains.forEach((chain) => {
  if (!chain.slip44) chain.slip44 = 118;
});

addAssets.forEach((asset) => {
  const existingIndex = assets.findIndex(
    (c) => c.chain_name === asset.chain_name
  );
  if (existingIndex > -1) {
    assets[existingIndex] = deepmerge(assets[existingIndex], asset);
  } else {
    assets.push(asset);
  }
});

const write = (file: string, json: any[], TypeName: string) => {
  const strfy = JSON.stringify(json, null, 2);
  const exportType = TypeName + "[]";
  fs.writeFileSync(
    `${__dirname}/../src/${file}.ts`,
    `import type { ${TypeName} } from '../types';
const ${file}: ${exportType} = ${strfy};
export default ${file};
    `
  );
};

write("assets", assets, "AssetList");
write("chains", chains, "Chain");
write("ibc", ibcs, "IBCInfo");
