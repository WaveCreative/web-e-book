import {SearchIcon} from "lucide-react";

interface MobileSearchProps {
  open: boolean;
  onClose: () => void;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function MobileSearch({
  open,
  onClose,
  placeholder,
  value,
  onChange,
}: MobileSearchProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 h-screen md:hidden" onClick={onClose}>
      <div
        className="relative mx-auto mt-20 w-[90%] rounded-2xl bg-black border border-white/30 p-4 shadow-xl transition duration-200 ease-out"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Search</span>
          <button type="button" onClick={onClose} className="text-xs btn bg-transparent border border-white/30 p-2 rounded-xl text-white">
            Close
          </button>
        </div>
        <div className="relative mt-3">
          <SearchIcon
            className="pointer-events-none absolute left-3 top-1/2 invert h-4 w-4 -translate-y-1/2 opacity-60"
          />
          <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            className="h-10 w-full rounded-full border border-white/30 bg-transparent pl-9 pr-4 text-sm text-white placeholder:text-slate-400 focus:border-white/30 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileSearch;
