import { Menu, Search, Bell, ChevronRight } from "lucide-react";
import { useAdminAuth } from "../../app/providers";
import { Link } from "react-router-dom";

interface AdminHeaderProps {
  title: string;
  onOpenMobileSidebar: () => void;
}

function AdminHeader({ title, onOpenMobileSidebar }: AdminHeaderProps) {
  const { user } = useAdminAuth();

  return (
    <header className="fixed left-0 top-0 z-20 w-full border-b border-white/10 bg-black/80 backdrop-blur lg:pl-72">
      <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>

          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-[0.25em] text-(--primary)">
              Ebook Admin
            </p>
            <div className="mt-1 flex items-center gap-2 text-sm text-white/50">
              <span>Admin</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>{title}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-xs uppercase tracking-[0.25em] text-(--primary)">
            {title}
          </p>
          <h2 className="text-lg font-semibold">Dashboard Operasional</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 md:flex">
            <Search className="h-4 w-4 text-white/50" />
            <span className="text-sm text-white/45">Search...</span>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80"
          >
            <Bell className="h-4 w-4" />
          </button>

          <Link
            to="/admin"
            className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:flex"
          >
            <div className="h-8 w-8 overflow-hidden rounded-full border border-white/10 bg-white/10">
              <img
                src={
                  user?.avatar ??
                  "https://res.cloudinary.com/dgffa1m7j/image/upload/v1782797688/img_3d_at7pmj.svg"
                }
                alt={user?.name ?? "Admin"}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-xs text-white/50">Signed in</p>
              <p className="max-w-32 truncate text-sm font-medium text-white">
                {user?.name ?? "Admin"}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
