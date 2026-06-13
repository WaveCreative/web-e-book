import { Navigate, Outlet, useLocation } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useAuth } from "../../app/providers";

function AppLayout() {
  const { pathname } = useLocation();
  const { isReady, isAuthenticated } = useAuth();

  const showSidebar = [
    "/cart",
    "/voucher",
    "/proses",
    "/berhasil",
  ].includes(pathname);

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Memuat...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <AppHeader />

      {showSidebar && <AppSidebar />}

      <Outlet />
    </div>
  );
}

export default AppLayout;
