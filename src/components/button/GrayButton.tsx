import Button from "@mui/material/Button";

interface props {
  title: string;
  Icon: React.ElementType;
}

export const GrayButton: React.FC<props> = ({ title, Icon }) => {
  return (
    <Button
      variant="outlined"
      className="bg-[#F8F9FD]  px-6 py-2 rounded-sm border-[#ADB7C4] outline-none hover:bg-[#ffffff] hover:border-[#ADB7C4]"
      endIcon={<Icon style={{ fontSize: "14px", color: "#29303B" }} />}
    >
      <p className="font-HankenGrotesk no-transform font-light text-[#29303B]">
        {title}
      </p>
    </Button>
  );
};
