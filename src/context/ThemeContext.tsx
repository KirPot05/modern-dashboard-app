import React, { createContext, useState, useMemo, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/styles/theme";
import { CssBaseline } from "@mui/material";

interface ColorModeContextType {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: "light",
});

export const useThemeContext = () => React.useContext(ColorModeContext);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    let savedMode: string | null = null;
    try {
      savedMode = localStorage.getItem("colorMode");
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
    } else {
      setMode(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  const colorMode = useMemo<ColorModeContextType>(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          try {
            localStorage.setItem("colorMode", newMode);
          } catch (error) {
            console.error("Could not access localStorage:", error);
          }
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};
