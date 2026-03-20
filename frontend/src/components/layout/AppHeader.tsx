import { Link, NavLink } from "react-router-dom";

function AppHeader() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-slate-900"
      : "text-slate-600 hover:text-slate-900";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-6">
        <Link to="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
          <span className="tracking-tight">EBook.com</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/library" className={navLinkClass}>
            Library
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900">
            Upgrade
          </button>
          <div className="h-9 w-9 rounded-full bg-slate-200" />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
