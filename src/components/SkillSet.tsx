import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ProgressBarComp } from "./ProgressBarComp";
import { ButtonCom } from "./ui/ButtonCom";

export default function SkillSet() {
  return (
    <section className="w-full  bg-[#F8F9FD] flex px-4 md:px-[15rem] py-12 md:py-[5rem]">
      <div className="w-full h-full  flex flex-col md:flex-row items-center ">
        {/* container of text and button */}
        <div className="w-full h-full  flex flex-col gap-y-5  items-center md:items-start">
          <p className="text-sm text-mainButton">SKILLSET</p>
          <h2 className="text-[1.4rem] md:text-[1.8rem]  leading-relaxed md:leading-snug max-w-[35rem]  text-center md:text-start md:max-w-[25rem]">
            Creative and Professional Skills Experience on Few Area
          </h2>
          <p className="text-center md:text-start text-secondGray  text-sm leading-relaxed  max-w-[25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            sapiente error, veniam animi nostrum, nihil dolorem tempora alias
          </p>
          {/* container button */}
          <div className="w-full  md:flex mt-2 hidden ">
            <ButtonCom
              title="Get Any Project"
              Icon={ArrowForwardIosIcon}
              ClassName="w-full py-3 mt-9 bg-[#0189FF] hover:bg-[#0162ff] text-white md:w-auto hidden md:flex"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-y-7  justify-center  mt-8 md:mt-0">
          <ProgressBarComp title="Next.js" />
          <ProgressBarComp title="React.js" />
          <ProgressBarComp title="TypeScript" />
          <ProgressBarComp title="Figma" />
        </div>
        {/* container button for mobile  */}
        <div className="w-full flex mt-10 md:hidden ">
          <ButtonCom
            title="Get Any Project"
            Icon={ArrowForwardIosIcon}
            ClassName="w-full py-3 bg-[#0189FF] hover:bg-[#0162ff] text-white "
          />
        </div>
      </div>
    </section>
  );
}
