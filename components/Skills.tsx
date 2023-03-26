import { decoration } from "@/public/images";
import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { SkillCard } from "./SkillCard";

export const Skills: FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <span>#</span>skills
        </Title>
        <Line />
      </TitleContainer>
      <Details>
        <Image
          priority
          src={decoration}
          height={282}
          width={325}
          alt="Follow us on Twitter"
        />
        <Row>
          <Column>
            <SkillCard title={"Languages"} values={"TypeScript JavaScript C# Java"} />
            <SkillCard title={"Platform"} values={"Frontend Mobile Backend"} />
          </Column>
          <Column>
            <SkillCard title={"Databases"} values={"MonogoDB MYSQL SQLite"} />
            <SkillCard title={"Others"} values={"HTML CSS Node.JS Styled-Components"} />
          </Column>
          <Column>
            <SkillCard title={"Tools"} values={"VSCode Git Slack Jira Figma Android Studio XCode"} />
            <SkillCard title={"Frameworks"} values={"React React-Native Next.JS Expo Express.JS NestJS"} />
          </Column>
        </Row>
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
  max-width: 239px;
  height: 1px;
  flex: 1;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
`;
const Details = styled.div`
  display: flex;
  flex: 1;
  column-gap: 16px;
  row-gap: 24px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Row = styled.div`
  display: flex;
  flex: 1;
  column-gap: 16px;
  row-gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;
  flex: 1;
  column-gap: 16px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
