import { gql } from "@apollo/client";

export const CREATE_MULTISIG_ACCOUNT_DRAFT = gql`
  mutation CreateMultisigAccountDraft($data: MultisigAccountDraftInput!) {
    createMultisigAccountDraft(data: $data) {
      address
    }
  }
`;

export interface CreateMultisigAccountDraftInput {
  data: {
    address: string;
    bech32Prefix: string;
    description: string | null;
    name: string;
    threshold: number;
    pubKeyJSON: string;
    ownersJSON: string[];
    myAddress: string;
  };
}

export interface CreateMultisigAccountDraftResponse {
  createMultisigAccountDraft: {
    address: string;
  };
}
