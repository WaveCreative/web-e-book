import { Link } from "react-router-dom";
import {Wrench} from "lucide-react";

function ComingSoon() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Blur */}
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-xl">
        
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-blue-500/10">
          <Wrench
            size={32}
          />
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
          Coming Soon
        </p>

        <h1 className="mt-3 text-3xl font-bold text-white">
          Under Development
        </h1>

        <p className="mt-4 text-sm leading-6 text-white/60">
          Halaman ini masih dalam tahap pengembangan dan akan segera hadir
          dengan pengalaman yang lebih baik.
        </p>

        <Link
          to="/landing"
          className="mt-8 inline-flex rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default ComingSoon;