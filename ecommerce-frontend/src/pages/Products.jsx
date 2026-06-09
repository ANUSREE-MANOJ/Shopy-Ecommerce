import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState(50000);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase()) &&
      product.price <= maxPrice
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        All Products
      </h1>

      {/* Filters */}

      <div className="bg-white p-5 rounded-xl shadow mb-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 font-semibold">
              Filter by Product Name
            </label>

            <input
              type="text"
              placeholder="Search product..."
              value={nameFilter}
              onChange={(e) =>
                setNameFilter(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Max Price: ₹{maxPrice}
            </label>

            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(
                  Number(e.target.value)
                )
              }
              className="w-full"
            />

          </div>

        </div>

      </div>

      {filteredProducts.length === 0 ? (

        <div className="text-center text-2xl font-semibold text-gray-500 mt-20">
          No Products Found
        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            )
          )}

        </div>

      )}

    </div>
  );
}

export default Products;