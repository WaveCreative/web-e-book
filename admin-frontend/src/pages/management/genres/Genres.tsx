import EntityManagementPage from "../../../components/ui/EntityManagementPage";
import { adminGenres } from "../../../data/adminEntities";

function Genres() {
  return (
    <EntityManagementPage
      title="Genre Management"
      description="Kelola genre yang dipakai untuk kategori buku dan navigasi konten."
      stats={[
        { label: "Genres", value: String(adminGenres.length), note: "Genre utama yang ditemukan di frontend user." },
        { label: "Active", value: String(adminGenres.filter((item) => item.status === "Active").length), note: "Genre siap dipakai." },
        { label: "Draft", value: String(adminGenres.filter((item) => item.status === "Draft").length), note: "Perlu kurasi tambahan." },
        { label: "Avg rating", value: (adminGenres.reduce((sum, item) => sum + item.rating, 0) / adminGenres.length).toFixed(1), note: "Rata-rata rating kategori." },
      ]}
      items={adminGenres}
      columns={[
        { header: "Genre", render: (row) => row.name },
        { header: "Book Count", render: (row) => row.bookCount },
        { header: "Rating", render: (row) => row.rating },
        { header: "Status", render: (row) => row.status },
      ]}
      filters={[
        { label: "Active", value: "Active" },
        { label: "Draft", value: "Draft" },
      ]}
      detailTitle="Genre Detail"
      actionLabel="Add Genre"
      detailRenderer={(row) => (
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Name</span>
            <span className="font-medium text-white">{row.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Book Count</span>
            <span className="font-medium text-white">{row.bookCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Rating</span>
            <span className="font-medium text-white">{row.rating}</span>
          </div>
        </div>
      )}
    />
  );
}

export default Genres;
