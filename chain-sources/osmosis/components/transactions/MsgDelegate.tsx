import {
  useState,
  type HTMLAttributes,
  type ChangeEvent,
  useEffect,
  type MouseEvent,
} from "react";
import { cosmos } from "@chain-clients/osmosis";
import styled from "@emotion/styled";
import { Dec, DecUtils } from "@keplr-wallet/unit";
import { Modal } from "@common/components";
import { useFormContext, useWatch } from "react-hook-form";
import Long from "long";
import { useQuery } from "@tanstack/react-query";
import { type QueryValidatorsRequest } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/query";
import { type ValidatorSDKType } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/staking";
import { osmosisInfo } from "../../utils";
import { MessageContainer } from "@common/components/src/MessageContainer";

const getValidatorProfilePicture = async (identity: string | undefined) => {
  if (identity === undefined) return undefined;

  const fetchThumbnail = (
    await fetch(
      `https://keybase.io/_/api/1.0/user/lookup.json?fields=pictures&key_suffix=${identity}`
    )
  ).json();

  const thumbnail:
    | {
        status: { code: number; name: string };
        them: { id: string; pictures: { primary: { url: string } } }[];
      }
    | undefined = await fetchThumbnail;

  return thumbnail?.them?.[0]?.pictures?.primary?.url;
};

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

const osmosisValidatorQuery = async (validatorAddr: string) => {
  const { chain } = osmosisInfo;
  const restEndpoint = chain?.apis?.rest?.[0].address ?? "";

  const {
    cosmos: {
      staking: {
        v1beta1: { validator },
      },
    },
  } = await cosmos.ClientFactory.createLCDClient({
    restEndpoint,
  });

  const { validator: osmosisValidator } = await validator({
    validatorAddr,
  });

  const validatorProfilePicture = await getValidatorProfilePicture(
    osmosisValidator?.description?.identity
  );

  return { ...osmosisValidator, profilePicture: validatorProfilePicture };
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
  const { register, setValue, control } = useFormContext();
  const selectedValidatorAddress: string | undefined = useWatch({
    control,
    name: `transactions.${index}.validatorAddress`,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const { chain, stakingToken, coinDecimal } = osmosisInfo;
  const baseDenom = stakingToken?.base;

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const { data: validatorData } = useQuery({
    queryKey: [
      "osmosis/validator",
      { valdatorAddress: selectedValidatorAddress },
    ],
    queryFn: () => osmosisValidatorQuery(selectedValidatorAddress!),
    enabled: selectedValidatorAddress !== undefined,
  });

  useEffect(
    function setAmount() {
      if (amount === "" || baseDenom === undefined) return;
      if (coinDecimal === undefined) {
        throw new Error(
          `MsgDelegate - ${chain?.chain_name} coin decimal is undefined`
        );
      }
      const actualAmount = new Dec(amount)
        .mul(DecUtils.getTenExponentNInPrecisionRange(coinDecimal))
        .truncate()
        .toString();

      setValue(`transactions.${index}.amount`, {
        amount: actualAmount,
        denom: baseDenom,
      });
    },
    [amount, baseDenom]
  );

  useEffect(
    function setDelegatorAddress() {
      setValue(`transactions.${index}.delegatorAddress`, delegatorAddress);
    },
    [delegatorAddress]
  );

  return (
    <>
      <MessageContainer title={"MsgDelegate"} {...props}>
        <Box>
          <HiddenAmountInput
            type="hidden"
            {...register(`transactions.${index}.delegatorAddress`, {
              required: true,
            })}
          />
          <HiddenAmountInput
            type="hidden"
            {...register(`transactions.${index}.validatorAddress`, {
              required: true,
            })}
          />
          <span>validator :</span>
          {validatorData !== undefined ? (
            <ValidatorBox>
              {validatorData.profilePicture !== undefined ? (
                <ValidatorProfilePicture
                  src={validatorData.profilePicture}
                  alt={validatorData.description?.moniker}
                />
              ) : null}
              <span style={{ marginRight: 4 }}>
                {validatorData.description?.moniker}
              </span>
            </ValidatorBox>
          ) : null}

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
            })}
          />
          <HiddenAmountInput
            type="hidden"
            {...register(`transactions.${index}.amount.denom`, {
              required: true,
            })}
          />
        </Box>
      </MessageContainer>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ValidatorsModalContent {...{ index, handleModalClose }} />
      </Modal>
    </>
  );
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

interface ValidatorsModalContentProps {
  index: number;
  handleModalClose: () => void;
}

const ValidatorsModalContent = ({
  index,
  handleModalClose,
}: ValidatorsModalContentProps) => {
  const { setValue } = useFormContext();

  const { data: validatorsData } = useQuery({
    queryKey: ["osmosis/validators"],
    queryFn: osmosisValidatorsQuery,
  });

  const handleValidatorClick = (
    event: MouseEvent<HTMLButtonElement>,
    operatorAddress: string
  ) => {
    event.preventDefault();
    setValue(`transactions.${index}.validatorAddress`, operatorAddress);
    handleModalClose();
  };

  return (
    <>
      <ModalTitle>
        <span> Select a validator</span>
      </ModalTitle>

      <ValidatorList>
        {validatorsData?.bonded.map((validator) => (
          <ValidatorListItem
            type="button"
            key={validator.operator_address}
            onClick={(e) => handleValidatorClick(e, validator.operator_address)}
          >
            <span>{validator.description?.moniker}</span>
          </ValidatorListItem>
        ))}
      </ValidatorList>
    </>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const HiddenAmountInput = styled.input`
  display: none;
`;

const ModalTitle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const ValidatorList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: scroll;
`;

const ValidatorListItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-radius: 12px;
  background: #4b4f5b;
  margin-top: 4px;
  cursor: pointer;
`;

const ValidatorBox = styled.div`
  display: flex;
  align-items: center;
`;

const ValidatorProfilePicture = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;
