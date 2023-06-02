import styled from "@emotion/styled";
import { HTMLAttributes, type PropsWithChildren } from "react";

interface MessageContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const MessageContainer = ({
  title,
  children,
  ...props
}: MessageContainerProps) => {
  return (
    <Container {...props}>
      <Box>
        <span>{title}</span>
      </Box>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #4b4f5b;
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

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
