import {
  aladdin,
  evakitchen,
  ifunanya,
  javascript_interview,
  portilify,
  redux,
  remove_duplicate,
  soji,
  soji_admin,
  tdd,
} from "@/public/images";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { BlogCard } from "./BlogCard";
import { typography } from "@/utils";

export const Blog: FC = () => {
  const projects = [
    {
      title: "Basic JavaScript Interview Questions",
      date: "19 Oct, 2020",
      reactions: 476,
      link: "https://dev.to/dverybest/basic-javascript-interview-questions-3491",
      image: javascript_interview,
    },
    {
      title: "TDD & Automated Testing in JavaScript using Jest",
      date: "22 Oct, 2020",
      reactions: 52,
      link: "https://dev.to/dverybest/tdd-automated-testing-in-javascript-using-jest-3g4a",
      image: tdd,
    },
    {
      title: "Removing Duplicate Objects from an Array of Objects",
      date: "07 Jan, 2021",
      reactions: 5,
      link: "https://dev.to/dverybest/removing-duplicate-objects-from-an-array-of-objects-2ap9",
      image: remove_duplicate,
    },
    {
      title: "Persisting Data with Redux,  Session Storage in React",
      date: "107 Jun, 2020",
      reactions: 151,
      link: "https://medium.com/@charlesbest8/persisting-data-with-redux-thunk-session-storage-in-react-application-9cc94549a1c",
      image: redux,
    },
  ];
  return (
    <Container id={"blog"}>
      <TitleContainer>
        <Title>Blog</Title>
        <Description>
          Diving Deep into Software Engineering – Where Creativity Meets
          Insight, and Every Blog Unfolds a New Chapter of Discovery.
        </Description>
      </TitleContainer>
      <ProjectContainer>
        {projects.map((post, index) => (
          <BlogCard
            index={index}
            key={post.title}
            image={post.image}
            title={post.title}
            date={post.date}
            reactions={post.reactions}
            link={post.link}
          />
        ))}
      </ProjectContainer>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 82px 0px 82px 154px;
  @media (max-width: 1024px) {
    padding: 82px 0px 82px 50px;
  }
  @media (max-width: 768px) {
    padding: 82px 0px 82px 20px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  row-gap: 24px;
  margin:0 154px 60px 0;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.grey900};
  ${() => typography.header1};
`;
const Description = styled.p`
  ${() => typography.bodyLarge};
  color: ${({ theme }) => theme.colors.grey400};
  text-align: center;
  max-width: 600px;
`;

const ProjectContainer = styled.div`
  margin-top: 48px;
  display: flex;
  overflow-x: scroll;
  /* overflow-y: hidden; */
  column-gap: 16px;
  row-gap: 20px;
`;
