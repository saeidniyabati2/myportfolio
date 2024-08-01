
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

import { BlogCard } from "./cards/BlogCard";
import { ButtonCom } from "./ui/ButtonCom";

export const Blogs: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-[15rem] mt-10 md:mt-0 flex flex-col pb-10 md:pb-28 ">
      <div className="flex flex-col md:flex-row  items-center md:items-end">
        <div className="w-full flex flex-col  items-center md:items-start ">
          <p className="text-sm text-mainButton mt-5 md:mt-20">BLOG & NEWS</p>
          <h2 className="text-[1.8rem] leading-snug md:max-w-[25rem] mt-3">
            Our Latest Blogs
          </h2>
        </div>
        <div className="w-full flex  md:items-end justify-center md:justify-end mt-8 md:mt-0 ">
          <ButtonCom
            title="Read Our Blogs"
            Icon={KeyboardCommandKeyIcon}
            ClassName="w-full py-3 mt-2 bg-[#0189FF] hover:bg-[#0162ff] text-white md:w-auto"
          />
        </div>
      </div>
      {/* container of cards */}
      <div
        className="w-full flex flex-col md:flex-row  mt-14
      gap-y-6 md:gap-x-6"
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
