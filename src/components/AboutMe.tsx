import Image from "next/image";
import { BlueButton } from "./button/BlueButton";
import AboutMeCarousel from "./image/AboutMeCarousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ImageAboutMe } from "./ImageAboutMe";

export default function AboutMe() {
  return (
    <section
      className="w-full pt-16 md:pt-28 flex flex-col px-4 bg-red-500 md:px-0
    "
    >
      {/* container of mini text title with image slider */}
      <div className="w-full flex flex-col items-center  md:px-[9.9rem] bg-green-300">
        <p className="text-sm">
          <span className="text-mainButton ">TECHNOLOGIES</span> THAT I AM USING
        </p>
        {/* container of image slider */}
        <AboutMeCarousel />
      </div>
      {/* container of image and description */}
      <div className="w-full h-full flex  flex-col md:flex-row bg-green-600">
        <div className="w-full h-full mt-3 md:mt-0">
          <ImageAboutMe ClassName="h-[20rem] md:h-[33rem]" />
        </div>
        <div className="w-full h-full flex flex-col pt-4 md:pt-20 gap-y-4 pb-12  items-center md:items-start">
          <p className="text-sm text-mainButton">ABOUT ME</p>
          <h2 className="text-[1.4rem] md:text-[2rem] leading-relaxed md:leading-snug max-w-[35rem]  text-center md:text-start ">
            More Than 5+ Years Programming Experienced
          </h2>
          <p className="text-secondGray  text-sm leading-relaxed  md:mt-3 max-w-[30rem] text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            sapiente error, veniam animi nostrum, nihil dolorem tempora alias
            quas vel voluptate doloremque suscipit ab nulla. Quae consequatur,
            dolores quisquam
          </p>
          {/* container of main information and button */}
          <div className="w-full h-full  flex flex-col  md:max-w-[30rem]  md:items-start">
            {/* container of name and other information */}
            <div className="w-full  grid grid-cols-2 gap-y-2 md:gap-y-1 md:mt-3  mt-2 ">
              <div className="w-full flex items-center gap-x-3  ">
                <p className=" text-xs md:text-sm leading-relaxed ">Name:</p>
                <p className="text-secondGray text-xs md:text-sm leading-relaxed ">
                  Saeed Niyabati
                </p>
              </div>
              <div className="w-full flex items-center gap-x-3 ">
                <p className=" text-xs md:text-sm leading-relaxed ">
                  Position:
                </p>
                <p className="text-secondGray text-xs md:text-sm leading-relaxed ">
                  Front-End developer
                </p>
              </div>
              <div className="w-full   flex items-center gap-x-3 ">
                <p className=" text-xs md:text-sm leading-relaxed ">
                  Location:
                </p>
                <p className="text-secondGray text-xs md:text-sm leading-relaxed ">
                  Iran
                </p>
              </div>
              <div className="w-full   flex items-center gap-x-3 ">
                <p className=" text-xs md:text-sm leading-relaxed ">Email:</p>
                <p className="text-secondGray text-xs md:text-sm leading-relaxed ">
                  Saeedsnaid@gmail.com
                </p>
              </div>
            </div>
            <BlueButton
              title="Book a Call"
              Icon={ArrowForwardIosIcon}
              ClassName="py-3 mt-10 "
            />
            {/* container of button */}
            {/* <div className="w-full flex mt-8  items-center gap-x-6">
              <BlueButton title="Download CVS" Icon={ArrowForwardIosIcon} />
              <hr className="w-10 h-[0.10rem] bg-secondGray border-none" />
              <p className="text-secondGray  text-sm leading-relaxed ">
                Follow me
              </p>

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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
