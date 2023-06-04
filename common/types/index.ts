export type TransactionBaseFormValues = {
  transactions: TransactionBaseFormValue[];
};

export type TransactionBaseFormValue = {
  typeUrl: string;
  bech32Prefix: string;
  memo: string;
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

export interface TxResult {
  status: "success" | "error";
  data: Record<string, any>;
}
export interface TxEvent {
  event?: {
    onError?: (data: any) => void;
    onFulfill?: (data: any) => void;
  };
}
