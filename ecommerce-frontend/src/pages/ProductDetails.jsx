import { useParams } from "react-router-dom";
import products from "../assets/product";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";



function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-4">
            <FaStar className="text-yellow-500" />
            <span>{product.rating}</span>
          </div>

          <h2 className="text-3xl font-bold mt-6 text-indigo-600">
            ₹ {product.price}
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            Experience premium quality and performance with this product.
            Designed for comfort, durability, and everyday use.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
              onClick={() => dispatch(addToCart(product))}
>
              Add To Cart
            </button>

            <button className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;