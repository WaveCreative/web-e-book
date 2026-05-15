import AppHeader from "../../../components/layout/AppHeader";
import AppSidebar from "../../../components/layout/AppSidebar";
import SidebarMobileNav from "../../../components/uionline/sidebarMobile/SidebarMobileNav";
import { useSearch } from "../../../app/providers";
import { featuredBooks } from "../../../data/cart";
import { useMemo } from "react";

const sidebarMobileItems = [
  { label: "Keranjang", to: "/cart" },
  { label: "Voucher", to: "/voucher" },
  {
    label: "Pesanan",
    to: "/orders",
    children: [
      { label: "Proses", to: "/cart/proses" },
      { label: "Berhasil", to: "/cart/berhasil" },
    ],
  },
];

function CartPage() {
  const { searchTerm } = useSearch();

  const filteredBooks = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) return featuredBooks;

    return featuredBooks.filter((book) =>
      [book.title, book.author, book.mood].some((value) =>
        value.toLowerCase().includes(keyword),
      ),
    );
  }, [searchTerm]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <div className="py-16">
        <main className="mx-auto w-full max-w-6xl px-4 pt-10 md:ml-[14rem] md:mr-8 md:w-auto md:px-0">
          <SidebarMobileNav items={sidebarMobileItems} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => (
              <article
                key={book.title}
                className="rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 shadow-lg pb-6 shadow-black/30"
              >
                <div
                  className={`h-36 rounded-t-2xl bg-linear-to-br ${book.gradient}`}
                />
                <div className="mt-3 flex flex-col items-center space-y-3">
                  <h4 className="text-sm text-white font-semibold">
                    {book.title}
                  </h4>
                  <p className="text-xs text-white/60">by {book.author}</p>
                  <p className="text-xs text-white font-semibold">
                    {book.diskon}
                  </p>
                  <p className="text-xs line-through text-white/60">
                    {book.harga}
                  </p>
                </div>
                <div className="mt-3 flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <button className="rounded-full bg-blue-500 px-4 py-2 text-[10px] text-white cursor-pointer font-semibold">
                      Lihat Detail
                    </button>

                    <span className="flex items-center text-[10px] font-semibold text-white">
                      {book.diskon}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredBooks.length === 0 && (
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
