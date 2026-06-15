import { useEffect, useMemo, useState } from "react";
import { useSearch } from "../../../app/providers";
import SidebarMobileNav from "../../../components/uionline/sidebarMobile/SidebarMobileNav";
import { apiRequest, type ApiResponse } from "../../../lib/api";

interface OrderSummary {
  id: number;
  total_price: number;
  discount_amount: number;
  final_price: number;
  status: string;
  items_count: number;
  primary_book: {
    title: string;
    author: string;
    cover: string | null;
    price: number;
  } | null;
  created_at: string | null;
}

interface OrderStatusPageProps {
  status: "pending" | "paid";
  emptyText: string;
}

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

function resolveCover(cover: string | null) {
  if (!cover) return null;
  if (/^https?:\/\//i.test(cover)) return cover;

  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/api$/, "").replace(/\/$/, "");
  if (!apiUrl) return cover;

  return `${apiUrl}/${cover.replace(/^\/+/, "")}`;
}

function formatPrice(value: number) {
  return `Rp${value.toLocaleString("id-ID")}`;
}

function OrderStatusPage({ status, emptyText }: OrderStatusPageProps) {
  const { searchTerm } = useSearch();
  const [orders, setOrders] = useState<OrderSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadOrders = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiRequest<ApiResponse<OrderSummary[]>>(
        `/orders?status=${status}`,
      );
      setOrders(response.data);
    } catch {
      setError("Gagal memuat pesanan");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders().catch(() => {
      setError("Gagal memuat pesanan");
      setLoading(false);
    });
  }, [status]);

  const filteredOrders = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) return orders;

    return orders.filter((order) =>
      [
        String(order.id),
        String(order.total_price),
        String(order.final_price),
        order.status,
      ].some((value) => value.toLowerCase().includes(keyword)),
    );
  }, [orders, searchTerm]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <div className="py-16">
        <main className="mx-auto w-full max-w-6xl px-4 pt-10 md:ml-[14rem] md:mr-8 md:w-auto md:px-0">
          <SidebarMobileNav items={sidebarMobileItems} />

          {error && (
            <div className="mb-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
              {error}
            </div>
          )}

          {loading ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              Memuat pesanan...
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredOrders.map((order) => (
                <article
                  key={order.id}
                  className="rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 shadow-lg pb-6 shadow-black/30"
                >
                  <div className="h-36 rounded-t-2xl bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900" />
                    {/* <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      {order.primary_book?.cover ? (
                        <img
                          src={resolveCover(order.primary_book.cover) ?? undefined}
                          alt={order.primary_book.title}
                          className=" h-36 rounded-t-2xl object-cover"
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-cyan-200 via-orange-200 to-amber-300" />
                      )}
                    </div> */}

                    <div className=" flex flex-col items-center pt-4 space-y-3">
                      <h2 className="text-[18px] font-semibold leading-tight">
                        {order.primary_book?.title ?? `Pesanan ${order.id}`}
                      </h2>
                      <p className=" text-[13px] text-white/75">
                        {order.primary_book?.author ? `by ${order.primary_book.author}` : `${order.items_count} item`}
                      </p>

                      <p className=" text-[13px] text-white/80">
                        <span
                          className={
                            status === "paid" ? "line-through text-white/55" : ""
                          }
                        >
                          {formatPrice(order.total_price)}
                        </span>
                      </p>

                      <p className=" text-[12px] font-medium text-white/85">
                        {status === "pending" ? "diproses" : "berhasil"}
                      </p>

                      <div className=" flex items-center justify-between gap-3">
                        <button
                          type="button"
                          className="rounded-xl bg-blue-700 px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-[#1557d0]"
                        >
                          Lihat Detail
                        </button>
                        {status === "paid" ? (
                          <span className="text-[12px] text-white/75 line-through">
                            {formatPrice(order.final_price)}
                          </span>
                        ) : (
                          <span className="text-[12px] text-white/75">
                            {formatPrice(order.final_price)}
                          </span>
                        )}
                      </div>
                    </div>
                </article>
              ))}
            </div>
          )}

          {!loading && filteredOrders.length === 0 && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
              {emptyText}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default OrderStatusPage;
