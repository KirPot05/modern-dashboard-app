import {
  IconButton,
  TextField,
  InputAdornment,
  useTheme,
  Stack,
} from "@mui/material";
import {
  Add as AddIcon,
  FilterList as FilterListIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

type Props = {};

function Toolbar({}: Props) {
  const theme = useTheme();

  return (
    <Stack
      position="static"
      color="default"
      sx={{ borderRadius: 2, backgroundColor: "background.paper" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        // spacing={2}
        sx={{ p: 2 }}
      >
        {/* Left side icons */}
        <Stack direction="row" spacing={1}>
          <IconButton color="inherit" aria-label="add">
            <AddIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="filter list">
            <FilterListIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="sort">
            <img
              src="/assets/icons/arrow-up-down.svg"
              alt="Sort"
              style={{
                filter:
                  theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
              }}
            />
          </IconButton>
        </Stack>

        {/* <Box sx={{ flexGrow: 1 }} /> */}

        {/* Right side search bar */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: 2,
            },
          }}
          sx={{ width: { xs: "150px", sm: "250px" } }}
        />
      </Stack>
    </Stack>
  );
}

export default Toolbar;
