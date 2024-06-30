export default function Hero(props: object) {
  let test = "this is test";

  interface User {
    name: String;
    age: Number;
  }

  const user: User = {
    name: "saeed",
    age: 29,
  };

  console.log(user);

  const testF = function (user: User): User {
    return { name: "saeed", age: 44 };
  };

  const test4 = function (user: User): void {
    "saeed" + "niyabati";
  };

  const test2 = testF(user);

  console.log(test2);

  return (
    <section className="w-full h-[75vh] bg-red-600 flex">
      {/* left side section */}
      <div className="w-full h-full bg-red-400 basis-[73%] bg-[#F8F9FD]">
        dfd
      </div>
      {/* right side section */}
      <div className="w-full h-full bg-red-900 basis-[27%] bg-[#ECF6FF]">
        dfdfdfdfdd
      </div>
    </section>
  );
}
