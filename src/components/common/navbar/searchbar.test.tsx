import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SearchBar from "./searchbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("SearchBar", () => {
  it("should render the search bar", () => {
    renderWithProviders(<SearchBar />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should expand on click", () => {
    renderWithProviders(<SearchBar />);
    const searchbarContainer = screen.getByRole("button");
    fireEvent.click(searchbarContainer);
    expect(searchbarContainer).toHaveStyle("width: 320px");
  });

  it("should focus the input when expanded", async () => {
    renderWithProviders(<SearchBar />);
    const searchbarContainer = screen.getByRole("button");
    const searchbar = screen.getByRole("textbox");
    fireEvent.click(searchbarContainer);
    await waitFor(() => expect(searchbar).toHaveFocus());
  });

  it("should collapse on click-away", () => {
    renderWithProviders(<SearchBar />);
    const searchbarContainer = screen.getByRole("button");
    fireEvent.click(searchbarContainer);
    expect(searchbarContainer).toHaveStyle("width: 320px");
    fireEvent.mouseDown(document);
    expect(searchbarContainer).toHaveStyle("width: 160px");
  });

  it("should focus with Ctrl + /", async () => {
    renderWithProviders(<SearchBar />);
    const searchbar = screen.getByRole("textbox");
    fireEvent.keyDown(document, { key: "/", ctrlKey: true });
    await waitFor(() => expect(searchbar).toHaveFocus());
  });

  it("should collapse on Escape", () => {
    renderWithProviders(<SearchBar />);
    const searchbarContainer = screen.getByRole("button");
    fireEvent.click(searchbarContainer);
    expect(searchbarContainer).toHaveStyle("width: 320px");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(searchbarContainer).toHaveStyle("width: 160px");
  });
});
