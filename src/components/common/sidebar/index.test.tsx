import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Sidebar from ".";

vi.mock("./profile-picture", () => ({
  default: () => <div data-testid="profile-picture" />,
}));

describe("Sidebar Component rendered", () => {
  it("should render Sidebar component", () => {
    render(<Sidebar />);

    expect(screen.getByTestId("profile-picture")).toBeInTheDocument();

    // // Check key text content
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
    expect(screen.getByText(/Recently/i)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });
});
