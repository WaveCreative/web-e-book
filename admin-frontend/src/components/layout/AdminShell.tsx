import { useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

function AdminShell() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const pageTitle = useMemo(() => {
    if (pathname === "/admin") {
      return "Dashboard";
    }

    if (pathname.startsWith("/admin/books")) {
      return "Book Content";
    }

    if (pathname.startsWith("/admin/collections")) {
      return "Collection Content";
    }

    if (pathname.startsWith("/admin/genres")) {
      return "Category / Genre";
    }

    if (pathname.startsWith("/admin/reading")) {
      return "Reading Content";
    }

    if (pathname.startsWith("/admin/subscriptions")) {
      return "Subscription Content";
    }

    if (pathname.startsWith("/admin/transactions")) {
      return "Transaction History";
    }

    if (pathname.startsWith("/admin/users")) {
      return "Auth Users";
    }

    return "Admin Panel";
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminSidebar
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
      />

      <div className="lg:pl-80">
        <AdminHeader
          title={pageTitle}
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
        />

        <main className="px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
              <p className="text-xs uppercase tracking-[0.3em] text-(--primary)">
                Workspace
              </p>
              <h1 className="mt-1 text-2xl font-semibold">{pageTitle}</h1>
              <p className="mt-2 max-w-3xl text-sm text-white/60">
                Area operasional untuk mengelola konten, user, transaksi, dan aktivitas ebook.
              </p>
            </div>

            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminShell;
