import Image from "next/image";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

interface props {
  title: string;
  autorName: string;
  countComment: number;
  date: string;
}

export const BlogCard: React.FC<props> = ({
  title,
  autorName,
  countComment,
  date
}) => {
  return (
    <div className="w-full  flex flex-col rounded-md overflow-hidden">
      {/* container of image */}
      <div className="relative w-full h-[13rem]">
        <Image
          fill
          alt="autor image"
          src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
        />
      </div>
      {/* container of texts */}
      <div className="p-5 bg-gray-100">
        <p className="text-secondGray  text-[0.8rem] leading-normal ">{date}</p>
        <h5 className="mt-1">{title}</h5>
        {/* container of autor image and like counts */}
        <div className="w-full  mt-4 flex">
          {/* container of image and name */}
          <div className="w-full  flex items-center gap-x-2">
            <Image
              width={20}
              height={20}
              alt="dfd"
              src="/assets/confident-indian-woman-21143788.webp"
              className="rounded-full w-[2rem] h-[2rem]"
            />
            <p className="text-secondGray  text-[0.8rem] leading-normal ">
              {autorName}
            </p>
          </div>
          {/* container of count of comments */}
          <div className=" w-full flex items-center justify-end gap-x-2">
            <ChatBubbleOutlineOutlinedIcon
              fontSize="small"
              className="text-secondGray"
            />
            <p className="text-secondGray  text-[0.8rem] leading-normal ">
              {countComment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
