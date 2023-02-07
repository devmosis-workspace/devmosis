import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [join(__dirname, '/../proto'), join(__dirname, '/../osmosis-v14.0.0/proto')];
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
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'timestamp',
        duration: 'duration'
      },
      methods: {
        toJSON: false,
        fromJSON: false
      }
    },
    aminoEncoding: {
      enabled: false
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: false
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
