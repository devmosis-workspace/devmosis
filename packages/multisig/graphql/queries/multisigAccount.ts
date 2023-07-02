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
