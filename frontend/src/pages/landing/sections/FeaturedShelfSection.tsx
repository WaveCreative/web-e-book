import { Link } from "react-router-dom";
import { featuredBooks } from "../data";

function FeaturedShelfSection() {
  return (
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
            <div className={`h-40 rounded-2xl bg-gradient-to-br ${book.gradient}`} />
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
  );
}

export default FeaturedShelfSection;
