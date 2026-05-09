import AppHeader from "../../../components/layout/AppHeader";
import AppFooter from "../../../components/layout/AppFooter";
import AppSidebar from "../../../components/layout/AppSidebar";

function CartPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pointer-events-none absolute -left-24 -top-24 h-100 w-100 rounded-full bg-gradient-to-tl from-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-100 w-100 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <AppHeader />
      <div className="flex py-16">
        <AppSidebar />
        <main className="flex-1 px-6 py-50 md:px-16 md:py-35">
          <h1 className="text-2xl font-bold text-white mb-4">
            Keranjang Belanja
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your cart items here */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Layang Layang</h2>
              <p className="text-white">Rp80.000</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Remove
              </button>
            </div>
            {/* Add more items as needed */}
          </div>
        </main>
      </div>
      <AppFooter />
    </div>
  );
}

export default CartPage;