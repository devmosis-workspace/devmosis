import { gql } from "@apollo/client";

export const GET_TRANSACTION_BY_TRANSACTION_ID = gql`
  query TransactionByTransactionId($transactionId: Int!) {
    transactionByTransactionId(transactionId: $transactionId) {
      title
      description
      createdAt
      txData
      txHash
      signatures {
        memo
        signature
        signerAddress
        createdAt
        bodyBytes
      }
      MultisigAccount {
        threshold
      }
    }
  }
`;

export interface TransactionResponse {
  transactionByTransactionId: {
    title: string;
    description: string | null;
    createdAt: string;
    txData: string;
    txHash: string | null;
    signatures: {
      memo: string | null;
      signature: string;
      signerAddress: string;
      createdAt: string;
      bodyBytes: string;
    }[];
    MultisigAccount: {
      threshold: number;
    };
  };
}
