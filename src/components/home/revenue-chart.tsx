import { useTheme, Box, Typography, Stack, Divider } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions, ChartData, TooltipItem } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {};

function RevenueChart({}: Props) {
  const theme = useTheme();

  const labels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Current Week",
        data: [12, 9, 8, 15, 20, 20], // Adjusted data to match shape
        borderColor: theme.palette.text.primary, // Black line for current week
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
        spanGaps: true,
        // Make the 'Current Week' line dashed after April
        segment: {
          borderColor: (ctx) => {
            const index = ctx.p0DataIndex;
            return index >= labels.indexOf("Apr")
              ? theme.palette.text.primary
              : undefined;
          },
          borderDash: (ctx) => {
            const index = ctx.p0DataIndex;
            return index >= labels.indexOf("Apr") ? [5, 5] : undefined;
          },
        },
      },
      {
        label: "Previous Week",
        data: [7, 16, 11, 10, 15, 23],
        borderColor: theme.palette.info.main,
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        padding: 12,
        caretSize: 0,
        displayColors: true,
        boxPadding: 4,
        callbacks: {
          label: function (context: TooltipItem<"line">) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `$${(context.parsed.y * 1000000).toLocaleString()}`; // Convert M to full number
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: theme.palette.text.secondary,
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 30,
        grid: {
          color: theme.palette.divider,
        },
        ticks: {
          stepSize: 10,
          color: theme.palette.text.secondary,
          callback: function (value: string | number) {
            if (Number(value) === 0) return "0";
            return `${value}M`;
          },
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "none",
        borderRadius: 4,
        width: "100%",
        padding: 6,
      }}
    >
      <Stack spacing={6} sx={{ p: { xs: 2, sm: 2 } }}>
        <Stack direction="row" spacing={4}>
          <Typography variant="h4" sx={{ mr: 5, mb: { xs: 1, sm: 0 } }}>
            Revenue
          </Typography>
          <Divider orientation="vertical" />

          {/* Custom Legend */}
          <Stack direction="row" spacing={8}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.text.primary,
                  mr: 1,
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.primary }}
              >
                {/* Current Week <span style={{ fontWeight: 600 }}>$58,211</span>
                 */}
                <Typography variant="body2">
                  Current Week{" "}
                  <Typography
                    component="span"
                    fontWeight={theme.typography.fontWeightMedium}
                  >
                    $58,211
                  </Typography>
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.info.main,
                  mr: 1,
                }}
              />
              <Typography variant="body2">
                Previous Week{" "}
                <Typography
                  component="span"
                  fontWeight={theme.typography.fontWeightMedium}
                >
                  $68,768
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Box sx={{ height: 320 }}>
          <Line options={options} data={data} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default RevenueChart;
