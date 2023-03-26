import { background1, user1 } from "@/public/images";
import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavBar } from "./NavBar";
import { Social } from "./Social";

export const Hero: FC = () => {
  return (
    <HeaderContainer>
      <Social />
      <Header>
        <NavBar />
        <HeaderMain>
          <HeaderDetails>
            <Title>
              Hey, <br/><span id={"name"}>I&apos;m Charles Best;</span><br/> a{" "}
            <span id={"title"}>Senior Software Engineer.</span>
            </Title>
            <SubTitle>
              Software engineer with extensive knowledge and experience in
              building enterprise and small scale software solutions.
            </SubTitle>
            <Button text="Contact me!!" />
          </HeaderDetails>
          <HeaderDetails>
            <UserImageContainer>
              <UserImage priority src={user1} alt={"Charles Best"} />
              <WorkingOnContainer>
                <Status />
                Currently working on Portfolio
              </WorkingOnContainer>
            </UserImageContainer>
          </HeaderDetails>
        </HeaderMain>
      </Header>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.section`
  flex-direction: row;
  display: flex;
  padding: 0px 32px;
`;
const Header = styled.header`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding: 0 122px;
  @media (max-width: 1024px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`;

const HeaderMain = styled.div`
  display: flex;
  column-gap: 5px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const HeaderDetails = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  word-wrap: break-word;
  #title {
  }
  #title {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin: 32px 0 24px 0;
`;
const UserImageContainer = styled.div`
  background-image: url(${background1.src});
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-size: contain;
`;
const UserImage = styled(Image)`
  /* max-width: 460px; */
  width: 100%;
  object-fit: contain;
  height: auto;
`;
const WorkingOnContainer = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  padding: 10.5px 8px;
  align-items: center;
  display: flex;
  column-gap: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;
const Status = styled.span`
  min-height: 16px;
  min-width: 16px;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
