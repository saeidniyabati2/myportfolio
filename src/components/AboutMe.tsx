import Image from "next/image";
import BlueButton from "./button/BlueButton";
import AboutMeCarousel from "./image/AboutMeCarousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImageAboutMe from "./ImageAboutMe";
export default function AboutMe(props: object) {
  return (
    <section className="w-full h-[90vh] pt-28  flex flex-col">
      {/* container of mini text title with image slider */}
      <div className="w-full   flex flex-col items-center px-[9.9rem]">
        <p className="text-sm">
          <span className="text-mainButton ">TECHNOLOGIES</span> THAT I AM USING
        </p>
        {/* container of image slider */}
        <AboutMeCarousel />
      </div>
      {/* container of image and description */}
      <div className="w-full h-full flex ">
        <div className="w-full h-full ">
          <ImageAboutMe/>
        </div>
        <div className="w-full h-full bg-white flex flex-col pt-20 gap-y-4 pb-12 pr-[15rem]">
          <p className="text-sm text-mainButton">ABOUT ME</p>
          <h2 className="text-[2rem] leading-snug ">
            More Than 5+ Years Programming Experienced
          </h2>
          <p className="text-secondGray  text-sm leading-relaxed mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            sapiente error, veniam animi nostrum, nihil dolorem tempora alias
            quas vel voluptate doloremque suscipit ab nulla. Quae consequatur,
            est earum et aliquid aut dicta voluptas quidem eos dignissimos
            dolores quisquam id.
          </p>
          {/* container of main information and button */}
          <div className="w-full h-full  flex flex-col">
            {/* container of name and other information */}
            <div className="w-full   grid grid-cols-2 gap-y-1 mt-3 ">
              <div className="w-full flex items-center gap-x-3 ">
                <p className=" text-sm leading-relaxed ">Name:</p>
                <p className="text-secondGray text-sm leading-relaxed ">
                  Saeed Niyabati
                </p>
              </div>
              <div className="w-full   flex items-center gap-x-3">
                <p className=" text-sm leading-relaxed ">Position:</p>
                <p className="text-secondGray text-sm leading-relaxed ">
                  Front-End developer
                </p>
              </div>
              <div className="w-full   flex items-center gap-x-3">
                <p className=" text-sm leading-relaxed ">Location:</p>
                <p className="text-secondGray text-sm leading-relaxed ">Iran</p>
              </div>
              <div className="w-full   flex items-center gap-x-3">
                <p className=" text-sm leading-relaxed ">Email:</p>
                <p className="text-secondGray text-sm leading-relaxed ">
                  Saeedsnaid@gmail.com
                </p>
              </div>
            </div>
            {/* container of button */}
            <div className="w-full flex mt-8  items-center gap-x-6">
              <BlueButton title="Download CVS" icon={ArrowForwardIosIcon} />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
