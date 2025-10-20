import { Stack } from "@mui/material";
import ProfilePicture from "./profile-picture";
import SidebarSection from "./sidebar-section";
import { fetchSidebarData } from "@/api/";
import HighlightsPanel from "./highlights-panel";

function Sidebar() {
  const { sidebarSections, highlights } = fetchSidebarData();

  return (
    <Stack
      px={4}
      py={5}
      spacing={4}
      border={1}
      borderColor="divider"
      width={{ xs: "100%", md: "20%" }}
      height="100vh"
      top={0}
      position="sticky"
      sx={{ overflowY: "auto", scrollbarWidth: "none" }}
    >
      <ProfilePicture />
      <HighlightsPanel
        favorites={highlights.favorites}
        recentlyViewed={highlights.recentlyViewed}
      />

      {sidebarSections.map(({ items, title }) => (
        <SidebarSection key={title} title={title} items={items} />
      ))}
    </Stack>
  );
}

export default Sidebar;
