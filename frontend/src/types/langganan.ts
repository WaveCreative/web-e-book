import type { IconType } from "react-icons";

export interface LanggananItem {
  id: number;
  title: string;
  status: "Basic" | "Premium";
  description: string;
  buttonLabel?: string;
  canUpgrade: boolean;
  icon: IconType;
}