"use client";

import { Typography } from "@/components/Typography";
import {
  CREATE_TRANSACTION,
  CreateTransactionInput,
  type CreateTransactionResponse,
} from "@/graphql/mutations/transaction";
import {
  GET_MULTISIG_ACCOUNT_BY_ADDRESS,
  MultisigAccountResponse,
} from "@/graphql/queries/multisigAccount";
import TextareaAutosize from "react-textarea-autosize";
import { useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useParams, useRouter } from "next/navigation";
import { type ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

export default function CreateTransaction() {
  const params = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [txDataJSON, setTxDataJSON] = useState("");

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

    if (txDataJSON === "") {
      toast.error("Transaction data is required");
      return;
    }

    try {
      JSON.parse(txDataJSON);
    } catch {
      toast.error("Invalid transaction data");
      return;
    }

    try {
      const { data } = await createTransaction({
        variables: {
          data: {
            title,
            description: description === "" ? null : description,
            multisigAccountId: parseInt(
              accountData.multisigAccountByMultisigAddress.id,
              10
            ),
            txDataJSON,
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
      router.push(
        `/account/${params?.address}/tx/${data?.createTransaction.id}`
      );
    } catch {
      toast.error("Failed to create transaction");
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleTxDataChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    try {
      if (txDataJSON === "") {
        const parsedTxData = JSON.parse(e.target.value);
        const prettyTxData = JSON.stringify(parsedTxData, null, 4);
        setTxDataJSON(prettyTxData);
      } else {
        setTxDataJSON(e.target.value);
      }
    } catch {
      setTxDataJSON(e.target.value);
    }
  };

  return (
    <div className="max-w-[600px] flex flex-col w-full rounded bg-white p-6 mx-auto">
      <Typography.H3>Create a Transaction</Typography.H3>

      <Typography.SMText className="text-[#252631] my-3">
        Title (Max 50 characters)
      </Typography.SMText>
      <input
        type="text"
        className="w-[430px] h-[40px] rounded border-[1px] border-[#E5E7EB] px-3 mr-2"
        value={title}
        onChange={handleTitleChange}
        maxLength={50}
      />

      <Typography.SMText className="text-[#252631] my-3">
        Description (Optional)
      </Typography.SMText>
      <TextareaAutosize
        value={description}
        onChange={handleDescriptionChange}
        minRows={4}
        className="border-[1px] border-[#E5E7EB] p-3 resize-none"
        maxLength={500}
      />

      <Typography.SMText className="text-[#252631] my-3">
        Transaction Data (Paste your unsignedTx.json here)
      </Typography.SMText>
      <TextareaAutosize
        value={txDataJSON}
        onChange={handleTxDataChange}
        minRows={10}
        className="border-[1px] border-[#E5E7EB] p-3 resize-none"
      />
      <button
        type="button"
        disabled={loading}
        onClick={handleCreateTransaction}
        className="flex justify-center items-center w-[110px] h-[40px] bg-[#4D7CFE] rounded ml-auto mt-4"
      >
        <Typography.SMText className="text-white">
          {loading ? "LOADING" : "CREATE"}
        </Typography.SMText>
      </button>
    </div>
  );
}
