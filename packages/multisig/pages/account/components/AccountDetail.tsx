import { Typography } from "@/components/Typography";
import { supportedChainInfos } from "@/constants/supportedChainInfos";
import type { MultisigAccountResponse } from "@/graphql/queries/multisigAccount";
import type { Chain } from "chain-registry";
import QRCode from "react-qr-code";

interface AccountDetailProps {
  account:
    | MultisigAccountResponse["multisigAccountByMultisigAddress"]
    | undefined;
  ongoingTx: MultisigAccountResponse["multisigAccountByMultisigAddress"]["transactions"];
  chainInfo: Chain | undefined;
}

export const AccountDetail = ({
  account,
  ongoingTx,
  chainInfo,
}: AccountDetailProps) => {
  const owners = account?.owners.length;

  const ongoingTxCount = ongoingTx.filter((tx) => tx.txHash === null).length;

  return (
    <div className="flex flex-col w-full">
      <Typography.H4 className="text-[#778CA2] mb-6">
        Account Detail
      </Typography.H4>
      <div className="flex w-full gap-4">
        <div className="flex-1 flex flex-col p-6 rounded-lg bg-white">
          <Typography.H2>{account?.name}</Typography.H2>
          <Typography.H5 className="mt-2 text-[#778CA2]">
            {account?.description ?? "No description"}
          </Typography.H5>
          <hr className="border-t border-t-[#E8ECEF] my-3" />
          <Typography.SMText className="w-full text-[#252631] break-words">
            {account?.address}
          </Typography.SMText>
        </div>
        <div className="grid gap-4 grid-rows-2 grid-cols-2 rounded w-[400px]">
          <div className="flex flex-col p-4 bg-white rounded">
            <Typography.H4 className="text-[#252631] mb-1">Chain</Typography.H4>
            <Typography.SMText className="text-[#778CA2]">
              {chainInfo?.pretty_name}
            </Typography.SMText>
          </div>
          <div className="flex flex-col p-4 bg-white rounded">
            <Typography.H4 className="text-[#252631] mb-1">
              Ongoing Txs
            </Typography.H4>
            <Typography.SMText className="text-[#778CA2]">
              {ongoingTxCount}
            </Typography.SMText>
          </div>
          <div className="flex flex-col p-4 bg-white rounded">
            <Typography.H4 className="text-[#252631] mb-1">
              Threshold
            </Typography.H4>
            <Typography.SMText className="text-[#778CA2]">
              {account?.threshold}
            </Typography.SMText>
          </div>
          <div className="flex flex-col p-4 bg-white rounded">
            <Typography.H4 className="text-[#252631] mb-1">
              Owners
            </Typography.H4>
            <Typography.SMText className="text-[#778CA2]">
              {owners}
            </Typography.SMText>
          </div>
        </div>
        <div className="flex justify-center p-6 bg-white rounded">
          {account?.address !== undefined ? (
            <div className="flex w-fit h-fit p-2 rounded bg-slate-500/10">
              <QRCode value={account.address} size={120} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
