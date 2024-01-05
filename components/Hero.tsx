import { user1 } from "@/public/images";
import { typography } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const Hero: FC = () => {
  const router = useRouter();
  const variants = {
    hide: {
      opacity: 0,
      y: 150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        stiffness: 200,
      },
    },
  };
  return (
    <Header>
      <HeaderMain
        as={motion.div}
        variants={variants}
        initial={"hide"}
        exit={"hide"}
        whileInView={"show"}
      >
        <HeaderDetails>
          <Title>
            Hello, I&apos;m <br />
            Charles Best
          </Title>
          <SubTitle>
            I&apos;m a goal-driven Software Engineer with over 6 years of
            experience and proven expertise in leading diverse teams to ideate,
            build, and deploy innovative software solutions.
          </SubTitle>
          <Button text="Say Hello!" onClick={() => router.push("#contact")} />

          <InfoContainer>
            <InfoCard>
              <InfoValue>6+ Y.</InfoValue>
              <InfoTitle>Experience</InfoTitle>
            </InfoCard>
            <InfoCard>
              <InfoValue>100+</InfoValue>
              <InfoTitle>Project Completed</InfoTitle>
            </InfoCard>
            <InfoCard>
              <InfoValue>58</InfoValue>
              <InfoTitle>Happy Client</InfoTitle>
            </InfoCard>
          </InfoContainer>
        </HeaderDetails>
        <HeaderDetails as={motion.div} whileHover={{ scale: 1.05 }}>
          <UserImage priority src={user1} alt={"Charles Best"} />
        </HeaderDetails>
      </HeaderMain>
    </Header>
  );
};

const Header = styled.header`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding: 134px 10% 0px;
  @media (max-width: 1024px) {
    padding: 134px 7% 0px;
  }
  @media (max-width: 768px) {
    padding: 82px 5% 0;
  }
  @media (max-width: 500px) {
    align-items: center;
    padding-top: 50px;
  }
`;

const HeaderMain = styled.div`
  display: flex;
  column-gap: 136px;
  @media (max-width: 1024px) {
    column-gap: 40px;
  }
  @media (max-width: 800px) {
    column-gap: 32px;
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    row-gap: 32px;
  }
`;
const HeaderDetails = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  row-gap: 24px;
  display: flex;
  color: ${({ theme }) => theme.colors.grey900};
  @media (max-width: 500px) {
    align-items: center;
  }
`;
const Title = styled.h1`
  ${() => typography.display}
  @media (800px<width<= 1024px) {
    font-size: 64px;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;
const SubTitle = styled.h3`
  ${() => typography.bodyLarge}
  @media (max-width: 500px) {
    text-align: justify;
  }
`;

const UserImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  height: auto;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  border-radius: 6px;
  column-gap: 3px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.white};
`;
const InfoCard = styled.div`
  display: flex;
  padding: 12px;
  flex-grow: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary05};
  flex-direction: column;
`;
const InfoValue = styled.p`
  ${({}) => typography.header3}
  color:${({ theme }) => theme.colors.grey500};
`;
const InfoTitle = styled.p`
  ${({}) => typography.bodyRegular400}
  color:${({ theme }) => theme.colors.grey500};
`;
