interface props {
  title: string;
  description: string;
  miniText: string;
  status: boolean;
  Icon: React.ElementType;
}

export const ExpertiesCard: React.FC<props> = ({
  title,
  description,
  miniText,
  status,
  Icon,
}) => {
  return (
    <div
      className={`w-full  flex border-gray-200 border p-6 py-7 gap-x-4 rounded-[0.200rem] ${
        status && "border-0 expertiesCardShadow"
      }`}
    >
      {/* container of icon */}
      <div
        className={`w-11 h-10 rounded-full bg-blue-100 p-[0.55rem] flex items-center justify-center ${
          status && "bg-mainButton"
        }`}
      >
        {<Icon style={{ color: status ? "#ECF6FF" : "#0189FF" }} />}
      </div>
      {/* container texts */}
      <div className="w-full flex flex-col gap-y-3">
        <h5>{title}</h5>
        <p className="text-secondGray  text-[0.8rem] leading-relaxed ">
          {description}
        </p>
        <div className="flex flex-col ">
          <p className={`text-sm ${status && "text-mainButton"}`}>{miniText}</p>
          <hr
            className={`w-[6.3rem] h-[0.08rem]  ${
              status ? "visible bg-mainButton  border-none" : "invisible"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
