import { formatTimestamp } from "@/utils/date";
import { Stack, Typography, useTheme } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  id: string | number;
  title: string;
  timestamp?: Date;
  icon?: ReactNode;
  imageBackgroundRequired?: boolean;
};

function ListItem({
  title,
  timestamp,
  icon,
  imageBackgroundRequired = false,
}: Props) {
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Stack
        borderRadius={2}
        sx={{
          backgroundColor: imageBackgroundRequired
            ? theme.palette.primary.main
            : "transparent",
        }}
        p={1}
        data-testid="icon-container"
      >
        {icon}
      </Stack>
      <Stack sx={{ minWidth: 0 }}>
        <Typography
          variant="body1"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        {timestamp && (
          <Typography variant="body2" color="text.secondary">
            {formatTimestamp(timestamp)}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default ListItem;
