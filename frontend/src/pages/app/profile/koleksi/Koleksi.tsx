import { useMemo, useState } from "react";
import { ListFilter, Heart } from "lucide-react";
import { useAuth } from "../../../../app/providers";
import { collectionBooks, collectionGenres } from "../../../../data/koleksi";

const ITEMS_PER_PAGE = 8;

function Koleksi() {
  const { user } = useAuth();
  const [activeGenre, setActiveGenre] = useState("All");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">("default");
  const [showSortMenu, setShowSortMenu] = useState(false);

const filteredBooks = useMemo(() => {
  let books =
    activeGenre === "All"
      ? [...collectionBooks]
      : collectionBooks.filter((book) => book.genre === activeGenre);

  switch (sortOrder) {
    case "asc":
      books.sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "desc":
      books.sort((a, b) => b.title.localeCompare(a.title));
      break;

    default:
      break;
  }

  return books;
}, [activeGenre, sortOrder]);

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  
  const pageBooks = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBooks.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredBooks]);

  
  const visiblePages = Array.from(
    { length: Math.min(8, totalPages) },
    (_, index) => index + 1,
  );

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

  const setGenre = (genre: string) => {
    setActiveGenre(genre);
    setCurrentPage(1);
  };

  if (!user) {
    return null;
  }
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 mt-8 ">
        <button
          type="button"
          onClick={() => setGenre("All")}
          className={`rounded-xl border cursor-pointer px-4 py-2 text-sm transition ${
            activeGenre === "All"
              ? "border-none bg-(--primary)/80 text-white"
              : "border-(--primary)/70 text-white/70 hover:bg-(--primary)/80 hover:text-white"
          }`}
        >
          Semua Genre
        </button>

        {collectionGenres.map((genre) => (
          <button
            key={genre.id}
            type="button"
            onClick={() => setGenre(genre.value)}
            className={`rounded-xl border cursor-pointer px-4 py-2 text-sm transition ${
              activeGenre === genre.value
                ? "border-none bg-(--primary)/80 text-white"
                : "border-(--primary)/70 text-white hover:bg-(--primary)/80 hover:text-white"
            }`}
          >
            {genre.label}
          </button>
        ))}

        <button
          type="button"
          className="inline-flex items-center cursor-pointer gap-2 rounded-lg bg-(--primary)/70 px-2 py-2 text-sm text-white"
        >
          <ListFilter className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-6">
        <div className="overflow-x-auto pb-2">
          <div className={`grid gap-6 w-max ${
            pageBooks.length > 4
                ? "grid-rows-2 grid-flow-col"
                : "grid-flow-row grid-cols-4"
            }`}>
            {pageBooks.map((book) => {
              const isFavorite = favoriteIds.includes(book.id);

              return (
                <article
                  key={book.id}
                  className="w-64 rounded-3xl bg-(--background) text-white"
                >
                  <div className="h-40 overflow-hidden rounded-t-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(24,255,136,0.14),rgba(255,255,255,0.03))]">
                    {book.image ? (
                      <img
                        src={book.image}
                        alt={book.title}
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>

                  <div className="px-1 pb-1 pt-4">
                    <h3 className="mt-3 text-base font-semibold leading-snug">
                      {book.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/60">
                      by {book.author}
                    </p>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-md font-semibold text-white">
                        Rp{book.currentPrice.toLocaleString("id-ID")}
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
                        onClick={() => toggleFavorite(book.id)}
                        aria-label={
                          isFavorite
                            ? `Hapus ${book.title} dari favorit`
                            : `Tambahkan ${book.title} ke favorit`
                        }
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-(--highemphasis)/5 transition hover:bg-(--highemphasis)/20"
                      >
                        <Heart
                          size={24}
                          className={`transition-transform duration-200 ${
                            isFavorite
                              ? "fill-(--primary) text-(--primary)"
                              : "fill-(--highemphasis)"
                          } ${
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
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {visiblePages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            className={`h-9 min-w-9 cursor-pointer rounded-lg px-3 text-sm transition ${
              currentPage === page
                ? "bg-(--primary) text-black"
                : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => setCurrentPage(totalPages)}
          className="ml-1 rounded-lg cursor-pointer bg-white/10 px-4 py-2 text-sm text-white/70 transition hover:bg-white/15 hover:text-white"
        >
          Jump to end
        </button>
      </div>
    </section>
  );
}

export default Koleksi;
