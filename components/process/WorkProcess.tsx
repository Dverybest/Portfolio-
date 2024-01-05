import { typography } from "@/utils";
import React from "react";
import styled from "styled-components";
import { ProcessCard } from "./ProcessCard";
import { PiNotepad } from "react-icons/pi";
import { motion } from "framer-motion";

export const WorkProcess = () => {
  const variants = {
    hide: {
      x: -40,
      y:-20,
      opacity: 0,
    },
    show: {
      x: 0,
      y:0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const processes = [
    {
      icon: <PiNotepad size={32} />,
      title: "1. Analysis",
      description:
        "Embarking on a project, I dive deep into complexities, breaking down and define objectives and set the stage for an informed journey. ",
    },
    {
      icon: <PiNotepad size={32} />,
      title: "2. Design",
      description:
        "In the design phase, creativity takes center stage. I architect elegant solutions, transforming concepts into the blueprint of innovation.",
    },
    {
      icon: <PiNotepad size={32} />,
      title: "3. Development and Testing",
      description:
        "The development and testing phase is a meticulous dance of creation and validation, ensuring a product that stands the test of functionality and reliability",
    },
    {
      icon: <PiNotepad size={32} />,
      title: "4. Deployment",
      description:
        "With the final code perfected, I orchestrate a smooth deployment, marking the transition from development to reality.",
    },
  ];
  return (
    <Section id="process">
      <WorkProcessContainer>
        <Column
          as={motion.div}
          variants={variants}
          initial="hide"
          whileInView="show"
          exit="hide"
        >
          <Title>Work Process</Title>
          <Description>
            Crafting Brilliance: Peek Behind the Scenes of my Creative Alchemy –
            A Guided Tour through the Artistry, Methodology, and Passion Infused
            into Every Project in My Work Process Showcase.
          </Description>
        </Column>
        <ProcessContainer>
          {processes.map((process, index) => (
            <ProcessCard
              index={index}
              key={process.title}
              icon={process.icon}
              title={process.title}
              description={process.description}
            />
          ))}
        </ProcessContainer>
      </WorkProcessContainer>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  padding: 140px 10%;
  background: ${({ theme }) => theme.colors.grey50};
  @media (max-width: 800px) {
    padding: 140px 7%;
  }
  @media (max-width: 500px) {
    padding: 140px 20px;
  }
`;
const WorkProcessContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7%;
  @media (max-width: 1024px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  flex: 0.8;
`;
const ProcessContainer = styled.div`
  display: flex;
  column-gap: 24px;
  row-gap: 24px;
  flex: 1;
  flex-wrap: wrap;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.grey900};
  ${() => typography.header1};
  @media (max-width: 800px) {
    text-align: center;
  }
`;
const Description = styled.p`
  ${() => typography.bodyLarge};
  color: ${({ theme }) => theme.colors.grey600};
  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 32px;
  }
`;
