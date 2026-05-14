import { useMemo, useState } from "react";
import { useSearch } from "../../../app/providers";
import AppHeader from "../../../components/layout/AppHeader";
import AppSidebar from "../../../components/layout/AppSidebar";
import NotificationBanner from "../../../components/uionline/option/NotificationBanner";
import SidebarMobileNav from "../../../components/uionline/sidebarMobile/SidebarMobileNav";
import Buku from "../../../assets/buku";

const sidebarMobileItems = [
  { label: "Keranjang", to: "/cart" },
  { label: "Voucher", to: "/voucher" },
  {
    label: "Pesanan",
    to: "/orders",
    children: [
      { label: "Proses", to: "/cart/proses" },
      { label: "Berhasil", to: "/cart/berhasil" },
    ],
  },
];

const vouchers = [
  {
    title: "Diskon 5% s/d Rp30RB",
    code: "ROMANCE5",
    tag: "Romance",
    subtitle: "Starter Bundle",
    minimum: "Min. Blj Rp50RB",
    issued: "Issued 2026",
    bookTone: "text-black",
    subTone: "text-black",
    imageTone: "bg-sky-300",
    accentTone: "bg-black text-white",
  },
  {
    title: "Diskon 5% s/d Rp20RB",
    code: "HORROR5",
    tag: "Horror",
    subtitle: "Curated Picks",
    minimum: "Min. Blj Rp40RB",
    issued: "Issued 2026",
    bookTone: "text-yellow-300",
    subTone: "text-yellow-300",
    imageTone: "bg-red-800",
    accentTone: "bg-yellow-300 text-white",
  },
  {
    title: "Diskon 5% s/d Rp100RB",
    code: "EDUKASI5",
    tag: "Edukasi",
    subtitle: "Unlimited collection pass",
    minimum: "Min. Blj Rp200RB",
    issued: "Issued 2026",
    bookTone: "text-blue-600",
    subTone: "text-blue-600",
    imageTone: "bg-gray-400",
    accentTone: "bg-blue-600 text-white",
  },
];

function VoucherPage() {
  const { searchTerm } = useSearch();
  const [notification, setNotification] = useState<{
    open: boolean;
    tone: "success" | "error";
    title: string;
    description: string;
  }>({
    open: false,
    tone: "success",
    title: "",
    description: "",
  });

  const filteredVouchers = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) return vouchers;

    return vouchers.filter((voucher) =>
      [voucher.title, voucher.code, voucher.tag, voucher.subtitle].some((value) =>
        value.toLowerCase().includes(keyword)
      )
    );
  }, [searchTerm]);

  const handleUseVoucher = (voucherTitle: string) => {
    setNotification({
      open: true,
      tone: "success",
      title: "Claim berhasil",
      description: `${voucherTitle} siap dipakai. Nanti saat pakai backend, bagian ini tinggal diisi dari response API.`,
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <AppHeader />
      <div className="py-16">
        <AppSidebar />
        <main className="mx-auto w-full max-w-6xl px-4 pt-10 md:ml-[14rem] md:mr-8 md:w-auto md:px-0">
          <SidebarMobileNav items={sidebarMobileItems} />

          <NotificationBanner
            open={notification.open}
            tone={notification.tone}
            title={notification.title}
            description={notification.description}
            onClose={() =>
              setNotification((prev) => ({
                ...prev,
                open: false,
              }))
            }
          />

          <div className="grid gap-4 md:grid-cols-2">
            {filteredVouchers.map((voucher) => (
              <article
                key={voucher.code}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/95 shadow-lg shadow-black/30"
              >
                <div className="flex min-h-[136px]">
                  <div
                    className={`flex w-40 flex-col justify-between gap-2 text-center p-4 ${voucher.imageTone}`}
                  >
                    <div className={`flex items-center  justify-center ${voucher.bookTone}`}>
                      <Buku />
                    </div>
                    <div>
                      <span
                        className={`inline-flex rounded-full px-4 py-2 text-xs  ${voucher.accentTone}`}
                      >
                        {voucher.tag}
                      </span>
                      <p className={`mt-2 text-xs text-black font-semibold ${voucher.subTone}`}>
                        {voucher.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4 text-slate-900">
                    <div>
                      <h2 className="text-sm font-semibold">{voucher.title}</h2>
                      <p className="mt-2 text-[11px] text-slate-500">
                        {voucher.minimum}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] text-slate-400">
                        {voucher.issued}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleUseVoucher(voucher.title)}
                        className="rounded-full border border-blue-500 px-4 py-1 text-[10px] font-semibold text-blue-500 transition hover:bg-blue-500 hover:text-white"
                      >
                        Pakai
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredVouchers.length === 0 && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
              Voucher tidak ditemukan untuk kata kunci `{searchTerm}`.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default VoucherPage;
