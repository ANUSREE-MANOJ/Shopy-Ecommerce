import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
    stock: "",
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`
      );

      setFormData({
        name: res.data.name,
        description: res.data.description,
        price: res.data.price,
        imageUrl: res.data.image.startsWith("http")
          ? res.data.image
          : "",
        category: res.data.category,
        stock: res.data.stock,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("stock", formData.stock);
      data.append("imageUrl", formData.imageUrl);

      if (imageFile) {
        data.append("imageFile", imageFile);
      }

      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product Updated Successfully");

      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Edit Product
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

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(e.target.files[0])
            }
            className="w-full border p-3 rounded-lg"
          />

          {imageFile && (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Preview"
              className="w-40 h-40 object-cover rounded mx-auto"
            />
          )}

          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="w-40 h-40 object-cover rounded mx-auto"
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
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Update Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProduct;