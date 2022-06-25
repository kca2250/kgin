import type { NextPage } from "next";
import Head from "next/head";
import { Title } from "../components/common/Title";
import { Container } from "../components/Layout/Container";
import { Footer } from "../components/Layout/Footer";
import { Header } from "../components/Layout/Header";
import { Main } from "../components/Layout/Main";

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <Title />
      </Header>
      <Main>
        <p>this is kgin app</p>
      </Main>
      <Footer>
        <p>created at kca2250</p>
      </Footer>
    </Container>
  );
};

export default Home;
