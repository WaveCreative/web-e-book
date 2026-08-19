import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, MenuIcon, SearchIcon } from "lucide-react";
import Star from "../../assets/star";
import DropdownMenu from "../uionline/dropdown/DropdownMenu";
import DropdownShell from "../uionline/dropdown/DropdownShell";
import DropdownTrigger from "../uionline/dropdown/DropdownTrigger";
import MobileMenu from "../uionline/headerMobile/MobileMenu";
import MobileSearch from "../uionline/headerMobile/MobileSearch";
import useDropdown from "../uionline/dropdown/useDropdown";
import SearchInput from "../uionline/option/SearchInput";
import { useAuth, useSearch } from "../../app/providers";
import {
  desktopDropdowns,
  mobileMenuItems,
  searchPlaceholder,
} from "../../data/navItemsOnline";

function AppHeader() {
  const ebookDropdown = useDropdown();
  const audiobookDropdown = useDropdown();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const { searchTerm, setSearchTerm } = useSearch();
  const { user } = useAuth();
  const [specialPageSearch, setSpecialPageSearch] = useState("");
  const isSpecialSearchPage = pathname === "/landing";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white"
      : "text-white/70 hover:text-green-400 transition-colors";

  return (
    <header className="fixed top-0 z-30 w-full shadow-md shadow-white/20 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-8xl items-center justify-between px-6">
        <Link
          to="/landing"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
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
              chevronSrc={<ChevronDown size={16} />}
            />
            <DropdownMenu
              open={ebookDropdown.open}
              items={ebookDropdownItems}
              footerText="Lihat semua"
            />
          </DropdownShell>

          <a
            className="text-white/70 hover:text-green-400 transition-colors"
            href="#flash-sale"
          >
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
              chevronSrc={<ChevronDown size={16} />}
            />
            <DropdownMenu
              open={audiobookDropdown.open}
              items={audiobookDropdownItems}
              footerText="Lihat semua"
            />
          </DropdownShell>

          <form className="relative">
            <SearchInput
              value={isSpecialSearchPage ? specialPageSearch : searchTerm}
              onChange={(value) =>
                isSpecialSearchPage
                  ? setSpecialPageSearch(value)
                  : setSearchTerm(value)
              }
              placeholder={searchPlaceholder}
            />
          </form>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileSearchOpen(true)}
              className="rounded-full border border-white/15 p-2"
            >
              <SearchIcon className="h-4 w-4 opacity-70" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-full border border-white/15 p-2"
            >
              <MenuIcon className="h-4 w-4 opacity-70" />
            </button>
          </div>
          <div className="hidden items-center gap-10 mr-2 md:flex">
            <Link
              to="/landing#subscription"
              className="flex items-center gap-2 border border-(--accent1) rounded-xl p-3 text-xs text-(--accent1) hover:text-(--accent1)/70"
            >
              <Star />
              <span>Upgrade to Premium</span>
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-sm">
              <img
                src={
                  user?.avatar ??
                  "https://res.cloudinary.com/dgffa1m7j/image/upload/v1782797688/img_3d_at7pmj.svg"
                }
                alt={user?.name ?? "User"}
                className="h-10 w-10 border border-(--highemphasis)/5 rounded-full object-cover"
              />
              <span className="text-(--primary)">{user?.name ?? "User"}</span>
            </Link>
          </div>
        </div>
      </div>

      <MobileSearch
        open={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
        placeholder={searchPlaceholder}
        value={isSpecialSearchPage ? specialPageSearch : searchTerm}
        onChange={(value) =>
          isSpecialSearchPage
            ? setSpecialPageSearch(value)
            : setSearchTerm(value)
        }
      />
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={mobileMenuItems}
      />
    </header>
  );
}

export default AppHeader;

// Keep desktop dropdown items in object form for online dropdown menu.
const transformDropdownChildren = (
  children: { label: string; to: string }[] = [],
): { label: string; to: string }[] =>
  children.map((child) => ({
    label: child.label,
    to: child.to,
  }));

// Apply transformations
const ebookDropdownItems = transformDropdownChildren(
  desktopDropdowns.find((d) => d.label === "E-Book")?.children,
);
const audiobookDropdownItems = transformDropdownChildren(
  desktopDropdowns.find((d) => d.label === "Audiobook")?.children,
);
