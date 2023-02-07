import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [join(__dirname, '/../cosmoshub-v0.45.9/proto'), join(__dirname, '/../cosmoshub-v0.45.9/third_party/proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
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
      enabled: false,
      camelCase: true
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
