function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl items-center px-6 py-50 md:px-16 md:py-35">
        <div className="relative">
          <div className="relative z-10 h-[190px] w-[260px] overflow-visible rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md md:h-[250px] md:w-[400px] md:p-6">
            <h1 className="absolute w-[300px] text-lg font-semibold leading-[2.3] tracking-[0.12em] md:w-[600px] md:text-4xl md:tracking-[0.1em] md:leading-normal">
              Jelajahi Dunia
              <span className="block">Pengetahuan dengan</span>
              <span className="block">Ribuan E-Book Hanya di</span>
              <span className="block text-green-400">Ebook.com</span>
            </h1>
          </div>

          <div className="absolute -bottom-18 left-14 z-0 h-[190px] w-[260px] rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm shadow-lg backdrop-blur-md md:-bottom-20 md:left-42 md:h-[250px] md:w-[400px]">
            <a href="#flash-sale" className="absolute bottom-5 left-1/2 -translate-x-1/5 rounded-lg bg-white px-4 py-2 text-xs font-medium text-slate-900 transition hover:bg-slate-100 md:bottom-8 md:left-58 md:translate-x-0 md:text-sm">
              Jelajahi E-Book
            </a>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}

export default HeroSection;
