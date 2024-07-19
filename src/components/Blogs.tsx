import { BlueButton } from "./button/BlueButton";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

export const Blogs: React.FC = (props) => {
  return (
    <section className="w-full px-[15rem] bg-red-500 flex">
      <div className="w-full bg-green-400 flex flex-col">
        <p className="text-sm text-mainButton mt-20">BLOG & NEWS</p>
        <h2 className="text-[1.8rem] leading-snug max-w-[25rem] mt-3">
          Our Latest Blogs
        </h2>
      </div>
      <div className="w-full bg-green-500 flex items-end justify-end">
        <BlueButton title="Read Our Blogs" Icon={KeyboardCommandKeyIcon} />
      </div>
    </section>
  );
};
