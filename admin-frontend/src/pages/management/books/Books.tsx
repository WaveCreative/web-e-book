import EntityManagementPage from "../../../components/ui/EntityManagementPage";
import { adminBooks } from "../../../data/adminEntities";

function Books() {
  return (
    <EntityManagementPage
      title="Book & Recommendation Content"
      description="Kelola buku yang tampil di trending, recommended, koleksi, dan rekomendasi profile."
      stats={[
        { label: "Books", value: String(adminBooks.length), note: "Konten buku yang muncul di halaman user." },
        { label: "Active", value: String(adminBooks.filter((item) => item.status === "Active").length), note: "Buku yang tampil di section utama." },
        { label: "Draft", value: String(adminBooks.filter((item) => item.status === "Draft").length), note: "Buku yang masih placeholder." },
        { label: "Total stock", value: String(adminBooks.reduce((total, item) => total + item.stock, 0)), note: "Stok untuk katalog frontend." },
      ]}
      items={adminBooks}
      columns={[
        { header: "Title", render: (row) => row.title },
        { header: "Author", render: (row) => row.author },
        { header: "Genre", render: (row) => row.genre },
        { header: "Price", render: (row) => `Rp${row.price.toLocaleString("id-ID")}` },
        { header: "Stock", render: (row) => row.stock },
        { header: "Status", render: (row) => row.status },
      ]}
      filters={[
        { label: "Active", value: "Active" },
        { label: "Draft", value: "Draft" },
      ]}
      detailTitle="Book Detail"
      actionLabel="Add Book"
      detailRenderer={(row) => (
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Title</span>
            <span className="font-medium text-white">{row.title}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Author</span>
            <span className="font-medium text-white">{row.author}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Genre</span>
            <span className="font-medium text-white">{row.genre}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Stock</span>
            <span className="font-medium text-white">{row.stock}</span>
          </div>
        </div>
      )}
    />
  );
}

export default Books;
