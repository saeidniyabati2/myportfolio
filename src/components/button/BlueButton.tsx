import Button from "@mui/material/Button";

export default function BlueButton(props: any) {
  return (
    <Button
      className="bg-[#0189FF] text-white px-6 py-2 rounded-sm"
      endIcon={<props.icon style={{ fontSize: "14px" }} />}
    >
      <p className="font-HankenGrotesk no-transform font-light">
        {props.title}
      </p>
    </Button>
  );
}
