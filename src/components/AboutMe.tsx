import AboutMeCarousel from "./image/AboutMeCarousel";

export default function AboutMe(props: object) {
  return (
    <section className="w-full h-[90vh]  pt-28 bg-red-400">
      {/* container of mini text title with image slider */}
      <div className="w-full   flex flex-col items-center px-[9.9rem]">
        <p className="text-sm">
          <span className="text-mainButton ">TECHNOLOGIES</span> THAT I AM USING
        </p>
        {/* container of image slider */}
        <AboutMeCarousel />
      </div>
    </section>
  );
}
