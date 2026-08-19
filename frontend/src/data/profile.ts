import {
  Heart
} from "lucide-react"

import {
  FaBookOpen, FaBookReader,
} from "react-icons/fa";
import {
  GrHistory
} from "react-icons/gr";
import {
  FaBookmark
} from "react-icons/fa6";
import {
   AiFillClockCircle 
} from "react-icons/ai";
import {
  GoGraph
} from "react-icons/go";
import {
  RiSettings4Fill
} from "react-icons/ri"
import Help from "../assets/Help";
import Bag from "../assets/bag"



import type {
  GenreStatistic,
  ProfileSidebarItem,
  ProfileStat,
  RecommendedBookCard,
} from "../types/profile";

/* ===========================
   SIDEBAR
=========================== */

export const profileSidebarItems: ProfileSidebarItem[] = [
  {
    id: 1,
    label: "Lanjutkan Membaca",
    to: "/profile/reading",
    icon: FaBookReader,
  },
  {
    id: 2,
    label: "Koleksi Saya",
    to: "/profile/koleksi",
    icon: FaBookmark,
  },
  {
    id: 3,
    label: "Langganan",
    to: "/profile/langganan",
    icon: Bag,
  },
  {
    id: 4,
    label: "Riwayat Transaksi",
    to: "/profile/transaksi",
    icon: GrHistory,
  },
];

/* ===========================
   SETTINGS
=========================== */

export const profileSettingsItems: ProfileSidebarItem[] = [
  {
    id: 1,
    label: "Pengaturan",
    to: "/profile/setting",
    icon: RiSettings4Fill,
  },
  {
    id: 2,
    label: "Help Center",
    to: "/profile/helpcenter",
    icon: Help,
  },
];

/* ===========================
   DASHBOARD CARD
=========================== */

export const profileStats: ProfileStat[] = [
  {
    id: 1,
    label: "Total Buku dibaca",
    value: "48",
    logo: FaBookOpen,
    description: "Buku selesai dibaca",
  },
  {
    id: 2,
    label: "Waktu Membaca",
    value: "15 Jam",
    logo: AiFillClockCircle,
    description: "Aktivitas membaca minggu ini",
  },
  {
    id: 3,
    label: "Genre Terpopuler",
    value: "",
    logo: GoGraph,
    description: "Genre yang paling sering dibaca",
  },
];

/* ===========================
   CHART
=========================== */

export const genreStatistics: GenreStatistic[] = [
  {
    id: 1,
    label: "Romance",
    color: "text-(--styled)",
  },
  {
    id: 2,
    label: "Education",
    color: "text-(--accent1)",
  },
  {
    id: 3,
    label: "Horror",
    color: "text-(--accent2)",
  },
];

/* ===========================
   RECOMMENDED BOOKS
=========================== */

export const recommendedBooks: RecommendedBookCard[] = [
  {
    id: 1,
    title: "Educational Psychology",
    author: "Anita Woolfolk",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784534788/465e60a8541998adfbc64a30f5681bd403bce123_ddxnca.png",
    price: 30000,
    originalPrice: 50000,
    icon: Heart,
    isFavorite: false,
  },
  {
    id: 2,
    title: "Layang-Layang Cita",
    author: "Aziz Ansari",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784534787/01f0d1f19242f34d64f7a6448a29d49290485e14_ihap1l.png",
    price: 30000,
    originalPrice: 50000,
    icon: Heart,
    isFavorite: false,
  },
  {
    id: 3,
    title: "Uzumaki",
    author: "Junji Ito",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784534787/08c9cdce60310a061a841a09fcb26f4104459938_ap4ccu.png",
    price: 30000,
    originalPrice: 50000,
    icon: Heart,
    isFavorite: false,
  },
  {
    id: 4,
    title: "Layang-Layang Cita",
    author: "Morgan Housel",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784534788/8037eb3bf5ecd9aae02655ec6f9de5ae9e77f61a_ykvm9b.png",
    price: 30000,
    originalPrice: 50000,
    icon: Heart,
    isFavorite: false,
  },
  {
    id: 5,
    title: "Uzumaki",
    author: "Junji Ito",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784534787/08c9cdce60310a061a841a09fcb26f4104459938_ap4ccu.png",
    price: 30000,
    originalPrice: 50000,
    icon: Heart,
    isFavorite: false,
  },
];