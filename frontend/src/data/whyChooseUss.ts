import {
  Bookmark,
} from "lucide-react";

import {
  IoBook
} from "react-icons/io5";

import {
  RiSmartphoneFill,
  RiShieldCheckFill
} from "react-icons/ri";

import type { Feature, Reader } from "../types/feature";

export const features: Feature[] = [
  {
    id: 1,
    title: "Koleksi Lengkap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: IoBook,
  },
  {
    id: 2,
    title: "Fitur Lengkap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: Bookmark,
  },
  {
    id: 3,
    title: "Multi Perangkat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: RiSmartphoneFill,
  },
  {
    id: 4,
    title: "Aman & Legal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: RiShieldCheckFill,
  },
];

export const readers: Reader[] = [
  {
    id: 1,
    name: "Denis",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784620721/9710dbe3c8a1a74b560db49a5b512264387a41e9_ydjrwv.jpg",
  },
  {
    id: 2,
    name: "Alya",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784620722/31a64540051cd12d6918d46026b573e10c89b718_w81pco.jpg",
  },
  {
    id: 3,
    name: "Rizky",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784620722/36653f04cb6e522c641c93a1a5a8e8cf072360a5_nzajxk.jpg",
  },
  {
    id: 4,
    name: "Vanessa",
    image: "https://res.cloudinary.com/dgffa1m7j/image/upload/v1784620721/8be2c45432a24c1a956e856f2da1f8b6d3da302e_e2pd0e.jpg",
  },
];