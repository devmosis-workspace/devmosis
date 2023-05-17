import type { Chain } from "chain-registry";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { FC } from "react";

interface MessageGroupProps {
  chainInfo: Chain;
  removeMessageGroup: () => void;
}

export const MessageGroup: FC<MessageGroupProps> = ({
  chainInfo,
  removeMessageGroup,
}) => {
  return (
    <Container>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <span>{chainInfo.pretty_name}</span>
        <RemoveButton onClick={removeMessageGroup}>Remove</RemoveButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: gray;
  padding: 10px;
`;

const RemoveButton = styled.button`
  display: flex;
  width: fit-content;
`;
