import AboutMe from "../../components/AboutMe";
import { AchivementCounts } from "../../components/AchivementCounts";
import ContainerBlock from "../../components/ContainerBlock";
import { EducatExperience } from "../../components/EducatExperience";
import { Experties } from "../../components/Experties";
import { Hero } from "../../components/Hero";
import SkillSet from "../../components/SkillSet";
// commetn

const Home = () => {
  const test: Array<string> = [];

  test["dre"];
  test[4];

  return (
    <ContainerBlock>
      <Hero />
      <AboutMe />
      <SkillSet />
      <Experties />
      <AchivementCounts />
      <EducatExperience />
    </ContainerBlock>
  );
};

export default Home;
