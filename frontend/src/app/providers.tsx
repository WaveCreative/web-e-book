import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

interface SearchContextValue {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

interface AppProvidersProps {
  children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const value = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
    }),
    [searchTerm]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within AppProviders");
  }

  return context;
}

export default AppProviders;
