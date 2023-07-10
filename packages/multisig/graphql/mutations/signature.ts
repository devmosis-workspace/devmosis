import { gql } from "@apollo/client";

export const CREATE_SIGNATURE = gql`
  mutation CreateSignature($data: SignatureInput!) {
    createSignature(data: $data) {
      id
    }
  }
`;

export interface CreateSignatureInput {
  data: {
    bodyBytes: string;
    memo: string;
    sequence: number;
    signature: string;
    signerAddress: string;
    transactionId: number;
  };
}

export interface CreateSignatureResponse {
  createSignature: {
    id: string;
  };
}

export const UPDATE_SIGNATURE = gql`
  mutation UpdateSignature($signatureId: Int!, $signature: String!) {
    updateSignature(signatureId: $signatureId, signature: $signature) {
      id
    }
  }
`;

export interface UpdateSignatureInput {
  signatureId: number;
  signature: string;
  sequence: number;
}

export interface UpdateSignatureResponse {
  updateSignature: {
    id: string;
  };
}
