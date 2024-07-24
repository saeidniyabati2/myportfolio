import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../lib/utils";
interface props {
  words: string;
  className?: string;
}

export const TextGenerateEffect: React.FC<props> = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 3,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${idx > 3 && "text-mainButton"} opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <h1 className={cn("font-bold", className)}>{renderWords()}</h1>;
};
