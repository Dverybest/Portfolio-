import { close, hambuger, logo } from "@/public/images";
import { typography } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";

export const NavBar: FC = () => {
  const navLinks = [
    "Home",
    "About",
    "Process",
    "Portfolio",
    "Blog",
    // "Services",
  ];
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <AnimatePresence>
      <Wrapper toggle={toggle} layout>
        <Container>
          <LogoContainer>
            <Image height={40} width={213} src={logo} alt={""} />
          </LogoContainer>
          {!toggle ? (
            <Hambuger
              role={"button"}
              height={24}
              width={24}
              onClick={() => setToggle((prev) => !prev)}
              src={hambuger}
              alt={""}
            />
          ) : (
            <Hambuger
              role={"button"}
              height={24}
              width={24}
              onClick={() => setToggle((prev) => !prev)}
              src={close}
              alt={""}
            />
          )}
        </Container>
        <NavItemContainer toggle={toggle}>
          {navLinks.map((link, index) => (
            <NavItem key={index}>
              <Link
                onClick={() => setToggle(false)}
                target={link === "blog" ? "_blank" : undefined}
                href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
              >
                {link}
              </Link>
            </NavItem>
          ))}
          <Button text="Contact" onClick={() => router.push("#contact")} />
        </NavItemContainer>
      </Wrapper>
    </AnimatePresence>
  );
};
const Wrapper = styled(motion.nav)<{ toggle: boolean }>`
  position: sticky;
  top: 0;
  z-index: 10;
  position: -webkit-sticky;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 10%;
  align-items: center;
  @media (max-width: 800px) {
    padding: 20px 20px;
  }
  @media (max-width: 425px) {
    ${({ toggle }) =>
      toggle &&
      css`
        flex-direction: column;
        justify-content: unset;
        row-gap: 47px;
        position: fixed;
        z-index: 4;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        padding: 32px;
      `}
  }
`;
const Container = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    padding-left: 0;
    width: 100%;
    max-height: fit-content;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  column-gap: 5px;
  @media (max-width: 800px) {
    img {
      width: 150px;
    }
  }
`;
const Hambuger = styled(Image)`
  cursor: pointer;
  display: none;
  @media (max-width: 425px) {
    display: block;
  }
`;
const NavItemContainer = styled.ul<{ toggle: boolean }>`
  flex-direction: row;
  display: flex;
  align-items: center;
  column-gap: 32px;
  @media (max-width: 800px) {
    column-gap: 16px;
  }
  @media (max-width: 425px) {
    display: none;
    row-gap: 32px;
    ${({ toggle }) =>
      toggle &&
      css`
        display: flex;
        flex-direction: column;
      `}
  }
`;
const NavItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.background};
  ${({}) => typography.bodyRegular};
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const SideBar = styled.div``;
