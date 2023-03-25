import { Hero } from "@/components";
import { background } from "@/public/images";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dverybest</title>
      </Head>
      <Container>
        <Hero />
        <Main></Main>
      </Container>
    </>
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
`;
