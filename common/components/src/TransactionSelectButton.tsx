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
      <Title><span>{title}</span></Title>
      <Description>{description}</Description>
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 40px;
  flex-direction: column;
  padding: 8px;
  border-radius: 4px;
  background-color: #4b4f5b;
  color: white;
`;

const Title = styled.span``;
const Description = styled.span`
  margin-top: 4px;
`;
