import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProfilePicture from "./profile-picture";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("ProfilePicture", () => {
  it("should render the profile picture and name", () => {
    renderWithProviders(<ProfilePicture />);

    expect(screen.getByAltText("Profile Picture")).toBeInTheDocument();
    expect(screen.getByText("ByeWind")).toBeInTheDocument();
  });
});
