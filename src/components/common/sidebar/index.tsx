import { Box, Stack, Typography } from "@mui/material";
import ProfilePicture from "./profile-picture";

// type Props = { children?: React.ReactNode };

function Sidebar() {
  return (
    <Stack
      px={4}
      py={5}
      spacing={4}
      border={1}
      borderColor="divider"
      width={{ xs: "100%", md: "20%" }}
    >
      <ProfilePicture />

      <Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          {" "}
          <Typography color="text.secondary" variant="body1">
            Favorites
          </Typography>
          <Typography color="text.disabled" variant="body1">
            Recently
          </Typography>{" "}
        </Stack>

        <Stack
          direction="row"
          px={2}
          py={1}
          spacing={2}
          alignItems="center"
          borderRadius={2}
        >
          <Box
            width={6}
            height={6}
            borderRadius="50%"
            sx={{ backgroundColor: "text.disabled" }}
          />
          <Typography variant="body1"> Overview </Typography>
        </Stack>

        <Stack direction="row" px={2} py={1} spacing={2} alignItems="center">
          <Box
            width={6}
            height={6}
            borderRadius="50%"
            sx={{ backgroundColor: "text.disabled" }}
          />
          <Typography variant="body1"> Projects </Typography>
        </Stack>
      </Stack>

      {/* {children} */}
    </Stack>
  );
}

export default Sidebar;
