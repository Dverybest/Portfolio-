import { Hero } from "@/components";
import { background } from "@/public/images";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Main></Main>
    </Container>
  );
}
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
`;
const Main = styled.main`
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-size: contain;
`