import products from "../../assets/product";

function ManageProducts() {
  return (
    <div className="p-8">

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Manage Products
        </h1>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          Add Product
        </button>

      </div>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-100">

            <th className="p-3">ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>

          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t text-center"
            >
              <td className="p-3">
                {product.id}
              </td>

              <td>{product.name}</td>

              <td>₹{product.price}</td>

              <td>
                <button className="bg-yellow-500 px-3 py-1 rounded mr-2">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded">
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