import AboutMe from "../components/AboutMe";
import ContainerBlock from "../components/ContainerBlock";
import { Experties } from "../components/Experties";
import Hero from "../components/Hero";
import SkillSet from "../components/SkillSet";
// commetn

const Home = (props: object) => {
  return (
    <ContainerBlock>
      <Hero />
      <AboutMe />
      <SkillSet />
      <Experties />
    </ContainerBlock>
  );
};

export default Home;
