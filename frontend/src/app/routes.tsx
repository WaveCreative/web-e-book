import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Landing from "../pages/landing/Landing";
import Catalog from "../pages/catalog/Catalog";
import NotFound from "../pages/404/NotFound";
import Login from "../features/auth/pages/Login";
import Dashboard from "../features/books/pages/Dashboard";
import Library from "../features/books/pages/Library";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      // Guest routes
      { path: "/", element: <Landing /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/login", element: <Login /> },

      // Auth routes
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/library", element: <Library /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
