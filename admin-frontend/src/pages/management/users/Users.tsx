import EntityManagementPage from "../../../components/ui/EntityManagementPage";
import { adminUsers } from "../../../data/adminEntities";

function Users() {
  return (
    <EntityManagementPage
      title="Auth & Profile Users"
      description="Kelola data akun yang berkaitan dengan login, profile, dan akses pengguna di frontend."
      stats={[
        { label: "Total users", value: String(adminUsers.length), note: "Akun login yang disimulasikan di admin." },
        { label: "Active", value: String(adminUsers.filter((item) => item.status === "Active").length), note: "Akun aktif." },
        { label: "Pending", value: String(adminUsers.filter((item) => item.status === "Pending").length), note: "Akun belum verified." },
        { label: "Admins", value: String(adminUsers.filter((item) => item.role === "admin").length), note: "Role admin diverifikasi saat login." },
      ]}
      items={adminUsers}
      columns={[
        { header: "Name", render: (row) => row.name },
        { header: "Email", render: (row) => row.email },
        { header: "Role", render: (row) => row.role },
        { header: "Verified", render: (row) => (row.status === "Active" ? "Yes" : "No") },
        { header: "Joined", render: (row) => row.joinedAt },
        {
          header: "Status",
          render: (row) => row.status,
          className: "font-medium text-(--primary)",
        },
      ]}
      filters={[
        { label: "Active", value: "Active" },
        { label: "Pending", value: "Pending" },
      ]}
      detailTitle="User Detail"
      detailRenderer={(row) => (
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Name</span>
            <span className="font-medium text-white">{row.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Email</span>
            <span className="font-medium text-white">{row.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Role</span>
            <span className="font-medium text-white">{row.role}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Joined</span>
            <span className="font-medium text-white">{row.joinedAt}</span>
          </div>
        </div>
      )}
    />
  );
}

export default Users;
