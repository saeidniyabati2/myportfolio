import Button from "@mui/material/Button";
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
    <section className="w-full h-[75vh] bg-red-600 flex">
      {/* left side section */}
      <div className="w-full h-full basis-[73%] bg-[#F8F9FD]">
        dfd
      </div>
      {/* right side section */}
      <div className="w-full h-full  basis-[27%] bg-[#ECF6FF] relative">
        <div className="w-12 h-12 bg-white absolute top-20 right-20 shadow1  flex items-center justify-center p-1 rounded-sm">
          <Image
            width={100}
            height={100}
            alt="ddf"
            src="/assets/React-icon.svg.png"
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
