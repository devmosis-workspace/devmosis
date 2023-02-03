import * as _143 from "./downtime-detector/v1beta1/downtime_duration";
import * as _144 from "./downtime-detector/v1beta1/genesis";
import * as _145 from "./downtime-detector/v1beta1/query";
import * as _146 from "./epochs/genesis";
import * as _147 from "./epochs/query";
import * as _148 from "./gamm/pool-models/balancer/balancerPool";
import * as _149 from "./gamm/v1beta1/genesis";
import * as _150 from "./gamm/v1beta1/query";
import * as _151 from "./gamm/v1beta1/tx";
import * as _152 from "./gamm/pool-models/balancer/tx/tx";
import * as _153 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _154 from "./gamm/pool-models/stableswap/tx";
import * as _155 from "./gamm/v2/query";
import * as _156 from "./ibc-rate-limit/v1beta1/params";
import * as _157 from "./ibc-rate-limit/v1beta1/query";
import * as _158 from "./incentives/gauge";
import * as _159 from "./incentives/genesis";
import * as _160 from "./incentives/params";
import * as _161 from "./incentives/query";
import * as _162 from "./incentives/tx";
import * as _163 from "./lockup/genesis";
import * as _164 from "./lockup/lock";
import * as _165 from "./lockup/params";
import * as _166 from "./lockup/query";
import * as _167 from "./lockup/tx";
import * as _168 from "./mint/v1beta1/genesis";
import * as _169 from "./mint/v1beta1/mint";
import * as _170 from "./mint/v1beta1/query";
import * as _171 from "./pool-incentives/v1beta1/genesis";
import * as _172 from "./pool-incentives/v1beta1/gov";
import * as _173 from "./pool-incentives/v1beta1/incentives";
import * as _174 from "./pool-incentives/v1beta1/query";
import * as _175 from "./sumtree/v1beta1/tree";
import * as _176 from "./superfluid/genesis";
import * as _177 from "./superfluid/params";
import * as _178 from "./superfluid/query";
import * as _179 from "./superfluid/superfluid";
import * as _180 from "./superfluid/tx";
import * as _181 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _182 from "./tokenfactory/v1beta1/genesis";
import * as _183 from "./tokenfactory/v1beta1/params";
import * as _184 from "./tokenfactory/v1beta1/query";
import * as _185 from "./tokenfactory/v1beta1/tx";
import * as _186 from "./twap/v1beta1/genesis";
import * as _187 from "./twap/v1beta1/query";
import * as _188 from "./twap/v1beta1/twap_record";
import * as _189 from "./txfees/v1beta1/feetoken";
import * as _190 from "./txfees/v1beta1/genesis";
import * as _191 from "./txfees/v1beta1/gov";
import * as _192 from "./txfees/v1beta1/query";
import * as _231 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _232 from "./gamm/pool-models/stableswap/tx.amino";
import * as _233 from "./gamm/v1beta1/tx.amino";
import * as _234 from "./incentives/tx.amino";
import * as _235 from "./lockup/tx.amino";
import * as _236 from "./superfluid/tx.amino";
import * as _237 from "./tokenfactory/v1beta1/tx.amino";
import * as _238 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _239 from "./gamm/pool-models/stableswap/tx.registry";
import * as _240 from "./gamm/v1beta1/tx.registry";
import * as _241 from "./incentives/tx.registry";
import * as _242 from "./lockup/tx.registry";
import * as _243 from "./superfluid/tx.registry";
import * as _244 from "./tokenfactory/v1beta1/tx.registry";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = { ..._143,
      ..._144,
      ..._145
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._146,
      ..._147
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._233,
      ..._240
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._152,
          ..._231,
          ..._238
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._153,
          ..._154,
          ..._232,
          ..._239
        };
      }
    }
    export const v2 = { ..._155
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._156,
      ..._157
    };
  }
  export const incentives = { ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._234,
    ..._241
  };
  export const lockup = { ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._235,
    ..._242
  };
  export namespace mint {
    export const v1beta1 = { ..._168,
      ..._169,
      ..._170
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._171,
      ..._172,
      ..._173,
      ..._174
    };
  }
  export namespace store {
    export const v1beta1 = { ..._175
    };
  }
  export const superfluid = { ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._236,
    ..._243
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._237,
      ..._244
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._186,
      ..._187,
      ..._188
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._189,
      ..._190,
      ..._191,
      ..._192
    };
  }
}