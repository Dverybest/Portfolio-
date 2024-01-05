import { typography } from "@/utils";
import { motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

type IButton = {
  text: string;
  icon?: JSX.Element;
  onClick?: () => void;
  href?: string;
  iconRight?: JSX.Element;
};
export const Button: FC<IButton> = ({
  text,
  icon,
  href,
  iconRight,
  ...rest
}) => {
  return (
    <ButtonStyle
      as={href ? motion.a : motion.button}
      href={href}
      target={href ? "_blank" : undefined}
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      {...rest}
    >
      {icon}
      {text}
      {iconRight}
    </ButtonStyle>
  );
};

export const ButtonStyle = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  ${() => typography.bodyRegular600}
  padding: 8px 16px;
  width: fit-content;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
