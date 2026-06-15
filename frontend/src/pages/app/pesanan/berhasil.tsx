import OrderStatusPage from "./OrderStatusPage";

function Berhasil() {
  return (
    <OrderStatusPage
      status="paid"
      emptyText="Belum ada pesanan yang berhasil."
    />
  );
}

export default Berhasil;
