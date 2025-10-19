import { LinearProgress, Stack, Typography, useTheme } from "@mui/material";

type Props = {};

function CountryRevenueLabel({
  country,
  revenue,
}: {
  country: string;
  revenue: number;
}) {
  const revenueInThousands = revenue / 1000;
  const revenueInRange = Math.min(Math.max(revenueInThousands, 0), 100);

  return (
    <Stack p={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <Typography variant="body2">{country}</Typography>
        <Typography variant="body2">
          {revenueInThousands > 1
            ? `${revenueInThousands}K`
            : revenueInThousands}
        </Typography>
      </Stack>

      <LinearProgress variant="determinate" value={revenueInRange} />
    </Stack>
  );
}

function RevenueByLocation({}: Props) {
  const countries = [
    { country: "New York", revenue: 72000 },
    { country: "San Francisco", revenue: 39000 },
    { country: "Sydney", revenue: 25000 },
    { country: "Singapore", revenue: 61000 },
  ];

  const theme = useTheme();
  return (
    <Stack sx={{ bgcolor: "background.paper", p: 4, borderRadius: 4 }}>
      <Stack>
        <Stack spacing={4}>
          <Typography variant="h4" align="center">
            {" "}
            Revenue by Location{" "}
          </Typography>

          <img
            src={`/assets/images/world-map-${theme.palette.mode}.png`}
            alt="World Map"
            width={250}
          />

          <Stack>
            {countries.map((item) => (
              <CountryRevenueLabel
                key={item.country}
                country={item.country}
                revenue={item.revenue}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default RevenueByLocation;
