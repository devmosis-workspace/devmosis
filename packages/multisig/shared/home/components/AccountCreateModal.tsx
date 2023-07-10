import { Modal } from "@/components/Modal";
import { Typography } from "@/components/Typography";
import { type ChangeEvent, useEffect, useState } from "react";
import { createMultisigThresholdPubkey, pubkeyToAddress } from "@cosmjs/amino";
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
} from "@/graphql/mutations/multisigAccount";
import { useRouter } from "next/navigation";
import { AddressPubKeyInput } from "./AddressPubKeyInput";
import { Account } from "@/types/Account";

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
  const [addressDataForMultisig, setAddressDataForMultisig] = useState<
    Record<
      number,
      {
        address: string | null;
        pubKey: string | null;
      }
    >
  >({});

  const [createMultisigAccountDraft, { loading }] = useMutation<
    CreateMultisigAccountDraftResponse,
    CreateMultisigAccountDraftInput
  >(CREATE_MULTISIG_ACCOUNT_DRAFT);

  useEffect(
    function resetThreshold() {
      const addressCount = Object.keys(addressDataForMultisig).length;
      setThreshold(addressCount);
    },
    [addressDataForMultisig]
  );

  const handleModalClose = () => {
    if (loading) return;

    handleClose();
  };

  const handleAccountNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
  };

  const handleAddAddress = () => {
    setAddressDataForMultisig((prev) => {
      const nextIndex = Object.keys(prev).length;
      return {
        ...prev,
        [nextIndex]: {
          address: null,
          pubKey: null,
        },
      };
    });
  };

  const handleRemoveAddress = (index: number) => {
    setAddressDataForMultisig((prev) => {
      const next = { ...prev };
      delete next[index];
      return next;
    });
  };

  const handleAddressChange = (index: number, value: string | null) => {
    setAddressDataForMultisig((prev) => {
      return {
        ...prev,
        [index]: {
          ...prev[index],
          address: value,
        },
      };
    });
  };

  const handlePubKeyChange = (index: number, value: string | null) => {
    setAddressDataForMultisig((prev) => {
      return {
        ...prev,
        [index]: {
          ...prev[index],
          pubKey: value,
        },
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
      if (prev === Object.keys(addressDataForMultisig).length) return prev;
      return prev + 1;
    });
  };

  const addressDataToPubkey = async (
    address: string | null,
    pubKey: string | null
  ) => {
    if (pubKey !== null) {
      return {
        type: "tendermint/PubKeySecp256k1",
        value: pubKey,
      };
    }
    const restEndpoint = selectedChain?.apis?.rest?.[2];
    if (restEndpoint === undefined) {
      throw new Error("Rest endpoint is undefined");
    }
    try {
      const accountData = await axios.get<Account>(
        `${restEndpoint.address}/cosmos/auth/v1beta1/accounts/${address}`
      );

      return {
        type: "tendermint/PubKeySecp256k1",
        value: accountData.data.account.pub_key.key,
      };
    } catch {
      throw new Error(
        `Failed to get account data for "${address}".\nPlease enter the public key instead of the address.`
      );
    }
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

    if (Object.keys(addressDataForMultisig).length === 1) {
      toast("Please add more addresses", { type: "error" });
      return;
    }

    if (
      Object.values(addressDataForMultisig).find(
        (v) => v.address === null && v.pubKey === null
      )
    ) {
      toast("Please fill all addresses", { type: "error" });
      return;
    }

    try {
      for (const { address } of Object.values(addressDataForMultisig)) {
        if (address !== null && address !== "") {
          Bech32Address.validate(address, selectedChain.bech32_prefix);
        }
      }
    } catch {
      toast("Invalid address, please check again", { type: "error" });
      return;
    }

    try {
      const addressData = Object.values(addressDataForMultisig);

      const pubkeys = await Promise.all(
        addressData.map(({ address, pubKey }) =>
          addressDataToPubkey(address, pubKey)
        )
      );

      const multisigPubkey = createMultisigThresholdPubkey(pubkeys, threshold);

      const multisigAddressFromPubkey = pubkeyToAddress(
        multisigPubkey,
        selectedChain?.bech32_prefix
      );

      const myAddress =
        addressDataForMultisig[0].address ??
        pubkeyToAddress(
          {
            type: "tendermint/PubKeySecp256k1",
            value: addressDataForMultisig[0].pubKey!,
          },
          selectedChain?.bech32_prefix
        );

      const owners = addressData.map((addressData, index) => {
        const address =
          addressData.address ??
          pubkeyToAddress(
            {
              type: "tendermint/PubKeySecp256k1",
              value: addressData.pubKey!,
            },
            selectedChain?.bech32_prefix
          );
        const pubKey = pubkeys[index];
        return JSON.stringify({
          address,
          pubKey,
        });
      });

      const { data } = await createMultisigAccountDraft({
        variables: {
          data: {
            address: multisigAddressFromPubkey,
            name: accountName,
            pubKeyJSON: JSON.stringify(multisigPubkey),
            bech32Prefix: selectedChain.bech32_prefix,
            description: null,
            myAddress,
            threshold,
            ownersJSON: owners,
          },
        },
      });
      if (data === null || data === undefined) {
        throw new Error("Data is null");
      }
      router.push(`/account/${data.createMultisigAccountDraft.address}`);
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
                        setAddressDataForMultisig({
                          0: {
                            pubKey: Buffer.from(
                              selectedChainAddress.pubKey
                            ).toString("base64"),
                            address: selectedChainAddress.bech32Address,
                          },
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
          Enter the address or pubkey
        </Typography.SMText>
        <div className="flex flex-col max-h-[350px] overflow-y-auto">
          {Object.keys(addressDataForMultisig).map((_, index) => {
            return (
              <div key={index} className="flex mb-2">
                <AddressPubKeyInput
                  disabled={index === 0}
                  addressData={addressDataForMultisig[index]}
                  currentIndex={index}
                  onAddressChange={handleAddressChange}
                  onPubKeyChange={handlePubKeyChange}
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
