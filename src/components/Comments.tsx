import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Image from "next/image";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Comments: React.FC = () => {
  return (
    <section className="w-full px-[15rem] bg-gray-50 py-20">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={500}
        customTransition="all .5"
        transitionDuration={500}
        responsive={responsive}
        className="w-full h-[20rem] bg-green-500  "
      >
        <div className="w-full h-full  flex flex-col items-center">
          {/* contaienr of image  */}
          <div className="w-14 h-14 relative rounded-full overflow-hidden">
            <Image
              fill
              alt="user "
              src="/assets/confident-indian-woman-21143788.webp"
            />
          </div>
          <p className="mt-8 text-xl text-center max-w-[45rem] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
            upti nam impedit. Fugit qui quidem accusantium architecto quibusdam
            ab expedita quis atque ipsam dolore?
          </p>
          <p className="text-lg text-secondGray mt-5">Chris Brendon</p>
          <p className="text-xs text-mainButton mt-1">Senior Developer</p>
        </div>
        <div className="w-full h-full  flex flex-col items-center">
          {/* contaienr of image  */}
          <div className="w-14 h-14 relative rounded-full overflow-hidden">
            <Image
              fill
              alt="user "
              src="/assets/confident-indian-woman-21143788.webp"
            />
          </div>
          <p className="mt-8 text-xl text-center max-w-[45rem] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
            upti nam impedit. Fugit qui quidem accusantium architecto quibusdam
            ab expedita quis atque ipsam dolore?
          </p>
          <p className="text-lg text-secondGray mt-5">Chris Brendon</p>
          <p className="text-xs text-mainButton mt-1">Senior Developer</p>
        </div>
        <div className="w-full h-full  flex flex-col items-center">
          {/* contaienr of image  */}
          <div className="w-14 h-14 relative rounded-full overflow-hidden">
            <Image
              fill
              alt="user "
              src="/assets/confident-indian-woman-21143788.webp"
            />
          </div>
          <p className="mt-8 text-xl text-center max-w-[45rem] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
            upti nam impedit. Fugit qui quidem accusantium architecto quibusdam
            ab expedita quis atque ipsam dolore?
          </p>
          <p className="text-lg text-secondGray mt-5">Chris Brendon</p>
          <p className="text-xs text-mainButton mt-1">Senior Developer</p>
        </div>
        <div className="w-full h-full  flex flex-col items-center">
          {/* contaienr of image  */}
          <div className="w-14 h-14 relative rounded-full overflow-hidden">
            <Image
              fill
              alt="user "
              src="/assets/confident-indian-woman-21143788.webp"
            />
          </div>
          <p className="mt-8 text-xl text-center max-w-[45rem] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
            upti nam impedit. Fugit qui quidem accusantium architecto quibusdam
            ab expedita quis atque ipsam dolore?
          </p>
          <p className="text-lg text-secondGray mt-5">Chris Brendon</p>
          <p className="text-xs text-mainButton mt-1">Senior Developer</p>
        </div>
        <div className="w-full h-full  flex flex-col items-center">
          {/* contaienr of image  */}
          <div className="w-14 h-14 relative rounded-full overflow-hidden">
            <Image
              fill
              alt="user "
              src="/assets/confident-indian-woman-21143788.webp"
            />
          </div>
          <p className="mt-8 text-xl text-center max-w-[45rem] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
            upti nam impedit. Fugit qui quidem accusantium architecto quibusdam
            ab expedita quis atque ipsam dolore?
          </p>
          <p className="text-lg text-secondGray mt-5">Chris Brendon</p>
          <p className="text-xs text-mainButton mt-1">Senior Developer</p>
        </div>
      </Carousel>
    </section>
  );
};
