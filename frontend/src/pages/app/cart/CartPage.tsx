import { useEffect, useMemo, useState } from "react";
import { useSearch } from "../../../app/providers";
import SidebarMobileNav from "../../../components/uionline/sidebarMobile/SidebarMobileNav";
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

const sidebarMobileItems = [
  { label: "Keranjang", to: "/cart" },
  { label: "Voucher", to: "/voucher" },
  {
    label: "Pesanan",
    to: "/orders",
    children: [
      { label: "Proses", to: "/proses" },
      { label: "Berhasil", to: "/berhasil" },
    ],
  },
];

function CartPage() {
  const { searchTerm } = useSearch();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

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
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) return books;

    return books.filter((book) =>
      [book.title, book.author, book.slug].some((value) =>
        value.toLowerCase().includes(keyword),
      ),
    );
  }, [searchTerm, books]);

  const handleAddToCart = async (bookId: number) => {
    setMessage(null);
    try {
      await apiRequest("/cart/items", {
        method: "POST",
        body: JSON.stringify({ book_id: bookId, qty: 1 }),
      });
      setMessage("Buku berhasil ditambahkan ke cart");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menambah ke cart");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <div className="py-16">
        <main className="mx-auto w-full max-w-6xl px-4 pt-10 md:ml-[14rem] md:mr-8 md:w-auto md:px-0">
          <SidebarMobileNav items={sidebarMobileItems} />

          {message && (
            <div className="mb-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
              {error}
            </div>
          )}

          {loading ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              Memuat buku...
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBooks.map((book) => (
                <article
                  key={book.id}
                  className="rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 shadow-lg pb-6 shadow-black/30"
                >
                  <div className="h-36 rounded-t-2xl bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900" />
                  <div className="mt-3 flex flex-col items-center space-y-3">
                    <h4 className="text-sm text-white font-semibold">
                      {book.title}
                    </h4>
                    <p className="text-xs text-white/60">by {book.author}</p>
                    <p className="text-xs text-white font-semibold">
                      Rp {book.price.toLocaleString("id-ID")}
                    </p>
                    <p className="text-xs line-through text-white/60">
                      Stok: {book.stock}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-col items-center">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(book.id)}
                        className="rounded-full bg-blue-500 px-4 py-2 text-[10px] text-white cursor-pointer font-semibold"
                      >
                        Tambah ke Cart
                      </button>

                      <span className="flex items-center text-[10px] font-semibold text-white">
                        Rp {book.price.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {!loading && filteredBooks.length === 0 && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
              Buku tidak ditemukan untuk kata kunci `{searchTerm}`.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default CartPage;
