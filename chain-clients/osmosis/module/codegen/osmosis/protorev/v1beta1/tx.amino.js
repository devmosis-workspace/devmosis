//@ts-nocheck

import { Long } from "../../../helpers";
export const AminoConverter = {
  "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
    aminoType: "osmosis/protorev/set-hot-routes",
    toAmino: ({
      admin,
      hotRoutes
    }) => {
      return {
        admin,
        hot_routes: hotRoutes.map(el0 => ({
          arb_routes: el0.arbRoutes.map(el1 => ({
            trades: el1.trades.map(el2 => ({
              pool: el2.pool.toString(),
              token_in: el2.tokenIn,
              token_out: el2.tokenOut
            })),
            step_size: el1.stepSize
          })),
          token_in: el0.tokenIn,
          token_out: el0.tokenOut
        }))
      };
    },
    fromAmino: ({
      admin,
      hot_routes
    }) => {
      return {
        admin,
        hotRoutes: hot_routes.map(el0 => ({
          arbRoutes: el0.arb_routes.map(el1 => ({
            trades: el1.trades.map(el2 => ({
              pool: Long.fromString(el2.pool),
              tokenIn: el2.token_in,
              tokenOut: el2.token_out
            })),
            stepSize: el1.step_size
          })),
          tokenIn: el0.token_in,
          tokenOut: el0.token_out
        }))
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
    aminoType: "osmosis/protorev/set-developer-account",
    toAmino: ({
      admin,
      developerAccount
    }) => {
      return {
        admin,
        developer_account: developerAccount
      };
    },
    fromAmino: ({
      admin,
      developer_account
    }) => {
      return {
        admin,
        developerAccount: developer_account
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
    aminoType: "osmosis/protorev/set-max-pool-points-per-tx",
    toAmino: ({
      admin,
      maxPoolPointsPerTx
    }) => {
      return {
        admin,
        max_pool_points_per_tx: maxPoolPointsPerTx.toString()
      };
    },
    fromAmino: ({
      admin,
      max_pool_points_per_tx
    }) => {
      return {
        admin,
        maxPoolPointsPerTx: Long.fromString(max_pool_points_per_tx)
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
    aminoType: "osmosis/protorev/set-max-pool-points-per-block",
    toAmino: ({
      admin,
      maxPoolPointsPerBlock
    }) => {
      return {
        admin,
        max_pool_points_per_block: maxPoolPointsPerBlock.toString()
      };
    },
    fromAmino: ({
      admin,
      max_pool_points_per_block
    }) => {
      return {
        admin,
        maxPoolPointsPerBlock: Long.fromString(max_pool_points_per_block)
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
    aminoType: "osmosis/protorev/set-pool-weights",
    toAmino: ({
      admin,
      poolWeights
    }) => {
      return {
        admin,
        pool_weights: {
          stable_weight: poolWeights.stableWeight.toString(),
          balancer_weight: poolWeights.balancerWeight.toString(),
          concentrated_weight: poolWeights.concentratedWeight.toString()
        }
      };
    },
    fromAmino: ({
      admin,
      pool_weights
    }) => {
      return {
        admin,
        poolWeights: {
          stableWeight: Long.fromString(pool_weights.stable_weight),
          balancerWeight: Long.fromString(pool_weights.balancer_weight),
          concentratedWeight: Long.fromString(pool_weights.concentrated_weight)
        }
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
    aminoType: "osmosis/protorev/set-base-denoms",
    toAmino: ({
      admin,
      baseDenoms
    }) => {
      return {
        admin,
        base_denoms: baseDenoms.map(el0 => ({
          denom: el0.denom,
          step_size: el0.stepSize
        }))
      };
    },
    fromAmino: ({
      admin,
      base_denoms
    }) => {
      return {
        admin,
        baseDenoms: base_denoms.map(el0 => ({
          denom: el0.denom,
          stepSize: el0.step_size
        }))
      };
    }
  }
};