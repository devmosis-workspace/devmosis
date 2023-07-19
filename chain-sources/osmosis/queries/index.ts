import { osmosis } from "@chain-clients/osmosis";
import { osmosisInfo } from "../utils";

const { chain } = osmosisInfo;
const restEndpoint = chain?.apis?.rest?.[2].address ?? "";

export const osmosisLCDClient = async () => {
  const osmosisClient = await osmosis.ClientFactory.createLCDClient({
    restEndpoint,
  });
  return osmosisClient;
};
