import { Outlet } from "react-router-dom";
import GuestHeader from "./GuestHeader";

function PublicLayout() {
  return (
    <div className="min-h-screen">
      <GuestHeader />
      <Outlet />
    </div>
  );
}

export default PublicLayout;
