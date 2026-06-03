function ManageUsers() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Manage Users
      </h1>

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-100">

            <th className="p-3">
              Name
            </th>

            <th>Email</th>

            <th>Role</th>

          </tr>

        </thead>

        <tbody>

          <tr className="text-center border-t">

            <td className="p-3">
              Admin
            </td>

            <td>
              admin@gmail.com
            </td>

            <td>
              Admin
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ManageUsers;