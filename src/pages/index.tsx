import AboutMe from "../components/AboutMe";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";

const Home = (props: object) => {
  return (
    <ContainerBlock>
      <Hero />
      <AboutMe />
    </ContainerBlock>
  );
};

export default Home;
