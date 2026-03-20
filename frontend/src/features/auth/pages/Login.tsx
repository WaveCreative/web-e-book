import { Link } from "react-router-dom";
import GuestHeader from "../../../components/layout/GuestHeader";

const perks = [
  "Sync highlights across devices",
  "Daily prompts to keep your streak",
  "Join reading circles with your team",
];

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <GuestHeader />
      <main className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-24 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <section className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Login
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Welcome back to your reading ritual.
          </h1>
          <p className="text-sm text-slate-600">
            Continue your streak, sync bookmarks, and access full chapters.
          </p>
          <div className="grid gap-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 text-sm text-slate-600"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {perk}
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Tonight&apos;s pick
                </p>
                <h3 className="text-lg font-semibold text-slate-900">
                  Signal to Noise
                </h3>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                18 mins
              </span>
            </div>
            <div className="mt-4 h-36 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
            <p className="mt-3 text-xs text-slate-500">
              "Chapter 5: Attention" ready to resume.
            </p>
          </div>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
          <h2 className="text-xl font-semibold text-slate-900">Sign in</h2>
          <p className="mt-2 text-sm text-slate-500">
            Use your email and password to access your library.
          </p>
          <form className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                placeholder="you@domain.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
              />
            </label>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                Remember me
              </label>
              <span>Forgot password?</span>
            </div>
            <Link
              to="/dashboard"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Sign in
            </Link>
          </form>
          <p className="mt-6 text-xs text-slate-500">
            New here? <span className="text-slate-900">Create an account.</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Login;
