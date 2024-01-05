import {
  AboutMe,
  Banner,
  Blog,
  Contact,
  Footer,
  Hero,
  Projects,
  WorkProcess,
} from "@/components";
import { NavBar } from "@/components/NavBar";
import { bg } from "@/public/images";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Main>
        <Hero />
        <AboutMe />
        <WorkProcess />
        <Projects />
        <Banner />
        <Blog />
        <Contact />
      </Main>
      <Footer />
    </Container>
  );
}
const Container = styled.div``;
const Main = styled.main`
  background-image: url(${bg.src});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;
`;
