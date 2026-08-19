import type { LucideIcon } from "lucide-react";
import { PiGhostFill } from "react-icons/pi";

export interface Kategori {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon | typeof PiGhostFill;
  fill: string;
  bookCount: number;
  rating: number;
}