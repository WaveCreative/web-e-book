import { Link } from "react-router-dom";

interface DropdownMenuItem {
  label: string;
  to: string;
}

interface DropdownMenuProps {
  open: boolean;
  items: DropdownMenuItem[];
  footerText: string;
}

function DropdownMenu({ open, items = [], footerText }: DropdownMenuProps) {
  return (
    <div
      className={`absolute left-0 top-full z-50 w-110 transition ${
        open
          ? "opacity-100 visible translate-y-0 pointer-events-auto"
          : "opacity-0 invisible translate-y-2 pointer-events-none"
      }`}
    >
      <div className="pt-3">
        <div className="rounded-2xl border border-white/60 bg-black/95 p-4 shadow-xl shadow-slate-900/10">
          <div className="grid grid-cols-[1fr_110px] gap-4">
            <div>
              <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-600">
                {items.filter(Boolean).map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-lg border text-center border-white/60 px-3 py-1 text-white hover:border-green-500 hover:bg-green-500 hover:text-black"
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>

              <div className="mt-10 text-xs text-white">
                <Link to={items[0]?.to || "/"} className="hover:text-green-400">
                  {footerText}
                </Link>
              </div>
            </div>

            <div className="border-l border-white/70 pl-4 text-xs text-white">
              Rekomendasi Gratis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
