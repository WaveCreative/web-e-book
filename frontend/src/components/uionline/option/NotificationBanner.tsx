import {Check, CircleAlert, X} from "lucide-react";
interface NotificationBannerProps {
  open: boolean;
  title: string;
  description: string;
  tone?: "success" | "error";
  onClose: () => void;
}

function NotificationBanner({
  open,
  title,
  description,
  tone = "success",
  onClose,
}: NotificationBannerProps) {
  if (!open) return null;

  const toneClass =
    tone === "success"
      ? "border-blue-400/40 bg-blue-500 text-blue-100"
      : "border-red-400/40 bg-red-500 text-red-100";
  const iconClass = tone === "success" ? "invert" : "invert";
  const iconLabel =
    tone === "success" ? (
      <Check size={16} />
    ) : (
      <CircleAlert size={16} />
    );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:items-center">
      <button
        type="button"
        aria-label="Tutup notifikasi"
        className="absolute inset-0"
        onClick={onClose}
      />
      <article
        className={`relative w-full max-w-sm rounded-lg border p-5 shadow-2xl shadow-black/40 transition ${toneClass}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-col">
          <div className="flex items-center gap-2">
            <span className={`${iconClass}`}>{iconLabel}</span>

            <h2 className="text-sm font-semibold text-white">{title}</h2>
          </div>
          <p className="mt-2 text-xs leading-5 text-white/80">{description}</p>{" "}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="leading-none invert transition"
          >
            <X size={16}/>
          </button>
        </div>
      </article>
    </div>
  );
}

export default NotificationBanner;
