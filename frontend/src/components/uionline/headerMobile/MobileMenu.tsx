import { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../../assets/chevron-down.svg";
import MobileOverlay from "./MobileOverlay";

interface MobileSubMenuItems {
  label: string;
  to?: string;
  href?: string;
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
                    <Link to={item.to ?? "#"} className="text-white">
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
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white">
                      {item.children.filter(c => c && c.label).map((child) => (
                        <Link
                          key={child.label}
                          to={child.to ?? "#"}
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

            return (
              <Link
                key={item.label}
                to={item.to ?? "#flash-sale"}
                className="block border border-white/30 px-3 py-1 rounded-full w-20 text-center"
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
