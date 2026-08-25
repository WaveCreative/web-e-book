import { NavLink } from "react-router-dom";
import { LogOut, X } from "lucide-react";
import { useAdminAuth } from "../../app/providers";
import { adminNavigation } from "../../data/navigation";

interface AdminSidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

function AdminSidebar({ mobileOpen, onMobileClose }: AdminSidebarProps) {
  const { user, logout } = useAdminAuth();

  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onMobileClose}
          className="fixed inset-0 z-30 bg-black/70 lg:hidden"
        />
      ) : null}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-72 border-r border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-5 py-6 backdrop-blur transition-transform duration-300 lg:flex lg:flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-(--primary)">
              Admin Panel
            </p>
            <h1 className="mt-2 text-2xl font-semibold">Ebook.com</h1>
          </div>

          <button
            type="button"
            onClick={onMobileClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-6 rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-xs text-white/55">Signed in as</p>
          <h2 className="mt-1 truncate text-sm font-semibold text-white">
            {user?.name ?? "Admin"}
          </h2>
          <p className="truncate text-xs text-white/50">{user?.email ?? "-"}</p>
        </div>

        <nav className="space-y-2">
          {adminNavigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onMobileClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-(--primary)/15 text-white shadow-[0_10px_30px_rgba(0,255,127,0.08)]"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={() => {
              onMobileClose();
              logout().catch(() => {});
            }}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200 transition hover:bg-red-500/20"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
