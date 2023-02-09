import styled from "@emotion/styled";
import type { FC, PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-left: 220px;

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  padding: 60px 40px 40px;
`;
