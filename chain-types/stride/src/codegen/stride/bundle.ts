import * as _90 from "./claim/claim";
import * as _91 from "./claim/genesis";
import * as _92 from "./claim/params";
import * as _93 from "./claim/query";
import * as _94 from "./claim/tx";
import * as _95 from "./epochs/genesis";
import * as _96 from "./epochs/query";
import * as _97 from "./icacallbacks/callback_data";
import * as _98 from "./icacallbacks/genesis";
import * as _99 from "./icacallbacks/packet";
import * as _100 from "./icacallbacks/params";
import * as _101 from "./icacallbacks/query";
import * as _102 from "./icacallbacks/tx";
import * as _103 from "./interchainquery/v1/genesis";
import * as _104 from "./interchainquery/v1/messages";
import * as _105 from "./interchainquery/v1/query";
import * as _106 from "./mint/v1beta1/genesis";
import * as _107 from "./mint/v1beta1/mint";
import * as _108 from "./mint/v1beta1/query";
import * as _109 from "./records/callbacks";
import * as _110 from "./records/genesis";
import * as _111 from "./records/query";
import * as _112 from "./stakeibc/callbacks";
import * as _113 from "./stakeibc/epoch_tracker";
import * as _114 from "./stakeibc/genesis";
import * as _115 from "./stakeibc/gov";
import * as _116 from "./stakeibc/host_zone";
import * as _117 from "./stakeibc/ica_account";
import * as _118 from "./stakeibc/packet";
import * as _119 from "./stakeibc/params";
import * as _120 from "./stakeibc/query";
import * as _121 from "./stakeibc/tx";
import * as _122 from "./stakeibc/validator";
import * as _123 from "./vesting/tx";
import * as _124 from "./vesting/vesting";
import * as _139 from "./claim/query.lcd";
import * as _140 from "./epochs/query.lcd";
import * as _141 from "./icacallbacks/query.lcd";
import * as _142 from "./mint/v1beta1/query.lcd";
import * as _143 from "./records/query.lcd";
import * as _144 from "./stakeibc/query.lcd";
import * as _146 from "./lcd";
export namespace stride {
  export const claim = { ..._90,
    ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._139
  };
  export const epochs = { ..._95,
    ..._96,
    ..._140
  };
  export const icacallbacks = { ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._141
  };
  export namespace interchainquery {
    export const v1 = { ..._103,
      ..._104,
      ..._105
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._106,
      ..._107,
      ..._108,
      ..._142
    };
  }
  export const records = { ..._109,
    ..._110,
    ..._111,
    ..._143
  };
  export const stakeibc = { ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._144
  };
  export const vesting = { ..._123,
    ..._124
  };
  export const ClientFactory = { ..._146
  };
}