"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _lock = require("../lockup/lock");
var _helpers = require("../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.incentives.MsgCreateGauge": {
    aminoType: "osmosis/incentives/create-gauge",
    toAmino: function toAmino(_ref) {
      var isPerpetual = _ref.isPerpetual,
        owner = _ref.owner,
        distributeTo = _ref.distributeTo,
        coins = _ref.coins,
        startTime = _ref.startTime,
        numEpochsPaidOver = _ref.numEpochsPaidOver;
      return {
        is_perpetual: isPerpetual,
        owner: owner,
        distribute_to: {
          lock_query_type: distributeTo.lockQueryType,
          denom: distributeTo.denom,
          duration: (distributeTo.duration * 1000000000).toString(),
          timestamp: distributeTo.timestamp
        },
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        start_time: startTime,
        num_epochs_paid_over: numEpochsPaidOver.toString()
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var is_perpetual = _ref2.is_perpetual,
        owner = _ref2.owner,
        distribute_to = _ref2.distribute_to,
        coins = _ref2.coins,
        start_time = _ref2.start_time,
        num_epochs_paid_over = _ref2.num_epochs_paid_over;
      return {
        isPerpetual: is_perpetual,
        owner: owner,
        distributeTo: {
          lockQueryType: (0, _lock.lockQueryTypeFromJSON)(distribute_to.lock_query_type),
          denom: distribute_to.denom,
          duration: {
            seconds: _helpers.Long.fromNumber(Math.floor(parseInt(distribute_to.duration) / 1000000000)),
            nanos: parseInt(distribute_to.duration) % 1000000000
          },
          timestamp: distribute_to.timestamp
        },
        coins: coins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        startTime: start_time,
        numEpochsPaidOver: _helpers.Long.fromString(num_epochs_paid_over)
      };
    }
  },
  "/osmosis.incentives.MsgAddToGauge": {
    aminoType: "osmosis/incentives/add-to-gauge",
    toAmino: function toAmino(_ref3) {
      var owner = _ref3.owner,
        gaugeId = _ref3.gaugeId,
        rewards = _ref3.rewards;
      return {
        owner: owner,
        gauge_id: gaugeId.toString(),
        rewards: rewards.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var owner = _ref4.owner,
        gauge_id = _ref4.gauge_id,
        rewards = _ref4.rewards;
      return {
        owner: owner,
        gaugeId: _helpers.Long.fromString(gauge_id),
        rewards: rewards.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;