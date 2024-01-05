import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { Button, ButtonStyle } from "../Button";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { typography } from "@/utils";
type IProjectCard = {
  image: StaticImageData;
  alt: string;
  techStack: string;
  title: string;
  description: string;
  link: string;
  index: number;
};
export const ProjectCard: FC<IProjectCard> = ({
  image,
  alt,
  techStack,
  title,
  description,
  link,
  index,
}) => {
  const variants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        stiffness: 200,
      },
    },
  };
  return (
    <Container
      variants={variants}
      initial="hide"
      whileInView="show"
      exit="hide"
    >
      <ProjectImage src={image} alt={alt} />
      <DescriptionContainer>
        <ToolsContainer>{techStack}</ToolsContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonLink
          as={motion.a}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          target={"_blank"}
          href={link}
        >
          Live
          <BsArrowRightShort size={24} />
        </ButtonLink>
      </DescriptionContainer>
    </Container>
  );
};
const Container = styled(motion.article)`
  display: flex;
  flex-direction: column;
  width: calc(33.3% - 16px);
  height: fit-content;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 8px;
  box-shadow: 0px 12px 64px 0px rgba(28, 25, 25, 0.12);
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
const DescriptionContainer = styled(motion.div)`
  margin: 32px 24px;
`;
const ToolsContainer = styled.div`
  ${() => typography.bodyThin500}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey400};
`;
const Title = styled.h3`
  ${() => typography.bodyLarge600}
  color: ${({ theme }) => theme.colors.grey900};
  max-height: 24px;
  overflow-y: hidden;
`;
const Description = styled.p`
  ${() => typography.bodySmall400}
  color: ${({ theme }) => theme.colors.grey600};
  max-height: 40px;
  overflow-y: hidden;
  margin: 12px 0 20px;
`;
const ButtonLink = styled(ButtonStyle)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
`;
