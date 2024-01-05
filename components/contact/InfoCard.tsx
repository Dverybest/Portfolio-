import { typography } from "@/utils";
import { motion } from "framer-motion";
import { FC } from "react";
import { SlLocationPin } from "react-icons/sl";
import styled, { useTheme } from "styled-components";

export const InfoCard: FC<{
  title: string;
  value: string;
  delay: number;
  isPrimary?: boolean;
}> = ({ title, value, isPrimary, delay }) => {
  const { colors } = useTheme();
  const variants = {
    hide: {
      x: -40,
      y: -20,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay,
      },
    },
  };
  return (
    <Conatiner
      isPrimary={isPrimary}
      as={motion.div}
      variants={variants}
      initial="hide"
      whileInView="show"
      exit="hide"
    >
      <Icon isPrimary={isPrimary}>
        <SlLocationPin color={isPrimary ? colors.white : colors.primary} />
      </Icon>
      <div>
        <Title>{title}</Title>
        <Description>{value}</Description>
      </div>
    </Conatiner>
  );
};

const Conatiner = styled.div<{ isPrimary?: boolean }>`
  align-items: center;
  max-width: 336px;
  display: inline-flex;
  border-radius: 4px;
  padding: 24px;
  column-gap: 13px;
  box-shadow: ${({ isPrimary }) =>
    isPrimary ? " 0px 12px 64px 0px rgba(28, 25, 25, 0.12)" : "nono"};
`;

const Icon = styled.span<{ isPrimary?: boolean }>`
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : theme.colors.primary05};
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.grey700};
  ${() => typography.bodySmall400};
`;
const Description = styled.p`
  ${() => typography.bodyRegular};
  color: ${({ theme }) => theme.colors.grey900};
  word-break: break-all;
`;
