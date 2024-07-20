import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[4rem]  flex ">
      <div className="w-full h-full  basis-[73%] flex bg-grayMain pl-[15rem]">
        {/* container of image */}
        <div className=" h-full  relative flex items-center basis-4/12">
          <Image
            width={100}
            height={100}
            alt=""
            src="/assets/Screenshot 2024-07-12 at 3.05.18 PM.png"
            className="shadow-lg"

          />
        </div>
        {/* container of navbar menu  */}
        <div className="w-full   flex items-center basis-8/12">
          <p className=" px-5 py-5 text-sm  text-navBarText">Home</p>
          <p className=" px-5 py-5 text-sm  text-navBarText">About</p>
          <p className=" px-5 py-5 text-sm  text-navBarText">Services</p>
          <p className=" px-5 py-5 text-sm  text-navBarText">Projects</p>
          <p className=" px-5 py-5 text-sm  text-navBarText">Blog</p>
        </div>
      </div>
      <div className="w-full h-full  basis-[27%] flex items-center gap-x-3 bg-[#ECF6FF] pl-10">
        {/* container of icon */}
        <div className="w-5 h-5  relative ">
          <Image fill alt="" src="/assets/email-8-svgrepo-com.svg" />
        </div>
        {/* container of text */}
        <p className="text-sm text-navBarText">saeedsnaid@gmail.com</p>
      </div>
    </nav>
  );
};
