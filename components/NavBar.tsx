import { close, hambuger, logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

export const NavBar: FC = () => {
  const navLinks = ["home", "works", "about-me", "contact", "blog"];
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper toggle={toggle}>
      <Container>
        <LogoContainer>
          <Image height={24} width={24} src={logo} alt={""} />
          <Logo>DVERYBEST</Logo>
        </LogoContainer>
        <Hambuger
          role={"button"}
          height={24}
          width={24}
          onClick={() => setToggle((prev) => !prev)}
          src={!toggle ? hambuger : close}
          alt={""}
        />
      </Container>
      <NavItemContainer toggle={toggle}>
        {navLinks.map((link, index) => (
          <NavItem key={index}>
            <Link
              onClick={() => setToggle(false)}
              target={link === "blog" ? "_blank" : undefined}
              href={link === "blog" ? "https://dev.to/dverybest" : `#${link}`}
            >
              <span>#</span>
              {link}
            </Link>
          </NavItem>
        ))}
      </NavItemContainer>
    </Wrapper>
  );
};
const Wrapper = styled.nav<{ toggle: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
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
        background-color: ${({ theme }) => theme.colors.background};
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
`;
const Hambuger = styled(Image)`
  cursor: pointer;
  display: none;
  @media (max-width: 425px) {
    display: block;
  }
`;
const Logo = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;
const NavItemContainer = styled.ul<{ toggle: boolean }>`
  flex-direction: row;
  display: flex;
  column-gap: 32px;
  @media (max-width: 425px) {
    display: none;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
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
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const SideBar = styled.div``;
