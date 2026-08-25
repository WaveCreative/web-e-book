import { LayoutDashboard, BookOpenText, Users, Tag, BookMarked, RefreshCcw, BadgeDollarSign, MessageSquareText } from "lucide-react";
import type { IconType } from "react-icons";

export interface AdminNavigationItem {
  label: string;
  to: string;
  icon: typeof LayoutDashboard | IconType;
}

export const adminNavigation: AdminNavigationItem[] = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  { label: "Auth Users", to: "/admin/users", icon: Users },
  { label: "Book Content", to: "/admin/books", icon: BookOpenText },
  { label: "Category / Genre", to: "/admin/genres", icon: Tag },
  { label: "Collection Content", to: "/admin/collections", icon: BookMarked },
  { label: "Reading Content", to: "/admin/reading", icon: RefreshCcw },
  { label: "Subscription Content", to: "/admin/subscriptions", icon: BadgeDollarSign },
  { label: "Transaction History", to: "/admin/transactions", icon: MessageSquareText },
];
