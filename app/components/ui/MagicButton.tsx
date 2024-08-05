import React from "react";
import { cn } from "../../../lib/utils";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  buttonClasses,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  buttonClasses?: string;
  otherClasses?: string;
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-[3rem] w-full  md:mt-10 overflow-hidden rounded-lg p-[2px] focus:outline-none",
        buttonClasses
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  bg-[conic-gradient(from_90deg_at_50%_50%,#1254C7_0%,#7FA1FF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
              px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
