import EntityManagementPage from "../../../components/ui/EntityManagementPage";
import { adminReading } from "../../../data/adminEntities";

function Reading() {
  return (
    <EntityManagementPage
      title="Reading / Activity Management"
      description="Pantau aktivitas membaca user yang menjadi dasar statistik profile."
      stats={[
        { label: "Sessions", value: String(adminReading.length), note: "Contoh sesi activity dari mock data." },
        { label: "Active", value: String(adminReading.filter((item) => item.status === "Active").length), note: "Sedang membaca." },
        { label: "Pending", value: String(adminReading.filter((item) => item.status === "Pending").length), note: "Baru mulai membaca." },
        { label: "Completed", value: String(adminReading.filter((item) => item.progress === 100).length), note: "Sudah selesai." },
      ]}
      items={adminReading}
      columns={[
        { header: "User", render: (row) => row.user },
        { header: "Book", render: (row) => row.book },
        { header: "Progress", render: (row) => `${row.progress}%` },
        { header: "Last Activity", render: (row) => row.lastActivity },
        { header: "Status", render: (row) => row.status },
      ]}
      filters={[
        { label: "Active", value: "Active" },
        { label: "Pending", value: "Pending" },
        { label: "Archived", value: "Archived" },
      ]}
      detailTitle="Reading Detail"
      detailRenderer={(row) => (
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">User</span>
            <span className="font-medium text-white">{row.user}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Book</span>
            <span className="font-medium text-white">{row.book}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Progress</span>
            <span className="font-medium text-white">{row.progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-(--primary)" style={{ width: `${row.progress}%` }} />
          </div>
        </div>
      )}
    />
  );
}

export default Reading;
