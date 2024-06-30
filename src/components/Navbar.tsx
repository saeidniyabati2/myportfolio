import Image from "next/image";

export default function Navbar(props) {
  return (
    <nav className="w-full h-full bg-green-400 flex px-[14rem]">
      <div className="w-full h-full bg-red-400 basis-[80%]">
        {/* container of image */}
        <div className="w-full h-full bg-red-950 relative">
          <Image 
          width={100}
          height={100}
          alt=""
           src="/assets/Screenshot 2024-06-30 at 12.46.18 AM.png" />
           
        </div>
      </div>
      <div className="w-full h-full bg-red-700 basis-[20%]">22</div>
    </nav>
  );
}
