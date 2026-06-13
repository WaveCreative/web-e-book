import OrderStatusPage from "./OrderStatusPage";

function Proses() {
  return (
    <OrderStatusPage
      status="pending"
      heading="Pesanan Proses"
      emptyText="Belum ada pesanan yang sedang proses."
    />
  );
}

export default Proses;
