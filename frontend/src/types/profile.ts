import type { LucideIcon } from "lucide-react";
import React from "react";

export interface ProfileStat {
  id: number;
  label: string;
  value: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export interface GenreStatistic {
  id: number;
  label: string;
  color: string;
}

export interface RecommendedBookCard {
  id: number;
  title: string;
  author: string;
  image: string;
  price: number;
  icon: LucideIcon;
  originalPrice: number;
  isFavorite: boolean;
}

export interface ProfileSidebarItem {
  id: number;
  label: string;
  to: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

