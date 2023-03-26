import { background2, decoration, user2 } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { SiDiscord, SiGmail } from "react-icons/si";
import styled from "styled-components";
import { Button } from "./Button";
import { SkillCard } from "./SkillCard";

export const Contact: FC = () => {
  return (
    <Container id={"contact"}>
      <TitleContainer>
        <Title>
          <span>#</span>contacts
        </Title>
        <Line />
      </TitleContainer>
      <Details>
        <Column>
          <Text>
            I&apos;m interested in freelance opportunities. However, if you have
            other request or question, don&apos;t hesitate to contact me
          </Text>
        </Column>

        <ContactDetails>
          <ContactTitle>Message me here</ContactTitle>
          <Row>
            <SiDiscord />
            <Text>Dverybest#1571</Text>
          </Row>
          <Row>
            <SiGmail />
            <Link target={"_blank"} href="mailto:email@example.com">
              <Text>charlesbest8@gmail.com</Text>
            </Link>
          </Row>
        </ContactDetails>
      </Details>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 126.5px;
  padding: 0px 154px;
  @media (max-width: 1024px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  margin-bottom: 12px;
`;
const Title = styled.h2`
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const Line = styled.span`
  max-width: 127px;
  height: 1px;
  flex: 1;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
`;
const Details = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  column-gap: 20px;
  row-gap: 24px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.grey};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 512px;
  flex: 2;
  column-gap: 16px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const ContactDetails = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const ContactTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
`;
const Row = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
`;
