import { Star } from "lucide-react";
import { categories } from "../../../data/kategori";

function Categories() {
  // const [categories, setCategories] = useState<Kategori[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getCategories()
  //     .then(setCategories)
  //     .finally(() => setLoading(false));
  // }, []);
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-linear-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-8 -bottom-4 h-100 w-100 rounded-full bg-linear-to-br from-white/20 to-transparent" />
      <div className="mx-auto max-w-5xl items-center">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs sm:text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
            {"> Kategori <"}
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold">Kategori</h1>

          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-(--highemphasis)/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            scelerisque nulla eu.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {categories.map((kategori) => {
            const Icon = kategori.icon;

            return (
              <article
                key={kategori.id}
                className="
                  w-full
                  rounded-lg
                  border border-(--primary)/40
                  bg-(--highemphasis)/4
                  p-4
                  text-center
                  transition
                  hover:-translate-y-1
                  hover:border-(--primary)
                  hover:bg-(--primary)/6
                  backdrop-blur-sm

                  sm:w-[calc(50%-10px)]
                  md:w-[calc(33.333%-14px)]
                "
              >
                {/* Icon */}
                <div className="mx-auto mb-3 flex h-15 w-15 items-center justify-center rounded-full border border-(--primary)/60 bg-(--primary)/10">
                  <Icon
                    className="h-10 w-10 text-(--primary)/80"
                    fill={kategori.fill}
                  />
                </div>

                {/* Name */}
                <h2 className="text-lg font-semibold">{kategori.name}</h2>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-(--highemphasis)/60">
                  {kategori.description}
                </p>

                {/* Bottom info */}
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-(--highemphasis)">
                    {kategori.bookCount.toLocaleString("id-ID")}+ Buku Tersedia
                  </span>

                  <span className="flex items-center gap-1 text-(--highemphasis)/80">
                    <Star className="h-4 w-4 fill-(--accent1) text-(--accent1)" />
                    {kategori.rating}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
