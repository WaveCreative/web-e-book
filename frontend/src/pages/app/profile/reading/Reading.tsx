import { useState } from "react";
import { Heart } from "lucide-react";
import { readingBooks } from "../../../../data/readings";

function Reading() {
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
    <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
      {readingBooks.map((book) => {
        const isFavorite = favoriteIds.includes(book.id);

        return (
          <article
            key={book.id}
            className="w-[16rem] shrink-0 bg-(--background) text-white"
          >
            <div className="h-40 overflow-hidden rounded-t-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(24,255,136,0.14),rgba(255,255,255,0.03))]">
              {book.image ? (
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>

            <div className="px-1 pb-1 pt-3">
              <div className="mt-1">
                <div className="mb-2 flex items-center justify-between text-xs text-white">
                  <span>Progress Membaca</span>
                  <span>{book.progress}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-lg bg-white">
                  <div
                    className="h-full rounded-md bg-(--styled)"
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
                <h3 className="mt-2 text-base leading-snug">
                  10/90 Halaman Selesai
                </h3>
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
  );
}

export default Reading;
