import { aladdin, evakitchen, soji } from "@/public/images";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";

export const Projects: FC = () => {
  return (
    <Container id={'works'}>
      <TitleContainer>
        <Row>
          <Title>
            <span>#</span>projects
          </Title>
          <Line />
        </Row>
        <ViewAll href={"/projects"}>{"View all ~~>"}</ViewAll>
      </TitleContainer>
      <ProjectContainer>
        <ProjectCard
          image={evakitchen}
          alt={"Eva kitchen"}
          title={"Eva Kitchen"}
          techStack={
            "HTML CSS TYPESCRIPT JAVASCRIPT REACT REACT-NATIVE NODEJS GIT"
          }
          description={"Your Favourite Food Delivered Hot And Fresh"}
          link={"https://evakitchen.netlify.app/"}
        />
        <ProjectCard
          image={soji}
          alt={"Soji apps"}
          title={"Soji Apps"}
          description={
            "SOJI gives you access to malls and shopping store in your region and makes your real estate experience very easy and trust"
          }
          techStack={
            "HTML CSS TYPESCRIPT JAVASCRIPT REACT REACT-NATIVE NODEJS GIT"
          }
          link={"https://sojiapps.com/"}
        />
        <ProjectCard
          image={aladdin}
          title={"Aladdin Digital Bank App"}
          alt={"Aladdin digital App"}
          techStack={"TYPESCRIPT JAVASCRIPT REACT REACT-NATIVE GIT"}
          description={
            "Get the tools needed to securely earn, borrow, save, make payments, and connect with our growing community."
          }
          link={"https://aladdin.ng/"}
        />
      </ProjectContainer>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  scroll-behavior: smooth;
  flex-direction: column;
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
  justify-content: space-between;
  column-gap: 30px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Title = styled.h2`
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const Line = styled.span`
  max-width: 511px;
  height: 1px;
  flex: 1;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
`;
const ViewAll = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;
const ProjectContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  column-gap: 16px;
  row-gap: 20px;
`;
