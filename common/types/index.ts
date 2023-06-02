export type TransactionFormValues = {
  transactions: {
    typeUrl: string;
    bech32Prefix: string;
  }[];
};

export interface AminoMsg {
  type: string;
  value: any;
}

export interface QueryAccountResponse {
  account?: {
    "@type": string;
    address: string;
    account_number: string;
    sequence: string;
    pub_key: {
      "@type": string;
      key: string;
    };
  };
}
