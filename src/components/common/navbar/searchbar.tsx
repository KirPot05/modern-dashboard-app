import { Box, InputBase, Stack, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const focusInputNextFrame = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => inputRef.current?.focus());
    });
  };

  const handleExpand = () => {
    if (!expanded) setExpanded(true);
    focusInputNextFrame();
  };

  // Click-away (mousedown + touchstart)
  useEffect(() => {
    const onDocPointer = (e: MouseEvent | TouchEvent) => {
      if (!expanded) return;
      const el = rootRef.current;
      if (el && e.target instanceof Node && !el.contains(e.target)) {
        setExpanded(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("mousedown", onDocPointer);
    document.addEventListener("touchstart", onDocPointer, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocPointer);
      document.removeEventListener("touchstart", onDocPointer);
    };
  }, [expanded]);

  // Cmd/Ctrl + / to focus; Esc to collapse
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isSlash = e.key === "/" || e.code === "Slash";
      if ((e.metaKey || e.ctrlKey) && isSlash) {
        e.preventDefault();
        setExpanded(true);
        focusInputNextFrame();
      }
      if (e.key === "Escape" && expanded) {
        setExpanded(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <Box
      ref={rootRef}
      role="button"
      tabIndex={0}
      onClick={handleExpand}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleExpand();
        }
      }}
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "#FFFFFF1A" : "#1C1C1C0D",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        px: 1.5,
        py: 0.5,
        width: expanded ? 320 : 160,
        color: theme.palette.text.disabled,
        cursor: "text",
        transition: "width 200ms ease, box-shadow 200ms ease",
        boxShadow: expanded ? 3 : "none",
        outline: "none",
        "&:focus-visible": {
          boxShadow: (t) => `0 0 0 3px ${t.palette.action.focus}`,
        },
      }}
    >
      <SearchIcon
        sx={{ fontSize: 18, mr: 1, color: theme.palette.text.disabled }}
      />
      <InputBase
        inputRef={inputRef}
        placeholder="Search"
        readOnly={!expanded}
        sx={{
          flex: 1,
          fontSize: 14,
          color: theme.palette.text.secondary,
          pointerEvents: expanded ? "auto" : "none",
          "& .MuiInputBase-input::placeholder": {
            color: theme.palette.text.disabled,
            opacity: 1,
          },
        }}
        inputProps={{
          "aria-label": "search",
        }}
      />
      <Stack direction="row" alignItems="center" spacing={0.5} sx={{ ml: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.disabled, lineHeight: 1 }}
        >
          ⌘
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.disabled, lineHeight: 1 }}
        >
          /
        </Typography>
      </Stack>
    </Box>
  );
}
