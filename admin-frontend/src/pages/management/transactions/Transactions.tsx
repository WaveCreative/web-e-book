import EntityManagementPage from "../../../components/ui/EntityManagementPage";
import { adminTransactions } from "../../../data/adminEntities";

function Transactions() {
  return (
    <EntityManagementPage
      title="Subscription Transactions"
      description="Kelola riwayat transaksi langganan yang tampil di profile user."
      stats={[
        { label: "Transactions", value: String(adminTransactions.length), note: "Data mock history transaksi frontend." },
        { label: "Paid", value: String(adminTransactions.filter((item) => item.status === "Paid").length), note: "Transaksi berhasil." },
        { label: "Pending", value: String(adminTransactions.filter((item) => item.status === "Pending").length), note: "Masih diproses." },
        { label: "Cancelled", value: String(adminTransactions.filter((item) => item.status === "Cancelled").length), note: "Dibatalkan user." },
      ]}
      items={adminTransactions}
      columns={[
        { header: "Invoice", render: (row) => row.invoice },
        { header: "Date", render: (row) => row.createdAt },
        { header: "Type", render: (row) => row.type },
        { header: "Payment", render: (row) => row.payment },
        { header: "Amount", render: (row) => `Rp${row.amount.toLocaleString("id-ID")}` },
        { header: "Status", render: (row) => row.status },
      ]}
      filters={[
        { label: "Paid", value: "Paid" },
        { label: "Pending", value: "Pending" },
        { label: "Cancelled", value: "Cancelled" },
      ]}
      detailTitle="Transaction Detail"
      detailRenderer={(row) => (
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Invoice</span>
            <span className="font-medium text-white">{row.invoice}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Date</span>
            <span className="font-medium text-white">{row.createdAt}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Type</span>
            <span className="font-medium text-white">{row.type}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Payment</span>
            <span className="font-medium text-white">{row.payment}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Amount</span>
            <span className="font-medium text-white">Rp{row.amount.toLocaleString("id-ID")}</span>
          </div>
        </div>
      )}
    />
  );
}

export default Transactions;
