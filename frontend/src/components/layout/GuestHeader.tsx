import { useState } from "react";
import { Link } from "react-router-dom";
import {ChevronDown, MenuIcon, SearchIcon} from "lucide-react";
import DropdownMenu from "../ui/dropdown/DropdownMenu";
import DropdownShell from "../ui/dropdown/DropdownShell";
import DropdownTrigger from "../ui/dropdown/DropdownTrigger";
import MobileMenu from "../ui/headerMobile/MobileMenu";
import MobileSearch from "../ui/headerMobile/MobileSearch";
import useDropdown from "../ui/dropdown/useDropdown";
import {
  desktopDropdowns,
  mobileMenuItems,
  searchPlaceholder,
} from "../../data/navItems";

function GuestHeader() {
  const ebookDropdown = useDropdown();
  const audiobookDropdown = useDropdown();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-(--highemphasis)"
      : "text-(--highemphasis) hover:text-(--primary) transition-colors";

  return (
    <header className="fixed top-0 z-30 w-full shadow-md shadow-white/20 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-8xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 text-lg font-bold text-(--highemphasis) md:text-2xl">
          <span className="tracking-tight">EBook.com</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <DropdownShell
            shellRef={ebookDropdown.dropdownRef}
            onMouseLeave={ebookDropdown.handleMouseLeave}
          >
            <DropdownTrigger
              label="E-Book"
              to="/catalog"
              navLinkClass={navLinkClass}
              onHoverOpen={ebookDropdown.handleHoverOpen}
              onToggle={ebookDropdown.handleChevronClick}
              open={ebookDropdown.open}
              chevronSrc={<ChevronDown size={16} />}
            />
            <DropdownMenu
              open={ebookDropdown.open}
              items={ebookDropdownItems}
              footerText="Lihat semua"
            />
          </DropdownShell>

          <a href="#trending-books" className="text-(--highemphasis) hover:text-(--primary) transition-colors">
            Populer
          </a>

          <DropdownShell
            shellRef={audiobookDropdown.dropdownRef}
            onMouseLeave={audiobookDropdown.handleMouseLeave}
          >
            <DropdownTrigger
              label="Audiobook"
              to="/catalog"
              navLinkClass={navLinkClass}
              onHoverOpen={audiobookDropdown.handleHoverOpen}
              onToggle={audiobookDropdown.handleChevronClick}
              open={audiobookDropdown.open}
              chevronSrc={<ChevronDown size={16} />}
            />
            <DropdownMenu
              open={audiobookDropdown.open}
              items={audiobookDropdownItems}
              footerText="Lihat semua"
            />
          </DropdownShell>

          <form className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="h-9 w-56 rounded-lg border border-(--border/15) pl-9 pr-4 text-xs text-(--highemphasis) placeholder:text-(--highemphasis) focus:border-(--border/40) focus:outline-none"
            />
          </form>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileSearchOpen(true)}
              className="rounded-full border border-(--border/15) p-2"
            >
              <SearchIcon className="h-4 w-4 opacity-70" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-full border border-(--border/15) p-2"
            >
              <MenuIcon className="h-4 w-4 opacity-70" />
            </button>
          </div>
          <Link
            to="/login"
            className="hidden rounded-lg border border-(--primary) px-9 py-3 text-xs font-semibold text-(--primary) md:inline-flex"
          >
            Masuk
          </Link>
          <Link to="/signup" className="rounded-lg bg-(--primary) px-9 py-3 text-xs font-semibold text-(--background)">
            Daftar
          </Link>
        </div>
      </div>

      <MobileSearch
        open={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
        placeholder={searchPlaceholder}
      />
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={mobileMenuItems}
      />
    </header>
  );
}

export default GuestHeader;

// Transform dropdown children to string[]
const transformDropdownChildren = (
  children: { label: string; to: string; }[] = []
): { label: string; to: string; }[] => children.map((child) => ({
  label: child.label,
  to: child.to,
}));

// Apply transformations
const ebookDropdownItems = transformDropdownChildren(
  desktopDropdowns.find((d) => d.label === "E-Book")?.children
);
const audiobookDropdownItems = transformDropdownChildren(
  desktopDropdowns.find((d) => d.label === "Audiobook")?.children
);
