import { Modal } from "@/components/Modal";
import { Typography } from "@/components/Typography";
import { type ChangeEvent, useEffect, useState } from "react";
import { pubkeyToAddress } from "@cosmjs/amino";
import { Dropdown } from "@/components/Dropdown";
import { supportedChainInfos } from "@/constants/supportedChainInfos";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { type Chain } from "chain-registry";
import { useAtomValue } from "jotai";
import { accountAtom } from "@/atoms/accountAtom";
import axios from "axios";
import { toast } from "react-toastify";
import { Bech32Address } from "@keplr-wallet/cosmos";
import { useMutation } from "@apollo/client";
import {
  CREATE_MULTISIG_ACCOUNT_DRAFT,
  CreateMultisigAccountDraftInput,
  type CreateMultisigAccountDraftResponse,
} from "@/graphql/mutations/createMultisigAccountDraft";
import { useRouter } from "next/navigation";

interface Account {
  account: {
    "@type": string;
    address: string;
    pub_key: {
      "@type": string;
      key: string;
    };
    account_number: string;
    sequence: string;
  };
}

interface AccountCreateModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const AccountCreateModal = ({
  isOpen,
  handleClose,
}: AccountCreateModalProps) => {
  const chainInfos = supportedChainInfos;
  const accounts = useAtomValue(accountAtom);
  const router = useRouter();
  const [threshold, setThreshold] = useState(0);
  const [accountName, setAccountName] = useState("");
  const [selectedChain, setSelectedChain] = useState<Chain | null>(null);
  const [addressesForMultisig, setAddressesForMultisig] = useState<
    Record<number, string>
  >({});

  const [createMultisigAccountDraft, { loading, error }] = useMutation<
    CreateMultisigAccountDraftResponse,
    CreateMultisigAccountDraftInput
  >(CREATE_MULTISIG_ACCOUNT_DRAFT);

  useEffect(
    function resetThreshold() {
      const addressCount = Object.keys(addressesForMultisig).length;
      setThreshold(addressCount);
    },
    [addressesForMultisig]
  );

  const handleModalClose = () => {
    if (loading) return;

    handleClose();
  };

  const handleAccountNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
  };

  const handleAddAddress = () => {
    setAddressesForMultisig((prev) => {
      const nextIndex = Object.keys(prev).length;
      return {
        ...prev,
        [nextIndex]: "",
      };
    });
  };

  const handleRemoveAddress = (index: number) => {
    setAddressesForMultisig((prev) => {
      const next = { ...prev };
      delete next[index];
      return next;
    });
  };

  const handleAddressChange = (index: number, value: string) => {
    setAddressesForMultisig((prev) => {
      return {
        ...prev,
        [index]: value,
      };
    });
  };

  const handleThresholdMinus = () => {
    setThreshold((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  const handleThresholdPlus = () => {
    setThreshold((prev) => {
      if (prev === Object.keys(addressesForMultisig).length) return prev;
      return prev + 1;
    });
  };

  const addressToPubkey = async (address: string) => {
    const restEndpoint = selectedChain?.apis?.rest?.[2];
    if (restEndpoint === undefined) {
      throw new Error("Rest endpoint is undefined");
    }
    const accountData = await axios.get<Account>(
      `${restEndpoint.address}/cosmos/auth/v1beta1/accounts/${address}`
    );

    if (
      accountData?.data?.account.pub_key === null ||
      accountData?.data?.account.pub_key === undefined
    ) {
      throw new Error("Pubkey is null");
    }
    return accountData.data.account.pub_key.key;
  };

  const handleCreateMultisig = async () => {
    if (accountName === "") {
      toast("Please enter account name", { type: "error" });
      return;
    }

    if (selectedChain === null) {
      toast("Please select a chain", { type: "error" });
      return;
    }

    if (Object.keys(addressesForMultisig).length === 1) {
      toast("Please add more addresses", { type: "error" });
      return;
    }

    if (Object.values(addressesForMultisig).includes("")) {
      toast("Please fill all addresses", { type: "error" });
      return;
    }

    try {
      for (const address of Object.values(addressesForMultisig)) {
        Bech32Address.validate(address, selectedChain.bech32_prefix);
      }
    } catch {
      toast("Invalid address, please check again", { type: "error" });
      return;
    }

    try {
      const addresses = Object.values(addressesForMultisig);

      const pubkeys = await Promise.all(addresses.map(addressToPubkey));

      const multisigPubkey = {
        type: "tendermint/PubKeyMultisigThreshold",
        value: {
          threshold: String(threshold),
          pubkeys: pubkeys.map((pubkey) => ({
            type: "tendermint/PubKeySecp256k1",
            value: pubkey,
          })),
        },
      };
      const multisigAddressFromPubkey = pubkeyToAddress(
        multisigPubkey,
        selectedChain?.bech32_prefix
      );

      const myAddress = addressesForMultisig[0];
      const { data } = await createMultisigAccountDraft({
        variables: {
          data: {
            address: multisigAddressFromPubkey,
            name: accountName,
            bech32Prefix: selectedChain.bech32_prefix,
            description: null,
            myAddress,
            threshold,
            ownersAddresses: addresses,
          },
        },
      });
      if (data === null || data === undefined) {
        throw new Error("Data is null");
      }
      router.push(`/accounts/${data.createMultisigAccountDraft.address}`);
    } catch (e) {
      const error = e as Error;
      toast(error.message, { type: "error" });
      return;
    }
  };

  return (
    <Modal
      title="Create Multisig Account"
      isOpen={isOpen}
      onClose={handleModalClose}
      footer={
        <div className="w-full flex justify-end">
          <button
            type="button"
            onClick={handleModalClose}
            disabled={loading}
            className="flex justify-center items-center w-[110px] h-[40px] bg-[#F2F4F6] rounded mr-2"
          >
            <Typography.SMText className="text-[#778CA2]">
              CANCEL
            </Typography.SMText>
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={handleCreateMultisig}
            className="flex justify-center items-center w-[110px] h-[40px] bg-[#4D7CFE] rounded"
          >
            <Typography.SMText className="text-white">
              {loading ? "LOADING" : "CREATE"}
            </Typography.SMText>
          </button>
        </div>
      }
    >
      <div className="flex flex-col mb-3">
        <Typography.SMText className="text-[#252631] mb-3">
          Enter a multisig account name (Max 30 characters)
        </Typography.SMText>
        <input
          type="text"
          className="w-[430px] h-[40px] rounded border-[1px] border-[#E5E7EB] px-3 mr-2"
          value={accountName}
          onChange={handleAccountNameChange}
          maxLength={30}
        />
      </div>
      <div className="flex flex-col w-[300px]">
        <Typography.SMText className="text-[#252631] mb-3">
          Select a chain
        </Typography.SMText>
        <Dropdown
          currentValue={
            selectedChain !== null ? (
              <div className="flex items-center">
                {selectedChain.logo_URIs?.svg !== undefined &&
                selectedChain.logo_URIs?.png !== undefined ? (
                  <Image
                    src={
                      selectedChain.bech32_prefix === "agoric"
                        ? "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg"
                        : selectedChain.logo_URIs.svg ??
                          selectedChain.logo_URIs.png
                    }
                    alt={selectedChain.pretty_name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                ) : null}
                <Typography.SMText className="text-[#252631]">
                  {selectedChain?.pretty_name}
                </Typography.SMText>
              </div>
            ) : null
          }
          placeholder="Select a chain"
        >
          {(handleClose) => (
            <>
              {chainInfos.map((chain) => {
                return (
                  <button
                    key={chain.bech32_prefix}
                    className="flex items-center py-2"
                    onClick={() => {
                      setSelectedChain(chain);
                      const selectedChainAddress = accounts?.find(
                        (account) => account[chain.bech32_prefix] !== undefined
                      )?.[chain.bech32_prefix];

                      if (selectedChainAddress !== undefined) {
                        setAddressesForMultisig({
                          0: selectedChainAddress.bech32Address,
                        });
                      }
                      handleClose();
                    }}
                  >
                    {chain.logo_URIs?.svg !== undefined &&
                    chain.logo_URIs?.png !== undefined ? (
                      <Image
                        src={
                          chain.bech32_prefix === "agoric"
                            ? "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg"
                            : chain.logo_URIs.svg ?? chain.logo_URIs.png
                        }
                        alt={chain.pretty_name}
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                    ) : null}

                    <Typography.SMText
                      className={twMerge(
                        "text-[#252631]",
                        chain.bech32_prefix === selectedChain?.bech32_prefix &&
                          "text-[#4D7CFE]"
                      )}
                    >
                      {chain.pretty_name}
                    </Typography.SMText>
                  </button>
                );
              })}
            </>
          )}
        </Dropdown>
      </div>

      <div className="flex flex-col mt-3">
        <Typography.SMText className="text-[#252631] mb-3">
          Enter the addresses
        </Typography.SMText>
        <div className="flex flex-col max-h-[350px] overflow-y-auto">
          {Object.keys(addressesForMultisig).map((_, index) => {
            return (
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  disabled={index === 0}
                  className="w-[430px] h-[40px] rounded border-[1px] border-[#E5E7EB] px-3 mr-2"
                  value={addressesForMultisig[index]}
                  onChange={(e) => handleAddressChange(index, e.target.value)}
                />
                {index !== 0 ? (
                  <button
                    type="button"
                    className="flex justify-center items-center w-[40px] h-[40px] rounded bg-[#FE4D97]/10"
                    onClick={() => handleRemoveAddress(index)}
                  >
                    <Typography.LGText className="text-[#FE4D97]">
                      -
                    </Typography.LGText>
                  </button>
                ) : null}
              </div>
            );
          })}
          <button
            type="button"
            className="flex justify-center items-center w-[120px] h-[40px] shrink-0 rounded bg-[#4D7CFE]/10"
            onClick={handleAddAddress}
          >
            <Typography.SMText className="text-[#4D7CFE]">
              + Add address
            </Typography.SMText>
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-3">
        <Typography.SMText className="text-[#252631] mb-3">
          Enter the threshold
        </Typography.SMText>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={handleThresholdMinus}
            className="flex justify-center items-center w-10 h-10 bg-[#FE4D97]/10 rounded"
          >
            <Typography.LGText className="text-[#FE4D97]">-</Typography.LGText>
          </button>
          <div className="flex justify-center items-center w-10 h-10 bg-white border border-[#E8ECEF] rounded">
            <Typography.H5 className="text-[#778CA2]">
              {threshold}
            </Typography.H5>
          </div>
          <button
            type="button"
            onClick={handleThresholdPlus}
            className="flex justify-center items-center w-10 h-10 bg-[#4D7CFE]/10 rounded"
          >
            <Typography.LGText className="text-[#4D7CFE]">+</Typography.LGText>
          </button>
        </div>
      </div>
    </Modal>
  );
};
