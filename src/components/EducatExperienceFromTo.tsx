interface props {
  title: string;
  description: string;
  position: string;
  date?: string;
  last: boolean;
}

export const EducatExperienceFromTo: React.FC<props> = ({
  title,
  description,
  position,
  date,
  last,
}) => {
  return (
    <div className="flex ">
      <div className=" flex flex-col items-center  pr-5 ">
        <div className="w-3 h-4 rounded-full  flex items-center justify-center circleShadow mt-1">
          <div className="w-[0.35rem] h-[0.35rem] rounded-full bg-mainButton"></div>
        </div>
        <div
          className={`w-[1px] h-full  bg-secondGray  my-2 ${
            last && "invisible"
          }`}
        ></div>
      </div>
      <div className=" flex flex-col pr-16  items-start pb-12 ">
        <h5 className="">{title}</h5>
        <p className="text-secondGray  text-[0.8rem] leading-normal mt-2 ">
          {description}
        </p>
        <div className="bg-blue-100 rounded-full px-5 py-2 mt-4">
          <p className=" font-normal text-[0.8rem] leading-normal text-mainButton">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};
