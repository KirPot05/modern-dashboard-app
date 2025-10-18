// Implementation for fetching sidebar data
export function fetchSidebarData() {
  const sidebarSections = [
    {
      title: "Dashboards",
      items: [
        { label: "Default", iconUrl: "/assets/icons/chart-pie-slice.svg" },
        { label: "eCommerce", iconUrl: "/assets/icons/shopping-bag-icon.svg" },
        { label: "Projects", iconUrl: "/assets/icons/folder-notch-icon.svg" },
        {
          label: "Online Courses",
          iconUrl: "/assets/icons/book-open-icon.svg",
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          label: "User Profile",
          iconUrl: "/assets/icons/identification-badge.svg",
          nestedPages: [
            { label: "Overview", url: "/overview" },
            { label: "Projects", url: "/projects" },
            { label: "Campaigns", url: "/campaigns" },
            { label: "Documents", url: "/documents" },
            { label: "Followers", url: "/followers" },
          ],
        },

        { label: "Account", iconUrl: "/assets/icons/identification-card.svg" },
        { label: "Corporate", iconUrl: "/assets/icons/users-three.svg" },
        { label: "Blog", iconUrl: "/assets/icons/notebook.svg" },
        { label: "Social", iconUrl: "/assets/icons/chats-tear-drop.svg" },
      ],
    },
  ];
  const highlights = {
    favorites: ["Overview", "Projects"],
    recentlyViewed: ["Campaigns", "Documents"],
  };

  return { sidebarSections, highlights };
}
