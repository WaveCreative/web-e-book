import { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../../assets/chevron-down.svg";
import MobileOverlay from "./MobileOverlay";

interface MobileSubMenuItems {
  label: string;
  to?: string;
  href?: string;
  children?: MobileSubMenuItems[];
}

interface MobileMenuItems {
  label: string;
  to?: string;
  href?: string;
  children?: MobileSubMenuItems[];
  variant?: "default" | "plain";
}
interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: MobileMenuItems[];
}

function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setOpenKey((prev) => (prev === label ? null : label));
  };

  return (
    <MobileOverlay open={open} onClose={onClose}>
      <div className="ml-auto h-full w-60 bg-black border border-white/30 p-5 shadow-xl transition duration-200 ease-out flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs btn bg-transparent border border-white/30 p-2 rounded-xl text-white"
          >
            Close
          </button>
        </div>
        <div className="mt-6 space-y-4 text-sm text-white flex-1">
          {items.filter(item => item && item.label).map((item) => { // Filter item rusak
            if (item.children && item.children.length > 0) {
              const isOpen = openKey === item.label;

              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link to={item.to ?? "#"} className="text-white underline underline-offset-4 ">
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      onClick={() => toggleSection(item.label)}
                    >
                      <img
                        src={Chevron}
                        alt=""
                        className={`h-4 w-4 invert transition ${
                          isOpen ? "rotate-180" : "opacity-70"
                        }`}
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-3 grid grid-cols-2 gap-2 text-white">
                      {item.children.filter(c => c && c.label).map((child) => (
                        <Link
                          key={child.label}
                          to={child.to ?? "#"}
                          className="rounded-full text-[10px] border border-white/30 p-1 text-center"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-1 underline underline-offset-4"
                >
                  {item.label}
                </a>
              );
            }

            if (item.variant === "plain") {
              return (
                <Link
                  key={item.label}
                  to={item.to ?? "#"}
                  className="block py-1 text-white underline underline-offset-4"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to ?? "#"}
                className="text-xs border border-white/30 p-2 rounded-lg text-center"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </MobileOverlay>
  );
}

export default MobileMenu;
