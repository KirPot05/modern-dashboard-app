import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router";

function PageLayout() {
  return (
    <Box>
      <Box bgcolor="background.paper">
        <Typography variant="h4">Page Title</Typography>
      </Box>
      <Outlet />
    </Box>
  );
}

export default PageLayout;
