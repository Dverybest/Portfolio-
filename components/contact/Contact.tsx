import { typography } from "@/utils";
import { motion } from "framer-motion";
import { FC } from "react";
import { VscSend } from "react-icons/vsc";
import styled from "styled-components";
import { Button } from "../Button";
import { Social } from "../Social";
import { InfoCard } from "./InfoCard";

export const Contact: FC = () => {
  const buttonVariants = {
    hide: {
      scale: 1.2,
    },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 400,
        damping: 5,
      },
    },
  };
  return (
    <Section id={"contact"}>
      <TitleContainer>
        <Title>Let&apos;s discuss your Project</Title>
        <Text>
          Let&apos;s Connect: Your Ideas, My Expertise – Reach Out for
          Collaboration, Inquiries, or a Simple Hello!
        </Text>
      </TitleContainer>
      <Container>
        <Column isInfo>
          <InfoCard
            isPrimary
            title="Address:"
            delay={0.15}
            value={"Golf Estate, Enugu, Nigeria"}
          />
          <InfoCard
            delay={0.3}
            title="Email:"
            value={"Charlesbest8@gmail.com"}
          />
          <InfoCard
            delay={0.45}
            title="Call Me Now:"
            value={"+234 706 101 1343"}
          />
          <CustomSocial />
        </Column>
        <Column>
          <Form>
            <FormInput type={"text"} required name="name" placeholder="Name*" />
            <FormInput
              type={"email"}
              required
              name="email"
              placeholder="Email*"
            />
            <FormInput
              type={"text"}
              required
              name="location"
              placeholder="Location*"
            />
            <Row>
              <FormInput
                type={"text"}
                required
                name="budget"
                placeholder="Budget*"
              />
              <FormInput
                type={"text"}
                required
                name="subject"
                placeholder="Subject*"
              />
            </Row>
            <FormTextArea
              required
              name="message"
              rows={3}
              placeholder="Message*"
            />
            <motion.div
              variants={buttonVariants}
              initial={"hide"}
              exit={"hide"}
              whileInView={"show"}
            >
              <Button text={"Submit"} iconRight={<VscSend />} />
            </motion.div>
          </Form>
        </Column>
      </Container>
    </Section>
  );
};
const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 126.5px 10% -70px;
  padding: 88px 50px;
  border-radius: 15px;
  box-shadow: 0px 59px 124px 0px rgba(0, 0, 0, 0.12);
  column-gap: 20px;
  row-gap: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  @media (max-width: 1024px) {
    column-gap: 3%;
  }
  @media (max-width: 800px) {
    margin: 10px 7% -70px;
    padding: 50px 40px 80px;
    flex-direction: column;
    row-gap: 32px;
  }
`;
const Container = styled.div`
  display: flex;
  column-gap: 20px;
  @media (max-width: 1024px) {
    column-gap: 3%;
  }
  @media (max-width: 800px) {
    row-gap: 32px;
    flex-direction: column;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  column-gap: 30px;
  row-gap: 24px;
  margin-bottom: 12px;
`;
const Title = styled.h2`
  ${() => typography.header3};
  text-align: center;
`;
const Text = styled.p`
  ${() => typography.bodyLarge};
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  max-width: 600px;
`;

const Column = styled.div<{ isInfo?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 512px;
  flex: 1;
  column-gap: 12px;
`;

const Row = styled.div`
  display: flex;
  column-gap: 5px;
  /* align-items: center; */
  @media (max-width: 500px) {
    flex-direction: column;
    row-gap: 24px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
const FormInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
  ${() => typography.bodyLarge};
  padding: 4px 2px;
  :focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
const FormTextArea = styled.textarea`
  border: none;
  outline: none;
  ${() => typography.bodyLarge};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
  padding: 4px 2px;
  :focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
const CustomSocial = styled(Social)`
  box-shadow: none;
  background-color: transparent;
  background: none;
`;
