import Image from "next/image";
import { BlueButton } from "./button/BlueButton";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

export const Blogs: React.FC = (props) => {
  return (
    <section className="w-full px-[15rem]  flex flex-col pb-16">
      <div className="flex">
        <div className="w-full  flex flex-col">
          <p className="text-sm text-mainButton mt-20">BLOG & NEWS</p>
          <h2 className="text-[1.8rem] leading-snug max-w-[25rem] mt-3">
            Our Latest Blogs
          </h2>
        </div>
        <div className="w-full  flex items-end justify-end">
          <BlueButton title="Read Our Blogs" Icon={KeyboardCommandKeyIcon} />
        </div>
      </div>
      {/* container of cards */}
      <div
        className="w-full  flex mt-14
      gap-x-6"
      >
        {/* first card */}
        <div className="w-full  flex flex-col rounded-md overflow-hidden">
          {/* container of image */}

          <div className="relative w-full h-[13rem]">
            <Image
              fill
              alt="t"
              src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
            />
          </div>
          {/* container of texts */}
          <div className="p-5 bg-gray-100">
            <p className="text-secondGray  text-[0.8rem] leading-normal ">
              08 Feb,21
            </p>
            <h5 className="mt-1">
              How To Win The Application Of The New Yourk
            </h5>
            {/* container of autor image and like counts */}
            <div className="w-full  mt-4 flex">
              {/* container of image and name */}
              <div className="w-full  flex items-center gap-x-2">
                <Image
                  width={20}
                  height={20}
                  alt="dfd"
                  src="/assets/confident-indian-woman-21143788.webp"
                  className="rounded-full w-[2rem] h-[2rem]"
                />
                <p className="text-secondGray  text-[0.8rem] leading-normal ">
                  Saeed Niyabati
                </p>
              </div>
              {/* container of count of comments */}
              <div className=" w-full flex items-center justify-end gap-x-2">
                <ChatBubbleOutlineOutlinedIcon
                  fontSize="small"
                  className="text-secondGray"
                />
                <p className="text-secondGray  text-[0.8rem] leading-normal ">
                  53
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col rounded-md overflow-hidden">
          {/* container of image */}

          <div className="relative w-full h-[13rem]">
            <Image
              fill
              alt="t"
              src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
            />
          </div>
          {/* container of texts */}
          <div className="p-5 bg-gray-100">
            <p className="text-secondGray  text-[0.8rem] leading-normal ">
              08 Feb,21
            </p>
            <h5 className="mt-1">
              How To Win The Application Of The New Yourk
            </h5>
            {/* container of autor image and like counts */}
            <div className="w-full  mt-4 flex">
              {/* container of image and name */}
              <div className="w-full  flex items-center gap-x-2">
                <Image
                  width={20}
                  height={20}
                  alt="dfd"
                  src="/assets/confident-indian-woman-21143788.webp"
                  className="rounded-full w-[2rem] h-[2rem]"
                />
                <p className="text-secondGray  text-[0.8rem] leading-normal ">
                  Saeed Niyabati
                </p>
              </div>
              {/* container of count of comments */}
              <div className=" w-full flex items-center justify-end gap-x-2">
                <ChatBubbleOutlineOutlinedIcon
                  fontSize="small"
                  className="text-secondGray"
                />
                <p className="text-secondGray  text-[0.8rem] leading-normal ">
                  53
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col rounded-md overflow-hidden">
          {/* container of image */}

          <div className="relative w-full h-[13rem]">
            <Image
              fill
              alt="t"
              src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
            />
          </div>
          {/* container of texts */}
          <div className="p-5 bg-gray-100">
            <p className="text-secondGray  text-[0.8rem] leading-normal ">
              08 Feb,21
            </p>
            <h5 className="mt-1">
              How To Win The Application Of The New Yourk
            </h5>
            {/* container of autor image and like counts */}
            <div className="w-full  mt-4 flex">
              {/* container of image and name */}
              <div className="w-full  flex items-center gap-x-2">
                <Image
                  width={20}
                  height={20}
                  alt="dfd"
                  src="/assets/confident-indian-woman-21143788.webp"
                  className="rounded-full w-[2rem] h-[2rem]"
                />
                <p className="text-secondGray  text-[0.8rem] leading-normal ">
                  Saeed Niyabati
                </p>
              </div>
              {/* container of count of comments */}
              <div className=" w-full flex items-center justify-end gap-x-2">
                <ChatBubbleOutlineOutlinedIcon
                  fontSize="small"
                  className="text-secondGray"
                />
                <p className="text-secondGray  text-[0.8rem] leading-normal ">
                  53
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
