import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TbBrandDiscord } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import styled, { useTheme } from "styled-components";

export const Social: FC = ({ ...rest }) => {
  const { colors } = useTheme();
  return (
    <Conatiner {...rest}>
      <Icon
        icon={<FaLinkedinIn color={colors.white} size={18} />}
        isLinkedin
        href={"https://www.linkedin.com/in/dverybest/t"}
      />
      <Icon
        icon={<VscGithub color={colors.primary} size={18} />}
        href={"https://github.com/Dverybest"}
      />
      <Icon
        icon={<BsTwitterX color={colors.primary} size={18} />}
        href={"https://twitter.com/_dverybest"}
      />
      <Icon
        icon={<TbBrandDiscord color={colors.primary} size={20} />}
        href={"https://discordapp.com/users/939300701924884520"}
      />
      <Icon
        icon={<IoMailOutline color={colors.primary} size={20} />}
        href={"mailto:charlesbest8@gmail.com"}
      />
    </Conatiner>
  );
};
const Icon: FC<{ href: string; icon: JSX.Element; isLinkedin?: boolean }> = ({
  href,
  icon,
  isLinkedin,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <IconLink target={"_blank"} href={href} isLinkedin={isLinkedin}>
        {icon}
      </IconLink>
    </motion.div>
  );
};
const Conatiner = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  border-radius: 4px;
  padding: 12px;
  column-gap: 5px;
  box-shadow: 0px 12px 64px 0px rgba(28, 25, 25, 0.12);
`;
const IconLink = styled(Link)<{ isLinkedin?: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme, isLinkedin }) =>
    isLinkedin ? theme.colors.primary : "transparent"};
`;
