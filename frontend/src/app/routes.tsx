import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Landing from "../pages/landing/Landing";
import Catalog from "../pages/catalog/Catalog";
import NotFound from "../pages/404/NotFound";
import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";
import Dashboard from "../pages/app/dashboard/Dashboard";
import Library from "../pages/app/library/Library";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/library", element: <Library /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
