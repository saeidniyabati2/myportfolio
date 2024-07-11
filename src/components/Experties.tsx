import Image from "next/image";

export const Experties: React.FC = () => {
  return (
    <section className="w-full h-full  flex flex-col px-[15rem] pb-10">
      {/* container of title */}
      <div className="w-full  flex flex-col items-center">
        <p className="text-sm text-mainButton mt-20">MY EXPERTISE</p>
        <h2 className="text-[1.8rem] leading-snug max-w-[25rem] mt-3">
          Awesome Service For You
        </h2>
      </div>
      {/* container of of cards */}
      <div className="w-full flex pt-10 gap-x-4">
        {/* first card */}
        <div className="w-full  flex border-gray-200 border p-6 py-7 gap-x-4 rounded-[0.200rem]">
          {/* container of icon */}
          <div className="w-11 h-10 rounded-full bg-blue-100 p-[0.55rem] flex items-center justify-center">
            <Image
              width={50}
              height={50}
              alt="icon"
              src="/assets/command-svgrepo-com.svg"
            />
          </div>
          {/* container texts */}
          <div className="w-full flex flex-col gap-y-3">
            <h5>Web Design</h5>
            <p className="text-secondGray  text-[0.8rem] leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              elit. Quidem,
            </p>
            <p className="  text-sm">Explore Service</p>
          </div>
        </div>
        {/* second card */}
        <div className="w-full  flex border-gray-200 border p-6 py-7 gap-x-4 rounded-[0.200rem]">
          {/* container of icon */}
          <div className="w-11 h-10 rounded-full bg-blue-100 p-[0.55rem] flex items-center justify-center">
            <Image
              width={50}
              height={50}
              alt="icon"
              src="/assets/command-svgrepo-com.svg"
            />
          </div>
          {/* container texts */}
          <div className="w-full flex flex-col gap-y-3">
            <h5>Web Design</h5>
            <p className="text-secondGray   text-[0.8rem] leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              elit. Quidem,
            </p>
            <p className="  text-sm">Explore Service</p>
          </div>
        </div>
        {/* third card */}
        <div className="w-full  flex border-gray-200 border p-6 py-7 gap-x-4 rounded-[0.200rem]">
          {/* container of icon */}
          <div className="w-11 h-10 rounded-full bg-blue-100 p-[0.55rem] flex items-center justify-center">
            <Image
              width={50}
              height={50}
              alt="icon"
              src="/assets/command-svgrepo-com.svg"
            />
          </div>
          {/* container texts */}
          <div className="w-full flex flex-col gap-y-3">
            <h5>Web Design</h5>
            <p className="text-secondGray  text-[0.8rem] leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              elit. Quidem,
            </p>
            <p className="  text-sm">Explore Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};
