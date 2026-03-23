import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Guest Preview
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Build a calm reading ritual with curated digital libraries.
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            E-Booka is a focused reading hub for teams and communities. Preview
            featured collections as a guest, then sign in to unlock your personal
            library, progress sync, and daily prompts.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/login"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800"
            >
              Log in to continue
            </Link>
            <Link
              to="/catalog"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
            >
              Explore preview
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 text-sm text-slate-500">
            <div>
              <p className="text-lg font-semibold text-slate-900">1.2k+</p>
              <p>Active readers</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">240</p>
              <p>Curated titles</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">32</p>
              <p>Reading circles</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured</p>
                  <h3 className="text-xl font-semibold">Focus & Flow</h3>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  12 mins left
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
                <p className="text-sm text-slate-500">
                  "Chapter 4: Rituals" preview ends at page 32.
                </p>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-3/5 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-900">Daily prompt</p>
                  <p>What will you read tonight?</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-900">Next up</p>
                  <p>Mindful Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-6 hidden rounded-3xl border border-slate-200 bg-white p-4 text-xs text-slate-500 shadow-lg shadow-slate-900/10 md:block">
            <p className="font-semibold text-slate-900">Guest access</p>
            <p>Preview 3 chapters per title</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
