import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageProducts from "../pages/admin/ManageProducts";
import ManageOrders from "../pages/admin/ManageOrders";
import ManageUsers from "../pages/admin/ManageUsers";
import AddProduct from "../pages/admin/AddProduct";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected User Routes */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute>
            <ManageProducts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute>
            <ManageOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <ManageUsers />
          </ProtectedRoute>
        }
      />

    <Route
  path="/admin/add-product"
  element={
    <AdminRoute>
      <AddProduct />
    </AdminRoute>
  }
/>

    </Routes>
  );
}

export default AppRoutes;