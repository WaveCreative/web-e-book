import { Heart } from "lucide-react";
import { useState } from "react";
import { recommendedBooks } from "../../../data/profile";

function RecommendedBooksRow() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [animatingFavoriteId, setAnimatingFavoriteId] = useState<number | null>(
    null,
  );

  const toggleFavorite = (bookId: number) => {
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

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-white">
          Rekomendasi Buku Terbaru
        </h2>
      </div>

      <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
        {recommendedBooks.map((book) => {
          const isFavorite = favoriteIds.includes(book.id);

          return (
            <article
              key={book.id}
              className="w-[16rem] shrink-0 rounded-3xl bg-white/5 text-white"
            >
              <div className="h-40 overflow-hidden rounded-t-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(24,255,136,0.14),rgba(255,255,255,0.03))]">
                {book.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-90 w-90 object-cover"
                  />
                ) : null}
              </div>

              <div className="px-2 pb-2 pt-4">
                <h3 className="text-base font-semibold leading-snug">
                  {book.title}
                </h3>
                <p className="mt-1 text-sm text-white/60">by {book.author}</p>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-md font-semibold text-white">
                    Rp{book.price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-sm text-white/45 line-through">
                    Rp{book.originalPrice.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
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
                    onClick={() => toggleFavorite(book.id)}
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
    </section>
  );
}

export default RecommendedBooksRow;
