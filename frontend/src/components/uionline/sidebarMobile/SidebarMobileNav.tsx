import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {ChevronDown} from "lucide-react";

interface SidebarMobileNavItem {
  label: string;
  to: string;
  children?: SidebarMobileNavItem[];
}

interface SidebarMobileNavProps {
  items: SidebarMobileNavItem[];
}

function SidebarMobileNav({ items }: SidebarMobileNavProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpenKey(null);
  }, [pathname]);

  return (
    <div className="mb-4 flex flex-wrap gap-2 overflow-visible md:hidden">
      {items.map((item) =>
        item.children?.length ? (
          <div key={item.to} className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenKey((prev) => (prev === item.label ? null : item.label))
              }
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                item.children.some((child) => pathname === child.to)
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <span>{item.label}</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${
                  openKey === item.label ? "rotate-180" : ""
                }`}
              />
            </button>

            {openKey === item.label && (
              <div className="absolute left-0 top-full z-20 mt-2 min-w-35 rounded-xl border border-white/15 bg-black/95 p-2 shadow-xl shadow-black/40">
                {item.children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={({ isActive }) =>
                      `block rounded-lg p-2 text-xs font-semibold my-1 transition-colors ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`
                    }
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ) : (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`
            }
          >
            {item.label}
          </NavLink>
        ),
      )}
    </div>
  );
}

export default SidebarMobileNav;
