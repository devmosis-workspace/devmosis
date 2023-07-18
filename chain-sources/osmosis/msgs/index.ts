import { cosmos, osmosis } from "@chain-clients/osmosis";
import { createMsgs } from "@common/utils";

export const osmosisMsgs = createMsgs([cosmos, osmosis]);