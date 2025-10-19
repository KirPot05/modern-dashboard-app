import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

type Props = {};

const salesData = {
  labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
  values: [300.56, 135.18, 154.02, 48.96],
  mainValue: "38.6%",
};

ChartJS.register(ArcElement, Tooltip, Legend);

function TotalSales({}: Props) {
  const theme = useTheme();

  const data = {
    labels: salesData.labels,
    datasets: [
      {
        data: salesData.values,
        backgroundColor: [
          theme.palette.sales.direct,
          theme.palette.sales.affiliate,
          theme.palette.sales.sponsored,
          theme.palette.sales.email,
        ],
        spacing: 12,
        borderRadius: 50, // Creates the highly rounded "pill" effect
        borderWidth: 0,
      },
    ],
  };

  const options: any = {
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        displayColors: false, // Hides the color swatch in the tooltip
        backgroundColor: "rgba(28, 28, 28, 0.9)",
        bodyFont: {
          size: theme.typography.h4.fontSize,
          weight: "600",
        },
        borderRadius: 12,
        padding: {
          top: 8,
          bottom: 8,
          left: 16,
          right: 16,
        },
        yAlign: "bottom",
        xAlign: "center",
        caretSize: 0,
        // Custom tooltip to always show the main value on hover
        callbacks: {
          title: () => "",
          label: (value: any) => {
            console.log(value);
            return `${value.formattedValue}%`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Stack
      bgcolor="background.paper"
      boxShadow="none"
      p={6}
      borderRadius={4}
      spacing={4}
    >
      <Typography variant="h4">Total Sales </Typography>
      <Stack>
        <Doughnut data={data} options={options} />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={12}
      >
        <Stack spacing={4}>
          {salesData.labels.map((label) => {
            const bgColor = label
              .toLowerCase()
              .split("-")
              .join("") as keyof typeof theme.palette.sales;
            return (
              <Stack key={label + "_info"} direction="row">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    width={6}
                    height={6}
                    borderRadius="50%"
                    sx={{ backgroundColor: theme.palette.sales[bgColor] }}
                  />
                  <Typography variant="body2">{label}</Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>

        <Stack spacing={4}>
          {salesData.values.map((value, index) => {
            return (
              <Typography key={value + index + "_value"} variant="body2">
                {value}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default TotalSales;
