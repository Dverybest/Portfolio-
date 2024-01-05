import { user2 } from "@/public/images";
import { typography } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { TbDownload } from "react-icons/tb";
import styled from "styled-components";
import { Button } from "./Button";
import { Social } from "./Social";

export const AboutMe: FC = () => {
  const router = useRouter();
  const introPictureVariants = {
    hide: {
      opacity: 0,
      y: 50,
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
    <Section id={"about"}>
      <Container>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
          <ImageContainer>
            <UserImage src={user2} alt="Charles Best" />
            <CustomSocial />
          </ImageContainer>
        </motion.div>

        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
          <Column>
            <Title>I&apos;m a Professional Senior Software Engineer</Title>
            <DescriptionContainer>
              <Description>
                I&apos;m an accomplished full-stack Software Engineer with
                extensive knowledge and experience in building enterprise,
                start-ups and small scale software solutions
              </Description>
              <Description>
                Creating solutions that come alive and solve critical problems
                is one thing I love doing; I&apos;m goal driven, industrious and
                love human interaction. You &apos;ll find me staking out a
                challenge, fleshing out a problem or just chilling at a meeetup
                with friends and family.
              </Description>
            </DescriptionContainer>
            <ButtonContainer>
              <Button
                text="My Projects"
                onClick={() => router.push("#portfolio")}
              />
              <DownloadButton
                href="/CHARLES-CHINOZIEM-BEST.pdf"
                text="Download CV"
                icon={<TbDownload />}
              />
            </ButtonContainer>
          </Column>
        </motion.div>
      </Container>
    </Section>
  );
};
const Section = styled.section`
  display: flex;
  margin: 100px 0 0;
  padding: 82px 10% 0;
  @media (max-width: 1024px) {
    padding: 82px 7% 0;
  }
  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;
const Container = styled.div`
  margin-bottom: -70px;
  z-index: 2;
  display: flex;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 36px 105px 0px rgba(43, 56, 76, 0.1);
  padding: 80px 50px;
  align-items: center;
  column-gap: 7%;
  @media (max-width: 1024px) {
    column-gap: 3%;
  }
  @media (max-width: 800px) {
    padding: 50px 40px 80px;
    flex-direction: column;
    row-gap: 40px;
  }
  @media (max-width: 500px) {
    row-gap: 32px;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.grey900};
  ${() => typography.header3};
  @media (max-width: 800px) {
    text-align: center;
  }
`;
const Description = styled.p`
  ${() => typography.bodyLarge};
  color: ${({ theme }) => theme.colors.grey600};
  text-align: justify;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserImage = styled(Image)`
  max-width: 424px;
  height: auto;
  @media (max-width: 1024px) {
    max-width: 350px;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 0px;
    object-fit: cover;
  }
`;
const CustomSocial = styled(Social)`
  position: absolute;
  bottom: -30px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  flex: 1;
`;
const DownloadButton = styled(Button)`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
`;
const ButtonContainer = styled.div`
  display: flex;
  column-gap: 16px;
  @media (max-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    button {
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
    }
  }
  @media (max-width: 375px) {
    flex-direction: column;
    row-gap: 24px;
    button,
    ${DownloadButton} {
      width: 100%;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;
