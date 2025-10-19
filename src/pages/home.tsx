import { fetchCurrentStats } from "@/api";
import ProjectionsChart from "@/components/home/projections-chart";
import RevenueByLocation from "@/components/home/revenue-by-location";
import RevenueChart from "@/components/home/revenue-chart";
import StatCard from "@/components/home/stat-card";
import TopSellingProducts from "@/components/home/top-selling-products";
import TotalSales from "@/components/home/total-sales";
import { Grid, Stack, Typography } from "@mui/material";

function HomePage() {
  const { summary } = fetchCurrentStats();

  return (
    <Stack component="main" sx={{ px: 8 }}>
      {/* ECommerce Section */}
      <Typography variant="h4" px={2} py={4}>
        eCommerce
      </Typography>
      <Stack spacing={2} direction={{ sm: "row" }}>
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
      <Stack my={7} direction={{ xs: "column", sm: "row" }} spacing={7}>
        <RevenueChart />
        <RevenueByLocation />
      </Stack>

      {/* Sales Section */}
      <Stack my={7} direction={{ xs: "column", sm: "row" }} spacing={7}>
        <TopSellingProducts />
        <TotalSales />
      </Stack>
    </Stack>
  );
}

export default HomePage;
