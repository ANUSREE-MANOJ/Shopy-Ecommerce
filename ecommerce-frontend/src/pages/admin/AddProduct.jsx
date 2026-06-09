import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
    stock: "",
  });

  const [imageFile, setImageFile] =
    useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append(
        "name",
        formData.name
      );

      data.append(
        "description",
        formData.description
      );

      data.append(
        "price",
        formData.price
      );

      data.append(
        "category",
        formData.category
      );

      data.append(
        "stock",
        formData.stock
      );

      data.append(
        "imageUrl",
        formData.imageUrl
      );

      if (imageFile) {
        data.append(
          "imageFile",
          imageFile
        );
      }

      await axios.post(
        "http://localhost:5000/api/products",
        data,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert(
        "Product Added Successfully!"
      );

      navigate("/admin/products");

    } catch (error) {

      console.log(error);

      alert(
        "Failed to Add Product"
      );

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Image URL */}

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (Optional)"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <p className="text-center font-semibold text-gray-500">
            OR
          </p>

          {/* Upload Image */}

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(
                e.target.files[0]
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          {/* Preview */}

          {imageFile && (
            <img
              src={URL.createObjectURL(
                imageFile
              )}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-lg mx-auto"
            />
          )}

          {/* URL Preview */}

          {formData.imageUrl && (
            <img
              src={
                formData.imageUrl
              }
              alt="Preview"
              className="w-40 h-40 object-cover rounded-lg mx-auto"
            />
          )}

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProduct;