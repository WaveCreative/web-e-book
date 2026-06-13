import { useMemo, useState } from "react";
import { useSearch } from "../../../app/providers";
import NotificationBanner from "../../../components/uionline/option/NotificationBanner";
import SidebarMobileNav from "../../../components/uionline/sidebarMobile/SidebarMobileNav";
import Buku from "../../../assets/buku";
import { apiRequest, type ApiResponse } from "../../../lib/api";

const sidebarMobileItems = [
  { label: "Keranjang", to: "/cart" },
  { label: "Voucher", to: "/voucher" },
  {
    label: "Pesanan",
    to: "/orders",
    children: [
      { label: "Proses", to: "/proses" },
      { label: "Berhasil", to: "/berhasil" },
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
    kode: "kode : MR123",
    sdk: "S&K",
    bookTone: "text-black",
    imageTone: "bg-sky-300",
    accentTone: "bg-black text-white",
  },
  {
    title: "Diskon 5% s/d Rp20RB",
    code: "HORROR5",
    tag: "Horror",
    subtitle: "Curated Picks",
    minimum: "Min. Blj Rp40RB",
    kode: "kode : MR123",
    sdk: "S&K",
    bookTone: "text-yellow-300",
    imageTone: "bg-red-800",
    accentTone: "bg-yellow-300 text-white",
  },
  {
    title: "Diskon 5% s/d Rp100RB",
    code: "EDUKASI5",
    tag: "Edukasi",
    subtitle: "Unlimited collection pass",
    minimum: "Min. Blj Rp200RB",
    kode: "kode : MR123",
    sdk: "S&K",
    bookTone: "text-blue-600",
    imageTone: "bg-gray-300",
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

  const handleUseVoucher = async (voucherCode: string, voucherTitle: string) => {
    setNotification({
      open: true,
      tone: "success",
      title: "Memproses voucher",
      description: "Sedang dicek ke backend...",
    });

    try {
      const response = await apiRequest<
        ApiResponse<{
          code: string;
          discount_percent: number;
          discount_amount: number;
          subtotal: number;
          final_total: number;
        }>
      >("/vouchers/apply", {
        method: "POST",
        body: JSON.stringify({ code: voucherCode }),
      });

      setNotification({
        open: true,
        tone: "success",
        title: "Claim berhasil",
        description: `${voucherTitle} valid. Diskon Rp ${Number(
          response.data.discount_amount
        ).toLocaleString("id-ID")} siap dipakai.`,
      });
    } catch (err) {
      setNotification({
        open: true,
        tone: "error",
        title: "Voucher gagal dipakai",
        description:
          err instanceof Error ? err.message : "Voucher tidak bisa dipakai",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <div className="py-16">
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
                className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg shadow-black/30"
              >
                <div className="flex min-h-[136px]">
                  <div
                    className={`flex w-40 flex-col justify-between gap-2 p-4 text-center ${voucher.imageTone}`}
                  >
                    <div className={`flex items-center justify-center ${voucher.bookTone}`}>
                      <Buku />
                    </div>
                    <div>
                      <span
                        className={`inline-flex rounded-full px-8 py-3 text-xs ${voucher.accentTone}`}
                      >
                        {voucher.tag}
                      </span>
                      <p
                        className={`mt-2 text-xs font-semibold text-black ${voucher.bookTone}`}
                      >
                        {voucher.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4 text-slate-900">
                    <div>
                      <h2 className="text-sm font-semibold">{voucher.title}</h2>
                      <p className="mt-2 text-[11px] text-black font-semibold">
                        {voucher.minimum}
                      </p>
                      <p className="mt-2 text-[11px] text-black font-semibold">
                        {voucher.kode}{" "}
                        <span className="text-[10px] text-blue-500">
                          <a href="#">{voucher.sdk}</a>
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => handleUseVoucher(voucher.code, voucher.title)}
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
