import { cosmos } from "@chain-clients/osmosis";
import { type MsgDelegate } from "@chain-clients/osmosis/types/codegen/cosmos/staking/v1beta1/tx";
import { type Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";
import type { AminoMsg, QueryAccountResponse } from "@common/types";
import { getKeplrFromWindow, escapeHTML, calculateStdFee } from "@common/utils";
import {
  broadcastOsmosisAminoTx,
  broadcastOsmosisProtoTx,
  osmosisInfo,
  simulateOsmosisTx,
} from "../utils";

export const msgDelegate = async (formValues: MsgDelegate) => {
  const { delegatorAddress, validatorAddress, amount } = formValues;
  const { chain } = osmosisInfo;
  const chainId = chain.chain_id;
  const restEndpoint = chain?.apis?.rest?.[0].address ?? "";

  const { AminoConverter, MessageComposer } = cosmos.staking.v1beta1;

  const { aminoType, toAmino } =
    AminoConverter["/cosmos.staking.v1beta1.MsgDelegate"];
  try {
    const keplr = await getKeplrFromWindow();

    if (keplr === undefined) return;

    const { bech32Address, isNanoLedger } = await keplr.getKey(chainId);
    const memo = escapeHTML("");

    const aminoMsg: AminoMsg = {
      type: aminoType,
      value: toAmino({
        delegatorAddress,
        validatorAddress,
        amount,
      }),
    };
    const protoMsg: Any = MessageComposer.encoded.delegate({
      delegatorAddress,
      validatorAddress,
      amount,
    });
    const aminoMsgs = [aminoMsg];
    const protoMsgs = [protoMsg];

    const {
      cosmos: {
        auth: {
          v1beta1: { account },
        },
      },
    } = await cosmos.ClientFactory.createLCDClient({
      restEndpoint,
    });

    const { account: myAccount } = (await account({
      address: bech32Address,
    })) as QueryAccountResponse;

    const baseDenom = chain.fees?.fee_tokens[0].denom;
    if (myAccount === undefined || baseDenom === undefined) return;

    const { simulatedTx } = await simulateOsmosisTx({
      isNanoLedger,
      memo,
      protoMsgs,
      pubKey: {
        "@type": myAccount.pub_key["@type"],
        key: myAccount.pub_key.key,
      },
      sequence: myAccount.sequence,
      baseDenom,
    });

    const gasUsed = simulatedTx?.gas_info?.gas_used as string | undefined;
    const averageGasPrice = chain.fees?.fee_tokens[0].average_gas_price;

    if (
      gasUsed === undefined ||
      averageGasPrice === undefined ||
      baseDenom === undefined
    )
      return;

    const { stdFee } = calculateStdFee({
      averageGasPrice,
      gasUsed,
      baseDenom,
    });

    if (isNanoLedger) {
      return await broadcastOsmosisAminoTx({
        keplr,
        chainId,
        stdFee,
        memo,
        bech32Address,
        aminoMsgs,
        protoMsgs,
        sequence: myAccount.sequence,
        accountNumber: myAccount.account_number,
      });
    } else {
      return await broadcastOsmosisProtoTx({
        keplr,
        chainId,
        stdFee,
        memo,
        bech32Address,
        protoMsgs,
        sequence: myAccount.sequence,
        accountNumber: myAccount.account_number,
        pubKey: {
          "@type": myAccount.pub_key["@type"],
          key: myAccount.pub_key.key,
        },
      });
    }
  } catch (error) {
    console.error(error)
    return undefined;
  }
};
