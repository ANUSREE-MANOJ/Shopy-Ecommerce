import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <div className="flex flex-col gap-4">

        <Link to="/admin">
          Dashboard
        </Link>

        <Link to="/admin/products">
          Products
        </Link>

        <Link to="/admin/orders">
          Orders
        </Link>

        <Link to="/admin/users">
          Users
        </Link>

      </div>

    </div>
  );
}

export default AdminSidebar;