import { Link, NavLink } from "react-router-dom";

function GuestHeader() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-slate-900"
      : "text-slate-600 hover:text-slate-900";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="tracking-tight">EBook.com</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLink to="/catalog" className={navLinkClass}>
            Catalog
          </NavLink>
          <a className="text-slate-600 hover:text-slate-900" href="#features">
            Features
          </a>
          <a className="text-slate-600 hover:text-slate-900" href="#pricing">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
          >
            Log in
          </Link>
          <button className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 md:inline-flex">
            Start reading
          </button>
        </div>
      </div>
    </header>
  );
}

export default GuestHeader;
