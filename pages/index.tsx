import { NextPage } from "next";
import { MainLayout } from "../src/Layouts/Main";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1>Home Page</h1>
    </MainLayout>
  );
};

export default Home;
