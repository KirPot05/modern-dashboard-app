import Sidebar from "@/components/common/sidebar";
import { Stack } from "@mui/material";
import { Outlet } from "react-router";

function PageLayout() {
  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Sidebar />
      <Outlet />
    </Stack>
  );
}

export default PageLayout;
