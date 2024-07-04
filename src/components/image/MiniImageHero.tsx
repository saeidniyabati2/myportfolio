import Image from "next/image";

export default function MiniImageHero(props: any) {
  return (
    <div
      className={`${props.className} bg-white absolute top-24 right-32 shadow1  flex items-center justify-center p-1 rounded-md`}
    >
      <Image width={100} height={100} alt="ddf" src={props.sorceImage} />
    </div>
  );
}
