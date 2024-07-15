import AboutMe from "../components/AboutMe";
import { AchivementCounts } from "../components/AchivementCounts";
import { Banner } from "../components/Banner";
import ContainerBlock from "../components/ContainerBlock";
import { EducatExperience } from "../components/EducatExperience";
import { Experties } from "../components/Experties";
import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";
import SkillSet from "../components/SkillSet";
// commetn

const Home = () => {
  return (
    <ContainerBlock>
      <Hero />
      <AboutMe />
      <SkillSet />
      <Experties />
      <AchivementCounts />
      <EducatExperience />
      {/* <Banner /> */}
      <Gallery/>
    </ContainerBlock>
  );
};

export default Home;
