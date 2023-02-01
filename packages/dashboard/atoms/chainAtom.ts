import { atom } from "jotai";
import { Chain } from "@chain-registry/types";

export const registeredChainAtom = atom<Chain[]>([]);

export const unregisteredChainAtom = atom<Chain[]>([]);

export const unsupportedChainAtom = atom<Chain[]>([]);