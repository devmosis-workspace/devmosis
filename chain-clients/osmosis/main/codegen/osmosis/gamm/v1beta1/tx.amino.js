"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.gamm.v1beta1.MsgJoinPool": {
    aminoType: "osmosis/gamm/join-pool",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        poolId = _ref.poolId,
        shareOutAmount = _ref.shareOutAmount,
        tokenInMaxs = _ref.tokenInMaxs;
      return {
        sender: sender,
        pool_id: poolId.toString(),
        share_out_amount: shareOutAmount,
        token_in_maxs: tokenInMaxs.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        pool_id = _ref2.pool_id,
        share_out_amount = _ref2.share_out_amount,
        token_in_maxs = _ref2.token_in_maxs;
      return {
        sender: sender,
        poolId: _helpers.Long.fromString(pool_id),
        shareOutAmount: share_out_amount,
        tokenInMaxs: token_in_maxs.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitPool": {
    aminoType: "osmosis/gamm/exit-pool",
    toAmino: function toAmino(_ref3) {
      var sender = _ref3.sender,
        poolId = _ref3.poolId,
        shareInAmount = _ref3.shareInAmount,
        tokenOutMins = _ref3.tokenOutMins;
      return {
        sender: sender,
        pool_id: poolId.toString(),
        share_in_amount: shareInAmount,
        token_out_mins: tokenOutMins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var sender = _ref4.sender,
        pool_id = _ref4.pool_id,
        share_in_amount = _ref4.share_in_amount,
        token_out_mins = _ref4.token_out_mins;
      return {
        sender: sender,
        poolId: _helpers.Long.fromString(pool_id),
        shareInAmount: share_in_amount,
        tokenOutMins: token_out_mins.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/gamm/swap-exact-amount-in",
    toAmino: function toAmino(_ref5) {
      var sender = _ref5.sender,
        routes = _ref5.routes,
        tokenIn = _ref5.tokenIn,
        tokenOutMinAmount = _ref5.tokenOutMinAmount;
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
    fromAmino: function fromAmino(_ref6) {
      var sender = _ref6.sender,
        routes = _ref6.routes,
        token_in = _ref6.token_in,
        token_out_min_amount = _ref6.token_out_min_amount;
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
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/gamm/swap-exact-amount-out",
    toAmino: function toAmino(_ref7) {
      var sender = _ref7.sender,
        routes = _ref7.routes,
        tokenInMaxAmount = _ref7.tokenInMaxAmount,
        tokenOut = _ref7.tokenOut;
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
    fromAmino: function fromAmino(_ref8) {
      var sender = _ref8.sender,
        routes = _ref8.routes,
        token_in_max_amount = _ref8.token_in_max_amount,
        token_out = _ref8.token_out;
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
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
    aminoType: "osmosis/gamm/join-swap-extern-amount-in",
    toAmino: function toAmino(_ref9) {
      var sender = _ref9.sender,
        poolId = _ref9.poolId,
        tokenIn = _ref9.tokenIn,
        shareOutMinAmount = _ref9.shareOutMinAmount;
      return {
        sender: sender,
        pool_id: poolId.toString(),
        token_in: {
          denom: tokenIn.denom,
          amount: _helpers.Long.fromValue(tokenIn.amount).toString()
        },
        share_out_min_amount: shareOutMinAmount
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var sender = _ref10.sender,
        pool_id = _ref10.pool_id,
        token_in = _ref10.token_in,
        share_out_min_amount = _ref10.share_out_min_amount;
      return {
        sender: sender,
        poolId: _helpers.Long.fromString(pool_id),
        tokenIn: {
          denom: token_in.denom,
          amount: token_in.amount
        },
        shareOutMinAmount: share_out_min_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
    aminoType: "osmosis/gamm/join-swap-share-amount-out",
    toAmino: function toAmino(_ref11) {
      var sender = _ref11.sender,
        poolId = _ref11.poolId,
        tokenInDenom = _ref11.tokenInDenom,
        shareOutAmount = _ref11.shareOutAmount,
        tokenInMaxAmount = _ref11.tokenInMaxAmount;
      return {
        sender: sender,
        pool_id: poolId.toString(),
        token_in_denom: tokenInDenom,
        share_out_amount: shareOutAmount,
        token_in_max_amount: tokenInMaxAmount
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var sender = _ref12.sender,
        pool_id = _ref12.pool_id,
        token_in_denom = _ref12.token_in_denom,
        share_out_amount = _ref12.share_out_amount,
        token_in_max_amount = _ref12.token_in_max_amount;
      return {
        sender: sender,
        poolId: _helpers.Long.fromString(pool_id),
        tokenInDenom: token_in_denom,
        shareOutAmount: share_out_amount,
        tokenInMaxAmount: token_in_max_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
    aminoType: "osmosis/gamm/exit-swap-extern-amount-out",
    toAmino: function toAmino(_ref13) {
      var sender = _ref13.sender,
        poolId = _ref13.poolId,
        tokenOut = _ref13.tokenOut,
        shareInMaxAmount = _ref13.shareInMaxAmount;
      return {
        sender: sender,
        pool_id: poolId.toString(),
        token_out: {
          denom: tokenOut.denom,
          amount: _helpers.Long.fromValue(tokenOut.amount).toString()
        },
        share_in_max_amount: shareInMaxAmount
      };
    },
    fromAmino: function fromAmino(_ref14) {
      var sender = _ref14.sender,
        pool_id = _ref14.pool_id,
        token_out = _ref14.token_out,
        share_in_max_amount = _ref14.share_in_max_amount;
      return {
        sender: sender,
        poolId: _helpers.Long.fromString(pool_id),
        tokenOut: {
          denom: token_out.denom,
          amount: token_out.amount
        },
        shareInMaxAmount: share_in_max_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
    aminoType: "osmosis/gamm/exit-swap-share-amount-in",
    toAmino: function toAmino(_ref15) {
      var sender = _ref15.sender,
        poolId = _ref15.poolId,
        tokenOutDenom = _ref15.tokenOutDenom,
        shareInAmount = _ref15.shareInAmount,
        tokenOutMinAmount = _ref15.tokenOutMinAmount;
      return {
        sender: sender,
        pool_id: poolId.toString(),
        token_out_denom: tokenOutDenom,
        share_in_amount: shareInAmount,
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: function fromAmino(_ref16) {
      var sender = _ref16.sender,
        pool_id = _ref16.pool_id,
        token_out_denom = _ref16.token_out_denom,
        share_in_amount = _ref16.share_in_amount,
        token_out_min_amount = _ref16.token_out_min_amount;
      return {
        sender: sender,
        poolId: _helpers.Long.fromString(pool_id),
        tokenOutDenom: token_out_denom,
        shareInAmount: share_in_amount,
        tokenOutMinAmount: token_out_min_amount
      };
    }
  }
};
exports.AminoConverter = AminoConverter;