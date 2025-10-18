import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  useTheme,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Props = {
  iconUrl: any;
  label: string;
  nestedPages?: Array<{ label: string; url?: string }>;
};

function SidebarSectionItem({ iconUrl, label, nestedPages }: Props) {
  const theme = useTheme();
  const [displayNestedPages, setDisplayNestedPages] = useState(false);

  return (
    <Stack
      borderRadius={2}
      spacing={1}
      position="relative"
      sx={{
        ":hover": {
          cursor: "pointer",
        },
        "&:hover .section-item-header": {
          backgroundColor: theme.palette.action.hover,
        },
        "&:hover .hoverBar": {
          opacity: 1,
        },
        "&:hover .chevronIcon": {
          opacity: 0,
        },
        transition: "background-color 0.2s ease-in-out",
      }}
      onClick={() => setDisplayNestedPages((prev) => !prev)}
    >
      <Stack
        direction="row"
        alignItems="center"
        className="section-item-header"
        borderRadius={2}
        px={2}
        py={1}
      >
        <Stack>
          <Box
            className="hoverBar"
            sx={{
              opacity: 0,
              position: "absolute",
              width: 4,
              height: 16,
              top: 8,
              left: 0,
              transition: "opacity 0.2s ease-in-out",
            }}
            borderRadius={1}
            bgcolor={theme.palette.text.primary}
          />

          {displayNestedPages ? (
            <KeyboardArrowDownIcon fontSize="small" color="disabled" />
          ) : (
            <ChevronRightIcon
              fontSize="small"
              className="chevronIcon"
              color="disabled"
            />
          )}
        </Stack>
        <Stack direction="row" spacing={1}>
          {iconUrl && (
            <img
              src={iconUrl}
              style={{
                filter:
                  theme.palette.mode === "dark" ? "invert(1)" : "invert(0)", // Apply filter based on theme mode for svgs as the icons provided were not available
              }}
              alt={label}
            />
          )}
          <Typography variant="body1">{label}</Typography>
        </Stack>
      </Stack>
      {nestedPages && displayNestedPages && nestedPages.length > 0 && (
        <List>
          {nestedPages.map((page, index) => (
            <ListItemButton key={index} sx={{ py: 0.5, px: 1, pl: 14 }}>
              <ListItemText
                primary={page.label}
                slotProps={{ primary: { variant: "body1" } }}
              />
            </ListItemButton>
          ))}
        </List>
      )}
    </Stack>
  );
}

export default SidebarSectionItem;
