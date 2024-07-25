export const AchivementCounts: React.FC = () => {
  return (
    <section className="w-full px-[15rem] md:py-10 md:mt-6 bg-fuchsia-600">
      {/* just for mobile */}
      <div className="w-full bg-red-600 flex flex-col">dfd</div>

      {/* just for desktop */}
      <div className="  flex-row border-y border-gray-200 py-8 hidden md:flex">
        <div className="basis-1/4  flex flex-col items-center py-5 border-r border-gray-200  gap-y-2">
          <h4 className="text-3xl">68</h4>
          <p className="text-sm text-secondGray">happy clients</p>
        </div>
        <div className="basis-1/4   flex flex-col items-center py-5 border-r border-gray-200  gap-y-2">
          <h4 className="text-3xl">+5</h4>
          <p className="text-sm text-secondGray">Years Experience</p>
        </div>
        <div className="basis-1/4   flex flex-col items-center py-5 border-r border-gray-200  gap-y-2">
          <h4 className="text-3xl">25k+</h4>
          <p className="text-sm text-secondGray">Hours Worked</p>
        </div>
        <div className="basis-1/4   flex flex-col items-center py-5 border-r-0 border-gray-200  gap-y-2">
          <h4 className="text-3xl">10</h4>
          <p className="text-sm text-secondGray">Success Projects</p>
        </div>
      </div>
    </section>
  );
};
