function Footer() {
  return (
    <footer className="fixed bottom-0 z-30 w-full border-b border-white/60 bg-transparent backdrop-blur">
      <div className="mx-auto flex leading-normal max-w-7xl flex-col gap-3 px-6 py-6 text-white md:flex-row md:items-center md:justify-between">
        <h2 className="tracking-[0.1em]">
          Penawaran Terbatas! Gunakan Kode Promo untuk Potongan 
          <span className="flex">Harga Hebat! Kode promo MR123.</span>
        </h2>
        <div className="flex items-center gap-4">
          <button className="rounded-lg bg-white p-3 w-40 text-md font-semibold text-black">
            Ambil Promo
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
