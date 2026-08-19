import {SearchIcon} from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function SearchInput({
  value,
  onChange,
  placeholder = "Search",
}: SearchInputProps) {
  return (
    <div className="relative w-full max-w-xs">
      <SearchIcon
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60"
      />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-xl border border-white/15 bg-white/10 pl-9 pr-4 text-xs text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
      />
    </div>
  );
}

export default SearchInput;
