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
import { type TransactionFormValues } from "@common/types";

export default function Home() {
  const methods = useForm<TransactionFormValues>();
  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "transactions",
  });

  const handleSubmit = () => {
    methods.handleSubmit((data) => console.log(data));
  };

  const account = useAtomValue(accountAtom);
  const fieldCount = fields.length;

  const osmosisBech32Addreess = account?.find(
    (acc) => bech32.decode(acc.bech32Address).prefix === "osmo"
  )?.bech32Address;

  return (
    <Container>
      <Title>Transactions</Title>
      <Wrapper>
        <SelectArea>
          <OsmosisTransactionList {...{ append }} />
        </SelectArea>
        <Basket>
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit}>
              <Header>
                <Subtitle>{fieldCount} items</Subtitle>
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
              </Header>
              <Divider />
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
            </Form>
          </FormProvider>
        </Basket>
      </Wrapper>
    </Container>
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
  margin-right: 24px;
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Subtitle = styled.h5`
  font-size: 18px;
  font-weight: 500;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(228, 228, 228, 0.1);
  margin: 20px 0;
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

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
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
