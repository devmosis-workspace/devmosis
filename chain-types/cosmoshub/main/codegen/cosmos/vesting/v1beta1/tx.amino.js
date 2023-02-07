"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: function toAmino(_ref) {
      var fromAddress = _ref.fromAddress,
        toAddress = _ref.toAddress,
        amount = _ref.amount,
        endTime = _ref.endTime,
        delayed = _ref.delayed;
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        end_time: endTime.toString(),
        delayed: delayed
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var from_address = _ref2.from_address,
        to_address = _ref2.to_address,
        amount = _ref2.amount,
        end_time = _ref2.end_time,
        delayed = _ref2.delayed;
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        endTime: _helpers.Long.fromString(end_time),
        delayed: delayed
      };
    }
  }
};
exports.AminoConverter = AminoConverter;