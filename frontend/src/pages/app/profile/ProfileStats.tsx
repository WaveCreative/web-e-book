import { genreStatistics, profileStats } from "../../../data/profile";

function ProfileStats() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {profileStats.map((stat, index) => {
        const Logo = stat.logo;

        if (index === 2) {
          return (
            <article
              key={stat.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white">{stat.label}</p>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </h3>
                </div>

                <Logo className="h-5 w-5 text-(--primary)" />
              </div>
              <div>
                <svg viewBox="0 0 260 100" className="h-22 w-full">
                  <polyline
                    points="15,65 70,30 120,55 180,20 205,10"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />

                  <circle cx="70" cy="30" r="4" fill="#005C9E" />
                  <circle cx="120" cy="55" r="4" fill="#FFC107" />
                  <circle cx="180" cy="20" r="4" fill="#CF0B0C" />
                </svg>

                <div className="flex justify-between">
                  {genreStatistics.map((genre) => (
                    <span key={genre.id} className={`text-xs ${genre.color}`}>
                      {genre.label}
                    </span>
                  ))}
                </div>
              </div>{" "}
            </article>
          );
        }

        return (
          <article
            key={stat.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-sm text-white">{stat.label}</p>

            <div className="mt-2 flex items-center justify-between">
              <Logo className="h-24 w-24 text-(--primary)" />

              <h3 className="text-4xl font-bold shadow-xl text-shadow-(--primary)">{stat.value}</h3>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default ProfileStats;
