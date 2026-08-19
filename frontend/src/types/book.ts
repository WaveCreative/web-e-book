import type { LucideIcon } from "lucide-react";

export interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  price: number;
  originalPrice: number;
  icon: LucideIcon;
  isFavorite: boolean;
}