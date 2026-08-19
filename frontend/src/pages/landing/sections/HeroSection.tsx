function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-linear-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-8 -bottom-4 h-100 w-100 rounded-full bg-linear-to-br from-white/20 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl items-center px-6 mt-55 md:px-16 md:mt-40">
        <div className="relative">
          <div className="relative z-10 h-47.5 w-65 overflow-visible rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md md:h-62.5 md:w-100 md:p-6">
            <h1 className="absolute w-75 text-lg font-semibold leading-[2.3] tracking-[0.12em] md:w-150 md:text-4xl md:tracking-widest md:leading-normal">
              Jelajahi Dunia
              <span className="block">Pengetahuan dengan</span>
              <span className="block">Ribuan E-Book Hanya di</span>
              <span className="block text-(--primary)">Ebook.com</span>
            </h1>
          </div>

          <div className="absolute -bottom-18 left-14 z-0 h-47.5 w-65 rounded-xl border border-(--border)/20 bg-white/10 px-4 py-2 text-sm shadow-lg backdrop-blur-md md:-bottom-20 md:left-42 md:h-62.5 md:w-100">
            <a href="#trending-books" className="absolute bottom-5 left-1/2 -translate-x-1/5 rounded-lg bg-(--primary)/70 px-4 py-2 text-xs font-medium text-(--highemphasis) transition hover:bg-(--primary)/50 md:bottom-8 md:left-58 md:translate-x-0 md:text-sm">
              Jelajahi E-Book
            </a>
          </div>
        </div>
      </div>

      <footer className="relative mt-84 w-full rounded-t-lg shadow-(--background) bg-linear-to-br from-white/5 to-white/10">
        <div className="mx-auto flex leading-normal max-w-xl flex-row gap-3 px-3 py-3 text-white md:max-w-7xl md:flex-row md:items-center md:justify-between">
          <h3 className="tracking-widest text-xs md:text-lg ">
            Penawaran Terbatas! Gunakan Kode Promo untuk Potongan 
            <span className="flex">Harga Hebat! Kode promo MR123.</span>
          </h3>
          <div className="flex items-center gap-4">
            <button className="rounded-lg bg-(--styled) p-2 w-20 text-xs cursor cursor-pointer font-semibold md:text-sm md:w-40">
              Ambil Promo
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default HeroSection;
