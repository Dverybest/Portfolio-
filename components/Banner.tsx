import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { typography } from "@/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const Banner: FC = () => {
  const router = useRouter();
  const text =
    "I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me.";
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
    <Container>
      <Title>Do you have Project Idea? Let's discuss your project!</Title>
      <Description>
        {text.split("").map((char, index) => {
          const variants = {
            hide: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 0.05,
                delay: index / 20,
              },
            },
          };

          return (
            <motion.span
              variants={variants}
              initial={"hide"}
              exit={"hide"}
              whileInView={"show"}
            >
              {char}
            </motion.span>
          );
        })}
      </Description>
      <motion.div
        variants={buttonVariants}
        initial={"hide"}
        exit={"hide"}
        whileInView={"show"}
      >
        <Button
          text="Let’s work Together"
          onClick={() => router.push("#contact")}
        />
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey900};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 100px 20px;
  justify-content: center;
  align-items: center;
  row-gap: 32px;
`;

const Title = styled.h2`
  ${() => typography.header1}
  max-width: 619px;
  text-align: center;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 8px;
  line-height: 21px;
  max-width: 677px;
  text-align: center;
`;
