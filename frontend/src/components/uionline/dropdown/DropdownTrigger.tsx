import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

interface DropdownTriggerProps {
  label: string;
  to: string;
  navLinkClass: ({ isActive }: { isActive: boolean }) => string;
  onHoverOpen: () => void;
  onToggle: () => void;
  open: boolean;
  chevronSrc?: ReactNode;
}
function DropdownTrigger({
  label,
  to,
  navLinkClass,
  onHoverOpen,
  onToggle,
  open,
  chevronSrc,
}: DropdownTriggerProps) {
  return (
    <>
      <NavLink to={to} className={navLinkClass} onMouseEnter={onHoverOpen}>
        {label}
      </NavLink>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`rounded-full p-1 transition ${
          open ? "opacity-70" : "hover:opacity-70"
        }`}
      >
        <span
          className={`inline-flex transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          {chevronSrc}
        </span>
      </button>
    </>
  );
}

export default DropdownTrigger;
