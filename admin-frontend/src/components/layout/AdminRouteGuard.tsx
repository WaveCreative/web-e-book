import { Navigate, Outlet } from "react-router-dom";
import { useAdminAuth } from "../../app/providers";

function AdminRouteGuard() {
  const { isReady, isAuthenticated, isAdmin } = useAdminAuth();

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Memuat...
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}

export default AdminRouteGuard;
