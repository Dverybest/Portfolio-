import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

export const NavBar: FC = () => {
  const navLinks = ["home", "works", "about-me", "contact"];
  return (
    <Container>
      <Logo>DVERYBEST</Logo>
      <NavItemContainer>
        {navLinks.map((link,index) => (
          <NavItem key={index}>
            <Link href={`#${link}`}>
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
  padding: 32px;
  @media (max-width: 425px) {
   padding-left:0;
  }
`;
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
