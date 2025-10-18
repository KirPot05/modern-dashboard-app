import { useThemeContext } from "@/context/ThemeContext";
import { Box, Button } from "@mui/material";

function HomePage() {
  const { toggleColorMode } = useThemeContext();

  return (
    <Box>
      <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
    </Box>
  );
}

export default HomePage;
