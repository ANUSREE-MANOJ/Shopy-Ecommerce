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
  src={product.image}
  alt={product.name}
  className="w-20 h-20 object-cover mx-auto rounded"
  onError={(e) => {
    e.target.src = "https://picsum.photos/200";
  }}
/>
              </td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>₹{product.price}</td>

              <td>{product.stock}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ManageProducts;