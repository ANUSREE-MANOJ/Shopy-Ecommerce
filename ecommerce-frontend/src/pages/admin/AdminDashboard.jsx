import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const [stats, setStats] =
    useState({
      totalUsers: 0,
      totalProducts: 0,
      totalOrders: 0,
      totalSales: 0,
    });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/dashboard`
      );

      setStats(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-blue-500 text-white p-6 rounded-lg">

          <h2>Total Users</h2>

          <p className="text-3xl font-bold">
            {stats.totalUsers}
          </p>

        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg">

          <h2>Total Products</h2>

          <p className="text-3xl font-bold">
            {stats.totalProducts}
          </p>

        </div>

        <div className="bg-orange-500 text-white p-6 rounded-lg">

          <h2>Total Orders</h2>

          <p className="text-3xl font-bold">
            {stats.totalOrders}
          </p>

        </div>

        <div className="bg-purple-500 text-white p-6 rounded-lg">

          <h2>Total Sales</h2>

          <p className="text-3xl font-bold">
            ₹ {stats.totalSales}
          </p>

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;