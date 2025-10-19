import { Grid, Stack, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useNavigate } from "react-router";

type Props = {
  title: string;
  value: string;
  rateChange: number;
  bgColor?: string;
  textColor?: string;
  url?: string;
};

function StatCard({
  title,
  value,
  rateChange,
  bgColor = "background.paper",
  textColor = "text.primary",
  url,
}: Props) {
  const navigate = useNavigate();
  const ChangeIcon = rateChange >= 0 ? TrendingUpIcon : TrendingDownIcon;

  const navigateToUrl = () => {
    if (url) {
      navigate(url);
    }
  };

  return (
    <Grid
      sx={{
        backgroundColor: bgColor,
        borderRadius: 4,
        padding: 6,
        color: textColor,
        boxShadow: "none",
        minWidth: 150,
        cursor: url ? "pointer" : "default",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: url ? "scale(1.05)" : "none",
        },
      }}
      onClick={navigateToUrl}
    >
      <Stack>
        <Typography variant="h4">{title}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          mt={2}
        >
          <Typography variant="h2">{value}</Typography>
          <Stack flexDirection="row" alignItems="center" sx={{ gap: 2 }}>
            <Typography variant="body2">
              {rateChange > 0 ? `+${rateChange}%` : `${rateChange}%`}
            </Typography>
            <ChangeIcon sx={{ marginTop: 0 }} />
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default StatCard;
