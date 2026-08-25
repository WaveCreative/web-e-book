import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminRouteGuard from "../components/layout/AdminRouteGuard";
import AdminShell from "../components/layout/AdminShell";
import AdminLogin from "../features/auth/pages/AdminLogin";
import Dashboard from "../pages/dashboard/Dashboard";
import Books from "../pages/management/books/Books";
import Collections from "../pages/management/collections/Collections";
import Genres from "../pages/management/genres/Genres";
import Reading from "../pages/management/reading/Reading";
import Subscriptions from "../pages/management/subscriptions/Subscriptions";
import Transactions from "../pages/management/transactions/Transactions";
import Users from "../pages/management/users/Users";

export const adminRouter = createBrowserRouter([
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    element: <AdminRouteGuard />,
    children: [
      {
        path: "admin",
        element: <AdminShell />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "books", element: <Books /> },
          { path: "collections", element: <Collections /> },
          { path: "genres", element: <Genres /> },
          { path: "reading", element: <Reading /> },
          { path: "subscriptions", element: <Subscriptions /> },
          { path: "transactions", element: <Transactions /> },
          { path: "users", element: <Users /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/admin/login" replace />,
  },
]);
