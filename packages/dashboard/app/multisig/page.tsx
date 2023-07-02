"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { osmosisAccountQuery } from "@chain-sources/osmosis";
import { pubkeyToAddress } from "@cosmjs/amino";

export default function Multisig() {
 const [multisigAddress, setMultisigAddress] = useState("");
 const [multisigMembersPubkey, setMultisigMembersPubkey] = useState("");
  const [addressesForMultisig, setAddressesForMultisig] = useState<
    Record<number, string>
  >({
    0: "osmo1xs55snr6lxsalaqrwc63cxlmgn437zzvnemwat",
    1: "osmo1sdhal4ddnqnnqp8d5ymz3nzh9utsw2el2de6vv",
  });

  const [threshold, setThreshold] = useState(2);

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
    const osmosisAccount = await osmosisAccountQuery({ address });
    return osmosisAccount.pub_key.key;
  };

  const handleCreateMultisig = async () => {
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
    const multisigAddressFromPubkey= pubkeyToAddress(multisigPubkey, "osmo");

    setMultisigAddress(multisigAddressFromPubkey);
  };

  return (
    <div>
      <h1>Multisig</h1>
      <Box>
        <button
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 40px;
            border-radius: 8px;
            margin-bottom: 8px;
            background-color: #636d90;
          `}
          onClick={handleAddAddress}
        >
          <Text>Add Address</Text>
        </button>
        {Object.entries(addressesForMultisig).map(([index, address]) => {
          return (
            <div key={index}>
              <input
                value={address}
                onChange={(e) =>
                  handleAddressChange(Number(index), e.target.value)
                }
              />
              <button
                css={css`
                  margin-left: 8px;
                `}
                onClick={() => handleRemoveAddress(Number(index))}
              >
                <Text>Remove</Text>
              </button>
            </div>
          );
        })}
        <h3>Threshold</h3>
        <div
          css={css`
            display: flex;
            margin-top: 8px;
          `}
        >
          <button
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 8px;
              background-color: #636d90;
            `}
            onClick={handleThresholdMinus}
          >
            <Text>-</Text>
          </button>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 8px;
              background-color: #636d90;
              margin-left: 8px;
              margin-right: 8px;
            `}
          >
            <Text>{threshold}</Text>
          </div>
          <button
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 8px;
              background-color: #636d90;
            `}
            onClick={handleThresholdPlus}
          >
            <Text>+</Text>
          </button>
        </div>
        <button
          onClick={handleCreateMultisig}
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 40px;
            border-radius: 8px;
            margin-top: 8px;
            background-color: #636d90;
          `}
        >
          <Text>Create Multisig</Text>
        </button>
        <div
            css={css`
                margin-top: 8px;
            `}
            >
            <h3>Multisig Address</h3>
            <Text>{multisigAddress}</Text>
        </div>
      </Box>
    </div>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: #242731;
  padding: 24px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 22px;
    left: 18px;
    right: 18px;
    bottom: -40px;
    z-index: -2;
    background: #000;
    opacity: 0.51;
    filter: blur(86.985px);
    border-radius: 24px;
  }
`;

const Text = styled.span`
  color: #fff;
`;
