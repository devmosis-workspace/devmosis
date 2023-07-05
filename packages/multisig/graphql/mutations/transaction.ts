import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($data: TransactionInput!) {
    createTransaction(data: $data) {
      id
    }
  }
`;

export interface CreateTransactionInput {
  data: {
    title: string;
    description: string | null;
    multisigAccountId: number;
    txDataJSON: string;
  };
}

export interface CreateTransactionResponse {
  createTransaction: {
    id: number;
  };
}
