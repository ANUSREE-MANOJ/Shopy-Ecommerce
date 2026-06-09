import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [showAdminMenu, setShowAdminMenu] =
    useState(false);

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          ShopSphere
        </Link>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/products"
            className="hover:text-indigo-600"
          >
            Products
          </Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-6 text-xl">

          {/* Wishlist */}

          <Link
            to="/wishlist"
            className="text-red-500 hover:text-pink-500"
          >
            <FaHeart size={22} />
          </Link>

          {/* Cart */}

          <Link
            to="/cart"
            className="relative"
          >
            <FaShoppingCart size={22} />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* User Section */}

          {user ? (
            user.role === "admin" ? (
              <div className="relative">

                <button
                  onClick={() =>
                    setShowAdminMenu(
                      !showAdminMenu
                    )
                  }
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Admin ▼
                </button>

                {showAdminMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">

                    <Link
                      to="/admin"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📊 Dashboard
                    </Link>

                    <Link
                      to="/admin/products"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📦 Manage Products
                    </Link>

                    <Link
                      to="/admin/add-product"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      ➕ Add Product
                    </Link>

                    <Link
                      to="/admin/users"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      👥 Manage Users
                    </Link>

                    <Link
                      to="/admin/orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📝 Manage Orders
                    </Link>

                    <hr />

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                    >
                      🚪 Logout
                    </button>

                  </div>
                )}

              </div>
            ) : (
              <div className="flex items-center gap-3">

                <Link
                  to="/profile"
                  className="font-medium text-sm hover:text-indigo-600"
                >
                  Hi, {user.name}
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Logout
                </button>

              </div>
            )
          ) : (
            <Link
              to="/login"
              className="hover:text-indigo-600"
            >
              <FaUser size={22} />
            </Link>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;