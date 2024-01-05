import {
  aladdin,
  evakitchen,
  ifunanya,
  portilify,
  soji,
  soji_admin,
} from "@/public/images";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";
import { typography } from "@/utils";

export const Projects: FC = () => {
  const projects = [
    {
      title: "Soji Apps",
      role: "Lead Developer",
      description:
        "SOJI gives you access to malls and shopping store in your region.",
      link: "https://sojiapps.netlify.app/",
      image: soji,
    },
    {
      title: "Eva Kitchen",
      role: "Lead Developer",
      description: "Your Favourite Food Delivered Hot And Fresh.",
      link: "https://evakitchen.netlify.app/",
      image: evakitchen,
    },
    {
      title: "Soji Apps Admin Dashboard",
      role: "Lead Developer",
      description:
        "Soji Apps admin dashobard that hands user, order, product management, etc.",
      link: "https://admin-sojiapps.netlify.app/",
      image: soji_admin,
    },
    {
      title: "Ifunanya Portfolio",
      role: "Lead Developer",
      description:
        "Ifunanya's Product Designer and Digital Creative portfolio website.",
      link: "https://ifunanya.vercel.app/",
      image: ifunanya,
    },
    {
      title: "Portfoliify",
      role: "Lead Developer",
      description: "Web app for creating winning CV’s & Portfolios with ease.",
      link: "https://portfoliify.vercel.app/",
      image: portilify,
    },
  ];
  return (
    <Container id={"portfolio"}>
      <TitleContainer>
        <Title>Portfolio</Title>
        <Description>
          Showcasing Mastery: A Visual Symphony of Software Engineering – Where
          Craftsmanship Meets Creativity in Every Pixel, Unveiling the Essence
          of My Professional Journey.
        </Description>
      </TitleContainer>
      <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.title}
            image={project.image}
            alt={project.title}
            title={project.title}
            techStack={project.role}
            description={project.description}
            link={project.link}
          />
        ))}
      </ProjectContainer>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  padding: 82px 154px;
  @media (max-width: 1024px) {
    padding: 82px 50px;
  }
  @media (max-width: 768px) {
    padding: 82px 20px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 24px;
  margin-bottom: 70px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.grey900};
  ${() => typography.header1};
`;
const Description = styled.p`
  ${() => typography.bodyLarge};
  color: ${({ theme }) => theme.colors.grey400};
  text-align: center;
  max-width: 600px;
`;

const ProjectContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  column-gap: 16px;
  row-gap: 20px;
`;
