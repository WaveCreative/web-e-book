import { featuredBooks } from "../data";
import Bookmark from "../../../assets/bookmark.svg";

function FlashSale() {
  return (
    <section
      id="flash-sale"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 py-25">
        <div className="text-center">
          <h2 className="mt-2 text-xl font-semibold">Flash Sale!</h2>
          <p className="text-sm tracking-[0.2em] text-white">
            E-Book Premium, Harga Terjangkau!
          </p>
          <p className="text-sm tracking-[0.2em] text-white">
            Jangan sampai ketinggalan!
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold text-emerald-300">
              Penawaran Spesial
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Baca buku Jadi lebih
              <br />
              Mudah & Asyik
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center">
                <input
                  className="w-30 text-xs rounded-xl bg-white p-3 text-black placeholder:text-black/60 md:w-100"
                  placeholder="Cari buku..."
                />
              </div>
              <button className="rounded-xl w-20 bg-green-500 p-3 text-xs font-semibold text-white md:w-30">
                Search
              </button>
              <button className="rounded-xl w-20 bg-red-500 p-3 text-xs font-semibold text-white md:w-30">
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book) => (
            <article
              key={book.title}
              className="rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/30"
            >
              <div
                className={`h-36 rounded-xl bg-gradient-to-br ${book.gradient}`}
              />
              <div className="mt-3 flex flex-col items-center space-y-3">
                <h4 className="text-sm font-semibold">{book.title}</h4>
                <p className="text-xs text-white/60">by {book.author}</p>
                <p className="text-xs font-semibold">{book.diskon}</p>
                <p className="text-xs line-through text-white/60">
                  {book.harga}
                </p>
              </div>
              <div className="mt-3 flex flex-col items-center">
                <div className="flex gap-2">
                  <button className="rounded-full bg-blue-500 px-4 py-2 text-[10px] font-semibold">
                    Lihat Detail
                  </button>
                  <button className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold text-black">
                    <img src={Bookmark} alt="Bookmark" className="w-4 inline-flex items-center gap-3" />
                    Simpan
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlashSale;
