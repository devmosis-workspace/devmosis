import type { TransactionBaseFormValue } from "@common/types";
import { atomWithStorage } from "jotai/utils";

export const savedFormAtom = atomWithStorage<Record<string, TransactionBaseFormValue[]> | null>(
  "savedForm",
  null
);
