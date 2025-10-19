import { Route, Routes } from "react-router";
import PageLayout from "./layout";
import HomePage from "./pages/home";
import { ThemeContextProvider } from "./context/ThemeContext";
import OrdersPage from "./pages/orders";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="orders" element={<OrdersPage />} />
          </Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
