import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import AppLayout from "../components/layout/AppLayout";
import PublicLayout from "../components/layout/PublicLayout";

import Landing from "../pages/landing/Landing";
import NotFound from "../pages/404/NotFound";
import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";

import App from "../pages/app/Landing";
import GuestLayout from "../components/layout/GuestLayout";
import Profile from "../pages/app/profile/Profile";
import ProfileSectionPage from "../pages/app/profile/ProfileSectionPage";
import Reading from "../pages/app/profile/reading/Reading";
import Koleksi from "../pages/app/profile/koleksi/Koleksi";
import Langganan from "../pages/app/profile/langganan/Langganan";
import Transaksi from "../pages/app/profile/transaksi/Transaksi";
import Settings from "../pages/app/profile/setting/setting";
import HelpCenter from "../pages/app/profile/helpcenter/HelpCenter";

import {
  FaBookReader,
} from "react-icons/fa";
import {
  GrHistory
} from "react-icons/gr";
import {
  FaBookmark
} from "react-icons/fa6";
import {
  RiSettings4Fill
} from "react-icons/ri"
import Help from "../assets/Help";
import Bag from "../assets/bag"


export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <PublicLayout />,
        children: [{ path: "/", element: <Landing /> }],
      },
      {
        element: <GuestLayout />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/signup", element: <Signup /> },
        ],
      },
      {
        element: <AppLayout />,
        children: [
          { path: "/landing", element: <App /> },
          { path: "/profile", element: <Profile /> },
          {
            path: "/profile/reading",
            element: (
              <ProfileSectionPage
                logo={FaBookReader}
                icon="Reading"
                title="Lanjutkan membaca buku"
              >
                <Reading />
              </ProfileSectionPage>
            ),
          },
          {
            path: "/profile/koleksi",
            element: (
              <ProfileSectionPage
                logo= {FaBookmark}
                icon="Bookmark"
                title="Lihat Koleksi buku anda"
              >
                <Koleksi />
              </ProfileSectionPage>
            ),
            
          },
          { 
            path: "/profile/langganan",
            element: (
              <ProfileSectionPage
                logo={Bag}
                icon="Langganan"
                title="Kelola paket langganan dan nikmati fitur premium Ebook.com"
              >
                <Langganan/>
              </ProfileSectionPage>
            )
          },
          {
            path: "/profile/transaksi",
            element: (
              <ProfileSectionPage
                logo={GrHistory}
                icon="Riwayat Transaksi"
                title="Lihat riwayat transaksi kamu"
              >
                <Transaksi />
              </ProfileSectionPage>
            ),
          },
          {
            path: "/profile/setting",
            element: (
              <ProfileSectionPage
                logo={RiSettings4Fill}
                icon="Pengaturan"
                title="Sesuaikan pengaturan agar kamu nyaman"
              >
                <Settings />
              </ProfileSectionPage>
            ),
          },
          {
            path: "/profile/helpcenter",
            element: (
              <ProfileSectionPage
                logo={Help}
                icon="Help Center"
                title="Laporkan Permasalahan Kamu"
              >
                <HelpCenter />
              </ProfileSectionPage>
            ),
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
