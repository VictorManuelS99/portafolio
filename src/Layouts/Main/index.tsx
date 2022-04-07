import { FC, ReactNode } from "react";
import Head from "next/head";

import { Sidebar } from "../../Components/Organisms/Sidebar";

import { Container, Main } from "./styles";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Victor Sandon | Frontend Developer</title>
        <meta
          name="description"
          content="Victor Sandon - Portafolio. Frontend Developer, React"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Sidebar />
        <Main>{children}</Main>
      </Container>
    </>
  );
};
