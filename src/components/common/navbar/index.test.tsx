import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "./index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext as ThemeContext } from "@/context/ThemeContext";
import type React from "react";

const theme = createTheme();

const mockToggleColorMode = vi.fn();

const renderWithProviders = (
  _ui: React.ReactElement,
  {
    setSidebarOpen = vi.fn(),
    setRightbarOpen = vi.fn(),
  }: {
    setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    setRightbarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  } = {}
) => {
  return render(
    <ThemeContext.Provider
      value={{
        mode: "light",
        toggleColorMode: mockToggleColorMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <Navbar
          setSidebarOpen={setSidebarOpen}
          setRightbarOpen={setRightbarOpen}
        />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

describe("Navbar", () => {
  it("should render the navbar with all elements", () => {
    renderWithProviders(
      <Navbar setSidebarOpen={vi.fn()} setRightbarOpen={vi.fn()} />
    );

    expect(screen.getByAltText("sidebar open icon")).toBeInTheDocument();
    expect(screen.getByAltText("star icon")).toBeInTheDocument();
    expect(screen.getByText("Dashboards")).toBeInTheDocument();
    expect(screen.getByText("Default")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument(); // SearchBar
    expect(screen.getByAltText("sun open icon")).toBeInTheDocument();
    expect(screen.getByAltText("clock reverse icon")).toBeInTheDocument();
    expect(screen.getByAltText("bell icon")).toBeInTheDocument();
    expect(screen.getByAltText("sidebar icon")).toBeInTheDocument();
  });

  it.skip("should call setSidebarOpen when the sidebar icon is clicked", () => {
    const setSidebarOpen = vi.fn();
    renderWithProviders(
      <Navbar setSidebarOpen={setSidebarOpen} setRightbarOpen={vi.fn()} />
    );

    const sidebarButton = screen.getByLabelText("open sidebar");
    fireEvent.click(sidebarButton);
    expect(setSidebarOpen).toHaveBeenCalledTimes(1);
  });

  it.skip("should call setRightbarOpen when the sidebar icon is clicked", () => {
    const setRightbarOpen = vi.fn();
    renderWithProviders(
      <Navbar setSidebarOpen={vi.fn()} setRightbarOpen={setRightbarOpen} />
    );

    const rightbarButton = screen.getByLabelText("open rightbar");
    fireEvent.click(rightbarButton);
    expect(setRightbarOpen).toHaveBeenCalledTimes(1);
  });

  it("should call toggleColorMode when the sun icon is clicked", () => {
    renderWithProviders(
      <Navbar setSidebarOpen={vi.fn()} setRightbarOpen={vi.fn()} />
    );

    const sunButton = screen.getByAltText("sun open icon");
    fireEvent.click(sunButton);
    expect(mockToggleColorMode).toHaveBeenCalledTimes(1);
  });
});
