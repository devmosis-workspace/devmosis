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
    id: string;
  };
}

export const UPDATE_TRANSACTION_TX_HASH = gql`
  mutation UpdateTransactionTxHash($transactionId: Int!, $txHash: String!) {
    updateTransactionTxHash(transactionId: $transactionId, txHash: $txHash) {
      id
    }
  }
`;

export interface UpdateTransactionTxHashInput {
  transactionId: number;
  txHash: string;
}

export interface UpdateTransactionTxHashResponse {
  updateTransactionTxHash: {
    id: string;
  };
}
