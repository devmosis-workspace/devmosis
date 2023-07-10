import { gql } from "@apollo/client";

export const GET_MULTISIG_ACCOUNTS_BY_OWNER_ADDRESS = gql`
  query getMultisigAccountsByOwnerAddress($ownerAddresses: [String!]!) {
    multisigAccountsByOwnerAddress(ownerAddresses: $ownerAddresses) {
      id
      address
      bech32Prefix
      description
      name
      threshold
      transactions {
        txHash
        title
        signatures {
          signerAddress
        }
      }
      owners {
        rejected
        address
        certified
      }
    }
  }
`;

export interface MultisigAccountsResponse {
  multisigAccountsByOwnerAddress: {
    __typename: string;
    address: string;
    bech32Prefix: string;
    description: string | null;
    id: string;
    name: string;
    threshold: number;
    transactions: {
      __typename: string;
      txHash: string | null;
      title: string;
      signatures: {
        __typename: string;
        signerAddress: string;
      }[];
    }[];
    owners: {
      __typename: string;
      rejected: boolean;
      address: string;
      certified: boolean;
    }[];
  }[];
}

export const GET_MULTISIG_ACCOUNT_BY_ADDRESS = gql`
  query Query($multisigAddress: String!) {
    multisigAccountByMultisigAddress(multisigAddress: $multisigAddress) {
      id
      address
      bech32Prefix
      description
      name
      owners {
        name
        pubKeyJSON
        address
        certified
        rejected
      }
      threshold
      transactions {
        id
        title
        createdAt
        description
        txHash
        signatures {
          signerAddress
        }
      }
    }
  }
`;

export interface MultisigAccountResponse {
  multisigAccountByMultisigAddress: {
    id: string;
    address: string;
    bech32Prefix: string;
    description: string | null;
    name: string;
    owners: {
      name: string;
      address: string;
      pubKeyJSON: string;
      certified: boolean;
      rejected: boolean;
    }[];
    threshold: number;
    transactions: {
      id: string;
      title: string;
      createdAt: string;
      description: string | null;
      txHash: string | null;
      signatures: {
        signerAddress: string;
      }[];
    }[];
  };
}
