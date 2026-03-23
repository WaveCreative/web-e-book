import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">404</p>
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="text-sm text-slate-600">
        Halaman tidak ditemukan. Kembali ke home.
      </p>
      <Link
        to="/"
        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
      >
        Back to landing
      </Link>
    </main>
  );
}

export default NotFound;
