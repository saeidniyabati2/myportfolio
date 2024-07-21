import { ExpertiesCard } from "./cards/ExpertiesCard";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

export const Experties: React.FC = () => {
  return (
    <section className="w-full flex flex-col px-[15rem] pb-10">
      {/* container of title */}
      <div className="w-full  flex flex-col items-center">
        <p className="text-sm text-mainButton mt-20">MY EXPERTISE</p>
        <h2 className="text-[1.8rem] leading-snug max-w-[25rem] mt-3">
          Awesome Service For You
        </h2>
      </div>
      {/* container of of cards */}
      <div className="w-full flex pt-10 gap-x-4 ">
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
