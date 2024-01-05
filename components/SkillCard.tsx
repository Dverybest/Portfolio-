import React, { FC } from "react";
import styled from "styled-components";
type ISkillCard = {
  values: string;
  title: string;
};
export const SkillCard: FC<ISkillCard> = ({ values, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{values}</Description>
    </Container>
  );
};
const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 178px;
  height: fit-content;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  @media (max-width: 768px) {
    width: calc(50% - 16px);
  }
  @media (max-width: 425px) {
    width: calc(100%);
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  padding: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 8px;
  line-height: 21px;
`;
