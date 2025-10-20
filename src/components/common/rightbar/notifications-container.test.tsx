import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ListContainer from "./notifications-container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

const mockItems = [
  {
    id: 1,
    text: "Item 1",
    timestamp: new Date(),
    icon: <img src="test.png" alt="icon 1" />,
  },
  {
    id: 2,
    text: "Item 2",
    timestamp: new Date(),
    icon: <img src="test.png" alt="icon 2" />,
  },
];

describe("ListContainer", () => {
  it("should render the title", () => {
    renderWithProviders(<ListContainer title="Test Title" items={[]} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should render a list of items", () => {
    renderWithProviders(<ListContainer title="Test Title" items={mockItems} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByAltText("icon 1")).toBeInTheDocument();
    expect(screen.getByAltText("icon 2")).toBeInTheDocument();
  });

  it("should render nothing if there are no items", () => {
    const { container } = renderWithProviders(
      <ListContainer title="Test Title" items={[]} />
    );
    expect(container.querySelector("li")).toBeNull();
  });
});
