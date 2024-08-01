interface props {
  title: string;
  description: string;
  miniText: string;
  Icon: React.ElementType;
}

export const ExpertiesCard: React.FC<props> = ({
  title,
  description,
  miniText,

  Icon,
}) => {
  return (
    <div
      className={`w-full  flex border-gray-200 border p-6 py-7 gap-x-4 rounded-[0.200rem] group hover:shadow-lg hover:border-white transition-all duration-500 cursor-pointer `}
    >
      {/* container of icon */}
      <div
        className={`w-11 h-10 rounded-full bg-blue-100 p-[0.55rem] flex items-center justify-center group-hover:bg-mainButton transition-all duration-500`}
      >
        {
          <Icon className="text-mainButton group-hover:text-[#ECF6FF] transition-all duration-500" />
        }
      </div>
      {/* container texts */}
      <div className="w-full flex flex-col gap-y-3">
        <h5>{title}</h5>
        <p className="text-secondGray  text-[0.8rem] leading-relaxed ">
          {description}
        </p>
        <div className="flex flex-col ">
          <p
            className={`text-sm group-hover:text-mainButton transition-all duration-500`}
          >
            {miniText}
          </p>
          <hr
            className={`w-[6.3rem] h-[0.08rem] invisible group-hover:visible group-hover:bg-mainButton border-none transition-all duration-500`}
          />
        </div>
      </div>
    </div>
  );
};
