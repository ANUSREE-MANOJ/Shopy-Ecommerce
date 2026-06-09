import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";
function ProductCard({ product }) {

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const handleWishlist = (e) => {
    e.preventDefault();
  dispatch(addToWishlist(product));

    // Add wishlist logic later
    alert(`${product.name} added to wishlist ❤️`);
  };

  return (
    <Link to={`/products/${product._id}`}>

      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

        {/* Product Image */}

        <div className="relative">

          <img
  src={
    product.image?.startsWith("http")
      ? product.image
      : `http://localhost:5000${product.image}`
  }
  alt={product.name}
  className="h-56 w-full object-cover"
  onError={(e) => {
    e.target.src = "https://picsum.photos/400/300";
  }}
/>
          {/* Wishlist Icon */}

          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <FaHeart className="text-red-500 text-lg" />
          </button>

        </div>

        {/* Product Info */}

        <div className="p-4">

          <h2 className="text-lg font-semibold line-clamp-1">
            {product.name}
          </h2>

          <p className="text-gray-600 mt-2 text-lg font-bold">
            ₹ {product.price}
          </p>

          <div className="flex items-center gap-2 mt-2">

            <FaStar className="text-yellow-500" />

            <span className="text-gray-700">
              {product.rating}
            </span>

          </div>

          {/* Add To Cart */}

          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </Link>
  );
}

export default ProductCard;