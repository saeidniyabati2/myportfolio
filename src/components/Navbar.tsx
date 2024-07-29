import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex  px-4  md:px-0">
      <div className="w-full h-full  lg:basis-[73%] flex bg-grayMain pt-4 lg:pl-[15rem] ">
        {/* container of image */}
        {/* just desktop */}
        <div className=" h-full pt-3 relative  items-center basis-4/12 hidden md:flex p-1">
          <Image
            width={100}
            height={100}
            alt=""
            src="/assets/Screenshot 2024-07-12 at 3.05.18 PM.png"
            className="shadow-lg"
          />
        </div>
        {/* just mobile */}
        <div className=" h-full relative flex items-center md:hidden ">
          <Image
            width={200}
            height={200}
            alt=""
            src="/assets/Screenshot 2024-07-12 at 3.05.18 PM.png"
          />
        </div>
        {/* container of navbar menu  */}
        {/* just for desktop */}
        <div className="w-full items-center basis-8/12 hidden md:flex ">
          <p className=" px-5 py-5 text-sm  text-navBarText">Home</p>
          <p className=" px-5 py-5 text-sm  text-navBarText">About</p>
          <p className=" px-5 py-5 text-sm  text-navBarText">Services</p>
          <p className=" px-5 py-5 text-sm  text-navBarText">Projects</p>
          <p className=" px-5 py-5 text-sm  text-navBarText">Blog</p>
        </div>
        {/* just for mobile */}
        <div className="w-full  flex items-center justify-end  lg:hidden">
          <div className="w-10 h-10 bg-mainButton rounded-md relative ">
            <Image fill alt="" src="/assets/menu-svgrepo-com.svg" />
          </div>
        </div>
      </div>
      <div className="w-full   basis-[27%]  items-center gap-x-3 bg-[#ECF6FF] pl-10 hidden lg:flex pt-4 ">
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
