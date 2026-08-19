import { Star } from "lucide-react";
import { features, readers } from "../../../data/whyChooseUss";

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-(--primary) sm:text-xs">
            {"• Mengapa Memilih Kami? •"}
          </p>

          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            Mengapa Kami?
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-(--highemphasis)/60 sm:text-sm">
            Kami menghadirkan pengalaman membaca digital terbaik dengan koleksi
            lengkap dan fitur yang memudahkan.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Image */}
          <div className="relative flex items-center justify-center">
            {/* <div className="absolute h-56 w-56 rounded-full bg-(--primary)/25 blur-2xl sm:h-72 sm:w-72" /> */}

            {/* <div className="relative z-10 flex h-64 w-64 items-end justify-center sm:h-80 sm:w-80"> */}
              {/* <div className="absolute inset-0 rounded-full border border-(--primary)/30 bg-(--primary)/10" /> */}
              
                <img
                  src="https://res.cloudinary.com/dgffa1m7j/image/upload/v1782797050/asset_3d_ip3k1o.svg"
                  alt="..."
                  className="relative h-75 w-full object-contain sm:h-125"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
             
            {/* </div> */}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.id}
                  className="rounded-lg text-center border border-(--primary)/35 bg-(--highemphasis)/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-(--primary) hover:bg-(--primary)/5 sm:p-5"
                >
                  <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-(--primary)/60 bg-(--primary)/10">
                    <Icon
                      size={36}
                      fill="currentColor"
                      className="text-(--primary)"
                    />
                  </div>

                  <h3 className="text-sm font-semibold sm:text-md">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-(--highemphasis)/60 sm:text-sm">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-8 flex flex-col gap-4 rounded-lg border border-(--primary)/35 bg-(--highemphasis)/5 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--primary)/60 bg-(--primary)/10">
              <Star
                className="h-4 w-4 text-(--primary)"
                fill="currentColor"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold sm:text-md">
                Dipercaya oleh jutaan pembaca
              </h3>

              <p className="mt-1 text-xs text-(--highemphasis)/60 sm:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            {/* Readers */}
            <div className="flex items-center pl-2">
              {readers.map((reader, index) => (
                <div
                  key={reader.id}
                  className="group relative -ml-2 first:ml-0"
                >
                  <div className="relative h-8 w-8 overflow-visible rounded-full border-2 border-black transition duration-300 group-hover:-translate-y-3">
                    <div className="h-full w-full overflow-hidden rounded-full bg-(--highemphasis)/20">
                      {reader.image && (
                        <img
                          src={reader.image}
                          alt={reader.name}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>

                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {reader.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Users */}
            <button type="button" className="rounded-md bg-(--primary) cursor-pointer hover:bg-(--primary)/70 px-3 py-2 text-xs font-semibold text-black sm:px-4 sm:text-md">
              1.2M+ Pengguna Aktif
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;