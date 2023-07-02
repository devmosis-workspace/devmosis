import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { rimrafSync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../osmosis-v15.1.0/proto'), join(__dirname, '/../cosmos-sdk-v0.46.1/proto'), join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
    tsDisable: {
      patterns: ['**/*amino.ts', '**/*registry.ts']
    },
    experimentalGlobalProtoNamespace: true,
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      },
      methods: {
        encode: true,
        decode: true,
        fromPartial: true,
      }
    },
    aminoEncoding: {
      enabled: true,
    },
    lcdClients: {
      enabled: true,
    },
    rpcClients: {
      enabled: false,
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
