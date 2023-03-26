import React, { FC } from "react";
import styled from "styled-components";

export const Quote:FC = () => {
  return (
    <Container>
      <Quotation>Premature optimization is the root of all evil</Quotation>
      <Quotation>- Donald Knuth</Quotation>
    </Container>
  );
};
const Container = styled.article`
  align-self: center;
  margin: -20px 20px 74px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Quotation = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  padding: 32px;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  @media (max-width: 425px) {
    padding: 16px;
  }
`;
