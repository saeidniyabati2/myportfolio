import { BlueButton } from "./button/BlueButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ProgressBarComp } from "./ProgressBarComp";

export default function SkillSet() {
  return (
    <section className="w-full  bg-[#F8F9FD] flex px-[15rem] py-[5rem]">
      <div className="w-full h-full  flex  items-center">
        {/* container of text and button */}
        <div className="w-full h-full  flex flex-col gap-y-5 ">
          <p className="text-sm text-mainButton">SKILLSET</p>
          <h2 className="text-[1.8rem] leading-snug max-w-[25rem]">
            Creative and Professional Skills Experience on Few Area
          </h2>
          <p className="text-secondGray  text-sm leading-relaxed  max-w-[25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            sapiente error, veniam animi nostrum, nihil dolorem tempora alias
            quas vel voluptate doloremque suscipit ab nulla. Quae consequatur,
          </p>
          {/* container button */}
          <div className="w-full  flex mt-2">
            <BlueButton title="Get Any Project" Icon={ArrowForwardIosIcon} />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-y-7  justify-center ">
          <ProgressBarComp title="Next.js" />
          <ProgressBarComp title="React.js" />
          <ProgressBarComp title="TypeScript" />
          <ProgressBarComp title="Figma" />
        </div>
      </div>
    </section>
  );
}
