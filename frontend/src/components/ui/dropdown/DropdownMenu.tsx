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
        <div className="rounded-2xl border border-(--border) bg-(--background) p-4 shadow-xl">
          <div className="grid grid-cols-[1fr_110px] gap-4">
            <div>
              <div className="grid grid-cols-3 gap-2 text-xs font-medium text-(--highemphasis)">
                {items.filter(Boolean).map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-lg border text-center border-(--border/15) px-3 py-1 text-(--highemphasis) hover:border-(--primary) hover:bg-(--primary) hover:text-(--background)"
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>

              <div className="mt-10 text-xs text-(--highemphasis)">
                <Link to={items[0]?.to || "/"} className="hover:text-(--primary)">
                  {footerText}
                </Link>
              </div>
            </div>

            <div className="border-l border-(--border) pl-4 text-xs text-(--highemphasis)">
              Rekomendasi Gratis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
