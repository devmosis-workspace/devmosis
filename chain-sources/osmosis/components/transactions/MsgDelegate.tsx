import { useState, type HTMLAttributes, type ChangeEvent } from "react";
import { cosmos } from "@chain-clients/osmosis";
import styled from "@emotion/styled";
import { Dec, DecUtils } from "@keplr-wallet/unit";
import { Modal } from "@common/components";
import { useFormContext } from "react-hook-form";
import Long from "long";
import { useQuery } from "@tanstack/react-query";
import { type QueryValidatorsRequest } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/query";
import { type ValidatorSDKType } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/staking";
import { osmosisInfo } from "../../utils";

const osmosisBalanceQuery = async () => {
  const { chain } = osmosisInfo;
  const baseDenom = chain?.staking?.staking_tokens?.[0].denom;
  const restEndpoint = chain?.apis?.rest?.[0].address ?? "";

  if (baseDenom === undefined) {
    throw new Error(
      `MsgDelegate - ${chain?.chain_name} base denom is undefined`
    );
  }

  const {
    cosmos: {
      bank: {
        v1beta1: { balance },
      },
    },
  } = await cosmos.ClientFactory.createLCDClient({
    restEndpoint,
  });

  const { balance: osmosisBalance } = await balance({
    denom: baseDenom,
    address: "",
  });

  return osmosisBalance;
};

const osmosisValidatorsQuery = async () => {
  const { chain } = osmosisInfo;
  const baseDenom = chain?.staking?.staking_tokens?.[0].denom;
  const restEndpoint = chain?.apis?.rest?.[0].address ?? "";

  if (baseDenom === undefined) {
    throw new Error(
      `MsgDelegate - ${chain?.chain_name} base denom is undefined`
    );
  }

  const {
    cosmos: {
      staking: {
        v1beta1: { validators },
      },
    },
  } = await cosmos.ClientFactory.createLCDClient({
    restEndpoint,
  });

  const osmosisValidators = await validators({
    pagination: {
      limit: new Long(1000),
      offset: new Long(0),
    },
  } as QueryValidatorsRequest);

  const classifiedValidators = osmosisValidators.validators?.reduce(
    (acc, validator) => {
      const validatorStatus = validator.status as any as string;
      if (validator.jailed) {
        acc.jailed.push(validator);
      } else if (validatorStatus === "BOND_STATUS_BONDED") {
        acc.bonded.push(validator);
      } else if (validatorStatus === "BOND_STATUS_UNBONDED") {
        acc.unbonded.push(validator);
      } else if (validatorStatus === "BOND_STATUS_UNBONDING") {
        acc.unbonding.push(validator);
      }
      return acc;
    },
    {
      bonded: [] as ValidatorSDKType[],
      unbonded: [] as ValidatorSDKType[],
      unbonding: [] as ValidatorSDKType[],
      jailed: [] as ValidatorSDKType[],
    }
  );

  return classifiedValidators;
};

type MsgDelegateProps = HTMLAttributes<HTMLDivElement> & {
  index: number;
  delegatorAddress: string | undefined;
};

export const MsgDelegate = ({
  delegatorAddress,
  children,
  index,
  ...props
}: MsgDelegateProps) => {
  const { register } = useFormContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");

  const { chain, stakingToken, coinDecimal } = osmosisInfo;
  const baseDenom = stakingToken?.base;

  const actualAmount = (() => {
    if (amount === "") return "";
    if (coinDecimal === undefined) {
      throw new Error(
        `MsgDelegate - ${chain?.chain_name} coin decimal is undefined`
      );
    }
    let dec = new Dec(amount);
    dec = dec.mul(DecUtils.getTenExponentNInPrecisionRange(coinDecimal));
    return dec.truncate().toString();
  })();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container {...props}>
        <Box>
          <span>MsgDelegate</span>
        </Box>
        <Box>
          <HiddenAmountInput
            type="hidden"
            {...register(`transactions.${index}.delegatorAddress`, {
              required: true,
              value: actualAmount,
              disabled: true,
            })}
          />
          <span>validator :</span>
          <button type="button" onClick={handleModalOpen}>
            <span>Select a validator</span>
          </button>
        </Box>
        <Box>
          <span>amount :</span>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder=""
          />
          <HiddenAmountInput
            type="hidden"
            {...register(`transactions.${index}.amount.amount`, {
              required: true,
              value: actualAmount,
              disabled: true,
            })}
          />
          <HiddenAmountInput
            type="hidden"
            {...register(`transactions.${index}.amount.denom`, {
              required: true,
              value: baseDenom,
              disabled: true,
            })}
          />
        </Box>
      </Container>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ValidatorsModalContent />
      </Modal>
    </>
  );
};

const ValidatorsModalContent = () => {
  const { data: validatorsData } = useQuery({
    queryKey: ["osmosis/validators"],
    queryFn: osmosisValidatorsQuery,
  });

  console.log(validatorsData);

  return <>Modal</>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #4b4f5b;
  padding: 24px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 22px;
    left: 18px;
    right: 18px;
    bottom: -40px;
    z-index: -2;
    background: #000;
    opacity: 0.51;
    filter: blur(86.985px);
    border-radius: 24px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const HiddenAmountInput = styled.input`
  display: none;
`;
