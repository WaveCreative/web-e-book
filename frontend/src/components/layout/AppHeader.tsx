import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Chevron from "../../assets/chevron-down.svg";
import MenuIcon from "../../assets/menu.svg";
import SearchIcon from "../../assets/search.svg";
import CircleUser from "../../assets/circle-user.svg";
import EllipsisVertical from "../../assets/ellipsis-vertical.svg";
import ShoppingBag from "../../assets/shopping-bag.svg";
import Bookmark from "../../assets/bookmark.svg";
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
  const accountDropdown = useDropdown();
  const settingDropdown = useDropdown();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const { searchTerm, setSearchTerm } = useSearch();
  const { user, logout } = useAuth();
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
              chevronSrc={Chevron}
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
              chevronSrc={Chevron}
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
              <img
                src={SearchIcon}
                alt=""
                className="h-4 w-4 invert opacity-70"
              />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-full border border-white/15 p-2"
            >
              <img
                src={MenuIcon}
                alt=""
                className="h-4 w-4 invert opacity-70"
              />
            </button>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <Link to="/koleksi">
              <img src={Bookmark} alt="" className="h-5 w-5 invert" />
            </Link>
            <Link to="/cart">
              <img src={ShoppingBag} alt="Cart" className="h-5 w-5 invert" />
            </Link>
            <DropdownShell
              shellRef={accountDropdown.dropdownRef}
              onMouseLeave={accountDropdown.handleMouseLeave}
            >
              <button
                type="button"
                onMouseEnter={accountDropdown.handleHoverOpen}
                onClick={accountDropdown.handleChevronClick}
                className="inline-flex"
              >
                <img src={CircleUser} alt="User menu" className="h-5 w-5 invert" />
              </button>

              <div
                className={`absolute right-0 top-full z-50 mt-3 min-w-[150px] rounded-l-md rounded-b-md bg-black/95 p-4 shadow-sm shadow-white transition ${
                  accountDropdown.open
                    ? "visible translate-y-0 opacity-100 pointer-events-auto"
                    : "invisible translate-y-2 opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-3 text-xs text-white">
                  <span className="text-white/60">{user?.name ?? "User"}</span>
                  <Link to="/landing" className="hover:text-green-400">
                    Dashboard
                  </Link>
                  <button type="button" onClick={() => logout()} className="text-left hover:text-green-400">
                    Logout
                  </button>
                </div>
              </div>
            </DropdownShell>
            <DropdownShell
              shellRef={settingDropdown.dropdownRef}
              onMouseLeave={settingDropdown.handleMouseLeave}
            >
              <button
                type="button"
                onMouseEnter={settingDropdown.handleHoverOpen}
                onClick={settingDropdown.handleChevronClick}
                className="inline-flex"
              >
                <img src={EllipsisVertical} alt="Settings menu" className="h-5 w-5 invert" />
              </button>

              <div
                className={`absolute right-0 top-full z-50 mt-3 min-w-[150px] rounded-l-md rounded-b-md bg-black/95 p-4 shadow-sm shadow-white transition ${
                  settingDropdown.open
                    ? "visible translate-y-0 opacity-100 pointer-events-auto"
                    : "invisible translate-y-2 opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-3 text-xs text-white">
                  <span className="hover:text-green-400">Setting</span>
                  <span className="hover:text-green-400">Help Center</span>
                </div>
              </div>
            </DropdownShell>
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
