import AppHeader from "../../../components/layout/AppHeader";

const libraryBooks = [
  {
    title: "Designing Calm",
    tag: "Focus",
    gradient: "from-slate-900 via-slate-800 to-emerald-900",
  },
  {
    title: "Signal to Noise",
    tag: "Deep work",
    gradient: "from-indigo-900 via-slate-900 to-sky-900",
  },
  {
    title: "Small Systems",
    tag: "Habits",
    gradient: "from-emerald-900 via-slate-900 to-amber-900",
  },
  {
    title: "Café Notes",
    tag: "Lifestyle",
    gradient: "from-rose-900 via-slate-900 to-orange-900",
  },
  {
    title: "Quiet Wins",
    tag: "Productivity",
    gradient: "from-slate-900 via-slate-800 to-lime-900",
  },
  {
    title: "Midnight Notes",
    tag: "Creativity",
    gradient: "from-slate-900 via-purple-900 to-indigo-900",
  },
];

function Library() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Library
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">Your shelf</h1>
          <p className="text-sm text-slate-600">
            Semua koleksi yang sudah kamu simpan.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {libraryBooks.map((book) => (
            <article
              key={book.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className={`h-40 rounded-2xl bg-gradient-to-br ${book.gradient}`} />
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  {book.tag}
                </span>
                <span>Saved</span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {book.title}
              </h3>
              <button className="mt-4 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 hover:border-slate-900 hover:text-slate-900">
                Continue
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Library;
