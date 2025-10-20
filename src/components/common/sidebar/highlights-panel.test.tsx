import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HighlightsPanel from "./highlights-panel";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

const mockFavorites = ["Favorite 1", "Favorite 2"];
const mockRecentlyViewed = ["Recent 1", "Recent 2"];

describe("HighlightsPanel", () => {
  it("should render the panel with favorites and recently viewed sections", () => {
    renderWithProviders(
      <HighlightsPanel
        favorites={mockFavorites}
        recentlyViewed={mockRecentlyViewed}
      />
    );

    expect(screen.getByText("Favorites")).toBeInTheDocument();
    expect(screen.getByText("Recently")).toBeInTheDocument();
  });

  it("should show favorites by default", () => {
    renderWithProviders(
      <HighlightsPanel
        favorites={mockFavorites}
        recentlyViewed={mockRecentlyViewed}
      />
    );

    expect(screen.getByText("Favorite 1")).toBeInTheDocument();
    expect(screen.getByText("Favorite 2")).toBeInTheDocument();
    expect(screen.queryByText("Recent 1")).not.toBeInTheDocument();
  });

  it("should switch to recently viewed when the tab is clicked", () => {
    renderWithProviders(
      <HighlightsPanel
        favorites={mockFavorites}
        recentlyViewed={mockRecentlyViewed}
      />
    );

    fireEvent.click(screen.getByText("Recently"));

    expect(screen.getByText("Recent 1")).toBeInTheDocument();
    expect(screen.getByText("Recent 2")).toBeInTheDocument();
    expect(screen.queryByText("Favorite 1")).not.toBeInTheDocument();
  });
});
