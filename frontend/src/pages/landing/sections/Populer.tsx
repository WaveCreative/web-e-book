import { useEffect, useMemo, useState } from "react";
import {Bookmark} from "lucide-react"
import { apiRequest, type ApiResponse } from "../../../lib/api";

interface Book {
  id: number;
  title: string;
  slug: string;
  author: string;
  description: string | null;
  price: number;
  cover: string | null;
  stock: number;
}

function FlashSale() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await apiRequest<ApiResponse<Book[]>>("/books", {
          auth: false,
        });
        setBooks(response.data);
      } catch {
        setError("Gagal memuat buku");
      } finally {
        setLoading(false);
      }
    };

    loadBooks().catch(() => {
      setError("Gagal memuat buku");
      setLoading(false);
    });
  }, []);

  const filteredBooks = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) return books;

    return books.filter((book) =>
      [book.title, book.author, book.slug].some((value) =>
        value.toLowerCase().includes(keyword)
      )
    );
  }, [books, search]);

  return (
    <section
      id="populer"
      className="relative min-h-screen overflow-hidden text-(--highemphasis)"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-linear-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-linear-to-br from-white/20 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 py-25">
        <div className="text-center">
          <h2 className="mt-2 text-xl font-semibold">Flash Sale!</h2>
          <p className="text-sm tracking-[0.2em] text-(--highemphasis)">
            E-Book Premium, Harga Terjangkau!
          </p>
          <p className="text-sm tracking-[0.2em] text-(--highemphasis)">
            Jangan sampai ketinggalan!
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold text-(--primary)">
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
                  className="w-30 rounded-xl bg-(--highemphasis) p-3 text-xs text-(--background) placeholder:text-(--background/60) md:w-100"
                  placeholder="Cari buku..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={() => setSearch(search.trim())}
                className="rounded-xl w-20 bg-(--primary) p-3 text-xs cursor-pointer font-semibold text-(--highemphasis) md:w-30"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="rounded-xl w-20 bg-(--error) p-3 text-xs cursor-pointer font-semibold text-(--highemphasis) md:w-30"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-2xl border border-(--accent2) bg-(--error)/20 px-4 py-3 text-sm text-(--highemphasis)">
            {error}
          </div>
        )}

        {loading ? (
          <div className="mt-10 text-sm text-(--mediumemphasis)">Memuat buku...</div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredBooks.map((book) => (
              <article
                key={book.id}
                className="rounded-2xl pb-4 backdrop-blur-md border border-white/10 bg-white/5 shadow-lg shadow-black/30"
              >
                <div
                  className={`h-36 rounded-t-xl bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900`}
                />
                <div className="mt-3 flex flex-col items-center space-y-3">
                  <h4 className="text-sm font-semibold">{book.title}</h4>
                  <p className="text-xs text-white/60">by {book.author}</p>
                  <p className="text-xs font-semibold">
                    Rp {book.price.toLocaleString("id-ID")}
                  </p>
                  <p className="text-xs line-through text-white/60">
                    {book.stock}
                  </p>
                </div>
                <div className="mt-3 flex flex-col items-center">
                  <div className="flex gap-2">
                    <button className="rounded-full bg-blue-700 px-4 py-2 text-xs cursor-pointer font-semibold">
                      Lihat Detail
                    </button>
                    <button className="rounded-full bg-white px-4 py-2 text-xs cursor-pointer font-semibold text-black">                        
                      <Bookmark className="inline-flex w-4 items-center gap-3"/>
                      Simpan
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FlashSale;
