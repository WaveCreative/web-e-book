import { NavLink } from "react-router-dom";

interface DropdownTriggerProps {
  label: string;
  to: string;
  navLinkClass: ({ isActive }: { isActive: boolean }) => string;
  onHoverOpen: () => void;
  onToggle: () => void;
  open: boolean;
  chevronSrc: string;
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
        <img
          src={chevronSrc}
          alt=""
          className={`h-4 w-4 transition invert ${
            open ? "brightness-0 scale-y-[-1]" : "opacity-70"
          }`}
        />
      </button>
    </>
  );
}

export default DropdownTrigger;
