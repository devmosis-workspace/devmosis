import React from "react";
import { cosmos } from "@chain-clients/osmosis";
import styled from "@emotion/styled";

export const MsgDelegate = () => {
    return (
        <Container>
            
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: #242731;
  padding: 24px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 22px;
    left: 18px;
    right: 18px;
    bottom: -40px;
    z-index: -2;
    background: #000;
    opacity: 0.51;
    filter: blur(86.985px);
    border-radius: 24px;
  }
`;