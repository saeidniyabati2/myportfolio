import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Image from "next/image";
import { MiniImageHero } from "./image/MiniImageHero";
import { BlueButton } from "./button/BlueButton";
import { GrayButton } from "./button/GrayButton";

export const Hero: React.FC = () => {
  return (
    <section className="w-full h-[75vh] flex ">
      {/* left side section */}
      <div className="w-full h-full basis-[73%] bg-[#F8F9FD] relative pl-[15rem]">
        {/* container of texts with buttons */}
        <div className="w-full   flex flex-col gap-y-5 ">
          <h1 className="mt-28 text-[2.7rem] font-HankenGrotesk">
            Hello Mate 👋
          </h1>
          <h1 className="text-6xl font-HankenGrotesk font-medium">
            I'm Saeid Niyabati
          </h1>
          <h1 className="text-6xl font-HankenGrotesk">
            a <span className="text-mainButton">Web Developer</span>
          </h1>
          <p className="text-secondGray max-w-[30rem] text-sm leading-relaxed mt-4">
            Hi, I'm Saeed a freelancer web developer from Iran. I help brands
            turn their idea into high quality products.
          </p>
          {/* buttons container */}
          <div className="w-full h-full flex gap-x-4 mt-4">
            {/* blue button */}
            <BlueButton title="Book a Call" Icon={ArrowForwardIosIcon} />
            {/* gray button */}
            <GrayButton title="Download CVS" Icon={CloudDownloadIcon} />
          </div>
        </div>
        <MiniImageHero
          src="/assets/node-js-svgrepo-com.svg"
          className=" top-24 right-32 "
          size="medium"
        />
        <MiniImageHero
          src="/assets/redux-svgrepo-com.svg"
          className="  top-52 right-52 "
          size="big"
        />
      </div>
      {/* right side section */}
      <div className="w-full h-full  basis-[27%] bg-[#ECF6FF] relative">
        {/* container of hero image */}
        <div className=" w-[28rem] h-[35rem]  absolute -bottom-1 right-40  ">
          <Image fill alt="Hero image" src="/assets/Rectangle 11.png" />
        </div>
        <MiniImageHero
          src="/assets/react-svgrepo-com.svg"
          className=" top-20 right-20 "
          size="big"
        />
        <MiniImageHero
          src="/assets/tailwindcss-icon-svgrepo-com.svg"
          className=" top-32 right-56  "
          size="small"
        />

        <MiniImageHero
          src="/assets/next-dot-js-svgrepo-com.svg"
          className="top-56 right-32 "
          size="medium"
        />
      </div>
    </section>
  );
};
