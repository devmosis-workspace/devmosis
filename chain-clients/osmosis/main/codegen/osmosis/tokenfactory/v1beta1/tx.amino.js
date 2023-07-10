"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
//@ts-nocheck

var AminoConverter = {
  "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "osmosis/tokenfactory/create-denom",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        subdenom = _ref.subdenom;
      return {
        sender: sender,
        subdenom: subdenom
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        subdenom = _ref2.subdenom;
      return {
        sender: sender,
        subdenom: subdenom
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgMint": {
    aminoType: "osmosis/tokenfactory/mint",
    toAmino: function toAmino(_ref3) {
      var sender = _ref3.sender,
        amount = _ref3.amount;
      return {
        sender: sender,
        amount: {
          denom: amount.denom,
          amount: _helpers.Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var sender = _ref4.sender,
        amount = _ref4.amount;
      return {
        sender: sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "osmosis/tokenfactory/burn",
    toAmino: function toAmino(_ref5) {
      var sender = _ref5.sender,
        amount = _ref5.amount;
      return {
        sender: sender,
        amount: {
          denom: amount.denom,
          amount: _helpers.Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var sender = _ref6.sender,
        amount = _ref6.amount;
      return {
        sender: sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "osmosis/tokenfactory/change-admin",
    toAmino: function toAmino(_ref7) {
      var sender = _ref7.sender,
        denom = _ref7.denom,
        newAdmin = _ref7.newAdmin;
      return {
        sender: sender,
        denom: denom,
        new_admin: newAdmin
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var sender = _ref8.sender,
        denom = _ref8.denom,
        new_admin = _ref8.new_admin;
      return {
        sender: sender,
        denom: denom,
        newAdmin: new_admin
      };
    }
  },
  "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "osmosis/tokenfactory/set-denom-metadata",
    toAmino: function toAmino(_ref9) {
      var sender = _ref9.sender,
        metadata = _ref9.metadata;
      return {
        sender: sender,
        metadata: {
          description: metadata.description,
          denom_units: metadata.denomUnits.map(function (el0) {
            return {
              denom: el0.denom,
              exponent: el0.exponent,
              aliases: el0.aliases
            };
          }),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uri_hash: metadata.uriHash
        }
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var sender = _ref10.sender,
        metadata = _ref10.metadata;
      return {
        sender: sender,
        metadata: {
          description: metadata.description,
          denomUnits: metadata.denom_units.map(function (el1) {
            return {
              denom: el1.denom,
              exponent: el1.exponent,
              aliases: el1.aliases
            };
          }),
          base: metadata.base,
          display: metadata.display,
          name: metadata.name,
          symbol: metadata.symbol,
          uri: metadata.uri,
          uriHash: metadata.uri_hash
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;