import { render, screen, fireEvent } from "@testing-library/react";
import SidebarSectionItem from "./sidebar-section-item";

describe("SidebarSectionItem", () => {
  it("renders with an icon and label", () => {
    const iconUrl = "https://example.com/icon.png";
    const label = "Test Label";
    render(<SidebarSectionItem iconUrl={iconUrl} label={label} />);

    // Check if the icon is rendered correctly
    const iconElement = screen.getByAltText(label);
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", iconUrl);

    // Check if the label is rendered correctly
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it("renders nested pages if provided", () => {
    const iconUrl = "https://example.com/icon.png";
    const label = "Test Label";
    const nestedPages = [
      { label: "Nested Page 1", url: "/nested-1" },
      { label: "Nested Page 2", url: "/nested-2" },
    ];

    render(
      <SidebarSectionItem
        iconUrl={iconUrl}
        label={label}
        nestedPages={nestedPages}
      />
    );

    // Click the item to show nested pages
    fireEvent.click(screen.getByText(label));

    // Check if nested pages are rendered
    nestedPages.forEach((page) => {
      const pageElement = screen.getByText(page.label);
      expect(pageElement).toBeInTheDocument();
    });
  });

  it("does not render nested pages if none are provided", () => {
    const iconUrl = "https://example.com/icon.png";
    const label = "Test Label";

    render(<SidebarSectionItem iconUrl={iconUrl} label={label} />);

    // Check if no nested pages are rendered
    const nestedList = screen.queryByRole("list");
    expect(nestedList).toBeNull();
  });
});
