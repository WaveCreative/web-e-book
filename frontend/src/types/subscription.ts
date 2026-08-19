import type { LucideIcon } from "lucide-react";

export interface SubscriptionBenefit {
  id: number;
  label: string;
  available: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | LucideIcon;
}

export interface SubscriptionPlan {
  id: number;
  name: string;
  title: string;
  price: number;
  period?: string;
  description: string;
  buttonLabel: string;
  popular?: boolean;
  benefits: SubscriptionBenefit[];
}