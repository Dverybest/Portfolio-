import { background2, decoration, user2 } from "@/public/images";
import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { SkillCard } from "./SkillCard";

export const AboutMe: FC = () => {
  return (
    <Container id={'about-me'}>
      <TitleContainer>
        <Title>
          <span>#</span>about-me
        </Title>
        <Line />
      </TitleContainer>
      <Details>
        <Column>
          <Text>Hello, I&apos;m Charles Best! <i>aka DveryBest</i></Text>
          <Text>
            I&apos;m an accomplished Software Engineer with extensive knowledge and
            experience in building enterprise, start-ups and small scale
            software solutions.
          </Text>
          <Text>
            Creating solutions that come alive and solve critical problems is
            one thing I love doing; I&apos;m goal driven, industrious and love human
            interaction. You &apos;ll find me staking out a challenge, fleshing out a
            problem or just chilling at a meeetup with friends and family.
          </Text>
          <Button text="Read more~>" />
        </Column>
        <ImageContainer>
          <UserImage src={user2} alt="Charles Best" />
        </ImageContainer>
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
  max-width: 326px;
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
    flex-direction: column-reverse;
  }
`;
const ImageContainer = styled.div`
  background-image: url(${background2.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
  }
`;
const UserImage = styled(Image)`
  margin-top: -100px;
  max-width: 346px;
  height: auto;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 270px;
    margin-top: 0px;
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
  @media (max-width: 768px) {
    /* flex-direction: row; */
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
