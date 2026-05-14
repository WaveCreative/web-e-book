import { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../assets/chevron-down.svg";

function AppSidebar() {
  const [ordersOpen, setOrdersOpen] = useState(false);

  return (
    <aside className="w-50 shadow-lg shadow-white/40 left-0 fixed z-30 text-white h-screen hidden md:block">
      <nav className="flex flex-col p-10 pl-10 text-lg">
        <Link to="/cart" className="mb-4 hover:text-green-400">
          Keranjang
        </Link>
        <Link to="/voucher" className="mb-4 hover:text-green-400">
          Voucher
        </Link>
        <div className="flex flex-col">
          <button
            type="button"
            onClick={() => setOrdersOpen((prev) => !prev)}
            className="flex items-center gap-2 text-left hover:text-green-400"
          >
            <span>Pesanan</span>
            <span
              className={`text-sm transition-transform ${
                ordersOpen ? "rotate-180" : ""
              }`}
            >
              <img src={Chevron} alt="Toggle Orders" className="h-4 w-4 invert" />
            </span>
          </button>

          {ordersOpen && (
            <div className="mt-3 flex flex-col gap-2 pl-4 text-base text-white/80">
              <Link to="/orders" className="hover:text-green-400">
                Proses
              </Link>
              <Link to="/orders" className="hover:text-green-400">
                Berhasil
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

export default AppSidebar;
