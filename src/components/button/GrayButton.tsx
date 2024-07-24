import Button from "@mui/material/Button";
import { cn } from "../../../lib/utils";

interface props {
  title: string;
  Icon: React.ElementType;
  ClassName?: string;
}

export const GrayButton: React.FC<props> = ({ title, Icon, ClassName }) => {
  return (
    <Button
      variant="outlined"
      className={cn(
        "bg-[#F8F9FD]  px-6 rounded-sm border-[#ADB7C4] outline-none hover:bg-[#ffffff] hover:border-[#ADB7C4]",
        ClassName
      )}
      endIcon={<Icon style={{ fontSize: "14px", color: "#29303B" }} />}
    >
      <p className="font-HankenGrotesk no-transform font-light text-[#29303B]">
        {title}
      </p>
    </Button>
  );
};
