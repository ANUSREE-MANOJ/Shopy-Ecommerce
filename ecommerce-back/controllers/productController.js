import Product from "../models/Product.js";

export const addProduct = async (
  req,
  res
) => {
  try {

    const {
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    } = req.body;

    let image = imageUrl;

    if (req.file) {

      image =
        "/uploads/" +
        req.file.filename;

    }

    const product =
      await Product.create({

        name,
        description,
        price,
        image,
        category,
        stock,

      });

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const getProductById = async (
  req,
  res
) => {
  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const getProducts = async (
  req,
  res
) => {
  try {

    const products =
      await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};