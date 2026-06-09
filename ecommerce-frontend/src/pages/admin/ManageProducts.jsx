import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {

  const ok = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!ok) return;

  try {

    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );

    alert("Product Deleted");

    fetchProducts();

  } catch (error) {

    console.log(error);

  }

};

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Manage Products
        </h1>

        <Link
          to="/admin/add-product"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </Link>

      </div>

      <table className="w-full border">

        <thead className="bg-gray-200">

          <tr>

            <th className="p-3">Image</th>

            <th>Name</th>

            <th>Category</th>

            <th>Price</th>

            <th>Stock</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product._id}
              className="border-b text-center"
            >

              <td className="p-2">
      <img
  src={
    product.image.startsWith("http")
      ? product.image
      : `http://localhost:5000${product.image}`
  }
  alt={product.name}
  className="w-20 h-20 object-cover rounded"
/>
              </td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>₹{product.price}</td>

              <td>{product.stock}</td>
               <td>

  <button
    onClick={() =>
      deleteProduct(product._id)
    }
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
  >
    Delete
  </button>

</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ManageProducts;