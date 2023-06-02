import { type TransactionFormValues } from "@common/types";
import { type UseFieldArrayAppend } from "react-hook-form";
import { osmosisInfo, supportedTypeUrls } from "../../utils";
import { TransactionSelectButton } from "@common/components";
import styled from "@emotion/styled";

interface OsmosisTransactionListProps {
  append: UseFieldArrayAppend<TransactionFormValues, "transactions">;
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
                })
              }
            />
          </ListItem>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 4px;
  list-style: none;
`;
