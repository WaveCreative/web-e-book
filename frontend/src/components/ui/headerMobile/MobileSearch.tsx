import SearchIcon from "../../../assets/search.svg";

interface MobileSearchProps {
  open: boolean;
  onClose: () => void;
  placeholder: string;
}

function MobileSearch({ open, onClose, placeholder }: MobileSearchProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 h-screen md:hidden" onClick={onClose}>
      <div
        className="relative mx-auto mt-20 w-[90%] rounded-2xl bg-white p-4 shadow-xl transition duration-200 ease-out"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-900">Search</span>
          <button type="button" onClick={onClose} className="text-xs btn bg-black p-2 rounded-xl text-white">
            Close
          </button>
        </div>
        <div className="relative mt-3">
          <img
            src={SearchIcon}
            alt=""
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60"
          />
          <input
            type="text"
            placeholder={placeholder}
            className="h-10 w-full rounded-full border border-slate-200 bg-white pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileSearch;
