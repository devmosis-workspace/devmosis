import type { Any } from "@common/types";

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

  objects.forEach((obj) => traverse(obj));
  return filteredValues;
}

export const createMsgs = (clients: Record<string, any>[]) => {
  const messageComposers = filterObjectsByKey<MessageComposer>(
    clients,
    "MessageComposer"
  );
  const aminoConverters = filterObjectsByKey<AminoConverter>(
    clients,
    "AminoConverter"
  ).reduce((acc, cur) => ({ ...acc, ...cur }), {});

  return messageComposers
    .flatMap((messageComposer) => {
      const typeUrls: { key: string; typeUrl: string }[] = Object.entries(
        messageComposer.withTypeUrl
      ).map(([key, message]) => ({
        key,
        typeUrl: message(null as any).typeUrl,
      }));
      return typeUrls.map(({ key, typeUrl }) => {
        const encode: (args: Record<string, any>) => Any =
          messageComposer.encoded[key as keyof typeof messageComposer.encoded];

        const fromJSON: (args: Record<string, any>) => Any =
          messageComposer.fromJSON[
            key as keyof typeof messageComposer.fromJSON
          ];

        const aminoConverter = aminoConverters[typeUrl];

        if (aminoConverter === undefined) {
          throw new Error(`aminoConverter not found for typeUrl: ${typeUrl}`);
        }

        const aminoType = aminoConverter.aminoType;
        const toAmino = aminoConverter.toAmino;
        const fromAmino = aminoConverter.fromAmino;

        return {
          [typeUrl]: {
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
          },
        };
      });
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
};
