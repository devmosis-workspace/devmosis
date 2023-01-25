import { atom } from 'jotai';

import type { Key } from "@keplr-wallet/types";

export const accountAtom = atom<Key[] | null>([]);
