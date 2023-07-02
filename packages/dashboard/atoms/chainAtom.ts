import { atom } from "jotai";
import type { Chain } from "chain-registry";

export const registeredChainAtom = atom<Chain[]>([]);

export const unregisteredChainAtom = atom<Chain[]>([]);

export const unsupportedChainAtom = atom<Chain[]>([]);
