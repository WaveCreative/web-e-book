interface DropdownMenuProps {
  open: boolean;
  items: string[];
  footerText: string;
}

function DropdownMenu({ open, items, footerText }: DropdownMenuProps) {
  return (
    <div
      className={`absolute left-0 top-full z-50 w-72 transition ${
        open
          ? "opacity-100 visible translate-y-0 pointer-events-auto"
          : "opacity-0 invisible translate-y-2 pointer-events-none"
      }`}
    >
      <div className="pt-3">
        <div className="rounded-2xl border border-slate-200/60 bg-white/95 p-4 shadow-xl shadow-slate-900/10">
          <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-600">
            {items.map((item) => (
              <button
                key={item}
                className="rounded-full border border-slate-200 px-3 py-1 text-slate-600 hover:border-slate-900 hover:text-slate-900"
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-200/70 pt-3 text-xs text-slate-500">
            {footerText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
