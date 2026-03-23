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
      ? "text-slate-900 transition-colors"
      : "text-slate-600 hover:text-slate-900 hover:transition-colors transition-colors";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-8xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
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

          <a className="text-slate-600 hover:text-slate-900" href="#features">
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
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60"
            />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="h-9 w-56 rounded-xl border border-slate-200 bg-white/70 pl-9 pr-4 text-xs text-slate-700 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
            />
          </form>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileSearchOpen(true)}
              className="rounded-full border border-slate-200 p-2"
            >
              <img src={SearchIcon} alt="" className="h-4 w-4 opacity-70" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-full border border-slate-200 p-2"
            >
              <img src={MenuIcon} alt="" className="h-4 w-4 opacity-70" />
            </button>
          </div>
          <Link
            to="/login"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
          >
            Masuk
          </Link>
          <button className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 md:inline-flex">
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
