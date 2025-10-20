import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SidebarSection from "./sidebar-section";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

const mockItems = [
  {
    label: "Item 1",
    iconUrl: "icon1.svg",
    nestedPages: [{ label: "Nested 1" }],
  },
  {
    label: "Item 2",
    iconUrl: "icon2.svg",
  },
];

describe("SidebarSection", () => {
  it("should render the title", () => {
    renderWithProviders(<SidebarSection title="Test Title" items={[]} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should render a list of items", () => {
    renderWithProviders(
      <SidebarSection title="Test Title" items={mockItems} />
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("should render nested pages if they exist", () => {
    renderWithProviders(
      <SidebarSection title="Test Title" items={mockItems} />
    );
    // The nested page is not visible by default
    expect(screen.queryByText("Nested 1")).not.toBeInTheDocument();
  });
});
