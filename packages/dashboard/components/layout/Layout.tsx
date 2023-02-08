import styled from "@emotion/styled";
import type { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-left: 220px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
