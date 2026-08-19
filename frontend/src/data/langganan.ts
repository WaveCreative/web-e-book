import { FaCrown } from "react-icons/fa";
import type { LanggananItem } from "../types/langganan";

export const langgananData: LanggananItem[] = [
  {
    id: 1,
    title: "Status Paket",
    status: "Basic",
    description: "Upgrade untuk membuka fitur premium Ebook.com.",
    buttonLabel: "Upgrade Sekarang",
    canUpgrade: true,
    icon: FaCrown,
  },
  {
    id: 2,
    title: "Status Paket",
    status: "Premium",
    description: "Selamat! Akun kamu sudah menikmati seluruh fitur premium Ebook.com.",
    canUpgrade: false,
    icon: FaCrown,
  },
  {
    id: 3,
    title: "Status Paket",
    status: "Premium",
    description: "Paket premium aktif dan dapat digunakan pada semua perangkat.",
    canUpgrade: false,
    icon: FaCrown,
  },
];