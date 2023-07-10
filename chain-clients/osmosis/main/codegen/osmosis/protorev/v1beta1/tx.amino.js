"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
    aminoType: "osmosis/protorev/set-hot-routes",
    toAmino: function toAmino(_ref) {
      var admin = _ref.admin,
        hotRoutes = _ref.hotRoutes;
      return {
        admin: admin,
        hot_routes: hotRoutes.map(function (el0) {
          return {
            arb_routes: el0.arbRoutes.map(function (el1) {
              return {
                trades: el1.trades.map(function (el2) {
                  return {
                    pool: el2.pool.toString(),
                    token_in: el2.tokenIn,
                    token_out: el2.tokenOut
                  };
                }),
                step_size: el1.stepSize
              };
            }),
            token_in: el0.tokenIn,
            token_out: el0.tokenOut
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var admin = _ref2.admin,
        hot_routes = _ref2.hot_routes;
      return {
        admin: admin,
        hotRoutes: hot_routes.map(function (el0) {
          return {
            arbRoutes: el0.arb_routes.map(function (el1) {
              return {
                trades: el1.trades.map(function (el2) {
                  return {
                    pool: _helpers.Long.fromString(el2.pool),
                    tokenIn: el2.token_in,
                    tokenOut: el2.token_out
                  };
                }),
                stepSize: el1.step_size
              };
            }),
            tokenIn: el0.token_in,
            tokenOut: el0.token_out
          };
        })
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
    aminoType: "osmosis/protorev/set-developer-account",
    toAmino: function toAmino(_ref3) {
      var admin = _ref3.admin,
        developerAccount = _ref3.developerAccount;
      return {
        admin: admin,
        developer_account: developerAccount
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var admin = _ref4.admin,
        developer_account = _ref4.developer_account;
      return {
        admin: admin,
        developerAccount: developer_account
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
    aminoType: "osmosis/protorev/set-max-pool-points-per-tx",
    toAmino: function toAmino(_ref5) {
      var admin = _ref5.admin,
        maxPoolPointsPerTx = _ref5.maxPoolPointsPerTx;
      return {
        admin: admin,
        max_pool_points_per_tx: maxPoolPointsPerTx.toString()
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var admin = _ref6.admin,
        max_pool_points_per_tx = _ref6.max_pool_points_per_tx;
      return {
        admin: admin,
        maxPoolPointsPerTx: _helpers.Long.fromString(max_pool_points_per_tx)
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
    aminoType: "osmosis/protorev/set-max-pool-points-per-block",
    toAmino: function toAmino(_ref7) {
      var admin = _ref7.admin,
        maxPoolPointsPerBlock = _ref7.maxPoolPointsPerBlock;
      return {
        admin: admin,
        max_pool_points_per_block: maxPoolPointsPerBlock.toString()
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var admin = _ref8.admin,
        max_pool_points_per_block = _ref8.max_pool_points_per_block;
      return {
        admin: admin,
        maxPoolPointsPerBlock: _helpers.Long.fromString(max_pool_points_per_block)
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
    aminoType: "osmosis/protorev/set-pool-weights",
    toAmino: function toAmino(_ref9) {
      var admin = _ref9.admin,
        poolWeights = _ref9.poolWeights;
      return {
        admin: admin,
        pool_weights: {
          stable_weight: poolWeights.stableWeight.toString(),
          balancer_weight: poolWeights.balancerWeight.toString(),
          concentrated_weight: poolWeights.concentratedWeight.toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var admin = _ref10.admin,
        pool_weights = _ref10.pool_weights;
      return {
        admin: admin,
        poolWeights: {
          stableWeight: _helpers.Long.fromString(pool_weights.stable_weight),
          balancerWeight: _helpers.Long.fromString(pool_weights.balancer_weight),
          concentratedWeight: _helpers.Long.fromString(pool_weights.concentrated_weight)
        }
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
    aminoType: "osmosis/protorev/set-base-denoms",
    toAmino: function toAmino(_ref11) {
      var admin = _ref11.admin,
        baseDenoms = _ref11.baseDenoms;
      return {
        admin: admin,
        base_denoms: baseDenoms.map(function (el0) {
          return {
            denom: el0.denom,
            step_size: el0.stepSize
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var admin = _ref12.admin,
        base_denoms = _ref12.base_denoms;
      return {
        admin: admin,
        baseDenoms: base_denoms.map(function (el0) {
          return {
            denom: el0.denom,
            stepSize: el0.step_size
          };
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;