import {
  useState,
  type HTMLAttributes,
  type ChangeEvent,
  useEffect,
  type MouseEvent,
} from "react";
import styled from "@emotion/styled";
import { Dec, DecUtils, IntPretty } from "@keplr-wallet/unit";
import { Modal } from "@common/components";
import { useFormContext, useWatch } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { osmosisInfo } from "../../utils";
import { MessageContainer } from "@common/components/src/MessageContainer";
import { osmosisValidatorQuery, osmosisValidatorsQuery } from "../../queries";

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
  const selectedValidatorAddress: string =
    useWatch({
      control,
      name: `transactions.${index}.validatorAddress`,
    }) ?? "";
  const baseDenomAmount: string =
    useWatch({
      control,
      name: `transactions.${index}.amount.amount`,
    }) ?? "";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountInputValue, setAmountInputValue] = useState("");
  const { chain, stakingToken, coinDecimal } = osmosisInfo;
  const baseDenom = stakingToken?.base;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let numericValue = inputValue.replace(/[^0-9.]/g, "");

    if (numericValue === ".") return setAmountInputValue("0.");

    const decimalCount = numericValue.split(".").length - 1;
    if (decimalCount > 1) {
      numericValue = numericValue.slice(0, numericValue.lastIndexOf("."));
    }

    if (/^0[0-9]+/.test(inputValue)) {
      numericValue = numericValue.replace(/^0+/, "");
    }

    setAmountInputValue(numericValue);
  };

  const { data: validatorData } = useQuery({
    queryKey: [
      "osmosis/validator",
      { valdatorAddress: selectedValidatorAddress },
    ],
    queryFn: () =>
      osmosisValidatorQuery({ validatorAddr: selectedValidatorAddress! }),
    enabled: selectedValidatorAddress !== "",
  });

  useEffect(function loadSavedAmount() {
    if (baseDenomAmount.length > 0 && amountInputValue.length === 0) {
      if (coinDecimal === undefined) {
        throw new Error(
          `MsgDelegate - ${chain?.chain_name} coin decimal is undefined`
        );
      }
      const amount = new IntPretty(
        new Dec(baseDenomAmount).quo(
          DecUtils.getTenExponentNInPrecisionRange(coinDecimal)
        )
      ).toString();

      handleAmountChange({
        target: { value: amount },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, []);

  useEffect(
    function setAmount() {
      if (amountInputValue.length === 0 || baseDenom === undefined) return;
      if (coinDecimal === undefined) {
        throw new Error(
          `MsgDelegate - ${chain?.chain_name} coin decimal is undefined`
        );
      }
      const actualAmount = new Dec(amountInputValue)
        .mul(DecUtils.getTenExponentNInPrecisionRange(coinDecimal))
        .truncate()
        .toString();

      setValue(`transactions.${index}.amount`, {
        amount: actualAmount,
        denom: baseDenom,
      });
    },
    [amountInputValue, baseDenom]
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
            placeholder=""
            type="text"
            value={amountInputValue}
            onChange={handleAmountChange}
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
