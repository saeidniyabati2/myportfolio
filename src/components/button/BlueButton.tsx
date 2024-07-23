import Button from "@mui/material/Button";
import { cn } from "../../../lib/utils";

interface props {
  title: string;
  Icon: React.ElementType;
  ClassName?: string;
}

export const BlueButton: React.FC<props> = ({ title, Icon, ClassName }) => {
  return (
    <Button
      className={cn(
        "bg-[#0189FF] text-white px-6 py-2 rounded-sm group hover:bg-[#0162ff]",
        ClassName
      )}
      endIcon={<Icon style={{ fontSize: "14px" }} />}
    >
      <p className="font-HankenGrotesk no-transform font-light">{title}</p>
    </Button>
  );
};
