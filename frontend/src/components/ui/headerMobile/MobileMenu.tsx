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
      <div className="ml-auto h-full w-72 bg-black border border-white/30 p-5 shadow-xl transition duration-200 ease-out flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Menu</span>
          <button type="button" onClick={onClose} className="text-xs btn bg-transparent border border-white/30 p-2 rounded-xl text-white">
            Close
          </button>
        </div>
        <div className="mt-6 space-y-4 text-sm text-white flex-1">
          {items.map((item) => {
            if (item.children) {
              const isOpen = openKey === item.label;
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggleSection(item.label)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span>{item.label}</span>
                    <img
                      src={Chevron}
                      alt=""
                      className={`h-4 w-4 invert transition ${
                        isOpen ? "rotate-180" : "opacity-70"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={item.to ?? "/catalog"}
                          className="rounded-full border border-white/30 px-3 py-1 text-center"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (item.to) {
              return (
                <Link key={item.label} to={item.to} className="block border border-white/30 px-3 py-1 rounded-lg w-20 text-center ">
                  {item.label}
                </Link>
              );
            }

            return (
              <a key={item.label} className="block" href={item.href ?? "#flash-sale"}>
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </MobileOverlay>
  );
}

export default MobileMenu;
