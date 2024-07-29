import AboutMe from "../components/AboutMe";
import { AchivementCounts } from "../components/AchivementCounts";
import { Blogs } from "../components/Blogs";
// import { Banner } from "../components/Banner";
import { Comments } from "../components/Comments";
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
      {/*<SkillSet />
      <Experties />
      <AchivementCounts />
      <EducatExperience />
      <Gallery />
      <Comments />
      <Blogs /> */}
    </ContainerBlock>
  );
};

export default Home;
