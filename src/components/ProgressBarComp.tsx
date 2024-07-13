import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 1,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));


interface props {
  title: string;
}

export const ProgressBarComp: React.FC<props> = ({ title }) => {
  return (
    <div className="w-full  flex flex-col gap-y-2">
      <p className="  text-sm">{title}</p>
      <BorderLinearProgress variant="determinate" value={90} />
    </div>
  );
};
