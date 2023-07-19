"use client";

import { amino, cosmos, osmosis } from "@chain-clients/osmosis";
import { Any } from "@chain-clients/osmosis/types/codegen/google/protobuf/any";

// const osmosisClientList = [
//   // cosmos
//   cosmos.authz.v1beta1,
//   cosmos.bank.v1beta1,
//   cosmos.crisis.v1beta1,
//   cosmos.distribution.v1beta1,
//   cosmos.evidence.v1beta1,
//   cosmos.feegrant.v1beta1,
//   cosmos.gov.v1beta1,
//   cosmos.slashing.v1beta1,
//   cosmos.staking.v1beta1,
//   cosmos.vesting.v1beta1,
//   // osmosis
//   osmosis.gamm.v1beta1,
//   osmosis.incentives,
//   osmosis.lockup,
//   osmosis.poolmanager.v1beta1,
//   osmosis.protorev.v1beta1,
//   osmosis.superfluid,
//   osmosis.tokenfactory.v1beta1,
//   osmosis.valsetpref.v1beta1,
// ];

interface MessageComposer {
  encoded: Record<string, (value: Record<string, any>) => Any>;
  fromJSON: Record<string, (value: Record<string, any>) => Any>;
  withTypeUrl: Record<
    string,
    (value: Record<string, any>) => {
      typeUrl: string;
      value: Record<string, any>;
    }
  >;
  fromPartial: Record<string, (value: Record<string, any>) => void>;
}

interface AminoConverter {
  [typeUrl: string]: {
    aminoType: string;
    toAmino: (args: Record<string, any>) => Record<string, any>;
    fromAmino: (args: Record<string, any>) => Record<string, any>;
  };
}

function filterObjectsByKey<T>(objects: Record<string, any>[], key: string) {
    const filteredValues: T[] = [];
  
    function traverse(obj: any) {
      if (typeof obj !== "object" || obj === null) {
        return;
      }
  
      if (key in obj) {
        filteredValues.push(obj[key]);
      }
  
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          traverse(obj[prop]);
        }
      }
    }
  
    objects.forEach(obj => traverse(obj));
    return filteredValues;
  }

const osmosisClientList = [cosmos, osmosis];
const messageComposers = filterObjectsByKey<MessageComposer>(
  osmosisClientList,
  "MessageComposer"
);
const aminoConverters = filterObjectsByKey<AminoConverter>(
  osmosisClientList,
  "AminoConverter"
).reduce((acc, cur) => ({ ...acc, ...cur }), {});

const osmosisClient = messageComposers.flatMap((messageComposer) => {
  const typeUrls: { key: string; typeUrl: string }[] = Object.entries(
    messageComposer.withTypeUrl
  ).map(([key, message]) => ({ key, typeUrl: message(null as any).typeUrl }));
  return typeUrls.map(({ key, typeUrl }) => {
    const encode: (args: Record<string, any>) => Any =
      messageComposer.encoded[key as keyof typeof messageComposer.encoded];

    const fromJSON: (args: Record<string, any>) => Any =
      messageComposer.fromJSON[key as keyof typeof messageComposer.fromJSON];

    const aminoConverter = aminoConverters[typeUrl];

    if (aminoConverter === undefined) {
      throw new Error(`aminoConverter not found for typeUrl: ${typeUrl}`);
    }

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

export default function Test() {
  console.log(osmosisClient);
  return <></>;
}
