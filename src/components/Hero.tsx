import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Image from "next/image";
import { MiniImageHero } from "./image/MiniImageHero";
import { TextGenerateEffect } from "./texts/TextGenerateEffect";
import { ButtonCom } from "./ui/ButtonCom";

export const Hero: React.FC = () => {
  return (
    <section className="w-full md:h-[75vh] flex flex-col md:flex-row px-4 md:px-0 md:bg-grayMain ">
      {/* contaienr of images, title and descriptions for mobile */}
      <div className=" w-full flex flex-col items-center md:hidden pt-4 ">
        <h1 className="text-[1.9rem] font-HankenGrotesk">Hello Mate 👋</h1>
        {/* container of image */}
        <div className=" w-full h-[23rem] relative  mt-2">
          <Image fill alt="Hero image" src="/assets/Rectangle 11.png" />
        </div>
        {/* container of texts */}
        <div className="w-full  flex flex-col items-center mt-4 ">
          <h1 className="text-4xl  font-medium">I'm Saeid Niyabati</h1>
          <h1 className="text-4xl ">a</h1>
          <h1 className="text-4xl text-mainButton">Web Developer</h1>
          <p className="text-secondGray text-sm leading-relaxed mt-3 text-center">
            Hi, I'm Saeed a freelancer web developer from Iran. I help brands
            turn their idea into high quality products.
          </p>
        </div>
        {/* button container  */}
        <div className="w-full flex flex-col gap-y-2">
          <ButtonCom
            title="Book a Call"
            Icon={ArrowForwardIosIcon}
            ClassName="py-3 mt-2 bg-[#0189FF] hover:bg-[#0162ff] text-white"
          />
          <ButtonCom
            title="Download CVS"
            Icon={CloudDownloadIcon}
            ClassName="py-3 mt-2 bg-[#e0e0e0]  text-black  border-2 "
          />
        </div>
      </div>
      {/* left side section for desktop */}
      <div className="  basis-[73%] bg-[#F8F9FD] relative md:pl-[15rem] hidden md:flex pb-16">
        {/* container of texts with buttons */}
        <div className="w-full   flex flex-col gap-y-5 ">
          <h1 className="mt-28 text-[2rem] font-HankenGrotesk">
            Hello Mate 👋
          </h1>
          <TextGenerateEffect
            words={`I'm Saeed Niyabati a Web Developer`}
            className="text-5xl font-medium max-w-[27rem] leading-[1.3]"
          />
          <p className="text-secondGray max-w-[30rem] text-xs leading-relaxed mt-4">
            Hi, I'm Saeed a freelancer web developer from Iran. I help brands
            turn their idea into high quality products.
          </p>
          {/* buttons container */}
          <div className="w-full  flex gap-x-4 mt-10 ">
            {/* blue button */}

            <ButtonCom
              title="Book a Call"
              Icon={ArrowForwardIosIcon}
              ClassName="py-3 mt-2 bg-[#0189FF] hover:bg-[#0162ff] text-white"
            />
            <ButtonCom
              title="Download CVS"
              Icon={CloudDownloadIcon}
              ClassName="py-3 mt-2 bg-[#e0e0e0]  text-black  border-2 "
            />
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
      <div className="w-full h-full basis-[27%]  relative bg-[#ECF6FF]  hidden md:flex">
        {/* container of hero image */}
        <div className="w-[23rem] h-[30rem] bottom-0 right-[13rem] hidden md:flex absolute ">
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
