import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#f97316" : "#ea580c",
  },
}));

const ProgressBar = ({ stat }) => {
  return (
    <BorderLinearProgress
      variant="determinate"
      value={Math.ceil((100 * stat) / 255)}
    />
  );
};

export default ProgressBar;
