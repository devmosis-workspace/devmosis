"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PlayIcon } from "@/styles/icons";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import {
  OsmosisTransactionList,
  OsmosisTransactions,
} from "@chain-sources/osmosis";
import { useAtomValue } from "jotai";
import { accountAtom } from "@/atoms/accountAtom";
import { bech32 } from "bech32";
import {
  TransactionBaseFormValue,
  TxResult,
  type TransactionBaseFormValues,
} from "@common/types";
import { broadcastOsmosisTx } from "@chain-sources/osmosis/utils";
import { type MouseEvent, useState } from "react";
import { savedFormAtom } from "@/atoms/savedFormAtom";
import { TxProcessModal } from "pages/transactions/components/TxProcessModal";
import { FormSaveModal } from "pages/transactions/components/FormSaveModal";
import { SavedFormGrid } from "./components/SavedFormGrid";

export default function Home() {
  const methods = useForm<TransactionBaseFormValues>();
  const [shouldContinueBroadcastingTx, setShouldContinueBroadcastingTx] =
    useState(false);
  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "transactions",
  });
  const [isTxProcessModalOpen, setIsTxProcessModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [txResult, setTxResult] = useState<TxResult[]>([]);

  const handleTxProcessModalOpen = () => {
    setIsTxProcessModalOpen(true);
  };

  const handleTxResultClear = () => {
    setTxResult([]);
  };

  const handleTxProcessModalClose = () => {
    setIsTxProcessModalOpen(false);
    handleTxResultClear();
  };

  const handleSaveModalClose = () => {
    setIsSaveModalOpen(false);
  };

  const handleSaveModalOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSaveModalOpen(true);
  };

  const onSubmit = async (data: TransactionBaseFormValues) => {
    const onTxEvent = {
      event: {
        onFulfill(result: any) {
          setTxResult((prevResult) => [...prevResult, result]);
        },
        onError(result: any) {
          setTxResult((prevResult) => [...prevResult, result]);
        },
      },
    };
    handleTxProcessModalOpen();
    try {
      await data.transactions.reduce(
        async (
          promise: Promise<Uint8Array | null>,
          transaction: TransactionBaseFormValue
        ) => {
          try {
            await promise;

            const bech32Prefix = transaction.bech32Prefix;

            if (bech32Prefix === "osmo") {
              return broadcastOsmosisTx({ ...transaction, ...onTxEvent });
            }

            throw new Error("Invalid bech32 prefix");
          } catch (e) {
            const error = e as Error;
            console.error(error);
            if (shouldContinueBroadcastingTx) {
              return Promise.resolve(null);
            } else {
              throw error;
            }
          }
        },
        Promise.resolve(null)
      );
    } catch (error) {
      if (error instanceof Error) {
        const isRequestRejected = error.message === "Request rejected";
        if (isRequestRejected) {
          setTxResult((prevResult) => [
            ...prevResult,
            {
              status: "cancelled",
            },
          ]);
          return;
        }
      }
      throw error;
    }
  };

  const account = useAtomValue(accountAtom);
  const fieldCount = fields.length;

  const osmosisBech32Addreess = account?.find(
    (acc) => bech32.decode(acc.bech32Address).prefix === "osmo"
  )?.bech32Address;

  return (
    <>
      <Container>
        <Title>Transactions</Title>
        <Wrapper>
          <SelectAreaContainer>
            <SavedFormGrid methods={methods} />
            <SelectArea>
              <Subtitle>Select Osmosis Msgs</Subtitle>
              <OsmosisTransactionList {...{ append }} />
            </SelectArea>
          </SelectAreaContainer>
          <Basket>
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <Header>
                  <ItemText>{fieldCount} items</ItemText>

                  <ButtonContainer>
                    <SaveButton
                      type="button"
                      onClick={(e) => handleSaveModalOpen(e)}
                    >
                      <span>Save</span>
                    </SaveButton>
                    <ExecuteButton type="submit">
                      <PlayIcon />
                      <span
                        css={css`
                          margin-left: 4px;
                        `}
                      >
                        Execute
                      </span>
                    </ExecuteButton>
                  </ButtonContainer>
                </Header>
                <Divider />
                <TransactionList>
                  {fields.map((field, index) => {
                    return (
                      <OsmosisTransactions
                        id={field.id}
                        index={index}
                        myAddress={osmosisBech32Addreess}
                        typeUrl={field.typeUrl}
                      />
                    );
                  })}
                </TransactionList>
              </Form>
            </FormProvider>
          </Basket>
        </Wrapper>
      </Container>
      <TxProcessModal
        isOpen={isTxProcessModalOpen}
        onClose={handleTxProcessModalClose}
        shouldContinueBroadcastingTx={shouldContinueBroadcastingTx}
        fields={fields}
        txResult={txResult}
      />
      <FormSaveModal
        isOpen={isSaveModalOpen}
        onClose={handleSaveModalClose}
        methods={methods}
      />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const Basket = styled.div`
  width: 450px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: #242731;
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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 24px;
  background: #242731;
  padding: 24px;
  margin-right: 16px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ItemText = styled.h5`
  font-size: 18px;
  font-weight: 500;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(228, 228, 228, 0.1);
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 4px;
`;

const ExecuteButton = styled.button`
  display: flex;
  align-items: center;

  height: 40px;
  border-radius: 8px;
  background-color: #4476ff;
  padding: 0 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #2e5bff;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;

  height: 40px;
  border-radius: 8px;
  background-color: #38a888;
  padding: 0 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #2ac99c;
  }
`;

const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;
`;

const SelectAreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Subtitle = styled.h3`
  margin-bottom: 12px;
`;
