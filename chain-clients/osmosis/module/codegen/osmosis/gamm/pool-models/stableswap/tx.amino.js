//@ts-nocheck

import { Long } from "../../../../helpers";
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
    aminoType: "osmosis/gamm/create-stableswap-pool",
    toAmino: ({
      sender,
      poolParams,
      initialPoolLiquidity,
      scalingFactors,
      futurePoolGovernor,
      scalingFactorController
    }) => {
      return {
        sender,
        pool_params: {
          swap_fee: poolParams.swapFee,
          exit_fee: poolParams.exitFee
        },
        initial_pool_liquidity: initialPoolLiquidity.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        scaling_factors: scalingFactors.map(el0 => el0.toString()),
        future_pool_governor: futurePoolGovernor,
        scaling_factor_controller: scalingFactorController
      };
    },
    fromAmino: ({
      sender,
      pool_params,
      initial_pool_liquidity,
      scaling_factors,
      future_pool_governor,
      scaling_factor_controller
    }) => {
      return {
        sender,
        poolParams: {
          swapFee: pool_params.swap_fee,
          exitFee: pool_params.exit_fee
        },
        initialPoolLiquidity: initial_pool_liquidity.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        scalingFactors: scaling_factors.map(el0 => Long.fromString(el0)),
        futurePoolGovernor: future_pool_governor,
        scalingFactorController: scaling_factor_controller
      };
    }
  },
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
    aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors",
    toAmino: ({
      sender,
      poolId,
      scalingFactors
    }) => {
      return {
        sender,
        pool_id: poolId.toString(),
        scaling_factors: scalingFactors.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      scaling_factors
    }) => {
      return {
        sender,
        poolId: Long.fromString(pool_id),
        scalingFactors: scaling_factors.map(el0 => Long.fromString(el0))
      };
    }
  }
};