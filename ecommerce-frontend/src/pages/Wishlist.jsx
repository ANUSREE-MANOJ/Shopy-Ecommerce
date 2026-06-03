import { useSelector } from "react-redux";

function Wishlist() {

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );
console.log(wishlistItems);

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        My Wishlist ❤️
      </h1>

      {wishlistItems.length === 0 ? (
        <h2 className="text-xl text-gray-500">
          No items in wishlist
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">

                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  ₹ {item.price}
                </p>

                <p className="mt-2">
                  ⭐ {item.rating}
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  )
}

export default Wishlist;