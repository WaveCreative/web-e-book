import EntityManagementPage from "../../../components/ui/EntityManagementPage";
import { adminSubscriptions } from "../../../data/adminEntities";

function Subscriptions() {
  return (
    <EntityManagementPage
      title="Subscription Management"
      description="Kelola paket langganan yang sudah muncul di frontend user."
      stats={[
        { label: "Plans", value: String(adminSubscriptions.length), note: "Basic, Premium, dan Standard mock." },
        { label: "Active", value: String(adminSubscriptions.filter((item) => item.status === "Active").length), note: "Paket yang tersedia ke user." },
        { label: "Draft", value: String(adminSubscriptions.filter((item) => item.status === "Draft").length), note: "Sedang dipersiapkan." },
        { label: "Benefits", value: String(adminSubscriptions.reduce((total, item) => total + item.benefits, 0)), note: "Total benefit yang ditampilkan." },
      ]}
      items={adminSubscriptions}
      columns={[
        { header: "Plan", render: (row) => row.name },
        { header: "Price", render: (row) => `Rp${row.price.toLocaleString("id-ID")}` },
        { header: "Benefits", render: (row) => row.benefits },
        { header: "Status", render: (row) => row.status },
      ]}
      filters={[
        { label: "Active", value: "Active" },
        { label: "Draft", value: "Draft" },
      ]}
      detailTitle="Subscription Detail"
      actionLabel="Add Plan"
      detailRenderer={(row) => (
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Name</span>
            <span className="font-medium text-white">{row.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Price</span>
            <span className="font-medium text-white">Rp{row.price.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Benefits</span>
            <span className="font-medium text-white">{row.benefits}</span>
          </div>
        </div>
      )}
    />
  );
}

export default Subscriptions;
