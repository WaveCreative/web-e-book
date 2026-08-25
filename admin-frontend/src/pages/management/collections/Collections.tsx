import EntityManagementPage from "../../../components/ui/EntityManagementPage";
import { adminCollections } from "../../../data/adminEntities";

function Collections() {
  return (
    <EntityManagementPage
      title="Collection Management"
      description="Kelola koleksi kurasi yang tampil di halaman user."
      stats={[
        { label: "Collections", value: String(adminCollections.length), note: "Koleksi kurasi yang bisa diatur admin." },
        { label: "Visible", value: String(adminCollections.filter((item) => item.visibility === "Active").length), note: "Koleksi aktif." },
        { label: "Draft", value: String(adminCollections.filter((item) => item.visibility === "Draft").length), note: "Belum dipublikasikan." },
        { label: "Items", value: String(adminCollections.reduce((total, item) => total + item.items, 0)), note: "Total buku di koleksi mock." },
      ]}
      items={adminCollections}
      columns={[
        { header: "Collection", render: (row) => row.title },
        { header: "Genre", render: (row) => row.genre },
        { header: "Items", render: (row) => row.items },
        { header: "Visibility", render: (row) => row.visibility },
      ]}
      filters={[
        { label: "Active", value: "Active" },
        { label: "Draft", value: "Draft" },
      ]}
      detailTitle="Collection Detail"
      actionLabel="Add Collection"
      detailRenderer={(row) => (
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Title</span>
            <span className="font-medium text-white">{row.title}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Genre</span>
            <span className="font-medium text-white">{row.genre}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Items</span>
            <span className="font-medium text-white">{row.items}</span>
          </div>
        </div>
      )}
    />
  );
}

export default Collections;
