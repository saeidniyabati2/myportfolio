import Image from "next/image";

export const Gallery: React.FC = () => {
  return (
    <section className="w-full px-[15rem] bg-red-500 flex flex-col items-center">
      <div className="w-full  flex flex-col items-center">
        {/* container of texts */}
        <p className="text-sm text-mainButton mt-20">MY EXPERTISE</p>
        <h2 className="text-[1.8rem] leading-snug max-w-[25rem] mt-3">
          Awesome Service For You
        </h2>
      </div>
      {/* container of images */}
      <div className="w-full bg-fuchsia-500 mt-12 text-sm text-mainButton">
        {/* contaier of title */}
        <div className="w-full bg-yellow-400 flex justify-center">
          <p>All</p>
        </div>
        {/* container of images */}
        <div className="grid grid-cols-2 bg-red-700 mt-6 gap-5">
          <div className="w-full h-[20rem] bg-green-300 relative overflow-hidden rounded-lg group cursor-pointer">
            <Image
              fill
              alt="Sample Image"
              src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
              className="object-cover"
            />
            <div className="w-full bg-mainButton absolute bottom-0 left-0 right-0 p-4 px-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-sm text-white">Web Development</p>
              <p className="text-lg text-white">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-green-300 relative overflow-hidden rounded-lg group cursor-pointer">
            <Image
              fill
              alt="Sample Image"
              src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
              className="object-cover"
            />
            <div className="w-full bg-mainButton absolute bottom-0 left-0 right-0 p-4 px-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-sm text-white">Web Development</p>
              <p className="text-lg text-white">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-green-300 relative overflow-hidden rounded-lg group cursor-pointer">
            <Image
              fill
              alt="Sample Image"
              src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
              className="object-cover"
            />
            <div className="w-full bg-mainButton absolute bottom-0 left-0 right-0 p-4 px-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-sm text-white">Web Development</p>
              <p className="text-lg text-white">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-green-300 relative overflow-hidden rounded-lg group cursor-pointer">
            <Image
              fill
              alt="Sample Image"
              src="/assets/bd2727973edd4252e384afe4b6e8315c.jpg"
              className="object-cover"
            />
            <div className="w-full bg-mainButton absolute bottom-0 left-0 right-0 p-4 px-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-sm text-white">Web Development</p>
              <p className="text-lg text-white">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
