import { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../assets/chevron-down.svg";
import MenuIcon from "../../assets/menu.svg";
import SearchIcon from "../../assets/search.svg";
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
      ? "text-white"
      : "text-white/70 hover:text-white transition-colors";

  return (
    <header className="fixed top-0 z-30 w-full border-b border-white/10 bg-transparent backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-8xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="tracking-tight">EBook.com</span>
        </Link>
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
              chevronSrc={Chevron}
            />
            <DropdownMenu
              open={ebookDropdown.open}
              items={desktopDropdowns.ebook}
              footerText="Lihat semua koleksi"
            />
          </DropdownShell>

          <a className="text-white/70 hover:text-white transition-colors" href="#features">
            Flash Sale
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
              chevronSrc={Chevron}
            />
            <DropdownMenu
              open={audiobookDropdown.open}
              items={desktopDropdowns.audiobook}
              footerText="Lihat semua koleksi"
            />
          </DropdownShell>

          <form className="relative">
            <img
              src={SearchIcon}
              alt=""
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 invert -translate-y-1/2 opacity-60"
            />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="h-9 w-56 rounded-xl border border-white/15 bg-white/10 pl-9 pr-4 text-xs text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
            />
          </form>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileSearchOpen(true)}
              className="rounded-full border border-white/15 p-2"
            >
              <img src={SearchIcon} alt="" className="h-4 w-4 opacity-70" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-full border border-white/15 p-2"
            >
              <img src={MenuIcon} alt="" className="h-4 w-4 opacity-70" />
            </button>
          </div>
          <Link
            to="/login"
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 md:inline-flex"
          >
            Masuk
          </Link>
          <button className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-white/60">
            Daftar
          </button>
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
