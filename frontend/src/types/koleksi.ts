import type { LucideIcon } from "lucide-react";

export interface CollectionGenre {
  id: number;
  label: string;
  value: string;
}

export interface CollectionBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  icon: LucideIcon;
  isFavorite: boolean;
}

