"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
    aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        poolParams = _ref.poolParams,
        poolAssets = _ref.poolAssets,
        futurePoolGovernor = _ref.futurePoolGovernor;
      return {
        sender: sender,
        pool_params: {
          swap_fee: poolParams.swapFee,
          exit_fee: poolParams.exitFee,
          smooth_weight_change_params: {
            start_time: poolParams.smoothWeightChangeParams.startTime,
            duration: (poolParams.smoothWeightChangeParams.duration * 1000000000).toString(),
            initial_pool_weights: poolParams.smoothWeightChangeParams.initialPoolWeights.map(function (el0) {
              return {
                token: {
                  denom: el0.token.denom,
                  amount: _helpers.Long.fromValue(el0.token.amount).toString()
                },
                weight: el0.weight
              };
            }),
            target_pool_weights: poolParams.smoothWeightChangeParams.targetPoolWeights.map(function (el0) {
              return {
                token: {
                  denom: el0.token.denom,
                  amount: _helpers.Long.fromValue(el0.token.amount).toString()
                },
                weight: el0.weight
              };
            })
          }
        },
        pool_assets: poolAssets.map(function (el0) {
          return {
            token: {
              denom: el0.token.denom,
              amount: _helpers.Long.fromValue(el0.token.amount).toString()
            },
            weight: el0.weight
          };
        }),
        future_pool_governor: futurePoolGovernor
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        pool_params = _ref2.pool_params,
        pool_assets = _ref2.pool_assets,
        future_pool_governor = _ref2.future_pool_governor;
      return {
        sender: sender,
        poolParams: {
          swapFee: pool_params.swap_fee,
          exitFee: pool_params.exit_fee,
          smoothWeightChangeParams: {
            startTime: pool_params.smooth_weight_change_params.start_time,
            duration: {
              seconds: _helpers.Long.fromNumber(Math.floor(parseInt(pool_params.smooth_weight_change_params.duration) / 1000000000)),
              nanos: parseInt(pool_params.smooth_weight_change_params.duration) % 1000000000
            },
            initialPoolWeights: pool_params.smooth_weight_change_params.initial_pool_weights.map(function (el2) {
              return {
                token: {
                  denom: el2.token.denom,
                  amount: el2.token.amount
                },
                weight: el2.weight
              };
            }),
            targetPoolWeights: pool_params.smooth_weight_change_params.target_pool_weights.map(function (el2) {
              return {
                token: {
                  denom: el2.token.denom,
                  amount: el2.token.amount
                },
                weight: el2.weight
              };
            })
          }
        },
        poolAssets: pool_assets.map(function (el0) {
          return {
            token: {
              denom: el0.token.denom,
              amount: el0.token.amount
            },
            weight: el0.weight
          };
        }),
        futurePoolGovernor: future_pool_governor
      };
    }
  }
};
exports.AminoConverter = AminoConverter;