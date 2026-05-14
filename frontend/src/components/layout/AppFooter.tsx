function Footer() {
  return (
    <footer className="fixed bottom-0 z-20 w-full rounded-t-xl shadow-white shadow-2xl backdrop-blur">
      <div className="mx-auto flex leading-normal max-w-xl flex-row gap-3 px-3 py-3 text-white md:max-w-7xl md:flex-row md:items-center md:justify-between">
        <h3 className="tracking-[0.1em] text-xs md:text-lg ">
          Penawaran Terbatas! Gunakan Kode Promo untuk Potongan 
          <span className="flex">Harga Hebat! Kode promo MR123.</span>
        </h3>
        <div className="flex items-center gap-4">
          <button className="rounded-lg bg-white p-2 w-20 text-xs cursor cursor-pointer font-semibold text-black md:text-sm md:w-40">
            Ambil Promo
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
