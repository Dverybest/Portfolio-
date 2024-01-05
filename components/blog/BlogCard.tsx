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
  date: string;
  reactions: number;
  title: string;
  link: string;
  index: number;
};
export const BlogCard: FC<IProjectCard> = ({
  image,
  date,
  reactions,
  title,
  link,
  index,
}) => {
  const variants = {
    hide: {
      opacity: 0,
      x:-15
    },
    show: {
      opacity: 1,
      x:0,
      transition: {
        duration: 1,
        delay:index/15
      },
    },
  };
  return (
    <Link href={link} target={"_blank"}>
      <Container
      variants={variants}
      initial="hide"
      whileInView="show"
      exit="hide"
      >
        <ProjectImage src={image} alt={title} />
        <DescriptionContainer>
          <Info>
            {date}/ {reactions} Reactions
          </Info>
          <Title>{title}</Title>
        </DescriptionContainer>
      </Container>
    </Link>
  );
};
const Container = styled(motion.article)`
  display: flex;
  flex-direction: column;
  min-width: 312px;
  height: 350px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey50};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 12px 64px 0px rgba(28, 25, 25, 0.12);
`;
const ProjectImage = styled(Image)`
  height: 201px;
  width: 100%;
  object-fit: cover;
`;
const DescriptionContainer = styled(motion.div)`
  margin: 24px;
  row-gap: 8px;
  display: flex;
  flex-direction: column;
`;
const Info = styled.p`
  ${() => typography.bodyThin500}
  color: ${({ theme }) => theme.colors.grey400};
`;
const Title = styled.h3`
  ${() => typography.bodyLarge500}
  color: ${({ theme }) => theme.colors.grey900};
  max-height: 48px;
  overflow-y: hidden;
`;
