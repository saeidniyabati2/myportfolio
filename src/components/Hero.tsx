import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Image from "next/image";
import MiniImageHero from "./image/MiniImageHero";
import BlueButton from "./button/BlueButton";
import GrayButton from "./button/grayButton";
export default function Hero(props: any) {
  return (
    <section className="w-full h-[75vh] bg-green-600 flex ">
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
            a <span className="text-[#0189FF] ">Web Developer</span>
          </h1>
          <p className="text-[#ADB7C4] max-w-[30rem] text-sm leading-relaxed mt-4">
            Hi, I'm Saeed a freelancer web developer from Iran. I help brands
            turn their idea into high quality products.
          </p>
          {/* buttons container */}
          <div className="w-full h-full flex gap-x-4 mt-4">
            {/* blue button */}
            <BlueButton title="Book a Call" icon={ArrowForwardIosIcon} />
            {/* gray button */}
            <GrayButton title="Download CVS" icon={CloudDownloadIcon} />
          </div>
        </div>
        <MiniImageHero
          sorceImage="/assets/node-js-svgrepo-com.svg"
          className="w-10 h-10 top-24 right-32 "
        />
        <MiniImageHero
          sorceImage="/assets/redux-svgrepo-com.svg"
          className="w-12 h-12  top-52 right-52 "
        />
      </div>
      {/* right side section */}
      <div className="w-full h-full  basis-[27%] bg-[#ECF6FF] relative">
        {/* container of hero image */}
        <div className=" w-[28rem] h-[35rem]  absolute -bottom-1 right-40  ">
          <Image fill alt="Hero image" src="/assets/Rectangle 11.png" />
        </div>
        <MiniImageHero
          sorceImage="/assets/react-svgrepo-com.svg"
          className="w-12 h-12 top-20 right-20 "
        />
        <MiniImageHero
          sorceImage="/assets/tailwindcss-icon-svgrepo-com.svg"
          className="w-6 h-6 top-32 right-56  "
        />

        <MiniImageHero
          sorceImage="/assets/next-dot-js-svgrepo-com.svg"
          className="w-10 h-10 top-56 right-32 "
        />
      </div>
    </section>
  );
}
