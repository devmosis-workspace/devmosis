import { Dec } from "@keplr-wallet/unit";

interface CalculateStdFee {
  gasUsed: string;
  averageGasPrice: number;
  baseDenom: string;
}

export const calculateStdFee = ({
  gasUsed,
  averageGasPrice,
  baseDenom,
}: CalculateStdFee) => {
  const GAS_ADJUSTMENT = 1.5;
  const gasUsedDec = new Dec(gasUsed);
  const gasWantedDec = gasUsedDec.mul(new Dec(GAS_ADJUSTMENT)).roundUpDec();
  const gasWanted = gasWantedDec.toString(0);

  const gasAmount = gasWantedDec
    .mul(new Dec(averageGasPrice))
    .roundUpDec()
    .toString(0);

  const stdFee = {
    gas: gasWanted,
    amount: [
      {
        amount: gasAmount,
        denom: baseDenom,
      },
    ],
  };
  return { stdFee };
};
