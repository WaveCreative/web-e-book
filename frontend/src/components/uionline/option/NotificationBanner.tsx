import Check from "../../../assets/check.svg";
import X from "../../../assets/x.svg";
import CircleAlert from "../../../assets/circle-alert.svg";

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
  const iconClass =
    tone === "success"
      ? "bg-blue-400 text-slate-950"
      : "bg-red-400 text-slate-950";
  const iconLabel = tone === "success" ? <Check /> : <CircleAlert />;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center">
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
          <div className="flex items-start gap-3">
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${iconClass}`}
            >
              {iconLabel}
            </span>
            <div>
              <h2 className="text-sm font-semibold text-white">{title}</h2>
              <p className="mt-2 text-xs leading-5 text-white/80">{description}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-white/70 transition hover:text-white"
          >
            <X />
          </button>
        </div>
      </article>
    </div>
  );
}

export default NotificationBanner;
