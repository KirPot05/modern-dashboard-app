import { Route, Routes } from "react-router";
import PageLayout from "./layout";
import HomePage from "./pages/home";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
