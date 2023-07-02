import { Modal } from "@common/components";
import { TransactionBaseFormValues, TxResult } from "@common/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { ComponentPropsWithoutRef } from "react";
import { FieldArrayWithId } from "react-hook-form";

interface TxProcessModalProps extends ComponentPropsWithoutRef<typeof Modal> {
  txResult: TxResult[];
  fields: FieldArrayWithId<TransactionBaseFormValues, "transactions", "id">[];
  shouldContinueBroadcastingTx: boolean;
}

export const TxProcessModal = ({
  txResult,
  fields,
  shouldContinueBroadcastingTx,
  ...props
}: TxProcessModalProps) => {
  return (
    <Modal {...props}>
      {fields.map((field, index) => {
        const { id, typeUrl } = field;
        const currentTxResult: TxResult | undefined = txResult[index];

        const isTxResultExist = currentTxResult !== undefined;
        const isAllCancelled = shouldContinueBroadcastingTx
          ? false
          : txResult.some((txResult) => txResult.status === "cancelled");

        const errorMessage = (() => {
          if (!isTxResultExist) {
            return null;
          } else if (currentTxResult.status === "error") {
            return currentTxResult.data?.result?.tx_result?.log;
          }
          return null;
        })();

        const statusMessage = (() => {
          if (isAllCancelled) {
            return "Cancelled";
          } else if (!isTxResultExist) {
            return "In progress";
          } else if (currentTxResult.status === "success") {
            return "Success";
          } else if (currentTxResult.status === "error") {
            return "Failure";
          } else if (currentTxResult.status === "cancelled") {
            return "Cancelled";
          }
          return "";
        })();

        return (
          <TransactionItem key={id}>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <TitleArea>
                <span>{index + 1}</span>
                <span>{typeUrl}</span>
              </TitleArea>
              <StatusArea>
                <span>{statusMessage}</span>
              </StatusArea>
            </div>
            {errorMessage !== null ? (
              <ErrorTextArea>
                <ErrorText>{errorMessage}</ErrorText>
              </ErrorTextArea>
            ) : null}
          </TransactionItem>
        );
      })}
    </Modal>
  );
};

const TransactionItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
`;

const TitleArea = styled.div`
  display: flex;
  gap: 8px;
`;

const StatusArea = styled.div`
  display: flex;
`;

const ErrorTextArea = styled.div`
  display: flex;
`;

const ErrorText = styled.span`
  margin-top: 4px;
  color: #ff0000;
`;
