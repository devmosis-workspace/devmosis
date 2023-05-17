import assets from "./assets";
import chains from "./chains";
import ibc from "./ibc";
declare const _default: {
    assets: import("../types").AssetList[];
    chains: import("../types").Chain[];
    ibc: import("../types").IBCInfo[];
};
export default _default;
export * from "../types";
export { assets, chains, ibc };
