import { Stack, Typography } from "@mui/material";

type Props = {};

function ProfilePicture({}: Props) {
  return (
    <Stack direction="row" alignItems="center" p={1} spacing={2} width="100%">
      <img
        src="/assets/icons/profile-pic.png"
        height={24}
        width={24}
        loading="lazy"
        alt="Profile Picture"
      />
      <Typography variant="body1">ByeWind</Typography>
    </Stack>
  );
}

export default ProfilePicture;
