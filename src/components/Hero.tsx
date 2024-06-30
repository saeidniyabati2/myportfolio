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
    <div className="w-full h-screen bg-red-600">
      <h2 className="font-bold ">this is test</h2>
      <h2 className="font-HankenGrotesk font-light">this is testdfdg</h2>
      <p className="font-HankenGrotesk font-bold">this is test</p>
      <p className="font-HankenGrotesk">this is test</p>
      <h2>this is test</h2>
    </div>
  );
}
