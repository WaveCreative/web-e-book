import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import AppLayout from "../components/layout/AppLayout";

import Landing from "../pages/landing/Landing";
import NotFound from "../pages/404/NotFound";
import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";

import App from "../pages/app/Landing";
import CartPage from "../pages/app/cart/CartPage";
import Voucher from "../pages/app/voucher/Voucher";
import Berhasil from "../pages/app/pesanan/berhasil";
import Proses from "../pages/app/pesanan/proses";
import GuestLayout from "../components/layout/GuestLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      // guest
      {
        element: <GuestLayout />,
        children: [
          { path: "/", element: <Landing /> },
          { path: "/login", element: <Login /> },
          { path: "/signup", element: <Signup /> },
        ],
      },

      // app
      {
        element: <AppLayout />,
        children: [
          { path: "/landing", element: <App /> },
          { path: "/cart", element: <CartPage /> },
          { path: "/voucher", element: <Voucher /> },
          { path: "/proses", element: <Proses /> },
          { path: "/berhasil", element: <Berhasil /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);