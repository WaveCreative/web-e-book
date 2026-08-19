import type { LucideIcon } from "lucide-react";

export interface ReadingCard {
  id: number;
  title: string;
  author: string;
  image: string;
  progress: number;
  icon: LucideIcon;
  isFavorite: boolean;
}
