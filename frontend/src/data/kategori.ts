import {PiGhostFill} from "react-icons/pi";
import type { Kategori } from "../types/kategori";
import Castle from "../assets/castle";
import Drama from "../assets/drama";
import GraduationCap from "../assets/graduatecap";
import Heart from "../assets/hearth";

export const categories: Kategori[] = [
  {
    id: 1,
    name: "Romance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: Heart,
    fill: "currentColor",
    bookCount: 900,
    rating: 4.2,
  },
  {
    id: 2,
    name: "Fantasi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: Castle,
    fill: "none",
    bookCount: 1050,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Horror",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: PiGhostFill,
    fill: "currentColor",
    bookCount: 1140,
    rating: 4.4,
  },
  {
    id: 4,
    name: "Drama",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: Drama,
    fill: "none",
    bookCount: 780,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Edukasi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla eu.",
    icon: GraduationCap,
    fill: "none",
    bookCount: 890,
    rating: 4.5,
  },
];