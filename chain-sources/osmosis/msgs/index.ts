import { cosmos, osmosis } from "@chain-clients/osmosis";

const cosmosAminoConverter = {
  ...cosmos.authz.v1beta1.AminoConverter,
  ...cosmos.bank.v1beta1.AminoConverter,
  ...cosmos.crisis.v1beta1.AminoConverter,
  ...cosmos.distribution.v1beta1.AminoConverter,
  ...cosmos.evidence.v1beta1.AminoConverter,
  ...cosmos.feegrant.v1beta1.AminoConverter,
  ...cosmos.gov.v1.AminoConverter,
  ...cosmos.gov.v1beta1.AminoConverter,
  ...cosmos.group.v1.AminoConverter,
  ...cosmos.nft.v1beta1.AminoConverter,
  ...cosmos.slashing.v1beta1.AminoConverter,
  ...cosmos.staking.v1beta1.AminoConverter,
  ...cosmos.upgrade.v1beta1.AminoConverter,
  ...cosmos.vesting.v1beta1.AminoConverter,
};

const osmosisAminoConverter = {
  ...osmosis.gamm.v1beta1.AminoConverter,
  ...osmosis.incentives.AminoConverter,
  ...osmosis.lockup.AminoConverter,
  ...osmosis.poolmanager.v1beta1.AminoConverter,
  ...osmosis.protorev.v1beta1.AminoConverter,
  ...osmosis.superfluid.AminoConverter,
  ...osmosis.tokenfactory.v1beta1.AminoConverter,
  ...osmosis.valsetpref.v1beta1.AminoConverter,
};

export const osmosisAminoMsgs = {
  ...cosmosAminoConverter,
  ...osmosisAminoConverter,
};
