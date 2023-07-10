"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/poolmanager/swap-exact-amount-in",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        routes = _ref.routes,
        tokenIn = _ref.tokenIn,
        tokenOutMinAmount = _ref.tokenOutMinAmount;
      return {
        sender: sender,
        routes: routes.map(function (el0) {
          return {
            pool_id: el0.poolId.toString(),
            token_out_denom: el0.tokenOutDenom
          };
        }),
        token_in: {
          denom: tokenIn.denom,
          amount: _helpers.Long.fromValue(tokenIn.amount).toString()
        },
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        routes = _ref2.routes,
        token_in = _ref2.token_in,
        token_out_min_amount = _ref2.token_out_min_amount;
      return {
        sender: sender,
        routes: routes.map(function (el0) {
          return {
            poolId: _helpers.Long.fromString(el0.pool_id),
            tokenOutDenom: el0.token_out_denom
          };
        }),
        tokenIn: {
          denom: token_in.denom,
          amount: token_in.amount
        },
        tokenOutMinAmount: token_out_min_amount
      };
    }
  },
  "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/poolmanager/swap-exact-amount-out",
    toAmino: function toAmino(_ref3) {
      var sender = _ref3.sender,
        routes = _ref3.routes,
        tokenInMaxAmount = _ref3.tokenInMaxAmount,
        tokenOut = _ref3.tokenOut;
      return {
        sender: sender,
        routes: routes.map(function (el0) {
          return {
            pool_id: el0.poolId.toString(),
            token_in_denom: el0.tokenInDenom
          };
        }),
        token_in_max_amount: tokenInMaxAmount,
        token_out: {
          denom: tokenOut.denom,
          amount: _helpers.Long.fromValue(tokenOut.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var sender = _ref4.sender,
        routes = _ref4.routes,
        token_in_max_amount = _ref4.token_in_max_amount,
        token_out = _ref4.token_out;
      return {
        sender: sender,
        routes: routes.map(function (el0) {
          return {
            poolId: _helpers.Long.fromString(el0.pool_id),
            tokenInDenom: el0.token_in_denom
          };
        }),
        tokenInMaxAmount: token_in_max_amount,
        tokenOut: {
          denom: token_out.denom,
          amount: token_out.amount
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;