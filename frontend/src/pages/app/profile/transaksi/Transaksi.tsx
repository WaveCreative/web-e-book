import { transaksiData } from "../../../../data/transaksi";

function Transaksi() {
  return (
    <section className="mt-8">
        <div className="overflow-hidden">
        <table className="w-xl md:w-2xl text-center rounded-2xl ">
          <thead>
            <tr className="bg-white/5 text-left">
              <th className="px-6 py-4 text-sm font-medium text-white">
                No
              </th>

              <th className="px-6 py-4 text-sm font-medium text-white">
                Tanggal
              </th>

              <th className="px-6 py-4 text-sm font-medium text-white">
                Type
              </th>

              <th className="px-6 py-4 text-sm font-medium text-white">
                Pembayaran
              </th>

              <th className="px-6 py-4 text-sm font-medium text-white">
                Nominal
              </th>
            </tr>
          </thead>

          <tbody>
            {transaksiData.map((item, index) => (
              <tr
                key={item.id}
                className="transition hover:bg-white/3"
              >
                <td className="px-6 py-5 text-sm text-white">
                  {index + 1}
                </td>

                <td className="px-6 py-5 text-sm text-white">
                  {item.date}
                </td>

                <td className="px-6 py-5 text-sm text-white">
                    {item.type}
                </td>

                <td className="px-6 py-5 text-sm text-white">
                  {item.payment}
                </td>

                <td className="px-6 py-5 text-sm text-white">
                  Rp{item.amount.toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Transaksi;