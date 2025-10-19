import { fetchCurrentStats } from "@/api";
import ProjectionsChart from "@/components/home/projections-chart";
import RevenueChart from "@/components/home/revenue-chart";
import StatCard from "@/components/home/stat-card";
import { Container, Grid, Stack, Typography } from "@mui/material";

function HomePage() {
  const { summary } = fetchCurrentStats();

  return (
    <Container component="main" sx={{ p: 2 }}>
      {/* ECommerce Section */}
      <Typography variant="h4" p={2}>
        eCommerce
      </Typography>
      <Stack spacing={7} direction={{ sm: "row" }}>
        <Grid container spacing={7} size={{ xs: 12, sm: 6 }}>
          {summary.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              rateChange={stat.change}
              bgColor={stat.bgColor}
              textColor={stat.textColor}
            />
          ))}
        </Grid>

        <ProjectionsChart />
      </Stack>

      {/* Revenue Section */}
      <Stack my={7}>
        <RevenueChart />
      </Stack>

      {/* Sales Section */}
      <Stack></Stack>
    </Container>
  );
}

export default HomePage;
