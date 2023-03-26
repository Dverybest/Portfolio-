import React, { FC } from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import Link from "next/link";

export const Social: FC = ({...rest}) => {
  return (
    <Conatiner {...rest}>
      <Line id={'line'}/>
      <Link target={"_blank"} href={"https://github.com/Dverybest"}>
        <SiGithub />
      </Link>
      <Link target={"_blank"} href={"https://www.linkedin.com/in/dverybest/t"}>
        <SiLinkedin />
      </Link>
      <Link target={"_blank"} href={"https://twitter.com/_dverybest"}>
        <SiTwitter />
      </Link>
    </Conatiner>
  );
};
const Conatiner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  svg {
    height: 24px;
    width: 24px;
    fill: ${({ theme }) => theme.colors.grey};
  }
  @media (max-width: 425px) {
    display: none;
  }
`;
const Line = styled.div`
  width: 1px;
  height: 191px;
  background-color: ${({ theme }) => theme.colors.grey};
`;
