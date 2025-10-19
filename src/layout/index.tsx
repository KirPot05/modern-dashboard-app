import Navbar from "@/components/common/navbar";
import RightBar from "@/components/common/rightbar";
import Sidebar from "@/components/common/sidebar";
import { Stack } from "@mui/material";
import { Outlet } from "react-router";

function PageLayout() {
  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Sidebar />

      <Stack>
        <Navbar />
        <Outlet />
      </Stack>

      <RightBar />
    </Stack>
  );
}

export default PageLayout;
