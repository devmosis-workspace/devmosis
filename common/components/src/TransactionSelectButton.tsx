import { type HTMLAttributes } from "react";
import styled from "@emotion/styled";

interface TransactionSelectButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
  title: string;
  description: string;
  onClick: () => void;
}

export const TransactionSelectButton = ({
  title,
  description,
  ...props
}: TransactionSelectButtonProps) => {
  return (
    <Button {...props}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 4px;
  background-color: #4b4f5b;
`;

const Title = styled.span``;
const Description = styled.span`
  margin-top: 4px;
`;
