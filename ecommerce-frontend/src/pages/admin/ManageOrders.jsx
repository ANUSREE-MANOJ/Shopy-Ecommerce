function ManageOrders() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Manage Orders
      </h1>

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-100">

            <th className="p-3">
              Order ID
            </th>

            <th>User</th>

            <th>Total</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr className="text-center border-t">

            <td className="p-3">
              #1001
            </td>

            <td>Anusree</td>

            <td>₹2999</td>

            <td>Pending</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ManageOrders;