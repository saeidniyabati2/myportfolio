import { cn } from "../../lib/utils";

interface props {
  ClassName?: string;
}

export const ImageAboutMe: React.FC<props> = ({ ClassName }) => {
  return (
    <div
      className={cn("w-full relative  overflow-hidden ", ClassName)}
    >
      <div
        className="w-[30rem] h-[30rem] bg-[#0188ff25] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[5rem]
    "
      ></div>
      <div
        className="w-[3rem] h-[3rem] bg-[#0188ff25] rounded-full absolute top-[8rem] right-[10rem]  -translate-y-1/2
    "
      ></div>
    </div>
  );
};
