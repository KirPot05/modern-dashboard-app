import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

const baseThemeOptions: ThemeOptions = {
  palette: {
    common: { black: "#1c1c1c", white: "#ffffff" },
  },
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),

    h4: {
      fontSize: 14,
      fontWeight: 600,
    },

    body1: {
      fontSize: 14,
      fontWeight: 400,
    },

    body2: {
      fontSize: 12,
      fontWeight: 400,
    },
  },

  spacing: 4,
};

export const lightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#e3f5ff",
    },

    text: {
      primary: "#1c1c1c",
      secondary: "rgba(28, 28, 28, 0.4)",
      disabled: "rgba(28, 28, 28, 0.2)",
    },

    background: {
      default: "#ffffff",
      paper: "#f7f9fb",
    },
  },
});

export const darkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#1c1c1c",
      paper: "#282828",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
});
