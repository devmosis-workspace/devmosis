import { cosmos, osmosis } from "@chain-clients/osmosis";
import { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";

const osmosisClientList = [
  // cosmos
  cosmos.authz.v1beta1,
  cosmos.bank.v1beta1,
  cosmos.crisis.v1beta1,
  cosmos.distribution.v1beta1,
  cosmos.evidence.v1beta1,
  cosmos.feegrant.v1beta1,
  cosmos.gov.v1,
  cosmos.gov.v1beta1,
  cosmos.group.v1,
  cosmos.nft.v1beta1,
  cosmos.slashing.v1beta1,
  cosmos.staking.v1beta1,
  cosmos.upgrade.v1beta1,
  cosmos.vesting.v1beta1,
  // osmosis
  osmosis.gamm.v1beta1,
  osmosis.incentives,
  osmosis.lockup,
  osmosis.poolmanager.v1beta1,
  osmosis.protorev.v1beta1,
  osmosis.superfluid,
  osmosis.tokenfactory.v1beta1,
  osmosis.valsetpref.v1beta1,
];

export const osmosisClient = osmosisClientList.flatMap((client) => {
  const messageComposer = client.MessageComposer;

  const typeUrls: { key: string; typeUrl: string }[] = Object.entries(
    messageComposer.withTypeUrl
  ).map(([key, message]) => ({ key, typeUrl: message(null as any).typeUrl }));

  return typeUrls.map(({ key, typeUrl }) => {
    const encode: (args: Record<string, any>) => Any =
      messageComposer.encoded[key as keyof typeof messageComposer.encoded];

    const fromJSON: (args: Record<string, any>) => Any =
      messageComposer.fromJSON[key as keyof typeof messageComposer.fromJSON];

    const aminoConverter: {
      aminoType: string;
      toAmino: (args: Record<string, any>) => Record<string, any>;
      fromAmino: (args: Record<string, any>) => Record<string, any>;
    } = client.AminoConverter[typeUrl as keyof typeof client.AminoConverter];

    const aminoType = aminoConverter.aminoType;
    const toAmino = aminoConverter.toAmino;
    const fromAmino = aminoConverter.fromAmino;

    return {
      proto: {
        typeUrl,
        encode,
        fromJSON,
      },
      amino: {
        aminoType,
        toAmino,
        fromAmino,
      },
    };
  });
});
