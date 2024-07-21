import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function AboutMeCarousel() {
  return (
    <div className="w-full h-full  mt-10">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
        //   deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass=""
        className="w-full h-full"
      >
        <div className=" h-full  flex items-center justify-center">
          <Image
            width={40}
            height={40}
            alt="javascript"
            src="/assets/nodejs02-svgrepo-com.svg"
          />
        </div>
        <div className=" h-full  flex items-center justify-center">
          <Image
            width={40}
            height={40}
            alt="react.js"
            src="/assets/react-fill-svgrepo-com.svg"
          />
        </div>
        <div className="w-full h-full  flex items-center justify-center">
          <Image
            width={40}
            height={40}
            alt="next.js"
            src="/assets/next-dot-js-svgrepo-com2.svg"
          />
        </div>
        <div className="w-full h-full  flex items-center justify-center">
          <Image
            width={40}
            height={40}
            alt="tailwindcss"
            src="/assets/tailwindcss-icon-svgrepo-com2.svg"
          />
        </div>
        <div className="w-full h-full  flex items-center justify-center">
          <Image
            width={40}
            height={40}
            alt="figma"
            src="/assets/figma-svgrepo-com.svg"
          />
        </div>
        <div className="w-full h-full  flex items-center justify-center">
          <Image
            width={40}
            height={40}
            alt="material ui"
            src="/assets/material-ui-svgrepo-com.svg"
          />
        </div>
      </Carousel>
    </div>
  );
}
