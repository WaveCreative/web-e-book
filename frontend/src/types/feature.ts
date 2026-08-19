import type { LucideIcon } from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Reader {
  id: number;
  name: string;
  image: string;
}