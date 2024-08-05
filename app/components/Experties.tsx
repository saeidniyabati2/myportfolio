import { ExpertiesCard } from "./ui/cards/ExpertiesCard";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

export const Experties: React.FC = () => {
  return (
    <section className="w-full flex flex-col px-4 md:px-[15rem] py-12 md:pb-10">
      {/* container of title */}
      <div className="w-full  flex flex-col items-center md:mt-10">
        <p className="text-sm text-mainButton">MY EXPERTISE</p>
        <h2 className="text-[1.4rem] md:text-[1.8rem]  leading-relaxed md:leading-snug max-w-[35rem]  text-center md:text-start md:max-w-[25rem] md:mt-2">
          Awesome Service For You
        </h2>
      </div>
      {/* container of of cards */}
      <div className="w-full flex flex-col md:flex-row md:pt-10 gap-x-4  mt-10 md:mt-8 gap-y-5 md:gap-y-0">
        {/* first card */}
        <ExpertiesCard
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              elit. Quidem,"
          miniText="Explore Service"
          Icon={KeyboardCommandKeyIcon}
        />
        {/* second card */}
        <ExpertiesCard
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              elit. Quidem,"
          miniText="Explore Service"
          Icon={KeyboardCommandKeyIcon}
        />
        {/* third card */}
        <ExpertiesCard
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              elit. Quidem,"
          miniText="Explore Service"
          Icon={KeyboardCommandKeyIcon}
        />
      </div>
    </section>
  );
};
