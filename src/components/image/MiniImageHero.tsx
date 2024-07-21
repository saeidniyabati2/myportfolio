import Image from "next/image";
import { useEffect, useState } from "react";

interface props {
  src: string;
  className: string;
  size: "small" | "medium" | "big";
}

export const MiniImageHero: React.FC<props> = ({ src, className, size }) => {
  const [sizeState, setSizeState] = useState("w-10 h-10");

  useEffect(() => {
    
    if (size === "small") {
      return setSizeState("w-6 h-6");
    } else if (size === "medium") {
      return setSizeState("w-10 h-10");
    } else {
      return setSizeState("w-12 h-12");
    }
  }, []);

  return (
    <div
      className={`${className} ${sizeState} bg-white absolute top-24 right-32 shadow1  flex items-center justify-center p-1 rounded-md`}
    >
      <Image width={100} height={100} alt="ddf" src={src} />
    </div>
  );
};
