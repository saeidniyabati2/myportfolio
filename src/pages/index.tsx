import AboutMe from "../components/AboutMe";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import SkillSet from "../components/SkillSet";
// commetn

const Home = (props: object) => {
  return (
    <ContainerBlock>
      <Hero />
      <AboutMe />
      <SkillSet />
    </ContainerBlock>
  );
};

export default Home;
