import * as _0 from "./auth/v1beta1/auth";
import * as _1 from "./auth/v1beta1/genesis";
import * as _2 from "./auth/v1beta1/query";
import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/reflection/v1beta1/reflection";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/snapshots/v1beta1/snapshot";
import * as _19 from "./base/store/v1beta1/commit_info";
import * as _20 from "./base/store/v1beta1/listening";
import * as _21 from "./base/tendermint/v1beta1/query";
import * as _22 from "./base/v1beta1/coin";
import * as _23 from "./capability/v1beta1/capability";
import * as _24 from "./capability/v1beta1/genesis";
import * as _25 from "./crisis/v1beta1/genesis";
import * as _26 from "./crisis/v1beta1/tx";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/multisig/keys";
import * as _29 from "./crypto/secp256k1/keys";
import * as _30 from "./crypto/secp256r1/keys";
import * as _31 from "./distribution/v1beta1/distribution";
import * as _32 from "./distribution/v1beta1/genesis";
import * as _33 from "./distribution/v1beta1/query";
import * as _34 from "./distribution/v1beta1/tx";
import * as _35 from "./evidence/v1beta1/evidence";
import * as _36 from "./evidence/v1beta1/genesis";
import * as _37 from "./evidence/v1beta1/query";
import * as _38 from "./evidence/v1beta1/tx";
import * as _39 from "./feegrant/v1beta1/feegrant";
import * as _40 from "./feegrant/v1beta1/genesis";
import * as _41 from "./feegrant/v1beta1/query";
import * as _42 from "./feegrant/v1beta1/tx";
import * as _43 from "./genutil/v1beta1/genesis";
import * as _44 from "./gov/v1beta1/genesis";
import * as _45 from "./gov/v1beta1/gov";
import * as _46 from "./gov/v1beta1/query";
import * as _47 from "./gov/v1beta1/tx";
import * as _48 from "./mint/v1beta1/genesis";
import * as _49 from "./mint/v1beta1/mint";
import * as _50 from "./mint/v1beta1/query";
import * as _51 from "./params/v1beta1/params";
import * as _52 from "./params/v1beta1/query";
import * as _53 from "./slashing/v1beta1/genesis";
import * as _54 from "./slashing/v1beta1/query";
import * as _55 from "./slashing/v1beta1/slashing";
import * as _56 from "./slashing/v1beta1/tx";
import * as _57 from "./staking/v1beta1/authz";
import * as _58 from "./staking/v1beta1/genesis";
import * as _59 from "./staking/v1beta1/query";
import * as _60 from "./staking/v1beta1/staking";
import * as _61 from "./staking/v1beta1/tx";
import * as _62 from "./tx/signing/v1beta1/signing";
import * as _63 from "./tx/v1beta1/service";
import * as _64 from "./tx/v1beta1/tx";
import * as _65 from "./upgrade/v1beta1/query";
import * as _66 from "./upgrade/v1beta1/upgrade";
import * as _67 from "./vesting/v1beta1/tx";
import * as _68 from "./vesting/v1beta1/vesting";
import * as _90 from "./auth/v1beta1/query.lcd";
import * as _91 from "./authz/v1beta1/query.lcd";
import * as _92 from "./bank/v1beta1/query.lcd";
import * as _93 from "./base/tendermint/v1beta1/query.lcd";
import * as _94 from "./distribution/v1beta1/query.lcd";
import * as _95 from "./evidence/v1beta1/query.lcd";
import * as _96 from "./feegrant/v1beta1/query.lcd";
import * as _97 from "./gov/v1beta1/query.lcd";
import * as _98 from "./mint/v1beta1/query.lcd";
import * as _99 from "./params/v1beta1/query.lcd";
import * as _100 from "./slashing/v1beta1/query.lcd";
import * as _101 from "./staking/v1beta1/query.lcd";
import * as _102 from "./tx/v1beta1/service.lcd";
import * as _103 from "./upgrade/v1beta1/query.lcd";
import * as _104 from "./lcd";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._0,
      ..._1,
      ..._2,
      ..._90
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._91
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._92
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._13
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._14
      };
    }
    export namespace query {
      export const v1beta1 = { ..._15
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._16
      };
      export const v2alpha1 = { ..._17
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._18
      };
    }
    export namespace store {
      export const v1beta1 = { ..._19,
        ..._20
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._21,
        ..._93
      };
    }
    export const v1beta1 = { ..._22
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._23,
      ..._24
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._25,
      ..._26
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._27
    };
    export const multisig = { ..._28
    };
    export const secp256k1 = { ..._29
    };
    export const secp256r1 = { ..._30
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._94
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._95
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._96
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._43
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._97
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._48,
      ..._49,
      ..._50,
      ..._98
    };
  }
  export namespace params {
    export const v1beta1 = { ..._51,
      ..._52,
      ..._99
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._100
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._101
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._62
      };
    }
    export const v1beta1 = { ..._63,
      ..._64,
      ..._102
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._65,
      ..._66,
      ..._103
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._67,
      ..._68
    };
  }
  export const ClientFactory = { ..._104
  };
}