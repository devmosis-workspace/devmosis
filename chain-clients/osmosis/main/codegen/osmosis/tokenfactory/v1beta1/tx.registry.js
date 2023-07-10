"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/osmosis.tokenfactory.v1beta1.MsgCreateDenom", _tx.MsgCreateDenom], ["/osmosis.tokenfactory.v1beta1.MsgMint", _tx.MsgMint], ["/osmosis.tokenfactory.v1beta1.MsgBurn", _tx.MsgBurn], ["/osmosis.tokenfactory.v1beta1.MsgChangeAdmin", _tx.MsgChangeAdmin], ["/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata", _tx.MsgSetDenomMetadata]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    createDenom: function createDenom(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
        value: _tx.MsgCreateDenom.encode(value).finish()
      };
    },
    mint: function mint(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
        value: _tx.MsgMint.encode(value).finish()
      };
    },
    burn: function burn(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
        value: _tx.MsgBurn.encode(value).finish()
      };
    },
    changeAdmin: function changeAdmin(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
        value: _tx.MsgChangeAdmin.encode(value).finish()
      };
    },
    setDenomMetadata: function setDenomMetadata(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: _tx.MsgSetDenomMetadata.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDenom: function createDenom(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
        value: value
      };
    },
    mint: function mint(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
        value: value
      };
    },
    burn: function burn(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
        value: value
      };
    },
    changeAdmin: function changeAdmin(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
        value: value
      };
    },
    setDenomMetadata: function setDenomMetadata(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: value
      };
    }
  },
  fromPartial: {
    createDenom: function createDenom(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
        value: _tx.MsgCreateDenom.fromPartial(value)
      };
    },
    mint: function mint(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
        value: _tx.MsgMint.fromPartial(value)
      };
    },
    burn: function burn(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
        value: _tx.MsgBurn.fromPartial(value)
      };
    },
    changeAdmin: function changeAdmin(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
        value: _tx.MsgChangeAdmin.fromPartial(value)
      };
    },
    setDenomMetadata: function setDenomMetadata(value) {
      return {
        typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: _tx.MsgSetDenomMetadata.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;