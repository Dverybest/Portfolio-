import React, { FC } from "react";
import styled from "styled-components";

type IButton = {
  text: string;
};
export const Button: FC<IButton> = ({ text, ...rest }) => {
  return <ButtonStyle {...rest}>{text}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  padding: 8px 16px;
  width: fit-content;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
