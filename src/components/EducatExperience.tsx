import { EducatExperienceFromTo } from "./EducatExperienceFromTo";

export const EducatExperience: React.FC = () => {
  return (
    <section className="w-full px-[15rem] py-10 mt-6 flex">
      <div className="w-full h-full  flex flex-col gap-y-2">
        <p className="text-sm text-mainButton ">QUALIFACATION</p>
        <h2 className="text-[1.8rem] leading-snug max-w-[25rem]">
          My Education
        </h2>
        <div className="w-full h-full mt-10 flex flex-col ">
          <EducatExperienceFromTo
            title="University Azad"
            description="Lorem ipsum dolor sit amet consectetur adipisicing Ab quo placeat molestiae."
            position="Programming"
            last={false}
          />
          <EducatExperienceFromTo
            title="University Azad"
            description="Lorem ipsum dolor sit amet consectetur adipisicing Ab quo placeat molestiae."
            position="Programming"
            last={false}
          />
          <EducatExperienceFromTo
            title="University Azad"
            description="Lorem ipsum dolor sit amet consectetur adipisicing Ab quo placeat molestiae."
            position="Programming"
            last={true}
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-y-2  pl-16">
        <p className="text-sm text-mainButton ">QUALIFACATION</p>
        <h2 className="text-[1.8rem] leading-snug max-w-[25rem]">
          My Education
        </h2>
        <div className="w-full h-full  mt-10 flex flex-col  ">
          <EducatExperienceFromTo
            title="University Azad"
            description="Lorem ipsum dolor sit amet consectetur adipisicing Ab quo placeat molestiae."
            position="Programming"
            last={false}
          />
          <EducatExperienceFromTo
            title="University Azad"
            description="Lorem ipsum dolor sit amet consectetur adipisicing Ab quo placeat molestiae."
            position="Programming"
            last={false}
          />
          <EducatExperienceFromTo
            title="University Azad"
            description="Lorem ipsum dolor sit amet consectetur adipisicing Ab quo placeat molestiae."
            position="Programming"
            last={true}
          />
        </div>
      </div>
    </section>
  );
};
