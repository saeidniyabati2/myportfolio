import { AnimatedImageCard } from "./ui/image/AnimatedImageCard";

export const Gallery: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-[15rem] flex flex-col items-center pb-24 ">
      <div className="w-full  flex flex-col items-center ">
        {/* container of texts */}
        <p className="text-sm text-mainButton mt-10 md:mt-20">MY EXPERTISE</p>
        <h2 className="text-[1.8rem] leading-snug max-w-[25rem] mt-3">
          Awesome Service For You
        </h2>
      </div>
      {/* container of images */}
      <div className="w-full  mt-12 text-sm text-mainButton">
        {/* contaier of title */}
        <div className="w-full flex justify-center">
          <p>All</p>
        </div>
        {/* container of images */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5 ">
          <AnimatedImageCard
            title="Web Development"
            description="Lorem ipsum dolor sit."
            src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
          />
          <AnimatedImageCard
            title="Web Development"
            description="Lorem ipsum dolor sit."
            src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
          />
          <AnimatedImageCard
            title="Web Development"
            description="Lorem ipsum dolor sit."
            src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
          />
          <AnimatedImageCard
            title="Web Development"
            description="Lorem ipsum dolor sit."
            src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
          />
        </div>
      </div>
    </section>
  );
};
