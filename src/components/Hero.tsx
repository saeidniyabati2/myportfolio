import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
export default function Hero(props: object) {
  // let test = "this is test";

  // interface User {
  //   name: String;
  //   age: Number;
  // }

  // const user: User = {
  //   name: "saeed",
  //   age: 29,
  // };

  // console.log(user);

  // const testF = function (user: User): User {
  //   return { name: "saeed", age: 44 };
  // };

  // const test4 = function (user: User): void {
  //   "saeed" + "niyabati";
  // };

  // const test2 = testF(user);

  // console.log(test2);

  // type Test10 = true | false;

  // const Test10 = 3;

  // type test11 = 1 | 3;

  return (
    <section className="w-full h-[75vh] bg-green-600 flex ">
      {/* left side section */}
      <div className="w-full h-full basis-[73%] bg-[#F8F9FD] relative pl-[15rem]">
        {/* container of texts with buttons */}
        <div className="w-full  bg-red-500 flex flex-col gap-y-5">
          <h1 className="mt-32 text-5xl font-HankenGrotesk">Hello Mate 👋</h1>
          <h1 className="text-6xl font-HankenGrotesk font-medium">
            I'm Saeid Niyabati
          </h1>
          <h1 className="text-6xl">
            a <span className="text-[#2383C4]">Web Developer</span>
          </h1>
          <p className="text-[#4D5661] max-w-[30rem] text-sm leading-relaxed">
            Hi, I'm Saeed a freelancer web developer from Iran. I help brands
            turn their idea into high quality products.
          </p>
          {/* buttons container */}
          <div className="w-full bg-green-700">
            <Button
              variant="contained"
              endIcon={
                <ArrowForwardIosIcon fontSize="small" className="text-sm" />
              }
              size="large"
              className="px-8 text-xs"
            >
              Send
            </Button>
          </div>
        </div>
        <div className="w-10 h-10 bg-white absolute top-24 right-32 shadow1  flex items-center justify-center p-1 rounded-sm">
          <Image
            width={100}
            height={100}
            alt="ddf"
            src="/assets/node-js-svgrepo-com.svg"
          />
        </div>
        <div className="w-12 h-12 bg-white absolute top-52 right-52 shadow1  flex items-center justify-center p-1 rounded-sm">
          <Image
            width={100}
            height={100}
            alt="ddf"
            src="/assets/redux-svgrepo-com.svg"
          />
        </div>
      </div>
      {/* right side section */}
      <div className="w-full h-full  basis-[27%] bg-[#ECF6FF] relative">
        <div className="w-12 h-12 bg-white absolute top-20 right-20 shadow1  flex items-center justify-center p-1 rounded-sm">
          <Image
            width={100}
            height={100}
            alt="ddf"
            src="/assets/react-svgrepo-com.svg"
          />
        </div>
        <div className="w-6 h-6 bg-white absolute top-32 right-56 shadow1 p-1 rounded-sm ">
          <Image
            width={100}
            height={100}
            alt="ddf"
            src="/assets/tailwindcss-icon-svgrepo-com.svg"
          />
        </div>
        <div className="w-10 h-10 bg-white absolute top-56 right-32 shadow1  flex items-center justify-center p-1 rounded-sm">
          <Image
            width={100}
            height={100}
            alt="ddf"
            src="/assets/next-dot-js-svgrepo-com.svg"
          />
        </div>
      </div>
    </section>
  );
}
