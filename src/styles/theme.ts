import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    sales: {
      direct: string;
      affiliate: string;
      sponsored: string;
      email: string;
    };
  }
  interface PaletteOptions {
    sales?: {
      direct: string;
      affiliate: string;
      sponsored: string;
      email: string;
    };
  }
}

const baseThemeOptions: ThemeOptions = {
  palette: {
    common: { black: "#1c1c1c", white: "#ffffff" },
    divider: "rgba(28, 28, 28, 0.1)",
  },
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
    h2: {
      fontSize: 24,
      fontWeight: 600,
    },
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
    secondary: {
      main: "#e5ecf6",
    },
    info: { main: "#A8C5DA", light: "#cfdfea" },
    action: { hover: "rgba(28, 28, 28, 0.1)" },
    text: {
      primary: "#1c1c1c",
      secondary: "rgba(28, 28, 28, 0.4)",
      disabled: "rgba(28, 28, 28, 0.2)",
    },
    background: {
      default: "#ffffff",
      paper: "#f7f9fb",
    },
    sales: {
      direct: "#1c1c1c",
      affiliate: "#98ec98",
      sponsored: "#a8bdf9",
      email: "#a7e4fa",
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
      main: "#e5ecf6",
    },
    action: { hover: "#333333" },
    info: { main: "#a8c5da", light: "#677680" },
    background: {
      default: "#1c1c1c",
      paper: "#282828",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    sales: {
      direct: "#d0b3ff",
      affiliate: "#98ec98",
      sponsored: "#a8bdf9",
      email: "#a7e4fa",
    },
  },
});
