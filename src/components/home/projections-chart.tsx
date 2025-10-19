import { Box, Stack, Typography, useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions, ChartData, TooltipItem } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {};

function ProjectionsChart({}: Props) {
  const theme = useTheme();
  const labels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "Projections",
        data: [16, 20, 17.5, 22, 14, 20],
        backgroundColor: theme.palette.info.main,
        barThickness: 20,
      },
      {
        label: "Actuals",
        data: [4, 5, 4, 6, 4, 5],
        backgroundColor: theme.palette.info.light,
        barThickness: 20,
        borderRadius: { topRight: 4, topLeft: 4 },
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
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
        backgroundColor: theme.palette.background.default,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        padding: 12,
        caretSize: 0,
        displayColors: true,
        boxPadding: 4,
        callbacks: {
          label: function (context: TooltipItem<"bar">) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "M";
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
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
        stacked: true,
        beginAtZero: true,
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
        flexGrow: 1,
        width: "100%",
        padding: 6,
        borderRadius: 4,
      }}
    >
      <Stack sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h4" sx={{ mb: 6 }}>
          Projections vs Actuals
        </Typography>
        <Box>
          <Bar options={options} data={data} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default ProjectionsChart;
