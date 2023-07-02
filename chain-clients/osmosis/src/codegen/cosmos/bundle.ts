import * as _66 from "./app/module/v1alpha1/module";
import * as _67 from "./app/v1alpha1/config";
import * as _68 from "./app/v1alpha1/module";
import * as _69 from "./app/v1alpha1/query";
import * as _70 from "./auth/v1beta1/auth";
import * as _71 from "./auth/v1beta1/genesis";
import * as _72 from "./auth/v1beta1/query";
import * as _73 from "./authz/v1beta1/authz";
import * as _74 from "./authz/v1beta1/event";
import * as _75 from "./authz/v1beta1/genesis";
import * as _76 from "./authz/v1beta1/query";
import * as _77 from "./authz/v1beta1/tx";
import * as _78 from "./bank/v1beta1/authz";
import * as _79 from "./bank/v1beta1/bank";
import * as _80 from "./bank/v1beta1/genesis";
import * as _81 from "./bank/v1beta1/query";
import * as _82 from "./bank/v1beta1/tx";
import * as _83 from "./base/abci/v1beta1/abci";
import * as _84 from "./base/kv/v1beta1/kv";
import * as _85 from "./base/node/v1beta1/query";
import * as _86 from "./base/query/v1beta1/pagination";
import * as _87 from "./base/reflection/v1beta1/reflection";
import * as _88 from "./base/reflection/v2alpha1/reflection";
import * as _89 from "./base/snapshots/v1beta1/snapshot";
import * as _90 from "./base/store/v1beta1/commit_info";
import * as _91 from "./base/store/v1beta1/listening";
import * as _92 from "./base/tendermint/v1beta1/query";
import * as _93 from "./base/tendermint/v1beta1/types";
import * as _94 from "./base/v1beta1/coin";
import * as _95 from "./capability/v1beta1/capability";
import * as _96 from "./capability/v1beta1/genesis";
import * as _97 from "./crisis/v1beta1/genesis";
import * as _98 from "./crisis/v1beta1/tx";
import * as _99 from "./crypto/ed25519/keys";
import * as _100 from "./crypto/hd/v1/hd";
import * as _101 from "./crypto/keyring/v1/record";
import * as _102 from "./crypto/multisig/keys";
import * as _103 from "./crypto/secp256k1/keys";
import * as _104 from "./crypto/secp256r1/keys";
import * as _105 from "./distribution/v1beta1/distribution";
import * as _106 from "./distribution/v1beta1/genesis";
import * as _107 from "./distribution/v1beta1/query";
import * as _108 from "./distribution/v1beta1/tx";
import * as _109 from "./evidence/v1beta1/evidence";
import * as _110 from "./evidence/v1beta1/genesis";
import * as _111 from "./evidence/v1beta1/query";
import * as _112 from "./evidence/v1beta1/tx";
import * as _113 from "./feegrant/v1beta1/feegrant";
import * as _114 from "./feegrant/v1beta1/genesis";
import * as _115 from "./feegrant/v1beta1/query";
import * as _116 from "./feegrant/v1beta1/tx";
import * as _117 from "./genutil/v1beta1/genesis";
import * as _118 from "./gov/v1/genesis";
import * as _119 from "./gov/v1/gov";
import * as _120 from "./gov/v1/query";
import * as _121 from "./gov/v1/tx";
import * as _122 from "./gov/v1beta1/genesis";
import * as _123 from "./gov/v1beta1/gov";
import * as _124 from "./gov/v1beta1/query";
import * as _125 from "./gov/v1beta1/tx";
import * as _126 from "./group/v1/events";
import * as _127 from "./group/v1/genesis";
import * as _128 from "./group/v1/query";
import * as _129 from "./group/v1/tx";
import * as _130 from "./group/v1/types";
import * as _131 from "./mint/v1beta1/genesis";
import * as _132 from "./mint/v1beta1/mint";
import * as _133 from "./mint/v1beta1/query";
import * as _134 from "./msg/v1/msg";
import * as _135 from "./nft/v1beta1/event";
import * as _136 from "./nft/v1beta1/genesis";
import * as _137 from "./nft/v1beta1/nft";
import * as _138 from "./nft/v1beta1/query";
import * as _139 from "./nft/v1beta1/tx";
import * as _140 from "./orm/module/v1alpha1/module";
import * as _141 from "./orm/v1/orm";
import * as _142 from "./orm/v1alpha1/schema";
import * as _143 from "./params/v1beta1/params";
import * as _144 from "./params/v1beta1/query";
import * as _145 from "./slashing/v1beta1/genesis";
import * as _146 from "./slashing/v1beta1/query";
import * as _147 from "./slashing/v1beta1/slashing";
import * as _148 from "./slashing/v1beta1/tx";
import * as _149 from "./staking/v1beta1/authz";
import * as _150 from "./staking/v1beta1/genesis";
import * as _151 from "./staking/v1beta1/query";
import * as _152 from "./staking/v1beta1/staking";
import * as _153 from "./staking/v1beta1/tx";
import * as _154 from "./tx/signing/v1beta1/signing";
import * as _155 from "./tx/v1beta1/service";
import * as _156 from "./tx/v1beta1/tx";
import * as _157 from "./upgrade/v1beta1/query";
import * as _158 from "./upgrade/v1beta1/tx";
import * as _159 from "./upgrade/v1beta1/upgrade";
import * as _160 from "./vesting/v1beta1/tx";
import * as _161 from "./vesting/v1beta1/vesting";
import * as _216 from "./authz/v1beta1/tx.amino";
import * as _217 from "./bank/v1beta1/tx.amino";
import * as _218 from "./crisis/v1beta1/tx.amino";
import * as _219 from "./distribution/v1beta1/tx.amino";
import * as _220 from "./evidence/v1beta1/tx.amino";
import * as _221 from "./feegrant/v1beta1/tx.amino";
import * as _222 from "./gov/v1/tx.amino";
import * as _223 from "./gov/v1beta1/tx.amino";
import * as _224 from "./group/v1/tx.amino";
import * as _225 from "./nft/v1beta1/tx.amino";
import * as _226 from "./slashing/v1beta1/tx.amino";
import * as _227 from "./staking/v1beta1/tx.amino";
import * as _228 from "./upgrade/v1beta1/tx.amino";
import * as _229 from "./vesting/v1beta1/tx.amino";
import * as _230 from "./authz/v1beta1/tx.registry";
import * as _231 from "./bank/v1beta1/tx.registry";
import * as _232 from "./crisis/v1beta1/tx.registry";
import * as _233 from "./distribution/v1beta1/tx.registry";
import * as _234 from "./evidence/v1beta1/tx.registry";
import * as _235 from "./feegrant/v1beta1/tx.registry";
import * as _236 from "./gov/v1/tx.registry";
import * as _237 from "./gov/v1beta1/tx.registry";
import * as _238 from "./group/v1/tx.registry";
import * as _239 from "./nft/v1beta1/tx.registry";
import * as _240 from "./slashing/v1beta1/tx.registry";
import * as _241 from "./staking/v1beta1/tx.registry";
import * as _242 from "./upgrade/v1beta1/tx.registry";
import * as _243 from "./vesting/v1beta1/tx.registry";
import * as _244 from "./auth/v1beta1/query.lcd";
import * as _245 from "./authz/v1beta1/query.lcd";
import * as _246 from "./bank/v1beta1/query.lcd";
import * as _247 from "./base/node/v1beta1/query.lcd";
import * as _248 from "./base/tendermint/v1beta1/query.lcd";
import * as _249 from "./distribution/v1beta1/query.lcd";
import * as _250 from "./evidence/v1beta1/query.lcd";
import * as _251 from "./feegrant/v1beta1/query.lcd";
import * as _252 from "./gov/v1/query.lcd";
import * as _253 from "./gov/v1beta1/query.lcd";
import * as _254 from "./group/v1/query.lcd";
import * as _255 from "./mint/v1beta1/query.lcd";
import * as _256 from "./nft/v1beta1/query.lcd";
import * as _257 from "./params/v1beta1/query.lcd";
import * as _258 from "./slashing/v1beta1/query.lcd";
import * as _259 from "./staking/v1beta1/query.lcd";
import * as _260 from "./tx/v1beta1/service.lcd";
import * as _261 from "./upgrade/v1beta1/query.lcd";
import * as _263 from "./lcd";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._66
      };
    }
    export const v1alpha1 = {
      ..._67,
      ..._68,
      ..._69
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._244
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._216,
      ..._230,
      ..._245
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._217,
      ..._231,
      ..._246
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._83
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._84
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._85,
        ..._247
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._86
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._87
      };
      export const v2alpha1 = {
        ..._88
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._89
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._90,
        ..._91
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._92,
        ..._93,
        ..._248
      };
    }
    export const v1beta1 = {
      ..._94
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._95,
      ..._96
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._218,
      ..._232
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._99
    };
    export namespace hd {
      export const v1 = {
        ..._100
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._101
      };
    }
    export const multisig = {
      ..._102
    };
    export const secp256k1 = {
      ..._103
    };
    export const secp256r1 = {
      ..._104
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._219,
      ..._233,
      ..._249
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._220,
      ..._234,
      ..._250
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._221,
      ..._235,
      ..._251
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._117
    };
  }
  export namespace gov {
    export const v1 = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._222,
      ..._236,
      ..._252
    };
    export const v1beta1 = {
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._223,
      ..._237,
      ..._253
    };
  }
  export namespace group {
    export const v1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._224,
      ..._238,
      ..._254
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._255
    };
  }
  export namespace msg {
    export const v1 = {
      ..._134
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._225,
      ..._239,
      ..._256
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._140
      };
    }
    export const v1 = {
      ..._141
    };
    export const v1alpha1 = {
      ..._142
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._143,
      ..._144,
      ..._257
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._226,
      ..._240,
      ..._258
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._227,
      ..._241,
      ..._259
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._154
      };
    }
    export const v1beta1 = {
      ..._155,
      ..._156,
      ..._260
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._159,
      ..._228,
      ..._242,
      ..._261
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._160,
      ..._161,
      ..._229,
      ..._243
    };
  }
  export const ClientFactory = {
    ..._263
  };
}