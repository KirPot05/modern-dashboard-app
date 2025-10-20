import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import PageLayout from "./layout";
import { ThemeContextProvider } from "./context/ThemeContext";

const HomePage = lazy(() => import("./pages/home"));
const OrdersPage = lazy(() => import("./pages/orders"));

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<PageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="orders" element={<OrdersPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeContextProvider>
    </>
  );
}

export default App;
