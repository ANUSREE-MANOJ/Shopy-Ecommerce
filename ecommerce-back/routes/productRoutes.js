import express from "express";
import upload from "../middleware/upload.js";

import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get single product
router.get("/:id", getProductById);

// Add product (supports image URL or uploaded file)
router.post(
  "/",
  upload.single("imageFile"),
  addProduct
);

router.delete("/:id", deleteProduct);

export default router;