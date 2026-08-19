import {
    BsCheckCircleFill,
} from "react-icons/bs";

import type { SubscriptionPlan } from "../types/subscription";

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 1,
    name: "Basic",
    title: "Gratis",
    price: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur",
    buttonLabel: "Coba Gratis",
    benefits: [
      {
        id: 1,
        label: "Baca ratusan ebook gratis",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 2,
        label: "Progress membaca",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 3,
        label: "Update koleksi mingguan",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 4,
        label: "Download Offline",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 5,
        label: "Audiobook",
        available: false,
        icon: BsCheckCircleFill,
      },
    ],
  },
  {
    id: 2,
    name: "Premium",
    title: "Rp99,000",
    price: 99000,
    period: "/bulan",
    description:
      "Lorem ipsum dolor sit amet, consectetur",
    buttonLabel: "Mulai Langganan",
    popular: true,
    benefits: [
      {
        id: 1,
        label: "Baca ratusan ebook gratis",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 2,
        label: "Progress membaca",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 3,
        label: "Update koleksi mingguan",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 4,
        label: "Download Offline",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 5,
        label: "Audiobook",
        available: false,
        icon: BsCheckCircleFill,
      },
    ],
  },
  {
    id: 3,
    name: "Standard",
    title: "Rp59,000",
    price: 59000,
    period: "/bulan",
    description:
      "Lorem ipsum dolor sit amet, consectetur",
    buttonLabel: "Mulai Langganan",
    benefits: [
      {
        id: 1,
        label: "Baca ratusan ebook gratis",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 2,
        label: "Progress membaca",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 3,
        label: "Update koleksi mingguan",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 4,
        label: "Download Offline",
        available: true,
        icon: BsCheckCircleFill,
      },
      {
        id: 5,
        label: "Audiobook",
        available: false,
        icon: BsCheckCircleFill,
      },
    ],
  },
];