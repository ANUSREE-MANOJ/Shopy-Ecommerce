import { Link } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
function Navbar() {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

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


  <Link to="/products">Products</Link>

  

</div>
        {/* Icons */}

        <div className="flex items-center gap-6 text-xl">
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

          {/* Login */}

          <Link
            to="/login"
            className="hover:text-indigo-600"
          >
            <FaUser size={22} />
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;