import { featuredBooks } from "../data";

function FeaturedShelfSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f10] text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Flash Sale!
          </p>
          <h2 className="mt-2 text-xl font-semibold">
            E-Book Premium, Harga Terjangkau!
          </h2>
          <p className="text-sm text-white/60">Jangan sampai ketinggalan!</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold text-emerald-300">
              Rekomendasi Special
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Baca buku Jadi lebih
              <br />
              Mudah & Asyik
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-2">
                <input
                  className="w-40 bg-transparent text-xs text-white placeholder:text-white/40 focus:outline-none"
                  placeholder="Cari buku..."
                />
              </div>
              <button className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white">
                Search
              </button>
              <button className="rounded-full bg-red-500 px-4 py-2 text-xs font-semibold text-white">
                Reset
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <span>
                Penawaran Terbatas! Gunakan Kode Promo untuk Potongan Harga Hebat!
                Kode promo MR123.
              </span>
              <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900">
                Ambil Promo
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book) => (
            <article
              key={book.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/30"
            >
              <div className={`h-36 rounded-xl bg-gradient-to-br ${book.gradient}`} />
              <div className="mt-3">
                <h4 className="text-sm font-semibold">{book.title}</h4>
                <p className="text-xs text-white/60">by {book.author}</p>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button className="rounded-full bg-blue-500 px-3 py-1 text-[10px] font-semibold">
                  Lihat Detail
                </button>
                <button className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/80">
                  Simpan
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedShelfSection;
