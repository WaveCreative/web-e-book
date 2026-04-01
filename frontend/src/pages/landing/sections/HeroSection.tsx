function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0f10] text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

      <div className="mx-auto flex w-full max-w-6xl items-center px-16 py-40">
        <div className="relative">
          <div className="relative overflow-visible z-10 w-[400px] h-[250px] rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
            <h1 className="absolute text-4xl leading-normal font-semibold w-[600px]">
              Jelajahi Dunia <span className="block"> Pengetahuan dengan </span> <span className="block"> Ribuan E-Book Hanya di</span>
              <span className="block text-emerald-400">Ebook.com</span>
            </h1>
          </div>

          <div className="absolute -bottom-20 left-42 z-0 w-[400px] h-[250px] rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm shadow-lg backdrop-blur-md">
            <button className="mt-6 absolute bottom-8 left-58 rounded-lg bg-white px-4 py-2 text-md font-medium text-slate-900 transition hover:bg-slate-100">
              Jelajahi E-Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
