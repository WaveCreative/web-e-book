import { useState, useRef } from "react";
import { Link } from "lucide-react";

function HelpCenter() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("message", message);

      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("http://localhost:8000/api/help", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("Laporan berhasil dikirim");

      setMessage("");
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim laporan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-10">

      <div>
        <label className="text-sm">
          Detail Permasalahan
        </label>

        <textarea
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tuliskan permasalahan kamu..."
          className="mt-2 w-full rounded-xl border border-white/10 textarea bg-transparent p-4 outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="flex rounded-lg border border-white/10 bg-white/10 px-5 py-2 text-sm text-white cursor-pointer hover:bg-white/15"
        >
          <Link className="mr-2 h-4 w-4"/>Pilih File
        </button>

        <span className="text-sm text-white/50 truncate">
           {image ? image.name : "Maks. 5MB, format: jpg, png"}
        </span>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            setImage(e.target.files?.[0] ?? null)
          }
        />
      </div>
      <button
        disabled={loading}
        className="rounded-xl bg-(--primary) px-6 py-3 cursor-pointer"
      >
        {loading ? "Mengirim..." : "Kirim Laporan"}
      </button>

    </form>
  );
}

export default HelpCenter;