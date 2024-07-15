import Image from "next/image";

export const Gallery: React.FC = () => {
  return (
    <section className="w-full px-[15rem] bg-red-500 flex flex-col items-center pt-6">
      <div className="w-full  flex flex-col items-center">
        {/* container of texts */}
        <p className="text-sm text-mainButton mt-20">MY EXPERTISE</p>
        <h2 className="text-[1.8rem] leading-snug max-w-[25rem] mt-3">
          Awesome Service For You
        </h2>
      </div>
    </section>
  );
};
