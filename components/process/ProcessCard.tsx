import { typography, useMedia } from "@/utils";
import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";

export const ProcessCard: FC<{
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const { isMobile } = useMedia();
  const variants = {
    hide: {
      y: isMobile ? 20 : index % 2 == 0 ? 20 : 0,
    },
    show: {
      y: isMobile ? 0 : index % 2 == 1 ? 20 : 0,
      transition: {
        type: "spring",
        duration: 1,
        stiffness: 400,
        damping: 4,
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
      <IconContainer>{icon}</IconContainer>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: fit-content;
  max-width: calc(50% - 24px);
  row-gap: 32px;
  border-radius: 12px;
  box-shadow: 32px 32px 124px 0px rgba(43, 56, 76, 0.1);
  background: ${({ theme }) => theme.colors.white};
  @media (max-width: 500px) {
    min-width: 100%;
  }
`;
const IconContainer = styled.div<{ isLinkedin?: boolean }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${({ theme, isLinkedin }) =>
    isLinkedin ? theme.colors.white : theme.colors.primary};
  background-color: ${({ theme, isLinkedin }) =>
    isLinkedin ? theme.colors.primary : theme.colors.primary05};
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.grey900};
  margin-bottom: 12px;
  ${() => typography.header5};
`;
const Description = styled.p`
  ${() => typography.bodyRegular400};
  color: ${({ theme }) => theme.colors.grey600};
`;
