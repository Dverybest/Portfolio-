import { Logo2 } from "@/public/images";
import { FC } from "react";
import styled, { useTheme } from "styled-components";

export const Footer: FC = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Row>
        <Logo2 fill={colors.white} />
        <span id={"copyright"}>
          copyright © Dverybest {new Date().getFullYear()}.
        </span>
      </Row>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.grey900};
  color: ${({ theme }) => theme.colors.white};
  padding: 32px 154px;
  padding-top: 150px;
  @media (max-width: 1024px) {
    padding: 100px 50px 32px;
  }
  @media (max-width: 768px) {
    padding: 100px 20px 32px;
  }
`;
const Row = styled.div`
  display: flex;
  flex: 1;
  column-gap: 16px;
  row-gap: 24px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
