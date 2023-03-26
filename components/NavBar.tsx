import { logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

export const NavBar: FC = () => {
  const navLinks = ["home", "works", "about-me", "contact", "blog"];
  return (
    <Container>
      <LogoContainer>
        <Image height={24} width={24} src={logo} alt={""} />
        <Logo>DVERYBEST</Logo>
      </LogoContainer>
      <NavItemContainer>
        {navLinks.map((link, index) => (
          <NavItem key={index}>
            <Link
              target={link === "blog" ? "_blank" : undefined}
              href={link === "blog" ? "https://dev.to/dverybest" : `#${link}`}
            >
              <span>#</span>
              {link}
            </Link>
          </NavItem>
        ))}
      </NavItemContainer>
    </Container>
  );
};

const Container = styled.nav`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  @media (max-width: 425px) {
    padding-left: 0;
  }
`;
const LogoContainer= styled.div`
   display: flex;
   column-gap: 5px;
`
const Logo = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;
const NavItemContainer = styled.ul`
  flex-direction: row;
  display: flex;
  column-gap: 32px;
  @media (max-width: 425px) {
    display: none;
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
