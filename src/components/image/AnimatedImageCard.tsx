import Image from "next/image";

interface props {
  title: string;
  description: string;
}

export const AnimatedImageCard: React.FC<props> = ({ title, description }) => {
  return (
    <div className="w-full h-[20rem]  relative overflow-hidden rounded-lg group cursor-pointer">
      <Image
        fill
        alt="Sample Image"
        src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
        className="object-cover"
      />
      <div className="w-full bg-mainButton absolute bottom-0 left-0 right-0 p-4 px-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <p className="text-sm text-white">{title}</p>
        <p className="text-lg text-white">{description}</p>
      </div>
    </div>
  );
};
