import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Landing from "../pages/landing/Landing";
import NotFound from "../pages/404/NotFound";
import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";
import App from "../pages/app/Landing";
import CartPage from "../pages/app/cart/CartPage";
import Voucher from "../pages/app/voucher/Voucher";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/landing", element: <App /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/voucher", element: <Voucher /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
