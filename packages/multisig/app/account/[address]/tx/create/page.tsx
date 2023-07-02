"use client";

import {
  CREATE_TRANSACTION,
  CreateTransactionInput,
  type CreateTransactionResponse,
} from "@/graphql/mutations/transaction";
import {
  GET_MULTISIG_ACCOUNT_BY_ADDRESS,
  MultisigAccountResponse,
} from "@/graphql/queries/multisigAccount";
import { useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateTransaction() {
  const params = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [multisigAccountId, setMultisigAccountId] = useState("");
  const [txData, setTxData] = useState("");

  const { data: accountData } = useSuspenseQuery<MultisigAccountResponse>(
    GET_MULTISIG_ACCOUNT_BY_ADDRESS,
    {
      variables: {
        multisigAddress: params?.address,
      },
      skip: params?.address === undefined,
    }
  );

  const [createTransaction, { loading }] = useMutation<
    CreateTransactionResponse,
    CreateTransactionInput
  >(CREATE_TRANSACTION);

  const handleCreateTransaction = async () => {
    if (accountData?.multisigAccountByMultisigAddress === undefined) {
      toast.error("Invalid multisig account");
      return;
    }

    if (title === "") {
      toast.error("Title is required");
      return;
    }
    
    if (txData === "") {
      toast.error("Transaction data is required");
      return;
    }

    const { data } = await createTransaction({
      variables: {
        data: {
          title,
          description: description === "" ? null : description,
          multisigAccountId: accountData.multisigAccountByMultisigAddress.id,
          txData,
        },
      },
    });

    if (
      data?.createTransaction === null ||
      data?.createTransaction === undefined
    ) {
      toast.error("Failed to create transaction");
      return;
    }
    router.push(`/tx/${data?.createTransaction.id}`);
  };

  return <div>page</div>;
}
