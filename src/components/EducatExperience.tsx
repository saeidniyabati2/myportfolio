import { EducatExperienceFromTo } from "./EducatExperienceFromTo";

export const EducatExperience: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-[15rem] py-5 md:py-10 mt-6 flex flex-col md:flex-row ">
      <div className="w-full h-full  flex flex-col gap-y-2  items-center md:items-start">
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
      <div className="w-full h-full flex flex-col gap-y-2  md:pl-16  items-center md:items-start mt-5 md:mt-0">
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
