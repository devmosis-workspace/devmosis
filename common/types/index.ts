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

export type TxResult =
  | {
      status: "success" | "error";
      data: Record<string, any>;
    }
  | {
      status: "cancelled";
      data?: undefined;
    };
export interface TxEvent {
  txEvent?: {
    onError?: (data: any) => void;
    onFulfill?: (data: any) => void;
  };
}

export interface Any {
  typeUrl: string;
  value: Uint8Array;
}

export interface Account {
  "@type": string;
  address: string;
  pub_key: {
    "@type": string;
    key: string;
  };
  account_number: string;
  sequence: string;
}
