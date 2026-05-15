import { Outlet, useLocation } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

function AppLayout() {
  const { pathname } = useLocation();

  const showSidebar = [
    "/cart",
    "/voucher",
    "/proses",
    "/berhasil",
  ].includes(pathname);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <AppHeader />

      {showSidebar && <AppSidebar />}

        <Outlet />
    </div>
  );
}

export default AppLayout;