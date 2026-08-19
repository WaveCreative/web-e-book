import { Navigate, Outlet, useLocation } from "react-router-dom";
import ScrollToHash from "../plugin/ScrollToHash";
import AppHeader from "./AppHeader";
import { useAuth } from "../../app/providers";

function AppLayout() {
  const { isReady, isAuthenticated } = useAuth();

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
      <ScrollToHash />
      <Outlet />
    </div>
  );
}

export default AppLayout;
