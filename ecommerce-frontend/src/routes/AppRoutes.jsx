import { Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import Home from "../pages/Home";
import Products from "../pages/Products";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageOrders from "../pages/admin/ManageOrders";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageProducts from "../pages/admin/ManageProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

function AppRoutes() {
  return (
    <Routes>

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
  path="/wishlist"
  element={<Wishlist />}
/>
<Route
        path="/admin"
        element={<AdminDashboard />}
      />
      <Route
  path="/admin/products"
  element={<ManageProducts />}
/>



<Route
  path="/admin/orders"
  element={<ManageOrders />}
/>

<Route
  path="/admin/users"
  element={<ManageUsers />}
/>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route
  path="/cart"
  element={<Cart />}
/>
    </Routes>
  );
}

export default AppRoutes;