import { Link } from "react-router-dom";
import GuestHeader from "../components/layout/GuestHeader";
import Footer from "../components/layout/Footer";

const featuredBooks = [
  {
    title: "Designing Calm",
    author: "Mira Halim",
    mood: "Focus",
    gradient: "from-slate-900 via-slate-800 to-emerald-900",
  },
  {
    title: "Signal to Noise",
    author: "Rafi Kurnia",
    mood: "Deep work",
    gradient: "from-indigo-900 via-slate-900 to-sky-900",
  },
  {
    title: "Small Systems",
    author: "Ava Luthfi",
    mood: "Habits",
    gradient: "from-emerald-900 via-slate-900 to-amber-900",
  },
  {
    title: "Café Notes",
    author: "Dara Vinca",
    mood: "Lifestyle",
    gradient: "from-rose-900 via-slate-900 to-orange-900",
  },
];

const highlights = [
  {
    title: "Curated collections",
    desc: "Only the most relevant titles, updated weekly by editors.",
  },
  {
    title: "Reading streaks",
    desc: "Track progress and keep momentum with gentle reminders.",
  },
  {
    title: "Community circles",
    desc: "Create book circles and discuss highlights together.",
  },
];

const testimonials = [
  {
    name: "Arvin",
    role: "Product lead",
    quote: "My team replaced PDFs with E-Booka. Progress tracking is a game changer.",
  },
  {
    name: "Nadia",
    role: "UX Writer",
    quote: "The rituals keep me consistent. I read more in 2 weeks than 2 months.",
  },
  {
    name: "Raka",
    role: "Founder",
    quote: "We run book circles across remote teams. Everything stays organized.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <GuestHeader />
      <main>
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
                featured collections as a guest, then sign in to unlock your
                personal library, progress sync, and daily prompts.
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

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Featured shelf
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Preview the top picks
              </h2>
            </div>
            <Link
              to="/catalog"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              See full catalog
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredBooks.map((book) => (
              <article
                key={book.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div
                  className={`h-40 rounded-2xl bg-gradient-to-br ${book.gradient}`}
                />
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="rounded-full bg-slate-100 px-2 py-1">
                    {book.mood}
                  </span>
                  <span>Preview</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500">{book.author}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl bg-slate-900/10" />
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Ritual flow
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  A simple path from preview to progress.
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  Guests can sample the catalog. Login unlocks streaks, notes, and
                  community circles.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Browse curated shelf",
                    "Save your reading list",
                    "Sync highlights across devices",
                    "Join a reading circle",
                  ].map((step) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-900 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
                    Next session
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">Evening focus</h3>
                  <p className="mt-3 text-sm text-slate-200">
                    3 chapters queued · 45 minutes
                  </p>
                  <div className="mt-4 flex gap-2">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-2 w-6 rounded-full bg-emerald-300/60"
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Progress snapshot
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    {["32%", "18%", "78%"].map((value) => (
                      <div
                        key={value}
                        className="rounded-2xl bg-slate-50 py-4 text-sm font-semibold text-slate-900"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-900/10" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{item.quote}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto w-full max-w-6xl px-6 pb-24"
        >
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
                  Starter plan
                </p>
                <h2 className="mt-2 text-3xl font-semibold">Unlock the full library.</h2>
                <p className="mt-3 text-sm text-slate-200">
                  Login to enable bookmarks, sync across devices, and join reading
                  circles.
                </p>
              </div>
              <Link
                to="/login"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              >
                Get started
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
