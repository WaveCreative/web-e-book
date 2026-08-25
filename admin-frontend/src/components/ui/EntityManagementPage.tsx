import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Plus,
  Search,
  TriangleAlert,
} from "lucide-react";
import SectionCard from "./SectionCard";

export type EntityStatus = "Active" | "Draft" | "Archived" | "Pending" | "Paid" | "Cancelled" | "Blocked";

export interface EntityStat {
  label: string;
  value: string;
  note?: string;
}

export interface EntityColumn<Row> {
  header: string;
  render: (row: Row) => string | number | JSX.Element;
  className?: string;
}

export interface EntityFilterOption {
  label: string;
  value: string;
}

export interface EntityManagementPageProps<Row extends { id: number; status?: string }> {
  title: string;
  description: string;
  stats: EntityStat[];
  items: Row[];
  columns: EntityColumn<Row>[];
  filters?: EntityFilterOption[];
  pageSize?: number;
  actionLabel?: string;
  detailTitle?: string;
  detailRenderer?: (row: Row) => JSX.Element;
  emptyTitle?: string;
  emptyDescription?: string;
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

function EntityManagementPage<Row extends { id: number; status?: string }>({
  title,
  description,
  stats,
  items,
  columns,
  filters = [],
  pageSize = 5,
  actionLabel = "Create New",
  detailTitle = "Detail",
  detailRenderer,
  emptyTitle = "No data found",
  emptyDescription = "Try adjusting search or filters.",
  isLoading = false,
  error = null,
  onRetry,
}: EntityManagementPageProps<Row>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState<number | null>(items[0]?.id ?? null);

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return items.filter((item) => {
      const matchesSearch = !normalizedSearch
        ? true
        : JSON.stringify(item).toLowerCase().includes(normalizedSearch);
      const matchesFilter =
        activeFilter === "All" ? true : item.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, items, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const currentItems = filteredItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const selectedRow =
    filteredItems.find((item) => item.id === selectedId) ?? filteredItems[0] ?? null;

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);
  };

  const visiblePages = Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
    if (totalPages <= 5) {
      return index + 1;
    }

    const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
    return start + index;
  });

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
          >
            <p className="text-sm text-white/60">{stat.label}</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">
              {stat.value}
            </h3>
            {stat.note ? (
              <p className="mt-3 text-sm text-white/55">{stat.note}</p>
            ) : null}
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <SectionCard
          title={title}
          description={description}
        >
          {error ? (
            <div className="mb-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              <div className="flex items-center justify-between gap-4">
                <p>{error}</p>
                {onRetry ? (
                  <button
                    type="button"
                    onClick={onRetry}
                    className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-100 transition hover:bg-red-500/20"
                  >
                    Retry
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
              <Search className="h-4 w-4 text-white/45" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder={`Search ${title.toLowerCase()}...`}
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-(--primary)/80 px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              {actionLabel}
            </button>
          </div>

          {filters.length ? (
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                <Filter className="h-3.5 w-3.5" />
                Filter
              </span>

              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setCurrentPage(1);
                }}
                className={`rounded-full px-3 py-1 text-xs transition ${
                  activeFilter === "All"
                    ? "bg-(--primary)/20 text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                All
              </button>

              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter.value);
                    setCurrentPage(1);
                  }}
                  className={`rounded-full px-3 py-1 text-xs transition ${
                    activeFilter === filter.value
                      ? "bg-(--primary)/20 text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          ) : null}

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="min-w-full text-left">
              <thead className="bg-white/5">
                <tr className="text-xs uppercase tracking-[0.2em] text-white/45">
                  <th className="px-4 py-3 font-medium">#</th>
                  {columns.map((column) => (
                    <th key={column.header} className="px-4 py-3 font-medium">
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index} className="border-t border-white/5">
                      <td className="px-4 py-4 text-sm text-white/55">
                        <div className="h-4 w-6 animate-pulse rounded bg-white/10" />
                      </td>
                      {columns.map((column) => (
                        <td key={column.header} className="px-4 py-4">
                          <div className="h-4 w-full max-w-40 animate-pulse rounded bg-white/10" />
                        </td>
                      ))}
                    </tr>
                  ))
                ) : currentItems.length ? (
                  currentItems.map((item, index) => (
                    <tr
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`cursor-pointer border-t border-white/5 transition hover:bg-white/5 ${
                        selectedRow?.id === item.id ? "bg-white/5" : ""
                      }`}
                    >
                      <td className="px-4 py-4 text-sm text-white/55">
                        {(currentPage - 1) * pageSize + index + 1}
                      </td>
                      {columns.map((column) => (
                        <td
                          key={column.header}
                          className={`px-4 py-4 text-sm text-white/75 ${column.className ?? ""}`}
                        >
                          {column.render(item)}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length + 1} className="px-4 py-10">
                      <div className="flex flex-col items-center justify-center gap-3 text-center">
                        <TriangleAlert className="h-8 w-8 text-amber-300" />
                        <h4 className="text-base font-semibold text-white">
                          {emptyTitle}
                        </h4>
                        <p className="max-w-md text-sm text-white/55">
                          {emptyDescription}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-white/55">
              Showing {currentItems.length} of {filteredItems.length} results
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                Prev
              </button>

              {visiblePages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`h-10 min-w-10 rounded-xl px-3 text-sm transition ${
                    currentPage === page
                      ? "bg-(--primary) text-black"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title={detailTitle}
          description="Selected row summary and next action."
        >
          {selectedRow ? (
            <div className="space-y-4">
              {isLoading ? (
                <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
                  <div className="h-4 w-1/2 animate-pulse rounded bg-white/10" />
                  <div className="h-24 animate-pulse rounded-2xl bg-white/10" />
                </div>
              ) : detailRenderer ? (
                detailRenderer(selectedRow)
              ) : (
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <pre className="overflow-x-auto text-xs text-white/65">
                    {JSON.stringify(selectedRow, null, 2)}
                  </pre>
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200 transition hover:bg-red-500/20"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-6 text-center text-sm text-white/55">
              No selected data yet.
            </div>
          )}
        </SectionCard>
      </section>
    </div>
  );
}

export default EntityManagementPage;
