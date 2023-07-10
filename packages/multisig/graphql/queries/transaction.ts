import { gql } from "@apollo/client";

export const GET_TRANSACTION_BY_TRANSACTION_ID = gql`
  query TransactionByTransactionId($transactionId: Int!) {
    transactionByTransactionId(transactionId: $transactionId) {
      id
      title
      description
      createdAt
      txDataJSON
      txHash
      signatures {
        id
        memo
        sequence
        signature
        signerAddress
        createdAt
        bodyBytes
      }
      MultisigAccount {
        address
        pubKeyJSON
        threshold
        bech32Prefix
      }
    }
  }
`;

export interface TransactionResponse {
  transactionByTransactionId: {
    id: string;
    title: string;
    description: string | null;
    createdAt: string;
    txDataJSON: string;
    txHash: string | null;
    signatures: {
      id: string;
      memo: string | null;
      sequence: number;
      signature: string;
      signerAddress: string;
      createdAt: string;
      bodyBytes: string;
    }[];
    MultisigAccount: {
      address: string;
      pubKeyJSON: string;
      threshold: number;
      bech32Prefix: string;
    };
  };
}
