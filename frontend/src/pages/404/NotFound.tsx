import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black px-6 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">404</p>
      <h1 className="text-3xl font-semibold text-white">Page not found</h1>
      <p className="text-sm text-white/60">
        Halaman tidak ditemukan. Kembali ke home.
      </p>
      <Link
        to="/"
        className="rounded-full border border-white px-4 py-2 text-sm font-semibold text-white hover:border-white/30 hover:text-white/30"
      >
        Back to landing
      </Link>
    </main>
  );
}

export default NotFound;
