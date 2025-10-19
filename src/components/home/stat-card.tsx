import { Grid, Stack, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

type Props = {
  title: string;
  value: string;
  rateChange: number;
  bgColor?: string;
  textColor?: string;
};

function StatCard({
  title,
  value,
  rateChange,
  bgColor = "background.paper",
  textColor = "text.primary",
}: Props) {
  const ChangeIcon = rateChange >= 0 ? TrendingUpIcon : TrendingDownIcon;

  return (
    <Grid
      sx={{
        backgroundColor: bgColor,
        borderRadius: 4,
        padding: 6,
        color: textColor,
        boxShadow: "none",
        minWidth: 150,
      }}
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
              {rateChange > 0 ? `+${rateChange}%` : `-${rateChange}%`}
            </Typography>
            <ChangeIcon sx={{ marginTop: 0 }} />
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default StatCard;
