import * as _0 from "./accum/v1beta1/accum";
import * as _1 from "./downtime-detector/v1beta1/downtime_duration";
import * as _2 from "./downtime-detector/v1beta1/genesis";
import * as _3 from "./downtime-detector/v1beta1/query";
import * as _4 from "./epochs/genesis";
import * as _5 from "./epochs/query";
import * as _6 from "./gamm/pool-models/balancer/balancerPool";
import * as _7 from "./gamm/v1beta1/genesis";
import * as _8 from "./gamm/v1beta1/query";
import * as _9 from "./gamm/v1beta1/tx";
import * as _10 from "./gamm/pool-models/balancer/tx/tx";
import * as _11 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _12 from "./gamm/pool-models/stableswap/tx";
import * as _13 from "./gamm/v2/query";
import * as _14 from "./ibc-rate-limit/v1beta1/genesis";
import * as _15 from "./ibc-rate-limit/v1beta1/params";
import * as _16 from "./ibc-rate-limit/v1beta1/query";
import * as _17 from "./incentives/gauge";
import * as _18 from "./incentives/genesis";
import * as _19 from "./incentives/params";
import * as _20 from "./incentives/query";
import * as _21 from "./incentives/tx";
import * as _22 from "./lockup/genesis";
import * as _23 from "./lockup/lock";
import * as _24 from "./lockup/params";
import * as _25 from "./lockup/query";
import * as _26 from "./lockup/tx";
import * as _27 from "./mint/v1beta1/genesis";
import * as _28 from "./mint/v1beta1/mint";
import * as _29 from "./mint/v1beta1/query";
import * as _30 from "./pool-incentives/v1beta1/genesis";
import * as _31 from "./pool-incentives/v1beta1/gov";
import * as _32 from "./pool-incentives/v1beta1/incentives";
import * as _33 from "./pool-incentives/v1beta1/query";
import * as _34 from "./poolmanager/v1beta1/genesis";
import * as _35 from "./poolmanager/v1beta1/module_route";
import * as _36 from "./poolmanager/v1beta1/query";
import * as _37 from "./poolmanager/v1beta1/swap_route";
import * as _38 from "./poolmanager/v1beta1/tx";
import * as _39 from "./protorev/v1beta1/genesis";
import * as _40 from "./protorev/v1beta1/gov";
import * as _41 from "./protorev/v1beta1/params";
import * as _42 from "./protorev/v1beta1/protorev";
import * as _43 from "./protorev/v1beta1/query";
import * as _44 from "./protorev/v1beta1/tx";
import * as _45 from "./sumtree/v1beta1/tree";
import * as _46 from "./superfluid/genesis";
import * as _47 from "./superfluid/params";
import * as _48 from "./superfluid/query";
import * as _49 from "./superfluid/superfluid";
import * as _50 from "./superfluid/tx";
import * as _51 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _52 from "./tokenfactory/v1beta1/genesis";
import * as _53 from "./tokenfactory/v1beta1/params";
import * as _54 from "./tokenfactory/v1beta1/query";
import * as _55 from "./tokenfactory/v1beta1/tx";
import * as _56 from "./twap/v1beta1/genesis";
import * as _57 from "./twap/v1beta1/query";
import * as _58 from "./twap/v1beta1/twap_record";
import * as _59 from "./txfees/v1beta1/feetoken";
import * as _60 from "./txfees/v1beta1/genesis";
import * as _61 from "./txfees/v1beta1/gov";
import * as _62 from "./txfees/v1beta1/query";
import * as _63 from "./valset-pref/v1beta1/query";
import * as _64 from "./valset-pref/v1beta1/state";
import * as _65 from "./valset-pref/v1beta1/tx";
import * as _180 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _181 from "./gamm/pool-models/stableswap/tx.amino";
import * as _182 from "./gamm/v1beta1/tx.amino";
import * as _183 from "./incentives/tx.amino";
import * as _184 from "./lockup/tx.amino";
import * as _185 from "./poolmanager/v1beta1/tx.amino";
import * as _186 from "./protorev/v1beta1/tx.amino";
import * as _187 from "./superfluid/tx.amino";
import * as _188 from "./tokenfactory/v1beta1/tx.amino";
import * as _189 from "./valset-pref/v1beta1/tx.amino";
import * as _190 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _191 from "./gamm/pool-models/stableswap/tx.registry";
import * as _192 from "./gamm/v1beta1/tx.registry";
import * as _193 from "./incentives/tx.registry";
import * as _194 from "./lockup/tx.registry";
import * as _195 from "./poolmanager/v1beta1/tx.registry";
import * as _196 from "./protorev/v1beta1/tx.registry";
import * as _197 from "./superfluid/tx.registry";
import * as _198 from "./tokenfactory/v1beta1/tx.registry";
import * as _199 from "./valset-pref/v1beta1/tx.registry";
import * as _200 from "./downtime-detector/v1beta1/query.lcd";
import * as _201 from "./epochs/query.lcd";
import * as _202 from "./gamm/v1beta1/query.lcd";
import * as _203 from "./gamm/v2/query.lcd";
import * as _204 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _205 from "./incentives/query.lcd";
import * as _206 from "./lockup/query.lcd";
import * as _207 from "./mint/v1beta1/query.lcd";
import * as _208 from "./pool-incentives/v1beta1/query.lcd";
import * as _209 from "./poolmanager/v1beta1/query.lcd";
import * as _210 from "./protorev/v1beta1/query.lcd";
import * as _211 from "./superfluid/query.lcd";
import * as _212 from "./tokenfactory/v1beta1/query.lcd";
import * as _213 from "./twap/v1beta1/query.lcd";
import * as _214 from "./txfees/v1beta1/query.lcd";
import * as _215 from "./valset-pref/v1beta1/query.lcd";
import * as _262 from "./lcd";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._0
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._200
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._201
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._182,
      ..._192,
      ..._202
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._10,
          ..._180,
          ..._190
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._11,
          ..._12,
          ..._181,
          ..._191
        };
      }
    }
    export const v2 = {
      ..._13,
      ..._203
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._204
    };
  }
  export const incentives = {
    ..._17,
    ..._18,
    ..._19,
    ..._20,
    ..._21,
    ..._183,
    ..._193,
    ..._205
  };
  export const lockup = {
    ..._22,
    ..._23,
    ..._24,
    ..._25,
    ..._26,
    ..._184,
    ..._194,
    ..._206
  };
  export namespace mint {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._207
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._208
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._185,
      ..._195,
      ..._209
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._186,
      ..._196,
      ..._210
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._45
    };
  }
  export const superfluid = {
    ..._46,
    ..._47,
    ..._48,
    ..._49,
    ..._50,
    ..._187,
    ..._197,
    ..._211
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._188,
      ..._198,
      ..._212
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._213
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._214
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._189,
      ..._199,
      ..._215
    };
  }
  export const ClientFactory = {
    ..._262
  };
}