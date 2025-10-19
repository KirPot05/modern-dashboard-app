import Navbar from "@/components/common/navbar";
import RightBar from "@/components/common/rightbar";
import Sidebar from "@/components/common/sidebar";
import { Stack } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";

function PageLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isRightBarOpen, setRightbarOpen] = useState(true);

  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      {isSidebarOpen && <Sidebar />}

      <Stack sx={{ flexGrow: 1, minWidth: 0 }}>
        <Navbar
          setSidebarOpen={setIsSidebarOpen}
          setRightbarOpen={setRightbarOpen}
        />
        <Outlet />
      </Stack>

      {isRightBarOpen && <RightBar />}
    </Stack>
  );
}

export default PageLayout;
