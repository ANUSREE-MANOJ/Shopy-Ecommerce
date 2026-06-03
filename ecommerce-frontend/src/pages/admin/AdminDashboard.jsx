function AdminDashboard() {
  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold">
            Products
          </h2>
          <p className="text-3xl font-bold mt-2">
            20
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold">
            Orders
          </h2>
          <p className="text-3xl font-bold mt-2">
            15
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold">
            Users
          </h2>
          <p className="text-3xl font-bold mt-2">
            50
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold">
            Revenue
          </h2>
          <p className="text-3xl font-bold mt-2">
            ₹50K
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;