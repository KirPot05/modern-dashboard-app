import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Rightbar from "./index";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Rightbar", () => {
  it("should render the rightbar with notifications and activities", () => {
    renderWithProviders(<Rightbar />);

    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Activities")).toBeInTheDocument();

    // Check for a few items to ensure they are rendered
    expect(
      screen.getAllByText("You have a bug that needs to be fixed.")
    ).not.toHaveLength(0);
    expect(screen.getByText("New user registered")).toBeInTheDocument();
    expect(
      screen.getByText("Andi Lane subscribed to you.")
    ).toBeInTheDocument();
  });
});
