import { IconButton, Stack, useTheme, Breadcrumbs, Link } from "@mui/material";
import SearchBar from "./searchbar";
import { useThemeContext } from "@/context/ThemeContext";
import type React from "react";

type Props = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRightbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ setSidebarOpen, setRightbarOpen }: Props) {
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();

  return (
    <Stack
      direction="row"
      px={7}
      py={5}
      sx={{
        borderBottomColor: theme.palette.divider,
        backgroundColor: theme.palette.background.default,
      }}
      borderBottom={1}
      justifyContent="space-between"
      position="sticky"
      top={0}
    >
      <Stack direction="row" spacing={4} alignItems="center">
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <img
            src="/assets/icons/sidebar-icon.svg"
            alt="sidebar open icon"
            height={20}
            style={{
              filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
            }}
          />
        </IconButton>

        <IconButton sx={{ padding: 0 }}>
          <img
            src="/assets/icons/star-icon.svg"
            alt="star icon"
            height={20}
            width={20}
            style={{
              filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
            }}
          />
        </IconButton>

        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="text.secondary" href="/" marginX={2}>
            Dashboards
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
            marginX={2}
          >
            Default
          </Link>
        </Breadcrumbs>
      </Stack>

      <Stack direction="row" spacing={4} alignItems="center">
        <SearchBar />

        <IconButton sx={{ padding: 0 }} onClick={toggleColorMode}>
          <img
            src="/assets/icons/sun-icon.svg"
            alt="sun open icon"
            height={20}
            style={{
              filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
            }}
          />
        </IconButton>
        <IconButton sx={{ padding: 0 }}>
          <img
            src="/assets/icons/clock-reverse-icon.svg"
            alt="clock reverse icon"
            height={20}
            style={{
              filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
            }}
          />
        </IconButton>
        <IconButton sx={{ padding: 0 }}>
          <img
            src="/assets/icons/bell-icon.svg"
            alt="bell icon"
            height={20}
            style={{
              filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
            }}
          />
        </IconButton>
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => setRightbarOpen((prev) => !prev)}
        >
          <img
            src="/assets/icons/sidebar-icon.svg"
            alt="sidebar icon"
            height={20}
            style={{
              filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
            }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default Navbar;
