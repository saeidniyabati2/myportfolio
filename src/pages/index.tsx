import AboutMe from "../components/AboutMe";
import { AchivementCounts } from "../components/AchivementCounts";
import ContainerBlock from "../components/ContainerBlock";
import { Experties } from "../components/Experties";
import { Hero } from "../components/Hero";
import SkillSet from "../components/SkillSet";
// commetn

const Home = (props: object) => {
  return (
    <ContainerBlock>
      <Hero />
      <AboutMe />
      <SkillSet />
      <Experties />
      <AchivementCounts />
    </ContainerBlock>
  );
};

export default Home;
