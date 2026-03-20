import GuestHeader from "../components/layout/GuestHeader";
import Footer from "../components/layout/Footer";

const previewBooks = [
  {
    title: "Designing Calm",
    author: "Mira Halim",
    tag: "Productivity",
    gradient: "from-slate-900 via-slate-800 to-emerald-900",
  },
  {
    title: "Signal to Noise",
    author: "Rafi Kurnia",
    tag: "Focus",
    gradient: "from-indigo-900 via-slate-900 to-sky-900",
  },
  {
    title: "Small Systems",
    author: "Ava Luthfi",
    tag: "Systems",
    gradient: "from-emerald-900 via-slate-900 to-amber-900",
  },
  {
    title: "Café Notes",
    author: "Dara Vinca",
    tag: "Lifestyle",
    gradient: "from-rose-900 via-slate-900 to-orange-900",
  },
  {
    title: "Quiet Wins",
    author: "Tara Sidiq",
    tag: "Habits",
    gradient: "from-slate-900 via-slate-800 to-lime-900",
  },
  {
    title: "Midnight Notes",
    author: "Yuda Fajar",
    tag: "Creativity",
    gradient: "from-slate-900 via-purple-900 to-indigo-900",
  },
];

const filters = ["All", "Focus", "Productivity", "Lifestyle", "Habits"];

function Catalog() {
  return (
    <div className="min-h-screen bg-slate-50">
      <GuestHeader />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Guest catalog
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">Preview shelf</h1>
          <p className="text-sm text-slate-600">
            Explore a limited preview of the collection. Login to unlock full
            chapters, notes, and progress sync.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:border-slate-900 hover:text-slate-900"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewBooks.map((book) => (
            <article
              key={book.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div
                className={`h-40 rounded-2xl bg-gradient-to-br ${book.gradient}`}
              />
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-2 py-1">
                  {book.tag}
                </span>
                <span>Preview</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {book.title}
              </h3>
              <p className="text-xs text-slate-500">by {book.author}</p>
              <div className="mt-4 flex items-center justify-between">
                <button className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 hover:border-slate-900 hover:text-slate-900">
                  Preview
                </button>
                <span className="text-xs text-slate-400">12 mins read</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Catalog;
