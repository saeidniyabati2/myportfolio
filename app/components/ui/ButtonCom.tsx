import Button from "@mui/material/Button";
import { cn } from "../../../lib/utils";

interface props {
  title: string;
  Icon: React.ElementType;
  ClassName?: string;
}

export const ButtonCom: React.FC<props> = ({ title, Icon, ClassName }) => {
  return (
    <Button
      className={cn("  px-6  rounded-sm group ", ClassName)}
      endIcon={<Icon style={{ fontSize: "14px" }} />}
    >
      <p className="font-HankenGrotesk no-transform font-light">{title}</p>
    </Button>
  );
};
