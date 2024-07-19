import Image from "next/image";
import { BlueButton } from "./button/BlueButton";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { BlogCard } from "./cards/BlogCard";

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
        <BlogCard
          title="How To Win The Application Of The New Yourk"
          autorName="Saeed Niyabati"
          countComment={55}
          date="08 Feb,21"
        />
        <BlogCard
          title="How To Win The Application Of The New Yourk"
          autorName="Saeed Niyabati"
          countComment={55}
          date="08 Feb,21"
        />
        <BlogCard
          title="How To Win The Application Of The New Yourk"
          autorName="Saeed Niyabati"
          countComment={55}
          date="08 Feb,21"
        />
      </div>
    </section>
  );
};
