import OrderStatusPage from "./OrderStatusPage";

function Berhasil() {
  return (
    <OrderStatusPage
      status="paid"
      heading="Pesanan Berhasil"
      emptyText="Belum ada pesanan yang berhasil."
    />
  );
}

export default Berhasil;
