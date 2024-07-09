import Button from "@mui/material/Button";

export default function GrayButton(props: any) {
  return (

<Button
variant="outlined"
className="  bg-[#F8F9FD]  px-6 py-2 rounded-sm border-[#ADB7C4]"
endIcon={
  <props.icon
    style={{ fontSize: "14px", color: "#29303B" }}
  />
}
>
<p className="font-HankenGrotesk no-transform font-light text-[#29303B]">
  {props.title}
</p>
</Button>
  );
}
