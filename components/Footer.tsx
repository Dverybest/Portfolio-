import { logo } from "@/public/images";
import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { Social } from "./Social";

export const Footer: FC = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Row>
            <LogoContainer>
              <Image height={24} width={24} src={logo} alt={""} />
              <Logo>DVERYBEST</Logo>
            </LogoContainer>
          </Row>
          <Title>Senior Software Engineer</Title>
        </Column>
        <Column>
          <Media>Media</Media>
          <CustomSocial />
        </Column>
      </Row>
      <span id={"copyright"}>
        © Dverybest {new Date().getFullYear()}. All Rights Reserved.
      </span>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  margin-top: 100px;
  padding: 32px 154px;
  @media (max-width: 1024px) {
    padding: 32px 50px;
  }
  @media (max-width: 768px) {
    padding: 32px 20px;
  }
  #copyright {
    text-align: center;
    align-self: center;
    padding-top: 48px;
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
const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  column-gap: 16px;
  @media (max-width: 425px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  column-gap: 5px;
`;
const Logo = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.white};
`;
const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin-top: -10px;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 425px) {
    margin-top: 0px;
  }
`;
const Media = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
`;
const CustomSocial = styled(Social)`
  flex-direction: row;
  display: flex;
  column-gap: 32px;
  #line {
    display: none;
  }
`;
