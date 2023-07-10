"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
    aminoType: "osmosis/gamm/create-stableswap-pool",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        poolParams = _ref.poolParams,
        initialPoolLiquidity = _ref.initialPoolLiquidity,
        scalingFactors = _ref.scalingFactors,
        futurePoolGovernor = _ref.futurePoolGovernor,
        scalingFactorController = _ref.scalingFactorController;
      return {
        sender: sender,
        pool_params: {
          swap_fee: poolParams.swapFee,
          exit_fee: poolParams.exitFee
        },
        initial_pool_liquidity: initialPoolLiquidity.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        scaling_factors: scalingFactors.map(function (el0) {
          return el0.toString();
        }),
        future_pool_governor: futurePoolGovernor,
        scaling_factor_controller: scalingFactorController
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        pool_params = _ref2.pool_params,
        initial_pool_liquidity = _ref2.initial_pool_liquidity,
        scaling_factors = _ref2.scaling_factors,
        future_pool_governor = _ref2.future_pool_governor,
        scaling_factor_controller = _ref2.scaling_factor_controller;
      return {
        sender: sender,
        poolParams: {
          swapFee: pool_params.swap_fee,
          exitFee: pool_params.exit_fee
        },
        initialPoolLiquidity: initial_pool_liquidity.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        scalingFactors: scaling_factors.map(function (el0) {
          return _helpers.Long.fromString(el0);
        }),
        futurePoolGovernor: future_pool_governor,
        scalingFactorController: scaling_factor_controller
      };
    }
  },
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
    aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors",
    toAmino: function toAmino(_ref3) {
      var sender = _ref3.sender,
        poolId = _ref3.poolId,
        scalingFactors = _ref3.scalingFactors;
      return {
        sender: sender,
        pool_id: poolId.toString(),
        scaling_factors: scalingFactors.map(function (el0) {
          return el0.toString();
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var sender = _ref4.sender,
        pool_id = _ref4.pool_id,
        scaling_factors = _ref4.scaling_factors;
      return {
        sender: sender,
        poolId: _helpers.Long.fromString(pool_id),
        scalingFactors: scaling_factors.map(function (el0) {
          return _helpers.Long.fromString(el0);
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;