import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import {
  increaseQty,
  decreaseQty,
} from "../redux/slices/cartSlice";
function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-6 border-b py-4"
            >

              <img
  src={
    item.image.startsWith("http")
      ? item.image
      : `${import.meta.env.VITE_API_URL}${item.image}`
  }
  alt={item.name}
  className="w-24 h-24 object-cover"
  onError={(e) => {
    e.target.src = "https://picsum.photos/200";
  }}
/>

              <div className="flex-1">

                <h2 className="font-semibold">
                  {item.name}
                </h2>

                <p>
                  ₹ {item.price}
                </p>

               <div className="flex items-center gap-3 mt-2">

  <button
    onClick={() => dispatch(decreaseQty(item._id))}
    className="bg-gray-200 px-3 py-1 rounded"
  >
    -
  </button>

  <span>
    {item.quantity}
  </span>

  <button
    onClick={() => dispatch(increaseQty(item._id))}
    className="bg-gray-200 px-3 py-1 rounded"
  >
    +
  </button>

</div>

<p className="font-semibold mt-2">
  Subtotal: ₹ {item.price * item.quantity}
</p>

              </div>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item._id))
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>

            </div>
          ))}

          <div className="mt-8 text-right">

            <h2 className="text-3xl font-bold">
              Total: ₹ {total}
            </h2>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;