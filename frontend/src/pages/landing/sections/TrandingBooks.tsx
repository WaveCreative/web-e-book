import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { books } from "../../../data/books";
import { useEffect, useState } from "react";
// const [books, setBooks] = useState<Book[]>([]);
// import { getTrendingBooks } from "../../../services/bookService";
// import type { Book } from "../../../types/book";

function TrandingBooks() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [animatingFavoriteId, setAnimatingFavoriteId] = useState<number | null>(
    null,
  );

  const toogleFavorite = (bookId: number) => {
    setFavoriteIds((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId],
    );

    setAnimatingFavoriteId(bookId);
    setTimeout(() => {
      setAnimatingFavoriteId(null);
    }, 200);
  };
  //   const [books, setBooks] = useState<Book[]>([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     getTrendingBooks()
  //       .then(setBooks)
  //       .finally(() => setLoading(false));
  //   }, []);
  return (
    <section
      id="trending-books"
      className="relative overflow-hidden px-6 py-20"
    >
      <div className="relative mx-auto max-w-3xl md:max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs sm:text-xs font-semibold uppercase tracking-[0.25em] text-(--primary)">
            {"• Trending Books •"}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Trending Books</h2>

          <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-(--highemphasis)/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            scelerisque nulla eu.
          </p>
        </div>

        {/* Books */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-8">
          {books.map((book) => {
            const isFavorite = favoriteIds.includes(book.id);
            return (
              <article key={book.id} className="w-full max-w-60">
                {/* Image */}
                <div className="mb-2 h-40 overflow-hidden rounded-t-xl bg-(--highemphasis)/10">
                  {book.image && (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-75 object-cover"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="min-w-0 px-4 space-y-3">
                  <h3 className="truncate text-xl font-medium italic">
                    {book.title}
                  </h3>

                  <p className="mt-1 text-xs text-(--highemphasis)/70">
                    by {book.author}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-md font-bold">
                      Rp{book.price.toLocaleString("id-ID")}
                    </span>

                    <span className="text-sm text-(--highemphasis)/40 line-through">
                      Rp{book.originalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      className="flex-1 cursor-pointer rounded-lg bg-(--styled) px-3 py-2 text-sm font-medium text-white transition hover:opacity-80"
                    >
                      Lihat Buku
                    </button>

                    <button
                      type="button"
                      aria-label={
                        isFavorite
                          ? `Hapus ${book.title} dari favorit`
                          : `Tambahkan ${book.title} ke favorit`
                      }
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-(--highemphasis)/5 transition hover:bg-(--highemphasis)/20"
                      onClick={() => toogleFavorite(book.id)}
                    >
                      <Heart
                        size={24}
                        className={`transition-transform duration-200 ${
                          isFavorite
                            ? "text-(--primary) fill-(--primary) "
                            : "fill-(--highemphasis)"
                        } } ${
                          animatingFavoriteId === book.id
                            ? "scale-125"
                            : "scale-100"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            className="rounded-lg cursor-pointer bg-(--primary)/85 px-4 py-2 text-xs md:text-sm md:px-6 md:py-3 text-(--background) font-medium transition hover:opacity-80"
          >
            Lihat Semua
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous books"
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-(--highemphasis)/5 text-(--highemphasis)/70 transition hover:bg-(--highemphasis)/20 hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              aria-label="Next books"
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-(--highemphasis)/5 text-(--highemphasis)/70 transition hover:bg-(--highemphasis)/20 hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrandingBooks;
