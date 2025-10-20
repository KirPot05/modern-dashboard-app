import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ListItem from "./list-item";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { formatTimestamp } from "@/utils/date";

const theme = createTheme();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("ListItem", () => {
  it("should render the list item with a title", () => {
    renderWithProviders(<ListItem id={1} title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should render the timestamp if provided", () => {
    const timestamp = new Date();
    renderWithProviders(
      <ListItem id={1} title="Test Title" timestamp={timestamp} />
    );
    expect(screen.getByText(formatTimestamp(timestamp))).toBeInTheDocument();
  });

  it("should not render the timestamp if not provided", () => {
    renderWithProviders(<ListItem id={1} title="Test Title" />);
    const timestamp = new Date();
    expect(screen.queryByText(formatTimestamp(timestamp))).toBeNull();
  });

  it("should render an icon if provided", () => {
    const icon = <img src="test.png" alt="test icon" />;
    renderWithProviders(<ListItem id={1} title="Test Title" icon={icon} />);
    expect(screen.getByAltText("test icon")).toBeInTheDocument();
  });

  it("should apply a background to the icon if imageBackgroundRequired is true", () => {
    const icon = <img src="test.png" alt="test icon" />;
    renderWithProviders(
      <ListItem id={1} title="Test Title" icon={icon} imageBackgroundRequired />
    );
    const iconContainer = screen.getByTestId("icon-container");
    expect(iconContainer).toHaveStyle(
      `background-color: ${theme.palette.primary.main}`
    );
  });

  it("should not apply a background to the icon if imageBackgroundRequired is false", () => {
    const icon = <img src="test.png" alt="test icon" />;
    renderWithProviders(<ListItem id={1} title="Test Title" icon={icon} />);
    const iconContainer = screen.getByTestId("icon-container");
    expect(iconContainer).toHaveStyle("background-color: rgba(0, 0, 0, 0)");
  });
});
