import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "./Button";

type IProjectCard = {
  image: StaticImageData;
  alt: string;
  techStack: string;
  title: string;
  description: string;
  link: string;
};
export const ProjectCard: FC<IProjectCard> = ({
  image,
  alt,
  techStack,
  title,
  description,
  link,
}) => {
  return (
    <Container>
      <ProjectImage src={image} alt={alt} />
      <ToolsContainer>{techStack}</ToolsContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonLink target={"_blank"} href={link}>
        <Button text={"Live <~>"} />
      </ButtonLink>
    </Container>
  );
};
const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: calc(33.3% - 16px);
  height: fit-content;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  @media (max-width: 768px) {
    width: calc(50% - 16px);
  }
  @media (max-width: 425px) {
    width: calc(100%);
  }
`;
const ProjectImage = styled(Image)`
  height: 201px;
  width: 100%;
  object-fit: cover;
`;
const ToolsContainer = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.grey};
  padding: 8px;
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;
const Title = styled.h3`
  font-weight: 500;
  margin: 16px;
  font-size: 24px;
  line-height: 31px;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin: 0 16px;
`;
const ButtonLink = styled(Link)`
  margin: 16px;
`;
