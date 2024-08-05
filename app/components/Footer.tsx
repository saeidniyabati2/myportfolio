import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ButtonCom } from "./ui/ButtonCom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 flex-col px-4 md:px-[15rem] pb-6">
      {/* container of texts, button and social media icons */}
      <div className="w-full flex flex-col items-center ">
        <p className="text-sm text-secondGray mt-10 md:mt-20">CONTACT ME</p>
        <h1 className="text-[2rem] md:text-[2.7rem] text-white font-HankenGrotesk mt-2">
          Got a Project? Lets Talk!
        </h1>

        <ButtonCom
          title="Get A Quote"
          Icon={ArrowForwardIosIcon}
          ClassName="w-full py-3 mt-9 bg-[#0189FF] hover:bg-[#0162ff] text-white md:w-auto"
        />

        {/* container social media icons */}
        <div className="w-full mt-10 md:mt-24 flex border-secondGray border-t-[0.2px] pt-6 ">
          <div className="w-full flex items-center gap-x-5">
            <Image
              width={15}
              height={15}
              alt="react.js"
              src="/assets/linkedin-svgrepo-com.svg"
            />
            <Image
              width={15}
              height={15}
              alt="react.js"
              src="/assets/twitter-svgrepo-com.svg"
            />
            <Image
              width={15}
              height={15}
              alt="react.js"
              src="/assets/github-142-svgrepo-com.svg"
            />
            <Image
              width={15}
              height={15}
              alt="react.js"
              src="/assets/fiverr-svgrepo-com.svg"
            />
          </div>
          <div className="w-full  flex justify-end">
            <p className="text-xs text-secondGray">POWERED BY SAEED NIYABATI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
