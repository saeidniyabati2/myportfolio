import Button from "@mui/material/Button";

interface props {
  title: string;
  Icon: React.ElementType;
}

export const BlueButton: React.FC<props> = ({ title, Icon }) => {
  return (
    <Button
      className="bg-[#0189FF] text-white px-6 py-2 rounded-sm"
      endIcon={<Icon style={{ fontSize: "14px" }} />}
    >
      <p className="font-HankenGrotesk no-transform font-light">{title}</p>
    </Button>
  );
};
