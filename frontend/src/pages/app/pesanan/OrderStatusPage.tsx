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
  created_at: string | null;
}

interface OrderStatusPageProps {
  status: "pending" | "paid";
  heading: string;
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

function OrderStatusPage({ status, heading, emptyText }: OrderStatusPageProps) {
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

  const handlePay = async (orderId: number) => {
    try {
      await apiRequest(`/orders/${orderId}/pay`, {
        method: "PATCH",
      });
      await loadOrders();
    } catch {
      setError("Gagal mengubah status menjadi paid");
    }
  };

  const handleCancel = async (orderId: number) => {
    try {
      await apiRequest(`/orders/${orderId}/cancel`, {
        method: "PATCH",
      });
      await loadOrders();
    } catch {
      setError("Gagal membatalkan pesanan");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <div className="py-16">
        <main className="mx-auto w-full max-w-6xl px-4 pt-10 md:ml-[14rem] md:mr-8 md:w-auto md:px-0">
          <SidebarMobileNav items={sidebarMobileItems} />

          <div className="mb-4">
            <h1 className="text-2xl font-semibold text-white">{heading}</h1>
            <p className="mt-1 text-sm text-white/60">
              Pesanan yang tampil di halaman ini diambil dari backend.
            </p>
          </div>

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
            <div className="grid gap-4 md:grid-cols-2">
              {filteredOrders.map((order) => (
                <article
                  key={order.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg shadow-black/30"
                >
                  <div className="flex min-h-[136px]">
                    <div className="flex w-40 flex-col justify-between gap-2 bg-slate-900 p-4 text-center text-white">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                        Order
                      </div>
                      <div className="text-3xl font-semibold">#{order.id}</div>
                      <div className="text-[11px] text-white/60">
                        {order.created_at ? new Date(order.created_at).toLocaleString("id-ID") : "-"}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-4 text-slate-900">
                      <div>
                        <h2 className="text-sm font-semibold">Status {order.status}</h2>
                        <p className="mt-2 text-[11px] text-black font-semibold">
                          Total: Rp {order.total_price.toLocaleString("id-ID")}
                        </p>
                        <p className="mt-1 text-[11px] text-black font-semibold">
                          Diskon: Rp {order.discount_amount.toLocaleString("id-ID")}
                        </p>
                        <p className="mt-1 text-[11px] text-black font-semibold">
                          Final: Rp {order.final_price.toLocaleString("id-ID")}
                        </p>
                      </div>

                      <div className="flex items-center justify-end gap-3">
                        {status === "pending" && (
                          <>
                            <button
                              type="button"
                              onClick={() => handlePay(order.id)}
                              className="rounded-full border border-green-500 px-4 py-1 text-[10px] font-semibold text-green-600 transition hover:bg-green-500 hover:text-white"
                            >
                              Bayar
                            </button>
                            <button
                              type="button"
                              onClick={() => handleCancel(order.id)}
                              className="rounded-full border border-red-500 px-4 py-1 text-[10px] font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                            >
                              Batalkan
                            </button>
                          </>
                        )}
                        {status === "paid" && (
                          <span className="rounded-full border border-emerald-500 px-4 py-1 text-[10px] font-semibold text-emerald-500">
                            Berhasil
                          </span>
                        )}
                      </div>
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
