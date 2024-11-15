import { TransactionBaseFormValue } from "@common/types";
import { type UseFieldArrayAppend } from "react-hook-form";
import { osmosisInfo, supportedTypeUrls } from "../../utils";
import { TransactionSelectButton } from "@common/components";
import styled from "@emotion/styled";

interface OsmosisTransactionListProps {
  append: UseFieldArrayAppend<
    { transactions: TransactionBaseFormValue[] },
    "transactions"
  >;
}

export const OsmosisTransactionList = ({
  append,
}: OsmosisTransactionListProps) => {
  const { chain } = osmosisInfo;
  const bech32Prefix = chain?.bech32_prefix;

  return (
    <Container>
      {supportedTypeUrls.map((typeUrl) => {
        const generateTitle = (typeUrl: string) => {
          return typeUrl.split(".Msg")[1];
        };
        return (
          <ListItem key={typeUrl}>
            <TransactionSelectButton
              title={generateTitle(typeUrl)}
              description=""
              onClick={() =>
                append({
                  typeUrl,
                  bech32Prefix,
                  memo: "",
                })
              }
            />
          </ListItem>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const ListItem = styled.div`
  width: 100%;
`;
