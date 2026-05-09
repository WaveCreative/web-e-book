import { Link } from "react-router-dom";

function AppSidebar() {
  return (
    <aside className="w-50 shadow shadow-white shadow-lg text-white h-full h-screen hidden md:block">
      <nav className="flex flex-col p-4">
        <Link to="/cart" className="mb-4 hover:text-green-400">
          Keranjang
        </Link>
        <Link to="/voucher" className="mb-4 hover:text-green-400">
          Voucher
        </Link>
        <Link to="/orders" className="hover:text-green-400">
          Pesanan
        </Link>
      </nav>
    </aside>
  );
}

export default AppSidebar;