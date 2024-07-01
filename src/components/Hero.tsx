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
      <div className="w-full h-full bg-red-400 basis-[73%] bg-[#F8F9FD]">
        dfd
      </div>
      {/* right side section */}
      <div className="w-full h-full  basis-[27%] bg-[#ECF6FF] relative">
        <div className="w-9 h-9 bg-white absolute top-20 right-20 shadow1">
          df
        </div>
        <div className="w-6 h-6 bg-white absolute top-32 right-40 shadow1">
          df
        </div>
      </div>
    </section>
  );
}
